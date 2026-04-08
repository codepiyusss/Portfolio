"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-accent/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-brand-text hover:text-brand-accent transition-colors">
              Piyush.
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text/80 hover:text-brand-accent text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <MagneticButton>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-brand-accent text-white text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Connect
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-accent transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-accent/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brand-text/80 hover:text-brand-accent hover:bg-brand-accent/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
