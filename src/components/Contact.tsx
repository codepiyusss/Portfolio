"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only UI form as requested
    alert("This is a UI prototype. Form submission is not wired to a backend yet.");
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-8 shadow-sm transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-4">Let&apos;s Connect</h2>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
          <p className="mt-6 text-xl text-brand-text/70 font-medium max-w-2xl mx-auto">
            Have an idea or just want to connect? Let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-brand-text px-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-bg border-none focus:ring-2 focus:ring-brand-accent outline-none transition-shadow text-brand-text font-medium placeholder:text-brand-text/40"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-brand-text px-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-bg border-none focus:ring-2 focus:ring-brand-accent outline-none transition-shadow text-brand-text font-medium placeholder:text-brand-text/40"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-brand-text px-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-6 py-4 rounded-2xl bg-brand-bg border-none focus:ring-2 focus:ring-brand-accent outline-none transition-shadow text-brand-text font-medium placeholder:text-brand-text/40 resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <button
                type="submit"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-accent text-white rounded-2xl text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="text-center md:text-right hidden sm:block">
                <p className="text-brand-text/60 font-medium text-sm mb-1">Or email me directly at</p>
                <a href="mailto:info.contactpiyush@gmail.com" className="text-brand-text font-bold text-lg hover:text-brand-accent transition-colors relative group">
                  info.contactpiyush@gmail.com
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
