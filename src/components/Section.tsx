import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/** A section hangs off the thread with a knot beside its heading. */
export function Section({ id, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`knot relative py-20 ${className}`}>
      <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
