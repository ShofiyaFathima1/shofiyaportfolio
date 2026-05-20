import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Achievement {
  title: string;
  category: string;
  year: string;
  detail: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Proficiency Prize Winner',
    category: 'Academics',
    year: '2025',
    detail: 'Ranked at the top of the B.Sc. Computer Technology batch for consistent academic excellence and problem-solving skills.',
  },
  {
    title: 'Department Joint Secretary',
    category: 'Leadership',
    year: '2025 - 2026',
    detail: 'Managed department affairs, coordinated inter-collegiate technical symposia, and directed academic coordination boards.',
  },
  {
    title: 'International Paper Presentation',
    category: 'Research',
    year: '2025',
    detail: 'Authored and presented a technical research paper on modern computing technologies at an International Conference.',
  },
  {
    title: 'MERN Full Stack Credentials',
    category: 'Internship',
    year: '2025',
    detail: 'Certified in MERN stack development and practical web infrastructure at Live Stream Technologies.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden px-6 md:px-12 bg-black"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">06 / Achievements</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Awards & <span className="serif-italic">Presentations</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scholastic Achievements List */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left order-2 lg:order-1">
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-white/40 mb-2">Academic Honors</h3>
            
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div
                  key={idx}
                  className="p-5 glass-panel border-white/[0.02] hover:border-white/10 rounded-2xl flex gap-4 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 h-fit text-white/80 shrink-0">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-sm font-serif text-white tracking-wide font-medium">{ach.title}</h4>
                      <span className="text-[9px] font-mono text-white/40">{ach.year}</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block mb-2">{ach.category}</span>
                    <p className="text-xs text-white/60 leading-relaxed font-sans">{ach.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: AI Knowledge Sharing Seminar Details */}
          <div className="lg:col-span-6 flex flex-col text-left order-1 lg:order-2">
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-white/40 mb-6">Seminar Presentation</h3>

            <div className="glass-panel border-white/[0.03] p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">December 27, 2025</span>
              <h4 className="text-2xl font-serif text-white tracking-wide leading-tight mb-2">
                Peer-to-Peer AI Knowledge Sharing Seminar
              </h4>
              <p className="text-sm serif-italic text-white/80 mb-1">
                Presenter – Notebook LM Session
              </p>
              <p className="text-[11px] font-mono text-white/40 uppercase tracking-wide mb-6">
                Department of Computer Technology, Vellalar College for Women (Autonomous), Erode
              </p>
              
              <p className="text-xs text-white/60 leading-relaxed font-sans mb-6">
                Served as a student presenter in the Peer-to-Peer AI Knowledge Sharing Seminar organized by the Department of Computer Technology. Conducted an interactive session on Notebook LM, explaining its features, real-time academic usage, and applications in smart learning.
              </p>

              <div className="border-t border-white/5 pt-6 mb-6">
                <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block mb-3">Key Contributions</span>
                <ul className="space-y-2 text-xs text-white/70">
                  <li className="flex items-start gap-2.5">
                    <span className="text-white/40 font-mono mt-0.5">•</span>
                    <span>Demonstrated the functionalities of Notebook LM</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-white/40 font-mono mt-0.5">•</span>
                    <span>Explained how AI can assist in note-taking, research, and learning</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-white/40 font-mono mt-0.5">•</span>
                    <span>Guided students through practical academic use cases</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-white/40 font-mono mt-0.5">•</span>
                    <span>Encouraged students to explore AI-powered educational tools</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-white/40 font-mono mt-0.5">•</span>
                    <span>Assisted in promoting collaborative and technology-driven learning</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/5 pt-6">
                <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block mb-3">Skills Gained</span>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Public Speaking', 'Presentation Skills', 'Educational Technology', 'Digital Literacy', 'Peer Learning'].map((skill, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono tracking-wider text-white/50 rounded-full uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
