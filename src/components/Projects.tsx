import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Multimodal Sentiment Analysis & Music Therapy System",
    description: "AI system combining EEG, EOG, and facial biosignals to detect emotional states and deliver personalised music therapy for elderly nursing home residents. Two-model pipeline: multimodal sentiment analysis (97.5% accuracy) paired with Transformer-based music generation. 9-month research collaboration.",
    tags: ["Python", "Deep Learning", "EEG/EOG", "Transformer", "Multimodal AI", "Eldercare", "Published Research"],
    link: "#"
  },
  {
    title: "EDA-Based Cognitive Load Prediction",
    description: "Developed EDA-based cognitive load prediction system using PhysioNet n-back dataset. Designed a 3-task framework comparing 4 ML models to assess wearable biosignals as an accessible alternative to expensive EEG/EOG equipment for elderly care.",
    tags: ["Python", "Signal Processing", "EDA", "Machine Learning", "PhysioNet", "Published Research"],
    link: "#"
  },
  {
    title: "SeniorLink",
    description: "AI cognitive-engagement platform for seniors. Built as CEO of a four-member team for a top business school's Model Entrepreneur Competition. Selected as China Regional Finalist (top 5%). Conducted market research on a $300B dementia care market, designed revenue models, and built pitch deck.",
    tags: ["Entrepreneurship", "AI", "Eldercare", "Market Research", "Pitch Deck"],
    link: "#"
  },
  {
    title: "LearnToGive",
    description: "Co-founded nonprofit online tutoring platform connecting students across countries, donating 100% of revenue to fund scholarships for underprivileged children in rural Thailand. Built full-stack platform with lesson booking, donation flow, and an embedded AI assistant.",
    tags: ["React", "Next.js", "Full-Stack", "AI Integration", "Nonprofit"],
    link: "https://learntogive.net"
  },
  {
    title: "Boggle Game (A-Level NEA)",
    description: "Full-featured word game built with PyQt5. Implements DFS with Trie-based prefix pruning, beam search AI helper, game history tracking, and comprehensive UML documentation.",
    tags: ["Python", "PyQt5", "DFS", "Trie", "Beam Search", "Software Engineering"],
    link: "#"
  },
  {
    title: "AlgoForge",
    description: "Interactive A-Level Computer Science revision platform with algorithm visualisations and practice problems.",
    tags: ["Web Dev", "JavaScript", "Education", "Algorithms"],
    link: "#"
  },
  {
    title: "\"How to 'Cheat' with AI\"",
    description: "Published guide demystifying LLMs, AI hallucination, and responsible AI use. Adopted as the school's official AI resource for all students.",
    tags: ["AI Literacy", "Writing", "Policy", "Education"],
    link: "#"
  },
  {
    title: "\"Whispers of War\" WWII Memoir Project",
    description: "Oral history project recording WWII memories from elderly day centre residents. Combines eldercare, storytelling, and intergenerational connection.",
    tags: ["Oral History", "Eldercare", "Community"],
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
