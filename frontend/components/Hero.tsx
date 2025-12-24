'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hero() {
  // State to hold the real numbers
  const [stats, setStats] = useState({
    subscribers: "...",
    views: "...",
    videos: "..."
  });

  // Fetch data from your Live Python Backend
  useEffect(() => {
    // We use the Render URL here
    axios.get('https://gorkhali-backend.onrender.com/api/hero-stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error("Error fetching stats:", error);
        // Optional: Set fallback values if it fails
        setStats({ subscribers: "Error", views: "Error", videos: "Error" });
      });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center items-center text-center px-4">
      
      {/* Background Video/Image (Optional) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        {/* You can add a background video tag here later if you want */}
      </div>

      <div className="relative z-20 max-w-4xl">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 border border-red-500/50 rounded-full bg-red-500/10 backdrop-blur-sm"
        >
          <span className="text-red-400 font-semibold tracking-wider text-sm uppercase">
            Full Stack Developer & Creator
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6"
        >
          GORKHALI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">CODE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Building digital bridges between <span className="text-white font-medium">Japan</span> and the <span className="text-white font-medium">Himalayas</span> through code and content.
        </motion.p>

        {/* Dynamic Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-8 max-w-3xl mx-auto"
        >
          {/* Subscribers */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
              {stats.subscribers}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Subscribers</p>
          </div>

          {/* Views */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
              {stats.views}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Total Views</p>
          </div>

          {/* Videos */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
              {stats.videos}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Videos</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}