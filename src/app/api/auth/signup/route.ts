import { NextResponse } from 'next/server';
import { setSessionCookie, UserSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: '모든 필수 항목을 입력해 주세요.' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 6자리 이상이어야 안전합니다.' },
        { status: 400 }
      );
    }

    const user: UserSession = {
      id: 'user_' + Date.now().toString().slice(-6),
      name: name + ' (크루)',
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
      { error: '회원가입 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
