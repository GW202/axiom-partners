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

export async function sendSlackNotification(data: ConsultationData) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('[Slack] SLACK_WEBHOOK_URL not set — skipping notification');
    return;
  }

  const services = data.services.length ? data.services.join(', ') : 'None selected';

  const payload = {
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: `New Consultation Request`, emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Company:*\n${data.company}` },
          { type: 'mrkdwn', text: `*Name:*\n${data.name}` },
          { type: 'mrkdwn', text: `*Email:*\n${data.email}` },
          { type: 'mrkdwn', text: `*Phone:*\n${data.phone || 'Not provided'}` },
          { type: 'mrkdwn', text: `*Facility Type:*\n${data.facilityType}` },
          { type: 'mrkdwn', text: `*Sq Ft:*\n${data.squareFootage || 'Not provided'}` },
        ],
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Services:*\n${services}` },
      },
      ...(data.message
        ? [{ type: 'section', text: { type: 'mrkdwn', text: `*Message:*\n${data.message}` } }]
        : []),
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: `Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}` },
        ],
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Slack webhook returned ${res.status}`);
  }
}
