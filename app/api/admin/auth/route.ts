import { NextResponse } from 'next/server';

const ADMIN_USERNAME = 'AFM2026';
const ADMIN_PASSWORD = 'Cleaningisnotaoption2026';

export async function POST(request: Request) {
  try {
    const { username, password } = (await request.json()) as {
      username: string;
      password: string;
    };

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = Buffer.from(`${ADMIN_USERNAME}:${Date.now()}`).toString('base64');
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
