import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const missionStatements = [
  {
    title: "Empowering Creators",
    description: "We provide creators with cutting-edge tools, unwavering support, and boundless inspiration. Our goal is to transform every creative spark into a blazing success, making the journey from concept to creation both accessible and exhilarating."
  },
  {
    title: "Fostering Innovation",
    description: "By nurturing a vibrant ecosystem of ideas, we aim to push the boundaries of what's possible. We believe that innovation thrives when creators are given the freedom to explore, experiment, and collaborate without limits."
  },
  {
    title: "Building Community",
    description: "We're creating a global network where creators can connect, share insights, and grow together. Our platform is more than just tools—it's a thriving community where inspiration is exchanged and lifelong connections are forged."
  }
];

export const OurMission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % missionStatements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + missionStatements.length) % missionStatements.length);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-300 to-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl sm:text-6xl font-extrabold text-white mb-12 tracking-tight">
          Our Mission
        </h1>
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden">
          <div className="relative flex items-center min-h-[400px] sm:min-h-[500px]">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 sm:p-4 bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-r-lg focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <div className="w-full text-center px-4 sm:px-12 py-8 sm:py-12 transition-all duration-500 ease-in-out transform">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {missionStatements[currentIndex].title}
              </h2>
              <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
                {missionStatements[currentIndex].description}
              </p>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 sm:p-4 bg-white bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-l-lg focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
          </div>
          <div className="flex justify-center space-x-2 pb-4">
            {missionStatements.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};