import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader } from './components/Loader';
import { CursorGlow } from './components/CursorGlow';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader Animation */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Main Content (revealed once loaded) */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-screen selection:bg-white selection:text-black"
        >
          {/* Custom Trailing Cursor and Mouse Light Glow */}
          <CursorGlow />

          {/* Luxury Background Stars and Grids */}
          <BackgroundEffects />

          {/* Glassmorphic Navbar */}
          <Navbar />

          {/* Section Wrappers */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Experience />
            <Testimonials />
            <Contact />
          </main>

          {/* Classy Minimal Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
