import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** /manifest.webmanifest — name, colours and icons for "Add to Home Screen". */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sibale Tourism · Concepcion, Romblon",
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ee",
    theme_color: "#0f2b25",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
