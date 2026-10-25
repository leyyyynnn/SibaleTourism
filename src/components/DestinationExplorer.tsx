"use client";

import { useEffect, useMemo, useState } from "react";
import { destinationCategories, destinations, type DestinationCategory } from "@/data/destinations";
import { DestinationCard } from "./DestinationCard";
import { Close, Search } from "./Icons";

type Filter = "All" | DestinationCategory;

export function DestinationExplorer({ initialCategory }: { initialCategory?: string }) {
  const valid = (c?: string): Filter =>
    destinationCategories.includes(c as DestinationCategory) ? (c as DestinationCategory) : "All";
  const [filter, setFilter] = useState<Filter>(valid(initialCategory));
  const [query, setQuery] = useState("");

  // Keep the URL shareable without a navigation.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (filter === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", filter);
    window.history.replaceState(null, "", url);
  }, [filter]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter((d) => {
      if (filter !== "All" && d.category !== filter) return false;
      if (!q) return true;
      return [d.name, ...(d.altNames ?? []), d.summary, d.category, d.location ?? ""].join(" ").toLowerCase().includes(q);
    });
  }, [filter, query]);

  const count = (c: Filter) => (c === "All" ? destinations.length : destinations.filter((d) => d.category === c).length);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-pine-900/15 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="-mx-1 flex flex-wrap gap-2">
          {(["All", ...destinationCategories] as Filter[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === c ? "border-pine-900 bg-pine-900 text-white" : "border-pine-900/20 text-pine-900 hover:border-pine-900/60"
              }`}
            >
              {c} <span className={filter === c ? "text-white/60" : "text-muted"}>{count(c)}</span>
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search destinations</span>
          <Search size={18} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search beaches, falls, viewpoints…"
            className="w-full rounded-md border border-pine-900/20 bg-white py-3 pr-10 pl-11 text-sm text-pine-900 placeholder:text-muted/80 focus:border-lime-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-lime-400"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-1.5 text-muted hover:text-pine-900"
              aria-label="Clear search"
            >
              <Close size={16} />
            </button>
          )}
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {results.length} {results.length === 1 ? "place" : "places"}
        {filter !== "All" && ` in ${filter}`}
        {query && ` matching “${query}”`}
      </p>

      {results.length === 0 ? (
        <div className="mt-10 border border-dashed border-pine-900/20 p-12 text-center">
          <p className="display text-3xl text-pine-900">Nothing found</p>
          <p className="mt-3 text-sm text-muted">Try another name or category. Local spellings vary: Quebrada is also written Quibrada.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
            className="mt-6 text-sm font-semibold text-pine-900 underline underline-offset-4"
          >
            Show all destinations
          </button>
        </div>
      ) : (
        <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((d) => (
            <li key={d.slug}>
              <DestinationCard destination={d} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
