'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, Lock, ArrowRight, Check, Sparkles, Layers } from 'lucide-react';

export default function ToolsPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const existing = JSON.parse(localStorage.getItem('fluent_ai_notify_emails') || '[]');
      existing.push({ page: 'tools', email, date: new Date().toISOString() });
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
          <span>자체 소프트웨어 & SaaS 출시 준비 중 (COMING SOON)</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            AI 자동화 프로그램 & SaaS <br />
            <span className="text-indigo-600">베타 테스트를</span> 진행 중입니다
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            유창한 AI 연구소에서 자체 개발 중인 숏폼 자동화 봇과 업무 효율화 툴들을 <br className="hidden sm:inline" />
            안정적인 완성도를 위해 내부 비공개 테스트 중입니다. 출시 즉시 무료 베타 권한을 드립니다.
          </p>
        </div>

        {/* Sneak peek preview box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-4 max-w-xl mx-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">출시 예정 자체 소프트웨어 라인업</div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>유창한 쇼츠메이커 (Fluent Shorts Bot): 원클릭 숏폼 영상 제작 자동화 데스크톱 앱</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>AutoData Pro: 대량 엑셀 및 리뷰 데이터 자동 분석 파이썬 RPA 솔루션</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>PromptHub Cloud: 팀 & 크리에이터 전용 클라우드 프롬프트 보관 SaaS</span>
            </li>
          </ul>

          {/* Email Notify Form */}
          <div className="pt-4 border-t border-slate-100">
            {submitted ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>출시 알림 신청이 완료되었습니다! 베타 테스트 초대장을 발송해 드릴게요.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">소프트웨어 출시 시 무료 베타 테스터 신청</label>
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
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold whitespace-nowrap transition-colors"
                  >
                    베타 신청
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
            <Sparkles className="w-4 h-4" />
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
