'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'kakao' | 'naver' | 'google' | 'email' | 'credentials';
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signupWithEmail: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginWithKakao: () => void;
  login: (provider: 'kakao' | 'naver' | 'google') => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  loginWithEmail: async () => ({ success: false }),
  signupWithEmail: async () => ({ success: false }),
  loginWithKakao: () => {},
  login: () => {},
  logout: async () => {},
  refreshSession: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch session from real server endpoint
  const refreshSession = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
          try {
            localStorage.setItem('fluent_ai_user', JSON.stringify(data.user));
          } catch {}
          return;
        }
      }
      // Fallback to localStorage if server session not yet set
      const savedUser = localStorage.getItem('fluent_ai_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }
    } catch {
      try {
        const savedUser = localStorage.getItem('fluent_ai_user');
        if (savedUser) setUser(JSON.parse(savedUser));
      } catch {}
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  // Email + Password Login
  const loginWithEmail = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || '로그인에 실패했습니다.' };
      }
      setUser(data.user);
      try {
        localStorage.setItem('fluent_ai_user', JSON.stringify(data.user));
      } catch {}
      return { success: true };
    } catch {
      return { success: false, error: '서버 연결에 실패했습니다. 다시 시도해 주세요.' };
    }
  };

  // Email + Password Sign Up
  const signupWithEmail = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || '회원가입에 실패했습니다.' };
      }
      setUser(data.user);
      try {
        localStorage.setItem('fluent_ai_user', JSON.stringify(data.user));
      } catch {}
      return { success: true };
    } catch {
      return { success: false, error: '서버 연결에 실패했습니다. 다시 시도해 주세요.' };
    }
  };

  // Kakao OAuth redirect
  const loginWithKakao = () => {
    window.location.href = '/api/auth/kakao';
  };

  // Fallback demo login for Naver/Google
  const login = (provider: 'kakao' | 'naver' | 'google') => {
    if (provider === 'kakao') {
      loginWithKakao();
      return;
    }
    const providerNames: Record<string, string> = {
      naver: '네이버 회원',
      google: '구글 회원',
    };
    const mockUser: UserProfile = {
      id: `${provider}_${Date.now().toString().slice(-6)}`,
      name: `${providerNames[provider] || '회원'} (유창한 크루)`,
      email: `user_${provider}@example.com`,
      avatar:
        provider === 'naver'
          ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
          : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      provider,
    };
    setUser(mockUser);
    try {
      localStorage.setItem('fluent_ai_user', JSON.stringify(mockUser));
    } catch {}
  };

  // Logout from real server & client
  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setUser(null);
    try {
      localStorage.removeItem('fluent_ai_user');
    } catch {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        loginWithEmail,
        signupWithEmail,
        loginWithKakao,
        login,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
