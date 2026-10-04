import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Simple in-memory rate limit (per server instance). Good enough for a portfolio.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (limited(ip)) {
      return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? ""); // honeypot field

    // Bots fill the hidden field. Pretend success so they do not retry.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
    }
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !to) {
      console.error(
        "Contact form misconfigured. RESEND_API_KEY set: " + Boolean(apiKey) + ", CONTACT_TO_EMAIL set: " + Boolean(to)
      );
      return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email, // hitting Reply in your inbox answers the visitor
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return NextResponse.json({ error: "Could not send your message. Please email me directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
