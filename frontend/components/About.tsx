'use client';
import { motion, Variants } from 'framer-motion';

export default function About() {
  
  // Enhanced Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 1.2, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      {/* Enhanced Atmospheric Background with Multiple Layers */}
      <div className="absolute inset-0">
        <img 
          src="/img.jpeg" 
          alt="Background Atmosphere"
          className="absolute inset-0 w-full h-full object-cover blur-2xl brightness-[0.15] scale-110 opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 via-transparent to-orange-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
      </div>

      {/* Enhanced Glass Card with Better Depth */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-4 md:mx-8 lg:mx-auto bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_0_rgba(239,68,68,0.15)] transition-shadow duration-500 flex flex-col md:flex-row"
      >
        
        {/* LEFT SIDE: Enhanced Text Content */}
        <div className="p-10 md:p-16 md:w-3/5 flex flex-col justify-center space-y-8">
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-1.5 bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/40 text-red-400 text-xs font-semibold rounded-full uppercase tracking-wider backdrop-blur-sm hover:border-red-400/60 transition-colors">
              Content Creator
            </span>
            <span className="px-4 py-1.5 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-xs font-semibold rounded-full uppercase tracking-wider backdrop-blur-sm hover:border-gray-600 transition-colors">
              📍 Tokyo Based
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Bridging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-gradient">
              Cultures & Technology
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
            Namaste! I'm a Gorkhali exploring the convergence of digital innovation and Japanese culture. 
            From Tokyo's dynamic streets to elegant code architecture, I chronicle a journey of adaptation, 
            resilience, and creative expression across mediums.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <button className="group px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/30 hover:shadow-red-900/60 hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2">
                Discover My Journey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-8 py-3.5 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm">
              Get In Touch
            </button>
          </motion.div>

          {/* Enhanced Stats Row */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 grid grid-cols-2 md:flex md:gap-16 gap-8">
            <div className="group">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">5+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Years in Japan</p>
            </div>
            <div className="group">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">100+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Videos Created</p>
            </div>
            <div className="group col-span-2 md:col-span-1">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">50K+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">Community Reach</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Enhanced Image with Professional Treatment */}
        <motion.div 
          variants={imageVariants}
          className="relative md:w-2/5 min-h-[500px] md:min-h-full group"
        >
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/80 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-orange-900/20 z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Accent border effect */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-500/50 via-orange-500/30 to-transparent z-20" />
          
          <img 
            src="/img.jpeg" 
            alt="Professional Portrait"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600/20 to-transparent z-10 blur-2xl" />
        </motion.div>

      </motion.div>
    </section>
  );
}