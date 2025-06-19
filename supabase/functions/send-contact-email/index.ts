import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message }: ContactFormData = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Email configuration - you'll need to set these in your Supabase project settings
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    const YOUR_EMAIL = Deno.env.get('YOUR_EMAIL') || 'your-email@example.com'

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set')
    }

    // Email to you (notification)
    const notificationEmail = {
      from: 'Portfolio Contact <noreply@yourdomain.com>',
      to: [YOUR_EMAIL],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              🚀 New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #10b981; margin-bottom: 10px;">Contact Details:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #10b981; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #10b981;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        </div>
      `
    }

    // Auto-reply email to the user
    const autoReplyEmail = {
      from: 'Sriram Baskaran <noreply@yourdomain.com>',
      to: [email],
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">
              Hi ${name}! 👋
            </h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out through my portfolio! I've received your message about "<strong>${subject}</strong>" and I'm excited to connect with you.
            </p>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
              <p style="color: #166534; margin: 0; font-weight: 500;">
                ✅ Your message has been successfully received
              </p>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              I typically respond to all inquiries within 24-48 hours. In the meantime, feel free to:
            </p>
            
            <ul style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              <li>Check out my latest projects on my portfolio</li>
              <li>Connect with me on <a href="#" style="color: #10b981;">LinkedIn</a></li>
              <li>Follow my work on <a href="#" style="color: #10b981;">GitHub</a></li>
            </ul>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 30px;">
              Looking forward to discussing your project and how we can work together!
            </p>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px;">
              <p style="color: #333; margin-bottom: 5px; font-weight: 500;">Best regards,</p>
              <p style="color: #10b981; font-weight: 600; margin: 0;">Sriram Baskaran</p>
              <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;">Full-Stack Developer & Digital Designer</p>
            </div>
          </div>
        </div>
      `
    }

    // Send notification email to you
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationEmail),
    })

    // Send auto-reply email to user
    const autoReplyResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(autoReplyEmail),
    })

    if (!notificationResponse.ok || !autoReplyResponse.ok) {
      throw new Error('Failed to send emails')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Emails sent successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error sending emails:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send emails',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})