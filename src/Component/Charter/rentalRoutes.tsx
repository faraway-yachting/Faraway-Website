'use client';
import HeadingContent from "@/common/heading";
import {combine, styles} from "@/styles/style"
import React, { useState } from 'react';
import { rentalRoutesData, type RouteCard } from '@/data/charter/rentalRoutesData';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const RentalRoutes: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className={styles.container}>
        {/* Header */}
        <div className="text-center mb-7 lg:mb-10">
          <HeadingContent
            heading="Best Yacht Rental Routes from Phuket"
            description="Phuket’s location allows for endless possibilities, from quick day trips to week-long expeditions."
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {rentalRoutesData.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
        <div className="max-w-[78.2rem] w-full bg-[#E6ECED33] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-3 border-l-[7px] border-l-[#034250] mt-6">
          <div className="flex-1 text-left py-3">
            <p className={combine("text-zink font-semibold max-w-3xl", styles.p4)}>
            For travelers seeking more than a quick Phuket boat rental, longer charters unlock hidden bays and remote coral reefs far from the crowds.
            </p>
          </div>
          <div className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] hidden md:block ">
            <img src="/images/slideText.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface RouteCardProps {
  route: RouteCard;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDetailedContent = (routeId: string) => {
    switch (routeId) {
      case 'half-day':
        return {
          yachtTypes: [
            {
              type: 'Sailing yachts',
              description: 'Coral Island or Promthep Cape for a relaxed cruise.'
            },
            {
              type: 'Power yachts',
              description: 'Koh Mai Thon or Racha Yai for a fast-paced escape.'
            }
          ]
        };
      case 'full-day':
        return {
          yachtTypes: [
            {
              type: 'Catamarans',
              description: 'Snorkel and swim at Koh Mai Thon or Racha Yai.'
            },
            {
              type: 'Power vessels',
              description: 'Explore Phi Phi Islands or Phang Nga Bay in one day.'
            }
          ]
        };
      case 'multi-day':
        return {
          yachtTypes: [
            {
              type: '2–3 nights',
              description: 'Sleep under the stars at Racha Noi, Phi Phi, or Phang Nga Bay.'
            },
            {
              type: '5+ nights',
              description: 'From five nights onward you\'ll enjoy the best value experience, with access to more remote and less crowded areas.'
            }
          ]
        };
      default:
        return { yachtTypes: [] };
    }
  };

  const detailedContent = getDetailedContent(route.id);

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-0 hover:-translate-y-1">
      {/* Image Container - Completely hidden when expanded */}
      <div className={`relative h-64 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-0 opacity-0' : 'max-h-64 opacity-100'}`}>
        <Image
          src={route.image}
          alt={route.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#012A50]/20 group-hover:bg-[#012A50]/20 transition-all duration-300" />

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-800">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          {route.duration}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 pb-16">
        {/* Title */}
        <h3 className="text-2xl font-bold text-zink mb-2 transition-colors duration-300">
          {route.title}
        </h3>

        {/* Description */}
        <p className="text-zink font-inter text-base mb-4 leading-relaxed">
          {route.description}
        </p>

        {/* Expanded Content - Slides up from image area */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-5">
            {detailedContent.yachtTypes.map((yacht, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white group cursor-pointer"
              >
                {/* Card Layout: Left Icon Section + Right Content Section */}
                <div className="flex">
                  {/* Left Icon Section */}
                  <div className="w-20 bg-zink flex items-center justify-center flex-shrink-0 group-hover:bg-[#d6ab62] transition-colors duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 21l18-9L3 3v18z" />
                      <path d="M3 3l18 9L3 21" />
                    </svg>
                  </div>

                  {/* Right Content Section */}
                  <div className="flex-1 p-4">
                    <h4 className="text-lg text-zink font-semibold mb-2">
                      {yacht.type}
                    </h4>

                    <p className="text-base font-inter text-zink leading-tight">
                      {yacht.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* See More/Less Button - Fixed Position at Bottom of Card */}
      <div
        className="flex items-center gap-2 cursor-pointer group absolute bottom-6 left-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="w-6 h-6 bg-zink rounded-full flex items-center justify-center hover:bg-[#d6ab62] transition-colors duration-300">
          <IoIosArrowDown className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
        <span className="text-zink font-semibold text-base hover:text-[#d6ab62] transition-colors duration-300">
          {isExpanded ? 'See less' : 'See more'}
        </span>
      </div>

    </div>
  );
};

export default RentalRoutes;
