'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Lock, ArrowRight, Check, Sparkles, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const existing = JSON.parse(localStorage.getItem('fluent_ai_notify_emails') || '[]');
      existing.push({ page: 'courses', email, date: new Date().toISOString() });
      localStorage.setItem('fluent_ai_notify_emails', JSON.stringify(existing));
    } catch {}
    setSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-2xl text-center space-y-7">
        
        {/* Lock / Coming soon badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold shadow-2xs">
          <Lock className="w-3.5 h-3.5 text-amber-600" />
          <span>온라인 교육 과정 오픈 준비 중 (COMING SOON)</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            AI 올인원 마스터 클래스 <br />
            <span className="text-indigo-600">2026 최신 개정판</span>을 제작 중입니다
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            비전공자도 AI를 1인 기업 무기로 활용할 수 있도록 실전 중심 VOD 커리큘럼을 촬영 및 고도화하고 있습니다. <br className="hidden sm:inline" />
            정식 오픈 시 알림 신청자분들께 50% 얼리버드 특별 수강 혜택을 드립니다.
          </p>
        </div>

        {/* Sneak peek preview box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-4 max-w-xl mx-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">강의 주요 파트 안내 (오픈 예정)</div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>Part 1. 비즈니스 상위 1% 프롬프트 엔지니어링 실전</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>Part 2. 1편 20분 완성 바이럴 AI 숏폼 영상 제작 올인원</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>Part 3. 바이브 코딩으로 내 반응형 웹사이트 직접 만들기</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>Part 4. 1인 AI 크리에이터 외주 및 수익화 로드맵</span>
            </li>
          </ul>

          {/* Email Notify Form */}
          <div className="pt-4 border-t border-slate-100">
            {submitted ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>얼리버드 알림 신청이 완료되었습니다! 오픈 시 50% 할인 코드를 보내드립니다.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">50% 얼리버드 오픈 알림 받기</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="이메일 주소를 입력해 주세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold whitespace-nowrap transition-colors"
                  >
                    얼리버드 예약
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Redirect CTA to free resources */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/resources"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>지금 이용 가능한 [무료 자료실] 가기</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}
