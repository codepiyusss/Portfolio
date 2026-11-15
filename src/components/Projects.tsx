import { featured, smaller } from "@/data/projects";
import { Icon, IconLink } from "./Icons";
import { Section } from "./Section";
import { WebCorner } from "@/components/WebCorner";

const tag = "rounded border border-line px-2 py-0.5 text-xs font-medium";

function Row({
  title,
  subtitle,
  open,
  children,
}: {
  title: string;
  subtitle: string;
  open?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <details open={open} className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 hover:bg-ink/[0.03] sm:px-6">
          <span className="min-w-0">
            <span className="block font-semibold">{title}</span>
            <span className="block text-sm text-muted">{subtitle}</span>
          </span>
          <Icon name="chevron" size={18} className="shrink-0 text-muted transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-5 pb-7 pt-1 sm:px-6">{children}</div>
      </details>
    </li>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" count={featured.length + smaller.length} flush>
      <WebCorner level={2} className="pointer-events-none absolute right-0 top-5 h-28 w-28 sm:h-40 sm:w-40" />

      <ul className="divide-y divide-line">
        {featured.map((p, i) => (
          <Row key={p.id} title={p.title} subtitle={p.role ? `${p.subtitle}. ${p.role}` : p.subtitle} open={i === 0}>
            <div className="mb-5 flex flex-wrap gap-3">
              <IconLink href={p.code} icon="github">
                Code
              </IconLink>
              {p.live && (
                <IconLink href={p.live} icon="external" variant="primary">
                  Live demo
                </IconLink>
              )}
            </div>
            <dl className="space-y-4">
              {[
                ["The problem", p.problem],
                ["What I built", p.built],
                ["How it works", p.how],
              ].map(([label, text]) => (
                <div key={label} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.7rem] h-2 w-2 shrink-0 bg-accent-strong" />
                  <div>
                    <dt className="font-semibold">{label}</dt>
                    <dd className="max-w-xl text-ink/90">{text}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
              {p.stack.map((t) => (
                <li key={t} className={tag}>
                  {t}
                </li>
              ))}
            </ul>
          </Row>
        ))}

        {smaller.map((p) => (
          <Row key={p.id} title={p.title} subtitle={p.stack.join(", ")}>
            <p className="max-w-xl text-ink/90">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <IconLink href={p.code} icon="github" variant="text">
                Code
              </IconLink>
              {p.live && (
                <IconLink href={p.live} icon="external" variant="text">
                  Live demo
                </IconLink>
              )}
            </div>
          </Row>
        ))}
      </ul>

      <div className="border-t border-line px-5 py-4 sm:px-6">
        <IconLink href="https://github.com/codepiyusss?tab=repositories" icon="github" variant="text">
          All repositories on GitHub
        </IconLink>
      </div>
    </Section>
  );
}