'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Copy, 
  Check, 
  HelpCircle, 
  X, 
  Bookmark, 
  Flame 
} from 'lucide-react';
import { CATEGORIES, INITIAL_RESOURCES, ResourceItem } from '@/data/resourcesData';
import { useAuth } from '@/context/AuthContext';

export default function ResourcesPage() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalItem, setActiveModalItem] = useState<ResourceItem | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

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

  const handleCopyPrompt = async (id: string, promptText: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    await copyToClipboard(promptText);
    setCopiedId(id);
    showToast('프롬프트가 클립보드에 복사되었습니다! 바로 붙여넣으세요.');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!user) {
      showToast('찜하기 기능은 간편 로그인 후 이용하실 수 있습니다.');
      return;
    }
    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((item) => item !== id));
      showToast('북마크에서 제거되었습니다.');
    } else {
      setSavedIds([...savedIds, id]);
      showToast('내 보관함에 저장되었습니다.');
    }
  };

  const filteredResources = useMemo(() => {
    return INITIAL_RESOURCES.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-10 md:py-16 bg-slate-50">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-bold animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            100% 무료 프롬프트 & 스킬 보물창고
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            유창한 AI 무료 자료실
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            실무에서 수십 번 테스트하고 검증한 실전 프롬프트와 꿀팁을 무료로 가져가세요. 
            클릭 한 번으로 즉시 복사됩니다.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="찾으시는 프롬프트, 키워드(예: 숏폼, 엑셀, 미드저니, PRD 등)를 검색하세요..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs ${
                    active
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm shadow-indigo-600/20'
                      : 'bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Total count and results info */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>총 <strong>{filteredResources.length}</strong>개의 엄선된 자료</span>
          <span className="text-indigo-600 font-semibold">자료는 매주 지속적으로 업데이트됩니다</span>
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-800 font-bold">검색 결과가 없습니다.</p>
            <p className="text-xs text-slate-500 mt-1">다른 검색어나 카테고리를 선택해 보세요.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
            >
              전체 자료 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => {
              const isSaved = savedIds.includes(item.id);
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer border border-slate-200 hover:border-indigo-300 transition-all group shadow-xs hover:shadow-md"
                  onClick={() => setActiveModalItem(item)}
                >
                  <div>
                    {/* Card Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700">
                        {item.categoryLabel}
                      </span>
                      <div className="flex items-center gap-2">
                        {item.isPopular && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                            <Flame className="w-3 h-3" /> 인기
                          </span>
                        )}
                        <button
                          onClick={(e) => toggleBookmark(item.id, e)}
                          title="자료 보관함에 찜하기"
                          className={`p-1 rounded-md hover:bg-slate-100 transition-colors ${
                            isSaved ? 'text-amber-500' : 'text-slate-400'
                          }`}
                        >
                          <Bookmark className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Prompt Preview Snippet */}
                    <div className="mt-3.5 relative rounded-xl bg-slate-50 border border-slate-200 p-3 font-mono text-[11px] text-slate-800 leading-relaxed overflow-hidden">
                      <div className="line-clamp-3">
                        {item.prompt}
                      </div>
                      <div className="mt-1.5 text-[10px] text-indigo-600 font-sans font-bold flex items-center gap-1">
                        👉 클릭하여 활용 팁 및 전체보기
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>복사 {item.copiedCount.toLocaleString()}회</span>
                    </div>

                    <button
                      onClick={(e) => handleCopyPrompt(item.id, item.prompt, e)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isCopied
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          복사됨
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
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-bold text-indigo-700 mb-2">
                {activeModalItem.categoryLabel}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pr-8">
                {activeModalItem.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeModalItem.description}
              </p>
            </div>

            {/* Full Prompt Box */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-700">
                  전체 프롬프트 내용
                </span>
                <button
                  onClick={(e) => handleCopyPrompt(activeModalItem.id, activeModalItem.prompt, e)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  {copiedId === activeModalItem.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      복사 완료
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      원클릭 복사
                    </>
                  )}
                </button>
              </div>
              <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-4 font-mono text-xs text-slate-900 whitespace-pre-wrap leading-relaxed select-all">
                {activeModalItem.prompt}
              </div>
            </div>

            {/* Tips Section */}
            {activeModalItem.tips && activeModalItem.tips.length > 0 && (
              <div className="rounded-2xl bg-indigo-50/80 border border-indigo-200 p-4 space-y-2">
                <div className="flex items-center gap-2 text-indigo-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  유창한 AI의 200% 활용 꿀팁
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeModalItem.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags & Action */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex flex-wrap gap-1.5">
                {activeModalItem.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
