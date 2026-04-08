"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023",
    title: "Started Learning Programming",
    description: "Began my coding journey diving into fundamentals and basics of computer science.",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "Entered B.Tech (CSE)",
    description: "Joined Ramchandra Chandravanshi University to formalize my education in Computer Science & Engineering.",
    icon: "🎓",
  },
  {
    year: "2024-Present",
    title: "Exploring Python & AI",
    description: "Focusing heavily on Python development, AI concepts, and full-stack web technologies.",
    icon: "🤖",
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 mx-4 sm:mx-6 lg:mx-8 mb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">My Journey</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-accent/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={"relative flex items-center md:justify-between " + (isEven ? "md:flex-row-reverse" : "")}
                >
                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-brand-bg border-4 border-brand-accent rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,77,0,0.3)]">
                    <div className="w-2 h-2 bg-brand-text rounded-full" />
                  </div>

                  {/* Content Container */}
                  <div className={"ml-20 md:ml-0 md:w-5/12 " + (isEven ? "md:pl-12" : "md:pr-12 md:text-right")}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-brand-surface p-6 sm:p-8 rounded-3xl border border-brand-accent/5 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-sm font-bold text-brand-accent tracking-wider block mb-2">{item.year}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">{item.title}</h3>
                      <p className="text-brand-text/70 font-medium leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
