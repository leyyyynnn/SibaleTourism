"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapPlaces, placeCategories, type MapPlace, type PlaceCategory } from "@/data/places";
import { ArrowRight, ArrowUpRight, Close, Pin } from "./Icons";

const colorOf = (c: PlaceCategory) => placeCategories.find((p) => p.id === c)!.color;
const labelOf = (c: PlaceCategory) => placeCategories.find((p) => p.id === c)!.label;

export function MapExplorer({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<Set<PlaceCategory>>(new Set(placeCategories.map((c) => c.id)));
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const filterLabelId = useId();

  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  const visible = useMemo(() => mapPlaces.filter((p) => active.has(p.category)), [active]);
  const selected = mapPlaces.find((p) => p.id === selectedId) ?? null;

  // Create the map once, on the client only.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const leaflet = await import("leaflet");
        let tilesLoaded = false;
        if (cancelled || !mapEl.current || mapRef.current) return;
        const map = leaflet.map(mapEl.current, { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
        leaflet
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          })
          .on("tileload", () => {
            tilesLoaded = true;
          })
          .on("tileerror", () => {
            if (!tilesLoaded) setStatus("error");
          })
          .addTo(map);

        for (const place of mapPlaces) {
          const approx = place.coordinates.precision === "approximate";
          const icon = leaflet.divIcon({
            className: "",
            iconSize: [26, 26],
            iconAnchor: [13, 13],
            html: `<span style="display:block;width:26px;height:26px;border-radius:999px;background:${colorOf(place.category)};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35);${approx ? "outline:2px dashed rgba(255,255,255,.9);outline-offset:3px;" : ""}"></span>`,
          });
          const marker = leaflet
            .marker([place.coordinates.lat, place.coordinates.lng], { icon, title: place.name, keyboard: true, alt: place.name })
            .on("click", () => setSelectedId(place.id));
          markersRef.current.set(place.id, marker);
        }
        mapRef.current = map;
        map.fitBounds(
          leaflet.latLngBounds(mapPlaces.map((p) => [p.coordinates.lat, p.coordinates.lng] as [number, number])),
          { padding: [40, 40] },
        );
        setStatus((s) => (s === "loading" ? "ready" : s));
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Sync markers with filters.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    for (const [id, marker] of markersRef.current) {
      const place = mapPlaces.find((p) => p.id === id)!;
      if (active.has(place.category)) marker.addTo(map);
      else marker.remove();
    }
  }, [active, status]);

  // Fly to selection.
  useEffect(() => {
    if (selected && mapRef.current) {
      mapRef.current.flyTo([selected.coordinates.lat, selected.coordinates.lng], Math.max(mapRef.current.getZoom(), 13), { duration: 0.8 });
    }
  }, [selected]);

  const toggle = (id: PlaceCategory) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const counts = (id: PlaceCategory) => mapPlaces.filter((p) => p.category === id).length;
  const emptyActive = placeCategories.filter((c) => active.has(c.id) && counts(c.id) === 0);

  return (
    <div className="grid overflow-hidden border border-pine-900/10 bg-white lg:grid-cols-[22rem_1fr]">
      {/* Sidebar */}
      <div className="order-2 flex flex-col border-t border-pine-900/10 lg:order-1 lg:border-t-0 lg:border-r">
        <div role="group" aria-labelledby={filterLabelId} className="border-b border-pine-900/10 p-5">
          <p id={filterLabelId} className="eyebrow mb-3 text-muted">Show on map</p>
          <div className="flex flex-wrap gap-2">
            {placeCategories.map((c) => {
              const on = active.has(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(c.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    on ? "border-pine-900 bg-pine-900 text-white" : "border-pine-900/20 text-pine-900 hover:border-pine-900/50"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  {c.label}
                  <span className={on ? "text-white/60" : "text-muted"}>{counts(c.id)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={`flex-1 overflow-y-auto ${compact ? "max-h-72" : "max-h-[26rem]"}`}>
          {visible.length === 0 && emptyActive.length === 0 && (
            <p className="p-5 text-sm text-muted">No categories selected. Turn one on above to see places.</p>
          )}
          <ul>
            {visible.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  aria-current={selectedId === p.id ? "true" : undefined}
                  className={`flex w-full items-start gap-3 border-b border-pine-900/5 px-5 py-3.5 text-left transition-colors hover:bg-cream-50 ${
                    selectedId === p.id ? "bg-cream-100" : ""
                  }`}
                >
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: colorOf(p.category) }} />
                  <span>
                    <span className="block text-sm font-semibold text-pine-900">{p.name}</span>
                    <span className="block text-xs text-muted">
                      {labelOf(p.category)}
                      {p.coordinates.precision === "approximate" && " · approximate location"}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {emptyActive.length > 0 && (
            <div className="space-y-1 p-5 text-xs leading-relaxed text-muted">
              {emptyActive.map((c) => (
                <p key={c.id}>
                  <span className="font-semibold text-pine-900">{c.label}:</span> no verified listings yet. The Municipal Tourism Office will add these.
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="relative order-1 min-h-[22rem] lg:order-2 lg:min-h-[34rem]">
        <div ref={mapEl} className="absolute inset-0" role="region" aria-label="Map of Concepcion and Sibale Island" />
        {status === "loading" && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-cream-100 text-sm text-muted">
            <span className="animate-pulse">Loading map…</span>
          </div>
        )}
        {status === "error" && (
          <div className="absolute inset-x-4 top-4 z-[500] bg-white/95 p-4 text-sm text-pine-900 shadow">
            Map tiles could not be loaded. Check your connection. The list of places still works.
          </div>
        )}

        {selected && <PlaceDetail place={selected} onClose={() => setSelectedId(null)} />}

        <p className="absolute bottom-2 left-2 z-[400] bg-white/90 px-2 py-1 text-[0.65rem] text-muted">
          Dashed ring = approximate location
        </p>
      </div>
    </div>
  );
}

function PlaceDetail({ place, onClose }: { place: MapPlace; onClose: () => void }) {
  const { lat, lng } = place.coordinates;
  const exact = place.coordinates.precision === "gazetteer";
  return (
    <div className="absolute inset-x-3 bottom-3 z-[500] bg-white p-5 shadow-xl sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-80">
      <button type="button" onClick={onClose} className="absolute top-3 right-3 p-1 text-muted hover:text-pine-900" aria-label="Close details">
        <Close size={18} />
      </button>
      <p className="eyebrow text-[0.62rem]" style={{ color: colorOf(place.category) }}>
        {labelOf(place.category)}
      </p>
      <h3 className="display mt-2 pr-6 text-2xl text-pine-900">{place.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{place.description}</p>
      <p className="mt-3 flex gap-1.5 text-xs text-muted">
        <Pin size={14} className="mt-0.5 shrink-0" /> {place.coordinates.note}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {place.href && (
          <Link href={place.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine-900 hover:text-pine-950">
            Discover more <ArrowRight size={14} />
          </Link>
        )}
        <a
          href={
            exact
              ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
              : `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine-800 hover:text-pine-700"
        >
          {exact ? "Directions" : "View area"} <ArrowUpRight size={14} />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
