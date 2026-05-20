import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

const SERVICES_DATA: Service[] = [
  {
    icon: Layout,
    title: 'Front-End Development',
    description: 'Transforming layouts into pixel-perfect, highly responsive, interactive interfaces using modern React and clean CSS structures.',
    features: ['React & Component Architecture', 'Fluid Responsive Layouts', 'Framer Motion Animations', 'Performance Optimization'],
  },
  {
    icon: Palette,
    title: 'UI/UX & Web Design',
    description: 'Creating classy, minimal, and sophisticated digital experiences using elegant typography, balanced white space, and premium visual components.',
    features: ['High-End Visual Identity', 'Typography & Palette Curation', 'Canva Design & Asset Creation', 'User Journey Mapping'],
  },
];

export const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden px-6 md:px-12 bg-black"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">04 / Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Services & <span className="serif-italic">Capabilities</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="clickable group glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl text-left border-white/[0.03] flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div>
                  {/* Icon Container */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 w-fit mb-6 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-4 tracking-wide font-light">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed font-sans mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-white/50 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
