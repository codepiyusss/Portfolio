"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-surface rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-8 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl text-brand-text/90 leading-relaxed font-bold">
              &ldquo;I&apos;m a CS student exploring programming and AI. I enjoy building things, learning new technologies, and improving my skills step by step.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 text-center space-y-4"
          >
            <p className="text-base md:text-lg text-brand-text/60 font-medium leading-relaxed">
              I&apos;m pursuing a B.Tech in Computer Science & Engineering, with a focus on
              machine learning, backend engineering, and AI systems. Rather than just studying
              theory, I like to learn by building.
            </p>
            <p className="text-base md:text-lg text-brand-text/60 font-medium leading-relaxed">
              Outside of coursework, I spend most of my time shipping side projects, exploring
              new frameworks, and pushing code to GitHub — currently learning by building, one
              project at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: "Projects Shipped", value: "15+" },
              { label: "Core Language", value: "Python" },
              { label: "Focus Area", value: "AI / ML" },
              { label: "Currently", value: "B.Tech CSE" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-bg rounded-2xl px-4 py-5 text-center border border-brand-accent/10"
              >
                <p className="text-lg md:text-xl font-black text-brand-accent mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}