export interface ResourceItem {
  id: string;
  title: string;
  category: 'chatgpt' | 'midjourney' | 'video' | 'coding' | 'marketing';
  categoryLabel: string;
  description: string;
  tags: string[];
  prompt: string;
  tips: string[];
  downloadsCount: number;
  copiedCount: number;
  isPopular?: boolean;
  isNew?: boolean;
  date: string;
}

export const CATEGORIES = [
  { id: 'all', label: '전체 자료' },
  { id: 'chatgpt', label: 'ChatGPT / Claude' },
  { id: 'midjourney', label: '미드저니 & 이미지' },
  { id: 'video', label: '숏폼 & AI 영상' },
  { id: 'coding', label: '바이브 코딩 & 자동화' },
  { id: 'marketing', label: '마케팅 & 카피라이팅' },
] as const;

export const INITIAL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: '유튜브 숏폼/릴스 3초 시선 강탈 바이럴 대본 생성기',
    category: 'video',
    categoryLabel: '숏폼 & AI 영상',
    description: '조회수 100만을 기록한 후킹 기법(호기심 유발 + 빠른 템포 + 결론 유보)을 적용한 60초 숏폼 완벽 스크립트 프롬프트입니다.',
    tags: ['유튜브쇼츠', '인스타릴스', '후킹대본', 'Claude', 'ChatGPT'],
    prompt: `[역할 부여]
너는 100만 조회수 쇼츠/릴스 전문 바이럴 영상 기획자이자 카피라이터야.

[주제 입력]
주제: [원하는 주제 입력, 예: 2026년 AI 툴 3가지]
타겟 시청자: [예: 2030 직장인 / 학생]

[대본 작성 원칙]
1. 0~3초 (강력한 훅): 상식을 깨거나 시청자의 손가락을 멈추게 하는 한 문장 질문 또는 충격적 사실 제시.
2. 4~25초 (공감 및 핵심 문제 제시): 시청자가 겪고 있는 불편함이나 오해를 정확히 짚기.
3. 26~50초 (해결책 3단계 초압축): 실천 가능한 팁 3가지를 군더더기 없이 설명.
4. 51~60초 (CTA & 반전 결론): 저장/공유 유도 및 댓글을 남길 수밖에 없는 질문 던지기.

[출력 형식]
초 단위 타임라인, 화면 연출 가이드(화면 전환 및 자막 강조 단어), 나레이션 대사를 표 형태로 작성해 줘.`,
    tips: [
      '첫 문장에는 절대 "안녕하세요" 같은 인사를 넣지 마세요.',
      '화면 연출 가이드의 텍스트를 Vrew나 캡컷(CapCut)에 그대로 복사해 붙여넣으면 제작 시간이 80% 단축됩니다.',
      '대사는 구어체로 낭독했을 때 호흡이 끊기지 않는지 직접 소리 내어 읽어보세요.'
    ],
    downloadsCount: 1420,
    copiedCount: 3890,
    isPopular: true,
    date: '2026.09.10'
  },
  {
    id: 'res-2',
    title: '고급 비즈니스 랜딩페이지 카피라이팅 PAS 프롬프트',
    category: 'marketing',
    categoryLabel: '마케팅 & 카피라이팅',
    description: '전환율을 300% 올려주는 검증된 카피라이팅 공식(Problem - Agitate - Solution)을 기반으로 한 랜딩페이지 전문 작성 프롬프트입니다.',
    tags: ['랜딩페이지', 'PAS공식', '전환율최적화', '카피라이팅'],
    prompt: `당신은 세계적인 다이렉트 리스폰스 카피라이터입니다. 아래 상품 정보를 바탕으로 고객의 지갑을 열게 만드는 고전환율 랜딩페이지 카피를 작성해 주세요.

[상품/서비스 정보]
- 상품명: [서비스/상품명]
- 핵심 혜택: [단 하나의 가장 강력한 장점]
- 주 타겟: [목표 고객의 연령/직업/고민]

[필수 구조 - PAS 프레임워크]
1. Hero 섹션: 고객의 이목을 끄는 메인 헤드라인 (수치나 결과 포함), 서브 헤드라인, 강력한 CTA 버튼 문구.
2. Problem (문제 제기): 타겟이 매일 겪는 고통스러운 일상을 생생하게 묘사.
3. Agitate (문제 심화): 이 문제를 방치했을 때 생길 손실과 후회 극대화.
4. Solution (해결책): 우리 제품이 어떻게 이 문제를 가장 쉽고 확실하게 해결하는지 3대 핵심 특징 제시.
5. Social Proof (신뢰): 신뢰를 높일 수 있는 실제 후기 프레임 및 통계 제시.
6. FAQ: 구매 직전 망설이게 되는 3가지 의문점 사전 해소.`,
    tips: [
      '형용사보다는 구체적인 숫자(예: "많은 시간 절약" -> "하루 2시간 17분 단축")를 넣을수록 신뢰도가 급상승합니다.',
      '도출된 카피를 토대로 웹사이트 각 섹션에 바로 배치할 수 있습니다.'
    ],
    downloadsCount: 980,
    copiedCount: 2450,
    isPopular: true,
    date: '2026.09.08'
  },
  {
    id: 'res-3',
    title: '미드저니(Midjourney) 실사풍 인물 프로필 & 테크 스튜디오 렌더링',
    category: 'midjourney',
    categoryLabel: '미드저니 & 이미지',
    description: '스튜디오 조명과 하이엔드 카메라(Sony A7R V 85mm F1.4) 세팅값을 시뮬레이션하여 왜곡 없이 사실적인 인물/스튜디오 이미지를 뽑아냅니다.',
    tags: ['미드저니', '실사인물', '포트폴리오사진', '스튜디오조명'],
    prompt: `Professional cinematic studio portrait of a charismatic 30-year-old tech creator, modern minimalist dark studio background, neon subtle cyan and indigo rim lighting, dressed in modern smart casual black blazer, confident friendly gaze, sharp focus on eyes, shot on Sony A7R V, 85mm f/1.4 GM lens, soft shadows, 8k resolution, photorealistic, cinematic atmosphere, authentic skin texture --ar 16:9 --v 6.1 --style raw --q 2`,
    tips: [
      '성별이나 연령대를 바꾸려면 "30-year-old tech creator" 부분을 원하는 단어로 수정하세요.',
      '가로형 배너가 아닌 인스타그램용 세로형 이미지를 원하시면 맨 뒤의 `--ar 16:9`를 `--ar 4:5` 또는 `--ar 9:16`으로 변경하세요.'
    ],
    downloadsCount: 2310,
    copiedCount: 5120,
    isPopular: true,
    date: '2026.09.05'
  },
  {
    id: 'res-4',
    title: '바이브 코딩(Vibe Coding): 한 번에 끝내는 풀스택 웹 기획 & PRD 프롬프트',
    category: 'coding',
    categoryLabel: '바이브 코딩 & 자동화',
    description: '코딩을 몰라도 AI에게 프로젝트 구조, API 명세서, 데이터베이스 스키마까지 완벽하게 지시할 수 있는 제품 요구사항 명세서(PRD) 생성 프롬프트입니다.',
    tags: ['바이브코딩', 'PRD', 'Next.js', 'Cursor', 'AI개발'],
    prompt: `너는 실리콘밸리 수석 테크니컬 프로덕트 매니저(Senior Technical PM)야.
내가 만들고자 하는 웹 서비스 아이디어를 듣고, AI 코딩 도구(Cursor, Antigravity, Claude Code 등)가 오차 없이 한 번에 구현할 수 있는 상세 PRD(Product Requirement Document)를 작성해 줘.

[내가 만들고 싶은 서비스]
- 서비스 개요: [서비스 핵심 기능 및 목적 입력]
- 타겟 디바이스: 모바일 반응형 웹

[작성 요구 항목]
1. 프로젝트 아키텍처 (추천 프레임워크: Next.js App Router, Tailwind CSS, TypeScript)
2. 핵심 페이지별 컴포넌트 계층 구조 및 유저 인터랙션 플로우
3. 데이터 모델 및 스키마 설계 (JSON/TypeScript 인터페이스 형태)
4. 클라이언트-서버 간 필요한 API 엔드포인트 목록
5. 개발 시 주의해야 할 엣지 케이스 및 예외 처리 목록`,
    tips: [
      '이 프롬프트로 나온 PRD 결과물을 복사해 AI 코딩 에디터(Cursor/Antigravity)에 첫 프롬프트로 넣으면 엉뚱한 코드가 나오는 것을 완벽히 방지합니다.'
    ],
    downloadsCount: 1650,
    copiedCount: 4200,
    isPopular: true,
    isNew: true,
    date: '2026.09.12'
  },
  {
    id: 'res-5',
    title: '반복 업무 90% 줄이는 파이썬 엑셀 데이터 자동 정리 프롬프트',
    category: 'coding',
    categoryLabel: '바이브 코딩 & 자동화',
    description: '매일 반복되는 지저분한 엑셀 파일 취합, 중복 제거, 결측치 정리 및 요약 보고서 작성을 1분 만에 끝내는 스크립트 작성 프롬프트입니다.',
    tags: ['업무자동화', '파이썬', '엑셀자동화', 'ChatGPT_Code'],
    prompt: `너는 파이썬 데이터 엔지니어링 전문가야.
비전공자도 에러 없이 바로 실행할 수 있도록, 엑셀 파일(.xlsx/.csv)을 처리하는 간결하고 안정적인 Python Pandas 스크립트를 작성해 줘.

[내가 하려는 작업]
- 입력 파일 형태: [예: 여러 개의 월별 매출 엑셀 파일]
- 원하는 처리 작업: [예: 중복된 주문번호 제거, 빈칸은 0으로 채우기, 고객별 총 결제금액 합산]
- 최종 출력: 정리된 결과를 '최종_요약결과.xlsx'로 저장

[요구사항]
- 초보자도 바로 쓸 수 있도록 필요한 라이브러리 설치 명령어(\`pip install pandas openpyxl\`)부터 시작할 것.
- 코드 라인마다 친절한 주석을 달고, 파일 경로 수정 부분은 눈에 띄게 표시해 줄 것.`,
    tips: [
      'ChatGPT의 Advanced Data Analysis(코드 인터프리터) 기능에 엑셀 파일과 함께 이 프롬프트를 넣으면 파이썬 설치 없이도 웹에서 즉시 처리됩니다.'
    ],
    downloadsCount: 890,
    copiedCount: 1890,
    date: '2026.09.02'
  },
  {
    id: 'res-6',
    title: '미드저니 미니멀 모던 웹 UI/UX 웹사이트 목업 생성 프롬프트',
    category: 'midjourney',
    categoryLabel: '미드저니 & 이미지',
    description: '클라이언트 제안서나 포트폴리오에 넣기 좋은 세련된 다크 테크 글래스모피즘 웹사이트 메인 화면 디자인 목업 프롬프트입니다.',
    tags: ['UI목업', '웹디자인', '글래스모피즘', '미드저니'],
    prompt: `UI/UX design of a futuristic AI platform homepage, landing page layout, dark mode aesthetic, sleek typography, glowing neon violet and cyan accents, clean dashboard widgets, high-fidelity responsive web mockup displayed on sleek laptop screen, modern minimalist, Dribbble trending, Behance award-winning style, 8k resolution --ar 16:9 --v 6.1 --style raw`,
    tips: [
      '웹사이트 제작 클라이언트 미팅 전 시각 자료가 필요할 때 이 프롬프트로 3~4가지 무드보드를 만들어 보여주면 계약 성사율이 대폭 올라갑니다.'
    ],
    downloadsCount: 1120,
    copiedCount: 2900,
    isNew: true,
    date: '2026.09.11'
  }
];
