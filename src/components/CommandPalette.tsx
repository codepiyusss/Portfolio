"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile, socials } from "@/data/profile";
import { toggleTheme } from "@/lib/theme";
import { Icon, type IconName } from "./Icons";

type Command = { id: string; group: string; label: string; icon: IconName; run: () => void };

const jump = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
const openHref = (href: string) => () => {
  if (href.startsWith("http")) window.open(href, "_blank", "noopener,noreferrer");
  else window.location.href = href;
};

/** Ctrl/Cmd + K opens a search box for jumping around the page and opening links. */
export default function CommandPalette() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      { id: "about", group: "Go to", label: "About", icon: "briefcase", run: jump("about") },
      { id: "stack", group: "Go to", label: "Stack", icon: "code", run: jump("stack") },
      { id: "education", group: "Go to", label: "Education", icon: "cap", run: jump("education") },
      { id: "projects", group: "Go to", label: "Projects", icon: "folder", run: jump("projects") },
      { id: "certificates", group: "Go to", label: "Certificates", icon: "award", run: jump("certificates") },
      { id: "resume", group: "Go to", label: "Resume", icon: "file", run: jump("resume") },
      { id: "contact", group: "Go to", label: "Contact", icon: "mail", run: jump("contact") },
    ];
    const links: Command[] = socials
      .filter((s) => s.href)
      .map((s) => ({ id: `open-${s.label}`, group: "Links", label: `Open ${s.label}`, icon: s.icon, run: openHref(s.href) }));
    const actions: Command[] = [
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        icon: "copy",
        run: () => {
          navigator.clipboard?.writeText(profile.email).catch(() => {});
        },
      },
      { id: "theme", group: "Actions", label: "Switch theme", icon: "sun", run: toggleTheme },
    ];
    return [...nav, ...links, ...actions];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  function openPalette() {
    setQuery("");
    setActive(0);
    if (!dialog.current?.open) dialog.current?.showModal();
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else openPalette();
      }
    };
    const onOpen = () => openPalette();
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  function run(c: Command | undefined) {
    if (!c) return;
    dialog.current?.close();
    c.run();
  }

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    }
  }

  let lastGroup = "";

  return (
    <dialog
      ref={dialog}
      aria-label="Command menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) dialog.current?.close();
      }}
      className="m-auto mt-[12vh] w-[min(92vw,560px)] overflow-hidden rounded-lg border border-line bg-panel p-0 text-ink shadow-2xl backdrop:bg-black/60"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <Icon name="search" size={18} className="text-muted" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onInputKey}
          placeholder="Search…"
          aria-label="Search commands"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
          className="h-12 w-full bg-transparent text-base outline-none placeholder:text-muted"
        />
        <kbd className="rounded border border-line px-1.5 text-xs text-muted">Esc</kbd>
      </div>

      <ul id="palette-list" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
        {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">Nothing found.</li>}
        {results.map((c, i) => {
          const heading = c.group !== lastGroup ? c.group : null;
          lastGroup = c.group;
          return (
            <li key={c.id} role="presentation">
              {heading && <p className="px-3 pb-1 pt-3 text-xs font-medium text-muted">{heading}</p>}
              <button
                id={`cmd-${c.id}`}
                type="button"
                role="option"
                aria-selected={i === active}
                onMouseMove={() => setActive(i)}
                onClick={() => run(c)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm ${
                  i === active ? "bg-accent-strong text-on-accent" : ""
                }`}
              >
                <Icon name={c.icon} size={16} />
                {c.label}
              </button>
            </li>
          );
        })}
      </ul>
    </dialog>
  );
}