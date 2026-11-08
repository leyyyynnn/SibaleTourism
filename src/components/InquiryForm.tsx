"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/data/site";
import { inquiryTopics, validateInquiry, type FieldErrors } from "@/lib/inquiry";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent"; delivered: boolean }
  | { kind: "error"; message: string };

/** Web3Forms' shared hCaptcha site key for free plans (docs.web3forms.com). */
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY;
/** Forms filled faster than this are almost certainly bots. */
const MIN_FILL_MS = 4000;
/** One inquiry per browser per this many milliseconds. */
const COOLDOWN_MS = 2 * 60 * 1000;
const COOLDOWN_KEY = "sibale-inquiry-last-sent";

type HCaptchaApi = {
  render: (el: HTMLElement, opts: { sitekey: string; theme?: string; "expired-callback"?: () => void }) => string;
  getResponse: (id: string) => string;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    hcaptcha?: HCaptchaApi;
    onSibaleHcaptchaLoad?: () => void;
  }
}

function lastSent(): number {
  try {
    return Number(localStorage.getItem(COOLDOWN_KEY)) || 0;
  } catch {
    return 0;
  }
}
function markSent() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch {
    /* storage unavailable: skip the cooldown */
  }
}

export function InquiryForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [captchaError, setCaptchaError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const startedAt = useRef(Date.now());

  // Load hCaptcha once the form is on screen (only when Web3Forms is connected).
  const formVisible = state.kind !== "sent";
  useEffect(() => {
    if (!ACCESS_KEY || !formVisible) return;
    startedAt.current = Date.now();
    const mount = () => {
      if (!window.hcaptcha || !captchaRef.current || widgetId.current !== null) return;
      widgetId.current = window.hcaptcha.render(captchaRef.current, { sitekey: HCAPTCHA_SITEKEY });
    };
    if (window.hcaptcha) {
      mount();
    } else {
      window.onSibaleHcaptchaLoad = mount;
      if (!document.querySelector("script[data-hcaptcha]")) {
        const script = document.createElement("script");
        script.src = "https://js.hcaptcha.com/1/api.js?render=explicit&onload=onSibaleHcaptchaLoad";
        script.async = true;
        script.defer = true;
        script.dataset.hcaptcha = "true";
        document.head.appendChild(script);
      }
    }
    return () => {
      widgetId.current = null;
    };
  }, [formVisible]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const check = validateInquiry(values);
    setErrors(check.errors);
    if (!check.data) {
      const first = Object.keys(check.errors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Honeypot, or filled too fast to be a person: pretend success, send nothing.
    if (values.website || Date.now() - startedAt.current < MIN_FILL_MS) {
      formRef.current?.reset();
      setState({ kind: "sent", delivered: true });
      return;
    }

    const wait = lastSent() + COOLDOWN_MS - Date.now();
    if (wait > 0) {
      setState({ kind: "error", message: `You just sent an inquiry. Please wait ${Math.ceil(wait / 60000)} minute(s) before sending another.` });
      return;
    }

    let captchaToken = "";
    if (ACCESS_KEY) {
      captchaToken = widgetId.current !== null ? window.hcaptcha?.getResponse(widgetId.current) ?? "" : "";
      if (!captchaToken) {
        setCaptchaError(true);
        captchaRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        return;
      }
    }
    setCaptchaError(false);
    setState({ kind: "submitting" });

    try {
      if (ACCESS_KEY) {
        // Web3Forms' free plan only accepts submissions from the browser.
        const d = check.data;
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            botcheck: false,
            "h-captcha-response": captchaToken,
            subject: `Inquiry: ${d.topic} · ${d.name}`,
            from_name: "Sibale Tourism Website",
            replyto: d.email,
            Name: d.name,
            Email: d.email,
            Topic: d.topic,
            "Travel dates": d.travelDates ?? "Not given",
            "Group size": d.groupSize ?? "Not given",
            Message: d.message,
          }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.success) {
          console.error("[inquiry] Web3Forms", res.status, json);
          if (widgetId.current !== null) window.hcaptcha?.reset(widgetId.current);
          setState({ kind: "error", message: "We couldn't send your message just now. Please try again in a few minutes." });
          return;
        }
        markSent();
        formRef.current?.reset();
        setState({ kind: "sent", delivered: true });
        return;
      }

      // No key: fall back to the site's own endpoint (dev logging or a webhook).
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        setState({ kind: "error", message: json.message ?? "Something went wrong. Please try again." });
        return;
      }
      formRef.current?.reset();
      setState({ kind: "sent", delivered: Boolean(json.delivered) });
    } catch {
      setState({ kind: "error", message: "You appear to be offline. Check your connection and try again." });
    }
  }

  if (state.kind === "sent") {
    return (
      <div role="status" className="border border-lime-400/40 bg-cream-100 p-8">
        <p className="display text-3xl text-pine-900">Thank you. Your inquiry is in.</p>
        <p className="mt-3 text-muted">
          {state.delivered
            ? "The Municipal Tourism Office will reply by email. Replies may take a few days, as connectivity on the island can be limited."
            : "Development mode: the inquiry was validated and logged on the server, but not delivered because email delivery is not configured. Add the Web3Forms key in src/data/site.ts or .env.local."}
        </p>
        <button type="button" onClick={() => setState({ kind: "idle" })} className="mt-6 text-sm font-semibold text-pine-900 underline underline-offset-4">
          Send another inquiry
        </button>
      </div>
    );
  }

  const field = "mt-2 w-full rounded-md border bg-white px-4 py-3 text-pine-900 focus:border-lime-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-lime-400";
  const border = (k: keyof FieldErrors) => (errors[k] ? "border-[#b42318]" : "border-pine-900/20");
  const Err = ({ k }: { k: keyof FieldErrors }) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-[#b42318]">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof FieldErrors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6" aria-busy={state.kind === "submitting"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-pine-900">
          Your name <span className="text-muted">(required)</span>
          <input name="name" autoComplete="name" className={`${field} ${border("name")}`} {...a11y("name")} />
          <Err k="name" />
        </label>
        <label className="block text-sm font-medium text-pine-900">
          Email <span className="text-muted">(required)</span>
          <input name="email" type="email" autoComplete="email" className={`${field} ${border("email")}`} {...a11y("email")} />
          <Err k="email" />
        </label>
      </div>

      <label className="block text-sm font-medium text-pine-900">
        Topic <span className="text-muted">(required)</span>
        <select name="topic" defaultValue="" className={`${field} ${border("topic")}`} {...a11y("topic")}>
          <option value="" disabled>
            Choose a topic
          </option>
          {inquiryTopics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <Err k="topic" />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-pine-900">
          Planned travel dates
          <input name="travelDates" placeholder="e.g. 12–15 April" className={`${field} ${border("travelDates")}`} />
        </label>
        <label className="block text-sm font-medium text-pine-900">
          Group size
          <input name="groupSize" inputMode="numeric" placeholder="e.g. 4" className={`${field} ${border("groupSize")}`} {...a11y("groupSize")} />
          <Err k="groupSize" />
        </label>
      </div>

      <label className="block text-sm font-medium text-pine-900">
        Your message <span className="text-muted">(required)</span>
        <textarea name="message" rows={6} className={`${field} ${border("message")}`} {...a11y("message")} />
        <Err k="message" />
      </label>

      {/* Honeypot for bots — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {ACCESS_KEY && (
        <div>
          <div ref={captchaRef} />
          {captchaError && (
            <p role="alert" className="mt-1.5 text-sm text-[#b42318]">
              Please complete the check above so we know you’re not a bot.
            </p>
          )}
        </div>
      )}

      {state.kind === "error" && (
        <p role="alert" className="border-l-2 border-[#b42318] bg-[#fef3f2] p-4 text-sm text-[#7a271a]">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state.kind === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-pine-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-pine-950 disabled:cursor-wait disabled:opacity-70"
        >
          {state.kind === "submitting" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
          {state.kind === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
        <p className="text-xs text-muted">Your details are used only to reply to your inquiry.</p>
      </div>
    </form>
  );
}
