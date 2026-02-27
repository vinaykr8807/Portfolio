import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.webp";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: y1, opacity }} className="parallax-layer">
        <div className="blob blob-primary w-96 h-96 -top-20 -left-20 animate-pulse-glow" />
        <div className="blob blob-secondary w-80 h-80 top-1/3 right-0 animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="blob blob-accent w-64 h-64 bottom-20 left-1/4 animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: y2 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
            AI Systems Engineer
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
            AI Engineer &{" "}
            <span className="gradient-text">Full-Stack Intelligence</span>
            <br />
            Systems Developer
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed">
            Building scalable, production-ready AI systems that merge Machine Learning,
            Generative AI, and real-time architectures into impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href="#projects"
              className="glass-card hover-glow px-8 py-3 font-medium text-foreground flex items-center gap-2 group"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/142f6BVSb-SAsbtOXH32_e1VOiWdQjvcn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <FileDown className="w-4 h-4" />
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-60 blur-lg" />
            <img
              src={profileImg}
              alt="Vinay Kumar"
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-border shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
