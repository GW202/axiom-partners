import fs from 'fs';
import path from 'path';
import type { BlogPost, BlogCategory } from '@/content/blog';

// Use /tmp on serverless (Vercel), fall back to project dir for local dev
function getDataDir(): string {
  const tmpPath = path.join('/tmp', 'axiom-data');
  const localPath = path.join(process.cwd(), 'data');

  try {
    if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath, { recursive: true });
    }
    const testFile = path.join(localPath, '.write-test');
    fs.writeFileSync(testFile, '');
    fs.unlinkSync(testFile);
    return localPath;
  } catch {
    if (!fs.existsSync(tmpPath)) {
      fs.mkdirSync(tmpPath, { recursive: true });
    }
    return tmpPath;
  }
}

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
    const articlesPath = path.join(getDataDir(), 'articles.json');
    if (fs.existsSync(articlesPath)) {
      const raw = fs.readFileSync(articlesPath, 'utf-8');
      return JSON.parse(raw);
    }
  } catch {
    // fall through
  }
  return [];
}

export function saveArticle(article: AdminArticle): AdminArticle[] {
  const articlesPath = path.join(getDataDir(), 'articles.json');
  const articles = getAdminArticles();
  const existingIndex = articles.findIndex((a) => a.slug === article.slug);
  if (existingIndex >= 0) {
    articles[existingIndex] = article;
  } else {
    articles.unshift(article);
  }
  fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2));
  return articles;
}

export function deleteArticle(slug: string): AdminArticle[] {
  const articlesPath = path.join(getDataDir(), 'articles.json');
  const articles = getAdminArticles().filter((a) => a.slug !== slug);
  fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2));
  return articles;
}

export function getAllBlogPosts(): BlogPost[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { blogPosts } = require('@/content/blog');
  const adminArticles = getAdminArticles();
  const allPosts = [...adminArticles, ...blogPosts] as BlogPost[];
  allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return allPosts;
}
