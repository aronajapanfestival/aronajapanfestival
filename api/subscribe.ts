import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;

  // Validate input
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Call Brevo API to add contact with double opt-in
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        email: email,
        attributes: name ? {
          FIRSTNAME: name,
        } : {},
        includeListIds: [parseInt(process.env.BREVO_LIST_ID || '0')],
        templateId: parseInt(process.env.BREVO_TEMPLATE_ID || '0'),
        redirectionUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aronajapanfestival.it'}/newsletter?confirmed=true`,
      }),
    });

    if (!brevoResponse.ok) {
      let errorData;
      try {
        errorData = await brevoResponse.json();
      } catch (e) {
        errorData = { message: 'Unknown error' };
      }

      // Handle specific error cases
      if (brevoResponse.status === 400 && errorData.code === 'duplicate_parameter') {
        return res.status(200).json({
          success: true,
          message: 'Already subscribed'
        });
      }

      return res.status(500).json({
        error: errorData.message || 'Failed to subscribe to newsletter'
      });
    }

    // Try to parse response, but handle empty responses
    let data;
    try {
      const text = await brevoResponse.text();
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      data = {};
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
