import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/admin-articles';
import { generateGBPPosts } from '@/lib/gbp-posts';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    // Return all blog post titles + slugs for the dropdown
    const posts = getAllBlogPosts();
    const summaries = posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      publishedAt: p.publishedAt,
    }));
    return NextResponse.json(summaries);
  }

  const posts = getAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return NextResponse.json({ error: 'Article not found.' }, { status: 404 });
  }

  const gbpPosts = generateGBPPosts(post);
  return NextResponse.json({ article: post.title, posts: gbpPosts });
}
