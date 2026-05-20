import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#030303] px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-lg tracking-widest text-white font-medium">
            A. SHOFIYA FATHIMA
          </span>
          <p className="text-[10px] font-mono tracking-wider text-white/40 uppercase mt-1">
            © {new Date().getFullYear()} — Crafted with Luxury Aesthetics. All Rights Reserved.
          </p>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="clickable group flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 rounded-full transition-all duration-300 text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 hover:text-white cursor-pointer focus:outline-none"
        >
          <span>Back To Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
