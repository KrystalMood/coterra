import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Introduction = () => {
  return (
    <main className="bg-gradient-to-b from-white to-orange-50 min-h-screen flex items-center justify-center py-20">
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-6">
            Make Your <span className="text-[#e68369]">Ideas</span> Come <br />
            True with <span className="text-[#e68369]">Coterra</span>
          </h1>
          
          <motion.div 
            className="max-w-3xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              At <span className="text-[#e68369] font-semibold">Coterra</span>, we started with a simple idea: to give creators the
              freedom to share their stories with the world. What began as a small
              project has now grown into a thriving community where creativity
              knows no bounds.
            </p>
            <Sparkles className="absolute -top-6 -left-6 text-yellow-400 w-12 h-12 opacity-75" />
            <Sparkles className="absolute -bottom-6 -right-6 text-yellow-400 w-12 h-12 opacity-75" />
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="bg-[#e68369] hover:bg-[#d57260] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-white text-[#e68369] font-bold py-3 px-6 rounded-full border-2 border-[#e68369] hover:bg-[#e68369] hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};