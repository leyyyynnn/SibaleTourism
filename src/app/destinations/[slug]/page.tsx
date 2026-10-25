import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DestinationCard } from "@/components/DestinationCard";
import { ArrowUpRight, ChevronLeft, Pin } from "@/components/Icons";
import { ButtonLink, PhotoSlot, SourceList, VerificationBadge } from "@/components/ui";
import { destinations, getDestination } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return {
    title: d.name,
    description: d.summary,
    openGraph: d.image ? { images: [{ url: d.image.src }] } : undefined,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const related = destinations.filter((x) => x.slug !== d.slug && x.category === d.category).slice(0, 3);
  const others = related.length ? related : destinations.filter((x) => x.slug !== d.slug).slice(0, 3);

  return (
    <article>
      <header className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <div className="grid min-h-[34rem] lg:grid-cols-2">
          <div className="flex flex-col justify-end px-5 pt-36 pb-14 md:px-10 lg:pr-12 lg:pb-20 lg:pl-[max(2.5rem,calc((100vw-88rem)/2+2.5rem))]">
            <Link href={`/destinations?category=${d.category}`} className="mb-10 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white">
              <ChevronLeft size={16} /> {d.category}
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <VerificationBadge status={d.verification} />
              <span className="text-sm text-white/70">{d.barangay ? `Brgy. ${d.barangay}` : "Barangay to be confirmed"}</span>
            </div>
            <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">{d.name}</h1>
            {d.altNames && <p className="mt-3 text-sm text-white/60">Also known as {d.altNames.join(", ")}</p>}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{d.summary}</p>
          </div>
          <PhotoSlot
            image={d.image}
            label={d.name}
            brief={d.photoBrief}
            tone="ocean"
            priority
            className="min-h-[20rem] lg:min-h-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </header>

      <div className="container-site grid gap-16 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="eyebrow mb-6 text-sea-600">About this place</h2>
          <div className="prose-site max-w-2xl text-lg leading-relaxed text-charcoal/85">
            {d.details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h2 className="eyebrow mt-14 mb-6 text-sea-600">Visitor notes</h2>
          <ul className="max-w-2xl divide-y divide-ocean-900/10 border-y border-ocean-900/10">
            {d.visitorNotes.map((n) => (
              <li key={n} className="py-4 text-[0.98rem] leading-relaxed text-charcoal/85">
                {n}
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-10 lg:col-span-5 lg:pl-8">
          <div className="bg-sand-100 p-7">
            <p className="eyebrow text-muted">Location</p>
            {d.coordinates ? (
              <>
                <p className="mt-3 flex items-start gap-2 text-ocean-900">
                  <Pin size={18} className="mt-0.5 shrink-0" />
                  <span className="tabular-nums">
                    {d.coordinates.lat.toFixed(4)}, {d.coordinates.lng.toFixed(4)}
                    {d.coordinates.precision === "approximate" && <span className="ml-1 text-muted">(approximate)</span>}
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted">{d.coordinates.note}</p>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${d.coordinates.lat}&mlon=${d.coordinates.lng}#map=15/${d.coordinates.lat}/${d.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-600"
                >
                  Open in OpenStreetMap <ArrowUpRight size={14} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Exact location not yet published. Ask in the Poblacion or contact the Municipal Tourism Office for directions and a local guide.
              </p>
            )}
          </div>

          {d.toConfirm.length > 0 && (
            <div className="border border-dashed border-[#b58a2e]/50 p-7">
              <p className="eyebrow text-[#7a5a1e]">Being confirmed with the municipality</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {d.toConfirm.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          <SourceList ids={d.sources} />

          {d.image && (
            <p className="text-xs text-muted">
              Photo: {d.image.credit}
            </p>
          )}

          <ButtonLink href="/travel-guide">Plan your visit</ButtonLink>
        </aside>
      </div>

      <section aria-labelledby="more-heading" className="border-t border-ocean-900/10 bg-sand-100 py-16 lg:py-24">
        <div className="container-site">
          <h2 id="more-heading" className="display text-4xl text-ocean-900">
            More to discover
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <DestinationCard destination={o} sizes="(min-width: 1024px) 33vw, 50vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
