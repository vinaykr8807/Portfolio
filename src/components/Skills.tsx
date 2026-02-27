import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "PyTorch & TensorFlow", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Generative AI (RAG, LLMs)", level: 95 },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "FastAPI & Express", level: 88 },
      { name: "PostgreSQL & Redis", level: 82 },
      { name: "Vector Databases (FAISS)", level: 90 },
      { name: "Docker & CI/CD", level: 85 },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "TypeScript / React", level: 80 },
      { name: "LangChain", level: 92 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs font-bold text-primary">{level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="skill-bar-fill"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="blob blob-accent w-[600px] h-[600px] top-1/2 -left-48 -translate-y-1/2 opacity-10" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Core Competencies</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * ci }}
              className="glass-card p-8 border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
            >
              <h3 className="font-display text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.1 * si + 0.2 * ci}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
