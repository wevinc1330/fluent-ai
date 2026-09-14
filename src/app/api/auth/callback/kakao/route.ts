import { NextResponse } from 'next/server';
import { setSessionCookie, UserSession } from '@/lib/auth';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  const host = req.headers.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const redirectUri = protocol + '://' + host + '/api/auth/callback/kakao';

  if (error || !code) {
    return NextResponse.redirect(new URL('/auth/signin?error=kakao_cancelled', req.url));
  }

  const kakaoClientId = process.env.KAKAO_REST_API_KEY || process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;

  try {
    const tokenParams = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: kakaoClientId || '',
      redirect_uri: redirectUri,
      code,
    });
    if (kakaoClientSecret) {
      tokenParams.append('client_secret', kakaoClientSecret);
    }

    const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: tokenParams.toString(),
    });

    if (!tokenRes.ok) {
      return NextResponse.redirect(new URL('/auth/signin?error=token_failed', req.url));
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    if (!userRes.ok) {
      return NextResponse.redirect(new URL('/auth/signin?error=profile_failed', req.url));
    }

    const kakaoUser = await userRes.json();
    const nickname = kakaoUser.kakao_account?.profile?.nickname || '카카오 회원';
    const profileImg = kakaoUser.kakao_account?.profile?.profile_image_url || 
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
    const email = kakaoUser.kakao_account?.email || ('kakao_' + kakaoUser.id + '@user.kakao');

    const user: UserSession = {
      id: 'kakao_' + kakaoUser.id,
      name: nickname + ' 님',
      email,
      avatar: profileImg,
      provider: 'kakao',
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    await setSessionCookie(user);

    return NextResponse.redirect(new URL('/resources?login=kakao_success', req.url));
  } catch (err) {
    return NextResponse.redirect(new URL('/auth/signin?error=oauth_error', req.url));
  }
}
