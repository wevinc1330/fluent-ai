'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  CreditCard,
  X,
  FileText,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'refund' | 'faq' | 'sns' | null>(null);

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
              AI 크리에이터 '유창한 AI'의 실전 프롬프트 노하우 공유부터 반응형 웹사이트 제작, 온라인 클래스, 자동화 솔루션까지 한곳에서 만나보세요.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <button
                onClick={() => setActiveModal('sns')}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-rose-600 hover:border-rose-300 shadow-2xs transition-all cursor-pointer"
                title="유튜브 채널 (준비 중)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
              <button
                onClick={() => setActiveModal('sns')}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-pink-600 hover:border-pink-300 shadow-2xs transition-all cursor-pointer"
                title="인스타그램 (준비 중)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <a
                href="https://open.kakao.com/o/sR2MZnNi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] flex items-center justify-center shadow-2xs transition-all font-bold"
                title="카카오톡 1:1 상담"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
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
                  포트폴리오 (준비 중)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-indigo-600 transition-colors">
                  온라인 클래스 (준비 중)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-indigo-600 transition-colors">
                  웹사이트 & AI 영상 제작 (준비 중)
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-indigo-600 transition-colors">
                  업무 자동화 프로그램 & SaaS (준비 중)
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
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-indigo-600 text-left transition-colors cursor-pointer"
                >
                  서비스 이용약관
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-indigo-600 text-left transition-colors cursor-pointer"
                >
                  개인정보처리방침
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('refund')}
                  className="hover:text-indigo-600 text-left transition-colors cursor-pointer"
                >
                  환불 규정 안내
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('faq')}
                  className="hover:text-indigo-600 text-left transition-colors cursor-pointer"
                >
                  자주 묻는 질문 (FAQ)
                </button>
              </li>
              <li>
                <a
                  href="https://open.kakao.com/o/sR2MZnNi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold hover:text-amber-800 transition-colors inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  카카오톡 1:1 고객센터
                </a>
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
                토스페이먼츠(Toss) 공식 제휴
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                신용카드, 간편결제(카카오페이, 네이버페이, 토스페이), 가상계좌 등 안전한 전자결제 시스템을 탑재하고 있습니다.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                256-bit SSL 암호화 안전 거래
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & official business details */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="space-y-1.5 text-center md:text-left leading-relaxed">
            <p>
              <span className="font-bold text-slate-800">상호명: 온더샵</span> (브랜드: 유창한 AI) &nbsp;|&nbsp; 
              <span className="font-bold text-slate-800"> 대표자: 정휘용</span> &nbsp;|&nbsp; 
              <span className="font-bold text-slate-800"> 사업자등록번호: 844-67-00742</span>
            </p>
            <p>
              <span className="font-bold text-slate-700">사업장 소재지:</span> 전북특별자치도 전주시 완산구 성지산로 62, 2동 5층 505호(삼천동1가, 광진목화아파트)
            </p>
            <p>
              <span className="font-bold text-slate-700">업태:</span> 도매 및 소매업 &nbsp;|&nbsp; 
              <span className="font-bold text-slate-700"> 종목:</span> 전자상거래 &nbsp;|&nbsp; 
              <span className="font-bold text-slate-700"> 호스팅 제공자:</span> Vercel Inc. &nbsp;|&nbsp; 
              <span className="font-bold text-slate-700"> 문의:</span> 카카오톡 1:1 오픈채팅
            </p>
          </div>
          <p className="shrink-0">© 2026 온더샵 (유창한 AI). All rights reserved.</p>
        </div>
      </div>

      {/* Interactive Legal & Info Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {activeModal === 'terms' && '서비스 이용약관'}
                  {activeModal === 'privacy' && '개인정보처리방침'}
                  {activeModal === 'refund' && '환불 규정 및 결제 정책'}
                  {activeModal === 'faq' && '자주 묻는 질문 (FAQ)'}
                  {activeModal === 'sns' && '공식 채널 안내'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeModal === 'terms' && (
                <>
                  <h4 className="font-bold text-slate-900 text-sm">제1조 (목적)</h4>
                  <p>본 약관은 온더샵(이하 "회사", 운영 브랜드: 유창한 AI)이 제공하는 인터넷 관련 제반 서비스(웹사이트, AI 프롬프트, 디지털 콘텐츠 및 교육, 제작 서비스)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                  
                  <h4 className="font-bold text-slate-900 text-sm pt-2">제2조 (회사의 기본 정보)</h4>
                  <p>
                    - 상호명: 온더샵 (브랜드: 유창한 AI)<br />
                    - 대표자: 정휘용<br />
                    - 사업자등록번호: 844-67-00742<br />
                    - 주소: 전북특별자치도 전주시 완산구 성지산로 62, 2동 5층 505호
                  </p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">제3조 (콘텐츠의 저작권 및 이용)</h4>
                  <p>1. 회사가 무료로 공개하는 AI 프롬프트는 이용자의 개인적 및 상업적 업무에 자유롭게 활용할 수 있습니다.<br />
                  2. 단, 회사의 프롬프트 데이터베이스 전체를 무단 복제하여 타 사이트에 유료로 재판매하거나 크롤링하는 행위는 엄격히 금지됩니다.</p>
                </>
              )}

              {activeModal === 'privacy' && (
                <>
                  <h4 className="font-bold text-slate-900 text-sm">1. 개인정보의 처리 목적</h4>
                  <p>온더샵(유창한 AI)은 사전 알림 신청, 문의 접수 및 서비스 제공을 위해 최소한의 개인정보만을 수집하며, 목적 외 용도로는 이용되지 않습니다.</p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">2. 수집하는 개인정보 항목</h4>
                  <p>- 사전 알림 신청 시: 이메일 주소<br />
                  - 제작 상담 의뢰 시: 성함, 연락처, 문의 내용<br />
                  - 결제 시: 토스페이먼츠 안전 모듈을 통한 결제 승인 데이터</p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">3. 개인정보의 보유 및 파기</h4>
                  <p>수집된 개인정보는 이용 목적이 달성된 후(사전 알림 발송 완료 또는 상담 종료 후) 지체 없이 파기되며, 관련 법령에 따라 보존 의무가 있는 경우 해당 기간 동안 안전하게 보관됩니다.</p>
                </>
              )}

              {activeModal === 'refund' && (
                <>
                  <h4 className="font-bold text-slate-900 text-sm">1. 디지털 콘텐츠 및 온라인 강의 환불 규정</h4>
                  <p>- 결제 후 영상 시청 또는 디지털 자료 다운로드를 진행하지 않은 경우: 결제일로부터 7일 이내 100% 전액 환불 가능합니다.<br />
                  - 강좌 재생 또는 자료 열람을 시작한 경우: 전자상거래법 제17조에 의거하여 디지털 콘텐츠 특성상 환불이 제한될 수 있습니다.</p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">2. 웹사이트 및 영상 맞춤 제작 용역 환불 규정</h4>
                  <p>- 제작 기획 단계: 착수금 중 실비(기획서 작성 비용)를 제외한 금액 환불 가능<br />
                  - 제작 착수 후: 진행 공정에 따라 협의 후 정산 환불</p>

                  <h4 className="font-bold text-slate-900 text-sm pt-2">3. 환불 신청 방법</h4>
                  <p>카카오톡 1:1 오픈채팅으로 결제자 성함 및 주문번호를 남겨주시면 영업일 기준 1일 이내에 신속하게 처리해 드립니다.</p>
                </>
              )}

              {activeModal === 'faq' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">Q. 무료 프롬프트는 정말 조건 없이 사용 가능한가요?</p>
                    <p className="text-xs text-slate-600 mt-1">네! 로그인 없이도 누구나 복사하여 챗GPT, Claude, 미드저니 등에 상업적으로 자유롭게 사용하실 수 있습니다.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">Q. '준비 중'인 서비스는 언제 오픈되나요?</p>
                    <p className="text-xs text-slate-600 mt-1">현재 각 서비스별 완성도를 높이기 위해 준비 중이며, 사전 알림을 등록해 주시면 오픈 당일 얼리버드 혜택과 함께 가장 먼저 소식을 안내해 드립니다.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">Q. 결제는 안전한가요?</p>
                    <p className="text-xs text-slate-600 mt-1">토스페이먼츠의 256-bit SSL 암호화 결제 시스템을 적용하여 가장 안전하게 보호됩니다.</p>
                  </div>
                </div>
              )}

              {activeModal === 'sns' && (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">공식 채널 오픈 준비 중입니다</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    유튜브와 인스타그램 채널은 더 유익한 AI 실전 콘텐츠를 제작하여 곧 오픈할 예정입니다! 현재 문의나 소통은 카카오톡 1:1 채팅으로 가장 빠르게 도와드립니다.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://open.kakao.com/o/sR2MZnNi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] px-5 py-2.5 text-xs font-bold text-[#191919] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      카카오톡 1:1 상담 바로가기
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
