import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';

const SKILL_CATEGORIES = {
  languages: {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Java', 'C#'],
  },
  tools: {
    title: 'Tools & Software',
    icon: Wrench,
    skills: ['Canva', 'Trae', 'Antigravity', 'Visual Studio Code'],
  },
  databases: {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
  },
  frameworks: {
    title: 'Frameworks',
    icon: Sparkles,
    skills: ['Django'],
  },
};

type CategoryKey = keyof typeof SKILL_CATEGORIES;

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('languages');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  const IconComponent = SKILL_CATEGORIES[activeCategory].icon;

  return (
    <section 
      id="skills" 
      className="py-24 relative overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">02 / Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Technical <span className="serif-italic">Capabilities</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-start mb-12">
          {Object.keys(SKILL_CATEGORIES).map((catKey) => {
            const category = SKILL_CATEGORIES[catKey as CategoryKey];
            const CatIcon = category.icon;
            const isActive = activeCategory === catKey;

            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey as CategoryKey)}
                className={`clickable group flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border focus:outline-none ${
                  isActive
                    ? 'bg-white text-black border-white'
                    : 'bg-white/[0.02] text-white/50 border-white/5 hover:text-white/80 hover:border-white/20'
                }`}
              >
                <CatIcon className="w-4 h-4" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="glass-panel border-white/[0.03] p-8 md:p-12 rounded-3xl min-h-[300px]">
          <div className="flex items-center gap-3 mb-8 text-left">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
              <IconComponent className="w-5 h-5 text-white/80" />
            </div>
            <h3 className="text-lg font-serif tracking-[0.1em] text-white uppercase font-light">
              {SKILL_CATEGORIES[activeCategory].title} Overview
            </h3>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left"
            >
              {SKILL_CATEGORIES[activeCategory].skills.map((skill: string, idx: number) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="p-5 glass-panel border-white/[0.02] hover:border-white/10 rounded-2xl flex items-center justify-between group transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm font-sans tracking-wide text-white/80 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
