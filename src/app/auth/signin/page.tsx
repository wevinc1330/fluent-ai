'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Check, ArrowLeft, Mail, Lock, User as UserIcon, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loginWithEmail, signupWithEmail, loginWithKakao, login, logout, isLoading } = useAuth();

  const [authMode, setAuthMode] = useState<'kakao' | 'login' | 'signup'>('kakao');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Check URL query parameters for oauth errors or messages
  useEffect(() => {
    const error = searchParams.get('error');
    if (error === 'kakao_setup_needed') {
      setErrorMsg('카카오 로그인 설정(REST API 키)이 필요하여 체험용 계정으로 자동 연결되었습니다.');
    } else if (error) {
      setErrorMsg(`로그인 중 오류가 발생했습니다: ${error}`);
    }
  }, [searchParams]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    if (!email || !password) {
      setErrorMsg('이메일과 비밀번호를 모두 입력해 주세요.');
      return;
    }
    setIsSubmitting(true);
    const result = await loginWithEmail(email, password);
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMsg('로그인되었습니다! 자료실로 이동합니다...');
      setTimeout(() => router.push('/resources'), 800);
    } else {
      setErrorMsg(result.error || '로그인에 실패했습니다.');
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    if (!name || !email || !password) {
      setErrorMsg('이름, 이메일, 비밀번호를 모두 입력해 주세요.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }
    setIsSubmitting(true);
    const result = await signupWithEmail(name, email, password);
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMsg('회원가입이 완료되었습니다! 환영합니다 🎉');
      setTimeout(() => router.push('/resources'), 1000);
    } else {
      setErrorMsg(result.error || '회원가입에 실패했습니다.');
    }
  };

  return (
    <div className="min-h-screen py-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="w-full max-w-md space-y-7 rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-xl relative">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>

        {/* Logo and Intro */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/25">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900">
            유창한 AI 로그인
          </h2>
          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
            원클릭 간편 로그인으로 무료 프롬프트 자료 다운로드 및 <br />
            온라인 강의 수강생 전용 혜택을 즉시 이용하세요.
          </p>
        </div>

        {/* Error / Success Alerts */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 font-medium">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-xs text-emerald-700 font-medium">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Current user status if logged in */}
        {user ? (
          <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-center space-y-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full mx-auto border-2 border-indigo-500 shadow-xs object-cover"
            />
            <div>
              <div className="text-sm font-bold text-slate-900">{user.name} 님 환영합니다!</div>
              <div className="text-xs text-slate-600">{user.email}</div>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 uppercase">
                {user.provider} 인증 회원
              </span>
            </div>
            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={() => router.push('/resources')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>자료실 바로가기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={logout}
                className="py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                로그아웃
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Tabs for Login Modes */}
            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-5 text-xs font-bold text-slate-600">
              <button
                type="button"
                onClick={() => { setAuthMode('kakao'); setErrorMsg(null); }}
                className={`py-2 rounded-lg transition-all ${
                  authMode === 'kakao' ? 'bg-white text-indigo-700 shadow-2xs' : 'hover:text-slate-900'
                }`}
              >
                간편 로그인
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('login'); setErrorMsg(null); }}
                className={`py-2 rounded-lg transition-all ${
                  authMode === 'login' ? 'bg-white text-indigo-700 shadow-2xs' : 'hover:text-slate-900'
                }`}
              >
                이메일 로그인
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('signup'); setErrorMsg(null); }}
                className={`py-2 rounded-lg transition-all ${
                  authMode === 'signup' ? 'bg-white text-indigo-700 shadow-2xs' : 'hover:text-slate-900'
                }`}
              >
                이메일 회원가입
              </button>
            </div>

            {/* Mode 1: Kakao 1-Click Social */}
            {authMode === 'kakao' && (
              <div className="space-y-3">
                {/* 1. Kakao Official OAuth */}
                <button
                  type="button"
                  onClick={loginWithKakao}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] font-bold text-sm transition-all shadow-xs active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.8 6.7-.2.8-.8 3-1 3.5 0 0-.1.2.1.3.2.1.4 0 .4 0 1.5-1 3.5-2.4 4.1-2.8.6.1 1.1.2 1.6.2 5.5 0 10-3.6 10-8s-4.5-8-10-8z"/>
                  </svg>
                  <span>카카오톡으로 3초 시작하기</span>
                </button>

                {/* 2. Naver */}
                <button
                  type="button"
                  onClick={() => login('naver')}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-bold text-sm transition-all shadow-xs active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  <span className="font-black text-lg leading-none">N</span>
                  <span>네이버 아이디로 로그인</span>
                </button>

                {/* 3. Google */}
                <button
                  type="button"
                  onClick={() => login('google')}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-all shadow-xs active:scale-95 disabled:opacity-60 border border-slate-300 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Google 계정으로 계속하기</span>
                </button>
              </div>
            )}

            {/* Mode 2: Email Login Form */}
            {authMode === 'login' && (
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">이메일 주소</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">비밀번호</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="비밀번호를 입력하세요"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pb-1">
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('demo@fluentai.kr');
                      setPassword('demo1234');
                    }}
                    className="text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>체험 계정 1초 채우기 (demo@fluentai.kr)</span>
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>로그인 확인 중...</span>
                    </>
                  ) : (
                    <span>이메일 로그인</span>
                  )}
                </button>
              </form>
            )}

            {/* Mode 3: Email Sign Up Form */}
            {authMode === 'signup' && (
              <form onSubmit={handleEmailSignup} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">이름 또는 닉네임</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">이메일 주소</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">비밀번호 (6자 이상)</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="안전한 비밀번호 입력"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>회원가입 처리 중...</span>
                    </>
                  ) : (
                    <span>회원가입 완료하기</span>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Benefits notice */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>회원 전용 고화질 프롬프트 모음집 무제한 다운로드</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>쿠키 기반 보안 세션 암호화로 안전한 로그인 유지</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>개인정보보호법에 따른 안전한 데이터 보호 (온더샵)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-6 h-6 animate-spin text-indigo-600" /></div>}>
      <SignInContent />
    </Suspense>
  );
}
