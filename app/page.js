import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="flex flex-col items-center justify-center px-2 md:px-0">
        <About />
        <Projects />
        <Achievements/>
        <Experience />
        <Contact />
        <Footer />

      </div>
    </main>
  );
}