import { Section } from "./Section";
import SkillExplorer from "./SkillExplorer";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className="-mt-4 mb-10 max-w-xl text-muted">
        Select a skill to see where I used it. Greyed-out skills are ones I&apos;ve learned but haven&apos;t used in a
        project shown here yet.
      </p>
      <SkillExplorer />
    </Section>
  );
}