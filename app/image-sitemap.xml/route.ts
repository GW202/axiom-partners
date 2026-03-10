import { services } from '@/content/services';
import { locations } from '@/content/locations';
import { industries } from '@/content/industries';
import { cityServicePages } from '@/content/city-services';

const SITE_URL = 'https://axiomfacilitypartners.com';

const IMAGES = {
  hero: { url: `${SITE_URL}/hero-lobby.jpg`, title: 'Modern commercial lobby maintained by Axiom Facility Partners' },
  team: { url: `${SITE_URL}/team-photo.jpg`, title: 'Axiom Facility Partners professional cleaning team' },
  action: { url: `${SITE_URL}/team-action.jpg`, title: 'Axiom Facility Partners team performing commercial cleaning — surface disinfection and sanitization' },
  worker: { url: `${SITE_URL}/worker-cleaning.jpg`, title: 'Professional cleaner performing facility maintenance' },
  logo: { url: `${SITE_URL}/logo.png`, title: 'Axiom Facility Partners logo' },
  og: { url: `${SITE_URL}/og-image.jpg`, title: 'Axiom Facility Partners — Commercial Cleaning Service Orlando FL' },
};

function imageEntry(pageUrl: string, images: { url: string; title: string }[]) {
  return images
    .map(
      (img) => `  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
    </image:image>
  </url>`
    )
    .join('\n');
}

function escapeXml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function GET() {
  const entries: string[] = [];

  // Homepage
  entries.push(imageEntry(SITE_URL, [IMAGES.hero, IMAGES.team, IMAGES.action, IMAGES.logo]));

  // Services index
  entries.push(imageEntry(`${SITE_URL}/services`, [IMAGES.action]));

  // Service detail pages
  for (const service of services) {
    entries.push(
      imageEntry(`${SITE_URL}/services/${service.slug}`, [IMAGES.action])
    );
  }

  // Industry pages
  for (const industry of industries) {
    entries.push(
      imageEntry(`${SITE_URL}/industries/${industry.slug}`, [IMAGES.action])
    );
  }

  // Location pages
  for (const location of locations) {
    entries.push(
      imageEntry(`${SITE_URL}/locations/${location.slug}`, [IMAGES.team])
    );
  }

  // City-service landing pages
  for (const page of cityServicePages) {
    entries.push(imageEntry(`${SITE_URL}/${page.slug}`, [IMAGES.action]));
  }

  // About
  entries.push(imageEntry(`${SITE_URL}/about`, [IMAGES.team, IMAGES.hero, IMAGES.worker]));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
