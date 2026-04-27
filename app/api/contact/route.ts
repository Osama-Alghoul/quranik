import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { verifyTurnstileToken } from '@/lib/turnstile';

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, turnstileToken } = await req.json();

    // Verify Turnstile Token
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Missing security token.' }, { status: 400 });
    }

    const isVerified = await verifyTurnstileToken(turnstileToken);
    if (!isVerified) {
      return NextResponse.json({ error: 'Security verification failed. Please try again.' }, { status: 400 });
    }

    // Rate limiting check
    const cookieStore = await cookies();
    const lastSent = cookieStore.get('last_contact_sent')?.value;

    if (lastSent) {
      const lastSentDate = new Date(parseInt(lastSent));
      const now = new Date();
      const diffInMs = now.getTime() - lastSentDate.getTime();
      const msInDay = 24 * 60 * 60 * 1000;

      if (diffInMs < msInDay) {
        return NextResponse.json(
          { error: 'You can only send one message per day.' },
          { status: 429 }
        );
      }
    }

    // Since it's a free key, using onboarding@resend.dev as 'from' 
    // unless the user has verified their domain.
    const { data, error } = await resend.emails.send({
      from: 'Quranik Contact <onboarding@resend.dev>',
      to: ['info@quranik.org'],
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f8fafc;">
          <div style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em;">رسالة جديدة من الموقع</h1>
              <p style="color: rgba(255, 255, 255, 0.8); margin: 8px 0 0 0; font-size: 14px;">لقد تلقيت رسالة تواصل جديدة عبر منصة قرآنيك</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <div style="margin-bottom: 30px;">
                <h2 style="font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">بيانات المرسل</h2>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; margin-bottom: 8px;">
                    <span style="font-weight: 600; color: #334155; width: 100px; font-size: 14px;">الاسم:</span>
                    <span style="color: #1e293b; font-size: 14px;">${name}</span>
                  </div>
                  <div style="display: flex; margin-bottom: 8px;">
                    <span style="font-weight: 600; color: #334155; width: 100px; font-size: 14px;">البريد:</span>
                    <a href="mailto:${email}" style="color: #166534; font-size: 14px; text-decoration: none;">${email}</a>
                  </div>
                  <div style="display: flex; margin-bottom: 8px;">
                    <span style="font-weight: 600; color: #334155; width: 100px; font-size: 14px;">الهاتف:</span>
                    <span style="color: #1e293b; font-size: 14px;">${phone || 'غير متوفر'}</span>
                  </div>
                  <div style="display: flex;">
                    <span style="font-weight: 600; color: #334155; width: 100px; font-size: 14px;">الموضوع:</span>
                    <span style="color: #1e293b; font-size: 14px;">${subject}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 style="font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">الرسالة</h2>
                <div style="background-color: #fdfdfd; border: 1px solid #f1f5f9; padding: 20px; border-radius: 12px; color: #334155; line-height: 1.8; font-size: 15px; white-space: pre-wrap;">${message}</div>
              </div>
              
              <div style="margin-top: 40px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #1B4332; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">الرد على الرسالة</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">تم إرسال هذه الرسالة تلقائياً من نظام التواصل في منصة قرآنيك</p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">© ${new Date().getFullYear()} Quranik. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Set cookie for rate limiting
    cookieStore.set('last_contact_sent', Date.now().toString(), {
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
