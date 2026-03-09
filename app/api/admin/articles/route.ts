import { NextResponse } from 'next/server';
import { getAdminArticles, saveArticle, deleteArticle, type AdminArticle } from '@/lib/admin-articles';
import { blogCategories } from '@/content/blog';

export const dynamic = 'force-dynamic';

export async function GET() {
  const articles = getAdminArticles();
  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AdminArticle;

    // Validate required fields
    if (!body.title?.trim()) {
      return NextResponse.json({ error: 'Title is required.' }, { status: 400 });
    }
    if (!body.description?.trim()) {
      return NextResponse.json({ error: 'Description is required.' }, { status: 400 });
    }
    if (!body.category || !blogCategories.includes(body.category)) {
      return NextResponse.json({ error: 'Valid category is required.' }, { status: 400 });
    }
    if (!body.content?.length || !body.content[0]?.trim()) {
      return NextResponse.json({ error: 'At least one content paragraph is required.' }, { status: 400 });
    }

    // Generate slug if not provided
    const slug = body.slug?.trim() || body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 80);

    // Estimate read time
    const wordCount = body.content.join(' ').split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    const article: AdminArticle = {
      slug,
      title: body.title.trim().slice(0, 200),
      description: body.description.trim().slice(0, 500),
      category: body.category,
      author: body.author?.trim() || 'Axiom Facility Partners',
      publishedAt: body.publishedAt || new Date().toISOString().split('T')[0],
      readTime,
      tags: (body.tags || []).map((t: string) => t.trim().toLowerCase()).filter(Boolean).slice(0, 10),
      content: body.content.map((p: string) => p.trim()).filter(Boolean),
      keyTakeaways: (body.keyTakeaways || []).map((t: string) => t.trim()).filter(Boolean).slice(0, 8),
      faqs: (body.faqs || [])
        .filter((f: { question: string; answer: string }) => f.question?.trim() && f.answer?.trim())
        .map((f: { question: string; answer: string }) => ({
          question: f.question.trim(),
          answer: f.answer.trim(),
        }))
        .slice(0, 5),
    };

    const articles = saveArticle(article);
    return NextResponse.json({ success: true, article, total: articles.length });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { slug } = (await request.json()) as { slug: string };
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required.' }, { status: 400 });
    }
    const articles = deleteArticle(slug);
    return NextResponse.json({ success: true, total: articles.length });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
