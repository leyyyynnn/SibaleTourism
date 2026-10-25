/**
 * Placeholder tourism identity. Replace with the official Concepcion
 * tourism logo when one is approved.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeOpacity="0.55" />
        <path d="M6 19c2.2-4.5 5-7 8.2-7 2.6 0 3.6 2 6 2 1.8 0 3.2-1 5.8-3.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5.5 23c2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2 2 1.2 4 1.2 2-1.2 4-1.2" fill="none" stroke="#6cc9c3" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className="block text-[0.95rem] font-extrabold tracking-[0.18em]">CONCEPCION</span>
        <span className="mt-1 block text-[0.6rem] font-medium tracking-[0.28em] opacity-70">ROMBLON · SIBALE</span>
      </span>
    </span>
  );
}
