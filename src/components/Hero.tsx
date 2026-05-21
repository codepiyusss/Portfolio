"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { Typewriter } from "@/components/Typewriter";

export default function Hero() {
  const name = "Piyush Tiwari";
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background sliding text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="whitespace-nowrap"
        >
          <h1 className="text-[15rem] font-bold text-brand-text">
            AI ENGINEER DEVELOPER AI ENGINEER DEVELOPER
          </h1>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-8 cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          Available for opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-text tracking-tight mb-6 flex justify-center flex-wrap gap-x-6">
          <span className="flex">
            {"Piyush".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.1, color: "var(--accent)", rotate: Math.random() * 10 - 5 }}
                transition={{ duration: 0.5, delay: i * 0.05, type: "spring", stiffness: 200 }}
                className="inline-block cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span className="flex text-brand-accent">
            {"Tiwari".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.1, color: "var(--primary-text)", rotate: Math.random() * 10 - 5 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05, type: "spring", stiffness: 200 }}
                className="inline-block cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-brand-text/70 font-medium max-w-2xl mx-auto mb-10 cursor-default h-8"
        >
          <Typewriter strings={["Learning AI...", "Building projects...", "Improving daily..."]} pauseTime={2000} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <MagneticButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-text text-brand-bg rounded-full text-lg font-bold overflow-hidden transition-transform hover:scale-[1.02] active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-accent origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Connect <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
