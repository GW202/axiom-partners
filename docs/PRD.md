# Axiom Facility Partners — Product Requirements Document (PRD)

**Version:** 2.0
**Last Updated:** March 2026
**Product Type:** Premium Commercial Service Platform & Lead Generation Engine
**Target Market:** Central Florida Commercial Facilities

---

## 1. Product Overview

### Purpose

The Axiom digital platform serves as the primary digital authority and lead acquisition system for Axiom Facility Partners, a commercial cleaning and janitorial company headquartered in Orlando, FL.

The platform must:

- Establish Axiom as the highest-trust commercial facility partner in Central Florida
- Attract property managers, facility directors, and logistics managers
- Generate high-value recurring contract leads through consultation requests
- Communicate asset protection and operational reliability — not commodity cleaning
- Dominate local search results across 22+ Central Florida markets

Unlike commodity cleaning websites, the platform positions Axiom as a **strategic facility partner** rather than a vendor.

### Product Vision

The digital experience must communicate professionalism, operational discipline, architectural care, and reliability. The platform should feel comparable to websites from high-end engineering, architecture, or consulting firms — not a typical janitorial service site.

---

## 2. Product Objectives

| Objective | Measurement |
|---|---|
| Generate qualified commercial leads | Consultation form submissions |
| Establish brand authority | Organic search visibility, time on site |
| Demonstrate operational expertise | Engagement with service/industry content |
| Support long-term SEO growth | Keyword rankings across 155+ city-service pages |
| Enable scalable market expansion | New cities/services deployable via content data |

**Primary KPI:** Qualified commercial consultation requests.

---

## 3. Target Users

### Property Manager

- **Responsibilities:** Managing multiple buildings, maintaining property value, coordinating vendors
- **Goals:** Reliable service, minimal oversight, predictable performance
- **Pain Points:** Unreliable cleaning crews, tenant complaints, vendor miscommunication

### Facility Director

- **Responsibilities:** Operational continuity, safety compliance, building maintenance
- **Goals:** Consistent facility upkeep, documented service quality, compliance standards
- **Pain Points:** Unverified cleaning work, poor sanitation practices, equipment damage

### Logistics Manager

- **Responsibilities:** Warehouse efficiency, equipment protection, worker safety
- **Goals:** Dust control, floor maintenance, minimal operational disruption
- **Pain Points:** Unsafe floors, dust affecting equipment, cleaning interfering with operations

---

## 4. Value Proposition

Axiom is **not** positioned as a janitorial vendor. The platform communicates four pillars:

1. **Asset Protection** — Maintaining facilities to protect the building assets that drive property value
2. **Operational Reliability** — Consistent, documented service delivery with no missed shifts
3. **Facility Expertise** — Understanding commercial building systems and cleaning with purpose
4. **Executive Accountability** — Direct communication with leadership and transparent reporting

---

## 5. Key Product Features

### 5.1 Premium Homepage Experience

The homepage establishes authority and credibility through:

- Hero section with brand narrative and CTA
- Statistics bar (22 cities, 6 services, 24/7 availability)
- Full-width architectural lobby imagery
- **Services showcase** — Bento grid with numbered badges (01–06), service-specific icons, and staggered animations
- **Why Axiom** — Timeline layout with alternating sides, animated vertical connector, and large decorative numbers
- **Industries showcase** — Full-width stacked cards with gradient accent strips and large icons
- Top Service Areas with city-service link grid
- Client testimonials carousel with star ratings
- Consultation CTA section

### 5.2 Service Pages (6 pages)

Each of the 6 core services has a dedicated detail page:

| Service | Route |
|---|---|
| Office Building Cleaning | `/services/office-building-cleaning` |
| Warehouse Facility Cleaning | `/services/warehouse-facility-cleaning` |
| Facilities Management | `/services/facilities-management` |
| Day Porter Services | `/services/day-porter-services` |
| Floor Care Maintenance | `/services/floor-care-maintenance` |
| Disinfection Protocols | `/services/disinfection-protocols` |

Each page includes: service narrative, maintenance protocols, benefits to facility operations, FAQ section, and consultation CTA.

### 5.3 Industry Pages (4 pages)

Industry-focused landing pages demonstrate specialization:

