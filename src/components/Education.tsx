import { education } from "@/data/profile";
import { Icon } from "./Icons";
import { Section } from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line">
          <Icon name="cap" size={20} />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug">{education.university}</h3>
          <dl className="mt-3 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-[auto_1fr]">
            <dt className="text-muted">Study period</dt>
            <dd className="font-medium">{education.years}</dd>
            <dt className="text-muted">Degree</dt>
            <dd className="font-medium">{education.degree}</dd>
            <dt className="text-muted">Field of study</dt>
            <dd className="font-medium">{education.field}</dd>
            <dt className="text-muted">CGPA</dt>
            <dd className="font-medium">{education.cgpa}</dd>
          </dl>
          <p className="mb-2 mt-5 text-sm text-muted">Relevant coursework</p>
          <ul className="flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <li key={c} className="rounded border border-line px-2 py-0.5 text-xs font-medium">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}