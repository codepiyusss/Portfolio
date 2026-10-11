"use client";

import { useEffect, useRef } from "react";
import { Spider } from "./Spider";

/**
 * A red thread hangs from the top of the screen. A small spider lowers itself on it
 * as you scroll, and gets a little bigger the further down the page you are.
 * Scroll position is written straight to CSS variables, so React never re-renders.
 */
export function SpiderThread() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const top = 88;
      const bottom = 72;
      const y = top + p * Math.max(0, window.innerHeight - top - bottom);
      el.style.setProperty("--y", `${y}px`);
      el.style.setProperty("--s", `${0.8 + 0.35 * p}`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className="spider-thread" aria-hidden="true">
      <span className="spider-line" />
      <span className="spider-body">
        <Spider className="h-full w-full" />
      </span>
    </div>
  );
}
