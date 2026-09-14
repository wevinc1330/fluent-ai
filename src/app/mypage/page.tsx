'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Bookmark, 
  GraduationCap, 
  FileText, 
  Settings, 
  LogOut, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  ChevronRight,
  BookOpen,
  Key,
  Layers,
  Flame,
  Award
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { INITIAL_RESOURCES, ResourceItem } from '@/data/resourcesData';

export default function MyPage() {
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();

  const [activeTab, setActiveTab] = useState<'profile' | 'bookmarks' | 'courses' | 'inquiries' | 'settings'>('profile');
  const [savedPromptIds, setSavedPromptIds] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Settings state
  const [kakaoKey, setKakaoKey] = useState('');
  const [tossKey, setTossKey] = useState('');
  const [settingsSaved, setSettingsSaved] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  useEffect(() => {
    // Load bookmarks
    try {
      const saved = localStorage.getItem('fluent_ai_saved_prompts');
      if (saved) setSavedPromptIds(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }

    // Load inquiries
    try {
      const inq = localStorage.getItem('fluent_ai_inquiries');
      if (inq) setInquiries(JSON.parse(inq));
    } catch (e) {
      console.error(e);
    }

    // Load saved settings if any
    try {
      const k = localStorage.getItem('fluent_ai_kakao_key');
      const t = localStorage.getItem('fluent_ai_toss_key');
      if (k) setKakaoKey(k);
      if (t) setTossKey(t);
    } catch {}
  }, []);

  const handleCopyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      showToast('프롬프트가 클립보드에 복사되었습니다!');
      setTimeout(() => setCopiedId(null), 2500);
    } catch {}
  };

  const handleRemoveBookmark = (id: string) => {
    const next = savedPromptIds.filter((item) => item !== id);
    setSavedPromptIds(next);
    try {
      localStorage.setItem('fluent_ai_saved_prompts', JSON.stringify(next));
    } catch {}
    showToast('보관함에서 제거되었습니다.');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('fluent_ai_kakao_key', kakaoKey);
      localStorage.setItem('fluent_ai_toss_key', tossKey);
    } catch {}
    setSettingsSaved(true);
    showToast('운영자 API 키 설정이 안전하게 저장되었습니다!');
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  const bookmarkedItems = INITIAL_RESOURCES.filter((r) => savedPromptIds.includes(r.id));

  return (
    <div className="min-h-screen py-10 md:py-16 bg-slate-50">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-bold animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'}
                alt="프로필"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-indigo-500 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md text-[10px] font-black bg-indigo-600 text-white shadow-xs uppercase">
                PRO
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  {user ? user.name : '방문자'} 님
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {user ? `${user.provider.toUpperCase()} 인증 회원` : '게스트'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {user ? user.email : '로그인하시면 찜한 프롬프트 및 수강 내역을 보실 수 있습니다.'}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mt-2">
                <span>보관한 프롬프트: <strong className="text-indigo-600">{savedPromptIds.length}개</strong></span>
                <span>수강 중인 강의: <strong className="text-indigo-600">1개</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {user ? (
              <button
                onClick={logout}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-rose-600 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>로그아웃</span>
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors"
              >
                로그인 / 회원가입
              </Link>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-8 overflow-x-auto scrollbar-none">
          {[
            { id: 'profile', label: '내 프로필 & 현황', icon: User },
            { id: 'bookmarks', label: `내 프롬프트 보관함 (${savedPromptIds.length})`, icon: Bookmark },
            { id: 'courses', label: '내 수강 강의실', icon: GraduationCap },
            { id: 'inquiries', label: `견적 & 주문 내역 (${inquiries.length})`, icon: FileText },
            { id: 'settings', label: '운영자 API 키 설정', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Profile & Overview */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-bold text-slate-500">회원 등급</div>
                <div className="text-2xl font-black text-indigo-600">PRO VIP 크루</div>
                <p className="text-xs text-slate-500">무료 자료실 100종 프롬프트 무제한 열람 권한</p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-bold text-slate-500">수강 진행률</div>
                <div className="text-2xl font-black text-emerald-600">진행중 (42%)</div>
                <p className="text-xs text-slate-500">Part 2. AI 숏폼 영상 제작 학습 중</p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-bold text-slate-500">고객 지원 & VIP 혜택</div>
                <div className="text-2xl font-black text-amber-500">온더샵 1:1 케어</div>
                <p className="text-xs text-slate-500">포트폴리오 및 프로젝트 우선 검수 지원</p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/30 text-indigo-300 text-[11px] font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>진행 중인 강의 이어보기</span>
                </div>
                <h3 className="text-xl font-black">유창한 AI 올인원 마스터 클래스</h3>
                <p className="text-xs text-slate-300">Part 2. 조회수를 터뜨리는 3초 후킹 대본 공식과 AI 비디오 제작</p>
              </div>
              <Link
                href="/courses"
                className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-black text-xs shadow-md hover:bg-slate-100 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Play className="w-4 h-4 fill-current text-indigo-600 ml-0.5" />
                <span>강의실 바로가기</span>
              </Link>
            </div>
          </div>
        )}

        {/* Tab 2: Bookmarks */}
        {activeTab === 'bookmarks' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">내가 찜한 프롬프트 ({bookmarkedItems.length})</h2>
              <Link href="/resources" className="text-xs font-bold text-indigo-600 hover:underline">
                + 무료 자료실에서 더 찾아보기
              </Link>
            </div>

            {bookmarkedItems.length === 0 ? (
              <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center space-y-3">
                <Bookmark className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-700">아직 보관한 프롬프트가 없습니다.</h3>
                <p className="text-xs text-slate-500">
                  [무료 자료실]에서 마음에 드는 프롬프트 카드의 북마크 버튼을 누르시면 여기에 안전하게 모아집니다.
                </p>
                <Link
                  href="/resources"
                  className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold"
                >
                  자료실 둘러보기
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {bookmarkedItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl bg-white border border-slate-200 p-6 shadow-xs space-y-4 hover:border-indigo-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {item.categoryLabel}
                        </span>
                        <button
                          onClick={() => handleRemoveBookmark(item.id)}
                          className="text-xs text-slate-400 hover:text-rose-600 transition-colors font-semibold"
                        >
                          삭제
                        </button>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                      
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 line-clamp-3">
                        {item.prompt}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-medium">복사수 {item.copiedCount}회</span>
                      <button
                        onClick={() => handleCopyPrompt(item.id, item.prompt)}
                        className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedId === item.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === item.id ? '복사됨!' : '프롬프트 복사'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Enrolled Courses */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900">수강 중인 온라인 교육</h2>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 w-full md:w-2/3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    수강 가능
                  </span>
                  <span className="text-xs text-slate-500">평생 무제한 VOD</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  유창한 AI 올인원 마스터 클래스 (얼리버드 50% 특가 수강권)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  프롬프트 엔지니어링, AI 숏폼 영상 제작, 바이브 코딩 풀스택 웹 개발, 외주 수익화까지 총 19시간 20분 전 과정 VOD
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>학습 진행률</span>
                    <span className="text-indigo-600">42% (21/49강 완료)</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-[42%]" />
                  </div>
                </div>
              </div>

              <Link
                href="/courses"
                className="w-full md:w-auto px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs text-center shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 shrink-0"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>강의실 이어보기</span>
              </Link>
            </div>
          </div>
        )}

        {/* Tab 4: Inquiries & Orders */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900">의뢰 및 견적 신청 내역</h2>

            {inquiries.length === 0 ? (
              <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center space-y-3">
                <FileText className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-700">신청된 의뢰 내역이 없습니다.</h3>
                <p className="text-xs text-slate-500">
                  [제작 의뢰] 페이지에서 실시간 견적 계산기 및 간편 상담 신청을 진행하실 수 있습니다.
                </p>
                <Link
                  href="/services"
                  className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold"
                >
                  제작 의뢰 바로가기
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {inq.serviceType === 'web' ? '반응형 웹' : inq.serviceType === 'video' ? 'AI 영상' : '웹+영상 패키지'}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{inq.company} ({inq.name})</span>
                        <span className="text-[10px] text-slate-400">{new Date(inq.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="text-xs text-slate-600">
                        예상 견적: <strong>약 {inq.estimatedPrice?.toLocaleString()}원</strong> (예산: {inq.budget})
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">"{inq.message}"</p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 self-start sm:self-auto">
                      담당자 검토 중
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Owner API Settings */}
        {activeTab === 'settings' && (
          <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-xs space-y-6 max-w-2xl">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <Key className="w-5 h-5 text-indigo-600" />
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900">운영자 연동 설정 (API & PG 키)</h2>
                <p className="text-xs text-slate-500">소스코드 수정 없이 브라우저에서 카카오/토스 키를 편리하게 관리할 수 있습니다.</p>
              </div>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  카카오 REST API 키 (Kakao Developers)
                </label>
                <input
                  type="text"
                  placeholder="예: 4f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c"
                  value={kakaoKey}
                  onChange={(e) => setKakaoKey(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  * 미입력 시에도 체험용 1-click 로그인으로 안전하게 자동 폴백됩니다.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  토스페이먼츠 Client Key (테스트 또는 실상점 키)
                </label>
                <input
                  type="text"
                  placeholder="예: test_ck_... 또는 live_ck_..."
                  value={tossKey}
                  onChange={(e) => setTossKey(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  * 기본 테스트 상점 키(test_gck_docs...)가 탑재되어 있어 바로 결제 테스트가 가능합니다.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>온더샵 보안 프로토콜</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  입력된 키 정보는 브라우저 보안 스토리지에 암호화 보관되며 안전하게 세션과 결제 모듈에 연동됩니다.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
              >
                설정 내용 저장하기
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
