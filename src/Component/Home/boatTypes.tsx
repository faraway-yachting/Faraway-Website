"use client";

import React from 'react';
import { boatTypesData, BoatType } from '@/data/home/boatTypes';
import { styles, combine } from '@/styles/style';
import HeadingContent from '@/common/heading';
import PngIcons from '@/icons/pngIcon';

const BoatTypes: React.FC = () => {
  return (
    <section className="py-16 lg:py-14 xl:py-14 bg-gray-50 relative">
        {/* Top Left Line3 Image */}
        <div className={combine(
                "absolute top-0 left-0 z-10 ", styles.w3,
              
            )}>
                <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
            </div>
        
        {/* Bottom Right Frame1 Image */}
        <div className="absolute bottom-0 right-0 z-0">
                    <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
                </div>
        
      <div className={combine(styles.container, "relative")}>
        {/* Section Header */}
        <div className="text-center mb-16">
            <HeadingContent
             heading='Yachts for Every Occasion'
             description='As a professional <strong>Phuket yacht charter operator</strong>, Faraway Yachting offers a wide selection of vessels for every type of experience'
            />
          </div>

        {/* Boat Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {boatTypesData.map((boatType: BoatType) => (
            <div
              key={boatType.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white group cursor-pointer"
            >
              {/* Card Layout: Left Icon Section + Right Content Section */}
              <div className="flex">
                {/* Left Icon Section */}
                <div className="w-30 bg-zink flex items-center justify-center flex-shrink-0 group-hover:bg-[#d6ab62] transition-colors duration-300">
                  <boatType.icon className="w-12 h-12 text-white" />
                </div>

                {/* Right Content Section */}
                <div className="flex-1 p-6">
                  <h3 className={`${styles.h6} text-zink font-semibold mb-3`}>
                    {boatType.title}
                  </h3>
                  
                  <p className={`${styles.p4} text-gray-600 leading-tight`}>
                    {boatType.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/yacht-charter-phuket">
        <p className={combine('font-medium text-zink underline text-center font-inter pt-7 hover:text-[#d6ab62]',styles.p1)}>We’ll match the perfect yacht to your group size, budget, and occasion.
        </p>
        </a>
      </div>
    </section>
  );
};

export default BoatTypes;
