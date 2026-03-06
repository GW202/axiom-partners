import Container from '@/components/layout/Container';

interface SectionWrapperProps {
  children: React.ReactNode;
  heading?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionWrapper({
  children,
  heading,
  subtitle,
  dark = false,
  className = '',
}: SectionWrapperProps) {
  return (
    <section
      className={`py-20 lg:py-28 ${dark ? 'bg-navy-950 text-white' : 'bg-cream-50'} ${className}`}
    >
      <Container>
        {heading && (
          <div className="mb-12 max-w-2xl">
            <h2
              className={`text-3xl font-bold tracking-tight lg:text-4xl ${dark ? 'text-white' : 'text-navy-950'}`}
            >
              {heading}
            </h2>
            {subtitle && (
              <p
                className={`mt-4 text-lg leading-relaxed ${dark ? 'text-navy-300' : 'text-navy-600'}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
