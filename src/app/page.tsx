import About from "@/components/About";
import Certificates from "@/components/Certificates";
import CommandPalette from "@/components/CommandPalette";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { SpiderThread } from "@/components/SpiderThread";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <SpiderThread />
      <CommandPalette />
      <div className="screen">
        <main id="main">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}