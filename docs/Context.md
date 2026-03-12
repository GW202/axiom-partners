# Axiom Facility Partners — Project Context

**Version:** 2.0
**Last Updated:** March 2026

---

## 1. What This Project Is

Axiom Facility Partners is a commercial cleaning and janitorial company in Orlando, FL. This repository contains their digital platform — a Next.js website that serves as both a brand authority engine and lead generation system. The platform targets property managers, facility directors, and logistics managers across 22+ Central Florida markets.

---

## 2. Tech Stack (Actual)

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.5.x |
| UI | React | 19.1.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.x |
| Database | PostgreSQL (Railway) via Prisma | 6.19.x |
| Email | Resend | 6.9.x |
| Notifications | Slack Webhooks | — |
| Analytics | Google Analytics + Google Tag Manager | — |
| Dev Server | Turbopack | — |

**Note:** There is no external CMS (no Sanity, no Contentful). All content lives in TypeScript data files under `/content/`.

---

## 3. Architecture

```
User → Vercel Edge Network → Next.js Application
                                  │
                    ┌──────────────┼──────────────┐
                    │              │              │
              Content Files   PostgreSQL     External Services
              (/content/*.ts) (Prisma/       (Resend, Slack,
                              Railway)        GA, GTM)
```

- **Static pages** (200+) are pre-rendered at build time via SSG
- **API routes** handle form submissions, admin CRUD, and OG image generation
- **File-based storage** provides fallback for submissions and admin data

---

## 4. Content Model

All marketing content is stored as TypeScript arrays in `/content/`:

| File | Content | Count |
|---|---|---|
| `services.ts` | Core service offerings | 6 |
| `industries.ts` | Industry verticals | 4 |
| `locations.ts` | Central Florida cities | 22 |
| `city-services.ts` | City+service SEO landing pages | 155+ |
| `blog.ts` | Blog/resource articles | Variable |
| `testimonials.ts` | Client testimonials | 6 |
| `about.ts` | Company info | 1 |
| `faqs.ts` | General FAQs | Variable |
| `services-es.ts` | Spanish service translations | 6 |

---

## 5. Route Structure

```
/                           Homepage (SSG)
/services/[service]         6 service detail pages (SSG)
/industries/[industry]      4 industry pages (SSG)
/locations/[city]           22 city pages (SSG)
/[cityService]              155+ city+service SEO pages (SSG, flat URLs)
/resources/[slug]           Blog posts (SSG)
/es                         Spanish homepage (SSG)
/es/servicios/[servicio]    Spanish service pages (SSG)
/consultation               Lead capture form
/admin                      Admin dashboard
/api/consultation            Form submission endpoint
/api/admin/*                Admin CRUD endpoints
/api/og                     Dynamic OG image (Edge Runtime)
```

**Important:** City-service pages use flat URLs (e.g., `/orlando-commercial-cleaning`) not nested paths.

---

## 6. Key Systems

### Lead Capture
Consultation form → validates input → saves to file storage (always) → saves to PostgreSQL (if available) → sends Resend email → sends Slack notification → returns response. Each step is independent; failures don't cascade.

### SEO Infrastructure
- Dynamic metadata via `generateMetadata()` on all pages
- 10+ Schema.org types as JSON-LD (Organization, LocalBusiness, Service, FAQ, Speakable, HowTo, etc.)
- Dynamic XML sitemap + image sitemap
- Hreflang tags for English/Spanish
- Geo meta tags for Central Florida

### Admin Panel
Token-based auth at `/admin` for managing submissions, blog articles, site configuration, and generating Google Business Profile posts.

---

## 7. Brand

- **Colors:** Navy (#0A1628–#EEF3FA), Bronze (#6B5010–#FAF5E6), Cream (#FAF8F5–#EBE3D6)
- **Font:** Inter (Google Fonts, preloaded)
- **Tone:** Premium, professional, architectural — not commodity cleaning
- **Positioning:** Facility maintenance partner, not a cleaning vendor

---

## 8. Related Documentation

| Document | Path | Purpose |
|---|---|---|
| PRD | `docs/PRD.md` | Product requirements and feature specs |
| TRD | `docs/TRD.md` | Technical requirements and constraints |
| TAD | `docs/TAD.md` | System architecture and data flows |
| Dev Roadmap | `docs/Dev Roadmap.md` | Implementation phases |
| Addendum | `docs/Addendum.md` | Local SEO expansion strategy |
| CLAUDE.md | `CLAUDE.md` | Quick project context for AI tools |
