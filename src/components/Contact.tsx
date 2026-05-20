import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:shofiya641@gmail.com', value: 'shofiya641@gmail.com' },
    { icon: Phone, label: 'Phone', href: 'tel:8610994381', value: '+91 8610994381' },
    { icon: MapPin, label: 'Location', href: '#', value: 'Erode, Tamil Nadu, India' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shofiya-fathima-a350332a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', value: 'Shofiya Fathima' },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/10"
    >
      {/* Background soft ambient gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.005] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">07 / Connection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Get In <span className="serif-italic">Touch</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-white/40 mb-6">Contact Channels</h3>
            
            <div className="space-y-6 mb-10">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target={link.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="clickable group flex items-start gap-4 p-4 glass-panel border-white/[0.01] hover:border-white/10 rounded-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-wider text-white/40 uppercase block mb-0.5">{link.label}</span>
                      <span className="text-sm font-sans text-white/80 group-hover:text-white transition-colors">{link.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Icons row */}
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/shofiya-fathima-a350332a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="clickable group p-3 border border-white/10 bg-white/[0.02] hover:bg-white text-white hover:text-black rounded-full transition-all duration-500"
              >
                <LinkedInIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/only.shofiya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="clickable group p-3 border border-white/10 bg-white/[0.02] hover:bg-white text-white hover:text-black rounded-full transition-all duration-500"
              >
                <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-white/40 mb-6">Write A Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="px-4 py-3 bg-white/[0.01] hover:bg-white/[0.03] focus:bg-black border border-white/10 focus:border-white/50 rounded-xl text-sm text-white focus:outline-none transition-all duration-300"
                    placeholder="e.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="px-4 py-3 bg-white/[0.01] hover:bg-white/[0.03] focus:bg-black border border-white/10 focus:border-white/50 rounded-xl text-sm text-white focus:outline-none transition-all duration-300"
                    placeholder="e.g. john@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="px-4 py-3 bg-white/[0.01] hover:bg-white/[0.03] focus:bg-black border border-white/10 focus:border-white/50 rounded-xl text-sm text-white focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="clickable group relative w-full sm:w-fit px-8 py-3.5 bg-white text-black hover:bg-black hover:text-white disabled:bg-zinc-700 disabled:text-zinc-400 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold border border-white transition-all duration-500 overflow-hidden cursor-pointer focus:outline-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center gap-1">
                    Sent Successfully
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    Send Message
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
