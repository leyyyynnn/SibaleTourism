import { destinations } from "./destinations";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  credit: string;
};

const fromAttractions: GalleryImage[] = destinations.flatMap((d) =>
  d.images.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: d.name,
    width: img.width,
    height: img.height,
    credit: img.credit ?? "Municipality of Concepcion",
  })),
);

/** Photographs of Concepcion. Attraction photos are pulled in automatically. */
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/concepcion-bay-aerial.jpg",
    alt: "Aerial view of Concepcion Bay at dusk, with the Poblacion and pier on the left and forested headlands enclosing the bay",
    caption: "Concepcion Bay and the Poblacion at dusk",
    width: 1920,
    height: 1080,
    credit: "From the project’s Figma draft",
  },
  ...fromAttractions,
  {
    src: "/images/attractions/sea-turtle-reef.jpg",
    alt: "A sea turtle swimming over coral in Sibale’s waters",
    caption: "A sea turtle over Sibale’s reef",
    width: 1600,
    height: 900,
    credit: "Municipality of Concepcion",
  },
  {
    src: "/images/poblacion-waterfront.jpg",
    alt: "Colourful roofs of the Poblacion beside the seawall and pier, with outrigger boats moored in the shallows",
    caption: "The Poblacion waterfront and pier",
    width: 868,
    height: 868,
    credit: "From the project’s Figma draft",
  },
];
