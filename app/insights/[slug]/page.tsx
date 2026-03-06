import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import { insights } from '@/content/insights';
import { services } from '@/content/services';
import { generatePageMetadata } from '@/lib/metadata';
import { generateArticleSchema } from '@/lib/structured-data';

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return generatePageMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightDetailPage({
  params,
}: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = services.filter((s) =>
    insight.relatedServices.includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(insight)),
        }}
      />

      <Hero
        title={insight.title}
        subtitle={`${insight.category} \u00B7 ${insight.readTime}`}
        ctaText="Back to Insights"
        ctaHref="/insights"
      />

      {/* Article Body */}
      <SectionWrapper>
        <article className="mx-auto max-w-3xl space-y-6">
          {insight.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-navy-700">
              {paragraph}
            </p>
          ))}
        </article>
      </SectionWrapper>

      {/* Related Services */}
      {related.length > 0 && (
        <SectionWrapper
          heading="Related Services"
          subtitle="Explore the services connected to this topic."
          dark
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block rounded-sm border border-navy-700 bg-navy-900 p-6 transition-colors hover:border-bronze-500"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-bronze-400">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-bronze-500">
                  View service &rarr;
                </span>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      <CTASection />
    </>
  );
}
