import { NextResponse } from 'next/server';
import { setSessionCookie } from '@/lib/auth';
import { registerUser } from '@/lib/userStore';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: '이름, 이메일, 비밀번호를 모두 입력해 주세요.' },
        { status: 400 }
      );
    }

    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해 주세요.' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 최소 6자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    try {
      const user = registerUser(name, email, password);
      await setSessionCookie(user);
      return NextResponse.json({ success: true, user });
    } catch (err: any) {
      if (err?.message === 'ALREADY_EXISTS') {
        return NextResponse.json(
          { error: '이미 가입된 이메일 주소입니다. 로그인해 주세요.' },
          { status: 409 }
        );
      }
      throw err;
    }
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: '회원가입 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
}
