TAD  
  
Below is the Final Technical Architecture Document (TAD v2) for Axiom Facility Partners.  
This version is clean, production-ready, and excludes Railway, using:  
* Next.js    
* Vercel    
* Cloudflare    
* Headless CMS    
* enterprise-grade SEO/AEO architecture    
This document is designed so a senior development team can implement the platform directly.  
  
  
  
**AXIOM FACILITY PARTNERS**  
**AXIOM FACILITY PARTNERS**  
**Technical Architecture Document (TAD v2)**  
Version: 2.0  
Architecture Model: Headless, Edge-Accelerated Web Platform  
Primary Objective: Build a high-performance, premium digital platform optimized for commercial search visibility, enterprise trust, and consultation-driven lead generation.  
  
  
  
**1. System Overview**  
**1. System Overview**  
**Platform Purpose**  
**Platform Purpose**  
The Axiom platform will function as:  
1. Premium brand authority engine    
2. Premium brand authority engine    
3. Commercial lead generation platform    
4. Commercial lead generation platform    
5. Facility maintenance knowledge authority    
6. Facility maintenance knowledge authority    
7. Consultation conversion system    
8. Consultation conversion system    
9. Scalable regional service infrastructure    
10. Scalable regional service infrastructure    
Primary audience:  
Property Managers  
Property Managers  
Facility Directors  
Logistics Managers  
Logistics Managers  
Commercial Real Estate Operators  
Commercial Real Estate Operators  
The platform must deliver:  
The platform must deliver:  
Enterprise-level performance  
Enterprise-level performance  
Search authority  
High trust UX  
High trust UX  
Scalable service expansion  
  
  
  
**2. Core Technology Stack**  
**2. Core Technology Stack**  
**Frontend Framework**  
**Frontend Framework**  
Next.js 16  
Next.js 16  
React 19  
React 19  
TypeScript  
Capabilities:  
Capabilities:  
Hybrid rendering  
Server components  
Server components  
Edge compatibility  
Edge compatibility  
SEO optimized HTML output  
  
  
  
**Styling Framework**  
**Styling Framework**  
Tailwind CSS 4  
Benefits:  
Atomic styling  
Atomic styling  
Small CSS footprint  
Small CSS footprint  
Design consistency  
Design consistency  
Fast rendering  
  
  
  
**Animation Library**  
Framer Motion  
Usage:  
Usage:  
scroll reveal  
scroll reveal  
section transitions  
micro-interactions  
Animations must remain subtle and performance-safe.  
  
  
  
**Content Management System**  
**Content Management System**  
Recommended CMS:  
Recommended CMS:  
• Sanity.io (preferred)  
• Contentful (alternative)  
CMS responsibilities:  
CMS responsibilities:  
service pages  
service pages  
location pages  
location pages  
case studies  
knowledge articles  
knowledge articles  
industry insights  
industry insights  
Benefits:  
structured content  
structured content  
API-first architecture  
editor-friendly interface  
editor-friendly interface  
version control  
  
  
  
**3. Hosting & Infrastructure**  
**3. Hosting & Infrastructure**  
**Application Hosting**  
Deployment platform:  
Deployment platform:  
Vercel  
Responsibilities:  
Responsibilities:  
Next.js deployment  
Next.js deployment  
edge rendering  
image optimization  
image optimization  
preview environments  
CI/CD pipeline  
  
  
  
**Network, Security & CDN**  
Infrastructure layer:  
Cloudflare  
Responsibilities:  
Responsibilities:  
DNS management  
DNS management  
CDN caching  
WAF security  
WAF security  
bot protection  
rate limiting  
SSL termination  
SSL termination  
traffic analytics  
traffic analytics  
Cloudflare sits in front of Vercel.  
Architecture:  
Architecture:  
User  
↓  
Cloudflare Edge  
Cloudflare Edge  
↓  
Vercel Next.js App  
Vercel Next.js App  
↓  
↓  
Headless CMS + APIs  
Headless CMS + APIs  
  
  
  
**4. Rendering Strategy**  
Axiom will use Hybrid Rendering.  
Axiom will use Hybrid Rendering.  
**Static Site Generation (SSG)**  
**Static Site Generation (SSG)**  
Used for:  
Used for:  
homepage  
homepage  
services  
services  
location pages  
location pages  
industry pages  
knowledge hub  
knowledge hub  
Benefits:  
Benefits:  
instant load times  
excellent SEO indexing  
excellent SEO indexing  
edge caching  
edge caching  
  
  
  
**Incremental Static Regeneration (ISR)**  
Used for:  
Used for:  
case studies  
case studies  
knowledge articles  
industry insights  
Rebuild interval:  
Rebuild interval:  
1 hour  
1 hour  
  
  
  
