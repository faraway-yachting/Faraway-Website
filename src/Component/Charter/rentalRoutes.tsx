'use client';

import React from 'react';
import { rentalRoutesData, type RouteCard } from '@/data/charter/rentalRoutesData';
import { styles } from '@/styles/style';
import Image from 'next/image';

const RentalRoutes: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className={styles.container}>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${styles.h2} text-gray-900 mb-4`}>
            Best Yacht Rental Routes from Phuket
          </h2>
          <p className={`${styles.p2} text-gray-600 max-w-3xl mx-auto`}>
            Phuket's location allows for endless possibilities, from quick day trips to week-long expeditions. 
            Discover the perfect route for your adventure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {rentalRoutesData.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface RouteCardProps {
  route: RouteCard;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
      {/* Header with Gradient Background */}
      <div className={`relative h-32 bg-gradient-to-r ${route.gradient} p-6 flex flex-col justify-between`}>
        {/* Duration Badge */}
        <div className="flex justify-between items-start">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            {route.duration}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white drop-shadow-sm">
          {route.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-5 leading-relaxed text-sm">
          {route.description}
        </p>

        {/* Destinations */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Destinations</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {route.destinations.slice(0, 3).map((destination, index) => (
              <span
                key={index}
                className="bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-full border border-gray-200 font-medium hover:bg-gray-100 transition-colors"
              >
                {destination}
              </span>
            ))}
            {route.destinations.length > 3 && (
              <span className="text-gray-500 text-xs px-3 py-1.5 font-medium">
                +{route.destinations.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Highlights</span>
          </div>
          <ul className="space-y-2">
            {route.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button className={`w-full bg-gradient-to-r ${route.gradient} text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 text-sm`}>
          <span>{route.buttonText}</span>
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RentalRoutes;
