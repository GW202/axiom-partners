# Axiom Facility Partners

## Project Overview

Commercial cleaning and janitorial company website for Axiom Facility Partners (Orlando, FL). The platform serves as a digital authority engine and lead generation system targeting property managers, facility directors, and logistics managers across Central Florida.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 with custom navy/bronze/cream theme
- **Animation:** Framer Motion 12 (scroll-triggered reveals, transitions)
- **Database:** PostgreSQL via Prisma 6.19 (Railway-hosted)
- **Email:** Resend (consultation notifications)
- **Notifications:** Slack webhooks (real-time lead alerts)
- **Analytics:** Google Analytics (G-V5DS98Y2EC) + Google Tag Manager (GTM-TDN7SSBR)
- **Dev Server:** Turbopack

## Architecture

```
app/               → Next.js App Router (pages, API routes, layouts)
components/         → React components (layout/, sections/, ui/)
content/            → Static content as TypeScript data files
lib/                → Utilities (metadata, structured-data, email, slack, prisma, site-config)
prisma/             → PostgreSQL schema (ConsultationSubmission model)
public/             → Static assets (images, manifest, favicon)
docs/               → Project documentation (PRD, TRD, TAD)
```

## Content Model

All marketing content lives in TypeScript files under `/content/` — no external CMS:

- `services.ts` — 6 services (slug, title, description, protocols, benefits, FAQs)
- `industries.ts` — 4 industries (slug, title, challenges, services)
- `locations.ts` — 22 Central Florida cities
- `city-services.ts` — 155+ city+service landing page combinations (~155KB)
- `blog.ts` — Blog posts with categories, tags, takeaways
- `testimonials.ts` — 6 client testimonials
- `services-es.ts` — Spanish service translations
- `about.ts` — Company mission, story, values
- `faqs.ts` — General FAQ entries

## Key Route Patterns

```
/                           → Homepage (SSG)
/services/[service]         → 6 service detail pages (SSG)
/industries/[industry]      → 4 industry pages (SSG)
/locations/[city]           → 22 city pages (SSG)
/[cityService]              → 155+ city+service SEO pages (SSG, flat URLs)
/resources/[slug]           → Blog posts (SSG)
/es                         → Spanish homepage (SSG)
/es/servicios/[servicio]    → Spanish service pages (SSG)
/consultation               → Lead capture form (SSR)
/admin                      → Admin dashboard (SSR)
/api/consultation            → Form submission handler
/api/admin/*                → Admin CRUD (auth, articles, submissions, config, gbp-posts)
/api/og                     → Dynamic OG image generation (Edge Runtime)
```

## Key Patterns

- **Server Components** by default; `'use client'` only for interactive elements (forms, animations, carousels)
- **Static generation** via `generateStaticParams()` reading content arrays at build time
- **Dynamic metadata** via `generateMetadata()` for per-page SEO
- **Structured data** via `lib/structured-data.ts` — 10+ Schema.org types as JSON-LD
- **Consultation form** → file storage (always) + PostgreSQL (if available) + Resend email + Slack webhook
- **Brand palette:** Navy (#0A1628–#EEF3FA), Bronze (#6B5010–#FAF5E6), Cream (#FAF8F5–#EBE3D6)
- **`prefers-reduced-motion`** respected — all animations disabled

## Build & Scripts

```bash
npm run dev          # Next.js dev server with Turbopack
npm run build        # prisma generate && next build
npm run lint         # ESLint
npx tsc --noEmit     # Type check
```

## Documentation

- `docs/PRD.md` — Product Requirements Document
- `docs/TRD.md` — Technical Requirements Document
- `docs/TAD.md` — Technical Architecture Document
- `docs/Dev Roadmap.md` — Implementation roadmap
- `docs/Addendum.md` — Local SEO expansion strategy
