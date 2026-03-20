import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const name = "Shijia Fan";
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-muted block"></span>
          <span className="text-sm font-medium text-muted uppercase tracking-widest">Laifu</span>
        </motion.div>

        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-[12vw] md:text-[8rem] leading-[0.9] font-display font-semibold tracking-tighter mb-8"
        >
          {name.split('').map((char, index) => (
            <motion.span key={index} variants={item} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-xl md:text-3xl text-muted font-light max-w-2xl leading-relaxed mb-10"
        >
          AI researcher. Fencer. Builder. <br />
          <span className="text-foreground font-medium">Building technology that cares.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <Link
            to="/fencing"
            className="inline-flex items-center gap-2 text-sm font-medium border border-black/20 text-foreground px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            My Fencing Journey
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-black/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
          />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-muted">Scroll</span>
      </motion.div>
    </section>
  );
}
