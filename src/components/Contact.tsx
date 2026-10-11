"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Icon, IconLink } from "./Icons";
import { Section } from "./Section";
import { WebCorner } from "./WebCorner.tsx";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent-text focus:outline-none focus:ring-2 focus:ring-accent/40";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(0);

  // Used by the server to spot bots that submit instantly.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
          startedAt: startedAt.current,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not send your message.");
      form.reset();
      startedAt.current = Date.now();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Contact" className="pb-28">
      <WebCorner level={3} className="pointer-events-none absolute -right-6 top-4 h-48 w-48 sm:right-0 sm:h-72 sm:w-72" />

      <div className="relative grid gap-12 md:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="max-w-sm text-lg leading-relaxed text-ink/85">
            I&apos;m looking for an internship or an entry-level role. Send a message and it goes to my inbox, or email
            me directly.
          </p>
          <ul className="mt-8 space-y-4 text-base">
            <li>
              <IconLink href={`mailto:${profile.email}`} icon="mail" variant="plain">
                {profile.email}
              </IconLink>
            </li>
            <li>
              <IconLink href={profile.linkedin} icon="linkedin" variant="plain">
                LinkedIn
              </IconLink>
            </li>
            <li>
              <IconLink href={profile.github} icon="github" variant="plain">
                GitHub
              </IconLink>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea id="message" name="message" required rows={6} minLength={10} maxLength={5000} className={`${field} resize-y`} />
          </div>

          {/* Honeypot: invisible to people, filled in by bots */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <p className="text-sm text-muted">
            By sending this form you agree to the handling of your details described in the{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-accent-text">
              privacy policy
            </Link>
            .
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-[0.95rem] font-bold text-on-accent hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Icon name="send" size={16} />
              {status === "sending" ? "Sending" : "Send message"}
            </button>
            <div role="status" aria-live="polite" className="min-h-6 text-sm font-medium">
              {status === "success" && <p>Thanks, your message was sent. I&apos;ll reply to your email soon.</p>}
              {status === "error" && <p className="text-accent-text">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}