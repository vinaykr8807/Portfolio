import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2">Resume</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Get My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg">
            Download my resume to learn more about my education, experience, and technical skills.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/142f6BVSb-SAsbtOXH32_e1VOiWdQjvcn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card glow-border px-10 py-4 flex items-center gap-3 font-display font-semibold text-lg text-foreground"
          >
            <FileDown className="w-5 h-5 text-primary" />
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
