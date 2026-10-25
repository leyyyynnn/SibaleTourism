import Image from "next/image";
import Link from "next/link";
import { DestinationCard } from "@/components/DestinationCard";
import { ArrowRight, Boat, Leaf, Wave } from "@/components/Icons";
import { MapExplorer } from "@/components/MapExplorer";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Notice, PhotoSlot, SectionHeading, TextLink } from "@/components/ui";
import { VideoLoop } from "@/components/VideoLoop";
import { featuredDestinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { galleryImages } from "@/data/gallery";
import { itineraries } from "@/data/itineraries";
import { site } from "@/data/site";
import { stays } from "@/data/stays";

export default function HomePage() {
  const [lead, ...rest] = featuredDestinations;
  return (
    <>
      <Hero />
      <Intro />

      {/* ---------------- Featured destinations ---------------- */}
      <section aria-labelledby="destinations-heading" className="py-24 lg:py-32">
        <div className="container-site">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Destinations"
              title={
                <span id="destinations-heading">
                  Cliffs, ridges and <em className="text-pine-700">powder-white</em> sand
                </span>
              }
              intro="From the 50-metre wall of Bagulayag Cliff to the turtle-nesting sands of Tonggo, here are the places Sibale is known for."
            />
            <TextLink href="/destinations">All destinations</TextLink>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <DestinationCard destination={lead} aspect="aspect-[4/3] md:aspect-[5/4]" size="lg" sizes="(min-width: 768px) 58vw, 100vw" />
            </Reveal>
            <div className="grid gap-y-16 md:col-span-5 md:pt-24">
              {rest.slice(0, 2).map((d, i) => (
                <Reveal key={d.slug} delay={i * 120}>
                  <DestinationCard destination={d} aspect={i === 0 ? "aspect-[4/3]" : "aspect-[16/10]"} sizes="(min-width: 768px) 40vw, 100vw" />
                </Reveal>
              ))}
            </div>
            {rest.slice(2, 5).map((d, i) => (
              <Reveal key={d.slug} delay={i * 120} className={`md:col-span-4 ${i === 1 ? "md:mt-16" : ""}`}>
                <DestinationCard destination={d} aspect={i === 1 ? "aspect-[16/10] md:aspect-[3/4]" : "aspect-[16/10] md:aspect-[4/5]"} sizes="(min-width: 768px) 33vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Under the water ---------------- */}
      <section aria-labelledby="reef-heading" className="bg-pine-950 text-white">
        <div className="grid lg:grid-cols-2">
          <VideoLoop
            src="/media/sibale-corals.mp4"
            poster="/images/attractions/sibale-corals-poster.jpg"
            label="Underwater footage of Sibale’s coral reefs, reef fish and a sea turtle"
            className="aspect-video lg:aspect-auto lg:min-h-[38rem]"
          />
          <div className="flex items-center px-5 py-20 md:px-10 lg:px-16 xl:px-24">
            <Reveal>
              <p className="eyebrow mb-5 text-lime-300">Under the water</p>
              <h2 id="reef-heading" className="display text-[2.4rem] sm:text-5xl">
                Fifteen dive sites in the <em className="text-lime-300">Verde Island Passage</em>
              </h2>
              <div className="prose-site mt-6 max-w-lg text-[1.02rem] leading-relaxed text-white/75">
                <p>
                  Sibale sits inside the Verde Island Passage Marine Corridor, recognised around the world as a hotspot of marine biodiversity. Fifteen dive sites ring the island, and most have yet to be explored.
                </p>
                <p>
                  Dive the towering Coral Cathedral off San Vicente, or the wreck of the M/V Mactan, lost in 1973 and now a protected reef full of fish.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/destinations/coral-cathedral" variant="lime">
                  Coral Cathedral
                </ButtonLink>
                <ButtonLink href="/destinations/mactan-shipwreck" variant="ghost-light">
                  Mactan Shipwreck
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Activities ---------------- */}
      <section aria-labelledby="experiences-heading" className="py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Activities"
                title={<span id="experiences-heading">Ways to spend your days</span>}
                intro="Swim, camp, hike or dive. Some of these need a guide, a certified operator or simply good weather."
              />
              <div className="mt-8">
                <TextLink href="/experiences">All activities</TextLink>
              </div>
            </div>
          </div>
          <ol className="lg:col-span-8">
            {experiences.map((e, i) => (
              <Reveal as="li" key={e.slug} className="group border-t border-pine-900/15 last:border-b">
                <Link href={`/experiences#${e.slug}`} className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr_9rem] sm:gap-6">
                  <span className="text-sm tabular-nums text-pine-700">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="eyebrow block text-muted">{e.kicker}</span>
                    <span className="display mt-2 block text-[1.8rem] text-pine-900 transition-colors group-hover:text-pine-700">{e.title}</span>
                    <span className="mt-3 block max-w-xl text-[0.95rem] leading-relaxed text-muted">{e.description}</span>
                  </span>
                  <span className="hidden sm:block">
                    {e.image && (
                      <span className="relative block aspect-[4/5] overflow-hidden bg-pine-900">
                        <Image src={e.image.src} alt="" fill sizes="9rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </span>
                    )}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Map ---------------- */}
      <section aria-labelledby="map-heading" className="bg-cream-100 py-24 lg:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Island map"
            title={<span id="map-heading">Find your way around Sibale</span>}
            intro="Only places with sourced coordinates appear on the map, and approximate locations are marked. The tourism office will add more."
          />
          <div className="mt-12">
            <MapExplorer compact />
          </div>
        </div>
      </section>

      <PlanYourVisit />

      {/* ---------------- Where to stay ---------------- */}
      <section aria-labelledby="stay-heading" className="py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Where to stay"
              title={<span id="stay-heading">Homestays and a camp site</span>}
              intro="Sibale’s accommodation is small and family-run, and most of it is in Barangay Poblacion. Book ahead through the Municipal Tourism Office."
            />
            <div className="mt-8">
              <TextLink href="/travel-guide#stay-and-eat">Accommodation details</TextLink>
            </div>
          </div>
          <ul className="grid content-start gap-px bg-pine-900/10 sm:grid-cols-2 lg:col-span-7">
            {stays.map((s) => (
              <li key={s.name} className="flex items-baseline justify-between gap-4 bg-cream-50 px-6 py-6">
                <span className="text-lg font-semibold text-pine-900">{s.name}</span>
                <span className="eyebrow shrink-0 text-muted">{s.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Itineraries ---------------- */}
      <section aria-labelledby="itineraries-heading" className="bg-cream-100 py-24 lg:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Suggested itineraries"
            title={<span id="itineraries-heading">Stay the night. Or three.</span>}
            intro="Boats have historically crossed once a day, so even a short visit means an overnight stay. These are suggested plans, not tour packages."
          />
          <div className="mt-14 grid gap-px bg-pine-900/10 md:grid-cols-3">
            {itineraries.map((it) => (
              <Link key={it.slug} href={`/travel-guide#${it.slug}`} className="group flex flex-col bg-cream-50 p-8 transition-colors hover:bg-white">
                <span className="eyebrow text-pine-700">{it.mood}</span>
                <span className="display mt-6 text-6xl text-pine-900">{it.length.split(" ")[0]}</span>
                <span className="mt-1 text-sm text-muted">{it.length.split(" ").slice(1).join(" ")}</span>
                <span className="mt-6 text-xl font-semibold text-pine-900">{it.title}</span>
                <span className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{it.summary}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pine-900">
                  See the plan <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Culture ---------------- */}
      <section aria-labelledby="culture-heading">
        <div className="grid lg:grid-cols-2">
          <PhotoSlot
            image={{ src: "/images/attractions/mount-batariya-1.jpg", alt: "Mount Batariya at the mouth of Concepcion Bay, where an image of the Immaculada Concepcion watches over voyagers" }}
            label="Mount Batariya"
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[40rem]"
          />
          <div className="flex items-center px-5 py-20 md:px-10 lg:px-16 xl:px-24">
            <Reveal>
              <p className="eyebrow mb-5 text-pine-700">Culture & local life</p>
              <h2 id="culture-heading" className="display text-[2.4rem] text-pine-900 sm:text-5xl">
                Banton’s daughter, speaking <em className="text-pine-700">Asi</em>
              </h2>
              <div className="prose-site mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted">
                <p>
                  The first Sibalenhon were Asi-speaking farmers from Banton who crossed to clear land and stayed. The island still speaks Asi, and the image of its patron on Mount Batariya faces Banton.
                </p>
                <p>
                  Concepcion is named after the Immaculate Concepcion, the island’s patron. Her feast on <strong className="font-semibold text-pine-900">8 December</strong> is the town fiesta.
                </p>
              </div>
              <div className="mt-8">
                <TextLink href="/culture">Island culture</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Responsible tourism ---------------- */}
      <section aria-labelledby="care-heading" className="relative isolate overflow-hidden bg-pine-950 py-24 text-white lg:py-32">
        <div className="contours absolute inset-0 -z-10 opacity-40" />
        <div className="container-site">
          <SectionHeading
            light
            eyebrow="Travel with care"
            title={<span id="care-heading">Leave the island as you found it</span>}
            intro="Sibale’s turtles, reefs and fish sanctuaries are protected, and its few thousand residents live from the land and the sea. A few simple habits go a long way."
          />
          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {careRules.map((r) => (
              <li key={r.title} className="bg-pine-950 p-7">
                <r.icon size={22} className="text-lime-300" />
                <p className="mt-5 text-lg font-semibold">{r.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{r.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <TextLink href="/travel-guide#responsible-travel" light>
              Responsible travel guide
            </TextLink>
          </div>
        </div>
      </section>

      {/* ---------------- Gallery teaser ---------------- */}
      <section aria-labelledby="gallery-heading" className="py-24 lg:py-32">
        <div className="container-site">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Gallery" title={<span id="gallery-heading">The island, seen</span>} />
            <TextLink href="/gallery">Open the gallery</TextLink>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {teaser.map((img, i) => (
              <Link
                key={img.src}
                href="/gallery"
                className={`group relative block overflow-hidden bg-pine-900 ${i === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-square"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {img.caption}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="bg-pine-900 py-20 text-white">
        <div className="container-site flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-4 text-lime-300">Questions before you travel?</p>
            <p className="display max-w-2xl text-4xl sm:text-5xl">Ask the Municipal Tourism Office.</p>
          </div>
          <ButtonLink href="/contact" variant="lime">
            Send an inquiry
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

const teaserSrcs = [
  "/images/attractions/tonggo-beach-1.jpg",
  "/images/attractions/bagulayag-cliff-3.jpg",
  "/images/attractions/quebrada-beach-2.jpg",
  "/images/attractions/gran-tsina-ridge-1.jpg",
  "/images/attractions/maisuting-baybay-2.jpg",
];
const teaser = teaserSrcs.map((src) => galleryImages.find((g) => g.src === src)!).filter(Boolean);

const careRules = [
  { icon: Wave, title: "Float, don't stand", text: "Never stand on, touch or collect coral, shells or marine life when swimming or diving." },
  { icon: Leaf, title: "Give turtles space", text: "Tonggo is a pawikan nesting sanctuary. Never touch turtles, eggs or hatchlings, or use lights at night." },
  { icon: Boat, title: "Respect the sea", text: "Use reputable boat operators, wear a life jacket and postpone trips when the sea is rough." },
  { icon: Wave, title: "Fish sanctuaries", text: "Maisuting Baybay is a protected fish sanctuary, and commercial fishing is banned in municipal waters." },
  { icon: Leaf, title: "Carry it out", text: "Facilities are few. Take every wrapper and bottle back to the Poblacion with you." },
  { icon: Boat, title: "Spend locally", text: "Stay in homestays, hire local guides and drivers, and eat at family-run carinderias." },
];

function Hero() {
  return (
    <section aria-label="Welcome to Sibale" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-pine-950 text-white">
      <Image
        src="/images/concepcion-bay-aerial.jpg"
        alt="Aerial view of Concepcion Bay at dusk: the Poblacion and its pier on the left, forested headlands closing around calm water"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[30%_50%] md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(15,43,37,0.5)_0%,rgba(15,43,37,0.6)_55%,rgba(15,43,37,0.88)_100%)]" />

      <div className="container-site flex flex-1 flex-col items-center justify-center pt-28 pb-16 text-center">
        <p className="eyebrow mb-6 text-white/85">Concepcion, Romblon · Philippines</p>
        <h1 className="font-sans text-[clamp(4rem,20vw,13rem)] leading-[0.9] font-extrabold tracking-[0.08em]">
          <span className="sr-only">Discover </span>SIBALE
        </h1>
        <p className="mt-5 text-[clamp(1.25rem,3vw,2.25rem)] font-normal tracking-wide text-white/95">{site.tagline}.</p>
        <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-white/75 sm:text-lg">
          Sheer cliffs, quiet white-sand beaches and fifteen dive sites on an island of the Verde Island Passage.
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <ButtonLink href="/destinations" variant="lime">
            Explore Destinations
          </ButtonLink>
          <ButtonLink href="/travel-guide" variant="ghost-light">
            Plan Your Visit
          </ButtonLink>
        </div>
      </div>

      <div className="container-site flex items-end justify-between pb-6 text-[0.7rem] tracking-[0.18em] text-white/60">
        <span>{site.coordinatesLabel}</span>
        <span className="hidden sm:block">CONCEPCION BAY AT DUSK</span>
      </div>
    </section>
  );
}

function Intro() {
  const facts = [
    { value: "9", label: "barangays" },
    { value: "2,007", unit: "ha", label: "land area" },
    { value: "73,727", unit: "ha", label: "municipal waters" },
    { value: "15", label: "dive sites" },
  ];
  return (
    <section aria-labelledby="intro-heading" className="pt-24 lg:pt-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6 lg:pr-10">
          <p className="eyebrow mb-5 text-pine-700">About the island</p>
          <h2 id="intro-heading" className="display text-[2.6rem] text-pine-900 sm:text-6xl">
            Small island, <em className="text-pine-700">wide waters</em>
          </h2>
          <div className="prose-site mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            <p>
              The municipality of Concepcion covers all of Maestro de Campo Island, known to everyone as <strong className="font-semibold text-pine-900">Sibale</strong>. It is Romblon’s 17th municipality and its smallest by both population and land area. It lies closer to Oriental Mindoro than to its own provincial capital.
            </p>
            <p>
              The island is rugged and green, mostly coconut groves and forest. Its waters stretch far beyond its shores, across a part of the Verde Island Passage where turtles nest, fish sanctuaries are protected and commercial fishing is banned.
            </p>
          </div>
          <div className="mt-8">
            <TextLink href="/discover">Discover our island</TextLink>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={150}>
          <figure>
            <PhotoSlot
              image={{ src: "/images/attractions/tonggo-beach-1.jpg", alt: "Aerial view of Tonggo’s white beach curving between turquoise reef and coconut-covered hills" }}
              label="Tonggo Beach"
              className="aspect-[4/3]"
            />
            <figcaption className="mt-3 text-xs text-muted">Tonggo Beach, a protected pawikan nesting area.</figcaption>
          </figure>
        </Reveal>
      </div>
      <div className="container-site mt-20">
        <dl className="grid grid-cols-2 gap-px border-y border-pine-900/15 bg-pine-900/15 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse bg-cream-50 px-1 py-8 sm:px-6">
              <dt className="mt-2 text-sm text-muted">{f.label}</dt>
              <dd className="display text-[2.6rem] text-pine-900 sm:text-5xl">
                {f.value}
                {f.unit && <span className="ml-1 font-sans text-lg text-muted">{f.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[0.7rem] text-muted">Source: Concepcion LGU Profile.</p>
      </div>
    </section>
  );
}

function PlanYourVisit() {
  const legs = [
    { from: "Manila", to: "Batangas Port", mode: "Bus", note: "Buses from Cubao or Buendia" },
    { from: "Batangas Port", to: "Calapan", mode: "RoRo or fastcraft", note: "Crossing to Oriental Mindoro" },
    { from: "Calapan", to: "Pinamalayan", mode: "Van (UV Express)", note: "Overland down the east coast" },
    { from: "Pinamalayan", to: "Sibale", mode: "Passenger boat", note: "About 17 km. Historically one daily trip of around 2–3 hours" },
  ];
  return (
    <section aria-labelledby="plan-heading" className="relative isolate overflow-hidden bg-pine-950 py-24 text-white lg:py-32">
      <Image src="/images/attractions/maisuting-baybay-3.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pine-950 via-pine-950/90 to-pine-950/60" />
      <div className="container-site">
        <SectionHeading
          light
          eyebrow="Plan your visit"
          title={<span id="plan-heading">Getting to Sibale takes some planning</span>}
          intro="There is no airport, and no direct, year-round link to the mainland. Most travellers come by sea from Pinamalayan in Oriental Mindoro."
        />
        <ol className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-4">
          {legs.map((l, i) => (
            <li key={l.from} className="bg-pine-950/80 p-6 backdrop-blur-sm">
              <span className="text-xs tabular-nums text-lime-300">Leg {i + 1}</span>
              <p className="mt-4 text-sm text-white/60">{l.from} →</p>
              <p className="display text-2xl">{l.to}</p>
              <p className="mt-4 text-sm font-semibold">{l.mode}</p>
              <p className="mt-1 text-sm text-white/60">{l.note}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-3xl">
          <Notice title="Confirm your crossing">
            Boat times, fares and operators change. Confirm the current schedule with the Municipal Tourism Office or the boat operator in Pinamalayan before you travel. There is no bank or ATM on the island, so bring enough cash.
          </Notice>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/travel-guide" variant="lime">
            Full travel guide
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost-light">
            Ask about boats
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
