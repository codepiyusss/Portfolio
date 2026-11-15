import Link from "next/link";
import { socials } from "@/data/profile";
import { Icon } from "./Icons";
import ResumeViewer from "./ResumeViewer";
import { Section } from "./Section";

const meta = [
  { label: "Typeface", value: "Poppins" },
  { label: "Stack", value: "Next.js, React, Tailwind CSS" },
  { label: "Deployed on", value: "Vercel" },
  { label: "Source code", value: "GitHub", href: "https://github.com/codepiyusss/Portfolio" },
];

export function Footer({ compact = false }: { compact?: boolean }) {
  // Only show links that have an address filled in (see src/data/profile.ts).
  const links = socials.filter((s) => s.href);
  const odd = links.length % 2 === 1;

  return (
    <footer>
      {!compact && (
        <>
          <Section id="resume" title="Resume">
            <ResumeViewer />
          </Section>

          <Section id="connect" title="Find me online" flush>
            <ul className="grid gap-px bg-line sm:grid-cols-2">
              {links.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <li key={s.label} className="bg-panel">
                    <a
                      href={s.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 px-5 py-4 hover:bg-ink/[0.03] sm:px-6"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line group-hover:border-accent-strong group-hover:bg-accent-strong group-hover:text-on-accent">
                        <Icon name={s.icon} size={19} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold">{s.label}</span>
                        <span className="block break-words text-sm text-muted">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
              {odd && <li aria-hidden="true" className="hidden bg-panel sm:block" />}
            </ul>
          </Section>

          <div aria-hidden="true" className="hatch h-5 border-y border-line" />
          <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="bg-panel px-5 py-4 sm:px-6">
                <dt className="text-xs text-muted">{m.label}</dt>
                <dd className="text-sm font-medium">
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent-text">
                      {m.value}
                    </a>
                  ) : (
                    m.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </>
      )}

      <div className="border-t border-line px-5 py-10 text-sm text-muted sm:px-6">
        <p className="text-base text-ink">I&apos;m not the best yet, but I&apos;m improving every day.</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Piyush Tiwari</p>
          <nav aria-label="Footer" className="flex gap-6">
            <Link href="/#contact" className="hover:text-ink">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-ink">
              Privacy policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;