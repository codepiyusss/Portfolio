import { featured, smaller } from "@/data/projects";
import { IconLink } from "./Icons";
import { Section } from "./Section";
import { WebCorner } from "./WebCorner.tsx";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <WebCorner level={2} className="pointer-events-none absolute -right-6 top-10 h-40 w-40 sm:right-0 sm:h-56 sm:w-56" />

      <div>
        {featured.map((p) => (
          <article key={p.id} className="border-t border-line py-10">
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-muted">
                  {p.subtitle}
                  {p.role ? `. ${p.role}` : ""}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <IconLink href={p.code} icon="github">
                  Code
                </IconLink>
                {p.live && (
                  <IconLink href={p.live} icon="external" variant="primary">
                    Live demo
                  </IconLink>
                )}
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Part title="The problem">{p.problem}</Part>
              <Part title="What I built">{p.built}</Part>
              <Part title="How it works">{p.how}</Part>
            </div>

            <p className="mt-6 text-sm text-muted">Built with {p.stack.join(", ")}</p>
          </article>
        ))}
      </div>

      <h3 className="mb-2 mt-12 text-xl font-semibold">Smaller projects</h3>
      <ul className="border-b border-line">
        {smaller.map((p) => (
          <li key={p.id} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[15rem_1fr_auto] sm:gap-8">
            <div>
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-muted">{p.stack.join(", ")}</p>
            </div>
            <p className="text-ink/85">{p.description}</p>
            <p className="flex gap-5 sm:justify-end">
              <IconLink href={p.code} icon="github" variant="text">
                Code
              </IconLink>
              {p.live && (
                <IconLink href={p.live} icon="external" variant="text">
                  Live
                </IconLink>
              )}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8">
        <IconLink href="https://github.com/codepiyusss?tab=repositories" icon="github" variant="text">
          All repositories on GitHub
        </IconLink>
      </p>
    </Section>
  );
}

function Part({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-accent pt-3">
      <h4 className="mb-2 font-semibold">{title}</h4>
      <p className="text-ink/85">{children}</p>
    </div>
  );
}