'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-white cursor-pointer font-mono tracking-tighter"
        >
          GORKHALI<span className="text-red-600">.DEV</span>
        </div>

        <div className="hidden md:flex gap-8">
          {['About', 'Videos', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-red-500 transition-colors uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}