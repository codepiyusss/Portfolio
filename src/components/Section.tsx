import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  count?: number;
  /** Remove the inner padding so rows can run edge to edge. */
  flush?: boolean;
  children: ReactNode;
  className?: string;
};

/** A section of the column: hatched separator, title bar with a hatched tail, then content. */
export function Section({ id, title, count, flush = false, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div aria-hidden="true" className="hatch h-5 border-y border-line" />
      <div className="flex items-center gap-3 border-b border-line px-5 py-3 sm:px-6">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {count !== undefined && (
          <span className="rounded border border-line px-1.5 text-xs font-medium text-muted">{count}</span>
        )}
        <span aria-hidden="true" className="hatch h-3 flex-1" />
      </div>
      <div className={flush ? "" : "px-5 py-8 sm:px-6"}>{children}</div>
    </section>
  );
}