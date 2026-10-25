"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping background video with a visible pause control.
 * Respects prefers-reduced-motion by starting paused.
 */
export function VideoLoop({ src, poster, label, className = "" }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true), () => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-pine-950 ${className}`}>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-4 bottom-4 z-10 flex h-10 items-center gap-2 rounded-full bg-black/45 px-4 text-xs font-semibold text-white backdrop-blur hover:bg-black/65"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="2" y="1" width="3" height="10" fill="currentColor" />
            <rect x="7" y="1" width="3" height="10" fill="currentColor" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 1l9 5-9 5z" fill="currentColor" />
          </svg>
        )}
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
