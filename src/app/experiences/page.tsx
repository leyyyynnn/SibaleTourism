import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHeader, PhotoSlot, SourceList } from "@/components/ui";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Beach days, snorkelling and diving, hikes to viewpoints, waterfalls and everyday island life on Sibale, Concepcion, Romblon.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiences"
        title="Slow days on a quiet island"
        intro="These experiences come from what the island offers and what travellers have done here. They are not packaged tours: most are arranged locally, in person, in the Poblacion."
        image={{ src: "/images/golden-ridge.jpg", alt: "Forested hill lit by late sun above the town" }}
      />
      <div className="py-12 lg:py-20">
        {experiences.map((e, i) => (
          <section key={e.slug} id={e.slug} aria-labelledby={`${e.slug}-h`} className="scroll-mt-28 py-12 lg:py-16">
            <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-center">
              <Reveal className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                <PhotoSlot
                  image={e.image}
                  label={e.title}
                  brief={`Local photograph for “${e.kicker}”.`}
                  tone={i % 3 === 0 ? "ocean" : i % 3 === 1 ? "sea" : "forest"}
                  className="aspect-[4/3]"
                />
              </Reveal>
              <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:col-start-1 lg:order-1" : "lg:col-start-8"}`} delay={100}>
                <p className="eyebrow text-sea-600">
                  {String(i + 1).padStart(2, "0")} · {e.kicker}
                </p>
                <h2 id={`${e.slug}-h`} className="display mt-4 text-4xl text-ocean-900 sm:text-5xl">
                  {e.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{e.description}</p>

                <p className="eyebrow mt-8 text-muted">Where</p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {e.where.map((w) => (
                    <li key={w.href}>
                      <Link href={w.href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-signal-600 hover:text-signal-700">
                        {w.label} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mt-8 text-muted">Arrangements</p>
                <ul className="mt-3 space-y-1.5 text-sm text-charcoal/80">
                  {e.arrangements.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-sea-500" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>
      <section className="border-t border-ocean-900/10 bg-sand-100 py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="display text-3xl text-ocean-900">Need a guide or a boat?</p>
            <p className="mt-3 max-w-md text-muted">The Municipal Tourism Office can point you to local guides and operators.</p>
            <div className="mt-6">
              <ButtonLink href="/contact">Contact the tourism office</ButtonLink>
            </div>
          </div>
          <SourceList ids={experiences.flatMap((e) => e.sources)} />
        </div>
      </section>
    </>
  );
}
