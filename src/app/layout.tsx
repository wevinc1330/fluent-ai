import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KakaoChatWidget from '@/components/KakaoChatWidget';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: '유창한 AI | AI 크리에이터 실전 프롬프트 & 비즈니스 플랫폼',
  description: 'AI 인플루언서 유창한 AI의 100% 무료 프롬프트 라이브러리부터 온라인 클래스, 고반응형 웹사이트 및 AI 영상 제작까지! 비즈니스 성장을 위한 실전 AI 플랫폼.',
  keywords: ['유창한 AI', 'AI 프롬프트', '챗GPT 프롬프트', 'Claude', '미드저니', '웹사이트 제작', 'AI 광고 영상', '온라인 강의', '온더샵', '정휘용'],
  authors: [{ name: '정휘용' }],
  creator: '온더샵 (정휘용)',
  publisher: '유창한 AI',
  openGraph: {
    title: '유창한 AI | AI 크리에이터 실전 프롬프트 & 비즈니스 플랫폼',
    description: '실전 검증 100% 무료 프롬프트 자료실부터 온라인 클래스, 맞춤 웹사이트 및 AI 광고 영상 제작까지!',
    siteName: '유창한 AI (온더샵)',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '유창한 AI | AI 크리에이터 실전 프롬프트 & 비즈니스 플랫폼',
    description: '실전 검증 100% 무료 프롬프트 자료실부터 온라인 클래스, 맞춤 웹사이트 및 AI 광고 영상 제작까지!',
  },
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
