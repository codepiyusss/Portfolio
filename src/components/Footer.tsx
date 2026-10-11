import Link from "next/link";
import { socials } from "@/data/profile";
import { Icon } from "./Icons";
import ResumeViewer from "./ResumeViewer";
import { Section } from "./Section";

export function Footer({ compact = false }: { compact?: boolean }) {
  // Only show links that have an address filled in (see src/data/profile.ts).
  const links = socials.filter((s) => s.href);

  return (
    <footer className="border-t border-line">
      {!compact && (
        <>
          <Section id="resume" title="Resume">
            <ResumeViewer />
          </Section>

          <Section id="connect" title="Find me online" className="border-t border-line">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-md border border-line bg-surface p-4 hover:border-accent-text"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                        <Icon name={s.icon} size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold">{s.label}</span>
                        <span className="block break-words text-sm text-muted">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Section>
        </>
      )}

      <div className="border-t border-line py-10 text-sm text-muted">
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