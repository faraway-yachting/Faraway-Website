"use client";

import React, { useState } from 'react';
import HeadingContent from "@/common/heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styles, combine } from '@/styles/style';
import { 
  IoBoatOutline, 
  IoMoonOutline, 
  IoMapOutline, 
  IoHomeOutline, 
  IoGiftOutline,
  IoStarOutline,
  IoWaterOutline,
  IoCompassOutline,
  IoBedOutline,
  IoSparklesOutline
} from "react-icons/io5";

interface VoyageCard {
  id: string;
  title: string;
  description: string;

}

const voyageData: VoyageCard[] = [
  {
    id: "day-charters",
    title: "Day Charters",
    description: "Cruise to nearby islands, swim, snorkel, and enjoy the beaches.",
  },
  {
    id: "overnight-cruises",
    title: "Overnight Cruises", 
    description: "Spend nights under the stars and wake up in quiet bays.",
  },
  {
    id: "multi-day-adventures",
    title: "Multi-Day Adventures",
    description: "Explore further into Thailand's Andaman Sea.",
  },
  {
    id: "cabin-charters",
    title: "Cabin Charters",
    description: "Join our 5-night, 6-day shared cruises with a private cabin, top chef, and like-minded travelers.",
  },
  {
    id: "special-occasions",
    title: "Special Occasions",
    description: "Birthdays, honeymoons, weddings, and corporate events at sea.",
  }
];

const VoyageCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setActiveCard(next);
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 lg:py-24">
      <div className={combine(styles.container)}>
        {/* Section Header */}
        <div className="text-center mb-16">
  <HeadingContent
  heading="Phuket Yacht Charter Experiences"
  description="Your journey with Faraway Yachting is completely private and fully tailored. Our most popular charter experiences include" />
        </div>

        {/* Slider Container */}
        <div className="w-full relative">
          <Slider {...settings}>
            {voyageData.map((voyage, index) => (
              <div key={voyage.id} className="px-3 lg:px-2 xl:px-3 h-full">
                <div 
                  className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col min-h-[285px]"
                >
                  {/* Icon Badge */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 ${activeCard === index ? 'bg-mustard' : 'bg-zink'} rounded-full flex items-center justify-center shadow-lg relative border-2 ${activeCard === index ? 'border-mustard' : 'border-zink'}`}>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative group border border-zink">
                        {/* React Icons with white color */}
                        {index === 0 && (
                          <IoBoatOutline className="text-white text-3xl" />
                        )}
                        {index === 1 && (
                          <IoMoonOutline className="text-white text-3xl" />
                        )}
                        {index === 2 && (
                          <IoMapOutline className="text-white text-3xl" />
                        )}
                        {index === 3 && (
                          <IoHomeOutline className="text-white text-3xl" />
                        )}
                        {index === 4 && (
                          <IoGiftOutline className="text-white text-3xl" />
                        )}
                        {/* Small decorative elements around icons */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-all duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-all duration-300"></div>
                        <div className="absolute top-0 left-0 w-1 h-1 bg-white/60 rounded-full group-hover:bg-white/80 transition-all duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-1 bg-white/60 rounded-full group-hover:bg-white/80 transition-all duration-300"></div>
                      </div>
                      {/* Number badge in top-right corner */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-mustard text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      {/* Decorative lines */}
                      <div className="absolute top-1 left-1 w-8 h-0.5 bg-white/30 rounded-full"></div>
                      <div className="absolute bottom-1 right-1 w-6 h-0.5 bg-white/30 rounded-full"></div>
                      {/* Corner dots */}
                      <div className="absolute top-0 left-0 w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/40 rounded-full"></div>
                      {/* Center dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/60 rounded-full"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-zink text-xl font-bold mb-4">
                    {voyage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {voyage.description}
                  </p>

                  {/* Bottom Border */}
                  <div className={`mt-4 h-1 rounded-full ${activeCard === index ? 'bg-mustard' : 'bg-gray-200'} transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default VoyageCards;
