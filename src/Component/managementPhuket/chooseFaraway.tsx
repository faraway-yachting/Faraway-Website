import React from "react";
import { styles, combine } from "@/styles";
import { WhyChooseData } from "@/data/managementPhuket/managementPhuketData";
import HeadingContent from "@/common/heading";

const ChooseFaraway = () => {
  return (
    <section className={combine("relative bg-blue-50 overflow-hidden", styles.py4)}>
      {/* Beautiful background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 via-transparent to-orange-100/30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className={styles.container} style={{position: 'relative', zIndex: 10}}>
        {/* Beautiful Header Section */}
        <div className="text-center mb-16">
          <HeadingContent
          heading="Why Choose Faraway Yachting"/>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {WhyChooseData.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <button
                key={item.id}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white w-full"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full transform translate-x-8 -translate-y-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="mb-6">
                    <h4 className="text-zink mb-3 font-semibold text-lg">Why Choose</h4>
                    <div className="text-blue-600 font-bold text-xl tracking-wide">{item.title}</div>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg" style={{backgroundColor: '#012A50'}}>
                    <IconComponent className="text-white text-3xl drop-shadow-lg" />
                  </div>
                  <div className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Beautiful bottom section */}
        <div className="flex flex-col items-center mt-16 space-y-6">
          <div className="text-center max-w-3xl">
            <p className="text-lg text-zink font-medium leading-relaxed">
            Our approach is straightforward: <span className="font-semibold">protect your asset, increase uptime, and grow charter yield.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseFaraway;
