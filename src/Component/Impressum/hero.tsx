"use client";
import React from 'react';
import { FaAnchor, FaShip, FaWater } from 'react-icons/fa';

const ImpressumHero = () => {
  return (
    <div className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 via-teal-600 to-amber-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating waves */}
        <div className="absolute top-10 left-10 animate-bounce">
          <FaWater className="text-white/20 text-6xl" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <FaShip className="text-white/15 text-4xl" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
          <FaAnchor className="text-white/25 text-5xl" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <FaWater className="text-white/10 text-3xl" />
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              Impressum
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Legal Information & Company Details
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
              <FaAnchor className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ImpressumHero;
