import Link from "next/link";
import type { Destination } from "@/data/destinations";
import { ArrowRight } from "./Icons";
import { PhotoSlot } from "./ui";

const toneFor: Record<Destination["category"], "ocean" | "sea" | "forest" | "sand"> = {
  Beaches: "sea",
  Nature: "forest",
  Viewpoints: "ocean",
  Marine: "ocean",
  Heritage: "forest",
};

export function DestinationCard({
  destination: d,
  aspect = "aspect-[4/3]",
  size = "md",
  sizes,
}: {
  destination: Destination;
  aspect?: string;
  size?: "md" | "lg";
  sizes?: string;
}) {
  return (
    <article className="group relative">
      <PhotoSlot
        image={d.images[0]}
        label={d.name}
        brief={d.photoBrief}
        tone={toneFor[d.category]}
        className={`${aspect} w-full`}
        sizes={sizes}
      />
      <div className="mt-5 flex items-center gap-3 text-xs text-muted">
        <span className="eyebrow text-pine-700">{d.category}</span>
        <span aria-hidden="true" className="h-px w-6 bg-pine-900/20" />
        <span>{d.location ?? "Location to be confirmed"}</span>
      </div>
      <h3 className={`display mt-3 text-pine-900 ${size === "lg" ? "text-4xl sm:text-5xl" : "text-[1.9rem]"}`}>
        <Link href={`/destinations/${d.slug}`} className="after:absolute after:inset-0">
          {d.name}
        </Link>
      </h3>
      <p className={`mt-3 leading-relaxed text-muted ${size === "lg" ? "max-w-xl text-base sm:text-lg" : "text-[0.95rem]"}`}>{d.summary}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pine-900 transition-colors group-hover:text-pine-950">
        Discover more <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
