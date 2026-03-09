import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/sections/SectionWrapper';
import CTASection from '@/components/sections/CTASection';
import BlogSearch from '@/components/ui/BlogSearch';
import { getAllBlogPosts } from '@/lib/admin-articles';
import { generatePageMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = generatePageMetadata({
  title: 'Resources & Insights',
  description:
    'Expert guides, industry insights, and best practices for commercial facility maintenance across Central Florida — from Orlando to Tampa.',
  path: '/resources',
  keywords: [
    'commercial cleaning blog',
    'facility management resources',
    'cleaning best practices',
    'Central Florida facility maintenance',
    'janitorial industry insights',
    'property management tips',
  ],
});

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Resources', href: '/resources' },
            ])
          ),
        }}
      />

      <Hero
        title="Resources & Insights"
        subtitle="Expert guides and actionable intelligence for facility managers, property operators, and building owners across Central Florida."
        badge="Knowledge Base"
      />

      <SectionWrapper heading="Latest Articles">
        <BlogSearch posts={getAllBlogPosts()} />
      </SectionWrapper>

      <CTASection />
    </>
  );
}
