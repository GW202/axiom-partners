import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title') || 'Axiom Facility Partners';
  const subtitle = searchParams.get('subtitle') || 'Commercial Cleaning & Facility Maintenance — Orlando & Central Florida';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A1628',
          padding: '60px 64px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top bar accent */}
        <div
          style={{
            display: 'flex',
            width: 80,
            height: 4,
            backgroundColor: '#C49A2A',
            borderRadius: 2,
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              fontSize: title.length > 50 ? 42 : 52,
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '90%',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#8FA3C4',
              lineHeight: 1.5,
              maxWidth: '80%',
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom bar with branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: 36,
                height: 36,
                backgroundColor: '#C49A2A',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 700,
                color: '#0A1628',
              }}
            >
              A
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#FFFFFF' }}>
              Axiom Facility Partners
            </div>
          </div>
          <div style={{ fontSize: 16, color: '#6B7E9A', display: 'flex' }}>
            axiomfacilitypartners.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
