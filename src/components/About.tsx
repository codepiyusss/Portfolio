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
              &ldquo;I&apos;m a Computer Science student exploring programming and AI. I enjoy building things, learning new technologies, and improving my skills step by step.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
