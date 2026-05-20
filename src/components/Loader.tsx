import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Elegant incremental progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            setTimeout(onComplete, 800); // Allow exit animations to complete
          }, 400);
          return 100;
        }
        return next;
      });
    }, 80);

    // Lock body scroll during loading
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, [onComplete]);

  // Framer Motion variants
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const name = "A. SHOFIYA FATHIMA";

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col justify-between p-10 bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top header - Location */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] text-white/40 uppercase font-sans">
            <span>Erode, Tamil Nadu</span>
            <span>Est. 2026</span>
          </div>

          {/* Main Name Center Reveal */}
          <div className="flex flex-col items-center">
            <motion.h1 
              className="text-4xl md:text-7xl font-serif tracking-[0.1em] text-white select-none text-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {name.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-white/50 mt-4 font-sans"
            >
              Portfolio Experience
            </motion.p>
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end">
            <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden hidden md:block">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white/60"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-right">
              <span className="text-[12rem] font-serif-luxury font-light leading-none tracking-tight text-white/5 inline-block absolute bottom-4 right-8 select-none">
                {progress}%
              </span>
              <div className="text-xs font-mono text-white/40 relative z-10 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></span>
                <span>INITIALIZING DATABASE</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
