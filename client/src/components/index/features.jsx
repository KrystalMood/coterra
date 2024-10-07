import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Edit, Tv } from 'lucide-react';

const featuresList = [
  {
    title: "Create",
    subtitle: "Unleash your creativity with easy-to-use tools",
    icon: Camera,
    color: "text-[#d16d53]",
    image: "/templategf1.jpeg"
  },
  {
    title: "Edit",
    subtitle: "Polish your content to perfection",
    icon: Edit,
    color: "text-[#d16d53]",
    image: "/templategf2.jpeg"
  },
  {
    title: "Share",
    subtitle: "Reach your audience instantly",
    icon: Tv,
    color: "text-[#d16d53]",
    image: "/templategf3.jpeg"
  }
];

const FeatureCard = ({ feature, isHovered, onHover }) => {
  const Icon = feature.icon;
  return (
    <div 
      className="group relative h-[24rem] w-[20rem] cursor-pointer rounded-xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 shadow-lg">
          <Icon className={`h-8 w-8 ${feature.color}`} />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
        <p className="text-gray-600">{feature.subtitle}</p>
      </div>
      <div className="mt-6">
        <div className="h-40 overflow-hidden rounded-lg bg-orange-50 p-4">
          <div className={`transform transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <img 
              src={feature.image} 
              alt={feature.title}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndexFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Scroll Animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);

  // Slide Functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresList.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + featuresList.length) % featuresList.length
    );
  };

  return (
    <motion.main
      ref={ref}
      style={{ opacity, y }}
      className="min-h-screen bg-orange-50 py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold">
          <span className="text-[#d16d53]">Create</span>, Edit & 
          <span className="relative inline-block px-2">
            Share
            <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#d16d53]" viewBox="0 0 100 12">
              <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Your all-in-one platform for bringing your content dreams to life!
        </p>
      </div>
      
      <div className="mx-auto flex max-w-6xl justify-center gap-8 px-4">
        {featuresList.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FeatureCard
              feature={feature}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};