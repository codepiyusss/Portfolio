import { Section } from "./Section";

const points = [
  {
    lead: "What I build.",
    text: "Machine learning projects in Python. The two main ones so far work with audio (VoxShield) and text (ATS Check), and both end up as a web app you can actually use.",
  },
  {
    lead: "How I work.",
    text: "I learn by building, then fixing what breaks. On VoxShield I led a team of six, and we took it from feature extraction all the way to a deployed API with a web interface.",
  },
  {
    lead: "What's next.",
    text: "I'm looking for an internship or entry-level role in machine learning or backend development, where I can keep building and learn from people who ship.",
  },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="mb-6 text-lg">Hello, I&apos;m Piyush.</p>
      <ul className="space-y-5">
        {points.map((p) => (
          <li key={p.lead} className="flex gap-4">
            <span aria-hidden="true" className="mt-[0.7rem] h-2 w-2 shrink-0 bg-accent-strong" />
            <p className="max-w-xl text-ink/90">
              <span className="font-semibold">{p.lead}</span> {p.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}