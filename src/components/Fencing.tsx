import { motion } from 'motion/react';

export default function Fencing() {
  const achievements = [
    "UK Junior Men's Sabre: Ranked #11 nationally",
    "Led team to 2nd nationally (first time in a decade)",
    "Head Captain, Head Coach, Level 2 Certified Referee",
    "Grew club from 30 to 50 members",
    "Developed two sabreurs to top-80 nationally",
    "Started age 8 in Beijing under Olympic champion Zhong Man",
    "Donates 100% of refereeing earnings to team equipment fund"
  ];

  return (
    <section id="fencing" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-8">
            06 — Fencing
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8 leading-tight">
            Discipline on the piste. <br />
            <span className="text-muted">Focus in the lab.</span>
          </h3>
          
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 text-foreground/80 font-light"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="aspect-[4/5] bg-black/5 rounded-2xl relative overflow-hidden flex items-center justify-center"
        >
          {/* Abstract Fencing SVG Placeholder */}
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black/20">
            <path d="M14.5 17.5L3 6" />
            <path d="M14.5 17.5L17.5 14.5" />
            <path d="M17.5 14.5L21 18" />
            <path d="M17.5 14.5L21 11" />
            <path d="M14.5 17.5L11 21" />
            <circle cx="18" cy="6" r="3" />
            <path d="M16 8L12 12" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
