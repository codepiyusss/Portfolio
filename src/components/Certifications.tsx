import { timeline } from "@/data/profile";
import { Section } from "./Section";

/** Education and certifications as a timeline that ends on what's next. */
export default function Certifications() {
  return (
    <Section id="timeline" title="Learning timeline">
      <ol className="ml-1 border-l border-line">
        {timeline.map((t) => (
          <li key={t.when} className="relative grid gap-1 pb-10 pl-8 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <span className="absolute -left-[6px] top-[0.55rem] h-[11px] w-[11px] rounded-full border-2 border-ink bg-bg" />
            <p className="font-semibold">{t.when}</p>
            <ul className="space-y-2">
              {t.items.map((i) => (
                <li key={i} className="text-ink/85">
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="relative grid gap-1 pl-8 sm:grid-cols-[8rem_1fr] sm:gap-6">
          <span className="absolute -left-[6px] top-[0.55rem] h-[11px] w-[11px] rounded-full border-2 border-dashed border-accent-text bg-bg" />
          <p className="font-semibold text-accent-text">Next</p>
          <p className="text-ink/85">An internship or entry-level role in machine learning or backend development.</p>
        </li>
      </ol>
    </Section>
  );
}