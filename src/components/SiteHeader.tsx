"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/site";
import { Close, Menu } from "./Icons";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Pages that open with a full-bleed photograph get a transparent header.
  const overImage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const first = panel.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (e.key === "Tab" && panel.current) {
        const items = panel.current.querySelectorAll<HTMLElement>("a,button");
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || !overImage;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-ocean-900"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid
            ? "border-b border-white/10 bg-ocean-950/92 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/45 to-transparent"
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="text-white" aria-label="Concepcion, Romblon — home">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative block px-3 py-2 text-[0.82rem] font-medium text-white/85 transition-colors hover:text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-sea-300 after:transition-transform after:duration-300 ${
                      isActive(item.href) ? "text-white after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/travel-guide"
              className="hidden rounded-md bg-signal-600 px-4 py-2.5 text-[0.8rem] font-bold text-white transition-colors hover:bg-signal-700 sm:inline-block"
            >
              Plan Your Visit
            </Link>
            <button
              ref={menuButton}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-ocean-950 pt-24 pb-10 text-white xl:hidden"
      >
        <nav aria-label="Mobile" className="container-site">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline gap-4 py-4 text-2xl"
                >
                  <span className="w-6 text-xs tabular-nums text-sea-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`display ${isActive(item.href) ? "text-sea-300" : ""}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/travel-guide"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-signal-600 px-5 py-4 font-bold"
          >
            Plan Your Visit
          </Link>
        </nav>
      </div>
    </>
  );
}
