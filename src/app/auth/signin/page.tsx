'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Check, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function SignInPage() {
  const router = useRouter();
  const { login, user } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState<string | null>(null);

  const handleSocialLogin = (provider: 'kakao' | 'naver' | 'google') => {
    setIsLoggingIn(provider);
    setTimeout(() => {
      login(provider);
      setIsLoggingIn(null);
      router.push('/resources');
    }, 900);
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl relative">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-2 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>

        {/* Logo and Intro */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/25">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900">
            유창한 AI 간편 로그인
          </h2>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            3초 만에 소셜 로그인하고 <br />
            무료 프롬프트 자료 다운로드 및 수강생 혜택을 받아보세요.
          </p>
        </div>

        {/* Current user status if logged in */}
        {user ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <p className="text-xs font-bold text-emerald-800">
              현재 <strong>{user.name}</strong> 님으로 로그인되어 있습니다.
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => router.push('/resources')}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-xs"
              >
                자료실 가기
              </button>
            </div>
          </div>
        ) : (
          /* Social Login Buttons */
          <div className="space-y-3 pt-2">
            {/* 1. Kakao */}
            <button
              onClick={() => handleSocialLogin('kakao')}
              disabled={!!isLoggingIn}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] font-bold text-sm transition-all shadow-xs active:scale-95 disabled:opacity-60"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.8 6.7-.2.8-.8 3-1 3.5 0 0-.1.2.1.3.2.1.4 0 .4 0 1.5-1 3.5-2.4 4.1-2.8.6.1 1.1.2 1.6.2 5.5 0 10-3.6 10-8s-4.5-8-10-8z"/>
              </svg>
              <span>{isLoggingIn === 'kakao' ? '카카오 로그인 중...' : '카카오톡으로 3초 시작하기'}</span>
            </button>

            {/* 2. Naver */}
            <button
              onClick={() => handleSocialLogin('naver')}
              disabled={!!isLoggingIn}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-bold text-sm transition-all shadow-xs active:scale-95 disabled:opacity-60"
            >
              <span className="font-black text-lg leading-none">N</span>
              <span>{isLoggingIn === 'naver' ? '네이버 로그인 중...' : '네이버 아이디로 로그인'}</span>
            </button>

            {/* 3. Google */}
            <button
              onClick={() => handleSocialLogin('google')}
              disabled={!!isLoggingIn}
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all shadow-xs active:scale-95 disabled:opacity-60 border border-slate-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>{isLoggingIn === 'google' ? '구글 로그인 중...' : 'Google 계정으로 계속하기'}</span>
            </button>
          </div>
        )}

        {/* Benefits notice */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-indigo-600" />
            <span>별도 비밀번호 기억 없이 원클릭 간편 로그인</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-indigo-600" />
            <span>회원 전용 고화질 프롬프트 모음집 다운로드</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>개인정보보호법에 따른 안전한 데이터 암호화</span>
          </div>
        </div>

        {/* Help Note */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-normal font-medium">
          💡 <strong>운영자 팁</strong>: 실제 도메인 배포 시 카카오/네이버/구글 개발자 센터의 Client ID 및 Secret을 발급받아 환경변수(`.env.local`)에 넣으시면 실제 인증 서버와 즉시 연동됩니다.
        </div>
      </div>
    </div>
  );
}
