import { NextResponse } from 'next/server';

interface ConsultationRequest {
  name: string;
  email: string;
  phone?: string;
  company: string;
  facilityType: string;
  squareFootage?: string;
  services: string[];
  message?: string;
}

const VALID_FACILITY_TYPES = [
  'Office Building',
  'Warehouse / Distribution',
  'Medical Office',
  'Commercial Property',
  'Retail Space',
  'Other',
];

const VALID_SERVICES = [
  'Office Building Cleaning',
  'Warehouse Facility Cleaning',
  'Day Porter Services',
  'Floor Care & Maintenance',
  'Disinfection Protocols',
  'Full Facility Program',
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  // Allow common US phone formats
  return /^[\d\s().+-]{7,20}$/.test(phone);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 1000);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultationRequest;

    // Required fields
    if (!body.name?.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!body.email?.trim() || !validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }
    if (!body.company?.trim()) {
      return NextResponse.json(
        { error: 'Company name is required.' },
        { status: 400 }
      );
    }
    if (!body.facilityType || !VALID_FACILITY_TYPES.includes(body.facilityType)) {
      return NextResponse.json(
        { error: 'Please select a valid facility type.' },
        { status: 400 }
      );
    }

    // Optional field validation
    if (body.phone && !validatePhone(body.phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }
    if (body.services?.length) {
      const invalidService = body.services.find(
        (s) => !VALID_SERVICES.includes(s)
      );
      if (invalidService) {
        return NextResponse.json(
          { error: 'Invalid service selection.' },
          { status: 400 }
        );
      }
    }

    // Sanitize inputs
    const sanitized = {
      name: sanitize(body.name),
      email: body.email.trim().toLowerCase(),
      phone: body.phone ? sanitize(body.phone) : undefined,
      company: sanitize(body.company),
      facilityType: body.facilityType,
      squareFootage: body.squareFootage ? sanitize(body.squareFootage) : undefined,
      services: body.services || [],
      message: body.message ? sanitize(body.message) : undefined,
      submittedAt: new Date().toISOString(),
    };

    // TODO: Replace with actual email service (SendGrid, Resend, etc.)
    // For now, log the submission server-side
    console.log('[Consultation Request]', JSON.stringify(sanitized, null, 2));

    return NextResponse.json(
      { success: true, message: 'Consultation request received.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid request. Please try again.' },
      { status: 400 }
    );
  }
}
