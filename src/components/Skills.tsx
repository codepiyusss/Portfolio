"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", desc: "Core language, building complex logic and algorithms." },
      { name: "Java", desc: "Solid foundation in OOP and structured backend systems." },
      { name: "JS / TS", desc: "Creating modern, interactive frontend web experiences." },
    ],
  },
  {
    title: "Learning Focus",
    skills: [
      { name: "AI Fundamentals", desc: "Exploring neural networks, deep learning logic, and AI modeling." },
      { name: "Web Development", desc: "Mastering Next.js, React, and seamless UI/UX design." },
      { name: "Machine Learning", desc: "Applying predictive logic and data structures." },
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <TiltCard key={skill.name} className="h-full">
                    <motion.div 
                      className="relative h-32 bg-brand-bg rounded-2xl border border-brand-accent/10 overflow-hidden cursor-default group"
                      whileHover="hover"
                    >
                      {/* Front Face */}
                      <motion.div 
                        variants={{ hover: { y: "-100%", opacity: 0 } }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center p-4 bg-brand-bg select-none"
                      >
                        <span className="text-xl font-bold text-brand-text text-center">{skill.name}</span>
                      </motion.div>
                      
                      {/* Revealed Back Face */}
                      <motion.div 
                        variants={{ initial: { y: "100%", opacity: 0 }, hover: { y: "0%", opacity: 1 } }}
                        initial="initial"
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center p-4 bg-brand-accent/10 select-none text-center"
                      >
                        <p className="text-sm font-medium text-brand-text/90 leading-tight">
                          {skill.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
