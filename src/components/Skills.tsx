import { motion } from 'motion/react';

const skills = [
  {
    category: "AI/ML",
    items: ["Machine Learning", "NLP", "LLMs", "Transformers", "Sentiment Analysis", "Cognitive Load Prediction", "Generative AI", "EEG/EOG/EDA Signal Processing"]
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "SQL", "HTML/CSS", "LaTeX"]
  },
  {
    category: "Full-Stack",
    items: ["React", "Next.js", "Node.js", "Vercel", "Nginx"]
  },
  {
    category: "Tools",
    items: ["Git", "Raspberry Pi", "Linux Server Administration"]
  },
  {
    category: "Interpersonal",
    items: ["Cross-Cultural Communication", "Peer Mentoring & Coaching", "Public Speaking", "Patient-Centred Care", "Observational Problem-Solving"]
  },
  {
    category: "Other",
    items: ["Academic Publication", "Certified Fencing Referee", "Coursera (Deep Learning, AP Physics C)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-muted uppercase tracking-widest mb-16"
      >
        06 — Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-display font-medium mb-6 pb-4 border-b border-black/5">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-light bg-black/5 text-foreground/80 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
