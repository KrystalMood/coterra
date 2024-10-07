import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const blogPost = [
  {
    category: "Content Creation",
    title: "Mastering Video Editing",
    subtitle: "Essential tips for captivating content",
    image: "/templategf1.jpeg",
  },
  {
    category: "Social Media",
    title: "Building a Personal Brand",
    subtitle: "How to stand out in the digital age",
    image: "/templategf2.jpeg",
  },
  {
    category: "Monetization",
    title: "Turning Your Passion into Profit",
    subtitle: "Effective strategies to monetize content",
    image: "/templategf3.jpeg",
  },
];

export const BlogHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPost.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative h-screen w-full max-w-screen overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.figure
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundImage: `url(${blogPost[currentIndex].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <motion.div
              className="absolute bottom-20 left-10 flex flex-col justify-start text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.button
                className="mb-4 w-fit rounded-full bg-white px-6 py-2 text-lg font-bold text-black transition-colors duration-300 hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {blogPost[currentIndex].category}
              </motion.button>
              <h1 className="text-5xl font-bold mb-2">{blogPost[currentIndex].title}</h1>
              <p className="text-2xl">{blogPost[currentIndex].subtitle}</p>
            </motion.div>
          </motion.figure>
        </AnimatePresence>

        <div className="absolute bottom-12 left-20 transform -translate-x-1/2 flex space-x-3">
          {blogPost.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-12 right-20 rounded-full bg-white p-4 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="text-gray-800" />
        </motion.div>
      </div>
    </main>
  );
};
