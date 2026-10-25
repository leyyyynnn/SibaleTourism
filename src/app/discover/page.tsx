import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Notice, PageHeader, PhotoSlot, SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover Concepcion",
  description: "About Concepcion, Romblon: Maestro de Campo (Sibale) Island, its nine barangays, history and setting in the Sibuyan Sea.",
};

const barangays = ["Bachawan", "Calabasahan", "Dalajican", "Masadya", "Masudsud", "Poblacion", "Sampong", "San Pedro (Agbatang)", "San Vicente"];

const profile = [
  { label: "Island", value: "Maestro de Campo (Sibale)" },
  { label: "Province / region", value: "Romblon, MIMAROPA" },
  { label: "Barangays", value: "9" },
  { label: "Land area", value: "19.82 km²" },
  { label: "Population", value: "3,427 (2024 census)" },
  { label: "Municipal waters", value: "About 73,000 ha" },
  { label: "Language", value: "Asi; Tagalog widely used" },
  { label: "Nearest mainland town", value: "Pinamalayan, Oriental Mindoro (about 17 km)" },
];

export default function DiscoverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Discover our island"
        title={<>Concepcion is Sibale, and Sibale is Concepcion</>}
        intro="The municipality covers the whole of one island, Maestro de Campo, known to everyone locally as Sibale."
        image={{ src: "/images/concepcion-bay-aerial.jpg", alt: "Aerial view of Concepcion Bay and the Poblacion" }}
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-4xl text-ocean-900 sm:text-5xl">An island at the edge of Romblon</h2>
            <div className="prose-site mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/85">
              <p>
                Sibale is the westernmost island of Romblon, in the Sibuyan Sea about 20 km off the east coast of Mindoro. It is much closer to Pinamalayan in Oriental Mindoro than to Romblon&rsquo;s provincial capital, a journey of several hours by sea. Residents have long traded across the water in Pinamalayan.
              </p>
              <p>
                The island is mountainous, with steep shores. Its nine barangays sit along the coast, and the Poblacion faces a sheltered bay on the southern shore. Coconut palms cover much of the land, coral reefs ring the coast, and each barangay has its own small white-sand cove.
              </p>
              <p>
                Concepcion is one of the smallest municipalities in the country by population, a 6th-class town that the government classes as geographically isolated and disadvantaged. For visitors, that means an island with very little tourism infrastructure, a place where you plan ahead, carry cash and fit in with local rhythms.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <dl className="divide-y divide-ocean-900/10 border-y border-ocean-900/10">
              {profile.map((p) => (
                <div key={p.label} className="grid grid-cols-[9rem_1fr] gap-4 py-4 text-sm">
                  <dt className="text-muted">{p.label}</dt>
                  <dd className="font-medium text-ocean-900">{p.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center">
          <PhotoSlot
            image={{ src: "/images/poblacion-waterfront.jpg", alt: "The Poblacion waterfront, its pier and moored outrigger boats" }}
            label="Poblacion"
            className="aspect-square"
          />
          <div>
            <p className="eyebrow mb-4 text-sea-600">Nine barangays</p>
            <h2 className="display text-4xl text-ocean-900 sm:text-5xl">A coastline of small communities</h2>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {barangays.map((b) => (
                <li key={b} className="border-b border-ocean-900/10 pb-3 text-ocean-900">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4 text-sea-600">History</p>
          <h2 className="display max-w-3xl text-4xl text-ocean-900 sm:text-5xl">Four and a half centuries on the water</h2>
          <ol className="mt-14 grid gap-px bg-ocean-900/10 md:grid-cols-2 lg:grid-cols-5">
            {[
              { year: "1570", text: "Founded as a small village under Spanish rule and named after the Immaculate Concepcion. It was administered as part of Banton." },
              { year: "1907", text: "Became a municipality during the American period, and was briefly placed under Mindoro." },
              { year: "1917", text: "Returned to the province of Romblon." },
              { year: "1940", text: "Merged into the special municipality of Maghali under Commonwealth Act No. 581." },
              { year: "1946", text: "Regained its status as a municipality." },
            ].map((e) => (
              <li key={e.year} className="bg-sand-50 p-7">
                <p className="display text-4xl text-sea-600">{e.year}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ocean-900/10 py-16">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Notice title="Proposed tourism designation">
              House Bill No. 4026 proposes declaring Concepcion a Tourism Development Area. The House Committee on Tourism approved it in October 2026, subject to amendments. It is a proposal, not yet law.
            </Notice>
            <ButtonLink href="/destinations">Explore destinations</ButtonLink>
          </div>
          <SourceList ids={["wikipedia", "philatlas", "psa2024", "pia2024", "tribune2022", "inquirerHB4026", "rnnHB4026"]} />
        </div>
      </section>
    </>
  );
}
