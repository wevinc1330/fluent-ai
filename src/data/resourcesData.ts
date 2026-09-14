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
  },
  {
    id: 'res-7',
    title: 'Claude 3.7 맞춤 시스템 페르소나 주입: 전략 컨설턴트 모드',
    category: 'chatgpt',
    categoryLabel: 'ChatGPT / Claude',
    description: '맥킨지 출신 시니어 전략 컨설턴트의 논리 구조(MECE, 피라미드 원칙)를 Claude 또는 ChatGPT에 주입하여 완벽한 사업 기획서를 도출합니다.',
    tags: ['Claude3.7', '비즈니스기획', '페르소나', '컨설팅'],
    prompt: `[시스템 페르소나 설정]
너는 글로벌 전략 컨설팅 펌(McKinsey)에서 15년간 테크/이커머스 비즈니스 전략을 수립해 온 파트너급 수석 컨설턴트야.

[사고 방식 원칙]
1. MECE 원칙: 모든 문제 분석은 "상호 배타적이며 전체를 포괄(Mutually Exclusive, Collectively Exhaustive)"해야 함.
2. 피라미드 구조: 결론(핵심 통찰)을 맨 앞에 제시하고, 그 뒤에 3가지 강력한 근거와 실행 방안을 뒷받침할 것.
3. 모호한 조언 금지: "노력해야 한다" 같은 추상적 문장 대신, 당장 다음 주에 실행할 수 있는 실행 로드맵(Action Item)으로 답변할 것.

[내 요청 사항]
아래 비즈니스 아이디어에 대해 시장 기회, 경쟁 우위(Moat), 초기 100명의 유료 고객을 확보하기 위한 Go-to-Market 전략을 제시해 줘.
- 아이디어: [내 사업/서비스 아이디어 입력]`,
    tips: [
      'Claude의 Thinking 모드를 켜고 이 프롬프트를 입력하면 더욱 심도 깊은 분석 결과가 도출됩니다.'
    ],
    downloadsCount: 1780,
    copiedCount: 4620,
    isPopular: true,
    isNew: true,
    date: '2026.09.13'
  },
  {
    id: 'res-8',
    title: '스마트스토어 & 쿠팡 구매전환율 극대화 상세페이지 기획기',
    category: 'marketing',
    categoryLabel: '마케팅 & 카피라이팅',
    description: '이탈률을 낮추고 구매 전환율을 극대화하는 8단계 이커머스 상세페이지 후킹 카피 및 섹션별 기획안을 자동 완성합니다.',
    tags: ['스마트스토어', '상세페이지', '쿠팡', '이커머스'],
    prompt: `[역할]
너는 연 매출 100억 대 이커머스 전문 상세페이지 디렉터야.

[제품 정보]
- 제품명: [제품명]
- 기존 제품들과의 차별점: [핵심 장점]
- 가격대: [판매 가격]

[8단계 상세페이지 구성안 작성]
1. 0.5초 썸네일/인트로: 이탈 방지 충격 후킹 헤드라인
2. 타겟 공감: "혹시 이런 경험 있으신가요?" 3가지 체크리스트
3. 근본적 원인 규명: 기존 제품을 써도 해결되지 않았던 이유
4. 제품 솔루션 제시: 우리 제품만의 독점 기술/소재
5. 압도적 시각 증거: 전/후 비교 실험 및 데이터 시각화 가이드
6. 고객 리뷰 하이라이트: 진정성 있는 3가지 페르소나 리뷰 예시
7. 신뢰 보증: 무료 반품 / 100% 환불 보장 섹션 카피
8. 한정 수량/마감 임박 CTA: 오늘 구매해야 하는 강력한 명분`,
    tips: [
      '결과물을 캔바(Canva)나 망고보드 템플릿에 텍스트만 옮겨 넣으면 1시간 만에 상세페이지 제작이 끝납니다.'
    ],
    downloadsCount: 2040,
    copiedCount: 5310,
    isPopular: true,
    date: '2026.09.09'
  },
  {
    id: 'res-9',
    title: 'ElevenLabs & Vrew 찰떡궁합! AI 숏폼 나레이션 음성 대본 최적화',
    category: 'video',
    categoryLabel: '숏폼 & AI 영상',
    description: 'AI 성우가 어색하게 읽지 않고 사람이 말하듯 자연스러운 억양과 쉼표 타이밍을 갖추도록 나레이션 텍스트를 전처리하는 프롬프트입니다.',
    tags: ['일레븐랩스', 'Vrew', 'AI보이스', '숏폼더빙'],
    prompt: `[역할]
너는 숏폼 전문 오디오북/나레이션 스피치 코치야.
내가 전달하는 원고를 AI 성우(ElevenLabs, 타입캐스트, 클로바더빙)가 읽었을 때 로봇처럼 딱딱하지 않고 사람처럼 생동감 있게 읽을 수 있도록 원고를 튜닝해 줘.

[튜닝 규칙]
1. 쉼표(,)를 전략적으로 배치하여 자연스러운 호흡 구간 만들기
2. 강조할 단어 앞뒤에 미세한 공백 추가하기
3. 구어체(문어체 금지): "~하였습니다" -> "~했죠", "~인 것입니다" -> "~인 거예요"
4. 감정 지시문 표기 (예: [놀란 어조로], [속삭이듯], [단호하게])

[내 원고 원문]
[여기에 숏폼 대본 텍스트 입력]`,
    tips: [
      'ElevenLabs의 Stability 값을 40~50%로 낮추고 이 대본을 넣으면 감정이 풍부한 사람 목소리가 구현됩니다.'
    ],
    downloadsCount: 1530,
    copiedCount: 3950,
    date: '2026.09.07'
  },
  {
    id: 'res-10',
    title: '미드저니 3D 귀여운 아이소메트릭 앱 아이콘 & 일러스트',
    category: 'midjourney',
    categoryLabel: '미드저니 & 이미지',
    description: '클레이(Clay) 3D 질감의 부드럽고 세련된 아이소메트릭 앱 아이콘 및 비즈니스 그래픽을 생성하는 프롬프트입니다.',
    tags: ['미드저니', '3D아이콘', '클레이아트', '아이소메트릭'],
    prompt: `Cute 3D isometric icon of a glowing robotic AI brain floating over sleek laptop, soft clay texture, pastel neon blue and lilac gradient colors, smooth round edges, studio soft box lighting, Blender 3D rendering style, Dribbble trending, clean isolated white background, 8k resolution --ar 1:1 --v 6.1 --style raw`,
    tips: [
      '"glowing robotic AI brain" 부분을 원하는 사물(예: rocket, shopping cart, coffee cup)로 바꾸면 시리즈 아이콘이 완성됩니다.'
    ],
    downloadsCount: 1890,
    copiedCount: 4780,
    isPopular: true,
    date: '2026.09.04'
  },
  {
    id: 'res-11',
    title: '뉴스레터 & 인스타그램 카드뉴스 10장 완성 구조화 프롬프트',
    category: 'marketing',
    categoryLabel: '마케팅 & 카피라이팅',
    description: '저장수와 공유수를 폭발시키는 10장 규격 카드뉴스의 슬라이드별 헤드라인과 본문 카피를 1분 만에 설계해 줍니다.',
    tags: ['인스타카드뉴스', '뉴스레터', '저장수폭발', 'SNS마케팅'],
    prompt: `[역할]
너는 50만 팔로워 인스타그램 지식/트렌드 계정의 메인 에디터야.

[주제]
[예: 2026년 모르면 뒤처지는 필수 생산성 툴 5가지]

[카드뉴스 10장 슬라이드 구성]
- 1장 (표지): 저장하지 않고는 못 배기는 충격적인 숫자와 역발상 헤드라인
- 2장 (문제 제기): "아직도 이렇게 일하시나요?"
- 3~7장 (본문 5가지): 한 장당 핵심 팁 1개씩 (도구명, 한 줄 정의, 실사용 효과)
- 8장 (주의사항/요약): 이것만 주의하면 효과 2배
- 9장 (체크리스트): 지금 바로 써먹는 3단계 요약
- 10장 (CTA): "도움이 되셨다면 [저장]해두고 두고두고 꺼내보세요!"`,
    tips: [
      '결과를 카드뉴스 제작 툴에 넣고 인스타에 업로드하면 저장률(Save Rate)이 30% 이상 증가합니다.'
    ],
    downloadsCount: 1670,
    copiedCount: 4120,
    date: '2026.09.06'
  },
  {
    id: 'res-12',
    title: '웹 크롤러 & 네이버 트렌드 키워드 자동 수집 파이썬 프롬프트',
    category: 'coding',
    categoryLabel: '바이브 코딩 & 자동화',
    description: '매일 아침 네이버 검색어 및 최신 뉴스 키워드를 자동 크롤링하여 텔레그램이나 슬랙으로 요약 전송해 주는 봇 코드 생성기입니다.',
    tags: ['파이썬', '웹크롤링', '자동화봇', '트렌드분석'],
    prompt: `너는 파이썬 웹 스크래핑 및 자동화 전문 엔지니어야.
특정 웹사이트나 포털의 최신 트렌드 키워드를 주기적으로 긁어와(Scraping) 깔끔한 텍스트로 요약하는 파이썬 스크립트를 작성해 줘.

[작업 명세]
1. Python \`requests\`, \`BeautifulSoup\` 라이브러리 사용
2. User-Agent 헤더를 포함하여 차단 방지 처리
3. 수집된 상위 10개 키워드 및 관련 기사 제목을 텍스트 파일 또는 콘솔에 출력
4. 에러 발생 시 예외 처리(Try-Except) 및 재시도 로직 포함`,
    tips: [
      '로컬 PC에서 스케줄러(Windows 작업 스케줄러)로 등록해 두면 매일 아침 자동으로 실행됩니다.'
    ],
    downloadsCount: 1240,
    copiedCount: 3100,
    date: '2026.09.01'
  }
];
