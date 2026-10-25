import type { Metadata } from "next";
import { DestinationExplorer } from "@/components/DestinationExplorer";
import { MapExplorer } from "@/components/MapExplorer";
import { Notice, PageHeader, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Beaches, viewpoints, waterfalls, reefs and heritage sites on Sibale Island, Concepcion, Romblon.",
};

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
          <div className="mb-12 max-w-3xl">
            <Notice title="About this list">
              Descriptions come from the Concepcion Convention and Visitors’ Office and the LGU Profile. Places marked <strong>Details to confirm</strong> still need access or location details from the Municipal Tourism Office.
            </Notice>
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
