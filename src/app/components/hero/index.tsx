'use client';

import React from 'react';

const HeroSection = () => {
  const stats = [
    { number: "3,516+", label: "Doctorates Mentored" },
    { number: "25,728+", label: "Researchers Guided" },
    { number: "10,987+", label: "Higher Education Learners" },
    { number: "40,189+", label: "Learners Empowered" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            A Global Vision Rooted in{' '}
            <span className="text-yellow-400 relative">
              Purposeful Leadership
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Doing <span className="text-yellow-400">GOOD</span> while doing{' '}
            <span className="text-yellow-400">WELL</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            A Global Community of DOCTORATES & RESEARCHERS
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Know more →
          </button>
        </div>

        {/* Community Image Placeholder */}
        <div className="mb-16 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-4xl w-full">
            <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">Community Photo</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default HeroSection;
