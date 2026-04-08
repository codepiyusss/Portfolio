import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Skills } from "@/components/Skills";
import { Journey } from "@/components/Journey";
import Projects from "@/components/Projects";
import { Goals } from "@/components/Goals";
import { Statement } from "@/components/Statement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Goals />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
