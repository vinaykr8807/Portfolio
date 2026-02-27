import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Cpu, MessageSquare, Rocket } from "lucide-react";

const phases = [
  {
    icon: Code2,
    title: "Foundations",
    subtitle: "Language & Logic",
    items: ["C++, Python fundamentals", "DSA mastery", "FastAPI backends", "System architecture"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    subtitle: "Predictive Analytics",
    items: ["Regression & classification", "Feature engineering", "Model optimization", "Predictive systems"],
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    subtitle: "Neural Networks",
    items: ["CNNs for vision", "RNNs for sequences", "Multimodal AI", "Training pipelines"],
  },
  {
    icon: MessageSquare,
    title: "NLP & Transformers",
    subtitle: "Language Intelligence",
    items: ["Word2Vec & GloVe", "Attention mechanisms", "Transformer architecture", "BERT & LLM integrations"],
  },
  {
    icon: Rocket,
    title: "GenAI & Scale",
    subtitle: "Modern AI Systems",
    items: ["RAG pipelines", "Vector DBs (FAISS)", "Enterprise LLM assistants", "Real-time AI systems"],
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="blob blob-primary w-72 h-72 top-0 right-0 animate-pulse-glow" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-2">About Me</motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Overview</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            I specialize in designing and deploying intelligent AI systems that combine Machine Learning,
            Deep Learning, and LLM-powered architectures with scalable backend engineering.
            My focus is not only on building models — but on building{" "}
            <span className="text-foreground font-medium">complete AI ecosystems</span>.
          </motion.p>
        </motion.div>

        <div className="relative mt-24">
          <div className="journey-line hidden lg:block" />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
                  }}
                  className="relative group"
                >
                  <div className="journey-dot hidden lg:block -top-4" />

                  <div className="glass-card p-6 h-full hover-glow group transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1 opacity-70">
                      Step {i + 1}
                    </p>
                    <h4 className="font-display text-lg font-bold mb-1">{phase.title}</h4>
                    <p className="text-xs text-primary mb-4 font-medium">{phase.subtitle}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
