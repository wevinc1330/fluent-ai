'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { 
  CreditCard, 
  ShieldCheck, 
  ArrowLeft, 
  AlertCircle,
  Settings,
  Lock
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

// Declare toss payments type for TypeScript
declare global {
  interface Window {
    TossPayments?: any;
  }
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const { user } = useAuth();

  const itemParam = searchParams.get('item') || 'course';

  // Item details
  const getItemDetails = () => {
    switch (itemParam) {
      case 'tool-1':
        return {
          title: '유창한 쇼츠메이커 (Fluent Shorts Bot) 얼리버드 예약',
          price: 39000,
          desc: '월 39,000원 구독형 얼리버드 혜택'
        };
      case 'tool-2':
        return {
          title: 'AI 엑셀 데이터 매니저 (AutoData Pro) 라이선스',
          price: 79000,
          desc: '영구 소장 및 업데이트 라이선스'
        };
      case 'course':
      default:
        return {
          title: '유창한 AI 온라인 마스터 클래스 (얼리버드 50% 특가)',
          price: 149000,
          desc: '총 19시간 20분 실전 VOD + 프롬프트 사전 100종 + VIP 단톡방 평생 입장권'
        };
    }
  };

  const item = getItemDetails();

  // Buyer Info
  const [buyerName, setBuyerName] = useState(user?.name || '홍길동');
  const [buyerEmail, setBuyerEmail] = useState(user?.email || 'buyer@example.com');
  const [buyerPhone, setBuyerPhone] = useState('010-1234-5678');
  const [paymentMethod, setPaymentMethod] = useState<'카드' | '가상계좌' | '계좌이체'>('카드');

  // Toss Client Key (Configured with User's Client Key)
  const [clientKey, setClientKey] = useState(
    process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm'
  );
  const [showKeySetting, setShowKeySetting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsProcessing(true);
    setErrorMessage(null);

    try {
      if (!window.TossPayments) {
        throw new Error('토스페이먼츠 결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
      }

      const tossPayments = window.TossPayments(clientKey);
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      // Request payment
      await tossPayments.requestPayment(paymentMethod, {
        amount: item.price,
        orderId: orderId,
        orderName: item.title,
        customerName: buyerName,
        customerEmail: buyerEmail,
        successUrl: `${window.location.origin}/checkout?status=success&orderId=${orderId}`,
        failUrl: `${window.location.origin}/checkout?status=fail`,
      });
    } catch (err: any) {
      console.error(err);
      if (err.code === 'USER_CANCEL') {
        setErrorMessage('결제가 취소되었습니다.');
      } else {
        setErrorMessage(err.message || '결제 요청 중 오류가 발생했습니다.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          이전으로 돌아가기
        </Link>

        <button
          onClick={() => setShowKeySetting(!showKeySetting)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-white border border-slate-300 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
        >
          <Settings className="w-3.5 h-3.5" />
          토스 API 키 설정
        </button>
      </div>

      {/* Toss Key Setting Drawer */}
      {showKeySetting && (
        <div className="mb-8 p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-800 text-xs font-bold">
            <Lock className="w-4 h-4 text-indigo-600" />
            토스페이먼츠(Toss Payments) 연동 클라이언트 키 안내
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            현재는 누구나 즉시 결제창 테스트가 가능한 **토스 공식 테스트 클라이언트 키**가 기본 설정되어 있습니다. 
            보유하신 토스페이먼츠 상점의 실제 클라이언트 키(Live 또는 Test)를 입력하시면 즉시 연동됩니다.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={clientKey}
              onChange={(e) => setClientKey(e.target.value)}
              placeholder="test_ck_..."
              className="flex-1 rounded-xl bg-white border border-slate-300 px-3 py-2 text-xs text-slate-900 font-mono"
            />
            <button
              onClick={() => alert('클라이언트 키가 적용되었습니다!')}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
            >
              적용
            </button>
          </div>
        </div>
      )}

      {/* Main Checkout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Order Info & Buyer Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Item Card */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">
                주문 상품 정보
              </span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                즉시 결제 가능
              </span>
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900">{item.title}</h2>
              <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
              <span className="text-xs text-slate-500 font-medium">결제 금액</span>
              <div className="text-2xl font-black text-slate-900">
                {item.price.toLocaleString()}
                <span className="text-sm font-bold text-indigo-600 ml-1">원</span>
              </div>
            </div>
          </div>

          {/* 2. Buyer Form */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-black text-slate-900">주문자 정보</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">이름</label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">이메일 (결제 확인서 발송)</label>
                <input
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">연락처</label>
                <input
                  type="text"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-black text-slate-900">결제 수단 선택</h3>
            <div className="grid grid-cols-3 gap-3">
              {(['카드', '가상계좌', '계좌이체'] as const).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                    paymentMethod === method
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {method === '카드' ? '신용/체크카드' : method}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 leading-normal font-medium">
              * [신용/체크카드] 선택 시 카카오페이, 네이버페이, 토스페이, 삼성페이 등 모든 간편결제를 선택하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* Right: Payment Action Box (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-white border-2 border-indigo-200 p-6 sm:p-8 space-y-6 shadow-lg sticky top-24">
            <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <CreditCard className="w-4 h-4 text-indigo-600" />
              토스페이먼츠 안전 결제
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex justify-between text-xs text-slate-600">
                <span>상품 금액</span>
                <span className="text-slate-900 font-bold">{item.price.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>할인 금액</span>
                <span className="text-indigo-600 font-bold">- 0원</span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-sm font-black text-slate-900">최종 결제 금액</span>
                <span className="text-2xl font-black text-indigo-700">
                  {item.price.toLocaleString()}원
                </span>
              </div>
            </div>

            {/* Error box */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Toss Pay Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-black text-sm shadow-md shadow-indigo-600/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <span>토스 결제창을 띄우는 중...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{item.price.toLocaleString()}원 결제하기</span>
                </>
              )}
            </button>

            <div className="space-y-2 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed font-medium">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>토스페이먼츠의 최고 수준 256비트 암호화 결제</span>
              </div>
              <p>
                * 구매 후 강의 및 자료는 등록하신 이메일과 마이페이지에서 즉시 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      {/* Load Toss Payments Official JS SDK */}
      <Script
        src="https://js.tosspayments.com/v1/payment"
        strategy="afterInteractive"
      />
      <Suspense fallback={<div className="text-center py-20 text-slate-500">결제 정보를 불러오는 중...</div>}>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}
