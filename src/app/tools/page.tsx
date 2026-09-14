'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Search, 
  ExternalLink, 
  Star, 
  Download, 
  Zap, 
  Video, 
  Image, 
  Code, 
  FileText, 
  Music,
  ShieldCheck
} from 'lucide-react';

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [betaModalTool, setBetaModalTool] = useState<string | null>(null);
  const [betaEmail, setBetaEmail] = useState('');
  const [betaSubmitted, setBetaSubmitted] = useState(false);

  // In-house proprietary tools
  const inHouseTools = [
    {
      id: 'tool-1',
      title: '유창한 쇼츠메이커 (Fluent Shorts Bot)',
      badge: 'BETA 출시',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      category: '유튜브/인스타 영상 자동화 데스크톱 솔루션',
      desc: '키워드와 주제만 넣으면 바이럴 대본 기획, 4K 비디오 생성, AI 성우 음성 합성, 자막 싱크까지 원클릭으로 숏폼 1편을 생성합니다.',
      features: [
        '최신 AI 모델 기반 3초 후킹 대본 자동 기획',
        '한국어 자연스러운 감정형 AI 성우 보이스',
        '자동 자막 싱크 및 배경음악 믹싱',
        'Windows / Mac 완벽 호환 데스크톱 앱'
      ],
      price: '월 39,000원 (얼리버드 특가)',
      checkoutUrl: '/checkout?item=tool-1'
    },
    {
      id: 'tool-2',
      title: 'AI 엑셀 데이터 매니저 (AutoData Pro)',
      badge: 'LIVE',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      category: '업무 자동화 및 대량 데이터 분석 RPA',
      desc: '수천 행의 엑셀 상품명 정리, 고객 리뷰 감정 분석, 카테고리 태깅을 비전공자도 마우스 클릭 몇 번으로 끝내는 파이썬 유틸리티입니다.',
      features: [
        '복잡한 파이썬 설치 없이 1초 실행 직관적 UI',
        'OpenAI / Claude API 캐싱으로 비용 80% 절감',
        '대용량 엑셀/CSV 일괄 처리 지원',
        '내 PC에서 직접 처리하여 데이터 유출 걱정 제로'
      ],
      price: '79,000원 (평생 라이선스)',
      checkoutUrl: '/checkout?item=tool-2'
    }
  ];

  // Curated Best AI Tools 2026
  const curatedTools = [
    {
      name: 'ChatGPT-4o',
      vendor: 'OpenAI',
      category: 'text',
      categoryName: '텍스트/기획',
      rating: 4.9,
      desc: '자연스러운 한국어 대화, 멀티모달 이미지 분석 및 비즈니스 문서 초안 작성의 표준 AI.',
      pricing: '무료 / 월 $20',
      url: 'https://chatgpt.com',
      tag: '필수 툴'
    },
    {
      name: 'Claude 3.7 Sonnet',
      vendor: 'Anthropic',
      category: 'code',
      categoryName: '코딩/개발',
      rating: 5.0,
      desc: '추론 능력과 긴 코딩 문맥 파악에서 현존 최강의 성능을 자랑하는 개발자 필수 AI.',
      pricing: '무료 / 월 $20',
      url: 'https://claude.ai',
      tag: '강력 추천'
    },
    {
      name: 'Midjourney v6',
      vendor: 'Midjourney',
      category: 'image',
      categoryName: 'AI 이미지',
      rating: 4.9,
      desc: '실사 극사실주의 포토그래피와 판타지 일러스트레이션까지 최고의 퀄리티를 구현하는 이미지 생성 AI.',
      pricing: '월 $10부터',
      url: 'https://midjourney.com',
      tag: '업계 1위'
    },
    {
      name: 'Runway Gen-3 Alpha',
      vendor: 'Runway',
      category: 'video',
      categoryName: 'AI 영상',
      rating: 4.8,
      desc: '영화급 시네마틱 모션과 정교한 카메라 앵글 제어가 가능한 비디오 생성 생성형 AI.',
      pricing: '월 $12부터',
      url: 'https://runwayml.com',
      tag: '시네마틱'
    },
    {
      name: 'Kling AI',
      vendor: 'Kuaishou',
      category: 'video',
      categoryName: 'AI 영상',
      rating: 4.9,
      desc: '물리 엔진 시뮬레이션과 고화질 1080p 숏폼 영상 생성에서 압도적 인기를 끄는 영상 AI.',
      pricing: '무료 크레딧 제공',
      url: 'https://klingai.com',
      tag: 'HOT 인기'
    },
    {
      name: 'ElevenLabs',
      vendor: 'ElevenLabs',
      category: 'voice',
      categoryName: '음성/보이스',
      rating: 4.9,
      desc: '내 목소리를 1분 만에 완벽 복제하고 감정과 억양까지 실시간 제어하는 글로벌 1위 보이스 AI.',
      pricing: '무료 / 월 $5부터',
      url: 'https://elevenlabs.io',
      tag: '더빙 1위'
    },
    {
      name: 'Cursor',
      vendor: 'Anysphere',
      category: 'code',
      categoryName: '코딩/개발',
      rating: 5.0,
      desc: 'VS Code 기반으로 전체 코드베이스를 이해하고 실시간으로 리팩토링하는 차세대 AI 에디터.',
      pricing: '무료 / 월 $20',
      url: 'https://cursor.com',
      tag: '개발 필수'
    },
    {
      name: 'Suno AI',
      vendor: 'Suno',
      category: 'voice',
      categoryName: '음성/음악',
      rating: 4.8,
      desc: '가사와 장르 스타일만 입력하면 완성된 보컬 음원과 BGM을 30초 만에 작곡하는 음악 AI.',
      pricing: '무료 / 월 $8부터',
      url: 'https://suno.com',
      tag: '작곡 혁명'
    },
    {
      name: 'Perplexity',
      vendor: 'Perplexity AI',
      category: 'text',
      categoryName: '텍스트/리서치',
      rating: 4.8,
      desc: '실시간 웹 검색과 최신 출처 링크를 명확히 제시하여 시장 조사와 논문 분석을 극대화하는 검색 AI.',
      pricing: '무료 / 월 $20',
      url: 'https://perplexity.ai',
      tag: '리서치'
    }
  ];

  const filteredCurated = curatedTools.filter(t => {
    const matchesCat = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesQuery = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleBetaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!betaEmail) return;
    setBetaSubmitted(true);
    setTimeout(() => {
      setBetaSubmitted(false);
      setBetaModalTool(null);
      setBetaEmail('');
    }, 2500);
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

        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
            <Cpu className="w-4 h-4 text-indigo-600" />
            <span>유창한 AI 연구소 자체 개발 솔루션 & 엄선 디렉토리</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            생산성을 10배 끌어올리는 <br />
            <span className="text-indigo-600 underline decoration-indigo-300">최고의 AI 도구 & SaaS</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            유창한 AI가 직접 개발한 자동화 유틸리티와 전 세계 상위 1% 크리에이터들이 검증한 <br className="hidden sm:inline" />
            핵심 AI 툴 라인업을 한곳에서 살펴보고 즉시 업무에 도입하세요.
          </p>
        </div>

        {/* Section 1: In-house Proprietary Tools */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">유창한 AI 자체 제작 소프트웨어</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inHouseTools.map((tool) => (
              <div 
                key={tool.id}
                className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md flex flex-col justify-between hover:border-indigo-300 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                    <span className="text-xs font-bold text-indigo-600">{tool.price}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{tool.title}</h3>
                  <div className="text-xs font-bold text-slate-500">{tool.category}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{tool.desc}</p>
                  
                  <ul className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    {tool.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <Link
                    href={tool.checkoutUrl}
                    className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold text-center shadow-xs transition-colors"
                  >
                    지금 바로 구매/예약하기
                  </Link>
                  <button
                    type="button"
                    onClick={() => setBetaModalTool(tool.title)}
                    className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    무료 체험 신청
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Curated Best Global AI Tools */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">2026 추천 AI 도구 디렉토리</h2>
              <p className="text-xs text-slate-600 mt-1">분야별로 가장 많이 쓰이고 검증된 글로벌 툴을 엄선했습니다.</p>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="도구 이름 또는 기능 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
              />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {[
              { id: 'all', label: '전체' },
              { id: 'video', label: 'AI 영상/숏폼' },
              { id: 'image', label: 'AI 이미지' },
              { id: 'code', label: '코딩/개발' },
              { id: 'text', label: '텍스트/기획' },
              { id: 'voice', label: '음성/보이스' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCurated.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {item.categoryName}
                    </span>
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.name}</span>
                      <span className="text-xs font-semibold text-slate-400">{item.vendor}</span>
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">{item.pricing}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <span>공식 사이트 열기</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Free Beta Modal */}
      {betaModalTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl space-y-5 border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">무료 베타 체험 신청</h3>
              <button
                onClick={() => setBetaModalTool(null)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                닫기 ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>{betaModalTool}</strong>의 무료 체험 데모 버전 다운로드 링크를 이메일로 즉시 발송해 드립니다.
            </p>

            {betaSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center">
                신청이 완료되었습니다! 5분 내로 이메일을 확인해 주세요 🎉
              </div>
            ) : (
              <form onSubmit={handleBetaSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={betaEmail}
                  onChange={(e) => setBetaEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs cursor-pointer"
                >
                  데모 링크 이메일로 받기
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
