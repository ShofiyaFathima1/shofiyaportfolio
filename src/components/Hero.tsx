import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const TITLES = [
  'Front-End Developer',
  'Web Designer',
  'MERN Stack Developer'
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentFullText = TITLES[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          // Pause when done typing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
          return;
        }
      }
      
      // Speed adjustments
      const speed = isDeleting ? 40 : 100;
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side: Cinematic Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-white/40"></span>
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
              Introducing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif tracking-normal text-white leading-tight font-medium"
          >
            A. Shofiya Fathima
          </motion.h1>

          {/* Typing Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-10 md:h-14 mt-2 flex items-center"
          >
            <span className="text-xl md:text-3xl serif-italic text-white/80 font-light mr-1">
              {displayedText}
            </span>
            <span className="inline-block w-[2px] h-6 md:h-8 bg-white animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base text-white/60 font-sans max-w-lg mt-6 leading-relaxed"
          >
            Crafting responsive web applications with refined, cinematic design and precise logic. Combining standard MERNStack structures, Python solutions, and a strong eye for clean typography to build elegant digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={handleScrollToProjects}
              className="clickable group relative px-8 py-3.5 bg-white text-black hover:bg-black hover:text-white rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold border border-white transition-all duration-500 overflow-hidden cursor-pointer focus:outline-none"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                View Work
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
            
            <a
              href="#contact"
              className="clickable group px-8 py-3.5 border border-white/10 hover:border-white/40 bg-white/[0.02] hover:bg-white/[0.05] text-white rounded-full font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 focus:outline-none"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image with Glow Border */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Animated Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full blur-[30px] bg-white/[0.04] pointer-events-none" />
            
            {/* Elegant Image Border Glow Wrapper */}
            <div className="image-glow-border p-1.5 rounded-full overflow-hidden max-w-[280px] md:max-w-[340px]">
              <div className="relative aspect-square rounded-full overflow-hidden bg-zinc-950">
                <img 
                  src="/profile.jpg" 
                  alt="A. Shofiya Fathima" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>

            {/* Faint metallic ornament detail */}
            <div className="absolute -bottom-4 -left-4 w-10 h-10 border-l border-b border-white/20 rounded-bl-xl pointer-events-none hidden md:block" />
            <div className="absolute -top-4 -right-4 w-10 h-10 border-r border-t border-white/20 rounded-tr-xl pointer-events-none hidden md:block" />
          </motion.div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0], y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <ArrowDown className="w-4 h-4 text-white/30" />
      </motion.div>

      {/* Subtle overlay shading */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
};
