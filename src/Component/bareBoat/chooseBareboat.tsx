"use client";

import HeadingContent from "@/common/heading";
import { styles, combine } from "@/styles";

const ChooseBareboat = () => {
  const features = [
    {
      title: "Trusted Expertise",
      points: [
        "Over 30 years of experience",
        "More than 750 five-star reviews"
      ]
    },
    {
      title: "Personalized Service",
      points: [
        "Guidance from inquiry to boarding",
        "Professional briefings and ongoing support"
      ]
    },
    {
      title: "Safe & Seamless Adventures",
      points: [
        "High-quality, well-maintained yachts",
        "Peace of mind with 24/7 assistance"
      ]
    }
  ];

  return (
    <section className={combine("relative bg-white overflow-hidden", styles.py2)}>
      <div className={combine("relative z-10 px-4", styles.container)}>
        {/* Main Heading */}
        <div className={combine("text-center", styles.mb2)}>
          <HeadingContent
            heading="Why Choose Us for Your Phuket Bareboat Charter"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-mustard"
            >
              {/* Top Accent Bar */}
              <div className="h-1.5 bg-mustard"></div>

              {/* Card Content */}
              <div className="p-5 md:p-3 lg:p-6 xl:p-8 relative z-10">
                {/* Number Badge with Ring */}
                <div className="mb-4 xl:mb-6 relative inline-flex">
                  <div className="absolute inset-0 bg-mustard/20 rounded-full animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-12 lg:w-14 xl:w-16 h-12 lg:h-14 xl:h-16 bg-mustard rounded-full text-white font-bold text-2xl shadow-lg ring-4 ring-mustard/20">
                    {index + 1}
                  </div>
                </div>

                {/* Title with Accent Line */}
                <div className="mb-6">
                  <h3 className={combine("font-extrabold text-zink font-playfair mb-3", styles.h5)}>
                    {feature.title}
                  </h3>
                  <div className="w-16 h-1 bg-mustard rounded-full"></div>
                </div>

                {/* Points with Enhanced Bullets */}
                <ul className="space-y-4">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1.5 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-mustard/10 flex items-center justify-center">
                          <div className="w-2 h-2 bg-mustard rounded-full"></div>
                        </div>
                      </div>
                      <span className={combine("text-gray-700 font-sourceSansPro leading-relaxed", styles.p3)}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Highlight Bar - Slides up on hover */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-2 bg-mustard transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div> */}
              
              {/* Bottom Glow Effect on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mustard/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div 
          className="rounded-2xl p-6 lg:p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #012A50 0%, #034d7d 50%, #012A50 100%)'
          }}
        >
          {/* Accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-mustard/5 via-transparent to-white/5"></div>
          
          <div className="relative z-10">
            <h2 className={combine("font-extrabold text-white font-playfair mb-4", styles.h4)}>
              Your Partner in Adventure
            </h2>
            <p className={combine("text-gray-200 font-sourceSansPro max-w-4xl mx-auto leading-relaxed", styles.p2)}>
              Booking your <span className="font-semibold">Phuket bareboat charter</span> with us guarantees independence on the water, backed by expertise on shore. Whether it's your first <span className="font-semibold">Thailand bareboat charter </span>or your tenth, we'll make it unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseBareboat;

