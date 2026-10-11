"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Timeline" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between pl-[var(--pad-l)] pr-6 sm:pr-8">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Piyush
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <span className="hidden w-3 md:block" />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-md border border-line bg-surface px-3 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-[1080px] py-2 pl-[var(--pad-l)] pr-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-base font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}