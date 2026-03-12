import { motion } from 'motion/react';

export default function WhyEldercare() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        <div className="lg:col-span-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted uppercase tracking-widest mb-8"
          >
            Why Eldercare?
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8 prose prose-lg text-foreground/80 font-light leading-relaxed"
        >
          <p className="mb-6">
            I started volunteering at a hospice at 16, expecting to help. Instead, a widower named Stewart changed everything. He was always the last to leave our sessions. One afternoon, as I packed up, he asked me to stay longer. His children visited once a month. Carers rotated shifts. The moment we left, his only social connection disappeared.
          </p>
          <p>
            I wanted to build something that could stay when I couldn't. That question led to a 9-month research collaboration, two publications, and a commitment I haven't stopped acting on since.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
