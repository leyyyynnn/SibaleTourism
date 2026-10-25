import type { Metadata } from "next";
import { Mail, Phone } from "@/components/Icons";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/ui";
import { directory, nationalEmergencyNumber, officialContacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Municipal Tourism Office of Concepcion, Romblon about boats, guides, accommodation and visiting Sibale Island.",
};

export default function ContactPage() {
  const c = officialContacts;
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the island"
        intro="Ask about boats, guides, places to stay or anything else about visiting Sibale. Messages go to the Municipal Tourism Office."
        image={{ src: "/images/attractions/cambilog-beach-2.jpg", alt: "Sunset over the sea at Cambilog Beach" }}
      />
      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-4xl text-pine-900">Send an inquiry</h2>
            <p className="mt-3 mb-10 max-w-xl text-muted">Fields marked required must be filled in. Your details are only used to reply to you.</p>
            <InquiryForm />
          </div>

          <aside className="space-y-10 lg:col-span-5">
            <div className="bg-pine-900 p-8 text-white">
              <p className="eyebrow text-lime-300">{c.office}</p>
              <p className="mt-5 text-xl font-semibold">{c.head}</p>
              <p className="text-sm text-white/60">Municipal Tourism Officer</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-lime-300" />
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href={`mailto:${c.email}`} className="break-all font-medium underline decoration-white/30 underline-offset-4 hover:decoration-white">
                        {c.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-lime-300" />
                  <div>
                    <dt className="sr-only">Phone</dt>
                    <dd className="text-white/70">{c.phone ?? "Phone number to be added"}</dd>
                  </div>
                </div>
              </dl>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/60">{c.address}</p>
            </div>

            <div>
              <p className="eyebrow mb-4 text-pine-700">Other municipal offices</p>
              <ul className="divide-y divide-pine-900/10 border-y border-pine-900/10">
                {directory.map((d) => (
                  <li key={d.office} className="py-4 text-sm">
                    <p className="font-semibold text-pine-900">{d.office}</p>
                    <p className="text-muted">{d.name}</p>
                    <a href={`mailto:${d.email}`} className="break-all text-pine-800 underline decoration-pine-900/20 underline-offset-4 hover:decoration-pine-900">
                      {d.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-[#b42318] pl-5">
              <p className="font-semibold text-pine-900">In an emergency</p>
              <p className="mt-1 text-sm text-muted">
                Call the national emergency hotline,{" "}
                <a href={`tel:${nationalEmergencyNumber}`} className="font-semibold text-pine-900">
                  {nationalEmergencyNumber}
                </a>
                . Do not use this form or email for urgent help.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
