"use client";

import React from 'react';
import { FaCalendarAlt, FaUsers, FaShip, FaDollarSign, FaAnchor } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi';
import { styles, combine } from '@/styles/style';
import HeadingContent from '@/common/heading';
import PngIcons from '@/icons/pngIcon';

const IdealYacht: React.FC = () => {
  const keyConsiderations = [
    {
      icon: FaCalendarAlt,
      title: "Dates & Availability",
      description: "especially peak season",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "group-hover:bg-blue-200"
    },
    {
      icon: FaUsers,
      title: "Group Size",
      description: "smaller yachts vs. family-sized catamarans",
      color: "bg-green-100 text-green-600",
      hoverColor: "group-hover:bg-green-200"
    },
    {
      icon: FaShip,
      title: "Type of Yacht",
      description: "monohulls for tradition, catamarans for stability",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "group-hover:bg-purple-200"
    },
    {
      icon: FaDollarSign,
      title: "Budget",
      description: "from practical to premium",
      color: "bg-amber-100 text-amber-600",
      hoverColor: "group-hover:bg-amber-200"
    }
  ];

  const yachtTypes = [
    {
      icon: GiSailboat,
      title: "Monohull",
      features: [
        "Classic sailing, agile handling"
      ],
      color: "bg-zink",
      accentColor: "from-blue-500 to-blue-600"
    },
    {
      icon: FaAnchor,
      title: "Catamaran",
      features: [
        "Spacious, stable, comfortable"
      ],
      color: "bg-zink",
      accentColor: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-mustard/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Top Left Line3 Image */}
      <div className={combine("absolute top-0 left-0 z-10", styles.w3)}>
        <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
      </div>

      <div className={combine("max-w-6xl mx-auto relative z-10")}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <HeadingContent
            heading="Finding Your Ideal Yacht"
            description="Choosing the right yacht makes your <strong>Phuket bareboat rental</strong> unforgettable."
          />
        </div>

        {/* Key Considerations Section */}
        <div className="mb-16">
          <h3 className={combine(
            "text-zink font-bold mb-8 text-center font-playfair",
            styles.h4
          )}>
            Key Considerations
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyConsiderations.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-mustard/50"
              >
                {/* Icon Header */}
                <div className="flex items-center justify-center py-6 transition-all duration-300 bg-zink">
                  <item.icon className="text-4xl text-white" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className={combine(
                    "text-zink font-bold mb-3 text-center font-playfair",
                    styles.p1
                  )}>
                    {item.title}
                  </h4>
                  <p className={combine(
                    "text-gray-700 font-inter text-center",
                    styles.p3
                  )}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-mustard/20 via-mustard to-mustard/20 group-hover:from-mustard group-hover:via-mustard group-hover:to-mustard transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Monohull or Catamaran Section */}
        <div className="mb-12 max-w-xl mx-auto">
          <h3 className={combine(
            "text-zink font-bold mb-8 text-center font-playfair",
            styles.h4
          )}>
            Monohull or Catamaran?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {yachtTypes.map((yacht, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-mustard/50"
              >
                {/* Icon Header */}
                <div className={combine(
                  "flex items-center justify-center py-6 transition-all duration-300",
                  yacht.color
                )}>
                  <yacht.icon className="text-5xl text-white" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className={combine(
                    "text-zink font-bold mb-4 text-center font-playfair",
                    styles.h5
                  )}>
                    {yacht.title}
                  </h4>

                  <p className={combine(
                    "text-gray-700 font-inter text-center",
                    styles.p2
                  )}>
                    {yacht.features[0]}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-mustard/20 via-mustard to-mustard/20 group-hover:from-mustard group-hover:via-mustard group-hover:to-mustard transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-mustard/10 via-mustard/5 to-mustard/10 rounded-2xl p-8 border-2 border-mustard/20">
            <p className={combine(
              "text-zink font-semibold font-sourceSansPro leading-relaxed",
              styles.p1
            )}>
              A <span className="text-mustard font-bold">Phuket self-charter yacht</span> gives you freedom to match vessel to vision.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Right Frame1 Image */}
      <div className="absolute bottom-0 right-0 z-0">
        <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
      </div>
    </section>
  );
};

export default IdealYacht;

