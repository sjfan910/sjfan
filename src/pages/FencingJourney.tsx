import { motion } from 'motion/react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FencingJourney() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <div className="bg-grain"></div>

      {/* Minimal top bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-black/5 py-4"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <span className="font-display font-semibold text-lg tracking-tight">SJF.</span>
          <a
            href="/fencing-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            <Download size={16} />
            Fencing Resume
          </a>
        </div>
      </motion.header>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-muted block"></span>
            <span className="text-sm font-medium text-muted uppercase tracking-widest">Since 2013</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-semibold tracking-tighter leading-[0.9] mb-8">
            My Fencing<br />
            <span className="text-muted">Journey.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted font-light leading-relaxed">
            11 years on the piste. The last 6, entirely self-coached.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium text-muted uppercase tracking-widest">The Story</h2>
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              I started fencing at age 8 in Beijing, training under Olympic champion Zhong Man. The rigorous, technical, uncompromising foundation shaped how I approach everything: sport, research, and passion.
            </p>
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              When I moved to the UK, I continued competing in men's sabre, reaching {" "}
              <span className="text-foreground font-medium">11th nationally at the Junior level.</span> {" "}
              But the real challenge came when I lost access to formal coaching.
            </p>
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              Tonbridge had no sabre coach, so I built my own path: flying back to Beijing each break for private coaching, training in Korea and New York, then bringing it all back to build programmes for my teammates and myself. Not much was handed to me, but I gave everything back.
            </p>
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              As {" "}
              <span className="text-foreground font-medium">Head Captain, Student Coach, and British Level 2 National Sabre Referee</span>
              , I lead training twice a week, developed two sabreurs into the national top 80, and donate 100% of my refereeing earnings to the team equipment fund.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-medium text-muted uppercase tracking-widest">Watch</h2>
            <div className="rounded-2xl overflow-hidden border border-black/10 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/bTfOXofryoQ"
                title="Fencing video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h2 className="text-sm font-medium text-muted uppercase tracking-widest pt-4">Highlights</h2>
            <ul className="space-y-4">
              {[
                { stat: "#11", label: "UK Junior Men's Sabre ranking" },
                { stat: "2nd", label: "Nationally as a team — first time in a decade" },
                { stat: "11 yrs", label: "Total competitive fencing" },
                { stat: "6 yrs", label: "Self-coached, no formal coaching" },
                { stat: "30→50", label: "Club members grown as Head Captain" },
                { stat: "×2", label: "Sabreurs developed to national top 80" },
                { stat: "Lv. 2", label: "Certified referee, all earnings donated to club" },
              ].map(({ stat, label }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-baseline gap-4 py-3 border-b border-black/5"
                >
                  <span className="text-2xl font-display font-semibold tracking-tight w-20 shrink-0">{stat}</span>
                  <span className="text-foreground/70 font-light">{label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Resume embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-2">Fencing Resume</h2>
              <h3 className="text-3xl font-display font-medium tracking-tight">Full competition record.</h3>
            </div>
            <a
              href="/fencing-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-medium bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5">
            <iframe
              src="https://docs.google.com/viewer?url=https://www.shijiafan.com/fencing-resume.pdf&embedded=true"
              className="w-full"
              style={{ height: '80vh', minHeight: '600px' }}
              title="Fencing Resume"
            />
          </div>
          <p className="mt-4 text-sm text-muted text-center">
            If the PDF doesn't load,{' '}
            <a href="/fencing-resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
              open it directly
            </a>.
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-t border-black/5 px-6 md:px-12 py-8 max-w-7xl mx-auto flex items-center justify-between"
      >
        <span className="text-sm text-muted font-light">© 2024 Shijia Fan</span>
        <Link to="/" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
          ← Back to Portfolio
        </Link>
      </motion.footer>
    </div>
  );
}
