import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: "UK Junior Men's Sabre", value: "11th" },
    { label: "Sentiment Analysis Accuracy", value: "97.5%" },
    { label: "Raised for Scholarships", value: "£1,800+" },
    { label: "Published Papers", value: "2" },
    { label: "Predicted A-Levels", value: "A*A*A*A" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted uppercase tracking-widest mb-8"
          >
            01 — About
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg text-foreground/80 font-light leading-relaxed"
          >
            <p className="mb-6">
              I'm an AI researcher, full-stack developer, and nationally ranked fencer from Beijing, now based in the UK.
            </p>
            <p className="mb-6">
              I have two academic publications in geriatric AI, a machine learning internship at JD.com, and I co-founded a nonprofit tutoring platform that operates across five countries.
            </p>
            <p>
              I build things that work for people who need them most.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col gap-2"
              >
                <span className="text-3xl md:text-4xl font-display font-medium tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted uppercase tracking-wider leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
