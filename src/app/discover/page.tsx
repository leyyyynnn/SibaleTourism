import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Notice, PageHeader, PhotoSlot, SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover Sibale",
  description:
    "About Concepcion, Romblon — Sibale Island: its nine barangays, history from 1570 to today, the municipality’s vision, and its place in the Verde Island Passage.",
};

const barangays = ["Bachawan", "Calabasahan", "Dalajican", "Masadya", "Masudsud", "Poblacion", "Sampong", "San Pedro (Agbatang)", "San Vicente"];

const profile = [
  { label: "Island", value: "Maestro de Campo (Sibale)" },
  { label: "Province / region", value: "Romblon, MIMAROPA" },
  { label: "Status", value: "5th-class municipality; Romblon’s 17th" },
  { label: "Barangays", value: "9" },
  { label: "Land area", value: "2,007 ha (97.2% agricultural)" },
  { label: "Municipal waters", value: "73,727 ha" },
  { label: "Population", value: "3,561 in 1,064 households (2020 census); 3,427 (2024 census)" },
  { label: "Literacy", value: "98.1%" },
  { label: "Language", value: "Asi; Tagalog and English understood" },
  { label: "Town fiesta", value: "8 December, feast of the Immaculate Concepcion" },
];

const timeline = [
  { year: "1570", text: "Martin de Goite and Juan Salcedo, with Spanish forces from Arevalo (now Iloilo), become the first Westerners to land, and name the island Maestre de Campo." },
  { year: "1622", text: "Sibale receives a Christian baptism and is named Concepcion, administered as part of Banton." },
  { year: "1907", text: "In July, Concepcion becomes a municipality, but of Mindoro, not Romblon." },
  { year: "1917", text: "In March, Romblon gets Concepcion back as one of its municipalities." },
  { year: "1940", text: "In June, the young town reverts to a barrio." },
  { year: "1946", text: "In October, Concepcion regains its status as a municipality." },
];

export default function DiscoverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Discover our island"
        title={<>Concepcion is Sibale, and Sibale is Concepcion</>}
        intro="The municipality covers the whole of one island, Maestro de Campo, known to everyone as Sibale."
        image={{ src: "/images/attractions/tonggo-beach-6.jpg", alt: "Aerial view of Tonggo’s white sandbar and reef with forested hills behind" }}
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-4xl text-pine-900 sm:text-5xl">A small island in a big sea</h2>
            <div className="prose-site mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">
              <p>
                Concepcion is Romblon’s 17th municipality and its smallest, by both population and land area. It lies at the province’s western edge, nearer to Pinamalayan in Oriental Mindoro than to Romblon’s capital, so rice, goods and the season’s surplus catch usually cross to Pinamalayan.
              </p>
              <p>
                The terrain is rugged, mountainous and volcanic. Coconut and banana are the main crops, and farming and fishing are the main livelihoods. Commercial fishing is banned in municipal waters, so most of the catch feeds island households. From September to March, fish migrating through the Verde Island Passage bring a season of plenty.
              </p>
              <p>
                That passage is Sibale’s great asset. It is a globally recognised marine biodiversity corridor, and its reefs give the island a strong foundation for eco-tourism and dive tourism. The municipality has identified about fifteen priority tourism development sites across Poblacion, San Vicente and Calabasahan.
              </p>
              <p>
                In Barangay Poblacion, a small but thriving mangrove forest lines Concepcion Cove. Some of its trees are over a hundred years old, and after dark they light up with fireflies. The municipality plans the Sibale Mangrove Walk Bridges, a network of rope-and-bamboo walkways through them.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <dl className="divide-y divide-pine-900/10 border-y border-pine-900/10">
              {profile.map((p) => (
                <div key={p.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-4 text-sm">
                  <dt className="text-muted">{p.label}</dt>
                  <dd className="font-medium text-pine-900">{p.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="vision-heading" className="relative isolate overflow-hidden bg-pine-950 py-20 text-white lg:py-28">
        <div className="contours absolute inset-0 -z-10 opacity-40" />
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-lime-300">Our vision</p>
            <h2 id="vision-heading" className="display mt-4 text-5xl">
              By <span className="text-lime-300">2035</span>
            </h2>
          </div>
          <blockquote className="lg:col-span-8">
            <p className="display text-2xl leading-snug sm:text-3xl">
              “Concepcion (Sibale), an island municipality in a one Romblon community, is a preferred visitor destination for leisure, convention, and events — with God-centered and empowered citizenry enjoying a sound, progressive, and business-friendly economy driven by agriculture and nature-based tourism, in a sustainable, safe, disaster-resilient, and balanced environment governed by committed servant leaders.”
            </p>
            <footer className="mt-6 text-sm text-white/60">Vision of the Municipality of Concepcion</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center">
          <PhotoSlot
            image={{ src: "/images/poblacion-waterfront.jpg", alt: "The Poblacion waterfront, its pier and moored outrigger boats" }}
            label="Poblacion"
            className="aspect-square"
          />
          <div>
            <p className="eyebrow mb-4 text-pine-700">Nine barangays</p>
            <h2 className="display text-4xl text-pine-900 sm:text-5xl">A coastline of small communities</h2>
            <p className="mt-5 max-w-lg text-muted">
              Barangay Poblacion is the town centre and the island’s main gateway for dive tourism. Most of the island’s accommodation is here too.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {barangays.map((b) => (
                <li key={b} className="border-b border-pine-900/10 pb-3 text-pine-900">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-site">
          <p className="eyebrow mb-4 text-pine-700">History</p>
          <h2 className="display max-w-3xl text-4xl text-pine-900 sm:text-5xl">Four and a half centuries on the water</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The first known settlers were Asi-speaking farmers from Banton, who came in the dry season to clear forest for planting and returned with the rains to harvest. Some stayed and became the first Sibalenhon.
          </p>
          <ol className="mt-14 grid gap-px bg-pine-900/10 md:grid-cols-3 lg:grid-cols-6">
            {timeline.map((e) => (
              <li key={e.year} className="bg-cream-50 p-6">
                <p className="display text-4xl text-pine-900">{e.year}</p>
                <span className="mt-3 block h-1 w-8 bg-lime-400" aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-muted">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Notice title="Proposed tourism designation">
              House Bill No. 4026 proposes declaring Concepcion a Tourism Development Area. The House Committee on Tourism approved it in October 2026, subject to amendments. It is a proposal, not yet law.
            </Notice>
            <ButtonLink href="/destinations">Explore destinations</ButtonLink>
          </div>
          <SourceList ids={["lguProfile", "cvoAttractions", "psa2024", "inquirerHB4026", "rnnHB4026"]} />
        </div>
      </section>
    </>
  );
}
