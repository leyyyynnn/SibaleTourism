import Image from "next/image";
import Link from "next/link";
import { nationalEmergencyNumber, nav, officialContacts, site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-pine-950 text-white/75">
      {/* Government identity band: official seal and Bagong Pilipinas logo */}
      <div className="border-b border-pine-900/10 bg-white text-pine-950">
        <div className="container-site flex flex-col items-center gap-6 py-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <Image
              src="/images/logos/concepcion-seal.png"
              alt="Official Seal of the Municipality of Concepcion"
              width={96}
              height={96}
              className="h-20 w-20 shrink-0 sm:h-24 sm:w-24"
            />
            <div className="leading-tight">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-muted uppercase">Republic of the Philippines</p>
              <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.18em] text-muted uppercase">Province of Romblon</p>
              <p className="mt-1 text-base font-bold text-pine-950">Municipality of Concepcion</p>
            </div>
          </div>
          <Image
            src="/images/logos/bagong-pilipinas.png"
            alt="Bagong Pilipinas"
            width={600}
            height={559}
            className="h-[104px] w-auto sm:h-[124px]"
          />
        </div>
      </div>

      <div className="container-site grid gap-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-5">
          <Link href="/" className="inline-block text-white" aria-label="Sibale Tourism — home">
            <Wordmark />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            The tourism guide to Concepcion, Romblon — Sibale Island in the Verde Island Passage. Nine barangays, one island, MIMAROPA, Philippines.
          </p>
          <p className="mt-4 text-xs tracking-[0.2em] text-white/50">{site.coordinatesLabel}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow mb-4 text-lime-300">Explore</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4 text-lime-300">Visitor information</p>
          <p className="text-sm text-white">{officialContacts.office}</p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${officialContacts.email}`} className="break-all underline decoration-white/30 underline-offset-4 hover:text-white">
              {officialContacts.email}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <Link href="/contact" className="underline decoration-white/30 underline-offset-4 hover:text-white">
              Send an inquiry
            </Link>
          </p>
          <p className="mt-6 text-sm">
            Emergency (nationwide): <a href={`tel:${nationalEmergencyNumber}`} className="font-semibold text-white">{nationalEmergencyNumber}</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Municipality of Concepcion, Romblon · Sibale Tourism</p>
          <p>Travel details change. Confirm boat schedules and access locally before you travel.</p>
        </div>
      </div>
    </footer>
  );
}
