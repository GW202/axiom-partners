# Axiom Facility Partners — System Architecture

**Version:** 2.0
**Last Updated:** March 2026

---

## 1. Architecture Overview

```
User
  ↓
Vercel Edge Network (CDN, static assets)
  ↓
Next.js 15.5 Application (App Router)
  ↓
┌──────────────┬──────────────┬──────────────┐
│ Content      │ PostgreSQL   │ External     │
│ Files        │ (Railway)    │ Services     │
│ /content/*.ts│ via Prisma   │              │
│              │              │ Resend       │
│ Services     │ Consultation │ Slack        │
│ Industries   │ Submissions  │ Google GA    │
│ Locations    │              │ Google GTM   │
│ City-Services│ File-Based   │              │
│ Blog Posts   │ Storage      │              │
│ Testimonials │ (fallback)   │              │
└──────────────┴──────────────┴──────────────┘
```

---

## 2. Application Layer

### Framework

- **Next.js 15.5** with App Router
- **React 19** with Server Components (default) and Client Components (interactive)
- **TypeScript** with strict mode
- **Tailwind CSS 4** with custom inline theme (`@theme` directive in `globals.css`)
- **Framer Motion 12** for scroll-triggered animations

### Directory Structure

```
app/                    Next.js App Router
├── layout.tsx          Root layout (GTM, GA, fonts, structured data)
├── page.tsx            Homepage
├── globals.css         Tailwind theme + custom CSS
├── robots.ts           Dynamic robots.txt
├── sitemap.ts          Dynamic XML sitemap
├── [cityService]/      155+ city+service pages (flat URLs)
├── services/[service]/ 6 service detail pages
├── industries/[industry]/ 4 industry pages
├── locations/[city]/   22 city pages
├── resources/[slug]/   Blog post pages
├── es/                 Spanish language routes
├── admin/              Admin dashboard
├── api/                Server-side API routes
│   ├── consultation/   Form submission handler
│   ├── admin/          Admin CRUD (auth, articles, submissions, config, gbp-posts)
│   └── og/             Dynamic OG image generation (Edge Runtime)
├── consultation/       Lead capture form page
├── about/              Company info
├── faq/                FAQ page
├── privacy/            Privacy policy
└── terms/              Terms of service

components/
├── layout/             Container, Header, Footer
├── sections/           Hero, ServicesShowcase, WhyAxiom, IndustriesShowcase,
│                       Testimonials, CTASection, SectionWrapper
└── ui/                 AnimatedSection, Button, ConsultationForm, FAQAccordion,
                        ServiceCard, BlogSearch, CookieConsent

content/                Static content as TypeScript data files
lib/                    Utilities (metadata, structured-data, email, slack, prisma, etc.)
prisma/                 PostgreSQL schema
public/                 Static assets
docs/                   Project documentation
```

---

## 3. Rendering Strategy

| Route Pattern | Rendering | Data Source |
|---|---|---|
| Homepage (`/`) | SSG | Inline data + content imports |
| Service pages (`/services/[service]`) | SSG | `content/services.ts` |
| Industry pages (`/industries/[industry]`) | SSG | `content/industries.ts` |
| Location pages (`/locations/[city]`) | SSG | `content/locations.ts` |
| City-service pages (`/[cityService]`) | SSG | `content/city-services.ts` |
| Blog pages (`/resources/[slug]`) | SSG | `content/blog.ts` |
| Spanish pages (`/es/*`) | SSG | `content/services-es.ts` |
| Consultation form (`/consultation`) | SSR | Client-side form component |
| Admin dashboard (`/admin`) | SSR | API calls to admin endpoints |
| API routes (`/api/*`) | Serverless | Request handlers |
| OG image (`/api/og`) | Edge | Image generation |

All SSG pages use `generateStaticParams()` to enumerate routes at build time and `generateMetadata()` for per-page SEO metadata.

---

## 4. Component Architecture

