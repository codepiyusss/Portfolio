"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { formatIssued, type Certificate } from "@/data/certificates";
import { Icon, IconLink } from "./Icons";
import { WebCorner } from "@/components/WebCorner";

/** Shown when a certificate has no image yet. */
function Face({ item, large = false }: { item: Certificate; large?: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-bg p-4 sm:p-5">
      <WebCorner level={1} className={`pointer-events-none absolute right-0 top-0 ${large ? "h-40 w-40" : "h-20 w-20"}`} />
      <div className="relative flex items-center gap-2 text-accent-text">
        <Icon name="award" size={large ? 22 : 18} />
        <span className="text-xs font-semibold">{item.type}</span>
      </div>
      <p className={`relative font-semibold leading-snug ${large ? "text-3xl sm:text-4xl" : "text-lg"}`}>{item.title}</p>
      <div className={`relative text-muted ${large ? "text-base" : "text-sm"}`}>
        <p>{item.issuer}</p>
        <p>{formatIssued(item.issued)}</p>
      </div>
    </div>
  );
}

export default function CertificateGallery({ items }: { items: Certificate[] }) {
  const types = useMemo(() => Array.from(new Set(items.map((i) => i.type))), [items]);
  const [filter, setFilter] = useState("All");
  const [current, setCurrent] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = useMemo(() => (filter === "All" ? items : items.filter((i) => i.type === filter)), [items, filter]);
  const item = visible[current] ?? visible[0];

  function open(index: number) {
    setCurrent(index);
    dialog.current?.showModal();
  }
  function step(delta: number) {
    setCurrent((c) => (c + delta + visible.length) % visible.length);
  }

  return (
    <div>
      {types.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter">
          {["All", ...types].map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={filter === t}
              onClick={() => setFilter(t)}
              className={`rounded-md border px-3 py-1.5 text-sm font-medium ${
                filter === t ? "border-accent-strong bg-accent-strong text-on-accent" : "border-line hover:border-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <ul className="grid gap-x-5 gap-y-8 sm:grid-cols-2">
        {visible.map((c, i) => (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`View ${c.title} from ${c.issuer}`}
              className="group block w-full text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-bg transition-colors group-hover:border-accent">
                {c.image ? (
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate from ${c.issuer}`}
                    fill
                    sizes="(min-width: 640px) 380px, 90vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <Face item={c} />
                )}
                <span className="absolute bottom-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent-strong text-on-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Icon name="eye" size={16} />
                </span>
              </div>
              {c.image && (
                <>
                  <p className="mt-3 font-medium leading-snug">{c.title}</p>
                  <p className="text-sm text-muted">
                    {c.issuer}, {formatIssued(c.issued)}
                  </p>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Certificate viewer"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        className="m-auto max-h-[92vh] w-[min(92vw,900px)] overflow-auto rounded-lg border border-line bg-panel p-0 text-ink shadow-2xl backdrop:bg-black/70"
      >
        {item && (
          <div>
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <p className="text-sm text-muted">
                {current + 1} of {visible.length}
              </p>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label="Close"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line hover:border-muted"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            <div className="relative h-[54vh] min-h-[260px] w-full bg-bg">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`${item.title} certificate from ${item.issuer}`}
                  fill
                  sizes="(min-width: 1024px) 900px, 92vw"
                  className="object-contain"
                />
              ) : (
                <Face item={item} large />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-4 py-4">
              <div>
                <p className="text-lg font-semibold leading-snug">{item.title}</p>
                <p className="text-sm text-muted">
                  {item.issuer}, {formatIssued(item.issued)}
                </p>
                {item.verifyUrl && (
                  <p className="mt-2">
                    <IconLink href={item.verifyUrl} icon="external" variant="text">
                      Verify certificate
                    </IconLink>
                  </p>
                )}
              </div>
              {visible.length > 1 && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line hover:border-muted"
                  >
                    <Icon name="left" size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line hover:border-muted"
                  >
                    <Icon name="right" size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}