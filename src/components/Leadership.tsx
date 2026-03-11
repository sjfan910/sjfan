import { motion } from 'motion/react';

const leadership = [
  {
    title: "Head of Digital Wellbeing Council (TDWC)",
    description: "Led a decade-old school council. Pivoted strategy from discouraging tech to teaching responsible use. Ran school-wide AI survey (94% adoption finding). Organised Digital Wellbeing Day. Delivered chapel talk on responsible technology. Published \"How to 'Cheat' with AI\" guide, now the school's official AI resource."
  },
  {
    title: "Head of Programming Evening Society",
    description: "Pioneered peer-teaching model. Delivered weekly lectures on encryption, deep learning, NLP. Taught AI workflow integration and prompt engineering. Mentored 20 students on lecture creation (10 became regular lecturers). Organised monthly hackathons for 20 participants. Hosted visiting speaker talk attracting 70 attendees."
  },
  {
    title: "Sabre Fencing — Head Captain, Coach, Certified Referee",
    description: "UK Junior Men's Sabre #11. Led team to 2nd nationally (first time in 10 years). Grew participation from 30 to 50 members. Designed training plans, led post-match video analysis. As Coach: mentored across schools/genders weekly, developed two sabreurs to 40th and 80th nationally. Started fencing age 8 in Beijing under 2008 Olympic champion Zhong Man."
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
        05 — Leadership & Activities
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
