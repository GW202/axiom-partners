import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { getAllBlogPosts } from '@/lib/admin-articles';
import { generatePageMetadata } from '@/lib/metadata';
import {
  generateBreadcrumbSchema,
  generateSpeakableSchema,
  generateFAQSchema,
  generateArticleSchema,
} from '@/lib/structured-data';

export const dynamicParams = true;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getAllBlogPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/resources/${post.slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getAllBlogPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Resources', href: '/resources' },
              { name: post.title, href: `/resources/${post.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema(post)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateSpeakableSchema(`/resources/${post.slug}`)
          ),
        }}
      />
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(post.faqs)),
          }}
        />
      )}

      <Hero
        title={post.title}
        subtitle={post.description}
        badge={post.category}
      />

      {/* Article Meta */}
      <section className="border-b border-navy-100 bg-navy-50/30">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-4 px-6 py-4 text-xs text-navy-500">
          <span>By {post.author}</span>
          <span className="text-navy-200">|</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className="text-navy-200">|</span>
          <span>{post.readTime}</span>
        </div>
      </section>

      {/* Article Body */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <article className="space-y-5" data-speakable>
            {post.content.map((paragraph, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <p className="text-base leading-relaxed text-navy-600">
                  {paragraph}
                </p>
              </AnimatedSection>
            ))}
          </article>

          {/* Key Takeaways */}
          {post.keyTakeaways.length > 0 && (
            <AnimatedSection delay={0.1}>
              <div className="mt-12 rounded-xl border border-bronze-200 bg-bronze-50/50 p-7">
                <h2 className="text-lg font-semibold text-navy-950">
                  Key Takeaways
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-bronze-600">
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-navy-700">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-navy-100 px-2.5 py-1 text-xs text-navy-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      {post.faqs.length > 0 && (
        <SectionWrapper
          heading="Frequently Asked Questions"
          subtitle="Common questions related to this topic."
          dark
        >
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={post.faqs} />
          </div>
        </SectionWrapper>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <SectionWrapper
          heading="Related Articles"
          subtitle="Continue exploring facility management best practices."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related, i) => (
              <AnimatedSection key={related.slug} delay={i * 0.08}>
                <Link
                  href={`/resources/${related.slug}`}
                  className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-bronze-200 hover:shadow-md"
                >
                  <span className="mb-3 inline-flex self-start rounded-full bg-bronze-50 px-2.5 py-1 text-xs font-medium text-bronze-700">
                    {related.category}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-navy-950 transition-colors group-hover:text-bronze-700">
                    {related.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-navy-500">
                    {related.description}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-navy-400">
                    <time dateTime={related.publishedAt}>
                      {new Date(related.publishedAt).toLocaleDateString(
                        'en-US',
                        { month: 'short', day: 'numeric', year: 'numeric' }
                      )}
                    </time>
                    <span className="text-navy-200">|</span>
                    <span>{related.readTime}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </SectionWrapper>
      )}

      <CTASection />
    </>
  );
}
