import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Let's build something meaningful.
          </h2>
          <div className="flex gap-4 mb-8">
            <a href="mailto:sjf@shijiafan.com" className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-foreground">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/shijia-fan-50369b377" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-foreground">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black/10 transition-colors text-foreground">
              <Github size={20} />
            </a>
          </div>
          
          <a
            href="/personal_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start md:items-end gap-2 text-sm text-muted font-light"
        >
          <a href="https://learntogive.net" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            learntogive.net
          </a>
          <p>© {new Date().getFullYear()} Shijia Fan.</p>
        </motion.div>

      </div>
    </footer>
  );
}
