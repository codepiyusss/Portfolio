"use client";

import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="py-32 mx-4 sm:mx-6 lg:mx-8 mb-8 overflow-hidden relative rounded-[3rem] bg-brand-surface shadow-sm border border-brand-accent/5">
      <div className="absolute inset-0 bg-brand-accent/5" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-brand-accent text-6xl md:text-8xl leading-none font-black opacity-20 absolute -top-10 left-12 md:left-24 select-none">"</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-text leading-tight tracking-tight px-8">
            I’m not the best yet, <br/>but I’m improving <br/>
            <span className="text-brand-accent relative inline-block">
              every day.
              <motion.span 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 h-2 bg-brand-accent/30 rounded-full" 
              />
            </span>
          </h2>
          <span className="text-brand-accent text-6xl md:text-8xl leading-none font-black opacity-20 absolute -bottom-16 right-12 md:right-24 select-none">"</span>
        </motion.div>
      </div>
    </section>
  );
}
