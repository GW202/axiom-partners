# Axiom Facility Partners — Technical Requirements Document (TRD)

**Version:** 2.0
**Last Updated:** March 2026
**Architecture Reference:** TAD v2.0
**Product Reference:** PRD v2.0

---

## 1. Purpose

This Technical Requirements Document defines the engineering requirements for the Axiom Facility Partners digital platform. It bridges the PRD (what to build) and the TAD (how it's architected) by specifying exact implementation constraints, performance targets, and feature specifications.

---

## 2. Technology Stack Requirements

### Frontend Framework

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.5.x | React framework with App Router |
| React | 19.1.x | UI component library |
| TypeScript | 5.x | Type safety and developer tooling |

The application must support:

- **Server Components** (default for all pages and layouts)
- **Client Components** (interactive elements: forms, animations, carousels)
- **Static Generation** with `generateStaticParams()` for dynamic routes
- **Dynamic Metadata** with `generateMetadata()` for SEO
- **API Routes** for form submissions and admin operations
- **Edge Runtime** for OG image generation

### Styling System

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | 4.x | Utility-first CSS framework |
| @tailwindcss/postcss | 4.x | PostCSS integration |

Requirements:

- Custom theme defined inline in `globals.css` via `@theme` directive
- Navy, bronze, and cream color palettes as design tokens
- Inter font family (Google Fonts, preloaded)
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Custom utility classes: `.glass-card`, `.text-gradient`, `.gradient-border`, `.diagonal-lines`, `.hero-gradient`

### Animation Framework

| Technology | Version | Purpose |
|---|---|---|
| Framer Motion | 12.x | Scroll-triggered animations and transitions |

Permitted animation patterns:

- Scroll reveal (`useInView` with `once: true`)
- Fade + translate entrance animations
- Section entrance with staggered delays
- `AnimatePresence` for testimonial carousel transitions
- `whileHover` micro-interactions on cards
- Animated SVG connector lines (timeline)

Animations must:

- Respect `prefers-reduced-motion` (all durations set to 0.01ms)
- Use CSS `will-change` and `transform: translateZ(0)` for GPU promotion
- Not block main thread or cause layout shifts

### Database

| Technology | Version | Purpose |
|---|---|---|
| Prisma | 6.19.x | ORM and schema management |
| PostgreSQL | — | Primary database (Railway-hosted) |

Schema:

```prisma
model ConsultationSubmission {
  id            String   @id @default(cuid())
  name          String
  email         String
  phone         String?
  company       String
  facilityType  String
  squareFootage String?
  services      String[]
  message       String?
  createdAt     DateTime @default(now())

  @@index([email])
  @@index([createdAt])
}
```

### External Services

| Service | Purpose |
|---|---|
| Resend | Transactional email notifications for consultation submissions |
| Slack Webhooks | Real-time alerts to team channel on new submissions |
| Google Tag Manager | Client-side tag management |
| Google Analytics | Traffic and conversion tracking |

---

## 3. Rendering Requirements

The platform uses **hybrid rendering** based on page type:

### Static Site Generation (SSG)

Required for all content-driven pages:

| Pages | Method |
|---|---|
| Homepage | Static at build time |
| Service pages (6) | `generateStaticParams()` from `services.ts` |
| Industry pages (4) | `generateStaticParams()` from `industries.ts` |
| Location pages (22) | `generateStaticParams()` from `locations.ts` |
| City-service pages (155+) | `generateStaticParams()` from `city-services.ts` |
| Blog/resource pages | `generateStaticParams()` from `blog.ts` |
| About, FAQ, Privacy, Terms | Static at build time |

### Server-Side Rendering (SSR)

Required for dynamic/interactive routes:

| Pages | Reason |
|---|---|
| `/consultation` | Form with server-side submission handling |
| `/admin/*` | Authenticated admin dashboard |
| `/api/*` | API route handlers |

### Edge Runtime

| Route | Purpose |
|---|---|
| `/api/og` | Dynamic OG image generation (1200x630px) |

---

## 4. URL Structure Requirements

### Route Patterns

```
/                                    # Homepage
/services/[service]                  # Service detail pages
/industries/[industry]               # Industry detail pages
/locations/[city]                    # City detail pages
/[cityService]                       # City+service landing pages (flat URL)
/resources                           # Blog listing
/resources/[slug]                    # Blog post detail
/es                                  # Spanish homepage
/es/servicios/[servicio]             # Spanish service pages
/consultation                        # Consultation form
/admin                               # Admin dashboard
/about, /faq, /privacy, /terms       # Static pages
```

### SEO URL Requirements

- City-service pages use flat URLs for maximum keyword density: `/orlando-commercial-cleaning`
- All URLs must be lowercase, hyphenated, with no trailing slashes
- Canonical URLs generated dynamically per page
- `robots.ts` generates dynamic robots.txt
- `sitemap.ts` generates dynamic XML sitemap including all static and dynamic routes
- `image-sitemap.xml` route for image indexing

---

## 5. SEO & Structured Data Requirements

### Metadata Generation

Every page must include dynamically generated:

- `<title>` tag (template: `{Page Title} | Axiom Facility Partners`)
- `<meta name="description">` (unique per page, 150–160 chars)
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- Canonical URL
- Geo meta tags (Florida/Orlando coordinates)

Implementation: `lib/metadata.ts` generates metadata objects consumed by Next.js `generateMetadata()`.

### Structured Data (JSON-LD)

Implemented via `lib/structured-data.ts` (29KB). All schemas embedded as `<script type="application/ld+json">` in page `<head>`.

| Schema Type | Pages |
|---|---|
| `Organization` | Root layout (all pages) |
| `LocalBusiness` | Root layout (all pages) |
| `WebSite` | Homepage |
| `Service` | Service detail pages |
| `FAQPage` | Service pages, FAQ page, city-service pages |
| `BreadcrumbList` | All detail pages |
| `Speakable` | Homepage, service pages |
| `Review` | Homepage |
| `HowTo` | Select service pages |

---

## 6. Performance Requirements

### Core Web Vitals Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 1.0s |
| CLS (Cumulative Layout Shift) | 0 |
| INP (Interaction to Next Paint) | < 150ms |
| TTFB (Time to First Byte) | < 200ms |

### Optimization Techniques (Implemented)

- **Image optimization:** Next.js `<Image>` with AVIF primary, WebP fallback, responsive `sizes`, `priority` for above-the-fold
- **Font optimization:** `next/font/google` with preloading, `display: swap`
- **CSS:** Tailwind CSS purging, no unused styles in production
- **Content visibility:** `content-visibility: auto` on off-screen sections with `contain-intrinsic-size`
- **Cache headers:** 1-year immutable cache for static assets (images, JS, CSS, fonts)
- **DNS prefetch:** Preconnect to Google Fonts, GTM, GA domains
- **Turbopack:** Development server uses Turbopack for faster HMR

### Security Headers (next.config.ts)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Content-Security-Policy: [Google Fonts, GTM, GA, Vercel allowed]
```

---

## 7. Consultation Form Requirements

### Endpoint: `POST /api/consultation`

**Request body:**

```typescript
{
  name: string;          // Required
  email: string;         // Required, validated format
  phone?: string;        // Optional
  company: string;       // Required
  facilityType: string;  // Required
  squareFootage?: string;// Optional
  services: string[];    // Required, at least 1
  message?: string;      // Optional
}
```

**Processing pipeline:**

1. Input validation and sanitization
2. Save to file-based storage (`lib/submissions.ts`) — always succeeds
3. Save to PostgreSQL via Prisma — graceful failure if DB unavailable
4. Send HTML email notification via Resend to `NOTIFICATION_EMAIL`
5. Send formatted Slack message via webhook
6. Return success/error response

**Error handling:** Individual failures (email, Slack, DB) must not block the overall submission. File storage acts as the reliable fallback.

---

## 8. Admin Dashboard Requirements

### Authentication

- `POST /api/admin/auth` — Credential-based login returning base64 token
- Token stored client-side for session duration
- No OAuth or external auth provider required

### Features

| Endpoint | Method | Function |
|---|---|---|
| `/api/admin/submissions` | GET | List submissions (paginated: page, limit) |
| `/api/admin/submissions` | DELETE | Delete submission by ID |
| `/api/admin/articles` | GET | List blog articles |
| `/api/admin/articles` | POST | Create article (auto-slug, category validation) |
| `/api/admin/articles` | DELETE | Delete article by slug |
| `/api/admin/config` | GET | Read site configuration |
| `/api/admin/config` | PUT | Update site config (phone, email, address) |
| `/api/admin/gbp-posts` | GET | Generate 3 Google Business Profile post variants from blog content |

---

## 9. Content Data Requirements

All content is stored as TypeScript data files in `/content/`:

| File | Records | Size | Purpose |
|---|---|---|
| `services.ts` | 6 services | ~12KB | Service pages with protocols, benefits, FAQs |
| `industries.ts` | 4 industries | ~4KB | Industry pages with challenges, services |
| `locations.ts` | 22 cities | ~8KB | Location pages with services, industries served |
| `city-services.ts` | 155+ combos | ~155KB | Hyper-local SEO landing pages |
| `blog.ts` | Variable | ~15KB | Blog posts with categories, tags, takeaways |
| `testimonials.ts` | 6 testimonials | ~4KB | Client quotes with highlights |
| `about.ts` | 1 | ~3KB | Company mission, story, values |
| `faqs.ts` | Variable | ~3KB | General FAQ entries |
| `services-es.ts` | 6 services | ~22KB | Spanish service translations |

### Content Interfaces

```typescript
interface Service {
  slug: string; title: string; description: string;
  longDescription: string[]; protocols: string[];
  benefits: string[]; faqs: FAQ[];
}

interface Industry {
  slug: string; title: string; description: string;
  longDescription: string[]; challenges: string[];
  services: string[];
}

interface Location {
  slug: string; city: string; state: string;
  description: string; services: string[];
  industries: string[];
}
```

---

## 10. Accessibility Requirements

Compliance target: **WCAG 2.2 AA**

| Requirement | Implementation |
|---|---|
| Semantic HTML | Proper heading hierarchy, landmark regions |
| Keyboard navigation | All interactive elements focusable and operable |
| Screen readers | `aria-hidden` on decorative SVGs, `aria-label` on buttons |
| Skip navigation | Skip-to-content link in root layout |
| Color contrast | Navy-on-cream and white-on-navy meet 4.5:1 ratio |
| Reduced motion | `@media (prefers-reduced-motion)` disables all animations |
| Image alt text | Descriptive alt on all `<Image>` components |

---

## 11. CI/CD Requirements

### Build Pipeline

```
GitHub Repository
  ↓
npm run build (prisma generate → next build)
  ↓
Vercel Build Pipeline
  ↓
Preview Deployment (per branch/PR)
  ↓
Production Deployment (main branch)
```

### Development

- Dev server: `next dev --turbopack`
- Linting: ESLint with `next/core-web-vitals` + `next/typescript`
- Formatting: Prettier with Tailwind CSS plugin for class sorting
- Type checking: `tsc --noEmit` (strict mode)

---

## 12. Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string (Railway) |
| `RESEND_API_KEY` | Yes | Resend email service API key |
| `RESEND_FROM_EMAIL` | Yes | Sender email address |
| `NOTIFICATION_EMAIL` | Yes | Recipient for consultation alerts |
| `SLACK_WEBHOOK_URL` | No | Slack notification webhook |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager container ID |

---

## 13. Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- Mobile Safari (iOS 15+)
- Chrome Android 90+
- No IE11 support required
