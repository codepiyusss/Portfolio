"use client";

import { useState } from "react";
import { skillGroups } from "@/data/profile";
import { projectIndex } from "@/data/projects";
import { IconLink } from "./Icons";

const allSkills = skillGroups.flatMap((g) => g.items);
const NOT_YET = "I've learned this, but it isn't in one of the projects shown here yet.";

/**
 * Pick a skill and see which of my projects used it.
 * Skills with no project are greyed out, so the page never claims more than the projects show.
 */
export default function SkillExplorer() {
  const [selected, setSelected] = useState("Python");
  const skill = allSkills.find((s) => s.name === selected) ?? allSkills[0];
  // Ignore ids of projects that were removed from projects.ts.
  const projects = skill.projects.filter((id) => id in projectIndex);
  const count = projects.length;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
      <div className="space-y-8">
        {skillGroups.map((g) => (
          <div key={g.group}>
            <h3 className="mb-3 text-sm font-semibold text-muted">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => {
                const active = s.name === selected;
                return (
                  <button
                    key={s.name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelected(s.name)}
                    className={`rounded-md border px-3.5 py-2 text-sm font-medium ${
                      active
                        ? "border-accent bg-accent text-on-accent"
                        : `border-line bg-surface hover:border-muted ${s.projects.length ? "text-ink" : "text-muted"}`
                    }`}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <aside
        aria-live="polite"
        className="self-start rounded-md border border-line border-l-accent bg-surface p-6 lg:sticky lg:top-24"
        style={{ borderLeftWidth: 3 }}
      >
        <h3 className="text-2xl font-semibold tracking-tight">{skill.name}</h3>
        {count > 0 ? (
          <>
            <p className="mt-1 text-muted">
              Used in {count} {count === 1 ? "project" : "projects"}
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {projects.map((id) => (
                <li key={id} className="flex items-center justify-between gap-4 py-3">
                  <span className="font-medium">{projectIndex[id].title}</span>
                  <IconLink href={projectIndex[id].code} icon="github" variant="text">
                    Code
                  </IconLink>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-2 text-ink/85">{skill.note ?? NOT_YET}</p>
        )}
      </aside>
    </div>
  );
}