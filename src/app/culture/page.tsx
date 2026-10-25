import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Notice, PageHeader, PhotoSlot, SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Culture & Local Life",
  description: "The Sibalenhon of Concepcion, Romblon: the Asi language, faith, fishing and coconut farming, and everyday island life.",
};

export default function CulturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Culture & local life"
        title="The people of Sibale"
        intro="Concepcion's character comes from a small community that has lived by the sea for centuries. It is shaped by its language, its faith and the work of the coast and the coconut groves."
        image={{ src: "/images/poblacion-waterfront.jpg", alt: "Houses and boats along the Poblacion waterfront" }}
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-x-16 gap-y-20 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-sea-600">Language</p>
            <h2 className="display mt-4 text-4xl text-ocean-900 sm:text-5xl">Asi, the island&rsquo;s tongue</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Most Sibalenhon (also called Concepcioneño) speak Asi, a Visayan language they share with the people of Banton and Simara, the islands Concepcion was once governed with. Tagalog is widely understood, and many people speak English as well.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-sea-600">Faith</p>
            <h2 className="display mt-4 text-4xl text-ocean-900 sm:text-5xl">Named for the Immaculate Concepcion</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The town was named after the Immaculate Concepcion when it was founded in 1570, and most residents are Roman Catholic. The grotto on Mount Batareya is a local place of devotion. Smaller Protestant, Iglesia ni Cristo and Jehovah&rsquo;s Witness communities also live on the island.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="grid lg:grid-cols-2">
          <PhotoSlot
            image={{ src: "/images/headland-coconut-palms.jpg", alt: "Coconut palms covering the headland across the bay" }}
            label="Coconut groves"
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[36rem]"
          />
          <div className="flex items-center px-5 py-20 md:px-10 lg:px-16">
            <Reveal>
              <p className="eyebrow text-sea-600">Livelihoods</p>
              <h2 className="display mt-4 text-4xl text-ocean-900 sm:text-5xl">The sea and the coconut</h2>
              <div className="prose-site mt-6 max-w-lg text-lg leading-relaxed text-muted">
                <p>
                  Fishing and farming are the island&rsquo;s main livelihoods. Coconut palms cover much of the land, and copra (dried coconut meat) is a major source of income. Boats carry it as far as Lucena.
                </p>
                <p>
                  Because Pinamalayan is so much closer than the provincial capital, residents have long bought and sold their goods there. The boat across is a lifeline for trade as well as for visitors.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-sea-600">Festivals, food & crafts</p>
            <h2 className="display mt-4 text-4xl text-ocean-900 sm:text-5xl">Stories still to be told</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Concepcion&rsquo;s festival calendar, local dishes, crafts and community-led experiences will be featured here in the community&rsquo;s own words, once the Municipal Tourism Office and residents have shared them.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="ghost-dark">
                Share a local story
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              { t: "Town fiesta", b: "Date, patron saint celebrations and visitor etiquette." },
              { t: "Island kitchen", b: "Dishes and seafood that Sibalenhon families cook at home." },
              { t: "Makers & products", b: "Local products and the people who make them." },
              { t: "Local guides", b: "Accredited guides and community-led tours." },
            ].map((x, i) => (
              <PhotoSlot key={x.t} label={x.t} brief={`${x.t}: ${x.b}`} tone={(["ocean", "sea", "forest", "sand"] as const)[i]} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ocean-900/10 py-16">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Notice title="A note on accuracy">
            We only publish cultural details that the community or a credible source has confirmed. If something here is incomplete or wrong, please let the tourism office know.
          </Notice>
          <SourceList ids={["wikipedia", "romblonParadise", "inquirer2015"]} />
        </div>
      </section>
    </>
  );
}
