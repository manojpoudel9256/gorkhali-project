'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Video { id: string; title: string; views: string; image: string; link: string; }

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Keep your Live Render URL here!
    axios.get('https://gorkhali-backend.onrender.com/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-900/20 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
          Latest <span className="text-red-600">Creations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.length === 0 ? <p className="text-white text-center col-span-3">Loading content...</p> : 
            videos.map((video, index) => (
              <motion.a
                key={video.id}
                href={video.link}
                target="_blank"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative block bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg">▶</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      👀 {video.views}
                    </span>
                    <span className="text-red-400 font-semibold uppercase text-xs tracking-wider border border-red-500/30 px-2 py-1 rounded">
                      Watch Now
                    </span>
                  </div>
                </div>
              </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}