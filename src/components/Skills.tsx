"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
      { name: "JavaScript / TS", level: 50 },
    ],
  },
  {
    title: "Actively Learning",
    skills: [
      { name: "AI Fundamentals", level: 80 },
      { name: "Web Development", level: 70 },
      { name: "Machine Learning Concepts", level: 65 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 mx-4 sm:mx-6 lg:mx-8 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">Detailed Skills & Focus</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-brand-surface rounded-[3rem] p-8 sm:p-12 border border-brand-accent/5 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-brand-accent animate-pulse" />
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="relative group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-lg font-bold text-brand-text">{skill.name}</span>
                      <span className="text-sm font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">Level Indicator</span>
                    </div>
                    {/* Modern Abstract "Progress" Visualization */}
                    <div className="h-3 w-full bg-brand-bg rounded-full overflow-hidden flex gap-1">
                      {[...Array(10)].map((_, dotIdx) => {
                        const isActive = dotIdx < Math.ceil(skill.level / 10);
                        return (
                          <motion.div
                            key={dotIdx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: sIdx * 0.1 + dotIdx * 0.05 }}
                            className={"h-full flex-1 rounded-sm " + (isActive ? "bg-brand-accent" : "bg-brand-text/5")}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
