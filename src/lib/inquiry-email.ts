import nodemailer from "nodemailer";
import type { Inquiry } from "./inquiry";

/**
 * Sends a tourism inquiry through Gmail (SMTP with an app password).
 * Server-only: reads GMAIL_USER, GMAIL_APP_PASSWORD and INQUIRY_TO.
 */
export function gmailConfigured() {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function sendInquiryEmail(inquiry: Inquiry) {
  const user = process.env.GMAIL_USER!;
  const to = process.env.INQUIRY_TO || user;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: process.env.GMAIL_APP_PASSWORD!.replace(/\s+/g, "") },
  });

  const rows: [string, string | undefined][] = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Topic", inquiry.topic],
    ["Travel dates", inquiry.travelDates],
    ["Group size", inquiry.groupSize],
  ];
  const filled = rows.filter((r): r is [string, string] => Boolean(r[1]));
  const received = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila", dateStyle: "medium", timeStyle: "short" });

  const text = [
    "New inquiry from the Sibale Tourism website",
    "",
    ...filled.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    inquiry.message,
    "",
    `Received ${received} (Philippine time). Reply to this email to answer the visitor directly.`,
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;background:#f6f4ee;font-family:Arial,Helvetica,sans-serif;color:#16241f">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f4ee;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff">
<tr><td style="background:#0f2b25;padding:20px 28px;color:#ffffff">
<div style="font-size:13px;font-weight:bold;letter-spacing:3px">SIBALE</div>
<div style="font-size:11px;letter-spacing:2px;color:#c9ec4d;margin-top:4px">NEW WEBSITE INQUIRY</div>
</td></tr>
<tr><td style="padding:24px 28px 8px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">
${filled
  .map(
    ([k, v]) =>
      `<tr><td style="padding:8px 0;border-bottom:1px solid #efece3;color:#5c6a64;width:120px;vertical-align:top">${k}</td><td style="padding:8px 0;border-bottom:1px solid #efece3;color:#153a32;font-weight:bold">${
        k === "Email" ? `<a href="mailto:${esc(v)}" style="color:#153a32">${esc(v)}</a>` : esc(v)
      }</td></tr>`,
  )
  .join("")}
</table></td></tr>
<tr><td style="padding:16px 28px 8px">
<div style="font-size:12px;letter-spacing:2px;color:#5c6a64">MESSAGE</div>
<div style="margin-top:8px;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(inquiry.message)}</div>
</td></tr>
<tr><td style="padding:20px 28px 28px;font-size:12px;color:#5c6a64">Received ${esc(received)} (Philippine time). Reply to this email to answer the visitor directly.</td></tr>
</table></td></tr></table></body></html>`;

  await transporter.sendMail({
    from: { name: "Sibale Tourism Website", address: user },
    to,
    replyTo: { name: inquiry.name, address: inquiry.email },
    subject: `Inquiry: ${inquiry.topic} · ${inquiry.name}`,
    text,
    html,
  });
}
