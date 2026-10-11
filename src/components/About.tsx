import { education } from "@/data/profile";
import { Section } from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-9">
          <Block title="What I build">
            Machine learning projects in Python. The two main ones so far work with audio (VoxShield) and text (ATS
            Check), and both end up as a web app you can actually use.
          </Block>
          <Block title="How I work">
            I learn by building, then fixing what breaks. On VoxShield I led a team of six, and we took it from feature
            extraction all the way to a deployed API with a web interface.
          </Block>
          <Block title="What's next">
            I&apos;m looking for an internship or entry-level role in machine learning or backend development, where I
            can keep building and learn from people who ship.
          </Block>
        </div>

        <div className="self-start border-l-[3px] border-accent pl-6">
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="mt-3 font-medium">{education.university}</p>
          <p className="text-ink/85">{education.degree}</p>
          <p className="mt-1 text-muted">
            {education.years}. CGPA {education.cgpa}
          </p>
          <p className="mt-5 text-sm font-medium">Relevant coursework</p>
          <p className="text-sm text-muted">{education.coursework.join(", ")}</p>
        </div>
      </div>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="max-w-xl text-lg leading-relaxed text-ink/85">{children}</p>
    </div>
  );
}