# Axiom Facility Partners — Developer Implementation Roadmap

**Version:** 2.0
**Last Updated:** March 2026
**Project Type:** Premium Commercial Service Platform

---

## 1. Project Overview

The Axiom platform is built using a modern Next.js architecture designed for high performance, strong SEO, scalable content, and premium UX.

Core infrastructure:
- Next.js 15.5 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion 12
- PostgreSQL via Prisma (Railway)
- Vercel hosting

---

## 2. Development Phases

### Phase 1 — Infrastructure Setup (COMPLETED)

- GitHub repository with TypeScript, ESLint, Prettier configuration
- Next.js 15 with App Router + Turbopack dev server
- Tailwind CSS 4 with custom navy/bronze/cream theme
- Framer Motion for animations
- Vercel deployment pipeline with preview environments
- Environment variable configuration

### Phase 2 — Core Framework Build (COMPLETED)

- Application folder structure (`app/`, `components/`, `lib/`, `content/`, `public/`)
- Root layout with Google Fonts (Inter), GTM, GA, structured data
- Global design system: brand colors, typography, spacing
- Core UI components: Header, Footer, Container, Hero, SectionWrapper, Button, AnimatedSection
- Custom CSS: glass-card, text-gradient, gradient-border, diagonal-lines, hero-gradient

### Phase 3 — Content System (COMPLETED)

- TypeScript content data files (no external CMS):
  - `services.ts` — 6 services with protocols, benefits, FAQs
  - `industries.ts` — 4 industries with challenges, services
  - `locations.ts` — 22 Central Florida cities
  - `city-services.ts` — 155+ city+service landing page combinations
  - `blog.ts` — Blog posts with categories and tags
  - `testimonials.ts` — 6 client testimonials
  - `about.ts`, `faqs.ts` — Company info and general FAQs
  - `services-es.ts` — Spanish service translations
- Content fetching via direct TypeScript imports at build time
- `generateStaticParams()` for dynamic route generation
- `generateMetadata()` for per-page SEO

### Phase 4 — Core Website Pages (COMPLETED)

- **Homepage:** Hero, stats bar, lobby image, services showcase (bento grid), Why Axiom (timeline), industries showcase (stacked cards), testimonials (carousel), Top Service Areas, CTA
- **Service pages (6):** Detailed pages with protocols, benefits, FAQs, CTAs
- **Industry pages (4):** Challenges, tailored services, long descriptions
- **Location pages (22):** Local services, regional expertise, industry examples
- **City-service pages (155+):** Hyper-local SEO pages with flat URLs
- **Blog/Resources:** Article listing with search/filter, detail pages
- **Static pages:** About, FAQ, Privacy, Terms, Consultation
- **Spanish pages:** Homepage + service pages at `/es`

### Phase 5 — Conversion & Admin (COMPLETED)

- **Consultation form:** Multi-field lead capture with server-side validation
- **Submission pipeline:** File storage + PostgreSQL + Resend email + Slack webhook
- **Admin dashboard:** Token-based auth, submission management, article CRUD, site config, GBP post generator
- **Cookie consent banner:** GDPR compliance

### Phase 6 — SEO & Performance Optimization (COMPLETED)

- Dynamic XML sitemap + image sitemap
- 10+ Schema.org structured data types (JSON-LD)
- Hreflang alternate links (en-US, es-US)
- Dynamic OG image generation (Edge Runtime)
- Core Web Vitals optimization: content-visibility, preconnect, immutable caching, lazy loading
- `prefers-reduced-motion` support
- Security headers: HSTS, CSP, X-Content-Type-Options

---

## 3. Remaining Work

### Short-Term (Code Tasks)

- Phone number in header (competitor analysis gap)
- Client logos section on homepage
- Case studies page template
- Green/eco certification section
- Live chat integration (differentiator — no competitor has this)

### Medium-Term (Content + Marketing)

- Additional blog articles targeting keyword gaps
- Expanded Spanish translations beyond `/es` homepage
- Google Business Profile optimization
- Citation network deployment (Yelp, BBB, Bing Places, Apple Maps)
- Review generation strategy (Year 1 target: 50 reviews)

### Future Features (Roadmap)

- Facility Audit Tool — interactive facility health assessment
- TCO Calculator — total cost of ownership comparison tool
- Client Transparency Portal — inspection reports, maintenance logs
- Headless CMS migration (Sanity.io or equivalent)

---

## 4. Build & Deploy

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # prisma generate && next build
npm run lint         # ESLint
npx tsc --noEmit     # Type check
```

Deployment: Push to GitHub → Vercel auto-builds → preview (branches) or production (main).
