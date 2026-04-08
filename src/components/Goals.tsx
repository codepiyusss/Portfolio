"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Target, Lightbulb } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export function Goals() {
  const visions = [
    {
      title: "AI Engineer",
      desc: "Deeply focused on mastering artificial intelligence and machine learning engineering.",
      icon: <BrainCircuit className="w-10 h-10 text-brand-accent" />,
    },
    {
      title: "Impactful Tech",
      desc: "Committed to building digital experiences that actually solve problems beautifully.",
      icon: <Target className="w-10 h-10 text-brand-accent" />,
    },
    {
      title: "Continuous Learning",
      desc: "Always exploring new frameworks, languages, and optimizing the development process.",
      icon: <Lightbulb className="w-10 h-10 text-brand-accent" />,
    },
  ];

  return (
    <section id="goals" className="py-24 mx-4 sm:mx-6 lg:mx-8 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">What I'm Working Towards</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {visions.map((vision, idx) => (
            <TiltCard key={vision.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-brand-surface border border-brand-accent/5 rounded-3xl p-8 h-full flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-brand-accent/20 transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {vision.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-3">{vision.title}</h3>
                <p className="text-brand-text/60 font-medium leading-relaxed">{vision.desc}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
