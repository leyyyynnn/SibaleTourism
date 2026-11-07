import { Phone } from "@/components/Icons";
import { hotlines, nationalEmergencyNumber, telHref } from "@/data/site";

/** Local emergency numbers, with the national 911 line. */
export function EmergencyHotlines({ columns = 2 }: { columns?: 1 | 2 | 3 }) {
  const grid = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <div>
      <ul className={`grid gap-px border border-pine-900/10 bg-pine-900/10 ${grid}`}>
        {hotlines.map((h) => (
          <li key={h.short} className="flex flex-col bg-cream-50 p-5">
            <p className="text-xs font-bold tracking-[0.18em] text-pine-700 uppercase">{h.short}</p>
            <p className="mt-1 text-sm leading-snug text-muted">{h.name}</p>
            <a
              href={telHref(h.phone)}
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold tabular-nums text-pine-900 hover:text-pine-700"
              aria-label={`Call ${h.short}, ${h.phone}`}
            >
              <Phone size={16} className="shrink-0 text-lime-400" />
              {h.phone}
            </a>
            <a
              href={h.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs text-muted underline decoration-pine-900/20 underline-offset-4 hover:text-pine-900"
            >
              Facebook page<span className="sr-only"> of {h.short} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        Nationwide emergency hotline:{" "}
        <a href={`tel:${nationalEmergencyNumber}`} className="font-semibold text-pine-900">
          {nationalEmergencyNumber}
        </a>
        . Mobile signal varies around the island, so save these numbers before you travel.
      </p>
    </div>
  );
}
