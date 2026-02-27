import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, Code } from "lucide-react";

const experienceData = [
    {
        title: "AI Development Intern",
        company: "Digital Academy (Remote)",
        period: "July 2024 - Dec 2024",
        icon: Building2,
        description: [
            "Engineered automated pest detection models using CNN architectures with 89% precision.",
            "Developed an AI diagnostic bot providing real-time treatment suggestions for farmers.",
            "Optimized training pipelines reducing model convergence time by 20% using mixed-precision training."
        ]
    },
    {
        title: "Open Source Contributor",
        company: "GitHub Community",
        period: "2023 - Present",
        icon: Code,
        description: [
            "Contributed modular ML components to RAG-based code assistants and educational tools.",
            "Collaborated on optimizing vector search performance for FAISS-based document retrieval.",
            "Refined API documentation for high-performance Python backends."
        ]
    },
    {
        title: "B.Tech in Computer Science",
        company: "S.R Group of Institutions, Jhansi",
        period: "2021 - 2025",
        icon: GraduationCap,
        description: [
            "Specializing in Artificial Intelligence and Machine Learning with a focused curriculum on Neural Networks.",
            "Led the Technical Society in hosting regional hackathons and seminars on LLM integrations.",
            "Achieved top-tier grades in core algorithms and data structure modules."
        ]
    }
];

const ExperiencePipeline = () => {
    return (
        <section id="experience" className="relative py-32 overflow-hidden bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-foreground">
                        Experience <span className="gradient-text">Pipeline.</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-24 md:space-y-32">
                        {experienceData.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.period}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {/* Pipeline Junction */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center">
                                        <div className="pipeline-dot" />
                                        <div className={`pipeline-branch ${isLeft ? "left-full" : "right-full scale-x-[-1]"}`} />
                                    </div>

                                    {/* Card */}
                                    <div className={`w-full md:w-[45%] ${isLeft ? "pipeline-item-left" : "pipeline-item-right"}`}>
                                        <div className="pipeline-card group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-display text-xl font-bold leading-tight text-foreground">{item.title}</h3>
                                                    <p className="text-primary font-medium text-sm">{item.company}</p>
                                                </div>
                                            </div>

                                            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-muted-foreground mb-4">
                                                {item.period}
                                            </p>

                                            <ul className="space-y-3">
                                                {item.description.map((bullet, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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

export default ExperiencePipeline;
