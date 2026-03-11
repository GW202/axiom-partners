# Axiom Facility Partners — Technical Architecture Document (TAD)

**Version:** 2.0
**Last Updated:** March 2026
**Architecture Model:** Next.js App Router, Hybrid-Rendered, Edge-Optimized
**Primary Objective:** High-performance commercial facility platform optimized for local SEO dominance, enterprise trust, and consultation-driven lead generation.

---

## 1. System Overview

### Platform Purpose

The Axiom platform operates as:

1. **Premium brand authority engine** — Establishing Axiom as Central Florida's top facility partner
2. **Commercial lead generation platform** — Driving consultation requests from property managers and facility directors
3. **Facility maintenance knowledge authority** — Blog content and educational resources for SEO/AEO
4. **Hyper-local SEO infrastructure** — 155+ city-service landing pages for regional search dominance
5. **Scalable regional service platform** — Data-driven architecture supporting expansion to new markets

### Primary Audience

- Property Managers
- Facility Directors
- Logistics Managers
- Commercial Real Estate Operators

---

## 2. Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                       │
│                                                         │
│   Browser ──→ Next.js App (React 19 + Server Components)│
│                    │                                    │
│   ┌────────────────┼────────────────┐                   │
│   │ Static Pages   │ Client Components                  │
│   │ (SSG at build) │ (Framer Motion, Forms, Carousel)   │
│   └────────────────┴────────────────┘                   │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                    SERVER LAYER                          │
│                                                         │
│   Next.js API Routes (/api/*)                           │
│   ┌──────────────┬──────────────┬─────────────────┐     │
│   │ Consultation │ Admin CRUD   │ OG Image Gen    │     │
│   │ Submissions  │ (Articles,   │ (Edge Runtime)  │     │
│   │              │  Config,     │                 │     │
│   │              │  Submissions)│                 │     │
│   └──────┬───────┴──────┬───────┴─────────────────┘     │
│          │              │                               │
└──────────┼──────────────┼───────────────────────────────┘
           │              │
┌──────────▼──────────────▼───────────────────────────────┐
│                    DATA LAYER                            │
│                                                         │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│   │ PostgreSQL   │  │ File-Based   │  │ TypeScript   │  │
│   │ (Railway)    │  │ Storage      │  │ Content      │  │
│   │              │  │ (/tmp or     │  │ Files        │  │
│   │ Submissions  │  │  /data)      │  │ (/content/)  │  │
│   │ via Prisma   │  │              │  │              │  │
│   │              │  │ Submissions  │  │ Services     │  │
│   │              │  │ Articles     │  │ Industries   │  │
│   │              │  │ Site Config  │  │ Locations    │  │
│   │              │  │              │  │ City-Services│  │
│   │              │  │              │  │ Blog Posts   │  │
│   │              │  │              │  │ FAQs         │  │
│   │              │  │              │  │ Testimonials │  │
│   └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
           │              │
┌──────────▼──────────────▼───────────────────────────────┐
│                 EXTERNAL SERVICES                        │
│                                                         │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│   │ Resend   │  │ Slack    │  │ Google   │  │ Google │ │
│   │ (Email)  │  │ Webhooks │  │ Tag Mgr  │  │ Analyt.│ │
│   └──────────┘  └──────────┘  └──────────┘  └────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Core Technology Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 15.5.x | App Router, SSG, SSR, API routes |
| UI Library | React | 19.1.x | Component rendering |
| Language | TypeScript | 5.x | Type safety |
| Styling | Tailwind CSS | 4.x | Utility-first CSS |
| Animation | Framer Motion | 12.x | Scroll animations, transitions |
| ORM | Prisma | 6.19.x | PostgreSQL access |
| Database | PostgreSQL | — | Consultation submissions (Railway) |
| Email | Resend | 6.9.x | Transactional notifications |
| Dev Server | Turbopack | — | Fast HMR in development |

---

## 4. Application Architecture

### Directory Structure

```
axiom-partners/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (GTM, GA, fonts, schema)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Theme + custom styles
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic XML sitemap
│   ├── not-found.tsx             # 404 page
│   ├── error.tsx                 # Error boundary
│   ├── loading.tsx               # Loading skeleton
│   ├── [cityService]/            # Dynamic city+service pages (155+)
│   ├── services/[service]/       # Service detail pages (6)
│   ├── industries/[industry]/    # Industry detail pages (4)
│   ├── locations/[city]/         # City detail pages (22)
│   ├── resources/[slug]/         # Blog post pages
│   ├── es/                       # Spanish language routes
│   ├── admin/                    # Admin dashboard
│   ├── api/                      # Server-side API routes
│   │   ├── consultation/         # Form submission handler
│   │   ├── admin/                # Admin CRUD endpoints
│   │   └── og/                   # Dynamic OG image (Edge)
│   └── (static pages)            # about, faq, consultation, privacy, terms
│
├── components/
│   ├── layout/                   # Container, Header, Footer
│   ├── sections/                 # Page sections (Hero, CTA, Testimonials, etc.)
│   └── ui/                       # Reusable UI components
│
├── content/                      # Static content data (TypeScript)
├── lib/                          # Utilities, config, integrations
├── prisma/                       # Database schema
├── public/                       # Static assets (images, manifest)
└── docs/                         # Project documentation
```

### Component Architecture

```
Root Layout (Server Component)
├── Header (Server Component)
│   └── Mobile menu toggle (Client — uses useState)
├── Page Content
│   ├── Hero (Client — Framer Motion animations)
│   ├── ServicesShowcase (Client — scroll animations)
│   ├── WhyAxiom (Client — timeline animations)
│   ├── IndustriesShowcase (Client — scroll animations)
│   ├── Testimonials (Client — carousel state + AnimatePresence)
│   ├── CTASection (Client — Framer Motion)
│   └── SectionWrapper (Client — useInView wrapper)
├── Footer (Server Component)
└── CookieConsent (Client — localStorage state)
```

**Server/Client boundary strategy:**

- Pages and layouts are Server Components by default
- Components using Framer Motion, `useState`, `useRef`, or browser APIs are marked `'use client'`
- Data fetching happens at the page level (Server Component) and is passed as props to Client Components

---

## 5. Data Architecture

### Content Layer (Build-Time)

All marketing content lives in TypeScript files under `/content/`. This enables:

- **Type safety** — Content interfaces enforce data structure
- **Static generation** — `generateStaticParams()` reads content arrays at build time
- **No runtime dependencies** — No CMS API calls, no network latency
- **Version control** — Content changes tracked in Git

| Content File | Records | Generates |
|---|---|---|
| `services.ts` | 6 | `/services/[service]` pages |
| `industries.ts` | 4 | `/industries/[industry]` pages |
| `locations.ts` | 22 | `/locations/[city]` pages |
| `city-services.ts` | 155+ | `/[cityService]` pages |
| `blog.ts` | Variable | `/resources/[slug]` pages |
| `services-es.ts` | 6 | `/es/servicios/[servicio]` pages |

### Database Layer (Runtime)

PostgreSQL via Prisma handles dynamic data:

- **Consultation submissions** — Form data with indexed email and timestamp
- **Connection:** Railway-hosted PostgreSQL, connection string via `DATABASE_URL`
- **Fallback:** File-based JSON storage in `/data/` (local) or `/tmp/axiom-data/` (serverless) ensures submissions are never lost even if the database is unavailable

### File-Based Storage (Runtime)

Used for admin-created content and configuration:

- **Site configuration** — JSON file with company contact info
- **Admin articles** — Blog posts created via the admin panel
- **Submission backups** — Redundant storage for consultation submissions

---

## 6. Rendering Strategy

### Static Generation Flow

```
Build Time
  ↓
content/*.ts data files
  ↓
generateStaticParams() reads arrays
  ↓
generateMetadata() creates SEO metadata
  ↓
Page components render with content props
  ↓
HTML + JSON-LD structured data output
  ↓
Deployed as static files to Vercel edge
```

### Page-Level Rendering Matrix

| Route Pattern | Rendering | Data Source |
|---|---|---|
| `/` (Homepage) | SSG | Inline data + content imports |
| `/services/[service]` | SSG | `services.ts` |
| `/industries/[industry]` | SSG | `industries.ts` |
| `/locations/[city]` | SSG | `locations.ts` |
| `/[cityService]` | SSG | `city-services.ts` |
| `/resources/[slug]` | SSG | `blog.ts` |
| `/es/servicios/[servicio]` | SSG | `services-es.ts` |
| `/consultation` | SSR | Form component (client) |
| `/admin` | SSR | API calls to admin endpoints |
| `/api/*` | Serverless | Request handlers |
| `/api/og` | Edge | Image generation |

---

## 7. SEO Architecture

### Multi-Tier Landing Page Strategy

The platform implements a three-tier SEO approach:

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

This creates a dense internal link network where:
- Service pages link to relevant city-service pages
- Location pages link to relevant city-service pages
- City-service pages cross-link to related cities and services
- Footer contains geo-clustered service area links

### Structured Data Hierarchy

```
Organization (root)
├── LocalBusiness (contact, hours, areas served)
├── WebSite (search, name)
├── Service (per service page)
│   └── OfferCatalog (service listings)
├── FAQPage (per page with FAQs)
├── BreadcrumbList (navigation path)
├── Speakable (AEO-optimized content)
├── Review (testimonial data)
└── HowTo (procedural content)
```

### Sitemap Generation

Dynamic sitemap at `/sitemap.ts` includes:
- All static pages
- All service pages (from `services.ts`)
- All industry pages (from `industries.ts`)
- All location pages (from `locations.ts`)
- All city-service pages (from `city-services.ts`)
- All blog posts (from `blog.ts`)
- Spanish language pages

### Image Sitemap

Dedicated image sitemap at `/image-sitemap.xml` for Google Images indexing.

---

## 8. Lead Capture Architecture

### Submission Flow

```
User fills ConsultationForm (Client Component)
  ↓
POST /api/consultation
  ↓
┌─────────────────────────────────────┐
│ 1. Validate & sanitize inputs       │
│ 2. Save to file storage (always)    │
│ 3. Save to PostgreSQL (if available)│
│ 4. Send email via Resend            │
│ 5. Send Slack notification           │
│ 6. Return response                  │
└─────────────────────────────────────┘
```

**Resilience design:** Each step (2–5) executes independently. A failure in any single step (e.g., database down, Slack webhook timeout) does not prevent the other steps from completing. File storage (step 2) is the guaranteed fallback.

### Email Notification

Resend sends an HTML-formatted email containing:
- Submitter name, company, email, phone
- Facility type and square footage
- Requested services
- Optional message
- Submission timestamp

### Slack Notification

Formatted Slack block message with:
- Company and contact information
- Service requests
- Direct links to respond

---

## 9. Admin Architecture

### Admin Panel (`/admin`)

Single-page admin dashboard with token-based authentication.

```
Admin Login
  ↓ POST /api/admin/auth (credentials → base64 token)
  ↓
Dashboard
  ├── Submissions Tab
  │   ├── GET /api/admin/submissions?page=1&limit=20
  │   └── DELETE /api/admin/submissions?id=<cuid>
  ├── Articles Tab
  │   ├── GET /api/admin/articles
  │   ├── POST /api/admin/articles (create)
  │   └── DELETE /api/admin/articles?slug=<slug>
  ├── GBP Posts Tab
  │   └── GET /api/admin/gbp-posts?slug=<blog-slug>
  └── Settings Tab
      ├── GET /api/admin/config
      └── PUT /api/admin/config (update company info)
```

---

## 10. Security Architecture

### Application Security

| Layer | Implementation |
|---|---|
| Transport | HTTPS enforced, HSTS header (63072000s) |
| Headers | CSP, X-Content-Type-Options, X-Frame-Options |
| Input validation | Server-side sanitization on all form inputs |
| Admin auth | Token-based with credential verification |
| Cookie consent | GDPR-compliant consent banner |

### Content Security Policy

Allowed sources:
- **Scripts:** `self`, Google Tag Manager, Google Analytics, Vercel
- **Styles:** `self`, `unsafe-inline`, Google Fonts
- **Fonts:** Google Fonts CDN
- **Images:** `self`, data URIs, blob URIs

---

## 11. Performance Architecture

### Optimization Stack

```
Static HTML (SSG)
  + Tailwind CSS (purged, minimal)
  + Next.js Image (AVIF/WebP, responsive, lazy)
  + next/font (preloaded Inter)
  + content-visibility: auto (off-screen sections)
  + 1-year immutable cache headers
  + DNS prefetch (fonts, analytics)
  + Turbopack (dev only)
```

### Image Pipeline

```
Source image (JPG/PNG)
  ↓ Next.js Image component
  ↓ Automatic format conversion (AVIF primary, WebP fallback)
  ↓ Responsive sizing via sizes attribute
  ↓ Lazy loading (default) or priority (hero images)
  ↓ CDN-cached with immutable headers
```

---

## 12. Internationalization Architecture

### Current Implementation

```
/                    → English (default)
/es                  → Spanish homepage
/es/servicios        → Spanish services listing
/es/servicios/[slug] → Spanish service detail
```

Content source: `services-es.ts` provides translated service data.

### Expansion Pattern

To add a new language:
1. Create `content/services-{lang}.ts` with translated content
2. Add `app/{lang}/` route directory
3. Pages import from language-specific content file

---

## 13. Scalability Architecture

### Adding a New City

1. Add city object to `content/locations.ts`
2. Add city-service combinations to `content/city-services.ts`
3. Rebuild — `generateStaticParams()` automatically creates new pages

### Adding a New Service

1. Add service object to `content/services.ts`
2. Add relevant city-service combinations to `content/city-services.ts`
3. Rebuild — new service page and city-service pages generated automatically

### Adding a New Industry

1. Add industry object to `content/industries.ts`
2. Rebuild — new industry page generated automatically

No code changes required for content expansion. The data-driven architecture ensures new pages inherit all SEO infrastructure (metadata, structured data, sitemaps) automatically.

---

## 14. Deployment Architecture

### Pipeline

```
Developer pushes to GitHub
  ↓
Vercel detects push
  ↓
prisma generate (Prisma client)
  ↓
next build (SSG for 200+ pages)
  ↓
Preview deployment (feature branches)
  ↓
Production deployment (main branch)
  ↓
Vercel Edge Network serves static assets
```

### Environment Configuration

| Environment | Purpose | Database |
|---|---|---|
| Development | Local dev with Turbopack | Local or Railway PostgreSQL |
| Preview | Per-branch Vercel deployments | Railway PostgreSQL |
| Production | Main branch on Vercel | Railway PostgreSQL |

---

## 15. Monitoring & Analytics

| Tool | Purpose |
|---|---|
| Google Analytics | Traffic, engagement, conversion tracking |
| Google Tag Manager | Tag orchestration, event management |
| Slack Webhooks | Real-time lead alerts |
| Vercel Dashboard | Deployment logs, function invocations |

---

## 16. Future Architecture Considerations

| Feature | Architecture Impact |
|---|---|
| Headless CMS (Sanity.io) | Replace `/content/` files with API calls; add ISR |
| Facility Audit Tool | New client component with calculation engine |
| TCO Calculator | New client component with dynamic inputs/outputs |
| Client Portal | Authentication system (NextAuth.js), protected routes |
| Case Studies | New content model, detail pages, schema markup |
| Multi-region expansion | Content scaling, potential i18n framework adoption |
