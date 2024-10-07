import React from 'react';
import { useEffect, useRef } from 'react';
import { Camera, Video, Mic, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const typewriterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export const IndexHero = ({ onGetStarted }) => {
  const roles = ['Filmmaker', 'Podcaster', 'Photographer', 'Content Creator'];
  const [currentRole, setCurrentRole] = React.useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(current => (current + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col-reverse items-center px-4 py-12 lg:flex-row lg:py-0">
      <motion.div 
        className="flex w-full flex-1 flex-col items-center justify-center lg:items-start"
        initial="hidden"
        animate="visible"
        variants={typewriterVariants}
      >
        <motion.h1 
          className="text-center text-4xl font-black text-[#131842] lg:text-left lg:text-6xl"
          variants={typewriterVariants}
        >
          Empower Your
          <span className="block text-[#e68369]">
            {roles[currentRole]}
          </span>
          Journey
        </motion.h1>
        
        <motion.p 
          className="mt-6 max-w-xl text-center text-lg text-gray-600 lg:text-left"
          variants={typewriterVariants}
        >
          Turn your passion into impact. Create, share, and grow your audience
          with powerful tools designed for modern content creators.
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          variants={typewriterVariants}
        >
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 rounded-full bg-[#e68369] px-6 py-3 font-semibold text-white transition-all hover:bg-[#d77258]"
          >
            <PlayCircle size={20} />
            Start Your Journey
          </button>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
          variants={typewriterVariants}
        >
          <div className="flex items-center gap-2">
            <Camera className="text-[#e68369]" />
            <span className="text-sm font-medium">Photos</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="text-[#e68369]" />
            <span className="text-sm font-medium">Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <Mic className="text-[#e68369]" />
            <span className="text-sm font-medium">Podcasts</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mb-12 flex w-full flex-1 justify-center lg:mb-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/templategf1.jpeg"
          alt="Content Creator"
          className="h-auto max-h-[500px] w-auto object-contain"
        />
      </motion.div>
    </main>
  );
};