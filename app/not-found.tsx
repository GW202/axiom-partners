import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-32 lg:py-44">
      <div className="diagonal-lines pointer-events-none absolute inset-0 opacity-30" />

      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-7xl font-bold text-bronze-500 lg:text-8xl">404</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-navy-300">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-bronze-600/20 transition-all duration-300 hover:from-bronze-700 hover:to-bronze-600"
            >
              Back to Home
            </Link>
            <Link
              href="/consultation"
              className="rounded-md border border-white/10 px-6 py-3 text-sm font-semibold text-navy-200 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
