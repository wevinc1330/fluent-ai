import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { UserSession } from './auth';

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  salt: string;
  passwordHash: string;
  avatar: string;
  role: 'user' | 'admin';
  provider: 'email';
  createdAt: string;
}

function getFilePath(): string {
  const localPath = path.resolve(process.cwd(), 'src/data/users.json');
  try {
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    // Test write permission
    if (!fs.existsSync(localPath)) {
      fs.writeFileSync(localPath, '[]', 'utf8');
    }
    return localPath;
  } catch {
    // Vercel serverless /tmp fallback
    const tmpPath = path.join('/tmp', 'fluent_users.json');
    if (!fs.existsSync(tmpPath)) {
      try {
        fs.writeFileSync(tmpPath, '[]', 'utf8');
      } catch {}
    }
    return tmpPath;
  }
}

// In-memory cache for fast access & serverless continuity
let memoryUsers: StoredUser[] | null = null;

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

export function loadUsers(): StoredUser[] {
  if (memoryUsers && memoryUsers.length > 0) {
    return memoryUsers;
  }

  const filePath = getFilePath();
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      memoryUsers = JSON.parse(data);
    } else {
      memoryUsers = [];
    }
  } catch {
    memoryUsers = [];
  }

  // Pre-seed default demo account if empty
  if (!memoryUsers || memoryUsers.length === 0) {
    const defaultSalt = crypto.randomBytes(16).toString('hex');
    const defaultUser: StoredUser = {
      id: 'user_demo_001',
      name: '체험회원 (온더샵)',
      email: 'demo@fluentai.kr',
      salt: defaultSalt,
      passwordHash: hashPassword('demo1234', defaultSalt),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      role: 'user',
      provider: 'email',
      createdAt: new Date().toISOString(),
    };
    memoryUsers = [defaultUser];
    saveUsers(memoryUsers);
  }

  return memoryUsers;
}

export function saveUsers(users: StoredUser[]) {
  memoryUsers = users;
  try {
    const filePath = getFilePath();
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
  } catch (e) {
    console.warn('File save failed, using memory cache:', e);
  }
}

export function registerUser(name: string, email: string, password: string): UserSession {
  const users = loadUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const existing = users.find((u) => u.email.toLowerCase() === normalizedEmail);
  if (existing) {
    throw new Error('ALREADY_EXISTS');
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(password, salt);

  const newUser: StoredUser = {
    id: 'user_' + Date.now().toString().slice(-6),
    name: name.trim(),
    email: normalizedEmail,
    salt,
    passwordHash,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    role: 'user',
    provider: 'email',
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    avatar: newUser.avatar,
    provider: newUser.provider,
    role: newUser.role,
    createdAt: newUser.createdAt,
  };
}

export function authenticateUser(email: string, password: string): UserSession | null {
  const users = loadUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const user = users.find((u) => u.email.toLowerCase() === normalizedEmail);
  if (!user) {
    return null;
  }

  const computedHash = hashPassword(password, user.salt);
  if (computedHash !== user.passwordHash) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    provider: user.provider,
    role: user.role,
    createdAt: user.createdAt,
  };
}
