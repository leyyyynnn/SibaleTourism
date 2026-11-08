import Image from "next/image";
import Link from "next/link";
import { nationalEmergencyNumber, nav, officialContacts, telHref } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-pine-950 text-white/75">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-16 lg:py-20">
        {/* Brand */}
        <div className="md:col-span-5">
          <Link href="/" className="inline-block text-white" aria-label="Sibale Tourism — home">
            <Wordmark />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            The tourism guide to Concepcion, Romblon — Sibale Island in the Verde Island Passage. Nine barangays, one island, MIMAROPA, Philippines.
          </p>

          {/* Official emblems: logos, then the label (beside them from sm up) */}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logos/concepcion-seal.png"
                alt="Official Seal of the Municipality of Concepcion"
                width={80}
                height={80}
                className="h-16 w-16 shrink-0 sm:h-20 sm:w-20"
              />
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white p-2.5 sm:h-20 sm:w-20 sm:p-3">
                <Image src="/images/logos/bagong-pilipinas.png" alt="Bagong Pilipinas" width={600} height={559} className="h-auto w-full" />
              </span>
            </div>
            <div className="leading-tight sm:ml-1">
              <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-white/50 uppercase">Republic of the Philippines</p>
              <p className="mt-1 text-[0.62rem] font-semibold tracking-[0.18em] text-white/50 uppercase">Province of Romblon</p>
              <p className="mt-1.5 text-sm font-semibold text-white">Municipality of Concepcion</p>
            </div>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="border-t border-white/10 pt-8 md:col-span-3 md:border-0 md:pt-0">
          <p className="eyebrow mb-4 text-lime-300">Explore</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1 md:gap-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visitor information */}
        <div className="border-t border-white/10 pt-8 md:col-span-4 md:border-0 md:pt-0">
          <p className="eyebrow mb-4 text-lime-300">Visitor information</p>
          <p className="text-sm font-semibold text-white">{officialContacts.office}</p>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${officialContacts.email}`} className="break-all underline decoration-white/30 underline-offset-4 hover:text-white">
                {officialContacts.email}
              </a>
            </li>
            {officialContacts.phone && (
              <li>
                <a href={telHref(officialContacts.phone)} className="tabular-nums underline decoration-white/30 underline-offset-4 hover:text-white">
                  {officialContacts.phone}
                </a>
              </li>
            )}
            <li>
              <Link href="/contact" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                Send an inquiry
              </Link>
            </li>
            <li>
              <Link href="/carbon-footprint-fee" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                Carbon Footprint Mitigation Fee
              </Link>
            </li>
          </ul>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span>
              Emergency:{" "}
              <a href={`tel:${nationalEmergencyNumber}`} className="font-semibold text-white">
                {nationalEmergencyNumber}
              </a>
            </span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <Link href="/travel-guide#safety" className="underline decoration-white/30 underline-offset-4 hover:text-white">
              Local hotlines
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom bar: one line per item on phones, a single row on large screens */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs leading-relaxed text-white/50 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3">
            <p>© {year} Municipality of Concepcion, Romblon · Sibale Tourism</p>
            <p>
              Website developed by{" "}
              <a
                href="https://leyndesigns.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 underline decoration-white/30 underline-offset-4 hover:text-lime-300 hover:decoration-lime-300"
              >
                Johnlien Falculan<span className="sr-only"> (portfolio, opens in a new tab)</span>
              </a>
            </p>
          </div>
          <p>Travel details change. Confirm boat schedules and access locally before you travel.</p>
        </div>
      </div>
    </footer>
  );
}
