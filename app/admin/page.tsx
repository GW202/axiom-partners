'use client';

import { useState, useEffect, useCallback } from 'react';
import { blogCategories, type BlogCategory } from '@/content/blog';

/* ─── Types ─── */
interface SiteConfig {
  companyName: string;
  phone: string;
  phoneRaw: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface AdminArticle {
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

interface ConsultationSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string;
  facilityType: string;
  squareFootage: string | null;
  services: string[];
  message: string | null;
  createdAt: string;
}

type Tab = 'config' | 'submissions' | 'articles' | 'new-article';

/* ─── Login Gate ─── */
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem('admin_token', data.token);
        onLogin();
      } else {
        setError('Invalid username or password.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-navy-950">Admin Login</h1>
          <p className="mt-1 text-sm text-navy-500">
            Enter your credentials to access the admin panel.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
          <div>
            <label htmlFor="admin-username" className="block text-sm font-medium text-navy-700">
              Username
            </label>
            <input
              id="admin-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="block text-sm font-medium text-navy-700">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600" role="alert">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-bronze-600/20 transition-all hover:shadow-xl disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState<Tab>('config');

  useEffect(() => {
    const token = sessionStorage.getItem('admin_token');
    setAuthenticated(!!token);
    setChecked(true);
  }, []);

  function handleLogout() {
    sessionStorage.removeItem('admin_token');
    setAuthenticated(false);
  }

  if (!checked) return null;

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'config', label: 'Site Settings' },
    { id: 'submissions', label: 'Submissions' },
    { id: 'articles', label: 'Articles' },
    { id: 'new-article', label: 'New Article' },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-950">Admin Panel</h1>
          <p className="mt-1 text-sm text-navy-500">
            Manage site settings, contact information, and blog articles.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md border border-navy-200 px-4 py-2 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50"
        >
          Sign Out
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex gap-1 rounded-lg border border-navy-200 bg-navy-50 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              tab === t.id
                ? 'bg-white text-navy-950 shadow-sm'
                : 'text-navy-500 hover:text-navy-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'config' && <ConfigPanel />}
      {tab === 'submissions' && <SubmissionsPanel />}
      {tab === 'articles' && <ArticlesPanel onEdit={() => setTab('new-article')} />}
      {tab === 'new-article' && <ArticleEditor onSaved={() => setTab('articles')} />}
    </div>
  );
}

