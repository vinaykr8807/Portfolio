import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, X, Info, Layers, Cpu } from "lucide-react";

import agriguardImg from "@/assets/project-agriguard.jpg";
import genaiImg from "@/assets/project-genai.jpg";
import emotionImg from "@/assets/project-emotion.jpg";
import codexImg from "@/assets/project-codex.jpg";

const projects = [
  {
    id: "agriguard",
    title: "AgriGuard AI",
    subtitle: "Climate-Smart Agriculture",
    description: "Production-grade agricultural advisory system combining ensemble AI (T5-PEFT + Climate-LoRA) with 10-year climate data to provide multilingual, context-aware farming insights.",
    details: "This system features a triple-model ensemble pipeline synthesizing T5-PEFT, Climate-LoRA, and Ollama Gemma 3 via Groq Llama-3.3-70B. It integrates real-time OpenMeteo data, scientifically-grounded NPK/pH scoring for 800+ districts, and 6 Indic language support with gTTS voice output for accessibility. Includes high-fidelity Plotly analytics for longitudinal climate trend analysis.",
    stack: ["Python", "Streamlit", "T5-PEFT", "Climate-LoRA", "Groq API", "OpenMeteo", "Plotly", "Hugging Face"],
    github: "https://github.com/vinaykr8807/AgriGuard-AI-Climate-Smart-Advisory-System",
    image: agriguardImg,
  },
  {
    id: "genai",
    title: "GenAI Enterprise Intelligence",
    subtitle: "Multi-Functional AI Assistant",
    description: "Enterprise AI platform integrating RAG pipelines and local LLMs to automate business functions across analytics, support, and compliance.",
    details: "This system features domain-specific intelligence with intent detection and a hybrid RAG pipeline (vector search + TF-IDF) indexing 44,000+ documents. It uses Ollama for local LLM deployment (Gemma 3) to ensure data privacy while providing real-time data analysis, marketing content generation, and operational decision support through a Streamlit interface.",
    stack: ["Python", "Streamlit", "Ollama", "Gemma 3", "FAISS", "RAG", "FastAPI"],
    github: "https://github.com/vinaykr8807/GenAI-Multi-Functional-Enterprise-Intelligence-Assistant",
    image: genaiImg,
  },
  {
    id: "emotion",
    title: "Emotion-Aware Learning Assistant",
    subtitle: "Dual-Neural Emotion Intelligence",
    description: "AI-powered learning companion that detects student emotions and provides personalized educational responses using dual neural networks (BiLSTM + BERT) with Gemini AI integration.",
    details: "This system features a sophisticated dual-model architecture combining BiLSTM for sequential processing and BERT for attention-based classification, achieving 94.2% accuracy. It classifies 5 emotions (Bored, Confident, Confused, Curious, Frustrated) and supports mixed sentiment detection. Integrated with Gemini 2.5 Flash for contextual learning support, it includes real-time analytics and a FastAPI backend for scalability.",
    stack: ["Python", "Streamlit", "TensorFlow", "Transformers", "BERT", "Gemini AI", "FastAPI"],
    github: "https://github.com/vinaykr8807/emotion-aware-learning-assistant",
    image: emotionImg,
  },
  {
    id: "codex",
    title: "CodeX Intelligence Hub",
    subtitle: "Autonomous AI Intelligence",
    description: "Enterprise-grade AI ecosystem acting as an autonomous intelligence layer, bridging the gap between static documentation and real-time code execution.",
    details: "CodeX leverages a high-availability RAG pipeline with FAISS and Groq for sub-second retrieval. It features Neural Code Search for semantic intent, a Polyglot Bridge for legacy code modernization, and Deep-RAG Bug Intelligence cross-referencing 277,000+ patterns. Includes a secure isolated sandbox for real-time snippet execution and validation.",
    stack: ["Python", "FAISS", "Groq", "RAG", "Neural-Search", "Deep-Logic", "Streamlit"],
    github: "https://github.com/vinaykr8807/Code-snippet-recommender",
    image: codexImg,
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in AI, Machine Learning, and Full-Stack Development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              layoutId={project.id}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer pipeline-card p-0 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-primary">
                      {project.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-black text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase text-muted-foreground/60 border border-border px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[10px] font-bold uppercase text-primary px-2 py-1">
                      +{project.stack.length - 3} More
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
            />

            <motion.div
              layoutId={selectedId}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[2rem] bg-card"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                  <img src={selectedProject.image} className="w-full h-full object-cover" />
                </div>

                <div className="lg:w-1/2 p-8 md:p-12">
                  <div className="mb-10">
                    <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-2">Technical Case Study</p>
                    <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tighter text-foreground">
                      {selectedProject.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic border-l-2 border-primary/30 pl-6">
                      "{selectedProject.description}"
                    </p>

                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                          <Layers className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-black text-sm uppercase tracking-widest mb-2 text-foreground">Architectural Overview</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {selectedProject.details}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                          <Cpu className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-black text-sm uppercase tracking-widest mb-2 text-foreground">Integrated Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.stack.map(tag => (
                              <span key={tag} className="text-[10px] font-bold uppercase py-1.5 px-3 rounded bg-white/5 border border-white/10 text-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-10 border-t border-white/5">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="flex-1 py-4 text-center rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs hover:opacity-90 transition-opacity"
                    >
                      Browse Source
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-colors border-white/10"
                    >
                      <Github className="w-6 h-6 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
