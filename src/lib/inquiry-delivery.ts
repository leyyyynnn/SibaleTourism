import type { Inquiry } from "./inquiry";

/**
 * Delivers a tourism inquiry by email through Web3Forms (https://web3forms.com).
 * No password or extra package: WEB3FORMS_ACCESS_KEY is tied to the inbox that
 * receives the emails, which is set when the key is created.
 */
export function web3formsConfigured() {
  return Boolean(process.env.WEB3FORMS_ACCESS_KEY);
}

export async function sendViaWeb3Forms(inquiry: Inquiry) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `Inquiry: ${inquiry.topic} · ${inquiry.name}`,
      from_name: "Sibale Tourism Website",
      replyto: inquiry.email,
      Name: inquiry.name,
      Email: inquiry.email,
      Topic: inquiry.topic,
      "Travel dates": inquiry.travelDates ?? "Not given",
      "Group size": inquiry.groupSize ?? "Not given",
      Message: inquiry.message,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
  if (!res.ok || !json.success) throw new Error(`Web3Forms: ${res.status} ${json.message ?? ""}`);
}
