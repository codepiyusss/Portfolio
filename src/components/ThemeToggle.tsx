"use client";

import { useSyncExternalStore } from "react";
import { toggleTheme } from "@/lib/theme";
import { Icon } from "./Icons";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink hover:border-muted"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Icon name={isDark ? "sun" : "moon"} size={17} />
    </button>
  );
}