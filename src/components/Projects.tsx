"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export default function Projects() {
  const placeholders = [1, 2, 3];

  return (
    <section id="projects" className="py-24 mx-4 sm:mx-6 lg:mx-8 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">Projects</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholders.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-brand-surface rounded-3xl p-8 border border-brand-accent/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[300px] group h-full"
                >
                  <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                    <FolderGit2 className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text mb-3">Project {item}</h3>
                  <p className="text-brand-text/60 font-medium">Coming Soon</p>
                  
                  <div className="mt-8 w-full h-2 bg-brand-bg rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-accent/20"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
                    />
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
