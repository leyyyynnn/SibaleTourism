import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ButtonLink, Notice, PageHeader, SourceList } from "@/components/ui";
import { mitigationFees } from "@/data/route";

export const metadata: Metadata = pageMetadata({
  title: "Carbon Footprint Mitigation Fee",
  description:
    "Visitor guide to Concepcion, Romblon’s Carbon Footprint Mitigation Fee (Municipal Ordinance No. 2024-12): who pays, how much, where to pay, penalties and how the fees are used.",
  path: "/carbon-footprint-fee",
});

const penalties = [
  { offence: "First offence", fine: "₱1,000" },
  { offence: "Second offence", fine: "₱2,000" },
  { offence: "Third offence", fine: "₱2,500 and a 30-day suspension of the business permit" },
];

const uses = [
  "Programmes to protect and care for the environment",
  "Long-term development and ecotourism projects",
  "Sustainability and the growth of tourism in Concepcion",
];

export default function CarbonFootprintFeePage() {
  return (
    <>
      <PageHeader
        eyebrow="Municipal Ordinance No. 2024-12"
        title="Carbon Footprint Mitigation Fee"
        intro="Every visitor to Sibale pays a small fee on arrival. It funds the work that keeps the island’s reefs, beaches and forests healthy."
        image={{ src: "/images/attractions/maisuting-baybay-2.jpg", alt: "Maisuting Baybay, a protected fish sanctuary, seen from above" }}
      />

      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-7">
            <div>
              <h2 className="display text-4xl text-pine-900">What is the fee?</h2>
              <div className="prose-site mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">
                <p>
                  All human activity leaves a carbon footprint. The Carbon Footprint Mitigation Fee is collected in return for each visitor’s share of it. The municipality uses the fee to reduce the footprint of everyone who visits the island, local or foreign.
                </p>
                <p>
                  It was set by Municipal Ordinance No. 2024-12, “An Ordinance Imposing a Carbon Footprint Mitigation Fee on All Tourists Visiting the Island Municipality of Concepcion, Romblon, and Prescribing Penalties for Violations Thereof”. The Sangguniang Bayan passed it on 19 November 2024.
                </p>
              </div>
            </div>

            <div>
              <h2 className="display text-4xl text-pine-900">Who pays</h2>
              <dl className="mt-6 grid gap-px bg-pine-900/10 sm:grid-cols-2">
                <div className="bg-cream-50 p-6">
                  <dt className="font-semibold text-pine-900">Foreign tourists</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">Visitors who are not Filipino citizens.</dd>
                </div>
                <div className="bg-cream-50 p-6">
                  <dt className="font-semibold text-pine-900">Local tourists</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    Filipinos who are not residents of Concepcion, Romblon, even those with Sibalenhon roots.
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="display text-4xl text-pine-900">When and where to pay</h2>
              <div className="prose-site mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">
                <p>
                  Pay once per visit, at any collection point designated by the Municipal Treasurer’s Office, such as the ports and barangay halls. The Municipal Treasurer, authorised collectors or an authorised barangay treasurer collect the fee. Once you have paid, you won’t be charged again until you leave. If you come back, you pay again.
                </p>
                <p>
                  Keep your Carbon Footprint Mitigation Fee ticket. The Municipal Treasurer’s Office carries out regular and random inspections at designated inspection points.
                </p>
              </div>
            </div>

            <div>
              <h2 className="display text-4xl text-pine-900">Penalties</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">
                Under Section 3, Chapter VI of the ordinance, a tourist who does not pay the fee is fined <strong>₱300</strong>. Misrepresenting your identity to avoid paying is also penalised. Other violations of the ordinance carry these penalties:
              </p>
              <table className="mt-6 w-full max-w-2xl text-sm">
                <thead>
                  <tr className="bg-pine-900 text-white">
                    <th scope="col" className="px-4 py-3 text-left font-semibold">
                      Violation
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-lime-300">
                      Penalty
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pine-900/10 border-b border-pine-900/10">
                  {penalties.map((p) => (
                    <tr key={p.offence}>
                      <th scope="row" className="px-4 py-3 text-left font-normal text-ink/85">
                        {p.offence}
                      </th>
                      <td className="px-4 py-3 text-pine-900">{p.fine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="display text-4xl text-pine-900">Where the money goes</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">The fees may only be used for:</p>
              <ul className="dot-list mt-4 max-w-2xl space-y-3">
                {uses.map((u) => (
                  <li key={u} className="text-ink/85">
                    {u}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted">
                The Municipal Tourism Council manages the fund. It drafts guidelines for how the money is allocated, including which projects to fund and how they are prioritised, for review and approval by the Sangguniang Bayan. An annual report on the fund is posted publicly for transparency.
              </p>
            </div>

            <div>
              <h2 className="display text-4xl text-pine-900">Why it matters</h2>
              <div className="prose-site mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">
                <p>
                  A carbon footprint is the amount of harmful greenhouse gases, especially carbon dioxide, released by human activity. That includes mining and quarrying, transport, scattered waste, tree cutting, over-farming with synthetic fertilisers and pesticides, collecting coral and seashells, and overfishing.
                </p>
                <p>
                  Rising greenhouse gases drive global warming and climate change, which bring stronger storms, droughts, floods and rising seas. For a small island like Sibale, these are real risks.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="bg-pine-900 p-7 text-white">
                <p className="eyebrow text-lime-300">Fee per visitor</p>
                <table className="mt-5 w-full text-sm">
                  <tbody className="divide-y divide-white/10">
                    {mitigationFees.map((f) => (
                      <tr key={f.visitor}>
                        <th scope="row" className="py-3 text-left font-normal text-white/85">
                          {f.visitor}
                        </th>
                        <td className="py-3 text-right text-lg font-semibold tabular-nums text-lime-300">{f.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/60">Paid once per visit at the port or a designated collection point.</p>
              </div>

              <div className="mt-8">
                <Notice title="Legal basis">
                  The ordinance draws on the 1987 Constitution’s grant of revenue-raising powers to local governments, the Local Government Code of 1991 (R.A. No. 7160), and the Comprehensive Municipal Fishery Code of Concepcion, Romblon, which allows an environmental user fee for tourists.
                </Notice>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/travel-guide#getting-there">Plan your trip</ButtonLink>
                <ButtonLink href="/contact" variant="ghost-dark">
                  Ask a question
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-muted">
                Questions about the fee? Contact the{" "}
                <Link href="/contact" className="font-semibold text-pine-900 underline underline-offset-4">
                  Municipal Tourism Office
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-pine-900/10 py-12">
        <div className="container-site">
          <SourceList ids={["cfmfOrdinance", "sibaleTourismRoute"]} />
        </div>
      </section>
    </>
  );
}
