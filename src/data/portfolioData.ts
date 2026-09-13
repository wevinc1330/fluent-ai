export interface PortfolioItem {
  id: string;
  title: string;
  category: 'web' | 'video' | 'automation' | 'branding';
  categoryLabel: string;
  client: string;
  period: string;
  thumbnail: string;
  summary: string;
  metrics: string;
  tags: string[];
  techStack: string[];
  description: string;
  link?: string;
  date: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: '전체 포트폴리오' },
  { id: 'video', label: 'AI 광고 영상 & 숏폼' },
  { id: 'web', label: '고반응형 웹사이트' },
  { id: 'automation', label: '업무 자동화 솔루션' },
  { id: 'branding', label: 'AI 비주얼 브랜딩' },
] as const;

// 실제 작업물을 대표님이 등록하실 수 있도록 가짜 샘플 데이터를 비워둡니다.
export const INITIAL_PORTFOLIO: PortfolioItem[] = [];
