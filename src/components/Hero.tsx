import { profile } from "@/data/profile";
import { IconLink } from "./Icons";
import { WebCorner } from "./WebCorner.tsx";

export default function Hero() {
  return (
    <section id="home" className="relative pb-24 pt-40 sm:pt-48">
      <WebCorner level={1} className="pointer-events-none absolute -right-6 top-16 h-36 w-36 sm:right-0 sm:h-56 sm:w-56" />

      <p className="mb-5 text-base text-muted">{profile.role}</p>
      <h1 className="text-[3rem] font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
        Piyush
        <br />
        Tiwari
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85">
        I&apos;m a B.Tech student at Ramchandra Chandravanshi University. I build machine learning projects in Python,
        and I&apos;m looking for internships and entry-level roles.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <IconLink href="#projects" icon="folder" variant="primary">
          View projects
        </IconLink>
        <IconLink href="#resume" icon="eye">
          View resume
        </IconLink>
        <IconLink href={profile.github} icon="github">
          GitHub
        </IconLink>
        <IconLink href={profile.linkedin} icon="linkedin">
          LinkedIn
        </IconLink>
      </div>
    </section>
  );
}