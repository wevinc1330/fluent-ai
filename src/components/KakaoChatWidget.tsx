'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Check, 
  ExternalLink, 
  PhoneCall, 
  Clock, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: { label: string; action: string }[];
}

export default function KakaoChatWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12;
    return `${ampm} ${formattedHours}:${minutes}`;
  };

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'msg-1',
        sender: 'bot',
        text: '안녕하세요! AI 크리에이터 "유창한 AI" 공식 1:1 상담톡입니다. 무엇이 궁금하신가요? 😊',
        time: getCurrentTime(),
        options: [
          { label: '🌐 웹사이트 제작 견적 문의', action: 'web_inquiry' },
          { label: '🎬 AI 광고 영상 제작 상담', action: 'video_inquiry' },
          { label: '📚 무료 자료 & 프롬프트 질문', action: 'prompt_inquiry' },
          { label: '🎓 온라인 클래스 수강 문의', action: 'course_inquiry' },
          { label: '💬 카카오톡 오픈채팅 바로 연결', action: 'kakao_external' },
        ]
      }
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleOptionClick = (option: { label: string; action: string }) => {
    const time = getCurrentTime();

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
      time
    };

    let botResponseText = '';
    let nextOptions: { label: string; action: string }[] | undefined;

    switch (option.action) {
      case 'web_inquiry':
        botResponseText = '고반응형 웹사이트 제작은 최신 Next.js 기반으로 모바일 완벽 최적화, 간편 로그인, 토스페이먼츠 연동까지 패키지로 제작해 드립니다. 상단 메뉴의 [제작 의뢰] 페이지에서 실시간 견적을 확인하시거나, 원하시는 사이트 레퍼런스를 남겨주시면 바로 검토해 드릴게요!';
        nextOptions = [
          { label: '견적 페이지 바로가기', action: 'goto_services' },
          { label: '상담원과 직접 대화하기', action: 'kakao_external' }
        ];
        break;
      case 'video_inquiry':
        botResponseText = 'AI 광고 영상은 미드저니와 고화질 AI 비디오 엔진을 결합하여 촬영 없이도 고퀄리티 숏폼(릴스/쇼츠/틱톡)을 완성해 드립니다. 사전 기획 및 맞춤 제작 상담은 언제든 편하게 남겨주세요!';
        nextOptions = [
          { label: '제작 의뢰 안내 보기', action: 'goto_services' },
          { label: '카카오톡으로 1:1 문의', action: 'kakao_external' }
        ];
        break;
      case 'prompt_inquiry':
        botResponseText = '무료 자료실의 모든 프롬프트는 100% 무료이며 원클릭으로 복사해 바로 사용하실 수 있습니다. 혹시 특정 분야(업무자동화, 이미지 등)의 프롬프트가 더 필요하시다면 메시지를 남겨주세요!';
        nextOptions = [
          { label: '무료 자료실 바로가기', action: 'goto_resources' },
          { label: '처음으로 돌아가기', action: 'restart' }
        ];
        break;
      case 'course_inquiry':
        botResponseText = 'AI 온라인 마스터 클래스는 현재 정식 오픈 준비 중입니다. 준비 중인 커리큘럼을 미리 살펴보시고 사전 알림을 등록해 두시면 오픈 시 가장 먼저 안내해 드립니다.';
        nextOptions = [
          { label: '교육 준비 현황 보기', action: 'goto_courses' },
          { label: '카카오톡으로 질문하기', action: 'kakao_external' }
        ];
        break;
      case 'kakao_external':
        window.open('https://open.kakao.com/o/sR2MZnNi', '_blank');
        botResponseText = '유창한 AI 카카오톡 오픈채팅방 링크를 열어드렸습니다. 실시간으로 1:1 상담이 필요하시면 오픈채팅으로 말씀해 주세요!';
        break;
      case 'goto_services':
        setIsOpen(false);
        router.push('/services');
        return;
      case 'goto_portfolio':
        setIsOpen(false);
        router.push('/portfolio');
        return;
      case 'goto_resources':
        setIsOpen(false);
        router.push('/resources');
        return;
      case 'goto_courses':
        setIsOpen(false);
        router.push('/courses');
        return;
      case 'restart':
        botResponseText = '궁금하신 내용을 아래 옵션에서 선택하시거나 직접 입력해 주세요.';
        nextOptions = [
          { label: '🌐 웹사이트 제작 견적 문의', action: 'web_inquiry' },
          { label: '🎬 AI 광고 영상 제작 상담', action: 'video_inquiry' },
          { label: '📚 무료 자료 & 프롬프트 질문', action: 'prompt_inquiry' },
          { label: '🎓 온라인 클래스 수강 문의', action: 'course_inquiry' },
        ];
        break;
      default:
        botResponseText = '감사합니다! 담당자가 확인 후 신속히 답변드리겠습니다.';
    }

    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: botResponseText,
        time: getCurrentTime(),
        options: nextOptions
      }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const time = getCurrentTime();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputMessage,
      time
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: `문의해 주셔서 감사합니다! "${inputMessage}" 내용이 정상적으로 접수되었습니다. 추가로 카카오톡 오픈채팅방으로 연락 주시면 가장 빠른 1:1 실시간 상담이 가능합니다.`,
        time: getCurrentTime(),
        options: [
          { label: '💬 카카오톡 1:1 채팅 열기', action: 'kakao_external' },
          { label: '메뉴 처음으로', action: 'restart' }
        ]
      }
    ]);

    setInputMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* 1. Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] sm:w-[380px] max-w-[380px] h-[520px] max-h-[78vh] rounded-3xl bg-white shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in">
          {/* Kakao Header */}
          <div className="bg-[#FEE500] px-4 py-3.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  AI
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#FEE500]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black text-[#191919]">유창한 AI 실시간 상담톡</span>
                  <span className="rounded bg-black/10 px-1 py-0.2 text-[9px] font-bold text-slate-800">
                    공식
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>보통 수분 내 답변</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/10 text-slate-800 transition-colors"
              aria-label="채팅창 닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick External Kakao Banner */}
          <div className="bg-amber-50/80 px-4 py-2 border-b border-amber-200/60 flex items-center justify-between text-xs">
            <span className="text-amber-800 text-[11px] font-medium">
              실시간 카카오톡 앱으로 대화하고 싶다면?
            </span>
            <button
              onClick={() => window.open('https://open.kakao.com/o/sR2MZnNi', '_blank')}
              className="inline-flex items-center gap-1 font-bold text-amber-900 hover:underline text-[11px]"
            >
              오픈채팅 연결 <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end gap-1.5 max-w-[82%]">
                  {msg.sender === 'user' && (
                    <span className="text-[10px] text-slate-400 font-mono mb-0.5">{msg.time}</span>
                  )}
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                      msg.sender === 'user'
                        ? 'bg-[#FEE500] text-[#191919] rounded-br-none font-medium'
                        : 'bg-white text-slate-900 border border-slate-200 rounded-bl-none font-normal'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'bot' && (
                    <span className="text-[10px] text-slate-400 font-mono mb-0.5">{msg.time}</span>
                  )}
                </div>

                {/* Quick Option Buttons */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 flex flex-col gap-1.5 w-full pl-2">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionClick(opt)}
                        className="text-left text-xs bg-white hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 text-slate-700 font-bold py-2 px-3 rounded-xl border border-slate-200 transition-all shadow-2xs flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="문의 내용을 입력하세요..."
              className="flex-1 rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-[#FEE500] hover:bg-[#ebd300] text-[#191919] font-bold shadow-xs disabled:opacity-40 transition-all"
              aria-label="전송"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* 2. Floating Kakao Talk Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 rounded-full bg-[#FEE500] hover:bg-[#ebd300] p-3.5 shadow-xl shadow-amber-500/25 border border-amber-300 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="카카오톡 실시간 상담 열기"
      >
        {/* Kakao Icon */}
        <svg className="w-6 h-6 fill-[#191919]" viewBox="0 0 24 24">
          <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.8 6.7-.2.8-.8 3-1 3.5 0 0-.1.2.1.3.2.1.4 0 .4 0 1.5-1 3.5-2.4 4.1-2.8.6.1 1.1.2 1.6.2 5.5 0 10-3.6 10-8s-4.5-8-10-8z"/>
        </svg>

        {/* Text Pill (Desktop) */}
        <span className="hidden sm:inline font-black text-xs text-[#191919] pr-1">
          카카오 실시간 문의
        </span>

        {/* Pulsing notification badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[10px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
