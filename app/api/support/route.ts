import { NextResponse } from "next/server";
import { Resend } from "resend";

interface SupportRequestBody {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  domain?: string;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: SupportRequestBody = await request.json();
    const { fullName, email, subject, message, domain } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "SiteGeist Support <hello@sitespire.co.za>",
      to: ["hello@sitespire.co.za"],
      replyTo: email,
      subject: `[Support] ${subject} — ${fullName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #080808; color: #ffffff;">
          <div style="border-bottom: 1px solid #1F1F1F; padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="color: #DFFF00; font-size: 20px; margin: 0;">Support Request</h1>
            <p style="color: #808080; font-size: 13px; margin: 6px 0 0;">Submitted via sitespire.co.za/contact</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #808080; width: 140px; vertical-align: top;">Full Name</td>
              <td style="padding: 10px 0; color: #ffffff;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #808080; vertical-align: top;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #DFFF00;">${email}</a></td>
            </tr>
            ${domain ? `
            <tr>
              <td style="padding: 10px 0; color: #808080; vertical-align: top;">Website Domain</td>
              <td style="padding: 10px 0; color: #ffffff;">${domain}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #808080; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #ffffff;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #1F1F1F;">
            <p style="color: #808080; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Details</p>
            <p style="color: #ffffff; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Email service error. Please try again or email hello@sitespire.co.za directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Support form error:", error);
    return NextResponse.json(
      { error: "Failed to send request. Please try again or email hello@sitespire.co.za directly." },
      { status: 500 }
    );
  }
}
