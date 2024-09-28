import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutUsHero = () => {
  return (
    <main className="bg-gradient-to-br w-4/5 mx-auto min-h-screen flex items-center justify-center py-16">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-x-12">
          <motion.section 
            className="flex-1 mt-12 lg:mt-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img 
              src="/template.png" 
              alt="Empowering Creators" 
              className="w-full h-auto max-h-[30rem] object-cover rounded-lg shadow-2xl"
            />
          </motion.section>

          <motion.section 
            className="flex-1 text-center lg:text-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-6">
              Empowering <span className="text-[#e68369]">Creators</span>
              <br /> Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our platform is built to inspire, empower, and connect
              content creators from every corner of the world.
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#" 
                className="inline-flex items-center border-2 border-[#E68369] bg-white hover:bg-[#E68369] text-[#E68369] hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutUsHero;