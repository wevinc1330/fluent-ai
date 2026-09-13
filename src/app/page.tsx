'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  GraduationCap, 
  Layout, 
  Cpu, 
  Flame, 
  ChevronRight,
  TrendingUp,
  FolderOpen,
  Send,
  MessageCircle
} from 'lucide-react';
import { INITIAL_RESOURCES } from '@/data/resourcesData';
import { INITIAL_PORTFOLIO } from '@/data/portfolioData';

export default function HomePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const topResources = INITIAL_RESOURCES.slice(0, 4);
  const topPortfolios = INITIAL_PORTFOLIO.slice(0, 3);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
      console.warn('Clipboard API not permitted, trying fallback', e);
    }
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const res = document.execCommand('copy');
      document.body.removeChild(textArea);
      return res;
    } catch (err) {
      return false;
    }
  };

  const handleCopyPrompt = async (id: string, promptText: string) => {
    await copyToClipboard(promptText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setSubscribeSuccess(true);
    setSubscribeEmail('');
    setTimeout(() => setSubscribeSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Soft pastel light glow background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-200/50 via-purple-200/40 to-sky-200/50 blur-[110px] pointer-events-none -z-10 rounded-full" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/60 blur-[80px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-bold text-indigo-700 mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI 인플루언서 공식 플랫폼</span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-cyan-700">검증된 실전 노하우</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.25]">
            AI로 일하고 수익을 만드는 법, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              유창한 AI
            </span>
            와 함께 가장 앞서가세요
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            실전에서 검증된 <strong className="text-slate-900 font-bold">100% 무료 프롬프트 & 실전 노하우</strong>부터 
            온라인 클래스, 맞춤형 웹사이트 및 AI 비즈니스 솔루션을 순차적으로 선보입니다.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/resources"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] transition-all"
            >
              <Flame className="w-4 h-4 text-amber-300" />
              무료 프롬프트 자료실 바로가기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all"
            >
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              온라인 교육 준비 현황 보기
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">무료 실전 자료 공개</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-indigo-600">실전 최적화</div>
              <div className="text-xs text-slate-500 font-medium">GPT · Claude · Midjourney</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-purple-600">1:1 소통</div>
              <div className="text-xs text-slate-500 font-medium">카카오 오픈채팅 실시간 상담</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-cyan-600">공식 연동</div>
              <div className="text-xs text-slate-500 font-medium">토스페이먼츠 시스템 탑재</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Free Resources Spotlight */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Flame className="w-4 h-4 text-rose-500" />
                지금 바로 사용하는 무료 혜택
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                인기 무료 프롬프트 & 스킬 TOP 4
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                복잡한 절차 없이 클릭 한 번으로 복사하여 챗GPT나 미드저니에 바로 붙여넣어 보세요.
              </p>
            </div>
            <Link
              href="/resources"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 group"
            >
              전체 자료실 보러가기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topResources.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-bold text-indigo-700">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      복사 {item.copiedCount.toLocaleString()}회
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Prompt Box */}
                  <div className="mt-4 relative rounded-xl bg-slate-50 border border-slate-200 p-3.5 font-mono text-xs text-slate-800 leading-relaxed overflow-hidden">
                    <div className="line-clamp-3 select-all">
                      {item.prompt}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopyPrompt(item.id, item.prompt)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      copiedId === item.id
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                        : 'bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        복사 완료!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        프롬프트 복사
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Roadmap */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full">
              FUTURE ROADMAP & SERVICES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              '유창한 AI'가 제공할 <br className="sm:hidden" />
              전문 비즈니스 솔루션
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              무료 자료에서 한 단계 더 나아가, 비즈니스 성장을 폭발적으로 가속화할 
              유창한 AI만의 맞춤형 서비스들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: 무료 자료실 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-cyan-500 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                  운영 중 (바로 이용)
                </div>
                <h3 className="text-lg font-bold text-slate-900">무료 프롬프트 라이브러리</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  비즈니스 마케팅, 이미지 생성, 유튜브 쇼츠 대본까지 실전에 검증된 프롬프트를 자유롭게 복사하세요.
                </p>
              </div>
              <Link
                href="/resources"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
              >
                자료실 둘러보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 2: 온라인 교육 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-indigo-600 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-2">
                  준비 중 (COMING SOON)
                </div>
                <h3 className="text-lg font-bold text-slate-900">AI 온라인 마스터 클래스</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  기초부터 업무 자동화, 바이브 코딩으로 웹 서비스 런칭까지 실전 노하우를 압축 전달합니다.
                </p>
              </div>
              <Link
                href="/courses"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                교육 준비 현황 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 3: 웹/영상 외주 제작 */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-purple-600 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center mb-5">
                  <Layout className="w-6 h-6" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-2">
                  준비 중 (COMING SOON)
                </div>
                <h3 className="text-lg font-bold text-slate-900">웹사이트 & AI 광고 영상 제작</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  고전환율 반응형 홈페이지 제작과 시선을 사로잡는 AI 바이럴 숏폼/광고 영상을 맞춤 제작해 드립니다.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
              >
                제작 의뢰 안내 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 4: 소프트웨어 & SaaS */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-t-4 border-t-rose-500 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 mb-2">
                  준비 중 (COMING SOON)
                </div>
                <h3 className="text-lg font-bold text-slate-900">AI 자동화 프로그램 & SaaS</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  반복 업무를 1클릭으로 끝내는 마케팅 자동화 봇과 크리에이터 전용 웹 도구를 곧 공개합니다.
                </p>
              </div>
              <Link
                href="/tools"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-800"
              >
                출시 알림 받기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Portfolio Spotlight (포트폴리오 쇼케이스) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                <FolderOpen className="w-4 h-4 text-indigo-600" />
                작업물 갤러리 & 포트폴리오
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                유창한 AI 포트폴리오
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                실전에 즉시 활용 가능한 고품질 AI 광고 영상과 반응형 웹사이트 작업물을 준비 중입니다.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 group"
            >
              전체 포트폴리오 갤러리 가기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {topPortfolios.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topPortfolios.map((pf) => (
                <Link
                  key={pf.id}
                  href="/portfolio"
                  className="glass-card rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={pf.thumbnail}
                        alt={pf.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-md bg-white/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-extrabold text-indigo-700">
                          {pf.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-[11px] text-slate-400 font-bold mb-1">{pf.client}</div>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {pf.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                        {pf.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-0">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{pf.metrics}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-10 text-center max-w-2xl mx-auto space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center mx-auto">
                <FolderOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">포트폴리오 작업물을 정비 중입니다</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                더 완성도 높은 AI 영상과 웹사이트 포트폴리오를 공개하기 위해 준비하고 있습니다. 
                진행 중인 프로젝트나 사전 상담은 언제든 편하게 문의해 주세요.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-xs"
                >
                  포트폴리오 갤러리 바로가기
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://open.kakao.com/o/sR2MZnNi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] px-4 py-2.5 text-xs font-bold text-[#191919] transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  카카오톡 1:1 상담
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Social Proof & Creator Mission */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-b from-indigo-50/70 to-slate-50 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-1 shadow-md">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">유창한 AI</div>
                    <div className="text-xs text-indigo-600 font-semibold">AI Creator & Solopreneur</div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                  "AI는 기술이 아니라 레버리지입니다. 
                  남들이 10시간 걸릴 일을 10분 만에 끝내고, 혼자서도 기업 수준의 콘텐츠와 서비스를 만들어낼 수 있도록 
                  제가 직접 겪고 검증한 알짜배기 노하우만 나눕니다."
                </p>
                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>유창한 AI 공식 플랫폼</span>
                  <span className="text-indigo-600 font-bold">공식 오픈 준비 중</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                왜 많은 분들이 <span className="text-indigo-600">'유창한 AI'</span>의 자료를 찾을까요?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                    이론이 아닌 100% 실전 중심
                  </div>
                  <p className="text-xs text-slate-600">
                    실제 비즈니스 현장과 유튜브 채널에서 성과를 낸 프롬프트만 선별합니다.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <Check className="w-4 h-4 text-indigo-600" />
                    초보자도 1분 복사 적용
                  </div>
                  <p className="text-xs text-slate-600">
                    설명서 없이도 괄호 안 단어만 바꿔 바로 복사해 붙여넣으면 끝납니다.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <Check className="w-4 h-4 text-purple-600" />
                    지속적인 최신 AI 업데이트
                  </div>
                  <p className="text-xs text-slate-600">
                    새로운 AI 모델(GPT, Claude, 미드저니 등) 업데이트에 맞춰 즉시 프롬프트 개정.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <Check className="w-4 h-4 text-amber-600" />
                    신뢰할 수 있는 토스페이먼츠 연동
                  </div>
                  <p className="text-xs text-slate-600">
                    유료 교육 및 서비스 결제 시 가장 안전하고 빠른 토스 간편결제 시스템 적용.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter / Subscription CTA */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-indigo-200 bg-white p-8 sm:p-12 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              매주 가장 핫한 AI 프롬프트와 신규 자료를 받아보세요
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
              유창한 AI가 직접 발굴한 비공개 꿀팁과 출시 예정 온라인 클래스 얼리버드 할인 혜택을 이메일로 가장 먼저 보내드립니다.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="이메일 주소를 입력해 주세요"
                className="flex-1 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none shadow-2xs"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                무료 구독하기
              </button>
            </form>

            {subscribeSuccess && (
              <div className="mt-3 text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5 animate-fade-in">
                <Check className="w-4 h-4" />
                성공적으로 등록되었습니다! 최신 자료를 메일로 보내드릴게요.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
