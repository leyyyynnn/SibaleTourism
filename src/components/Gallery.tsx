"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/gallery";
import { ChevronLeft, ChevronRight, Close, Expand } from "./Icons";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastIndex = useRef<number | null>(null);

  const open = (i: number) => {
    lastIndex.current = i;
    setIndex(i);
  };
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  // Return focus to the thumbnail that opened the lightbox.
  const handleClose = () => {
    setIndex(null);
    const i = lastIndex.current;
    if (i !== null) triggerRefs.current[i]?.focus();
  };

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index !== null ? images[index] : null;

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {images.map((img, i) => (
          <li key={img.src} className="break-inside-avoid">
            <figure>
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                type="button"
                onClick={() => open(i)}
                className="group relative block w-full overflow-hidden bg-pine-900"
                aria-label={`View larger: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={16} />
                </span>
              </button>
              <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label={current ? `Photo: ${current.caption}` : "Photo viewer"}
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-pine-950/95 p-0 text-white backdrop:bg-black/70"
      >
        {current && index !== null && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm tabular-nums text-white/70" aria-live="polite">
                {index + 1} / {images.length}
              </p>
              <button type="button" onClick={close} className="p-2 text-white/80 hover:text-white" aria-label="Close photo viewer" autoFocus>
                <Close size={26} />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="100vw"
                className="max-h-full w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 sm:left-4"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 sm:right-4"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="px-4 py-4 text-center sm:px-6">
              <p className="text-base">{current.caption}</p>
              <p className="mt-1 text-xs text-white/50">{current.credit}</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
