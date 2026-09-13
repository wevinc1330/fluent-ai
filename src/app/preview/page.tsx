'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  Tablet, 
  RotateCw, 
  ExternalLink, 
  Sparkles, 
  ArrowLeft, 
  Check, 
  ZoomIn, 
  Layers,
  QrCode
} from 'lucide-react';

export default function MobilePreviewPage() {
  const [device, setDevice] = useState<'iphone' | 'galaxy' | 'tablet'>('iphone');
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isLandscape, setIsLandscape] = useState(false);
  const [scale, setScale] = useState(1);

  // Device dimensions
  const getDimensions = () => {
    switch (device) {
      case 'galaxy':
        return isLandscape ? { width: 880, height: 412 } : { width: 412, height: 880 };
      case 'tablet':
        return isLandscape ? { width: 1024, height: 768 } : { width: 768, height: 1024 };
      case 'iphone':
      default:
        return isLandscape ? { width: 852, height: 393 } : { width: 393, height: 852 };
    }
  };

  const dims = getDimensions();

  const pages = [
    { label: '메인 홈', path: '/' },
    { label: '무료 자료실', path: '/resources' },
    { label: '포트폴리오', path: '/portfolio' },
    { label: '온라인 교육', path: '/courses' },
    { label: '제작 의뢰', path: '/services' },
    { label: 'AI 도구 & SaaS', path: '/tools' },
    { label: '간편 로그인', path: '/auth/signin' },
    { label: '토스 결제', path: '/checkout' },
  ];

  const openMobilePopup = () => {
    window.open(
      currentPath,
      'mobile_preview_window',
      'width=393,height=852,resizable=yes,scrollbars=yes,status=no'
    );
  };

  return (
    <div className="min-h-screen py-8 bg-slate-100 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-black text-slate-900">실시간 모바일 뷰 시뮬레이터</span>
                <span className="rounded bg-indigo-50 text-indigo-700 px-2 py-0.5 text-[10px] font-bold border border-indigo-200">
                  반응형 테스트
                </span>
              </div>
              <p className="text-xs text-slate-500">
                실제 스마트폰 화면에서 웹사이트가 어떻게 보이는지 실시간으로 테스트하세요.
              </p>
            </div>
          </div>

          {/* Device & Orientation Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Device selector */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setDevice('iphone')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  device === 'iphone'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                iPhone (393px)
              </button>
              <button
                onClick={() => setDevice('galaxy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  device === 'galaxy'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Galaxy (412px)
              </button>
              <button
                onClick={() => setDevice('tablet')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  device === 'tablet'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                태블릿 (768px)
              </button>
            </div>

            {/* Rotate Button */}
            <button
              onClick={() => setIsLandscape(!isLandscape)}
              title="화면 회전 (가로/세로)"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1 text-xs font-bold"
            >
              <RotateCw className="w-4 h-4" />
              <span className="hidden sm:inline">{isLandscape ? '가로 모드' : '세로 모드'}</span>
            </button>

            {/* Popup window button */}
            <button
              onClick={openMobilePopup}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              모바일 전용 팝업창으로 열기
            </button>
          </div>
        </div>

        {/* Page Switcher Tabs */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap px-1">
            페이지 이동:
          </span>
          {pages.map((p) => (
            <button
              key={p.path}
              onClick={() => setCurrentPath(p.path)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currentPath === p.path
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Device Frame Container */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto w-full">
        {/* Realistic Smartphone Mockup */}
        <div
          className="relative transition-all duration-300 shadow-2xl rounded-[50px] bg-slate-900 p-3.5 border-4 border-slate-700 ring-1 ring-slate-900/50"
          style={{
            width: `${dims.width + 28}px`,
            maxWidth: '96vw',
          }}
        >
          {/* Speaker / Dynamic Island on iPhone */}
          {device === 'iphone' && !isLandscape && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 mr-2" />
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-950" />
            </div>
          )}

          {/* Screen Content Wrapper */}
          <div
            className="rounded-[38px] overflow-hidden bg-white border border-slate-200"
            style={{
              height: `${dims.height}px`,
              maxHeight: '75vh',
            }}
          >
            <iframe
              src={currentPath}
              title="Mobile Preview Frame"
              className="w-full h-full border-none"
              allow="clipboard-read; clipboard-write; payment; camera; microphone"
            />
          </div>

          {/* Bottom Home Indicator Bar on iPhone */}
          {device === 'iphone' && !isLandscape && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full z-20 pointer-events-none" />
          )}
        </div>
      </div>

      {/* Bottom Testing Tips */}
      <div className="mt-4 text-center text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
        💡 <strong>실제 스마트폰에서 직접 보고 싶으신가요?</strong> <br />
        컴퓨터 브라우저에서 <kbd className="bg-white border border-slate-300 px-1 py-0.5 rounded font-mono">F12</kbd>를 누르고 
        <kbd className="bg-white border border-slate-300 px-1 py-0.5 rounded font-mono ml-1">Ctrl + Shift + M</kbd>을 누르시면 크롬 모바일 툴바로 즉시 테스트하실 수 있습니다.
      </div>
    </div>
  );
}
