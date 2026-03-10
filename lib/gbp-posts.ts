import type { BlogPost } from '@/content/blog';

const SITE_URL = 'https://axiomfacilitypartners.com';
const PHONE = '(407) 342-3195';
const MAX_CHARS = 1500;

export interface GBPPost {
  type: 'whats-new' | 'quick-tip' | 'cta';
  label: string;
  body: string;
  ctaType: 'LEARN_MORE' | 'CALL' | 'BOOK';
  ctaUrl: string;
}

const categoryPitch: Record<string, string> = {
  'Facility Management':
    'Axiom Facility Partners provides comprehensive facility management programs for commercial properties across Central Florida.',
  'Industry Insights':
    'Axiom Facility Partners helps Central Florida businesses stay ahead with professional commercial cleaning and facility maintenance.',
  'Cleaning Best Practices':
    'Axiom Facility Partners delivers expert commercial cleaning services built on industry best practices — serving Orlando and Central Florida.',
  'Central Florida':
    'Axiom Facility Partners is Central Florida\'s trusted commercial cleaning and janitorial service — from Orlando to Tampa.',
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max - 3);
  return text.slice(0, cut > 0 ? cut : max - 3) + '...';
}

function buildHashtags(tags: string[], max: number): string {
  const hashtags = tags
    .slice(0, max)
    .map((t) => '#' + t.replace(/[^a-zA-Z0-9]/g, ''))
    .join(' ');
  return hashtags;
}

function generateWhatsNew(post: BlogPost): GBPPost {
  const articleUrl = `${SITE_URL}/resources/${post.slug}`;
  const hashtags = buildHashtags(post.tags, 4);

  // Build the post body with title + content excerpts
  const intro = post.content[0] || post.description;
  const secondPara = post.content[1] || '';

  let body = `📋 ${post.title}\n\n${intro}`;
  if (secondPara) {
    const withSecond = `${body}\n\n${secondPara}`;
    if (withSecond.length + 60 + hashtags.length < MAX_CHARS) {
      body = withSecond;
    }
  }

  body += `\n\n📖 Read the full article: ${articleUrl}`;
  if (hashtags) {
    body += `\n\n${hashtags}`;
  }

  return {
    type: 'whats-new',
    label: "What's New — Article Summary",
    body: truncate(body, MAX_CHARS),
    ctaType: 'LEARN_MORE',
    ctaUrl: articleUrl,
  };
}

function generateQuickTip(post: BlogPost): GBPPost {
  const articleUrl = `${SITE_URL}/resources/${post.slug}`;
  const takeaway = post.keyTakeaways[0] || post.description;

  const body = [
    `💡 Quick Tip for Facility Managers`,
    '',
    takeaway,
    '',
    `— From our latest article: "${post.title}"`,
    '',
    `Axiom Facility Partners serves commercial properties across Orlando and Central Florida with professional cleaning, maintenance, and facility management programs.`,
    '',
    `📖 Read more: ${articleUrl}`,
    `📞 Questions? Call us: ${PHONE}`,
  ].join('\n');

  return {
    type: 'quick-tip',
    label: 'Quick Tip — Key Takeaway',
    body: truncate(body, MAX_CHARS),
    ctaType: 'CALL',
    ctaUrl: `tel:+14073423195`,
  };
}

function generateCTA(post: BlogPost): GBPPost {
  const pitch = categoryPitch[post.category] || categoryPitch['Industry Insights'];

  const body = [
    `🏢 ${post.title.length > 80 ? truncate(post.title, 80) : post.title}`,
    '',
    post.description,
    '',
    pitch,
    '',
    `✅ Free facility consultation`,
    `✅ Customized maintenance programs`,
    `✅ Serving Orlando, Winter Park, Lake Mary, Sanford & all of Central Florida`,
    '',
    `📞 Call ${PHONE} or request a consultation online:`,
    `${SITE_URL}/consultation`,
  ].join('\n');

  return {
    type: 'cta',
    label: 'CTA — Drive Consultations',
    body: truncate(body, MAX_CHARS),
    ctaType: 'BOOK',
    ctaUrl: `${SITE_URL}/consultation`,
  };
}

export function generateGBPPosts(post: BlogPost): GBPPost[] {
  return [
    generateWhatsNew(post),
    generateQuickTip(post),
    generateCTA(post),
  ];
}
