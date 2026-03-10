import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import {
  cityServicePages,
  getAllCityServiceSlugs,
  getCityServicePage,
} from '@/content/city-services';
import { generatePageMetadata } from '@/lib/metadata';
import {
  generateCityServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
} from '@/lib/structured-data';

interface CityServicePageProps {
  params: Promise<{ cityService: string }>;
}

export async function generateStaticParams() {
  return getAllCityServiceSlugs().map((slug) => ({ cityService: slug }));
}

export async function generateMetadata({ params }: CityServicePageProps) {
  const { cityService: slug } = await params;
  const page = getCityServicePage(slug);
  if (!page) return {};
  return generatePageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [
      `${page.city} ${page.service.toLowerCase()}`,
      `${page.service.toLowerCase()} ${page.city}`,
      `commercial cleaning ${page.city}`,
      `facility maintenance ${page.city} ${page.state}`,
      'Axiom Facility Partners',
    ],
  });
}

export default async function CityServiceLandingPage({
  params,
}: CityServicePageProps) {
  const { cityService: slug } = await params;
  const page = getCityServicePage(slug);
  if (!page) notFound();

  // Resolve nearby city pages for cross-linking
  const nearbyCityPages = page.nearbyCities
    .map((s) => getCityServicePage(s))
    .filter(Boolean);

  // Resolve related service pages for this city
  const relatedServicePages = page.relatedServices
    .map((s) => getCityServicePage(s))
    .filter(Boolean);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCityServiceSchema(page)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(page.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: page.city, href: `/locations/${page.citySlug}` },
              { name: `${page.service} in ${page.city}`, href: `/${page.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSpeakableSchema(`/${page.slug}`)),
        }}
      />

      {/* Hero */}
      <Hero
        title={page.h1}
        subtitle={page.intro}
        badge={`Serving ${page.city}, ${page.state}`}
      />

      {/* Service Context */}
      <SectionWrapper
        heading={`${page.service} for ${page.city} Facilities`}
        subtitle={`Tailored ${page.service.toLowerCase()} programs for ${page.city}'s commercial properties.`}
      >
        <div className="prose prose-lg max-w-none">
          {page.serviceContext.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-navy-600"
              data-speakable
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Facility Types & Neighborhoods */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={0}>
            <div className="rounded-xl border border-navy-100 bg-white p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                Facilities We Serve in {page.city}
              </h3>
              <ul className="mt-5 space-y-3">
                {page.facilityTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-3 text-sm text-navy-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-bronze-500"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-navy-100 bg-white p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                {page.city} Areas We Cover
              </h3>
              <ul className="mt-5 space-y-3">
                {page.neighborhoods.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-sm text-navy-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-bronze-500"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper
        heading={`${page.service} in ${page.city} — FAQs`}
        subtitle={`Common questions about our ${page.service.toLowerCase()} services in ${page.city}.`}
        dark
      >
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm lg:p-10">
            <FAQAccordion faqs={page.faqs} />
          </div>
        </div>
      </SectionWrapper>

      {/* Regional Network — Nearby Cities & Related Services */}
      {(nearbyCityPages.length > 0 || relatedServicePages.length > 0) && (
        <SectionWrapper
          heading={`${page.service} Across Central Florida`}
          subtitle={`Axiom Facility Partners serves the entire Orlando metro. Explore our ${page.service.toLowerCase()} coverage in nearby cities.`}
        >
          {nearbyCityPages.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                Nearby Cities
              </h3>
              <div className="flex flex-wrap gap-3">
                {nearbyCityPages.map((nearby) => (
                  <Link
                    key={nearby!.slug}
                    href={`/${nearby!.slug}`}
                    className="rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-700 shadow-sm transition-all duration-200 hover:border-bronze-300 hover:text-bronze-700 hover:shadow-md"
                  >
                    {nearby!.service} in {nearby!.city}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedServicePages.length > 0 && (
            <div>
              <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                More Services in {page.city}
              </h3>
              <div className="flex flex-wrap gap-3">
                {relatedServicePages.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/${related!.slug}`}
                    className="rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-700 shadow-sm transition-all duration-200 hover:border-bronze-300 hover:text-bronze-700 hover:shadow-md"
                  >
                    {related!.service} in {related!.city}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back links to parent pages */}
          <div className="mt-10 flex flex-wrap gap-4 border-t border-navy-100 pt-8">
            <Link
              href={`/locations/${page.citySlug}`}
              className="text-sm font-medium text-bronze-600 transition-colors hover:text-bronze-700"
            >
              All services in {page.city} &rarr;
            </Link>
            <Link
              href={`/services/${page.serviceSlug}`}
              className="text-sm font-medium text-bronze-600 transition-colors hover:text-bronze-700"
            >
              About our {page.service} services &rarr;
            </Link>
          </div>
        </SectionWrapper>
      )}

      {/* CTA */}
      <CTASection
        heading={`Ready for ${page.service} in ${page.city}?`}
        description={`Schedule a consultation with our ${page.city} facility maintenance team. We'll assess your property and design a ${page.service.toLowerCase()} program built for your operation.`}
      />
    </>
  );
}