/* ─── Submissions Panel ─── */
function SubmissionsPanel() {
  const [submissions, setSubmissions] = useState<ConsultationSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [dbMessage, setDbMessage] = useState('');

  const loadSubmissions = useCallback((p: number) => {
    setLoading(true);
    fetch(`/api/admin/submissions?page=${p}&limit=20`)
      .then((r) => r.json())
      .then((data) => {
        setSubmissions(data.submissions || []);
        setTotalPages(data.totalPages || 0);
        setTotal(data.total || 0);
        setDbMessage(data.message || '');
        setLoading(false);
      })
      .catch(() => {
        setDbMessage('Failed to load submissions.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadSubmissions(page);
  }, [page, loadSubmissions]);

  async function handleDelete(id: string) {
    if (!confirm('Delete this submission?')) return;
    const res = await fetch('/api/admin/submissions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      loadSubmissions(page);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  if (loading) {
    return <p className="text-sm text-navy-500">Loading submissions...</p>;
  }

  if (dbMessage) {
    return (
      <div className="rounded-xl border border-navy-100 bg-navy-50/50 py-16 text-center">
        <p className="text-sm text-navy-500">{dbMessage}</p>
        <p className="mt-1 text-xs text-navy-400">
          Configure DATABASE_URL to enable submission storage.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-navy-500">
        {total} consultation submission{total !== 1 ? 's' : ''}
      </p>

      {submissions.length === 0 ? (
        <div className="rounded-xl border border-navy-100 bg-navy-50/50 py-16 text-center">
          <p className="text-sm text-navy-500">No submissions yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="rounded-xl border border-navy-100 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setExpanded(expanded === sub.id ? null : sub.id)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-bronze-50 px-2 py-0.5 text-xs font-medium text-bronze-700">
                      {sub.facilityType}
                    </span>
                    <time className="text-xs text-navy-400" dateTime={sub.createdAt}>
                      {formatDate(sub.createdAt)}
                    </time>
                  </div>
                  <h3 className="mt-1 truncate text-sm font-semibold text-navy-950">
                    {sub.name} — {sub.company}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-navy-500">{sub.email}</p>
                </div>
                <span className="ml-4 flex-shrink-0 text-navy-400">
                  {expanded === sub.id ? '▲' : '▼'}
                </span>
              </button>

              {expanded === sub.id && (
                <div className="border-t border-navy-100 px-5 pb-5 pt-4">
                  <dl className="grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-medium text-navy-400">Email</dt>
                      <dd className="text-navy-950">
                        <a href={`mailto:${sub.email}`} className="text-bronze-600 hover:underline">
                          {sub.email}
                        </a>
                      </dd>
                    </div>
                    {sub.phone && (
                      <div>
                        <dt className="text-xs font-medium text-navy-400">Phone</dt>
                        <dd className="text-navy-950">
                          <a href={`tel:${sub.phone}`} className="text-bronze-600 hover:underline">
                            {sub.phone}
                          </a>
                        </dd>
                      </div>
                    )}
                    {sub.squareFootage && (
                      <div>
                        <dt className="text-xs font-medium text-navy-400">Square Footage</dt>
                        <dd className="text-navy-950">{sub.squareFootage}</dd>
                      </div>
                    )}
                    {sub.services.length > 0 && (
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-medium text-navy-400">Services Requested</dt>
                        <dd className="mt-1 flex flex-wrap gap-1.5">
                          {sub.services.map((s) => (
                            <span
                              key={s}
                              className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs text-navy-700"
                            >
                              {s}
                            </span>
                          ))}
                        </dd>
                      </div>
                    )}
                    {sub.message && (
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-medium text-navy-400">Message</dt>
                        <dd className="mt-1 whitespace-pre-wrap text-navy-800">{sub.message}</dd>
                      </div>
                    )}
                  </dl>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDelete(sub.id)}
                      className="rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="rounded-md border border-navy-200 px-3 py-1.5 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50 disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-navy-500">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded-md border border-navy-200 px-3 py-1.5 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Config Panel ─── */
function ConfigPanel() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/admin/config')
      .then((r) => r.json())
      .then(setConfig)
      .catch(() => setMessage('Failed to load config.'));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!config) return;
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/admin/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setMessage(data?.error || 'Failed to save.');
      } else {
        setMessage('Settings saved successfully.');
      }
    } catch {
      setMessage('Network error. Please try again.');
    }
    setSaving(false);
  }

  function update(field: keyof SiteConfig, value: string) {
    setConfig((prev) => (prev ? { ...prev, [field]: value } : prev));
  }

  if (!config) {
    return <p className="text-sm text-navy-500">Loading settings...</p>;
  }

  return (
    <form onSubmit={handleSave} className="space-y-8">
      {/* Contact Info */}
      <fieldset className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
          Contact Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company Name" value={config.companyName} onChange={(v) => update('companyName', v)} />
          <Field label="Email" type="email" value={config.email} onChange={(v) => update('email', v)} />
          <Field label="Phone (Display)" value={config.phone} onChange={(v) => update('phone', v)} placeholder="(407) 294-6601" />
          <Field label="Phone (Raw / tel:)" value={config.phoneRaw} onChange={(v) => update('phoneRaw', v)} placeholder="+14072946601" />
        </div>
      </fieldset>

      {/* Address */}
      <fieldset className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
          Business Address
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Street Address" value={config.streetAddress} onChange={(v) => update('streetAddress', v)} className="sm:col-span-2" />
          <Field label="City" value={config.city} onChange={(v) => update('city', v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="State" value={config.state} onChange={(v) => update('state', v)} />
            <Field label="Postal Code" value={config.postalCode} onChange={(v) => update('postalCode', v)} />
          </div>
        </div>
      </fieldset>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-bronze-600/20 transition-all hover:shadow-xl disabled:opacity-60"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
        {message && (
          <p className={`text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

/* ─── Articles Panel ─── */
function ArticlesPanel({ onEdit }: { onEdit: () => void }) {
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const loadArticles = useCallback(() => {
    setLoading(true);
    fetch('/api/admin/articles')
      .then((r) => r.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  async function handleDelete(slug: string) {
    if (!confirm(`Delete article "${slug}"?`)) return;
    await fetch('/api/admin/articles', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    });
    loadArticles();
  }

  if (loading) {
    return <p className="text-sm text-navy-500">Loading articles...</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-navy-500">
          {articles.length} admin-created article{articles.length !== 1 ? 's' : ''}
          <span className="text-navy-400"> (8 static articles always included)</span>
        </p>
        <button
          type="button"
          onClick={onEdit}
          className="rounded-md bg-navy-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-800"
        >
          + New Article
        </button>
      </div>

      {articles.length === 0 ? (
        <div className="rounded-xl border border-navy-100 bg-navy-50/50 py-16 text-center">
          <p className="text-sm text-navy-500">No admin-created articles yet.</p>
          <p className="mt-1 text-xs text-navy-400">Click &quot;New Article&quot; to create one.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="flex items-center justify-between rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-bronze-50 px-2 py-0.5 text-xs font-medium text-bronze-700">
                    {article.category}
                  </span>
                  <time className="text-xs text-navy-400" dateTime={article.publishedAt}>
                    {article.publishedAt}
                  </time>
                </div>
                <h3 className="mt-1 truncate text-sm font-semibold text-navy-950">
                  {article.title}
                </h3>
                <p className="mt-0.5 truncate text-xs text-navy-500">{article.description}</p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(article.slug)}
                className="ml-4 flex-shrink-0 rounded-md border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Article Editor ─── */
function ArticleEditor({ onSaved }: { onSaved: () => void }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'Facility Management' as BlogCategory,
    author: 'Axiom Facility Partners',
    tags: '',
    content: '',
    keyTakeaways: '',
    faqs: [{ question: '', answer: '' }],
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  function update<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function updateFaq(index: number, field: 'question' | 'answer', value: string) {
    const faqs = [...form.faqs];
    faqs[index] = { ...faqs[index], [field]: value };
    setForm((prev) => ({ ...prev, faqs }));
  }

  function addFaq() {
    if (form.faqs.length >= 5) return;
    setForm((prev) => ({ ...prev, faqs: [...prev.faqs, { question: '', answer: '' }] }));
  }

  function removeFaq(index: number) {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    const article = {
      slug: '',
      title: form.title,
      description: form.description,
      category: form.category,
      author: form.author,
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: '',
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      content: form.content.split('\n\n').filter((p) => p.trim()),
      keyTakeaways: form.keyTakeaways.split('\n').map((t) => t.trim()).filter(Boolean),
      faqs: form.faqs.filter((f) => f.question.trim() && f.answer.trim()),
    };

    try {
      const res = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setMessage(data?.error || 'Failed to save article.');
      } else {
        setMessage('Article published successfully.');
        setTimeout(onSaved, 1000);
      }
    } catch {
      setMessage('Network error. Please try again.');
    }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <fieldset className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
          Article Details
        </legend>
        <Field label="Title" value={form.title} onChange={(v) => update('title', v)} required placeholder="How to Reduce Facility Maintenance Costs in 2026" />
        <Field label="Description (SEO)" value={form.description} onChange={(v) => update('description', v)} required placeholder="A concise summary for search engines and social sharing..." />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-navy-700">Category</label>
            <select
              value={form.category}
              onChange={(e) => update('category', e.target.value as BlogCategory)}
              className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            >
              {blogCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <Field label="Author" value={form.author} onChange={(v) => update('author', v)} />
        </div>
        <Field label="Tags (comma-separated)" value={form.tags} onChange={(v) => update('tags', v)} placeholder="commercial cleaning, Orlando, facility management" />
      </fieldset>

      {/* Content */}
      <fieldset className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
          Article Content
        </legend>
        <div>
          <label className="block text-sm font-medium text-navy-700">
            Body <span className="text-bronze-500">*</span>
            <span className="ml-2 font-normal text-navy-400">Separate paragraphs with a blank line</span>
          </label>
          <textarea
            value={form.content}
            onChange={(e) => update('content', e.target.value)}
            rows={12}
            required
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            placeholder="Write your article content here. Separate paragraphs with a blank line.&#10;&#10;Each paragraph becomes a separate block on the published page."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700">
            Key Takeaways
            <span className="ml-2 font-normal text-navy-400">One per line</span>
          </label>
          <textarea
            value={form.keyTakeaways}
            onChange={(e) => update('keyTakeaways', e.target.value)}
            rows={4}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            placeholder="Preventative maintenance saves 3-5x over reactive repair&#10;Central Florida humidity requires specialized cleaning protocols&#10;Documented programs enable compliance verification"
          />
        </div>
      </fieldset>

      {/* FAQs */}
      <fieldset className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
        <legend className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
          FAQs (AEO / Answer Engine Optimization)
        </legend>
        <p className="text-xs text-navy-400">
          Add question-answer pairs for FAQ schema markup. These help your article appear in AI answer engines and Google featured snippets.
        </p>
        {form.faqs.map((faq, i) => (
          <div key={i} className="space-y-2 rounded-lg border border-navy-100 bg-navy-50/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-navy-500">FAQ {i + 1}</span>
              {form.faqs.length > 1 && (
                <button type="button" onClick={() => removeFaq(i)} className="text-xs text-red-500 hover:text-red-700">
                  Remove
                </button>
              )}
            </div>
            <input
              type="text"
              value={faq.question}
              onChange={(e) => updateFaq(i, 'question', e.target.value)}
              placeholder="What is the question?"
              className="block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            />
            <textarea
              value={faq.answer}
              onChange={(e) => updateFaq(i, 'answer', e.target.value)}
              placeholder="Provide a detailed, authoritative answer..."
              rows={3}
              className="block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
            />
          </div>
        ))}
        {form.faqs.length < 5 && (
          <button
            type="button"
            onClick={addFaq}
            className="text-sm font-medium text-bronze-600 hover:text-bronze-700"
          >
            + Add FAQ
          </button>
        )}
      </fieldset>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-bronze-600/20 transition-all hover:shadow-xl disabled:opacity-60"
        >
          {saving ? 'Publishing...' : 'Publish Article'}
        </button>
        <button
          type="button"
          onClick={onSaved}
          className="rounded-md border border-navy-200 px-6 py-2.5 text-sm font-medium text-navy-600 hover:bg-navy-50"
        >
          Cancel
        </button>
        {message && (
          <p className={`text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}

/* ─── Shared Field Component ─── */
function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-navy-700">
        {label}
        {required && <span className="text-bronze-500"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
      />
    </div>
  );
}
