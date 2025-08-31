import { transporter } from '@/utils/nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' });
    }

    // Prepare HTML content
    const htmlContent = `
      <h2>New Support Request: ${subject}</h2>
      <p><strong>${name}</strong> has sent a support request.</p>
      <p><strong>Email:</strong> ${email}</p>
      <div style="margin-top:10px; padding:10px; border:1px solid #ccc; border-radius:5px;">
        <p>${message}</p>
      </div>
    `;

    // Send mail
    await transporter.sendMail({
      from: process.env.SMTP_USER, // company support email
      to: process.env.SMTP_USER,   // send to support team inbox
      replyTo: email,                      // user email for easy reply
      subject: `Support Request: ${subject}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Message sent to support team!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}