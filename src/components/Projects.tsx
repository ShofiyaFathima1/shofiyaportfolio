import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  tech: string[];
  image: string;
  impact: string;
  link: string;
}

const PROJECTS_DATA: Project[] = [
  {
    title: 'Eagle Inn Website',
    role: 'Front-End Developer',
    year: '2025',
    description: 'Designed and developed a fully responsive digital store website featuring clean structures for product displays, custom item grids, and simple, user-friendly navigation systems.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: '/eagle_inn.png',
    impact: 'Built a fully functional live digital store front and significantly refined front-end UI layouts.',
    link: 'https://eagleinn.neocities.org/',
  },
  {
    title: 'Prinz Garments Website',
    role: 'Front-End Developer',
    year: '2025',
    description: 'Created a high-fashion, clean product showcase platform with detailed display directories, desktop/mobile compatibility, and optimized loading pipelines.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Architecture'],
    image: '/prinz_garments.png',
    impact: 'Successfully launched a complete working website demonstrating modern front-end layouts.',
    link: 'https://prinzgraments.neocities.org/prinzgraments/',
  },
];

export const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/10"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">03 / Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Selected <span className="serif-italic">Work</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Image Container with Hover zoom and custom glow */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden glass-panel border-white/5 shadow-2xl mb-6 block"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Year Badge */}
                <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-white/80 uppercase">
                  {project.year}
                </span>
              </a>

              {/* Title & Role Info */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block mb-1">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-serif text-white tracking-wide group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable p-2 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/60 hover:text-white"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed font-sans mb-4">
                {project.description}
              </p>

              {/* Impact / Results */}
              <div className="p-4 bg-white/[0.01] border-l-2 border-white/20 mb-6 rounded-r-xl">
                <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 block mb-1">Project Impact</span>
                <p className="text-xs text-white/70 italic font-serif">
                  "{project.impact}"
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white/[0.02] border border-white/[0.04] text-[9px] font-mono tracking-wider text-white/50 rounded-full uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