```
Root Layout (Server Component)
├── Header (Server Component)
│   └── Mobile menu (Client — useState)
├── Page Content
│   ├── Hero (Client — Framer Motion)
│   ├── ServicesShowcase (Client — scroll animations, bento grid)
│   ├── WhyAxiom (Client — timeline, animated connector)
│   ├── IndustriesShowcase (Client — stacked cards, scroll animations)
│   ├── Testimonials (Client — carousel, AnimatePresence)
│   ├── CTASection (Client — Framer Motion)
│   └── SectionWrapper (Client — useInView wrapper)
├── Footer (Server Component)
└── CookieConsent (Client — localStorage)
```

**Boundary rule:** Pages and layouts are Server Components. Components using Framer Motion, `useState`, `useRef`, or browser APIs are `'use client'`.

---

## 5. Data Architecture

### Content Layer (Build-Time)

TypeScript data files in `/content/` provide all marketing content. Benefits:
- Type-safe interfaces enforce data structure
- `generateStaticParams()` reads arrays at build time
- No runtime CMS API calls, no network latency
- Content changes tracked in Git

### Database Layer (Runtime)

PostgreSQL via Prisma stores consultation submissions:
- Single model: `ConsultationSubmission` (name, email, phone, company, facilityType, squareFootage, services[], message)
- Indexes on `email` and `createdAt`
- Hosted on Railway

### File-Based Storage (Runtime Fallback)

JSON files store submissions, admin articles, and site configuration. Located in `/data/` (local) or `/tmp/axiom-data/` (serverless). Ensures data persistence even if the database is unavailable.

---

## 6. SEO Architecture

### Multi-Tier Landing Page Strategy

```
Tier 1: Service Pages (6)
  /services/office-building-cleaning
  → Targets: "office building cleaning"

Tier 2: Location Pages (22)
  /locations/orlando
  → Targets: "commercial cleaning Orlando"

Tier 3: City+Service Pages (155+)
  /orlando-office-cleaning
  → Targets: "office cleaning Orlando FL"
```

### Structured Data (JSON-LD)

10+ Schema.org types injected as `<script type="application/ld+json">`:
- Organization, LocalBusiness (root layout)
- WebSite (homepage)
- Service (service pages)
- FAQPage (pages with FAQs)
- BreadcrumbList (detail pages)
- Speakable (AEO-optimized content)
- Review (homepage)
- HowTo (select service pages)

### Sitemap & Indexing

- `app/sitemap.ts` — dynamic XML sitemap with all routes
- `app/image-sitemap.xml/` — image sitemap for Google Images
- `app/robots.ts` — dynamic robots.txt

---

## 7. Lead Capture Flow

```
User fills ConsultationForm
  ↓ POST /api/consultation
  ↓
1. Validate & sanitize inputs
2. Save to file storage (always succeeds)
3. Save to PostgreSQL via Prisma (graceful failure)
4. Send email via Resend
5. Send Slack notification via webhook
6. Return response
```

Each step (2–5) executes independently. Individual failures don't block the response.

---

## 8. Security

| Layer | Implementation |
|---|---|
| Transport | HTTPS enforced, HSTS (63072000s) |
| Headers | CSP, X-Content-Type-Options: nosniff |
| Input validation | Server-side sanitization on all forms |
| Admin auth | Token-based credential verification |
| Cookie consent | GDPR-compliant banner |

---

## 9. Performance

| Technique | Implementation |
|---|---|
| Image optimization | Next.js `<Image>` — AVIF/WebP, responsive sizes, lazy loading |
| Font loading | `next/font/google` with preload |
| CSS | Tailwind CSS purged at build |
| Off-screen sections | `content-visibility: auto` with `contain-intrinsic-size` |
| Caching | 1-year immutable cache headers for static assets |
| Accessibility | `prefers-reduced-motion` disables all animations |

---

## 10. Scalability

Adding new content requires **no code changes**:

- **New city:** Add to `content/locations.ts` + add combos to `content/city-services.ts` → rebuild
- **New service:** Add to `content/services.ts` + add combos to `content/city-services.ts` → rebuild
- **New industry:** Add to `content/industries.ts` → rebuild

All SEO infrastructure (metadata, structured data, sitemaps) is inherited automatically.
