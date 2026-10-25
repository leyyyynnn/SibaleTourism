import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { ButtonLink, Notice, PageHeader, SourceList } from "@/components/ui";
import { itineraries } from "@/data/itineraries";
import { boatNote, mitigationFees, route, routeEdition, tripCost } from "@/data/route";
import { directory, nationalEmergencyNumber } from "@/data/site";
import { stays } from "@/data/stays";

export const metadata: Metadata = {
  title: "Travel Guide",
  description:
    "How to get to Sibale (Concepcion, Romblon) from Metro Manila: bus, RoRo, van and the 10:00 AM motorboat from Recodo Port, with fares, the mitigation fee, where to stay and what to bring.",
};

const toc = [
  { id: "getting-there", label: "Getting there" },
  { id: "on-the-island", label: "On the island" },
  { id: "when-to-go", label: "When to go" },
  { id: "packing", label: "What to bring" },
  { id: "safety", label: "Safety" },
  { id: "itineraries", label: "Itineraries" },
  { id: "stay-and-eat", label: "Stay & eat" },
  { id: "responsible-travel", label: "Responsible travel" },
];

export default function TravelGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Travel guide"
        title="Plan your visit"
        intro="Sibale is reachable, but it is remote. There is no direct, year-round link to the mainland, so getting the crossing right is most of the planning."
        image={{ src: "/images/attractions/quebrada-beach-1.jpg", alt: "Aerial view of Quebrada Beach with palms and a turquoise reef" }}
      />

      <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4 text-muted">On this page</p>
            <ol className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="flex gap-3 rounded-full border border-pine-900/15 px-3 py-1.5 text-sm text-pine-900 hover:border-pine-900 lg:rounded-none lg:border-0 lg:border-l lg:px-4 lg:py-2 lg:hover:border-lime-400"
                  >
                    <span className="hidden tabular-nums text-muted lg:inline">{String(i + 1).padStart(2, "0")}</span>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="min-w-0 space-y-24 lg:col-span-9">
          <section id="getting-there" aria-labelledby="h-getting-there" className="scroll-mt-28">
            <h2 id="h-getting-there" className="display text-4xl text-pine-900 sm:text-5xl">
              Getting there
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              There is no airport on Sibale. From Metro Manila, the route runs overnight: bus to Batangas, ferry to Calapan, van to Pinamalayan, then the 10:00 AM motorboat from Recodo Port. Leave Manila around 10:00 PM and you reach Sibale in the early afternoon of the next day.
            </p>
            <p className="mt-2 text-sm text-muted">From Sibale Tourism’s step-by-step travel guide, {routeEdition} edition. Fares are estimates.</p>

            <ol className="mt-10 border-l border-pine-900/15">
              {route.map((r) => (
                <li key={r.step} className="relative pb-12 pl-10 last:pb-0">
                  <span className="absolute top-0 -left-[0.95rem] flex h-7 w-7 items-center justify-center rounded-full bg-pine-900 text-xs font-semibold text-lime-300">
                    {r.step}
                  </span>
                  <p className="eyebrow text-pine-700">{r.leg}</p>
                  <p className="mt-2 text-2xl font-semibold text-pine-900">{r.title}</p>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted">{r.how}</p>
                  <dl className="mt-5 grid max-w-3xl gap-px bg-pine-900/10 text-sm sm:grid-cols-3">
                    <div className="bg-cream-50 p-4">
                      <dt className="text-xs text-muted">{r.step === 6 ? "On arrival" : "Departure"}</dt>
                      <dd className="mt-1 font-medium text-pine-900">{r.departure}</dd>
                    </div>
                    <div className="bg-cream-50 p-4">
                      <dt className="text-xs text-muted">{r.step === 4 ? "Layover" : r.step === 6 ? "Landing point" : "Travel time"}</dt>
                      <dd className="mt-1 font-medium text-pine-900">{r.duration}</dd>
                    </div>
                    <div className="bg-cream-50 p-4">
                      <dt className="text-xs text-muted">Est. fare</dt>
                      <dd className="mt-1 space-y-0.5 font-medium text-pine-900">
                        {r.fare.map((f) => (
                          <span key={f.label} className="block">
                            {f.amount} <span className="font-normal text-muted">· {f.label}</span>
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-semibold text-pine-900">{r.step === 4 ? "Layover spots" : r.step === 6 ? "Landing points" : "Options"}:</span> {r.options.join(" · ")}
                  </p>
                  <p className="mt-3 max-w-2xl border-l-2 border-lime-400 pl-3 text-sm leading-relaxed text-ink/80">
                    <span className="font-semibold">Tip:</span> {r.tip}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 max-w-3xl">
              <Notice title="About the boat">
                {boatNote} Ask the{" "}
                <Link href="/contact" className="font-semibold underline underline-offset-2">
                  Municipal Tourism Office
                </Link>{" "}
                about today’s trip and the return schedule.
              </Notice>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-pine-900">Trip cost, one way</h3>
                <table className="mt-4 w-full text-sm">
                  <tbody className="divide-y divide-pine-900/10 border-y border-pine-900/10">
                    {tripCost.items.map((c) => (
                      <tr key={c.item}>
                        <th scope="row" className="py-2.5 pr-4 text-left font-normal text-ink/85">
                          {c.item}
                        </th>
                        <td className="py-2.5 text-right tabular-nums text-pine-900">{c.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-pine-900 text-white">
                      <th scope="row" className="px-3 py-3 text-left font-semibold">
                        Total estimate
                      </th>
                      <td className="px-3 py-3 text-right font-bold tabular-nums text-lime-300">{tripCost.total}</td>
                    </tr>
                  </tfoot>
                </table>
                <p className="mt-3 text-xs leading-relaxed text-muted">{tripCost.note}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pine-900">Carbon Footprint Mitigation Fee</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Collected on arrival by tourism officers at the port, to support the island’s conservation work.
                </p>
                <table className="mt-4 w-full text-sm">
                  <thead>
                    <tr className="bg-pine-900 text-white">
                      <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                        Visitor
                      </th>
                      <th scope="col" className="px-3 py-2.5 text-right font-semibold text-lime-300">
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pine-900/10 border-b border-pine-900/10">
                    {mitigationFees.map((f) => (
                      <tr key={f.visitor}>
                        <th scope="row" className="px-3 py-2.5 text-left font-normal text-ink/85">
                          {f.visitor}
                        </th>
                        <td className="px-3 py-2.5 text-right tabular-nums text-pine-900">{f.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="on-the-island" aria-labelledby="h-island" className="scroll-mt-28">
            <h2 id="h-island" className="display text-4xl text-pine-900 sm:text-5xl">
              On the island
            </h2>
            <dl className="mt-10 grid gap-px bg-pine-900/10 sm:grid-cols-2">
              {[
                { t: "Getting around", d: "There is no public transport. Hire a habal-habal (motorcycle with driver) or arrange a small boat in the Poblacion. Agree on the price before you set off." },
                { t: "Cash", d: "There is no bank branch or ATM on the island. Bring enough cash for your whole stay, plus a buffer in case of weather delays." },
                { t: "Electricity & signal", d: "The island has electricity 24 hours a day, though brownouts happen from time to time. Mobile data works. Bring a power bank and a torch just in case." },
                { t: "Shops & food", d: "Small stores and carinderias serve the Poblacion. Some close on Sundays, so carry snacks and water." },
              ].map((x) => (
                <div key={x.t} className="bg-cream-50 p-7">
                  <dt className="font-semibold text-pine-900">{x.t}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">{x.d}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="when-to-go" aria-labelledby="h-when" className="scroll-mt-28">
            <h2 id="h-when" className="display text-4xl text-pine-900 sm:text-5xl">
              When to go
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="border-t-2 border-lime-400 pt-5">
                <p className="eyebrow text-pine-700">Drier months</p>
                <p className="mt-3 leading-relaxed text-muted">
                  March to May is the most often recommended time, with calmer seas for the crossing and clearer days for the viewpoints.
                </p>
              </div>
              <div className="border-t-2 border-pine-500 pt-5">
                <p className="eyebrow text-pine-700">Wetter months</p>
                <p className="mt-3 leading-relaxed text-muted">
                  Rain peaks from June to September. Expect rougher crossings and possible cancellations, but fuller waterfalls. The island averages about 2,170 mm of rain a year.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted">
              Before travelling, check PAGASA weather bulletins and any sea-travel advisories. Boat trips are usually suspended when gale warnings are in effect.
            </p>
          </section>

          <section id="packing" aria-labelledby="h-pack" className="scroll-mt-28">
            <h2 id="h-pack" className="display text-4xl text-pine-900 sm:text-5xl">
              What to bring
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "Enough cash for your stay, plus extra",
                "Water shoes (sea urchins and oysters along the shore)",
                "Reef-safe sunscreen, a hat and sunglasses",
                "A refillable water bottle",
                "Snorkel and mask (no confirmed rental on the island)",
                "Power bank and a torch",
                "Dry bag for the boat crossing",
                "Basic first-aid kit and any personal medicines",
                "A light rain jacket in the wet season",
                "A bag to carry your rubbish back out",
              ].map((x) => (
                <li key={x} className="flex gap-3 border-b border-pine-900/10 pb-3 text-ink/85">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-lime-400" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </section>

          <section id="safety" aria-labelledby="h-safety" className="scroll-mt-28">
            <h2 id="h-safety" className="display text-4xl text-pine-900 sm:text-5xl">
              Safety
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { t: "At sea", d: "Wear a life jacket on small boats. Do not board an overloaded boat, and postpone if the sea is rough." },
                { t: "In the water", d: "There are no lifeguards. Swim with a companion, check depth before jumping, and watch for currents off headlands." },
                { t: "On trails", d: "Hike with a local guide, start early, carry water, and keep back from cliff edges at windy viewpoints." },
              ].map((x) => (
                <div key={x.t} className="bg-cream-100 p-6">
                  <p className="font-semibold text-pine-900">{x.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Emergency (nationwide):{" "}
              <a href={`tel:${nationalEmergencyNumber}`} className="font-semibold text-pine-900">
                {nationalEmergencyNumber}
              </a>
              .
            </p>
            <ul className="mt-6 grid gap-px bg-pine-900/10 sm:grid-cols-2">
              {directory.slice(1).map((d) => (
                <li key={d.office} className="bg-cream-50 p-5 text-sm">
                  <p className="font-semibold text-pine-900">{d.office}</p>
                  <a href={`mailto:${d.email}`} className="mt-1 inline-block break-all text-muted underline decoration-pine-900/20 underline-offset-4 hover:text-pine-900">
                    {d.email}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="itineraries" aria-labelledby="h-itin" className="scroll-mt-28">
            <h2 id="h-itin" className="display text-4xl text-pine-900 sm:text-5xl">
              Suggested itineraries
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              These are suggestions, not tour packages. Actual plans depend on boat availability, weather, sea conditions and local access arrangements.
            </p>
            <div className="mt-10 space-y-6">
              {itineraries.map((it) => (
                <details key={it.slug} id={it.slug} className="group scroll-mt-28 border border-pine-900/15 bg-white open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 sm:p-8 [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="eyebrow text-pine-700">
                        {it.length} · {it.mood}
                      </span>
                      <span className="display mt-2 block text-3xl text-pine-900">{it.title}</span>
                      <span className="mt-2 block max-w-2xl text-[0.95rem] text-muted">{it.summary}</span>
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pine-900/20 text-pine-900 transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="grid gap-px border-t border-pine-900/10 bg-pine-900/10 md:grid-cols-2 xl:grid-cols-4">
                    {it.days.map((day) => (
                      <div key={day.label} className="bg-cream-50 p-6">
                        <p className="font-semibold text-pine-900">{day.label}</p>
                        <ol className="mt-4 space-y-4">
                          {day.stops.map((s) => (
                            <li key={s.title}>
                              <p className="text-xs text-pine-700">{s.time}</p>
                              <p className="font-medium text-pine-900">
                                {s.href ? (
                                  <Link href={s.href} className="underline decoration-pine-900/20 underline-offset-4 hover:decoration-pine-900">
                                    {s.title}
                                  </Link>
                                ) : (
                                  s.title
                                )}
                              </p>
                              <p className="mt-0.5 text-sm text-muted">{s.note}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section id="stay-and-eat" aria-labelledby="h-stay" className="scroll-mt-28">
            <h2 id="h-stay" className="display text-4xl text-pine-900 sm:text-5xl">
              Where to stay and eat
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Accommodation on Sibale is small and family-run, and most of it is in Barangay Poblacion. Book ahead through the Municipal Tourism Office.
            </p>
            <ul className="mt-10 grid gap-px bg-pine-900/10 sm:grid-cols-2">
              {stays.map((st) => (
                <li key={st.name} className="flex flex-col justify-between gap-4 bg-cream-50 p-6">
                  <div>
                    <p className="eyebrow text-pine-700">{st.type}</p>
                    <p className="mt-2 text-xl font-semibold text-pine-900">{st.name}</p>
                    {st.location && <p className="mt-1 text-sm text-muted">{st.location}</p>}
                  </div>
                  {st.contact ? (
                    <p className="text-sm text-pine-900">{st.contact}</p>
                  ) : (
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine-900">
                      Book via the Tourism Office <ArrowRight size={14} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-sm text-muted">
              Places to eat are mostly small eateries serving local food and traditional delicacies, and some close on Sundays.
            </p>
          </section>

          <section id="responsible-travel" aria-labelledby="h-resp" className="scroll-mt-28">
            <h2 id="h-resp" className="display text-4xl text-pine-900 sm:text-5xl">
              Responsible travel
            </h2>
            <div className="mt-8 grid gap-px bg-pine-900/10 sm:grid-cols-2">
              {[
                { t: "Protect the reefs", d: "Don't stand on, touch, feed or collect anything underwater. Use reef-safe sunscreen and keep fins off the coral." },
                { t: "Snorkel and dive responsibly", d: "Dive only with certified operators, keep your buoyancy under control, and follow any marine protected area rules." },
                { t: "Waste", d: "Facilities are limited. Carry out all rubbish, avoid single-use plastic and never burn or bury waste on beaches." },
                { t: "Boats and wildlife", d: "Ask boatmen to anchor away from coral. Keep a respectful distance from turtles, birds and other wildlife." },
                { t: "Respect residents", d: "Ask before photographing people or homes, dress modestly in town and at religious sites, and keep noise down at night." },
                { t: "Support local", d: "Hire local guides and drivers, eat at family-run carinderias and buy local products." },
              ].map((x) => (
                <div key={x.t} className="bg-cream-50 p-7">
                  <p className="font-semibold text-pine-900">{x.t}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{x.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-label="Sources and next steps" className="grid gap-10 border-t border-pine-900/10 pt-12 md:grid-cols-2">
            <div>
              <p className="display text-3xl text-pine-900">Still have questions?</p>
              <p className="mt-3 text-muted">Ask about boats, guides and places to stay.</p>
              <div className="mt-6">
                <ButtonLink href="/contact">Contact the tourism office</ButtonLink>
              </div>
            </div>
            <SourceList ids={["sibaleTourismRoute", "lguProfile", "cvoAttractions"]} />
          </section>
        </div>
      </div>
    </>
  );
}
