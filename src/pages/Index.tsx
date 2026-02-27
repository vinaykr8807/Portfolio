import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperiencePipeline from "@/components/ExperiencePipeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Animated Background System */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="animated-bg absolute inset-0 opacity-40 dark:opacity-100" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150 mix-blend-overlay" />

        {/* Dynamic Light Blobs */}
        <div className="blob blob-primary w-[500px] h-[500px] -top-48 -left-48 opacity-20 md:opacity-30 blur-[120px]" />
        <div className="blob blob-secondary w-[400px] h-[400px] top-1/2 -right-24 opacity-10 md:opacity-20 blur-[100px]" />
        <div className="blob blob-accent w-[600px] h-[600px] -bottom-48 left-1/4 opacity-10 md:opacity-25 blur-[140px]" />
      </div>

      <CustomCursor />
      <Navbar />

      <main className="relative selection:bg-primary/30">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <ExperiencePipeline />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
