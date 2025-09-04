import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Achievements from "@/components/Achievements";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <div className="fixed bottom-24 lg:bottom-16 right-8 lg:right-24 z-50">
        <a
          href="/Nayan_das_CV.pdf"
          download
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
        >
          <Download className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="hidden md:block">Resume</span>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center px-2 md:px-0">
        <About />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
