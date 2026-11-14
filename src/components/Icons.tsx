import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ChevronLeft = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);
export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);
export const Search = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);
export const Pin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const Boat = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 15h18l-2.5 4.5h-13L3 15Z" />
    <path d="M12 4v11M12 5l6 8H12" />
    <path d="M2 21.5c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1" />
  </svg>
);
export const Camera = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" />
    <circle cx="12" cy="13" r="3.4" />
  </svg>
);
export const Info = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);
export const Leaf = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
    <path d="M5 19 13 11" />
  </svg>
);
export const Wave = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
  </svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  </svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const Expand = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
);
export const Sun = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </svg>
);
export const Rain = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 15a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17 7.5a3.75 3.75 0 0 1 .5 7.47" />
    <path d="M9 17.5 8 20M13 17.5 12 20M17 17.5 16 20" />
  </svg>
);
export const ArrowUp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);
/* Responsible-travel icons */
export const Mask = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 10.5A2.5 2.5 0 0 1 5.5 8h11A2.5 2.5 0 0 1 19 10.5v1.5a3 3 0 0 1-3 3h-2.2l-1.3-1.6h-1L10.2 15H6a3 3 0 0 1-3-3z" />
    <path d="M21.5 5v8.5a3 3 0 0 1-3 3H17" />
  </svg>
);
export const Turtle = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="12.5" rx="5" ry="6" />
    <path d="M12 6.5V4.2" />
    <circle cx="12" cy="3.4" r="1.4" />
    <path d="M7.6 9.6 4.5 7.8M16.4 9.6l3.1-1.8M7.6 15.4 4.8 17.6M16.4 15.4l2.8 2.2M12 18.5V21" />
    <path d="M9 10.5h6M8.6 14.5h6.8" />
  </svg>
);
export const LifeRing = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3.8" />
    <path d="m6 6 3.3 3.3M18 6l-3.3 3.3M6 18l3.3-3.3M18 18l-3.3-3.3" />
  </svg>
);
export const Fish = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 12c3.2-4.6 9.3-5.4 13.3-1.6L20.5 7v10l-4.7-3.4C11.8 17.4 5.7 16.6 2.5 12Z" />
    <circle cx="7.6" cy="11.2" r="0.6" fill="currentColor" />
  </svg>
);
export const CarryBag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 8.5h14l-1.1 11.5H6.1z" />
    <path d="M9 8.5V6.8a3 3 0 0 1 6 0v1.7" />
    <path d="m9.5 14.5 1.8 1.8 3.3-3.6" />
  </svg>
);
export const LocalHome = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 11.2 12 4.2l8.5 7" />
    <path d="M5.8 9.4V20h12.4V9.4" />
    <path d="M12 17.6s-3.1-1.9-3.1-3.8a1.6 1.6 0 0 1 3.1-.7 1.6 1.6 0 0 1 3.1.7c0 1.9-3.1 3.8-3.1 3.8Z" />
  </svg>
);