| Industry | Route |
|---|---|
| Corporate Offices | `/industries/corporate-offices` |
| Logistics Warehouses | `/industries/logistics-warehouses` |
| Commercial Property Management | `/industries/commercial-property-management` |
| Medical Offices | `/industries/medical-offices` |

Each page includes: industry challenges, tailored service offerings, long-form descriptions, and CTAs.

### 5.4 Location Pages (22 cities)

Location pages capture regional search demand across Central Florida:

Orlando, Lake Mary, Sanford, Winter Park, Maitland, Altamonte Springs, Longwood, Casselberry, Oviedo, Doctor Phillips, Lake Nona, Kissimmee, Tampa, Lakeland, Melbourne, Ocala, Daytona Beach, Winter Garden, Clermont, St. Cloud, Apopka, and Deltona.

Each page includes: local services, regional expertise, industry examples, and consultation CTA.

### 5.5 City-Service Landing Pages (155+ pages)

Hyper-local SEO pages targeting specific city + service keyword combinations:

- Example routes: `/orlando-commercial-cleaning`, `/lake-mary-office-cleaning`, `/tampa-warehouse-cleaning`
- Each page includes: localized H1, meta description, neighborhood context, city-specific FAQs, and cross-links to related pages
- Data-driven generation from `city-services.ts` content file

### 5.6 Resources / Knowledge Hub

Blog-style content demonstrating facility maintenance expertise:

- Articles covering facility management, industry insights, and cleaning best practices
- Category and tag filtering via search component
- Admin-created articles via the admin panel
- Supports SEO authority building and AEO (Answer Engine Optimization) compatibility

### 5.7 Spanish Language Support

Bilingual content for the Spanish-speaking market:

- Spanish homepage at `/es`
- Spanish service pages at `/es/servicios/[servicio]`
- Translated service content from dedicated `services-es.ts`

---

## 6. Conversion System

### Consultation Request Form

Primary conversion mechanism. Form collects:

- Name, email, phone
- Company name
- Facility type (dropdown)
- Square footage
- Services of interest (multi-select)
- Message

**Submission triggers:**
1. Saved to PostgreSQL database (primary)
2. Saved to file-based storage (fallback)
3. Email notification sent via Resend
4. Slack notification sent via webhook
5. Analytics conversion event logged

### Admin Dashboard

Internal admin panel at `/admin` for:

- Viewing and managing consultation submissions (paginated)
- Creating, editing, and deleting blog articles
- Updating site configuration (phone, email, address)
- Generating Google Business Profile post variants from blog content

---

## 7. User Experience Requirements

### Design Principles

- Clean, professional, structured, and premium aesthetic
- Minimal clutter with strong whitespace
- Large typography with clear hierarchy
- Smooth scroll-triggered animations (Framer Motion)
- Navy/bronze/cream brand color palette throughout

### Brand Colors

- **Navy** (primary): `#0A1628` → `#EEF3FA`
- **Bronze** (accent): `#6B5010` → `#FAF5E6`
- **Cream** (background): `#FAF8F5` → `#EBE3D6`

### Visual Differentiation

Each homepage section uses a **distinct visual treatment** to avoid a templated appearance:

- Services: Dot-grid background, bento layout, numbered badges
- Why Axiom: Gradient mesh background, timeline with connector line
- Industries: Gradient-to-white background, horizontal stacked cards with accent strips
- Testimonials: Warm cream/bronze gradient, white card with shadow, star ratings
- Top Service Areas: Dark navy with diagonal lines
- CTA: Distinct CTA-specific design

---

## 8. Accessibility Requirements

The platform must meet **WCAG 2.2 AA** compliance:

- Semantic HTML structure
- Screen reader compatibility (aria labels, roles)
- Full keyboard navigation
- Alt text on all images
- Sufficient color contrast ratios
- Skip-to-content link
- Reduced motion support via `prefers-reduced-motion`

---

## 9. Analytics & Tracking

| Platform | Purpose |
|---|---|
| Google Tag Manager (GTM-TDN7SSBR) | Tag management and event tracking |
| Google Analytics (G-V5DS98Y2EC) | Traffic, engagement, and conversion analytics |
| Slack Webhooks | Real-time consultation submission alerts |

