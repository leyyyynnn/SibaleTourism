"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";

/** Floating "back to top" button. Appears once the visitor has scrolled well down the page. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className={`back-to-top fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-pine-950 shadow-lg shadow-pine-950/30 ring-1 ring-pine-950/10 transition-all duration-300 hover:bg-lime-400 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
