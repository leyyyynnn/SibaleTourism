import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone, Pin } from "@/components/Icons";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/ui";
import { nationalEmergencyNumber, officialContacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Municipal Tourism Office of Concepcion, Romblon with questions about boats, guides, accommodation and visiting Sibale Island.",
};

function Pending() {
  return <span className="rounded-sm bg-sand-200 px-1.5 py-0.5 text-xs font-semibold text-[#7a5a1e]">To be confirmed</span>;
}

export default function ContactPage() {
  const c = officialContacts;
  const rows = [
    { icon: Pin, label: "Office address", value: c.address },
    { icon: Phone, label: "Phone", value: c.phone, href: c.phone ? `tel:${c.phone.replace(/\s/g, "")}` : undefined },
    { icon: Mail, label: "Email", value: c.email, href: c.email ? `mailto:${c.email}` : undefined },
    { icon: ArrowUpRight, label: "Facebook page", value: c.facebook, href: c.facebook ?? undefined },
    { icon: ArrowUpRight, label: "Official website", value: c.website, href: c.website ?? undefined },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the island"
        intro="Ask about boats, guides, places to stay or anything else about visiting Concepcion. Messages go to the Municipal Tourism Office."
      />
      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-4xl text-ocean-900">Send an inquiry</h2>
            <p className="mt-3 mb-10 max-w-xl text-muted">Fields marked required must be filled in. We never share your details.</p>
            <InquiryForm />
          </div>

          <aside className="space-y-10 lg:col-span-5">
            <div className="bg-sand-100 p-8">
              <p className="eyebrow text-sea-600">{c.office}</p>
              <dl className="mt-6 space-y-5">
                {rows.map((r) => (
                  <div key={r.label} className="flex gap-4">
                    <r.icon size={18} className="mt-0.5 shrink-0 text-ocean-700" />
                    <div>
                      <dt className="text-xs text-muted">{r.label}</dt>
                      <dd className="mt-0.5 text-ocean-900">
                        {r.value ? (
                          r.href ? (
                            <a href={r.href} className="font-medium underline decoration-ocean-900/25 underline-offset-4 hover:decoration-ocean-900">
                              {r.value}
                            </a>
                          ) : (
                            r.value
                          )
                        ) : (
                          <Pending />
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <Pin size={18} className="mt-0.5 shrink-0 text-ocean-700" />
                  <div>
                    <dt className="text-xs text-muted">Location</dt>
                    <dd className="mt-0.5 text-ocean-900">
                      Poblacion, Concepcion, Romblon{" "}
                      <a
                        href="https://www.openstreetmap.org/?mlat=12.9127&mlon=121.7207#map=14/12.9127/121.7207"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center gap-1 text-sm font-semibold text-signal-600"
                      >
                        Map <ArrowUpRight size={13} />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
              <p className="mt-8 border-t border-ocean-900/10 pt-5 text-xs leading-relaxed text-muted">
                Official contact details have not been published on this site yet. They will appear here once the municipality confirms them.
              </p>
            </div>

            <div className="border-l-2 border-[#b42318] pl-5">
              <p className="font-semibold text-ocean-900">In an emergency</p>
              <p className="mt-1 text-sm text-muted">
                Call the national emergency hotline,{" "}
                <a href={`tel:${nationalEmergencyNumber}`} className="font-semibold text-ocean-900">
                  {nationalEmergencyNumber}
                </a>
                . Do not use this form for urgent help.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
