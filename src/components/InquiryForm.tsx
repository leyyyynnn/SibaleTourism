"use client";

import { useRef, useState, type FormEvent } from "react";
import { inquiryTopics, validateInquiry, type FieldErrors } from "@/lib/inquiry";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent"; delivered: boolean }
  | { kind: "error"; message: string };

export function InquiryForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

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
    setState({ kind: "submitting" });
    try {
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
            : "Development mode: the inquiry was validated and logged on the server, but not delivered because no delivery endpoint is configured."}
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
