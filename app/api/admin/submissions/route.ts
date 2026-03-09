import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
  const skip = (page - 1) * limit;

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { submissions: [], total: 0, page, totalPages: 0, message: 'Database not connected.' },
      { status: 200 }
    );
  }

  try {
    const [submissions, total] = await Promise.all([
      prisma.consultationSubmission.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.consultationSubmission.count(),
    ]);

    return NextResponse.json({
      submissions,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error('[Submissions API Error]', err);
    return NextResponse.json(
      { submissions: [], total: 0, page, totalPages: 0, error: 'Failed to fetch submissions.' },
      { status: 200 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Submission ID is required.' }, { status: 400 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'Database not connected.' }, { status: 503 });
    }

    await prisma.consultationSubmission.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Delete Submission Error]', err);
    return NextResponse.json({ error: 'Failed to delete submission.' }, { status: 500 });
  }
}
