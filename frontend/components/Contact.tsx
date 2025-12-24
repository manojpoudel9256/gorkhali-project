'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Let's <span className="text-red-600">Connect</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you want to collaborate on a project, discuss life in Japan, or just say Namaste — I am always open to a conversation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="font-semibold group-hover:text-red-500 transition-colors">contact@gorkhali.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold group-hover:text-red-500 transition-colors">Tokyo, Japan</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-12">
               {['YouTube', 'Instagram', 'LinkedIn', 'Twitter'].map((social, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -5 }}
                   className="text-gray-400 hover:text-white cursor-pointer font-bold tracking-wider uppercase text-sm border-b border-transparent hover:border-red-500 transition-all"
                 >
                   {social}
                 </motion.div>
               ))}
            </div>
          </motion.div>


          {/* Right Side: The Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                <input type="email" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="Hello..." />
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-red-900/50">
                Send Message
              </button>
            </div>
          </motion.form>

        </div>

        {/* Footer Copyright */}
        <div className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Gorkhali Project. Built with Next.js & Python.
        </div>

      </div>
    </section>
  );
}