import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  badges?: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    type: 'work',
    title: 'MERN Stack Intern',
    subtitle: 'LIVE STREAM TECHNOLOGIES, Coimbatore',
    date: 'May 2025',
    description: [
      'Gained hands-on experience in MERN stack technologies (MongoDB, Express.js, React, Node.js).',
      'Assisted in building functional client-side and server-side application components.',
      'Participated in integration operations to connect frontend layouts with databases.',
      'Aquired core full-stack software cycle concepts during practical training projects.'
    ],
    badges: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    type: 'education',
    title: 'Bachelor of Science (B.Sc.) in Computer Technology',
    subtitle: 'Vellalar College for Women (Autonomous), Erode',
    date: '2023 - 2026',
    description: [
      'Awarded the prestigious Proficiency Prize for academic excellence in Computer Technology.',
      'Elected Joint Secretary of the Computer Technology Department, leading event management and academic coordination.',
      'Presented a research paper at the International Conference on modern computing technologies (2025).'
    ],
    badges: ['CGPA: Academic Excellence', 'Leadership Role', 'Paper Presentation']
  }
];

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/20"
    >
      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">05 / Background</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Journey & <span className="serif-italic">Timeline</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12 py-2">
          {TIMELINE_DATA.map((item, idx) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            return (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Timeline Node Point */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 p-1.5 bg-black rounded-full border border-white/20 flex items-center justify-center text-white/80 z-10 shadow-[0_0_10px_rgba(0,0,0,1)]">
                  <div className="p-1 bg-white/5 rounded-full border border-white/5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="glass-panel border-white/[0.03] p-6 md:p-8 rounded-2xl text-left hover:border-white/10 transition-colors duration-300">
                  
                  {/* Date Badge */}
                  <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg md:text-xl font-serif text-white font-light tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4 font-medium">
                    {item.subtitle}
                  </h4>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="text-xs md:text-sm text-white/60 font-sans leading-relaxed flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  {item.badges && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {item.badges.map((badge, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono tracking-wider text-white/50 rounded-md uppercase"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
