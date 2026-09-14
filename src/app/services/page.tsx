'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Lock, ArrowRight, Check, Sparkles, MessageCircle } from 'lucide-react';

export default function ServicesPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const existing = JSON.parse(localStorage.getItem('fluent_ai_notify_emails') || '[]');
      existing.push({ page: 'services', email, date: new Date().toISOString() });
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
          <span>맞춤 제작 의뢰 서비스 준비 중 (COMING SOON)</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            웹사이트 & AI 영상 맞춤 외주 서비스를 <br />
            <span className="text-indigo-600">더 완벽한 프로덕션으로</span> 준비 중입니다
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            정확한 실시간 견적 산출 시스템과 고품질 납품 프로세스 정비를 위해 현재 비공개 테스트를 진행하고 있습니다. <br className="hidden sm:inline" />
            정식 오픈 시 파격적인 첫 의뢰 할인 프로모션을 진행할 예정입니다.
          </p>
        </div>

        {/* Sneak peek preview box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm text-left space-y-4 max-w-xl mx-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">제작 의뢰 오픈 예정 서비스</div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>평균 7일 완성 고반응형 Next.js 브랜드 웹사이트 구축</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>평균 3일 완성 4K 시네마틱 AI 홍보영상 & 숏폼 패키지</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span>온더샵 전담 디렉터 1:1 맞춤 기획 및 실시간 투명 견적 시스템</span>
            </li>
          </ul>

          {/* Email Notify Form */}
          <div className="pt-4 border-t border-slate-100">
            {submitted ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>의뢰 오픈 알림 신청이 완료되었습니다! 오픈 시 우선 상담권을 드립니다.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">제작 의뢰 오픈 시 첫 의뢰 30% 할인 알림 받기</label>
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
                    알림 신청
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
