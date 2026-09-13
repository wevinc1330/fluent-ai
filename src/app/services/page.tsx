'use client';

import React, { useState } from 'react';
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
  Wrench
} from 'lucide-react';

export default function ServicesPage() {
  // Quote calculator state
  const [serviceType, setServiceType] = useState<'web' | 'video' | 'both'>('web');
  const [pagesCount, setPagesCount] = useState<number>(3);
  const [videoCount, setVideoCount] = useState<number>(2);
  const [needAuthPay, setNeedAuthPay] = useState<boolean>(true);

  // Inquiry Form state
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formBudget, setFormBudget] = useState('협의 후 결정');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = 0;
    if (serviceType === 'web' || serviceType === 'both') {
      base += 500000;
      base += Math.max(0, pagesCount - 1) * 150000;
      if (needAuthPay) base += 350000;
    }
    if (serviceType === 'video' || serviceType === 'both') {
      base += videoCount * 250000;
    }
    return base;
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formContact) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormName('');
      setFormContact('');
      setFormMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold text-slate-600 mb-4 shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-indigo-600" />
            제작 의뢰 준비 중 (COMING SOON)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            맞춤 웹사이트 & AI 광고 영상 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              정식 오픈 준비 중입니다
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            고객사의 브랜드 가치를 극대화할 수 있도록 제작 프로세스를 정비하고 있습니다. 
            사전 제작 상담이나 빠른 견적 문의는 카카오톡 오픈채팅 또는 아래 폼으로 편하게 남겨주세요!
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://open.kakao.com/o/sR2MZnNi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] px-5 py-3 text-xs font-bold text-[#191919] shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              카카오톡 1:1 사전 상담하기
            </a>
          </div>
        </div>

        {/* 2 Main Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service 1: Website */}
          <div className="glass-panel rounded-3xl p-8 bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[10px] font-bold px-2.5 py-0.5">
                  서비스 준비 중
                </span>
              </div>
              <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">
                WEBSITE DEVELOPMENT
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                고반응형 맞춤 웹사이트 제작
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                모바일, 태블릿, PC 어디서나 부드럽게 반응하며 최신 Next.js와 결제 연동을 지원하는 웹사이트를 준비하고 있습니다.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Next.js & Tailwind CSS 기반 초고속 로딩</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>카카오 / 네이버 / 구글 간편 로그인</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>토스페이먼츠 안전 전자결제 연동</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">오픈 시 정식 접수 예정</span>
              <a
                href="#inquiry"
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
              >
                사전 문의 남기기
              </a>
            </div>
          </div>

          {/* Service 2: AI Video */}
          <div className="glass-panel rounded-3xl p-8 bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <span className="rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[10px] font-bold px-2.5 py-0.5">
                  서비스 준비 중
                </span>
              </div>
              <span className="text-xs font-black text-purple-600 uppercase tracking-wider">
                AI COMMERCIAL VIDEO
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                AI 광고 영상 & 바이럴 숏폼 제작
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                배우나 스튜디오 없이 최신 생성형 AI 모델로 영화 같은 비주얼의 광고 및 숏폼 영상을 제작하는 서비스입니다.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>미드저니 + 최신 비디오 AI 엔진 활용</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>3초 바이럴 후킹 대본 기획 포함</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>초자연적 AI 성우 보이스오버</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">오픈 시 정식 접수 예정</span>
              <a
                href="#inquiry"
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
              >
                사전 문의 남기기
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Quote Calculator */}
        <div className="mb-16 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                예상 견적 시뮬레이터 (참고용)
              </h2>
              <p className="text-xs text-slate-500">
                정식 오픈 전 예상되는 대략적인 비용을 계산해 보실 수 있습니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4 border-t border-slate-200">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  서비스 선택
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    onClick={() => setServiceType('web')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      serviceType === 'web'
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    웹사이트
                  </button>
                  <button
                    onClick={() => setServiceType('video')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      serviceType === 'video'
                        ? 'bg-purple-600 border-purple-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    AI 광고영상
                  </button>
                  <button
                    onClick={() => setServiceType('both')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      serviceType === 'both'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    웹 + 영상 패키지
                  </button>
                </div>
              </div>

              {(serviceType === 'web' || serviceType === 'both') && (
                <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">페이지 수</span>
                    <span className="text-xs font-black text-indigo-700">{pagesCount}개 페이지</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={pagesCount}
                    onChange={(e) => setPagesCount(Number(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </div>
              )}

              {(serviceType === 'video' || serviceType === 'both') && (
                <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">영상 편수</span>
                    <span className="text-xs font-black text-purple-700">{videoCount}편</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={videoCount}
                    onChange={(e) => setVideoCount(Number(e.target.value))}
                    className="w-full accent-purple-600"
                  />
                </div>
              )}
            </div>

            {/* Calculated box */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                예상 견적 (참고용)
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900">
                {calculateEstimate().toLocaleString()}
                <span className="text-lg font-bold text-indigo-600 ml-1">원</span>
              </div>
              <p className="text-[11px] text-slate-500">
                * 상세 기획 및 협의에 따라 변동될 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry" className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">사전 상담 문의 남기기</h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              정보를 남겨주시면 유창한 AI가 확인 후 연락드리겠습니다.
            </p>
          </div>

          <form onSubmit={handleSubmitInquiry} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                성함 / 기업명 *
              </label>
              <input
                type="text"
                required
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="예: 홍길동"
                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                연락처 (휴대폰 또는 이메일) *
              </label>
              <input
                type="text"
                required
                value={formContact}
                onChange={(e) => setFormContact(e.target.value)}
                placeholder="010-0000-0000 또는 email@example.com"
                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                문의 내용
              </label>
              <textarea
                rows={3}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="원하시는 제작 내용이나 참고사항을 적어주세요."
                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              사전 상담 문의 제출하기
            </button>

            {isSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                접수되었습니다! 확인 후 신속히 연락드리겠습니다.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
