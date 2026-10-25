import { NextResponse } from "next/server";
import { validateInquiry } from "@/lib/inquiry";

/**
 * Tourism inquiry endpoint.
 *
 * Delivery: set INQUIRY_WEBHOOK_URL (server-side only) to an HTTPS endpoint that
 * accepts JSON — e.g. Formspree, a Make/Zapier webhook, or an LGU email relay.
 * Without it:
 *   - development: the inquiry is logged to the server console and accepted
 *     (`delivered: false`) so the form can be tested end to end;
 *   - production: the request is refused with 503 and a clear message, so
 *     visitors are never told a message was sent when it was not.
 */

// Very small in-memory rate limit (per server instance).
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many inquiries from this connection. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, do nothing.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const { data, errors } = validateInquiry(body);
  if (!data) {
    return NextResponse.json({ ok: false, message: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[inquiry] (not delivered — INQUIRY_WEBHOOK_URL not set)", data);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json(
      { ok: false, message: "Online inquiries are not connected yet. Please contact the Municipal Tourism Office directly." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, receivedAt: new Date().toISOString(), source: "concepcion-tourism-website" }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[inquiry] delivery failed", err);
    return NextResponse.json({ ok: false, message: "We couldn't send your message just now. Please try again in a few minutes." }, { status: 502 });
  }
}
