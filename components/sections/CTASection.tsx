import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({
  heading = 'Ready to Elevate Your Facility Standards?',
  description = 'Schedule a consultation with our facility maintenance experts. We\'ll assess your needs and design a maintenance program built for your operation.',
  ctaText = 'Request a Facility Consultation',
  ctaHref = '/consultation',
}: CTASectionProps) {
  return (
    <section className="bg-navy-900 py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            {description}
          </p>
          <div className="mt-8">
            <Button href={ctaHref} size="lg">
              {ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
