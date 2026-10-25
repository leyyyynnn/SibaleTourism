import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { ButtonLink, PageHeader } from "@/components/ui";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs of Concepcion, Romblon: Sibale Island's bay, shoreline, hills and everyday life.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Sibale, photographed"
        intro="Every photograph here is of Sibale itself. Select an image to view it larger, and use the arrow keys to move between them."
        image={{ src: "/images/attractions/guiwanon-beach-2.jpg", alt: "Palms leaning over Guiwanon’s white beach" }}
      />
      <section className="py-16 lg:py-24">
        <div className="container-site">
          <Gallery images={galleryImages} />
        </div>
      </section>
      <section aria-labelledby="share-heading" className="bg-cream-100 py-16">
        <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-pine-700">Help us show the island</p>
            <h2 id="share-heading" className="display mt-4 text-4xl text-pine-900">
              Have a photograph of Sibale?
            </h2>
            <p className="mt-3 text-muted">Local photographers are welcome to contribute, with credit. Photos must be of Concepcion and shared with permission.</p>
          </div>
          <ButtonLink href="/contact" variant="ghost-dark">
            Offer a photograph
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
