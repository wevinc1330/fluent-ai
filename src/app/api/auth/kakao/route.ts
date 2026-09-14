import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const kakaoClientId = process.env.KAKAO_REST_API_KEY || process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const host = req.headers.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const redirectUri = protocol + '://' + host + '/api/auth/callback/kakao';

  if (!kakaoClientId) {
    return NextResponse.redirect(new URL('/auth/signin?kakao_setup=needed', req.url));
  }

  const kakaoAuthUrl = 'https://kauth.kakao.com/oauth/authorize?client_id=' + kakaoClientId + '&redirect_uri=' + encodeURIComponent(redirectUri) + '&response_type=code';
  return NextResponse.redirect(kakaoAuthUrl);
}
