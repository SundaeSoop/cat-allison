import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // TODO: wire up an email service (e.g. Resend, Nodemailer, SendGrid)
  // Example with Resend:
  //   await resend.emails.send({
  //     from: "site@yourdomain.com",
  //     to: "diana@yourdomain.com",
  //     subject: `Message from ${name}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });

  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
