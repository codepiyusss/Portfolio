"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-panel/90 backdrop-blur">
      <div className="mx-auto flex h-14 w-[calc(100%-24px)] max-w-[820px] items-center justify-between gap-3 px-3 sm:px-5">
        <a href="#home" className="text-base font-semibold tracking-tight">
          Piyush Tiwari
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            className="inline-flex h-9 items-center gap-2 rounded-md border border-line px-2.5 text-sm text-muted hover:border-muted hover:text-ink"
            aria-label="Open command menu"
          >
            <Icon name="search" size={16} />
            <span className="hidden lg:inline">Search</span>
            <kbd className="hidden rounded border border-line px-1.5 text-xs lg:inline">Ctrl K</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 items-center rounded-md border border-line px-3 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-panel md:hidden">
          <ul className="mx-auto w-[calc(100%-24px)] max-w-[820px] px-3 py-2">
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