"use client";
import Image from 'next/image';
import { styles, combine } from '@/styles';
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import PngIcons from '@/icons/pngIcon';

const OurGuests = () => {
  const features = [
    {
      id: 1,
      image: PngIcons.nightCharterimg12,
      title: "Professional Thai crew with local expertise"
    },
    {
      id: 2,
      image: PngIcons.nightCharterimg13, 
      title: "Freshly prepared meals tailored to your preferences"
    },
    {
      id: 3,
      image: PngIcons.nightCharterimg14,
      title: "Unique, crowd-avoiding itineraries"
    },
    {
      id: 4,
      image: PngIcons.nightCharterimg15,
      title: "Sustainable operations with modernized yachts"
    }
  ];

  return (
    <section className={combine("pb-10 pt-15 my-8 bg-white")}>
      <div className={combine(styles.container, "px-4 sm:px-6 lg:px-8")}>
        
   
        {/* Main Content Section - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h2 className={combine(styles.h1, "font-extrabold text-mustard mb-6")}>
              Guests highlight our
            </h2>
            <p className={combine(styles.p2, "text-zink font-inter leading-relaxed")}>
              When you choose us, you're not just booking a <span className='font-semibold'>boat rental Phuket</span>—you're securing the most reliable, personalized <span className='font-semibold'>overnight boat charter Phuket experience.</span>
            </p>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-4 items-start">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 relative ${index === 0 || index === 2 ? '-mt-6' : ''}`}
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0796B6, #034250) border-box',
                  border: '1px solid transparent'
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className={combine(styles.p2, "font-semibold  text-black font-playfair text-center leading-tight")}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGuests;
