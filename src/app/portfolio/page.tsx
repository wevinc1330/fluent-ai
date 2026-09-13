'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  PlusCircle, 
  Search, 
  X, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  HelpCircle,
  Upload,
  MessageCircle,
  FolderLock
} from 'lucide-react';
import { PORTFOLIO_CATEGORIES, INITIAL_PORTFOLIO, PortfolioItem } from '@/data/portfolioData';

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Upload form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'video' | 'web' | 'automation' | 'branding'>('video');
  const [newClient, setNewClient] = useState('');
  const [newPeriod, setNewPeriod] = useState('제작 5일 소요');
  const [newMetrics, setNewMetrics] = useState('');
  const [newThumbnail, setNewThumbnail] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newTags, setNewTags] = useState('AI영상, 미드저니, 바이럴');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('fluent_ai_portfolio');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newSummary) return;

    const categoryMap: Record<string, string> = {
      video: 'AI 광고 영상 & 숏폼',
      web: '고반응형 웹사이트',
      automation: '업무 자동화 솔루션',
      branding: 'AI 비주얼 브랜딩'
    };

    const newItem: PortfolioItem = {
      id: `pf-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      categoryLabel: categoryMap[newCategory],
      client: newClient || '자체 프로젝트 / 의뢰 기업',
      period: newPeriod || '제작 4일 소요',
      thumbnail: newThumbnail || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      summary: newSummary,
      metrics: newMetrics || '고객 만족도 100%',
      tags: newTags.split(',').map((t) => t.trim()).filter(Boolean),
      techStack: ['AI Engine', 'Next.js', 'Creative Suite'],
      description: newDescription || newSummary,
      date: '2026.09'
    };

    const updated = [newItem, ...items];
    setItems(updated);
    try {
      localStorage.setItem('fluent_ai_portfolio', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setShowUploadModal(false);
    setNewTitle('');
    setNewClient('');
    setNewMetrics('');
    setNewThumbnail('');
    setNewSummary('');
    setNewDescription('');
    alert('새 포트폴리오 작업물이 등록되었습니다!');
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-10 md:py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-bold text-slate-600 mb-3 shadow-2xs">
              <FolderLock className="w-3.5 h-3.5 text-slate-500" />
              서비스 준비 중 (COMING SOON)
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              유창한 AI 포트폴리오
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              유창한 AI의 실제 프로젝트 작업물과 AI 영상, 웹사이트 쇼케이스를 정성껏 준비하고 있습니다. 곧 멋진 결과물들로 공개될 예정입니다.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              새 작업물 직접 올리기
            </button>
            <a
              href="https://open.kakao.com/o/sR2MZnNi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] px-4 py-2.5 text-xs font-bold text-[#191919] shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              사전 작업 문의
            </a>
          </div>
        </div>

        {/* If no items: Clean Coming Soon Banner */}
        {filteredItems.length === 0 ? (
          <div className="my-8 rounded-3xl bg-white border border-slate-200 p-10 sm:p-16 text-center shadow-sm max-w-3xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto shadow-2xs">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                PORTFOLIO UNDER PREPARATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                실전 포트폴리오를 열심히 준비하고 있습니다
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                거짓이나 과장된 샘플이 아닌, 대표님이 직접 제작하신 진짜 프로젝트와 성과들을 선보이기 위해 준비 중입니다.
                작업물이 준비되시면 우측 상단의 <strong>[새 작업물 직접 올리기]</strong> 버튼으로 언제든 등록하실 수 있습니다!
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setShowUploadModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-xs font-bold hover:bg-indigo-700 transition-all shadow-xs"
              >
                <PlusCircle className="w-4 h-4" />
                지금 내 첫 작업물 등록해보기
              </button>
              <a
                href="https://open.kakao.com/o/sR2MZnNi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 text-xs font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡으로 사전 제작 의뢰
              </a>
            </div>
          </div>
        ) : (
          /* If user has uploaded projects */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group glass-card rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-extrabold text-indigo-700 shadow-xs">
                        {item.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="font-bold text-slate-500">{item.client}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>자세히 보기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload / Register Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
              <button
                onClick={() => setShowUploadModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">새 포트폴리오 작업물 등록</h2>
                  <p className="text-xs text-slate-500">새로 완료한 작업물을 등록하면 갤러리에 즉시 반영됩니다.</p>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    작업물 제목 *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="예: 뷰티 브랜드 AI 광고 숏폼 시리즈 (5편)"
                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      카테고리 *
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                    >
                      <option value="video">AI 광고 영상 & 숏폼</option>
                      <option value="web">고반응형 웹사이트</option>
                      <option value="automation">업무 자동화 솔루션</option>
                      <option value="branding">AI 비주얼 브랜딩</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      고객사 / 클라이언트명
                    </label>
                    <input
                      type="text"
                      value={newClient}
                      onChange={(e) => setNewClient(e.target.value)}
                      placeholder="예: 자체 프로젝트"
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    썸네일 이미지 URL (미입력 시 기본 세련된 AI 이미지 적용)
                  </label>
                  <input
                    type="url"
                    value={newThumbnail}
                    onChange={(e) => setNewThumbnail(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    한 줄 요약 *
                  </label>
                  <input
                    type="text"
                    required
                    value={newSummary}
                    onChange={(e) => setNewSummary(e.target.value)}
                    placeholder="카드 목록에 표시될 매력적인 한 줄 요약"
                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all"
                  >
                    포트폴리오 등록 완료
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
