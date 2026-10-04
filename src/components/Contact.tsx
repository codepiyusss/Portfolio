"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not send your message.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
      setStatus("error");
    }
  };

  const field =
    "w-full px-6 py-4 rounded-2xl bg-brand-bg border-none focus:ring-2 focus:ring-brand-accent outline-none transition-shadow text-brand-text font-medium placeholder:text-brand-text/40";

  return (
    <section
      id="contact"
      className="py-24 bg-brand-surface rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-8 shadow-sm transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-brand-accent mb-3">05 / Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">Let&apos;s Connect</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
          <p className="mt-6 text-xl text-brand-text/70 font-medium max-w-2xl mx-auto">
            Have an idea or just want to connect? Send a message and it goes straight to my inbox.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-brand-text px-2">Name</label>
              <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={field} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-brand-text px-2">Email</label>
              <input type="email" id="email" name="email" required maxLength={200} autoComplete="email" placeholder="you@example.com" className={field} />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-brand-text px-2">Message</label>
            <textarea id="message" name="message" required rows={5} maxLength={5000} placeholder="How can I help you?" className={`${field} resize-none`} />
          </div>

          {/* Honeypot: hidden from people, filled by bots */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">Leave this field empty</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <p className="text-sm text-brand-text/60 px-2">
            By sending this form you agree to the handling of your details described in the{" "}
            <Link href="/privacy" className="underline hover:text-brand-accent">Privacy Policy</Link>.
          </p>

          <div role="status" aria-live="polite" className="px-2 min-h-6 font-medium">
            {status === "success" && (
              <p className="text-brand-text">Thanks, your message was sent. I will reply to your email soon.</p>
            )}
            {status === "error" && <p className="text-red-500">{error}</p>}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-accent text-white rounded-2xl text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </button>

            <div className="text-center md:text-right">
              <p className="text-brand-text/60 font-medium text-sm mb-1">Or email me directly at</p>
              <a
                href="mailto:info.contactpiyush@gmail.com"
                className="text-brand-text font-bold text-lg underline underline-offset-4 hover:text-brand-accent transition-colors"
              >
                info.contactpiyush@gmail.com
              </a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
