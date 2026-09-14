import { cookies } from 'next/headers';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'kakao' | 'naver' | 'google' | 'email';
  role?: 'user' | 'admin';
  createdAt: string;
}

const COOKIE_NAME = 'fluent_auth_session';

// Encode session payload to safe base64
export function encodeSession(session: UserSession): string {
  const json = JSON.stringify(session);
  return Buffer.from(json).toString('base64');
}

// Decode session payload
export function decodeSession(token: string): UserSession | null {
  try {
    const json = Buffer.from(token, 'base64').toString('utf8');
    return JSON.parse(json) as UserSession;
  } catch (e) {
    return null;
  }
}

// Get current server session from cookies
export async function getSession(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return decodeSession(token);
}

// Set session cookie
export async function setSessionCookie(session: UserSession): Promise<void> {
  const cookieStore = await cookies();
  const token = encodeSession(session);
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

// Clear session cookie
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
