import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Position of mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for the trailing cursor ring
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      // Update CSS variables for radial gradient background glow
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = ((e.clientY + window.scrollY) / document.documentElement.scrollHeight) * 100;
      
      document.documentElement.style.setProperty('--mouse-x', `${xPercent}%`);
      document.documentElement.style.setProperty('--mouse-y', `${yPercent}%`);
      
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    // Track if mouse is over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') || 
        target.classList.contains('clickable') ||
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA';

      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hidden on touch/mobile devices */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
        {/* Trailing Outer Ring */}
        <motion.div
          className="fixed left-0 top-0 w-8 h-8 rounded-full border border-white/30"
          style={{
            x: cursorX,
            y: cursorY,
            scale: isHovered ? 1.6 : 1,
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            borderColor: isHovered ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
          }}
          animate={{
            opacity: isHidden ? 0 : 1,
          }}
          transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.15 } }}
        />
        
        {/* Inner Solid Dot */}
        <motion.div
          className="fixed left-[14px] top-[14px] w-1.5 h-1.5 bg-white rounded-full"
          style={{
            x: mouseX,
            y: mouseY,
          }}
          animate={{
            opacity: isHidden ? 0 : 0.8,
            scale: isHovered ? 0.5 : 1,
          }}
          transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.15 } }}
        />
      </div>

      {/* Screen-wide passive glow following the mouse */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-glow opacity-80" />
    </>
  );
};
