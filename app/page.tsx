import Navbar from "@/components/navbar";
import ScrollProgress from "@/components/scroll-progress";
import CustomCursor from "@/components/custom-cursor";
import Hero from "@/components/hero";
import StatStrip from "@/components/stat-strip";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Credentials from "@/components/credentials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-grid" aria-hidden />
      <div className="glow glow-1" aria-hidden />
      <div className="glow glow-2" aria-hidden />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Hero />
        <StatStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
