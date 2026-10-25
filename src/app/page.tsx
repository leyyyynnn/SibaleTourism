import Image from "next/image";
import Link from "next/link";
import { DestinationCard } from "@/components/DestinationCard";
import { ArrowRight, Boat, Leaf, Wave } from "@/components/Icons";
import { MapExplorer } from "@/components/MapExplorer";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Notice, PhotoSlot, SectionHeading, TextLink } from "@/components/ui";
import { featuredDestinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { galleryImages } from "@/data/gallery";
import { itineraries } from "@/data/itineraries";
import { site } from "@/data/site";

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
              title={<span id="destinations-heading">Coves, cliffs and a sheltered bay</span>}
              intro="Each of the nine barangays has its own stretch of coast. Here are the places visitors talk about most."
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

      {/* ---------------- Experiences ---------------- */}
      <section aria-labelledby="experiences-heading" className="bg-sand-100 py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Experiences"
                title={<span id="experiences-heading">Ways to spend your days</span>}
                intro="Swim, snorkel, hike or just watch the island at work. Some of these need a guide, a boat or simply good timing."
              />
              <div className="mt-8">
                <TextLink href="/experiences">All experiences</TextLink>
              </div>
            </div>
          </div>
          <ol className="lg:col-span-8">
            {experiences.map((e, i) => (
              <Reveal as="li" key={e.slug} className="group border-t border-ocean-900/15 last:border-b">
                <Link href={`/experiences#${e.slug}`} className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr_9rem] sm:gap-6">
                  <span className="text-sm tabular-nums text-sea-600">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="eyebrow block text-muted">{e.kicker}</span>
                    <span className="display mt-2 block text-[1.8rem] text-ocean-900 transition-colors group-hover:text-signal-600">{e.title}</span>
                    <span className="mt-3 block max-w-xl text-[0.95rem] leading-relaxed text-muted">{e.description}</span>
                  </span>
                  <span className="hidden sm:block">
                    {e.image ? (
                      <span className="relative block aspect-[4/5] overflow-hidden">
                        <Image src={e.image.src} alt="" fill sizes="9rem" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </span>
                    ) : (
                      <span className="contours block aspect-[4/5] bg-ocean-800" aria-hidden="true" />
                    )}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Map ---------------- */}
      <section aria-labelledby="map-heading" className="py-24 lg:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Island map"
            title={<span id="map-heading">Find your way around Sibale</span>}
            intro="Only places with sourced coordinates appear on the map. Approximate locations are marked as such, and more will be added as the tourism office confirms them."
          />
          <div className="mt-12">
            <MapExplorer compact />
          </div>
        </div>
      </section>

      <PlanYourVisit />

      {/* ---------------- Itineraries ---------------- */}
      <section aria-labelledby="itineraries-heading" className="py-24 lg:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Suggested itineraries"
            title={<span id="itineraries-heading">Stay the night. Or three.</span>}
            intro="Boats have historically crossed once a day, so even a short visit means an overnight stay. These are suggested plans, not tour packages."
          />
          <div className="mt-14 grid gap-px bg-ocean-900/10 md:grid-cols-3">
            {itineraries.map((it) => (
              <Link
                key={it.slug}
                href={`/travel-guide#${it.slug}`}
                className="group flex flex-col bg-sand-50 p-8 transition-colors hover:bg-white"
              >
                <span className="eyebrow text-sea-600">{it.mood}</span>
                <span className="display mt-6 text-6xl text-ocean-900">{it.length.split(" ")[0]}</span>
                <span className="mt-1 text-sm text-muted">{it.length.split(" ").slice(1).join(" ")}</span>
                <span className="mt-6 text-xl font-semibold text-ocean-900">{it.title}</span>
                <span className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{it.summary}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-600">
                  See the plan <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Culture ---------------- */}
      <section aria-labelledby="culture-heading" className="bg-sand-100">
        <div className="grid lg:grid-cols-2">
          <PhotoSlot
            image={{ src: "/images/poblacion-waterfront.jpg", alt: "Houses with colourful roofs along the Poblacion seawall, outrigger boats in the shallows" }}
            label="Poblacion waterfront"
            className="aspect-square lg:aspect-auto lg:min-h-[40rem]"
          />
          <div className="flex items-center px-5 py-20 md:px-10 lg:px-16 xl:px-24">
            <Reveal>
              <p className="eyebrow mb-5 text-sea-600">Culture & local life</p>
              <h2 id="culture-heading" className="display text-[2.4rem] text-ocean-900 sm:text-5xl">
                An island that speaks <em className="text-sea-600">Asi</em>
              </h2>
              <div className="prose-site mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted">
                <p>
                  The people of Concepcion call themselves Sibalenhon. Most speak Asi, a language shared with the neighbouring islands of Banton and Simara.
                </p>
                <p>
                  Life follows the sea and the coconut groves. Fishing and farming are the main livelihoods, copra is an important income, and the town takes its name from the Immaculate Concepcion.
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
      <section aria-labelledby="care-heading" className="relative isolate overflow-hidden bg-forest-900 py-24 text-white lg:py-32">
        <div className="contours absolute inset-0 -z-10 opacity-40" />
        <div className="container-site">
          <SectionHeading
            light
            eyebrow="Travel with care"
            title={<span id="care-heading">Leave the island as you found it</span>}
            intro="Sibale is home to about 3,400 people and the reefs they depend on. A few simple habits go a long way."
          />
          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {careRules.map((r) => (
              <li key={r.title} className="bg-forest-900 p-7">
                <r.icon size={22} className="text-sea-300" />
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
            {galleryImages.slice(0, 5).map((img, i) => (
              <Link
                key={img.src}
                href="/gallery"
                className={`group relative block overflow-hidden bg-ocean-900 ${
                  i === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {img.caption}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="border-t border-ocean-900/10 bg-sand-100 py-20">
        <div className="container-site flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-4 text-sea-600">Questions before you travel?</p>
            <p className="display max-w-2xl text-4xl text-ocean-900 sm:text-5xl">Ask the Municipal Tourism Office.</p>
          </div>
          <ButtonLink href="/contact">Send an inquiry</ButtonLink>
        </div>
      </section>
    </>
  );
}

const careRules = [
  { icon: Wave, title: "Float, don't stand", text: "Never stand on, touch or collect coral, shells or marine life when snorkelling or diving." },
  { icon: Leaf, title: "Carry it out", text: "Facilities are few. Take every wrapper and bottle back to the Poblacion with you." },
  { icon: Boat, title: "Respect the sea", text: "Use reputable boat operators, wear a life jacket and postpone trips when the sea is rough." },
  { icon: Leaf, title: "Ask first", text: "Ask before photographing people, homes or religious sites. Dress modestly in town." },
  { icon: Wave, title: "Keep the water clean", text: "Use reef-safe sunscreen and keep soaps and detergents out of rivers and the sea." },
  { icon: Boat, title: "Spend locally", text: "Hire local guides and drivers, and eat at family-run carinderias." },
];

function Hero() {
  return (
    <section aria-label="Welcome to Concepcion" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ocean-950 text-white">
      <Image
        src="/images/concepcion-bay-aerial.jpg"
        alt="Aerial view of Concepcion Bay at dusk: the Poblacion and its pier on the left, forested headlands closing around calm water"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[30%_50%] md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(6,24,38,0.5)_0%,rgba(6,24,38,0.6)_55%,rgba(6,24,38,0.85)_100%)]" />

      <div className="container-site flex flex-1 flex-col items-center justify-center pt-28 pb-16 text-center">
        <p className="eyebrow mb-6 text-white/80">
          Concepcion, Romblon <span className="mx-2 text-sea-300">·</span> Philippines
        </p>
        <h1 className="font-sans text-[clamp(2.75rem,12vw,10rem)] leading-[0.95] font-extrabold tracking-[0.04em]">
          <span className="sr-only">Discover </span>CONCEPCION
        </h1>
        <p className="mt-4 text-[clamp(1.25rem,3vw,2.25rem)] font-normal tracking-wide text-white/95">{site.tagline}.</p>
        <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-white/75 sm:text-lg">
          An island of quiet shores, remarkable landscapes and authentic island life in Romblon, Philippines.
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <ButtonLink href="/destinations">Explore Destinations</ButtonLink>
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
    { value: "19.8", unit: "km²", label: "land area" },
    { value: "3,427", label: "residents (2024 census)" },
    { value: "17", unit: "km", label: "by sea from Pinamalayan" },
  ];
  return (
    <section aria-labelledby="intro-heading" className="pt-24 lg:pt-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6 lg:pr-10">
          <p className="eyebrow mb-5 text-sea-600">About the island</p>
          <h2 id="intro-heading" className="display text-[2.6rem] text-ocean-900 sm:text-6xl">
            One island, one town, <em className="text-sea-600">nine coves</em>
          </h2>
          <div className="prose-site mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            <p>
              Concepcion covers all of Maestro de Campo Island, known locally as <strong className="font-semibold text-ocean-900">Sibale</strong>. It is the westernmost island of Romblon, set in the Sibuyan Sea and closer to Oriental Mindoro than to its own provincial capital.
            </p>
            <p>
              The island is hilly and green, with steep shores. Its villages sit along the coast, and the Poblacion faces a sheltered bay on the south side. Most visitors arrive by boat from Pinamalayan and find a quiet island that has seen little tourism.
            </p>
          </div>
          <div className="mt-8">
            <TextLink href="/discover">Discover our island</TextLink>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={150}>
          <figure>
            <PhotoSlot
              image={{ src: "/images/golden-ridge.jpg", alt: "A forested hill catching the late sun above the Poblacion and its pier" }}
              label="Hill above the Poblacion"
              className="aspect-[4/3]"
            />
            <figcaption className="mt-3 text-xs text-muted">Late sun on the hill above the Poblacion.</figcaption>
          </figure>
        </Reveal>
      </div>
      <div className="container-site mt-20">
        <dl className="grid grid-cols-2 gap-px border-y border-ocean-900/15 bg-ocean-900/15 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse bg-sand-50 px-1 py-8 sm:px-6">
              <dt className="mt-2 text-sm text-muted">{f.label}</dt>
              <dd className="display text-5xl text-ocean-900">
                {f.value}
                {f.unit && <span className="ml-1 font-sans text-lg text-muted">{f.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[0.7rem] text-muted">Sources: PSA 2024 Census; PhilAtlas; Daily Tribune (2022).</p>
      </div>
    </section>
  );
}

function PlanYourVisit() {
  const legs = [
    { from: "Manila", to: "Batangas Port", mode: "Bus", note: "Buses from Cubao or Buendia" },
    { from: "Batangas Port", to: "Calapan", mode: "RoRo or fastcraft", note: "Crossing to Oriental Mindoro" },
    { from: "Calapan", to: "Pinamalayan", mode: "Van (UV Express)", note: "Overland down the east coast" },
    { from: "Pinamalayan", to: "Concepcion", mode: "Passenger boat", note: "About 17 km. Historically one daily trip, around 2–3 hours" },
  ];
  return (
    <section aria-labelledby="plan-heading" className="relative isolate overflow-hidden bg-ocean-950 py-24 text-white lg:py-32">
      <Image src="/images/concepcion-bay-water.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ocean-950 via-ocean-950/90 to-ocean-950/60" />
      <div className="container-site">
        <SectionHeading
          light
          eyebrow="Plan your visit"
          title={<span id="plan-heading">Getting to Sibale takes some planning</span>}
          intro="There is no airport on the island. Most travellers come by sea from Pinamalayan in Oriental Mindoro."
        />
        <ol className="mt-14 grid gap-px overflow-hidden bg-white/10 md:grid-cols-4">
          {legs.map((l, i) => (
            <li key={l.from} className="bg-ocean-950/80 p-6 backdrop-blur-sm">
              <span className="text-xs tabular-nums text-sea-300">Leg {i + 1}</span>
              <p className="mt-4 text-sm text-white/60">{l.from} →</p>
              <p className="display text-2xl">{l.to}</p>
              <p className="mt-4 text-sm font-semibold">{l.mode}</p>
              <p className="mt-1 text-sm text-white/60">{l.note}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-3xl text-ocean-900">
          <Notice title="Schedules are not yet confirmed">
            Boat times, fares and operators change, and older reports may be out of date. Confirm the current schedule with the operator or the Municipal Tourism Office before you travel.
          </Notice>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/travel-guide">Full travel guide</ButtonLink>
          <ButtonLink href="/contact" variant="ghost-light">
            Ask about boats
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
