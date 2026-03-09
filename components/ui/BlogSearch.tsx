'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { type BlogPost, type BlogCategory, blogCategories } from '@/content/blog';

interface BlogSearchProps {
  posts: BlogPost[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');

  const filtered = useMemo(() => {
    let results = posts;

    if (activeCategory !== 'All') {
      results = results.filter((p) => p.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return results;
  }, [posts, query, activeCategory]);

  return (
    <>
      {/* Search & Filter */}
      <div className="mb-10 space-y-5">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-navy-400"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search articles by keyword, topic, or tag..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full rounded-lg border border-navy-200 bg-white py-3 pl-11 pr-4 text-sm text-navy-950 shadow-sm transition-colors placeholder:text-navy-400 focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            aria-label="Search articles"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === 'All'
                ? 'border-bronze-400 bg-bronze-50 text-bronze-700'
                : 'border-navy-200 bg-white text-navy-500 hover:border-navy-300 hover:text-navy-700'
            }`}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-bronze-400 bg-bronze-50 text-bronze-700'
                  : 'border-navy-200 bg-white text-navy-500 hover:border-navy-300 hover:text-navy-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-navy-100 bg-navy-50/50 py-16 text-center">
          <p className="text-sm text-navy-500">
            No articles match your search. Try a different keyword or category.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-md"
            >
              <span className="mb-3 inline-flex self-start rounded-full bg-bronze-50 px-2.5 py-1 text-xs font-medium text-bronze-700">
                {post.category}
              </span>
              <h3 className="text-base font-semibold leading-snug text-navy-950 transition-colors group-hover:text-bronze-700">
                {post.title}
              </h3>
              <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-navy-500">
                {post.description}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-navy-400">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="text-navy-200">|</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
