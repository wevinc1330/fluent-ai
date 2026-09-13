'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Check, 
  ArrowRight, 
  Bell,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ToolsPage() {
  const [testerEmail, setTesterEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const tools = [
    {
      id: 'tool-1',
      title: '유창한 쇼츠메이커 (Fluent Shorts Bot)',
      badge: '출시 준비 중',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      category: '유튜브/인스타 영상 자동화 데스크톱 프로그램',
      desc: '키워드와 주제를 입력하면 AI가 대본 작성, AI 보이스 합성, 스톡 영상 매칭 및 자막 싱크까지 워크플로우를 자동화하는 프로그램으로 기획 및 개발 중입니다.',
      features: [
        '최신 AI 모델 기반 바이럴 대본 생성',
        '고품질 한국어 AI 성우 음성 합성 연동',
        '영상 소스 매칭 및 자막 자동 생성',
        'Windows / Mac 지원 예정'
      ],
      price: '오픈 시 얼리버드 특가 공개',
      status: '개발 진행 중 (COMING SOON)'
    },
    {
      id: 'tool-2',
      title: 'AI 데이터 매니저 (AutoData Pro)',
      badge: '출시 준비 중',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      category: '파이썬 기반 업무 자동화 유틸리티',
      desc: '대량의 엑셀 상품 데이터 정리, 리뷰 감정 분석, 분류 태깅을 AI API와 연동하여 자동으로 처리하는 업무 자동화 솔루션으로 준비하고 있습니다.',
      features: [
        '비전공자도 손쉽게 실행 가능한 직관적 UI',
        'API 비용 최적화 캐싱 설계',
        '대용량 엑셀/CSV 데이터 일괄 처리 지원',
        '로컬 환경 데이터 안전 처리'
      ],
      price: '오픈 시 얼리버드 특가 공개',
      status: '개발 진행 중 (COMING SOON)'
    },
    {
      id: 'tool-3',
      title: '프롬프트허브 SaaS (PromptHub Cloud)',
      badge: '기획 및 설계 중',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
      category: '팀 & 크리에이터 전용 클라우드 SaaS',
      desc: '자주 쓰는 프롬프트를 버전별로 보관하고, 웹에서 바로 테스트하며 팀원이나 구독자와 안전하게 공유할 수 있는 클라우드 웹 플랫폼입니다.',
      features: [
        '프롬프트 버전 관리 및 히스토리 보관',
        '웹 기반 즉각 프롬프트 테스트',
        '팀원 협업 워크스페이스 제공 예정',
        '크리에이터 프롬프트 마켓플레이스 연계'
      ],
      price: '오픈 시 얼리버드 특가 공개',
      status: '기획 진행 중 (COMING SOON)'
    }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testerEmail) return;
    setRegistered(true);
    setTesterEmail('');
    setTimeout(() => setRegistered(false), 4000);
  };

  const scrollToBeta = () => {
    const el = document.getElementById('beta-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold text-slate-600 mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            AI 도구 & SaaS 준비 중 (COMING SOON)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            유창한 AI 자체 개발 도구 & SaaS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              정식 출시 준비 중입니다
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            실무에서 발생하는 반복 작업을 AI로 자동화하고 생산성을 극대화하기 위한 
            자체 소프트웨어와 SaaS를 정성껏 개발 중입니다. 출시 시 알림을 먼저 받아보세요!
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToBeta}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-xs font-bold text-white shadow-xs transition-all"
            >
              <Bell className="w-4 h-4" />
              출시 사전 알림 & 베타 테스터 신청
            </button>
            <a
              href="https://open.kakao.com/o/sR2MZnNi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] px-5 py-3 text-xs font-bold text-[#191919] shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              도구 개발 제안 및 카톡 문의
            </a>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                  <span className="text-xs text-amber-700 font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {tool.status}
                  </span>
                </div>

                <span className="text-xs text-slate-500 font-semibold">{tool.category}</span>
                <h2 className="text-xl font-bold text-slate-900 mt-1 mb-3 group-hover:text-indigo-600 transition-colors">
                  {tool.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tool.desc}
                </p>

                {/* Features */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                  {tool.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-slate-500">가격 정책</span>
                  <span className="text-sm font-bold text-slate-800">{tool.price}</span>
                </div>

                <button
                  onClick={scrollToBeta}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 hover:border-indigo-300 text-slate-700 py-3 text-xs font-bold transition-all"
                >
                  <Bell className="w-3.5 h-3.5 text-indigo-600" />
                  오픈 시 사전 알림 받기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Beta tester application */}
        <div id="beta-section" className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 text-center shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-slate-900">신규 도구 & SaaS 사전 알림 및 베타 테스터 모집</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            이메일을 남겨주시면 프로그램 및 웹 서비스가 준비되는 즉시 무료 체험 초대장과 
            정식 출시 얼리버드 특별 할인 혜택을 가장 먼저 보내드립니다.
          </p>

          <form onSubmit={handleRegister} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={testerEmail}
              onChange={(e) => setTesterEmail(e.target.value)}
              placeholder="이메일을 입력해 주세요"
              className="flex-1 rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-xs"
            >
              사전 알림 등록
            </button>
          </form>

          {registered && (
            <div className="mt-3 text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5 animate-fade-in">
              <Check className="w-4 h-4" />
              사전 등록 완료! 서비스 공개 시 이메일로 초대장을 가장 먼저 보내드립니다.
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
            <Link
              href="/checkout"
              className="text-[11px] text-slate-400 hover:text-indigo-600 transition-colors"
            >
              [토스페이먼츠 연동 테스트 페이지]
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
