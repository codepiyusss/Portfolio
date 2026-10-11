/**
 * An original spider drawing: round abdomen, small head, eight legs.
 * It hangs head-down because real spiders spin their thread from the abdomen.
 */
export function Spider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      style={{ transform: "rotate(180deg)" }}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 14 Q14 5 6 8" />
        <path d="M21 16.5 Q10 12 3 19" />
        <path d="M21 19 Q9 21 4 31" />
        <path d="M22 21 Q14 28 10 41" />
        <path d="M26 14 Q34 5 42 8" />
        <path d="M27 16.5 Q38 12 45 19" />
        <path d="M27 19 Q39 21 44 31" />
        <path d="M26 21 Q34 28 38 41" />
      </g>
      <ellipse cx="24" cy="29" rx="7.5" ry="10" fill="currentColor" />
      <circle cx="24" cy="16.5" r="5" fill="currentColor" />
      <circle cx="22.2" cy="15.3" r="1.1" fill="var(--accent)" />
      <circle cx="25.8" cy="15.3" r="1.1" fill="var(--accent)" />
    </svg>
  );
}
