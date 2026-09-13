import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KakaoChatWidget from '@/components/KakaoChatWidget';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: '유창한 AI | AI 크리에이터 실전 프롬프트 & 비즈니스 플랫폼',
  description: 'AI 인플루언서 유창한 AI가 공유하는 무료 프롬프트, AI 실전 스킬, 온라인 교육, 반응형 웹사이트 및 AI 광고 영상 제작 올인원 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <KakaoChatWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
