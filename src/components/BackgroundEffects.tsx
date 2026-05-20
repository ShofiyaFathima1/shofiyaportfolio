import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate a fixed set of random particles to avoid hydration mismatches
    const tempParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 2 + 1, // 1px to 3px
      duration: Math.random() * 20 + 20, // 20s to 40s
    }));
    setParticles(tempParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Cinematic Grid Mesh */}
      <div className="absolute inset-0 bg-grid-mesh opacity-30" />

      {/* Radial soft lighting highlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white/30 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtly moving glowing lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
    </div>
  );
};
