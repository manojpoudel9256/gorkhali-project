'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hero() {
  const [stats, setStats] = useState({ subscribers: "...", views: "...", videos: "..." });

  useEffect(() => {
    axios.get('https://gorkhali-backend.onrender.com/api/hero-stats')
      .then(res => setStats(res.data))
      .catch(() => setStats({ subscribers: "Error", views: "Error", videos: "Error" }));
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-black selection:bg-red-500 selection:text-white">
      
      {/* 1. Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-5xl px-6">
        
        {/* 2. Glowing Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6"
        >
          <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            Full Stack Developer
          </span>
        </motion.div>

        {/* 3. Gradient Text Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8"
        >
          GORKHALI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">
            PROJECT
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Bridging <span className="text-white font-semibold">Japan</span> & <span className="text-white font-semibold">Nepal</span>. 
          Building digital experiences with Python & Next.js.
        </motion.p>

        {/* 4. Glass Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 md:gap-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
        >
          {[
            { label: "Subscribers", value: stats.subscribers, color: "text-red-500" },
            { label: "Total Views", value: stats.views, color: "text-orange-500" },
            { label: "Videos", value: stats.videos, color: "text-yellow-500" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className={`text-3xl md:text-5xl font-bold ${item.color} drop-shadow-lg`}>{item.value}</span>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2 font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
      
      {/* Scroll Down Arrow */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-500"
      >
        ↓
      </motion.div>
    </section>
  );
}