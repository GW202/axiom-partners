import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ConsultationData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  facilityType: string;
  squareFootage?: string;
  services: string[];
  message?: string;
}

export async function sendConsultationNotification(data: ConsultationData) {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('[Email] SENDGRID_API_KEY not set — skipping notification');
    return;
  }

  const toEmail = process.env.NOTIFICATION_EMAIL || 'info@axiomfacilitypartners.com';
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@axiomfacilitypartners.com';

  const servicesText = data.services.length
    ? data.services.join(', ')
    : 'None selected';

  await sgMail.send({
    to: toEmail,
    from: fromEmail,
    subject: `New Consultation Request — ${data.company}`,
    text: [
      `New consultation request from ${data.name}`,
      '',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || 'Not provided'}`,
      `Company: ${data.company}`,
      `Facility Type: ${data.facilityType}`,
      `Square Footage: ${data.squareFootage || 'Not provided'}`,
      `Services: ${servicesText}`,
      `Message: ${data.message || 'None'}`,
    ].join('\n'),
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0a1628; border-bottom: 2px solid #b8860b; padding-bottom: 8px;">
          New Consultation Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Phone</td><td style="padding: 8px 0;">${data.phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Company</td><td style="padding: 8px 0;">${data.company}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Facility Type</td><td style="padding: 8px 0;">${data.facilityType}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Square Footage</td><td style="padding: 8px 0;">${data.squareFootage || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Services</td><td style="padding: 8px 0;">${servicesText}</td></tr>
        </table>
        ${data.message ? `<div style="margin-top: 16px; padding: 12px; background: #f3f4f6; border-radius: 6px;"><strong>Message:</strong><br/>${data.message}</div>` : ''}
      </div>
    `,
  });
}
