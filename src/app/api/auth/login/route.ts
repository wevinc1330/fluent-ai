import { NextResponse } from 'next/server';
import { setSessionCookie, UserSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호를 모두 입력해 주세요.' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 최소 6자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    const username = email.split('@')[0];
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);

    const user: UserSession = {
      id: 'email_' + Date.now().toString().slice(-6),
      name: displayName + ' 님',
      email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      provider: 'email',
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    await setSessionCookie(user);

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json(
      { error: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
