import { Section } from "./Section";
import SkillExplorer from "./SkillExplorer";

export default function Skills() {
  return (
    <Section id="stack" title="Stack">
      <p className="mb-8 max-w-xl text-muted">
        Select a skill to see where I used it. Greyed-out skills are ones I&apos;ve learned but haven&apos;t used in a
        project shown here yet.
      </p>
      <SkillExplorer />
    </Section>
  );
}