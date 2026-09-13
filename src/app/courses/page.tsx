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
  Bell,
  Check,
  MessageCircle,
  CreditCard
} from 'lucide-react';

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'benefits'>('curriculum');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySent, setNotifySent] = useState(false);

  const curriculum = [
    {
      part: 'Part 1',
      title: 'AI 프롬프트 엔지니어링 실전 마스터 (제작 중)',
      lessons: [
        '단순 질문자를 벗어나는 상위 1% 프롬프트 구조 설계',
        'Claude & ChatGPT 최적화 지침서 및 페르소나 주입법',
        '비즈니스 기획서 및 마케팅 카피 전용 프롬프트',
      ],
      time: '강의 준비 중'
    },
    {
      part: 'Part 2',
      title: 'AI 숏폼 & 바이럴 영상 제작 자동화 (제작 중)',
      lessons: [
        '조회수를 터뜨리는 3초 후킹 대본 공식',
        'AI 비디오 엔진으로 영상 소스 생성하기',
        '목소리 복제와 자동 자막으로 숏폼 1편 완성하기',
      ],
      time: '강의 준비 중'
    },
    {
      part: 'Part 3',
      title: '바이브 코딩: 내 웹사이트 & 서비스 직접 만들기 (제작 중)',
      lessons: [
        'AI 코딩 도구로 내 아이디어를 실제 작동하는 반응형 웹으로 구현',
        'Next.js와 테일윈드로 감각적인 랜딩페이지 만들기',
        '간편 로그인과 토스페이먼츠 결제 시스템 연동하기',
      ],
      time: '강의 준비 중'
    },
    {
      part: 'Part 4',
      title: '1인 AI 크리에이터 수익화 로드맵 (제작 중)',
      lessons: [
        '무료 자료로 진성 팬덤과 DB 모으기 전략',
        '외주 제작(웹/영상) 제안서 작성법',
        '자동 수익 파이프라인 구축 로드맵',
      ],
      time: '강의 준비 중'
    }
  ];

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotifySent(true);
    setNotifyEmail('');
    setTimeout(() => setNotifySent(false), 3500);
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold text-slate-600 mb-4 shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            온라인 교육 준비 중 (COMING SOON)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            유창한 AI 실전 클래스 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              열심히 준비하고 있습니다
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            이론만 늘어놓는 강의가 아닌, 실전에서 바로 돈이 되고 업무를 10배 빠르게 끝내는 
            알짜배기 VOD 커리큘럼을 정성껏 제작 중입니다. 오픈 시 가장 먼저 알려드릴게요!
          </p>
        </div>

        {/* Course Main Card & Pre-register Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Course Overview & Tabs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all ${
                  activeTab === 'curriculum'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                준비 중인 커리큘럼 미리보기
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all ${
                  activeTab === 'benefits'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                }`}
              >
                수강생 오픈 혜택
              </button>
            </div>

            {/* Curriculum Tab Content */}
            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                {curriculum.map((c, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl p-6 bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-md bg-slate-100 text-slate-600 font-bold text-xs px-2.5 py-1 border border-slate-200">
                          {c.part}
                        </span>
                        <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {c.time}
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                      {c.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Benefits Tab Content */}
            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-5 space-y-2 bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                    <Gift className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">시크릿 프롬프트 모음집 증정</h4>
                  <p className="text-xs text-slate-600">
                    수강생 전원에게 실전 카피라이팅 및 영상 생성 전용 시크릿 프롬프트 모음집을 제공합니다.
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-5 space-y-2 bg-white border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">수강생 전용 커뮤니티 초대</h4>
                  <p className="text-xs text-slate-600">
                    최신 AI 트렌드와 프롬프트 피드백을 실시간으로 주고받는 크루 소통방에 초대합니다.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Pre-order & Notification Card */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold px-3 py-1">
                  오픈 준비 중
                </span>
                <span className="text-xs text-slate-400 font-medium">얼리버드 50% 예정</span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">
                  클래스 런칭 사전 알림 신청
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  이메일을 남겨주시면 정식 런칭 당일 <strong>선착순 50% 할인 쿠폰</strong>을 가장 먼저 보내드립니다.
                </p>
              </div>

              {/* Notification Signup Form */}
              <form onSubmit={handleNotify} className="space-y-3 pt-2 border-t border-slate-100">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="이메일 주소를 입력해 주세요"
                  required
                  className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  사전 알림 신청하기
                </button>
                {notifySent && (
                  <p className="text-[11px] text-emerald-600 font-bold text-center">
                    ✓ 등록되었습니다! 오픈 시 가장 먼저 알려드립니다.
                  </p>
                )}
              </form>

              {/* Kakao direct chat & Toss Test Link */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <a
                  href="https://open.kakao.com/o/sR2MZnNi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  카카오톡으로 강의 질문하기
                </a>
                <Link
                  href="/checkout"
                  className="w-full py-2 rounded-xl text-center block text-[11px] text-slate-400 hover:text-indigo-600"
                >
                  [토스페이먼츠 결제창 모의 테스트]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
