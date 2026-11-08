import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { DestinationExplorer } from "@/components/DestinationExplorer";
import { MapExplorer } from "@/components/MapExplorer";
import { PageHeader, SectionHeading } from "@/components/ui";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = pageMetadata({
  title: "Destinations",
  description:
    "Beaches, viewpoints, waterfalls, reefs and heritage sites on Sibale Island, Concepcion, Romblon.",
  path: "/destinations",
});

export default async function DestinationsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title="Places to discover on Sibale"
        intro="Cliffs and ridges, a sentinel mountain, a 1973 shipwreck and six white-sand beaches. Many sites have no facilities, and some are protected sanctuaries."
        image={{ src: "/images/attractions/tonggo-beach-2.jpg", alt: "Tonggo Beach with clear turquoise water" }}
      />
      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow text-pine-700">On the island</p>
            <h2 className="display mt-4 text-4xl text-pine-900 sm:text-5xl">{destinations.length} places to see on Sibale</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">Descriptions from the Concepcion Convention and Visitors’ Office and the LGU Profile.</p>
          </div>
          <DestinationExplorer initialCategory={category} />
        </div>
      </section>
      <section aria-labelledby="dest-map" className="bg-cream-100 py-16 lg:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Map" title={<span id="dest-map">Where they are</span>} intro="Only places with sourced coordinates are shown." />
          <div className="mt-10">
            <MapExplorer />
          </div>
        </div>
      </section>
    </>
  );
}