**Server Side Rendering (SSR)**  
**Server Side Rendering (SSR)**  
Used for:  
Used for:  
consultation requests  
consultation requests  
facility audit tools  
facility audit tools  
client portal authentication  
client portal authentication  
  
  
  
**5. Information Architecture**  
**5. Information Architecture**  
**Primary Navigation**  
Home  
Home  
Services  
Services  
Industries  
Industries  
Locations  
Locations  
Insights  
Insights  
Case Studies  
Case Studies  
About  
Consultation  
Consultation  
  
  
  
**6. Service Page Architecture**  
**6. Service Page Architecture**  
Each service receives a dedicated landing page.  
Examples:  
Examples:  
/services/office-building-cleaning  
/services/office-building-cleaning  
/services/warehouse-facility-cleaning  
/services/day-porter-services  
/services/day-porter-services  
/services/floor-care-maintenance  
/services/sanitation-protocols  
/services/sanitation-protocols  
Each page includes:  
service narrative  
facility maintenance protocols  
benefits to asset longevity  
FAQ section  
FAQ section  
consultation CTA  
consultation CTA  
  
  
  
**7. Industry Page Architecture**  
**7. Industry Page Architecture**  
Industry-focused landing pages increase authority.  
Examples:  
Examples:  
/industries/corporate-offices  
/industries/corporate-offices  
/industries/logistics-warehouses  
/industries/medical-offices  
/industries/commercial-property-management  
  
  
  
**8. Location Architecture (Local SEO)**  
**8. Location Architecture (Local SEO)**  
Location pages capture regional search demand.  
Examples:  
/locations/orlando  
/locations/orlando  
/locations/lake-mary  
/locations/lake-mary  
/locations/sanford  
/locations/sanford  
/locations/winter-park  
/locations/winter-park  
/locations/tampa  
/locations/tampa  
Each page includes:  
Each page includes:  
local services  
local services  
map integration  
regional expertise  
regional expertise  
industry examples  
consultation CTA  
consultation CTA  
  
  
  
**9. SEO Architecture**  
**URL Structure**  
Preferred format:  
axiomfacilitypartners.com/service-location  
axiomfacilitypartners.com/service-location  
Example:  
Example:  
/orlando-office-cleaning  
/orlando-warehouse-cleaning  
/orlando-warehouse-cleaning  
/lake-mary-commercial-cleaning  
/lake-mary-commercial-cleaning  
  
  
  
**Metadata Management**  
**Metadata Management**  
Dynamic metadata generated through CMS.  
Dynamic metadata generated through CMS.  
Example:  
Example:  
Title:  
Title:  
Office Building Cleaning Orlando | Axiom Facility Partners  
Office Building Cleaning Orlando | Axiom Facility Partners  
Description:  
Premium office building maintenance designed to protect facility assets and ensure operational continuity.  
  
  
  
**10. Structured Data (SEO + AEO)**  
Structured data implemented via JSON-LD.  
Structured data implemented via JSON-LD.  
Schemas used:  
Organization  
Organization  
LocalBusiness  
LocalBusiness  
Service  
Service  
OfferCatalog  
OfferCatalog  
FAQPage  
FAQPage  
Speakable  
Speakable  
Dataset  
Dataset  
Schema hierarchy:  
Organization  
↓  
↓  
Service  
↓  
↓  
OfferCatalog  
OfferCatalog  
↓  
FAQ  
FAQ  
  
  
  
**11. Core Web Vitals Targets**  
**11. Core Web Vitals Targets**  
Performance targets:  
Performance targets:  
LCP < 1.0s  
LCP < 1.0s  
CLS = 0  
CLS = 0  
INP < 150ms  
INP < 150ms  
TTFB < 200ms  
TTFB < 200ms  
Achieved through:  
SSG rendering  
SSG rendering  
Cloudflare CDN  
Cloudflare CDN  
Next.js optimization  
Next.js optimization  
AVIF images  
AVIF images  
minimal JavaScript  
minimal JavaScript  
  
  
  
**12. Image Optimization**  
**12. Image Optimization**  
Image system:  
Next.js Image Component  
AVIF primary format  
WebP fallback  
WebP fallback  
responsive sizing  
lazy loading  
All imagery must use:  
professional architectural photography  
professional architectural photography  
clean facility imagery  
high resolution  
high resolution  
optimized compression  
  
  
  
**13. Conversion Architecture**  
Axiom does not operate as a quote-driven vendor site.  
Conversion funnel:  
Conversion funnel:  
Visitor  
Visitor  
↓  
↓  
Authority & expertise  
Authority & expertise  
↓  
↓  
Educational insight  
↓  
↓  
Facility audit tool  
↓  
↓  
Consultation request  
  
  
  
