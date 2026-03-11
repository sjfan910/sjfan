import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

const publications = [
  {
    title: "Multimodal Sentiment Analysis and Improved Transformer-Based Emotional Music Generation Method for Elderly People in Nursing Homes",
    venue: "MEHSS 2025 International Conferences",
    status: "Published",
    link: "#"
  },
  {
    title: "EDA-Based Cognitive Load Prediction During Music-Modulated Memory Tasks",
    venue: "Cambridge Centre for International Research",
    date: "Oct 2025",
    status: "Published",
    link: "#"
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-muted uppercase tracking-widest mb-16"
      >
        04 — Publications
      </motion.h2>

      <div className="flex flex-col gap-8">
        {publications.map((pub, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 md:p-10 rounded-2xl bg-black/[0.02] hover:bg-black/[0.04] transition-all duration-500 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:-translate-y-1"
          >
            <div className="flex gap-6 items-start">
              <div className="mt-1 text-muted">
                <FileText size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-medium leading-tight mb-2 max-w-4xl">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted font-light">
                  {pub.venue} {pub.date && `• ${pub.date}`}
                </p>
              </div>
            </div>
            
            <div className="shrink-0 ml-12 md:ml-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/5 text-foreground">
                {pub.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
