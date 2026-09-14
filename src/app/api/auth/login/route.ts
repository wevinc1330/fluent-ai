import { NextResponse } from 'next/server';
import { setSessionCookie } from '@/lib/auth';
import { authenticateUser } from '@/lib/userStore';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: '이메일과 비밀번호를 모두 입력해 주세요.' },
        { status: 400 }
      );
    }

    const user = authenticateUser(email, password);

    if (!user) {
      return NextResponse.json(
        { error: '등록되지 않은 이메일이거나 비밀번호가 일치하지 않습니다.' },
        { status: 401 }
      );
    }

    await setSessionCookie(user);

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: '로그인 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
}
