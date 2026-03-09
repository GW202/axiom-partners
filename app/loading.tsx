import Container from '@/components/layout/Container';

export default function Loading() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-navy-200 border-t-bronze-600" />
        </div>
      </Container>
    </section>
  );
}
