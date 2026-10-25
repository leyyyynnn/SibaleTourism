export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  credit: string;
};

const credit = "Aerial photograph from the project's Figma draft — confirm photographer and licence";

/** Verified photographs of Concepcion. Add new local photos here. */
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/concepcion-bay-aerial.jpg",
    alt: "Aerial view of Concepcion Bay at dusk, with the Poblacion and pier on the left and forested headlands enclosing the bay",
    caption: "Concepcion Bay and the Poblacion at dusk",
    width: 1920,
    height: 1080,
    credit,
  },
  {
    src: "/images/poblacion-waterfront.jpg",
    alt: "Colourful roofs of the Poblacion beside the seawall and pier, with outrigger boats moored in the shallows",
    caption: "The Poblacion waterfront and pier",
    width: 868,
    height: 868,
    credit,
  },
  {
    src: "/images/golden-ridge.jpg",
    alt: "A forested hill catching the last sun above the town",
    caption: "Last light on the hill above the town",
    width: 1064,
    height: 658,
    credit,
  },
  {
    src: "/images/headland-coconut-palms.jpg",
    alt: "A long headland lined with coconut palms across the bay",
    caption: "Coconut palms along the eastern headland",
    width: 1400,
    height: 474,
    credit,
  },
  {
    src: "/images/concepcion-bay-water.jpg",
    alt: "The still, dark-blue water of Concepcion Bay ringed by forest",
    caption: "Stillness in Concepcion Bay",
    width: 1400,
    height: 896,
    credit,
  },
  {
    src: "/images/mangrove-shoreline.jpg",
    alt: "Dense mangrove and forest canopy meeting the bay's edge",
    caption: "Mangroves at the edge of the bay",
    width: 896,
    height: 644,
    credit,
  },
];

/** Shots still needed from local photographers. Shown as labelled slots. */
export const photoWishlist = [
  "Bagulayag slopes at sunset",
  "Underwater reef, Sibuyan Sea",
  "Fishers landing the morning catch",
  "Tinigban Falls in flow",
  "Lambirongan Stone Arch",
  "Copra drying in a barangay",
];
