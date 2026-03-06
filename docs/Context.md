# Context.md  
  
# Axiom Facility Partners – Project Context  
  
This repository contains the production website platform for Axiom Facility Partners.  
  
Axiom Facility Partners is a premium commercial facility maintenance company serving office buildings, warehouses, and commercial property managers.  
  
This is not a commodity cleaning website. The platform must communicate:  
  
- operational reliability  
- architectural care  
- asset protection  
- premium service standards  
  
## Tech Stack  
  
Frontend:  
- Next.js  
- TypeScript  
- React  
- Tailwind CSS  
  
Hosting:  
- Vercel  
  
Network:  
- Cloudflare (DNS, WAF, CDN)  
  
CMS:  
- Headless CMS (Sanity)  
  
Analytics:  
- PostHog  
- Google Tag Manager  
  
## Core Architecture  
  
User  
↓  
Cloudflare  
↓  
Vercel  
↓  
Next.js Application  
↓  
Sanity CMS  
  
## SEO Strategy  
  
The site uses programmatic local SEO.  
  
Dynamic pages combine:  
  
City + Service  
  
Examples:  
  
/locations/orlando/office-cleaning    
/locations/lake-mary/warehouse-cleaning  
  
These pages are generated dynamically using CMS data.  
  
## Primary Conversion  
  
The primary goal of the platform is consultation generation.  
  
Primary CTA:  
  
Request a Facility Consultation  
  
Secondary tools include:  
  
- Facility audit tool  
- Total cost of ownership calculator  
  
## Design Principles  
  
Design should feel:  
  
- premium  
- architectural  
- minimal  
- calm  
- authoritative  
  
Avoid:  
  
- cheap home service design  
- stock cleaning imagery  
- cluttered layouts  
- gimmicky UI  
  
## Documentation  
  
Full project documentation is located in the `/docs` directory.  
  
Important files:  
  
- docs/prd.md  
- docs/trd.md  
- docs/tad.md  
- docs/implementation-roadmap.md  
- docs/platform-addendum.md  
