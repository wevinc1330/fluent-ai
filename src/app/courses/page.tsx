'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Gift, 
  Users, 
  Star, 
  ShieldCheck, 
  Play, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Flame,
  Award,
  Video
} from 'lucide-react';

export default function CoursesPage() {
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const curriculum = [
    {
      part: 'Part 1',
      title: '상위 1% 프롬프트 엔지니어링 실전 마스터',
      desc: '단순 질문자를 넘어 AI를 최고급 전문가 팀으로 활용하는 구조화 프롬프트 설계법',
      lessons: [
        '상위 1% 프롬프트 5단계 구조 프레임워크 (Role, Task, Context, Format, Constraint)',
        'Claude 3.7 & ChatGPT 최적 시스템 페르소나 및 Thinking 모드 200% 활용법',
        '기획서, 마케팅 카피, 제안서 10분 만에 초안 완성하는 비즈니스 실전 템플릿',
        '복잡한 데이터 요약 및 논리적 오류 없는 분석 프롬프트'
      ],
      time: '3시간 20분 / 8개 강의'
    },
    {
      part: 'Part 2',
      title: '조회수 100만 터뜨리는 AI 숏폼 영상 제작 올인원',
      desc: '기획부터 대본, 비디오 생성, 보이스 복제, 자동 자막까지 1편 20분 제작 시스템',
      lessons: [
        '시청 지속 시간을 극대화하는 3초 후킹 공식 & 바이럴 대본 알고리즘',
        'Midjourney v6 + Kling AI + Runway Gen-3 고화질 영상 소스 생성법',
        'ElevenLabs를 활용한 자연스러운 감정형 AI 성우 보이스 복제',
        'CapCut 자동 자막 템플릿 및 BGM 사운드 디자인 최적화'
      ],
      time: '4시간 15분 / 11개 강의'
    },
    {
      part: 'Part 3',
      title: '바이브 코딩: 내 아이디어를 실제 웹사이트 & SaaS로 구현하기',
      desc: '코딩 경험이 없어도 AI 코딩 에이전트로 풀스택 반응형 웹과 서비스를 직접 구축',
      lessons: [
        'AI 코딩 어시스턴트(Antigravity/Cursor) 기본 세팅과 프롬프트 코딩 워크플로우',
        'Next.js 16 & Tailwind CSS로 감각적인 초고속 랜딩페이지 제작',
        '카카오 간편 로그인 & 데이터베이스 연동으로 회원 시스템 완성하기',
        '토스페이먼츠 전자결제(PG) 연동 및 Vercel 무료 배포 실전'
      ],
      time: '5시간 30분 / 14개 강의'
    },
    {
      part: 'Part 4',
      title: '반복 업무 종결: 파이썬 & AI 에이전트 업무 자동화(RPA)',
      desc: '매일 반복되는 엑셀 정리, 고객 리뷰 분석, 이메일 발송을 전자동화하는 파이프라인',
      lessons: [
        '엑셀/CSV 대용량 데이터 AI 일괄 분석 및 보고서 자동 추출',
        '네이버/유튜브 최신 트렌드 키워드 크롤링 및 요약 봇 만들기',
        '웹훅(Webhook) 기반 슬랙/카카오톡 알림 자동화 시스템'
      ],
      time: '3시간 40분 / 9개 강의'
    },
    {
      part: 'Part 5',
      title: '1인 AI 크리에이터 수익화 실전 로드맵 (월 500만원 플랜)',
      desc: '학습을 넘어 외주 제작, 교육 상품화, 디지털 파일 판매로 즉시 현금화하는 방법',
      lessons: [
        '크몽, 숨고, 인스타그램에서 외주 수주를 독점하는 포트폴리오 기획법',
        '고객이 먼저 찾아오게 만드는 무료 리드 마그넷(전자책/프롬프트) 배포 전략',
        '견적서 작성 요령 및 클라이언트 단가 3배 올리는 커뮤니케이션 기술'
      ],
      time: '2시간 45분 / 7개 강의'
    }
  ];

  const reviews = [
    {
      name: '김*현 님 (이커머스 대표)',
      tag: '매출 3.8배 상승',
      rating: 5,
      content: '영상 외주비로 매달 수백만원씩 나갔는데, Part 2 숏폼 강의 듣고 혼자서 하루 2편씩 뽑아내고 있습니다. 인스타 릴스 2편이 120만뷰 터지면서 상품 완판됐어요. 가성비 최고입니다.'
    },
    {
      name: '이*우 님 (직장인 겸 N잡러)',
      tag: '첫 외주 150만원 수주',
      rating: 5,
      content: '코딩을 전혀 몰랐는데 바이브 코딩 파트 따라하면서 진짜 웹사이트를 만들고 배포까지 했습니다. 크몽에 포트폴리오 올리자마자 첫 외주 150만원 계약 성공했습니다!'
    },
    {
      name: '박*진 님 (콘텐츠 크리에이터)',
      tag: '구독자 2만 달성',
      rating: 5,
      content: '단순한 이론 강의가 아니라 바로 쓸 수 있는 프롬프트 템플릿과 워크플로우를 그대로 주셔서 시간 낭비 없이 바로 적용할 수 있었습니다. 온더샵 대표님 강의 퀄리티 대박입니다.'
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
            <span>누적 수강생 3,400명 돌파 ・ 2026 최신 개정판 VOD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            AI를 도구가 아닌 <span className="text-indigo-600 underline decoration-indigo-300">내 1인 기업</span>으로 <br />
            수익화하는 실전 올인원 마스터
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            프롬프트 엔지니어링부터 AI 숏폼 영상 제작, 바이브 코딩 웹 개발, 외주 수익화까지. <br className="hidden sm:inline" />
            비전공자도 단 2주 만에 실전 포트폴리오를 완성하고 즉시 수익을 창출하는 커리큘럼입니다.
          </p>

          {/* Key Stats Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-indigo-600">19시간+</div>
              <div className="text-xs text-slate-500 font-medium">총 49개 실전 VOD</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-amber-500">4.9 / 5.0</div>
              <div className="text-xs text-slate-500 font-medium">수강생 만족도</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">100종</div>
              <div className="text-xs text-slate-500 font-medium">실전 프롬프트 사전</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl sm:text-2xl font-black text-purple-600">평생소장</div>
              <div className="text-xs text-slate-500 font-medium">무제한 반복 수강</div>
            </div>
          </div>
        </div>

        {/* Video Preview Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 group">
            <div className="aspect-video w-full relative flex items-center justify-center bg-gradient-to-tr from-slate-950 via-indigo-950/70 to-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80" 
                alt="강의 미리보기" 
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 text-center space-y-4 p-6">
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </button>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white">오리엔테이션 & 실전 시연 미리보기 (5분)</div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">AI 숏폼 1편이 20분 만에 완성되는 전 과정을 직접 확인해보세요</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Packages */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">수강 패키지 선택</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">지금 등록 시 얼리버드 50% 특가 및 VIP 특전이 제공됩니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Plan 1: Starter */}
            <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                  입문용 스타터
                </span>
                <h3 className="text-xl font-bold text-slate-900">AI 입문 & 프롬프트 패스</h3>
                <p className="text-xs text-slate-600">AI를 처음 시작하는 분들을 위한 프롬프트 기초 및 업무 효율화</p>
                <div className="pt-2">
                  <div className="text-xs text-slate-400 line-through">정가 99,000원</div>
                  <div className="text-3xl font-black text-slate-900">49,000원</div>
                </div>
                <ul className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Part 1 전체 VOD (3시간 20분)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>실전 비즈니스 프롬프트 30종 PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>질의응답 Q&A 게시판 이용권</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/checkout?item=course_starter"
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center block transition-all shadow-xs"
              >
                스타터 패스 신청하기
              </Link>
            </div>

            {/* Plan 2: Pro (Best Value) */}
            <div className="rounded-3xl bg-gradient-to-b from-indigo-50/70 to-white border-2 border-indigo-600 p-7 shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black shadow-md">
                ★ 수강생 89%의 선택 BEST
              </div>
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
                  올인원 마스터
                </span>
                <h3 className="text-xl font-black text-slate-900">유창한 AI 올인원 마스터 클래스</h3>
                <p className="text-xs text-slate-600">프롬프트 + 영상 + 코딩 + 자동화 + 수익화 전 과정 무제한</p>
                <div className="pt-2">
                  <div className="text-xs text-rose-500 font-bold">50% 얼리버드 특별 할인 (정가 298,000원)</div>
                  <div className="text-3xl font-black text-indigo-600">149,000원</div>
                </div>
                <ul className="pt-4 border-t border-indigo-100 space-y-2.5 text-xs text-slate-800 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>Part 1 ~ Part 5 전체 VOD (19시간 20분)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>최신 AI 프롬프트 사전 100종 영구 제공</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Next.js 웹사이트 & 숏폼 프로젝트 원본 소스코드</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>VIP 수강생 전용 비공개 단톡방 평생 입장권</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>수강 후 7일 이내 불만족 시 100% 전액 환불 보장</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/checkout?item=course"
                className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-black text-center block transition-all shadow-lg shadow-indigo-600/30 active:scale-98"
              >
                얼리버드 50% 할인으로 수강하기 →
              </Link>
            </div>

            {/* Plan 3: VIP */}
            <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
                  1:1 밀착 코칭
                </span>
                <h3 className="text-xl font-bold text-slate-900">VIP 1:1 디렉팅 클럽</h3>
                <p className="text-xs text-slate-600">온더샵 정휘용 대표의 1:1 라이브 피드백 및 포트폴리오 첨삭</p>
                <div className="pt-2">
                  <div className="text-xs text-slate-400 line-through">정가 750,000원</div>
                  <div className="text-3xl font-black text-slate-900">490,000원</div>
                </div>
                <ul className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>올인원 마스터 패키지 모든 혜택 포함</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>1:1 줌(Zoom) 맞춤 코칭 2회 (회당 60분)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>외주 제안서 및 포트폴리오 1:1 직접 첨삭</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>실전 외주 프로젝트 우선 연결 기회 제공</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/checkout?item=course_vip"
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center block transition-all shadow-xs"
              >
                VIP 1:1 코칭 신청하기
              </Link>
            </div>
          </div>
        </div>

        {/* Curriculum Accordion */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">상세 커리큘럼</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">클릭하시면 각 파트별 세부 강의 목록을 확인하실 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            {curriculum.map((item, idx) => {
              const isOpen = openCurriculum === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenCurriculum(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-black text-xs border border-indigo-200 shrink-0">
                        {item.part}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline text-xs font-semibold text-slate-500">{item.time}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                      <ul className="space-y-2.5">
                        {item.lessons.map((lesson, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Student Reviews */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-amber-500 font-black text-sm mb-1">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">실제 수강생 생생 후기</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">현업 크리에이터와 비즈니스 오너들이 검증한 실전 성과입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{rev.name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">"{rev.content}"</p>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 100% Refund Guarantee */}
        <div className="mt-20 max-w-3xl mx-auto p-7 sm:p-9 rounded-3xl bg-gradient-to-tr from-indigo-900 to-slate-900 text-white text-center space-y-4 shadow-xl">
          <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">100% 무조건 전액 환불 보장</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            수강을 시작하시고 7일 이내에 기대에 미치지 못한다고 판단되시면, 이유를 묻지 않고 결제 금액 100%를 전액 환불해 드립니다. <br />
            온더샵(유창한 AI)은 강의의 압도적인 실전 가치를 자신합니다.
          </p>
          <div className="pt-2">
            <Link
              href="/checkout?item=course"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-black text-xs shadow-lg hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>위험 부담 없이 50% 특가로 시작하기</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </Link>
          </div>
        </div>

      </div>

      {/* Video Modal Simulation */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl p-6 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold">오리엔테이션 VOD 시청</span>
              </div>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded-lg cursor-pointer"
              >
                닫기 ✕
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl bg-black flex flex-col items-center justify-center relative overflow-hidden border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80" 
                alt="영상 썸네일" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 text-center space-y-3 p-4">
                <div className="inline-block p-4 rounded-full bg-indigo-600 text-white shadow-xl animate-bounce">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <div className="text-sm font-bold text-white">오리엔테이션 체험 스트리밍이 재생 중입니다</div>
                <div className="text-xs text-slate-300">실제 전체 49개 강의는 수강 신청 즉시 HD 화질로 무제한 스트리밍됩니다.</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/checkout?item=course"
                onClick={() => setShowVideoModal(false)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
              >
                전체 강의 신청하러 가기 →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
