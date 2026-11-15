import { certificates } from "@/data/certificates";
import { featured, smaller } from "@/data/projects";

/** Numbers come straight from the data files, so they stay true when you add or remove things. */
export default function Stats() {
  const stats = [
    { value: "8.18", label: "CGPA, out of 10" },
    { value: String(featured.length + smaller.length), label: "Projects built" },
    { value: String(certificates.length), label: "Certificates earned" },
    { value: "6", label: "Team size led on VoxShield" },
  ];

  return (
    <div>
      <div aria-hidden="true" className="hatch h-5 border-y border-line" />
      <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-panel px-5 py-6 sm:px-6">
            <dd className="text-3xl font-semibold tracking-tight">{s.value}</dd>
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}