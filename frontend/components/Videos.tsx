'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define what a Video looks like
interface Video {
  id: string;
  title: string;
  views: string;
  image: string;
  category: string;
  link: string;
}

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);

  // Fetch from Python Backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/videos')
      .then(response => {
        setVideos(response.data);
      })
      .catch(err => console.error("Failed to fetch videos:", err));
  }, []);

  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 bg-red-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Latest <span className="text-red-600">Uploads</span></h2>
            <p className="text-gray-400">Fresh from my YouTube Channel</p>
          </div>
          <a 
             href="https://www.youtube.com/" 
             target="_blank"
             className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Visit Channel
          </a>
        </motion.div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* If loading, show skeletons (optional), otherwise show videos */}
          {videos.length === 0 ? (
             <p className="text-gray-500 col-span-3 text-center">Loading videos...</p>
          ) : (
             videos.map((video, index) => (
              <motion.a
                key={video.id}
                href={video.link}
                target="_blank" // Opens in new tab
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-white/5 hover:border-red-500/50 transition-colors cursor-pointer block"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                       <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors line-clamp-2 h-14">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      {video.views}
                    </span>
                    <span className="bg-red-600/20 text-red-400 text-xs px-2 py-0.5 rounded uppercase">
                      New
                    </span>
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </div>

      </div>
    </section>
  );
}