import React from 'react';
import { motion } from 'framer-motion';
import { Home, Info, BookOpen, Layers, Heart } from 'lucide-react';

const menuItems = [
  { name: "Home", icon: Home },
  { name: "About Us", icon: Info },
  { name: "Blog", icon: BookOpen },
  { name: "Plans", icon: Layers },
];

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-100 py-12"
    >
      <div className="container mx-auto px-4 w-4/5">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:w-1/3 mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-orange-800">Coterra</h2>
            <p className="mt-2 text-orange-700">Your Contents, Everyone Happiness</p>
          </motion.div>
          <nav className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="mr-6 mb-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#" className="text-orange-700 hover:text-orange-900 transition-colors duration-300 flex items-center">
                    <item.icon className="w-5 h-5 mr-1" />
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full md:w-1/3 text-center md:text-right"
          >
            <p className="text-orange-700 flex items-center justify-center md:justify-end">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              &copy; 2024 Coterra. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;