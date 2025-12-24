'use client';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hero() {
  // 1. State to hold data (starts with "..." loading placeholders)
  const [stats, setStats] = useState({ subscribers: "...", videos: "...", views: "..." });

  // 2. Fetch data from Python Backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hero-stats')
      .then(response => {
        console.log("Data received from Python:", response.data); // Debugging line
        setStats(response.data);
      })
      .catch(error => console.error("Error fetching stats:", error));
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring" } }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      
      {/* Background Animated Gradient */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black -z-10 opacity-50"
      />

      {/* Main Title */}
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold tracking-tighter text-center z-10"
      >
        GORKHALI <span className="text-red-600 inline-block">IN JAPAN</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 text-xl text-gray-400 z-10"
      >
        Life Through a Gorkhali Lens
      </motion.p>

      {/* Stats from Python Backend */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-8 md:gap-16 mt-16 z-10"
      >
        {[
          { label: "Subscribers", value: stats.subscribers },
          { label: "Total Views", value: stats.views },
          { label: "Videos", value: stats.videos }
        ].map((stat, index) => (
          <motion.div key={index} variants={itemVariants} className="text-center">
            <span className="block text-3xl md:text-4xl font-bold">{stat.value}</span>
            <span className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}