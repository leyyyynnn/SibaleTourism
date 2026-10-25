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
        intro="White-sand coves, windy headlands, a seasonal waterfall and the reefs that surround the island. Many sites have no facilities, and some still need local confirmation."
        image={{ src: "/images/headland-coconut-palms.jpg", alt: "Coconut-palm headland across Concepcion Bay" }}
      />
      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="mb-12 max-w-3xl">
            <Notice title="About this list">
              Places marked <strong>Details to confirm</strong> are named by travellers or local sources, but their exact location, access or spelling still needs confirming with the Municipal Tourism Office.
            </Notice>
          </div>
          <DestinationExplorer initialCategory={category} />
        </div>
      </section>
      <section aria-labelledby="dest-map" className="bg-sand-100 py-16 lg:py-24">
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
