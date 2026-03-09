import fs from 'fs';
import path from 'path';
import type { BlogPost, BlogCategory } from '@/content/blog';

const ARTICLES_PATH = path.join(process.cwd(), 'data', 'articles.json');

export interface AdminArticle {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
  faqs: { question: string; answer: string }[];
}

export function getAdminArticles(): AdminArticle[] {
  try {
    if (fs.existsSync(ARTICLES_PATH)) {
      const raw = fs.readFileSync(ARTICLES_PATH, 'utf-8');
      return JSON.parse(raw);
    }
  } catch {
    // fall through
  }
  return [];
}

export function saveArticle(article: AdminArticle): AdminArticle[] {
  const dir = path.dirname(ARTICLES_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const articles = getAdminArticles();
  const existingIndex = articles.findIndex((a) => a.slug === article.slug);
  if (existingIndex >= 0) {
    articles[existingIndex] = article;
  } else {
    articles.unshift(article);
  }
  fs.writeFileSync(ARTICLES_PATH, JSON.stringify(articles, null, 2));
  return articles;
}

export function deleteArticle(slug: string): AdminArticle[] {
  const articles = getAdminArticles().filter((a) => a.slug !== slug);
  const dir = path.dirname(ARTICLES_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(ARTICLES_PATH, JSON.stringify(articles, null, 2));
  return articles;
}

export function getAllBlogPosts(): BlogPost[] {
  // Dynamic import workaround - merge static + admin articles
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { blogPosts } = require('@/content/blog');
  const adminArticles = getAdminArticles();
  const allPosts = [...adminArticles, ...blogPosts] as BlogPost[];
  // Sort by date descending
  allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return allPosts;
}
