import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field. Report success so they don't retry.
  if (str(body.company, 200)) return NextResponse.json({ ok: true });

  const kind = body.kind === "subscribe" ? "subscribe" : "contact";
  const email = str(body.email, 254);
  const name = str(body.name, 100);
  const message = str(body.message, 5000);

  if (!EMAIL.test(email) || (kind === "contact" && (!name || !message))) {
    return NextResponse.json({ error: "Please complete every field" }, { status: 422 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form is not configured: set the variables listed in .env.example");
    return NextResponse.json({ error: "Email is not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: kind === "subscribe" ? "New updates signup from your portfolio" : "New message from your portfolio",
      text: kind === "subscribe" ? `${email} asked to receive updates.` : `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend rejected the message", res.status);
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
