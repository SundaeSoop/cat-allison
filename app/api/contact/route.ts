import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Update FROM to "noreply@catallison.art" once the domain is verified in Resend
const FROM = "Catherine Allison <onboarding@resend.dev>";
const TO = "dianacatallison@gmail.com"; // swap to diana@catallison.art once DNS is live

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
