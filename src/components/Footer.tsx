"use client";

import Link from "next/link";
import { Mail, Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/components/SoundContext";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.79 4.79 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isMuted, toggleMute } = useSound();

  return (
    <footer className="relative mt-20 pt-16 pb-8 bg-brand-surface overflow-hidden border-t border-brand-accent/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-brand-text mb-2 tracking-tight">Piyush Tiwari</h3>
            <p className="text-brand-text/60 font-medium text-sm">CS student | Python and AI</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/codepiyusss"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-accent/10 flex items-center justify-center text-brand-text/80 hover:text-brand-accent hover:border-brand-accent hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-tiwari-b984a0356/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-accent/10 flex items-center justify-center text-brand-text/80 hover:text-brand-accent hover:border-brand-accent hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:info.contactpiyush@gmail.com"
              className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-accent/10 flex items-center justify-center text-brand-text/80 hover:text-brand-accent hover:border-brand-accent hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-accent/10 flex items-center justify-center text-brand-text/80 hover:text-brand-accent hover:border-brand-accent hover:-translate-y-1 transition-all duration-300"
              aria-label={isMuted ? "Turn click sounds on" : "Turn click sounds off"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-accent/10 text-center flex flex-col md:flex-row justify-between items-center text-brand-text/40 text-sm font-medium gap-4">
          <p>
            &copy; {currentYear} Piyush Tiwari. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex items-center gap-6">
            <Link href="/#contact" className="hover:text-brand-accent transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
