import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { ButtonLink, PageHeader, PhotoSlot } from "@/components/ui";
import { galleryImages, photoWishlist } from "@/data/gallery";

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
        intro="Every photograph here is of Concepcion itself. Select an image to view it larger, and use the arrow keys to move between them."
      />
      <section className="py-16 lg:py-24">
        <div className="container-site">
          <Gallery images={galleryImages} />
        </div>
      </section>
      <section aria-labelledby="wishlist-heading" className="bg-sand-100 py-16 lg:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-sea-600">Help us show the island</p>
              <h2 id="wishlist-heading" className="display mt-4 text-4xl text-ocean-900 sm:text-5xl">
                Photographs we&rsquo;re looking for
              </h2>
              <p className="mt-4 text-muted">
                Local photographers are welcome to contribute, with credit. All images must be of Concepcion and shared with permission.
              </p>
            </div>
            <ButtonLink href="/contact" variant="ghost-dark">
              Offer a photograph
            </ButtonLink>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {photoWishlist.map((w, i) => (
              <li key={w}>
                <PhotoSlot label={w} brief={w} tone={(["ocean", "sea", "forest"] as const)[i % 3]} className="aspect-[3/4]" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
