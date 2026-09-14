'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Layout, 
  Video, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Check, 
  Calculator, 
  Clock, 
  MessageCircle, 
  Wrench, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  FileCheck
} from 'lucide-react';

export default function ServicesPage() {
  // Quote calculator state
  const [serviceType, setServiceType] = useState<'web' | 'video' | 'both'>('web');
  const [pagesCount, setPagesCount] = useState<number>(3);
  const [videoCount, setVideoCount] = useState<number>(2);
  const [needAuthPay, setNeedAuthPay] = useState<boolean>(true);
  const [needCopywriting, setNeedCopywriting] = useState<boolean>(true);

  // Inquiry Form state
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formBudget, setFormBudget] = useState('100만원~300만원');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = 0;
    if (serviceType === 'web' || serviceType === 'both') {
      base += 600000; // Landing page base
      base += Math.max(0, pagesCount - 1) * 150000;
      if (needAuthPay) base += 350000;
      if (needCopywriting) base += 150000;
    }
    if (serviceType === 'video' || serviceType === 'both') {
      base += videoCount * 250000;
    }
    return base;
  };

  const estimatedPrice = calculateEstimate();

  const handleCopyQuote = () => {
    const summary = `[유창한 AI 예상 견적서]\n- 서비스: ${serviceType === 'web' ? '고반응형 웹사이트' : serviceType === 'video' ? 'AI 숏폼/홍보영상' : '웹사이트 + 영상 풀패키지'}\n- 웹 페이지 수: ${pagesCount}페이지\n- 영상 수량: ${videoCount}편\n- 회원/결제 기능: ${needAuthPay ? '포함' : '미포함'}\n- 전문 카피라이팅: ${needCopywriting ? '포함' : '미포함'}\n- 총 예상 견적: 약 ${estimatedPrice.toLocaleString()}원 (VAT 별도)`;
    navigator.clipboard.writeText(summary);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formContact) return;

    // Save to localStorage
    const newInquiry = {
      id: `inquiry_${Date.now()}`,
      name: formName,
      contact: formContact,
      company: formCompany || '개인',
      serviceType,
      estimatedPrice,
      budget: formBudget,
      message: formMessage,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('fluent_ai_inquiries') || '[]');
      existing.unshift(newInquiry);
      localStorage.setItem('fluent_ai_inquiries', JSON.stringify(existing));
    } catch (e) {
      console.error(e);
    }

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Service In-Preparation (준비중) Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="px-2.5 py-1 rounded-md bg-amber-200 text-amber-900 text-xs font-black shrink-0">
              준비 중 (COMING SOON)
            </span>
            <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
              현재 서비스 오픈 준비 중입니다. 지금 바로 이용 가능한 [무료 자료실]에서 최신 프롬프트를 먼저 만나보세요!
            </p>
          </div>
          <Link
            href="/resources"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold whitespace-nowrap shadow-xs transition-colors shrink-0"
          >
            무료 자료실 가기 →
          </Link>
        </div>

        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>최신 AI 기술 기반 초고속 프리미엄 외주 제작 솔루션</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            외주 비용은 <span className="text-indigo-600 underline decoration-indigo-300">1/3로 줄이고</span>, <br />
            납기와 완성도는 압도적으로 높입니다
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            기존 에이전시의 느린 작업 속도와 거품 낀 단가에 지치셨나요? <br className="hidden sm:inline" />
            유창한 AI(온더샵)는 AI 파이프라인으로 영상은 평균 3일, 고반응형 풀스택 웹은 7일 만에 완성합니다.
          </p>
        </div>

        {/* 3 Steps Process */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">맞춤 기획 & 실시간 견적</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              비즈니스 타깃과 목표 전환율을 분석하여 최적의 사양과 합리적인 투명 견적을 30분 내로 산출합니다.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">AI 초고속 프로덕션</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              AI 비주얼 엔진과 최신 웹 프레임워크를 투입하여 3~7일 내에 1차 완성본을 검수받을 수 있습니다.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">무제한 수정 & 실전 배포</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              도메인 연결, 결제 PG 연동, SEO 검색 최적화까지 완벽하게 세팅 후 100% 만족할 때까지 꼼꼼히 납품합니다.
            </p>
          </div>
        </div>

        {/* Calculator + Inquiry Form Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left: Interactive Quote Calculator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <Calculator className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg sm:text-xl font-black text-slate-900">실시간 맞춤 견적 계산기</h2>
            </div>

            {/* Service Select Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">제작 서비스 종류 선택</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setServiceType('web')}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    serviceType === 'web'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  반응형 웹사이트
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('video')}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    serviceType === 'video'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  AI 숏폼/영상
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('both')}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    serviceType === 'both'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  웹 + 영상 패키지
                </button>
              </div>
            </div>

            {/* Options based on service type */}
            {(serviceType === 'web' || serviceType === 'both') && (
              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">웹 페이지 수량</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setPagesCount(Math.max(1, pagesCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="text-xs font-black text-indigo-700 w-8 text-center">{pagesCount}페이지</span>
                    <button
                      type="button"
                      onClick={() => setPagesCount(pagesCount + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <label className="flex items-center justify-between cursor-pointer pt-1">
                  <span className="text-xs text-slate-700 font-medium">소셜 로그인 & 온라인 PG 결제 연동</span>
                  <input
                    type="checkbox"
                    checked={needAuthPay}
                    onChange={(e) => setNeedAuthPay(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs text-slate-700 font-medium">전환율 극대화 전문 카피라이팅 대행</span>
                  <input
                    type="checkbox"
                    checked={needCopywriting}
                    onChange={(e) => setNeedCopywriting(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                </label>
              </div>
            )}

            {(serviceType === 'video' || serviceType === 'both') && (
              <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">AI 숏폼 / 홍보영상 제작 수량</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setVideoCount(Math.max(1, videoCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="text-xs font-black text-purple-700 w-8 text-center">{videoCount}편</span>
                    <button
                      type="button"
                      onClick={() => setVideoCount(videoCount + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500">
                  * 3초 후킹 대본 기획, 4K AI 영상 소스, AI 성우 보이스, 효과음 및 모션 자막 포함
                </p>
              </div>
            )}

            {/* Total Estimated Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-center justify-between shadow-lg">
              <div>
                <div className="text-xs text-slate-400 font-medium">예상 제작 비용 (VAT 별도)</div>
                <div className="text-2xl sm:text-3xl font-black text-indigo-400 mt-1">
                  약 {estimatedPrice.toLocaleString()}원
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyQuote}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              >
                {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileCheck className="w-3.5 h-3.5 text-indigo-400" />}
                <span>{copiedQuote ? '복사 완료!' : '견적서 복사'}</span>
              </button>
            </div>
          </div>

          {/* Right: Fast Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2">간편 제작 의뢰서 접수</h2>
            <p className="text-xs text-slate-600 mb-6">
              작성해주시면 담당 디렉터가 1시간 내로 내용 검토 후 유선 또는 카카오톡으로 상세 상담을 진행해 드립니다.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900">제작 의뢰가 정상 접수되었습니다!</h3>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  남겨주신 연락처({formContact})로 담당 디렉터가 빠르게 연락드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs cursor-pointer"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">담당자 성함 *</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">연락처 (휴대폰 또는 이메일) *</label>
                  <input
                    type="text"
                    required
                    placeholder="010-1234-5678 또는 name@company.com"
                    value={formContact}
                    onChange={(e) => setFormContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">회사명 또는 브랜드명</label>
                  <input
                    type="text"
                    placeholder="온더샵 / 개인"
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">예상 예산 범위</label>
                  <select
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                  >
                    <option value="50만원~100만원">50만원 ~ 100만원</option>
                    <option value="100만원~300만원">100만원 ~ 300만원</option>
                    <option value="300만원~500만원">300만원 ~ 500만원</option>
                    <option value="500만원 이상">500만원 이상 (대규모 프로젝트)</option>
                    <option value="협의 후 결정">협의 후 결정</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">문의 및 요청사항 상세</label>
                  <textarea
                    rows={4}
                    placeholder="만들고자 하는 서비스 또는 영상의 레퍼런스, 필수 요구사항을 자유롭게 적어주세요."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>실시간 무료 상담 신청하기</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                온더샵 보안 계약 보장
              </span>
              <span>평일 10:00~19:00 실시간 상담</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
