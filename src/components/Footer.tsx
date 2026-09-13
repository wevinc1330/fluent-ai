'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, Mail, ShieldCheck, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 text-slate-600 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-sm">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-white">
                  <Sparkles className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">유창한 AI</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              AI 크리에이터 '유창한 AI'의 실전 프롬프트 노하우 공유부터 웹사이트 제작, 온라인 클래스, 자동화 솔루션까지 한곳에서 만나보세요.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#youtube"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-rose-600 hover:border-rose-300 shadow-2xs transition-all"
                title="유튜브 채널"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-300 shadow-2xs transition-all"
                title="인스타그램"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://open.kakao.com/o/sR2MZnNi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 shadow-2xs transition-all"
                title="카카오 오픈채팅"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@fluent-ai.com"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 shadow-2xs transition-all"
                title="비즈니스 제휴 문의"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              제공 서비스
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/resources" className="hover:text-indigo-600 transition-colors">
                  무료 프롬프트 & 스킬 라이브러리
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-indigo-600 transition-colors">
                  제작 포트폴리오 & 성공 사례
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-indigo-600 transition-colors">
                  AI 실전 마스터 클래스 (온라인 교육)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-600 transition-colors">
                  고반응형 웹사이트 제작 판매
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-600 transition-colors">
                  AI 광고 영상 & 숏폼 바이럴 제작
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-indigo-600 transition-colors">
                  업무 자동화 프로그램 & SaaS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Policies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              안내 및 고객지원
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/auth/signin" className="hover:text-indigo-600 transition-colors">
                  소셜 간편 로그인 (카카오/네이버/구글)
                </Link>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition-colors">
                  이용약관 및 개인정보처리방침
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition-colors">
                  환불 규정 및 자주 묻는 질문(FAQ)
                </span>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-indigo-600 transition-colors">
                  토스페이먼츠 안전 결제 안내
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Payment info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              안전 결제 파트너십
            </h3>
            <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 text-xs font-bold">
                <CreditCard className="w-4 h-4 text-indigo-600" />
                토스페이먼츠(Toss) 결제 지원
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                신용카드, 간편결제(카카오페이, 네이버페이, 토스페이), 가상계좌 등 안전한 전자결제를 제공합니다.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                256-bit SSL 암호화 안전 거래
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & business details */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>상호명: 유창한 AI | 대표자: 유창한 | 사업장소재지: 대한민국 | 고객센터: contact@fluent-ai.com</p>
            <p>통신판매업신고: 제 2026-서울강남-0000호 | 호스팅제공자: Vercel / Next.js</p>
          </div>
          <p>© 2026 유창한 AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
