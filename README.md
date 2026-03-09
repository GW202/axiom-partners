# Axiom Facility Partners

Marketing website for Axiom Facility Partners — a premium commercial facility maintenance company serving Central Florida.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/                    # Next.js App Router pages
  api/consultation/     # Consultation form API endpoint
  services/[service]/   # Dynamic service detail pages
  industries/[industry]/ # Dynamic industry pages
  locations/[city]/     # Dynamic location pages
components/             # React components
  layout/               # Header, Footer, Container
  sections/             # Page sections (Hero, CTA, etc.)
  ui/                   # Reusable UI components
content/                # Static content data (services, industries, locations)
lib/                    # Utilities (metadata, structured data)
public/                 # Static assets (images, favicon)
```
