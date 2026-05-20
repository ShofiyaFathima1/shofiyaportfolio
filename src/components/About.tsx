import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { value: '2', label: 'Live Projects' },
    { value: '1', label: 'MERN Stack Internship' },
    { value: '100%', label: 'Responsiveness' },
    { value: '1', label: 'Paper Presentation' },
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 relative overflow-hidden px-6 md:px-12 bg-zinc-950/20"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">01 / Profile</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            About <span className="serif-italic">Myself</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Philosophy Quote */}
          <motion.div 
            className="lg:col-span-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-3xl md:text-4xl leading-snug text-white font-light">
              "Fusing <span className="serif-italic text-white/70">precise engineering</span> with minimal aesthetics to construct memorable web journeys."
            </p>
            <div className="mt-8 p-6 glass-panel rounded-2xl border-white/[0.03]">
              <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-2">Primary Objective</h4>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Dedicated to developing clean, accurate code structures. Skilled in resolving interface problems, optimizing layouts, and executing detail-oriented remote tasks with accuracy and efficiency.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & Details */}
          <motion.div 
            className="lg:col-span-7 text-left flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-white/40">Executive Summary</h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans">
              I am a front-end developer and web designer based in Erode, Tamil Nadu, with experience in building responsive web applications. Along with my core front-end expertise, I have hands-on experience in MERN stack development from my internship, as well as backend structures using Django and Python.
            </p>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans">
              I have a strong eye for detail, which helps me ensure that every layout matches the exact design specifications. Through coordinating college events and presenting papers, I have built excellent communication, event coordination, and adaptational capabilities.
            </p>

            {/* Languages */}
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-white/40 mb-3">Multilingual Capabilities</h4>
              <div className="flex gap-4">
                <div>
                  <span className="text-xs text-white/80 font-medium">Tamil</span>
                  <span className="text-[10px] text-white/40 font-mono ml-2">Fluent</span>
                </div>
                <div className="w-[1px] h-4 bg-white/10" />
                <div>
                  <span className="text-xs text-white/80 font-medium">English</span>
                  <span className="text-[10px] text-white/40 font-mono ml-2">Conversational</span>
                </div>
              </div>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 glass-panel border-white/[0.02] rounded-xl text-center">
                  <span className="block text-2xl md:text-3xl font-serif text-white font-medium">{stat.value}</span>
                  <span className="block text-[9px] font-mono tracking-wider text-white/40 uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
