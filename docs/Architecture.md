# Architecture   
  
# Axiom Facility Partners – System Architecture  
  
This document describes the architecture of the Axiom Facility Partners digital platform.  
  
The platform is designed as a modern Jamstack-style application optimized for:  
  
- performance  
- scalability  
- SEO  
- local search visibility  
- maintainability  
- AI-assisted development  
  
---  
  
# 1. Architecture Overview  
  
The platform uses a layered architecture:  
  
User  
↓  
Cloudflare  
↓  
Vercel Edge Network  
↓  
Next.js Application  
↓  
Headless CMS  
↓  
Analytics + Integrations  
  
This architecture separates responsibilities across infrastructure layers to ensure performance and scalability.  
  
---  
  
# 2. Infrastructure Layer  
  
Network and security services are provided by:  
  
Cloudflare  
  
Responsibilities include:  
  
- DNS routing  
- Web Application Firewall (WAF)  
- bot protection  
- rate limiting  
- SSL encryption  
- CDN caching  
  
Cloudflare sits in front of the application and protects the platform from malicious traffic while improving performance through edge caching.  
  
---  
  
# 3. Application Hosting Layer  
  
Application hosting is provided by:  
  
Vercel  
  
Responsibilities include:  
  
- Next.js deployment  
- serverless functions  
- preview environments  
- CI/CD builds  
- edge rendering  
  
Vercel automatically deploys updates when code is pushed to the GitHub repository.  
  
---  
  
# 4. Application Layer  
  
The main application is built with:  
  
- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
  
This layer is responsible for:  
  
- page rendering  
- UI components  
- routing  
- API routes  
- client interactions  
  
The architecture prioritizes reusable components and modular design.  
  
---  
  
# 5. Rendering Strategy  
  
The platform uses hybrid rendering to balance performance and flexibility.  
  
Static Site Generation (SSG)  
  
Used for:  
  
- homepage  
- service pages  
- location pages  
- industry pages  
  
Incremental Static Regeneration (ISR)  
  
Used for:  
  
- insights  
- case studies  
- knowledge content  
  
Server-Side Rendering (SSR)  
  
Used for:  
  
- consultation forms  
- calculators  
- interactive tools  
- secure form processing  
  
---  
  
# 6. Content Management System  
  
Content is managed using a headless CMS.  
  
Recommended platform:  
  
Sanity  
  
The CMS provides structured content models for:  
  
- services  
- locations  
- industries  
- insights  
- case studies  
- FAQs  
- testimonials  
  
Content editors can update content without developer intervention.  
  
---  
  
# 7. Programmatic Local SEO System  
  
Axiom uses a programmatic SEO strategy to scale local search visibility.  
  
Dynamic page generation combines:  
  
City + Service  
  
Examples:  
  
/locations/orlando/office-cleaning  
/locations/lake-mary/warehouse-cleaning  
/locations/sanford/commercial-cleaning  
  
These pages are generated through dynamic Next.js routes using CMS data.  
  
---  
  
# 8. Route Architecture  
  
Example route structure:  
  
/  
 /services  
 /services/[service]  
 /locations  
 /locations/[city]  
 /locations/[city]/[service]  
 /industries/[industry]  
 /insights/[article]  
 /case-studies/[case-study]  
  
Dynamic routes allow the platform to scale to hundreds of pages.  
  
---  
  
# 9. Component Architecture  
  
The frontend uses a reusable component system.  
  
Key component categories:  
  
Layout components  
  
- header  
- navigation  
- footer  
- container  
- grid  
  
Content components  
  
- service cards  
- industry cards  
- case study cards  
- FAQ accordion  
- testimonial blocks  
  
Conversion components  
  
- consultation form  
- facility audit tool  
- TCO calculator  
  
Components are designed to be reusable and composable.  
  
---  
  
# 10. Conversion System  
  
Primary conversion goal:  
  
Request a Facility Consultation  
  
Lead capture includes:  
  
- name  
- company  
- facility type  
- square footage  
- email  
- phone  
  
Form submissions are handled via secure server-side endpoints.  
  
---  
  
# 11. Analytics Layer  
  
User behavior is tracked using:  
  
PostHog  
  
Analytics events include:  
  
- page views  
- CTA clicks  
- form submissions  
- calculator usage  
- audit tool interactions  
  
Analytics help measure conversion performance and user engagement.  
  
---  
  
# 12. Security Architecture  
  
Security is enforced across multiple layers.  
  
Cloudflare provides:  
  
- firewall protection  
- bot filtering  
- rate limiting  
  
The application enforces:  
  
- input validation  
- secure API endpoints  
- environment variable protection  
  
Sensitive logic is handled server-side.  
  
---  
  
# 13. Performance Strategy  
  
The platform is optimized for speed.  
  
Key techniques include:  
  
- Next.js image optimization  
- code splitting  
- server components  
- CDN caching  
- lazy loading  
  
Target metrics:  
  
- LCP < 1.0s  
- CLS = 0  
- excellent Lighthouse scores  
  
---  
  
# 14. Scalability  
  
The architecture supports expansion across:  
  
- additional cities  
- additional services  
- new industries  
- new geographic markets  
  
The CMS and routing system allow new pages to be added without changing application code.  
  
---  
  
# 15. AI Development Support  
  
This repository is designed to support AI-assisted development using Claude Code.  
  
Key project context files include:  
  
CONTEXT.md  
docs/prd.md  
docs/trd.md  
docs/tad.md  
  
These documents provide AI with the information needed to generate correct code and architecture decisions.  
