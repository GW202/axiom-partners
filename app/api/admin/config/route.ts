import { NextResponse } from 'next/server';
import { getSiteConfig, saveSiteConfig, type SiteConfig } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

export async function GET() {
  const config = getSiteConfig();
  return NextResponse.json(config);
}

export async function PUT(request: Request) {
  let body: Partial<SiteConfig>;
  try {
    body = (await request.json()) as Partial<SiteConfig>;
  } catch {
    return NextResponse.json({ error: 'Could not parse request body.' }, { status: 400 });
  }

  // Validate required fields if provided
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }
  if (body.phone && body.phone.trim().length < 7) {
    return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
  }

  // Sanitize string fields
  const sanitized: Partial<SiteConfig> = {};
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === 'string') {
      (sanitized as Record<string, string>)[key] = value.trim().slice(0, 200);
    }
  }

  try {
    const updated = saveSiteConfig(sanitized);
    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Admin Config] Save failed:', message);
    return NextResponse.json(
      { error: `Failed to save settings: ${message}` },
      { status: 500 }
    );
  }
}