**14. Facility Audit Tool**  
**14. Facility Audit Tool**  
Interactive React component.  
Interactive React component.  
Inputs:  
Inputs:  
facility type  
square footage  
square footage  
cleaning frequency  
current vendor performance  
current vendor performance  
Outputs:  
Outputs:  
facility health score  
facility health score  
asset risk indicators  
recommended maintenance strategy  
recommended maintenance strategy  
  
  
  
**15. Total Cost of Ownership (TCO) Calculator**  
Purpose:  
Demonstrate the financial cost of low-bid cleaning vendors.  
Demonstrate the financial cost of low-bid cleaning vendors.  
Variables:  
Variables:  
facility square footage  
facility square footage  
cleaning cost  
cleaning cost  
floor replacement costs  
floor replacement costs  
HVAC efficiency impact  
HVAC efficiency impact  
management oversight hours  
management oversight hours  
Outputs:  
Outputs:  
5-year asset protection savings  
maintenance ROI  
operational efficiency gains  
operational efficiency gains  
  
  
  
**16. Client Transparency Portal (Future Module)**  
**16. Client Transparency Portal (Future Module)**  
Portal capabilities:  
inspection reports  
inspection reports  
facility maintenance logs  
SOP compliance reports  
SOP compliance reports  
document storage  
document storage  
service audit data  
service audit data  
Integration options:  
Jobber  
Swept  
Custom CRM  
  
  
  
**17. Analytics & Monitoring**  
**17. Analytics & Monitoring**  
Analytics platforms:  
Analytics platforms:  
PostHog  
PostHog  
Cloudflare Analytics  
Cloudflare Analytics  
Google Tag Manager  
Google Tag Manager  
Tracked metrics:  
Tracked metrics:  
conversion funnel  
page performance  
page performance  
user engagement  
lead generation events  
lead generation events  
  
  
  
**18. Security Architecture**  
**18. Security Architecture**  
Security layers:  
Security layers:  
Cloudflare WAF  
Cloudflare WAF  
Protection includes:  
Protection includes:  
bot filtering  
rate limiting  
API protection  
DDoS mitigation  
Data protection:  
Data protection:  
HTTPS encryption  
HTTPS encryption  
secure form processing  
input validation  
input validation  
  
  
  
**19. Accessibility**  
**19. Accessibility**  
Compliance target:  
Compliance target:  
WCAG 2.2 AA  
Requirements:  
semantic HTML  
screen reader compatibility  
keyboard navigation  
alt text compliance  
color contrast standards  
color contrast standards  
  
  
  
**20. CI/CD Pipeline**  
**20. CI/CD Pipeline**  
Deployment workflow:  
Deployment workflow:  
GitHub Repository  
↓  
↓  
Vercel Build Pipeline  
↓  
Preview Deployment  
↓  
↓  
Production Deployment  
Production Deployment  
Cloudflare remains active as:  
Cloudflare remains active as:  
DNS layer  
DNS layer  
security gateway  
security gateway  
global CDN  
global CDN  
  
  
  
**21. Performance Monitoring**  
Tools used:  
Tools used:  
Vercel Speed Insights  
Vercel Speed Insights  
Lighthouse  
Lighthouse  
PageSpeed Insights  
Cloudflare Analytics  
Cloudflare Analytics  
Continuous monitoring ensures performance targets remain stable.  
Continuous monitoring ensures performance targets remain stable.  
  
  
  
**22. Scalability Strategy**  
**22. Scalability Strategy**  
The architecture must support expansion into:  
additional Florida cities  
additional Florida cities  
new commercial services  
facility management verticals  
facility management verticals  
enterprise contracts  
CMS-driven architecture allows new pages without code changes.  
CMS-driven architecture allows new pages without code changes.  
  
  
  
**Final Architecture Summary**  
**Final Architecture Summary**  
The Axiom platform is built as:  
The Axiom platform is built as:  
Next.js Enterprise Application  
Next.js Enterprise Application  
+  
+  
Vercel Deployment  
Vercel Deployment  
+  
+  
Cloudflare Edge Infrastructure  
+  
+  
Headless CMS Content System  
+  
+  
SEO + AEO Optimized Architecture  
SEO + AEO Optimized Architecture  
+  
Consultation Conversion Funnel  
Consultation Conversion Funnel  
This system positions Axiom Facility Partners as a high-authority commercial facility partner capable of dominating the Central Florida commercial maintenance market.  
  
  
  
If you want, the next step would be generating the PRD and TRD documents, which together with this TAD form the complete developer blueprint package.  
If you want, the next step would be generating the PRD and TRD documents, which together with this TAD form the complete developer blueprint package.  
  
  
