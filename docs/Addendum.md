# Axiom Facility Partners — Digital Platform Addendum

## Local Market Expansion & Lead Acquisition Systems

**Version:** 2.0
**Last Updated:** March 2026
**Related Documents:** PRD, TRD, TAD v2

---

## 1. Purpose

This addendum expands the core platform with strategies for local search dominance:

1. Programmatic Local SEO Engine
2. Google Map Pack Domination Strategy
3. Local Authority Citation Network

These systems maximize visibility in commercial facility service searches across Central Florida.

---

## 2. Programmatic Local SEO Engine (IMPLEMENTED)

### Strategy

The platform generates 155+ dynamic pages combining city + service keywords. Each page targets a specific local search query with unique content, FAQs, and cross-links.

### Implementation (Current)

- **Route:** `/[cityService]` — flat URLs for maximum keyword density
- **Data source:** `content/city-services.ts` (155KB, 155+ combinations)
- **Generation:** `generateStaticParams()` reads all combinations at build time
- **Content per page:** Localized H1, meta description, neighborhood context, city-specific FAQs, cross-links to related services/cities
- **Schema markup:** FAQPage JSON-LD on every city-service page

### Examples

```
/orlando-commercial-cleaning
/lake-mary-office-cleaning
/sanford-warehouse-cleaning
/winter-park-day-porter-services
/tampa-warehouse-cleaning
```

### Coverage

22 cities x 6 services = 132 base combinations, plus additional variants = 155+ total pages.

### SEO Impact

These pages target low-competition, high-intent local queries like:
- "commercial cleaning lake mary"
- "office cleaning winter park"
- "warehouse cleaning sanford"
- "janitorial services altamonte springs"

---

## 3. Google Map Pack Domination Strategy (MANUAL — Owner Tasks)

### Why It Matters

Map Pack listings appear above organic results and receive the largest share of clicks for local service queries. The competitor analysis shows ICS holds #1 in the Local Pack — this is their primary competitive advantage.

### Core Ranking Factors

1. **Proximity** — Distance between searcher and business location
2. **Relevance** — How closely the business profile matches the search query
3. **Prominence** — Overall authority of the business across the internet

### Action Items

| Task | Status | Notes |
|---|---|---|
| Create/optimize Google Business Profile | TODO | Verify 6 services match site names |
| Add keyword-rich business description | TODO | Include "commercial cleaning Orlando" and service terms |
| Upload geo-tagged facility photos | TODO | Use geographic filenames + EXIF data |
| Confirm NAP consistency (Name, Address, Phone) | TODO | Must match website footer exactly |
| Add business hours | TODO | Mon-Fri 7:00 AM - 6:00 PM |
| Enable Google Business Profile posts | TODO | Use admin GBP post generator |

### Review Strategy

| Target | Timeline |
|---|---|
| 50 reviews | Year 1 |
| 120 reviews | Year 2 |
| 250 reviews | Year 3 |

Review requests should be automated following completed service engagements. Reviews mentioning specific services + cities are most valuable.

### GBP Post Activity (IMPLEMENTED)

The admin panel includes a GBP post generator that creates 3 post variants from blog content:
- What's New post
- Quick Tip post
- CTA post

Weekly GBP updates improve profile visibility and trust.

---

## 4. Local Authority Citation Network (MANUAL — Owner Tasks)

### Purpose

Search engines validate local businesses by comparing business information across directories. Consistent presence across trusted platforms increases search authority.

### Required Citation Platforms

| Platform | Status |
|---|---|
| Google Business Profile | TODO |
| Yelp | TODO |
| Better Business Bureau | TODO |
| Angi | TODO |
| YellowPages | TODO |
| Bing Places | TODO |
| Apple Maps | TODO |
| Facebook Business | TODO |
| LinkedIn Company | TODO |
| Nextdoor | TODO |

### NAP Consistency

All listings must use identical business information:

```
Axiom Facility Partners
2750 Taylor Ave, Orlando, FL 32806
(407) 342-3195
```

### Website Integration

Each Google Business Profile should link to the corresponding location page:
- Google Profile: Axiom Facility Partners — Lake Mary → Website: `/locations/lake-mary`
- Google Profile: Axiom Facility Partners — Orlando → Website: `/locations/orlando`

---

## 5. Combined Search Visibility Strategy

When these systems are combined with the core platform, Axiom achieves visibility across three discovery channels:

1. **Google Maps results** — via optimized Google Business Profile + reviews
2. **Organic search results** — via 200+ optimized pages with structured data
3. **AI-generated answer engines** — via Speakable schema + FAQ content

---

## 6. Budget Items

| Item | Estimated Cost |
|---|---|
| Chamber of Commerce membership | $200-500/yr |
| BOMA/IFMA memberships | $200-500/yr each |
| BBB listing | $50-300/yr |
| Angi/Thumbtack listings | $50-300/yr each |
| Professional photography | $500-2,000 one-time |
| Local sponsorships & PR | Variable |
