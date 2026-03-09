import { NextResponse } from 'next/server';
import { getSubmissions, deleteSubmission } from '@/lib/submissions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
  const skip = (page - 1) * limit;

  const all = getSubmissions();
  const total = all.length;
  const submissions = all.slice(skip, skip + limit);

  return NextResponse.json({
    submissions,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Submission ID is required.' }, { status: 400 });
    }

    const deleted = deleteSubmission(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Submission not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Delete Submission Error]', err);
    return NextResponse.json({ error: 'Failed to delete submission.' }, { status: 500 });
  }
}