Tracked events: page visits, consultation submissions, form interactions, traffic sources.

---

## 10. Security Requirements

- HTTPS encryption (enforced)
- Secure form submissions with input validation and sanitization
- Admin authentication (token-based)
- Content Security Policy headers
- Strict-Transport-Security headers
- X-Content-Type-Options: nosniff
- Cookie consent banner (GDPR compliance)

---

## 11. Success Metrics

The product is considered successful when it achieves:

- Increase in qualified consultation requests
- Growth in organic search visibility across 155+ city-service keywords
- Higher engagement with educational/resource content
- Conversion from visitors to commercial leads
- Reduced bounce rate on service and industry pages

---

## 12. Competitive Positioning (vs. Top 5 Orlando Competitors)

Based on a March 2026 competitor analysis of the top 5 commercial cleaning companies in Orlando (ICS, JAN-PRO, Citi Cleaning, Stratus Building Solutions, Corvus Janitorial), the following competitive assessment applies:

### Where Axiom Already Leads

| Competitor Best Practice | Axiom Status |
|---|---|
| Professional, purpose-built website | **Exceeds all 5** — custom Next.js/Tailwind/Framer Motion vs. templates |
| Deep service pages with protocols/FAQs | **On par with Stratus** (deepest among competitors) |
| Location-specific pages | **Far exceeds all** — 22 cities + 155+ city-service pages vs. Stratus's "dozens" |
| Industry-specific pages | **On par** with JAN-PRO/Stratus/Corvus (4 industry pages) |
| Blog / content marketing | **Competitive** — Resources section with admin article creation |
| Structured data / Schema.org | **Far exceeds all** — 10+ schema types; competitors have little to none |
| Bilingual support | **Unique advantage** — no competitor offers Spanish |
| Mobile responsive | **Yes** (all competitors also meet this baseline) |

### Gaps to Address

| # | Gap | Competitor Evidence | Priority | Action |
|---|---|---|---|---|
| 1 | **Phone number in header** | 4 of 5 competitors display phone in header; Axiom only shows it in footer | High | Add phone to Header component |
| 2 | **Client logos on homepage** | All 5 competitors display recognizable client brand logos | High | Add client logo strip to homepage |
| 3 | **Google Business Profile strategy** | ICS is #1 in Local Pack due to GBP optimization — Local Pack gets highest-intent clicks | High | See Addendum for GBP strategy |
| 4 | **Review generation** | ICS dominates Local Pack partly through review volume | High | Target: 50 reviews Year 1, 120 Year 2 |
| 5 | **Green/Eco positioning** | ICS (Green Clean Certified), Stratus (Green Clean program), Corvus (Green Cleaning) — 3 of 5 use this | Medium | Consider certification and dedicated messaging |
| 6 | **Risk-reduction messaging** | ICS differentiates with "no contracts or long-term obligations" | Medium | Add flexibility/risk-reduction language to value proposition |
| 7 | **Live chat** | None of top 5 have it — competitor analysis identifies this as a differentiation opportunity | Medium | Evaluate Intercom, Drift, or Crisp integration |
| 8 | **Case studies with metrics** | Stratus and Corvus feature detailed case studies | Medium | Planned in roadmap; prioritize 2-3 initial case studies |

### Competitive Summary

Axiom's programmatic SEO infrastructure (155+ city-service pages, 10+ Schema.org types, Spanish support) represents a **structural advantage** that no current competitor can match without rebuilding their platform. The primary gaps are in off-site signals (GBP optimization, reviews, citations) and on-site trust signals (client logos, phone in header, eco positioning) — all of which are straightforward to address.

---

## 13. Future Product Roadmap

Planned features not yet implemented:

| Feature | Description |
|---|---|
| Facility Audit Tool | Interactive tool for prospects to evaluate facility health |
| TCO Calculator | Total cost of ownership comparison demonstrating premium maintenance ROI |
| Client Transparency Portal | Inspection reports, maintenance logs, SOP compliance dashboards |
| Headless CMS Migration | Move from file-based content to Sanity.io or equivalent |
| Case Studies | Detailed client success stories with metrics |
| Service Reporting Tools | Automated facility maintenance reports for clients |
