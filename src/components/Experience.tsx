import { motion } from 'motion/react';

const experiences = [
  {
    role: "CTO",
    company: "LearnToGive",
    date: "Apr 2025 – Present",
    description: "Built and launched learntogive.net, a full-stack platform with AI assistant integration. Co-founded nonprofit donating 100% of revenue to fund scholarships across five countries. £1,800+ raised."
  },
  {
    role: "ML Intern",
    company: "JD.com (Jingdong)",
    date: "Jun – Jul 2024, Beijing",
    description: "Explored AI sentiment analysis for elderly care. Tested NLP models extracting emotional cues from patient speech. Studied neural network and LLM architecture. Authored technical reports."
  },
  {
    role: "CEO & China Regional Finalist",
    company: "Columbia Business School Model Entrepreneur Competition",
    date: "Feb – Jun 2025",
    description: "Finalist (top 5%) leading SeniorLink, an AI cognitive-engagement platform for seniors. Conducted market research on a $300B dementia care market, designed revenue models, built pitch deck."
  },
  {
    role: "AI Summer Academy",
    company: "University of Pennsylvania",
    date: "Jul – Aug 2025",
    description: "Intensive AI course under Prof. Ghrist. Built ML models and generative AI artefacts. 95% finals score, full marks on every assessment."
  },
  {
    role: "Level 2 Referee",
    company: "British Fencing",
    date: "Feb 2022 – Present",
    description: "One of the youngest Level 2 sabre referees in the UK. Officiates weekly fixtures and major competitions. Donates 100% of earnings to school fencing team."
  },
  {
    role: "Volunteer",
    company: "Hospice in the Weald",
    date: "Sep 2023 – Apr 2025",
    description: "Led weekly eldercare and arts activities for 23 residents. Organised fundraiser concert (150+ attendees, £500+ raised). Piloted AI-assisted music-memory project to reduce loneliness for widowed seniors."
  },
  {
    role: "Volunteer",
    company: "Derwent Day Centre",
    date: "",
    description: "Conducted WWII oral history interviews, compiled into \"Whispers of War.\" Organised resident outings to school. This experience directly inspired the AI eldercare research direction."
  },
  {
    role: "Volunteer",
    company: "Renovo Care Group",
    date: "Sep – Dec 2025",
    description: "Shadowed residential care assistants. Rotated through occupational therapy and physiotherapy sessions."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-muted uppercase tracking-widest mb-16"
      >
        03 — Experience
      </motion.h2>

      <div className="relative border-l border-black/10 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 pl-8 relative"
          >
            <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[6.5px] top-2" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl font-display font-medium">
                {exp.role} <span className="text-muted font-normal">— {exp.company}</span>
              </h3>
              <span className="text-sm text-muted font-mono mt-1 md:mt-0">{exp.date}</span>
            </div>

            <p className="text-muted font-light leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
