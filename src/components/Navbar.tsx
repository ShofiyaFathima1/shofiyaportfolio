import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set backdrop blur after scroll
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.05]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex flex-col items-start cursor-pointer text-left focus:outline-none"
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.08em] text-white font-medium group-hover:text-white/80 transition-colors">
              A. S. F.
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase -mt-0.5 group-hover:text-white/60 transition-colors">
              Portfolio
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 py-1 cursor-pointer focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-white font-medium' 
                    : 'text-white/50 hover:text-white/90'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center gap-1.5 px-4 py-2 border border-white/10 hover:border-white/40 bg-white/[0.02] hover:bg-white/[0.05] rounded-full transition-all duration-300 text-xs uppercase tracking-[0.2em] text-white cursor-pointer focus:outline-none"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-white/80 transition-colors cursor-pointer focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center space-y-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl uppercase tracking-[0.25em] font-serif transition-colors py-2 cursor-pointer focus:outline-none ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-8 group flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/50 rounded-full transition-colors text-sm uppercase tracking-[0.2em] text-white cursor-pointer focus:outline-none"
              >
                <span>shofiya641@gmail.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
