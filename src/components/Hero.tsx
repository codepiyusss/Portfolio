import Image from "next/image";
import { education, profile, socials } from "@/data/profile";
import { Icon, IconLink, type IconName } from "./Icons";
import { WebCorner } from "@/components/WebCorner";

const overview: { icon: IconName; text: React.ReactNode }[] = [
  {
    icon: "cap",
    text: (
      <>
        B.Tech CSE (AI/ML) student @ <span className="font-semibold">{education.university}</span>
      </>
    ),
  },
  { icon: "pin", text: profile.location },
  { icon: "briefcase", text: "Open to internships and entry-level roles" },
];

export default function Hero() {
  const links = socials.filter((s) => s.href);

  return (
    <section id="home" className="pt-14">
      {/* Cover */}
      <div className="hatch relative h-36 overflow-hidden border-b border-line sm:h-48">
        <WebCorner level={1} className="pointer-events-none absolute right-0 top-0 h-40 w-40 sm:h-52 sm:w-52" />
      </div>

      <div className="px-5 pb-10 sm:px-6">
        {/* Avatar overlaps the cover */}
        <div className="relative z-10 -mt-12 h-24 w-24 overflow-hidden rounded-2xl border-4 border-panel bg-bg ring-1 ring-line sm:-mt-14 sm:h-28 sm:w-28">
          {profile.avatar ? (
            <Image src={profile.avatar} alt="Piyush Tiwari" fill sizes="112px" className="object-cover" priority />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-3xl font-bold tracking-tight sm:text-4xl">
              PT
            </span>
          )}
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
        <p className="mt-1 text-lg text-muted">{profile.role}</p>

        <ul className="mt-6 space-y-2.5">
          {overview.map((row, i) => (
            <li key={i} className="flex items-start gap-3">
              <Icon name={row.icon} size={18} className="mt-1 shrink-0 text-muted" />
              <span>{row.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <IconLink href="#projects" icon="folder" variant="primary">
            View projects
          </IconLink>
          <IconLink href="#resume" icon="eye">
            View resume
          </IconLink>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social links">
          {links.map((s) => (
            <li key={s.label}>
              <IconLink href={s.href} icon={s.icon} variant="chip">
                {s.label}
              </IconLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}