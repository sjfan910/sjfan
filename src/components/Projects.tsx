import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Multimodal Sentiment Analysis & Music Therapy System",
    description: "AI system combining EEG, EOG, and facial biosignals to detect emotional states and deliver personalised music therapy for elderly nursing home residents. Two-model pipeline: multimodal sentiment analysis (97.5% accuracy) paired with Transformer-based music generation. 9-month research with Prof. Yang Yi (Tsinghua University). Published at MEHSS 2025.",
    tags: ["Python", "Deep Learning", "EEG/EOG", "Transformer", "Multimodal AI", "Eldercare"],
    link: "#"
  },
  {
    title: "EDA-Based Cognitive Load Prediction",
    description: "Cognitive load prediction system using PhysioNet n-back dataset and electrodermal activity sensors. 3-task framework comparing 4 ML models, assessing wearable biosignals as an accessible alternative to expensive EEG/EOG equipment. Published through Cambridge Centre for International Research.",
    tags: ["Python", "Signal Processing", "EDA", "Machine Learning", "PhysioNet"],
    link: "#"
  },
  {
    title: "SeniorLink",
    description: "AI cognitive-engagement platform for seniors. Built as CEO of a four-member team for Columbia Business School's Model Entrepreneur Competition. China Regional Finalist (top 5%). Conducted market research on a $300B dementia care market, designed revenue models, built pitch deck.",
    tags: ["Entrepreneurship", "AI", "Eldercare", "Market Research"],
    link: "#"
  },
  {
    title: "LearnToGive",
    description: "Co-founded nonprofit tutoring platform donating 100% of revenue to fund scholarships for underprivileged children. As CTO, built the full-stack platform with lesson booking, tutor sign-up, donations, live impact stats, and an embedded AI assistant (\"Adam\"). Operates across the UK, US, China, Thailand, and France. £1,800+ raised.",
    tags: ["React", "Next.js", "Vercel", "Full-Stack", "AI Integration", "Nonprofit"],
    link: "https://learntogive.net"
  },
  {
    title: "Boggle Game (A-Level NEA)",
    description: "Word game implementing DFS with Trie-based prefix pruning, beam search AI helper, and game history tracking. Comprehensive UML documentation.",
    tags: ["Python", "PyQt5", "DFS", "Trie", "Beam Search"],
    link: "#"
  },
  {
    title: "\"How to 'Cheat' with AI\"",
    description: "Guide demystifying LLMs, AI hallucination, and responsible AI use. Adopted as Tonbridge School's official AI resource for all students.",
    tags: ["AI Literacy", "Writing", "Policy", "Education"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-muted uppercase tracking-widest mb-16"
      >
        02 — Selected Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group block relative"
          >
            <div className="p-8 md:p-10 h-full bg-black/[0.02] hover:bg-black/[0.04] rounded-2xl transition-all duration-500 flex flex-col hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl md:text-2xl font-display font-medium leading-tight pr-8">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted hover:text-foreground"
                >
                  <ArrowUpRight size={24} />
                </a>
              </div>

              <p className="text-muted font-light leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-white text-foreground/70 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
