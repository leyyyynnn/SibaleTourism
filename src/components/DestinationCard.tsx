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
  fill = false,
  area,
}: {
  destination: Destination;
  aspect?: string;
  size?: "md" | "lg";
  sizes?: string;
  /** From md up, stretch to the parent's height: the photo grows to take the extra space. */
  fill?: boolean;
  /**
   * Place the photo and the text in separate cells of a parent .featured-grid
   * (from 768px). "lead", "a" or "b" — see globals.css.
   */
  area?: "lead" | "a" | "b";
}) {
  const href = `/destinations/${d.slug}`;
  return (
    <article className={`group relative ${fill ? "card-fill" : ""} ${area ? `fg-card fg-${area}` : ""}`}>
      <PhotoSlot
        image={d.images[0]}
        label={d.name}
        brief={d.photoBrief}
        tone={toneFor[d.category]}
        className={`${aspect} w-full ${fill ? "card-fill-photo" : ""} ${area ? "fg-photo" : ""}`}
        sizes={sizes}
      />
      <div className={area ? "fg-body" : ""}>
        <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="eyebrow text-pine-700">{d.category}</span>
          {d.area && (
            <>
              <span aria-hidden="true" className="text-pine-900/30">
                ·
              </span>
              <span className="text-xs text-muted">{d.area}</span>
            </>
          )}
        </p>
        <h3
          className={`display mt-3 text-pine-900 ${
            size === "lg" ? "text-4xl lg:text-[2.75rem]" : "text-[1.75rem]"
          }`}
        >
          <Link href={href} className="after:absolute after:inset-0">
            {d.name}
          </Link>
        </h3>
        <p
          className={`mt-2.5 leading-relaxed text-muted ${
            size === "lg" ? "max-w-xl text-base lg:text-[1.05rem]" : "text-[0.95rem]"
          }`}
        >
          {d.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-pine-900 transition-colors group-hover:text-pine-950">
          Discover more <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
