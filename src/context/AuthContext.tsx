'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'kakao' | 'naver' | 'google';
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  login: (provider: 'kakao' | 'naver' | 'google') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for simulated login session
    try {
      const savedUser = localStorage.getItem('fluent_ai_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (provider: 'kakao' | 'naver' | 'google') => {
    const providerNames: Record<string, string> = {
      kakao: '카카오 회원',
      naver: '네이버 회원',
      google: '구글 회원'
    };
    
    const mockUser: UserProfile = {
      id: `${provider}_${Date.now().toString().slice(-6)}`,
      name: `${providerNames[provider]} (유창한 크루)`,
      email: `user_${provider}@example.com`,
      avatar: provider === 'kakao' 
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
        : provider === 'naver'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      provider,
    };

    setUser(mockUser);
    localStorage.setItem('fluent_ai_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fluent_ai_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
