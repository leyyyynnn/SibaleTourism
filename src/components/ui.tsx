import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getSources, type SourceId } from "@/data/sources";
import { ArrowRight, ArrowUpRight, Camera, Info } from "./Icons";

/* ---------- Buttons & links ---------- */

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  /** primary: evergreen on light surfaces · lime: featured action on dark surfaces */
  variant?: "primary" | "lime" | "ghost-light" | "ghost-dark";
  className?: string;
}) {
  const styles = {
    primary: "bg-pine-900 text-white hover:bg-pine-950",
    lime: "bg-lime-300 text-pine-950 hover:bg-lime-400",
    "ghost-light": "border border-white/60 text-white hover:bg-white hover:text-pine-950",
    "ghost-dark": "border border-pine-900/30 text-pine-900 hover:border-pine-900 hover:bg-pine-900 hover:text-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 border-b pb-1 text-sm font-semibold transition-colors ${
        light ? "border-white/40 text-white hover:border-white" : "border-pine-900/25 text-pine-900 hover:border-pine-900"
      }`}
    >
      {children}
      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/* ---------- Section heading ---------- */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  as: H = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={`eyebrow mb-5 ${light ? "text-lime-300" : "text-pine-700"}`}>{eyebrow}</p>}
      <H className={`display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] ${light ? "text-white" : "text-pine-900"}`}>{title}</H>
      {intro && (
        <div className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/75" : "text-muted"}`}>
          {intro}
        </div>
      )}
    </div>
  );
}

/* ---------- Page header for inner pages ---------- */

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <header className="relative isolate overflow-hidden bg-pine-950 pt-36 pb-16 text-white sm:pt-44 sm:pb-24">
      {image ? (
        <>
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-20 object-cover opacity-55" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-pine-950 via-pine-950/60 to-pine-950/30" />
        </>
      ) : (
        <div className="contours absolute inset-0 -z-10 opacity-60" />
      )}
      <div className="container-site">
        <p className="eyebrow mb-6 text-lime-300">{eyebrow}</p>
        <h1 className="display max-w-4xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</div>}
      </div>
    </header>
  );
}

/* ---------- Photo, or a clearly labelled placeholder ---------- */

const placeholderTones = {
  ocean: "bg-pine-800",
  sea: "bg-pine-700",
  forest: "bg-pine-900",
  sand: "bg-cream-300",
} as const;

export function PhotoSlot({
  image,
  label,
  brief,
  tone = "ocean",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  priority = false,
}: {
  image?: { src: string; alt: string };
  label: string;
  brief?: string;
  tone?: keyof typeof placeholderTones;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <div className={`relative overflow-hidden bg-pine-900 ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Photograph needed: ${label}`}
      className={`contours relative flex flex-col justify-end overflow-hidden p-5 ${placeholderTones[tone]} ${className}`}
    >
      <div className={tone === "sand" ? "text-pine-900" : "text-white"}>
        <Camera size={18} className="mb-2 opacity-70" />
        <p className="eyebrow opacity-80">Photograph needed</p>
        {brief && <p className="mt-1 max-w-xs text-xs leading-snug opacity-70">{brief}</p>}
      </div>
    </div>
  );
}

/* ---------- Verification and sources ---------- */

export function VerificationBadge({ status }: { status: "documented" | "needs-confirmation" }) {
  return status === "documented" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-2.5 py-1 text-[0.68rem] font-semibold text-pine-700">
      <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> Documented
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-200 px-2.5 py-1 text-[0.68rem] font-semibold text-[#7a5a1e]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#b58a2e]" /> Details to confirm
    </span>
  );
}

export function Notice({ children, title = "Before you go" }: { children: ReactNode; title?: string }) {
  return (
    <aside className="flex gap-4 border-l-2 border-lime-400 bg-cream-100 p-5 text-sm leading-relaxed text-pine-900">
      <Info size={20} className="mt-0.5 shrink-0 text-pine-700" />
      <div>
        <p className="font-semibold">{title}</p>
        <div className="mt-1 text-pine-900/80">{children}</div>
      </div>
    </aside>
  );
}

export function SourceList({ ids, title = "Sources" }: { ids: SourceId[]; title?: string }) {
  const list = getSources([...new Set(ids)]);
  return (
    <div>
      <p className="eyebrow mb-3 text-muted">{title}</p>
      <ul className="space-y-2 text-sm">
        {list.map((s) => (
          <li key={s.id}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-1.5 text-pine-800 hover:text-pine-700">
                <span>
                  {s.title} <span className="text-muted">— {s.publisher}{s.date ? `, ${s.date}` : ""}</span>
                </span>
                <ArrowUpRight size={14} className="mt-1 shrink-0 opacity-60" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <span className="text-pine-800">
                {s.title} <span className="text-muted">— {s.publisher}{s.date ? `, ${s.date}` : ""}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
