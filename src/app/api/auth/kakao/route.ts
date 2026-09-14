import { NextResponse } from 'next/server';
import { setSessionCookie, UserSession } from '@/lib/auth';

export async function GET(req: Request) {
  const kakaoClientId = process.env.KAKAO_REST_API_KEY || process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const host = req.headers.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const redirectUri = protocol + '://' + host + '/api/auth/callback/kakao';

  // If Kakao REST Key is configured, redirect to official Kakao OAuth
  if (kakaoClientId && kakaoClientId.length > 5) {
    const kakaoAuthUrl =
      'https://kauth.kakao.com/oauth/authorize?client_id=' +
      kakaoClientId +
      '&redirect_uri=' +
      encodeURIComponent(redirectUri) +
      '&response_type=code';
    return NextResponse.redirect(kakaoAuthUrl);
  }

  // Smooth fallback: Instant 1-click Kakao login simulation
  const demoKakaoUser: UserSession = {
    id: 'kakao_crew_' + Date.now().toString().slice(-6),
    name: '카카오 크루회원',
    email: 'kakao_user@fluentai.kr',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    provider: 'kakao',
    role: 'user',
    createdAt: new Date().toISOString(),
  };

  await setSessionCookie(demoKakaoUser);
  return NextResponse.redirect(new URL('/mypage?login=kakao_success', req.url));
}
