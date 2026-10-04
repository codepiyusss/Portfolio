"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.79 4.79 0 0 0 9 18v4"></path>
    </svg>
  );
}

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "VoxShield",
    description:
      "An AI system that protects digital communications against audio deepfakes. It analyzes audio to detect synthesized voices and help prevent voice-cloning impersonation.",
    tech: ["JavaScript", "AI / Audio Analysis"],
    github: "https://github.com/codepiyusss/VoxShield",
    live: "https://voxshield-psi.vercel.app",
  },
  {
    title: "RepoPilot-AI",
    description:
      "A college project built with Flask that explores the GitHub REST API. Paste a repo link and see its stats, activity, and details on a dashboard.",
    tech: ["Python", "Flask", "GitHub API"],
    github: "https://github.com/codepiyusss/RepoPilot-AI",
    live: "https://repo-pilot-ai-tau.vercel.app",
  },
  {
    title: "ATS-Check",
    description:
      "A Flask web app that analyzes PDF resumes for ATS compatibility. It flags missing keywords, checks formatting, and suggests improvements.",
    tech: ["Python", "Flask", "AI"],
    github: "https://github.com/codepiyusss/ATS-Check",
  },
  {
    title: "RCU-Connect",
    description:
      "A JavaScript web app built to help students at my university connect, share, and stay in the loop with campus life and resources.",
    tech: ["JavaScript", "Web App"],
    github: "https://github.com/codepiyusss/RCU-Connect",
  },
  {
    title: "Hotel Management System",
    description:
      "A Python-based hotel management system for handling room bookings, guest records, and billing through a structured console interface.",
    tech: ["Python"],
    github: "https://github.com/codepiyusss/hotel-management-system-in-python",
  },
  {
    title: "Weather Dashboard",
    description:
      "A Python weather dashboard that fetches live weather data and presents current conditions in a simple, readable interface.",
    tech: ["Python"],
    github: "https://github.com/codepiyusss/WEATHER-DASHBOARD",
  },
  {
    title: "Student Result Management System",
    description:
      "A Python application for recording student marks, computing results, and managing academic records efficiently.",
    tech: ["Python"],
    github: "https://github.com/codepiyusss/Student-Result-Management-System",
  },
  {
    title: "Password Strength Checker",
    description:
      "A clean, modern Tkinter-based GUI app that checks the strength of a user-entered password in real time.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/codepiyusss/Password-Strength-Checker",
  },
];

export default function Projects() {
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
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-brand-accent mb-3">03 / Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">Projects</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
          <p className="mt-6 text-lg text-brand-text/60 font-medium max-w-2xl mx-auto">
            A selection of things I&apos;ve built while learning, from AI-powered tools to
            practical Python systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative bg-brand-surface rounded-3xl p-8 border border-brand-accent/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[300px] group"
                >

                  <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                    <GithubIcon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-text mb-3">{project.title}</h3>
                  <p className="text-brand-text/60 font-medium text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-brand-bg text-brand-text/70 text-xs font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-brand-accent/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-text hover:text-brand-accent transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-text hover:text-brand-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/codepiyusss?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-accent/20 text-brand-text font-bold hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4" /> See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}