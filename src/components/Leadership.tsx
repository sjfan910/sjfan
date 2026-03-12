import { motion } from 'motion/react';

const leadership = [
  {
    title: "Head of Digital Wellbeing Council (TDWC)",
    description: "Ran school-wide AI survey (94% adoption). Pivoted council strategy to teaching responsible AI use. Published \"How to 'Cheat' with AI\" — now the school's official AI resource."
  },
  {
    title: "Head of Programming Evening Society",
    description: "Weekly lectures on encryption, deep learning, NLP. Mentored 20 students (10 became regular lecturers). Monthly hackathons. Hosted speaker talk attracting 70 attendees."
  },
  {
    title: "Head Captain, Head Coach & Athlete — Fencing",
    description: "UK Junior Men's Sabre #11. Led team to 2nd nationally (first in a decade). Grew membership 30 → 50. Developed two sabreurs to top-80 nationally. Started aged 8 under Olympic champion Zhong Man."
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-muted uppercase tracking-widest mb-16"
      >
        04 — Leadership & Activities
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {leadership.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-display font-medium mb-4 leading-tight">
              {item.title}
            </h3>
            <div className="w-8 h-px bg-black/20 mb-6" />
            <p className="text-muted font-light leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
