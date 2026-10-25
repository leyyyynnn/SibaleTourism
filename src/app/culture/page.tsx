import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Notice, PageHeader, PhotoSlot, SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "Culture & Local Life",
  description:
    "The Sibalenhon of Concepcion, Romblon: Asi roots in Banton, the feast of the Immaculate Concepcion every 8 December, and life from the coconut groves and the sea.",
};

export default function CulturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Culture & local life"
        title="The people of Sibale"
        intro="A close-knit island community, rooted in Banton, devoted to the Immaculate Concepcion, and living from the land and the sea."
        image={{ src: "/images/attractions/mount-batariya-1.jpg", alt: "Mount Batariya at the entrance to Concepcion Bay" }}
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-x-16 gap-y-20 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-pine-700">Roots</p>
            <h2 className="display mt-4 text-4xl text-pine-900 sm:text-5xl">Banton’s daughter</h2>
            <div className="prose-site mt-6 text-lg leading-relaxed text-muted">
              <p>
                Oral and folk histories tell of Asi-speaking Banto-anon farmers crossing to Sibale in the dry season. They cleared forest by slash-and-burn, went home with the rains, then came back to harvest. Some chose to stay, and they became the first Sibalenhon.
              </p>
              <p>
                The island still speaks Asi, the language it shares with Banton and Simara. Place names keep its memory: <em>Tinigban</em> from <em>tinigiban</em>, “carved”, and <em>ma-it</em>, the Asi word for the south-west habagat winds.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-pine-700">Faith & fiesta</p>
            <h2 className="display mt-4 text-4xl text-pine-900 sm:text-5xl">The feast of 8 December</h2>
            <div className="prose-site mt-6 text-lg leading-relaxed text-muted">
              <p>
                After Banton became a pueblo in 1622, a visita of Banto-on, Sibale received its Christian baptism. It was named Concepcion after the Lady of the Immaculate Conception, its patron saint. Her feast on <strong className="font-semibold text-pine-900">8 December</strong> is the island’s annual fiesta.
              </p>
              <p>
                On a promontory of Mount Batariya stands her image, placed in the 1970s by Fr. Dennis McKillip, SVD, the town’s first and longest-serving parish priest. It faces Banton and watches over everyone who sails into the bay.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="grid lg:grid-cols-2">
          <PhotoSlot
            image={{ src: "/images/attractions/cambilog-beach-4.jpg", alt: "An outrigger fishing boat drawn up under coconut palms at dusk" }}
            label="Fishing boat at dusk"
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[36rem]"
          />
          <div className="flex items-center px-5 py-20 md:px-10 lg:px-16">
            <Reveal>
              <p className="eyebrow text-pine-700">Livelihoods</p>
              <h2 className="display mt-4 text-4xl text-pine-900 sm:text-5xl">The coconut and the sea</h2>
              <div className="prose-site mt-6 max-w-lg text-lg leading-relaxed text-muted">
                <p>
                  Concepcion is at heart a farming and fishing town. Coconut and banana are the only crops grown at any real scale, with about 34.5 tonnes of copra produced each month. Cassava, sweet potato, umag (white yam), peanuts and kitchen-garden vegetables are grown for the home, mostly <em>pang-sarili yang</em>, “just for ourselves”. Farmers still use traditional methods, without fertiliser or pesticide.
                </p>
                <p>
                  Fishing works the same way. Commercial fishing is banned in municipal waters, so the catch goes to the family table. From September to March, fish migrating through the Verde Island Passage bring a season of plenty, and the surplus crosses to market in Pinamalayan.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-pine-700">Island stories</p>
            <h2 className="display mt-4 text-4xl text-pine-900 sm:text-5xl">History you can walk to</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Spanish-era carvings, Ming-dynasty porcelain and a 1973 shipwreck. Much of Sibale’s past sits right in its landscape.
            </p>
            <div className="mt-8">
              <ButtonLink href="/destinations?category=Heritage" variant="ghost-dark">
                Heritage sites
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-px bg-pine-900/10 sm:grid-cols-3 lg:col-span-7">
            {[
              { t: "Tinigban Trail", d: "A rock carved into a mirror by a Spanish tribute collector after 1570.", href: "/destinations/tinigban-trail" },
              { t: "Gran Tsina Ridge", d: "Named for Chinese traders; Ming-dynasty tibor were found here in the 1970s.", href: "/destinations/gran-tsina-ridge" },
              { t: "Mactan Shipwreck", d: "The M/V Mactan, lost in July 1973, now a protected marine area.", href: "/destinations/mactan-shipwreck" },
            ].map((x) => (
              <li key={x.t} className="bg-cream-50">
                <Link href={x.href} className="block h-full p-6 hover:bg-white">
                  <p className="font-semibold text-pine-900">{x.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-pine-900/10 py-16">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Notice title="Share your stories">
            We would love to feature Sibale’s dishes, crafts and community-led experiences in the community’s own words. Please send them to the Municipal Tourism Office.
          </Notice>
          <SourceList ids={["lguProfile", "cvoAttractions"]} />
        </div>
      </section>
    </>
  );
}
