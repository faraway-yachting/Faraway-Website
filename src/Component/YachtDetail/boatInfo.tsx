import React, { useState } from 'react';
import { IoBoatOutline, IoMoonOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';

const BoatInfo = () => {
  const dayTripCards = [
    { icon: IoBoatOutline, label: "About Boat" },
    { icon: FiSun, label: "Day Charter" },
    { icon: IoMoonOutline, label: "Overnight Charter" },
  ];
  
  const [activeTab, setActiveTab] = useState("About Boat");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId); 
    if (element) {
      // Add a small delay to ensure the element is rendered
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }, 100);
    } else {
      console.log(`Element with id "${sectionId}" not found`);
    }
  };

  const handleTabClick = (tabName: string, sectionId: string) => {
    setActiveTab(tabName);
    scrollToSection(sectionId);
  };

  return (
    <section>
      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 mt-9">
        {/* First row - About Boat and Day Charter on small screens, all buttons on md+ */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          {dayTripCards.slice(0, 2).map(({ label, icon: Icon }, index) => {
            const sectionId = label === "About Boat" ? "about-boat" : 
                             label === "Day Charter" ? "day-charter" : 
                             "night-charter";
            return (
              <button
                key={label}
                onClick={() => handleTabClick(label, sectionId)}
                className={`group relative flex items-center gap-2 transition-all duration-300 font-poppins font-semibold
                 py-2 px-4 lg:px-6 md:text-base lg:text-lg
                  rounded-lg border-2 overflow-hidden
                  ${activeTab === label
                    ? "bg-gradient-to-br from-[#D6AB62] via-[#B8941F] to-[#9A7B1A] text-white transform scale-105"
                    : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border-gray-300 hover:border-[#D6AB62] hover:text-[#7e7149] hover:shadow-lg hover:transform hover:scale-105"
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon with unique styling */}
                <div className={`relative p-1.5 rounded-lg transition-all duration-300 hidden md:block ${
                  activeTab === label 
                    ? "bg-white/25 shadow-inner" 
                    : "bg-gray-100 group-hover:shadow-inner"
                }`}>
                  <Icon 
                    size={16} 
                    className={`transition-all duration-300 ${
                      activeTab === label 
                        ? "text-white drop-shadow-lg" 
                        : "text-gray-600 group-hover:text-[#D6AB62] group-hover:scale-110"
                    }`} 
                  />
                  
                  {/* Icon glow effect */}
                  {activeTab === label && (
                    <div className="absolute inset-0 rounded-lg bg-white/30 animate-ping"></div>
                  )}
                </div>
                {/* Label with special effects */}
                <span className={`relative whitespace-nowrap transition-all duration-300 ${
                  activeTab === label 
                    ? "text-white drop-shadow-md" 
                    : "text-gray-800 group-hover:text-[#D6AB62]"
                }`}>
                  {label}
                </span>
                {/* Unique active indicator */}
                {activeTab === label && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                )}
              </button>
            );
          })}
          
          {/* Overnight Charter - show in first row on md+, second row on small screens */}
          {dayTripCards.slice(2).map(({ label, icon: Icon }, index) => {
            const sectionId = "night-charter";
            return (
              <button
                key={label}
                onClick={() => handleTabClick(label, sectionId)}
                className={`group relative items-center gap-2 transition-all duration-300 font-poppins font-semibold
                 py-2 px-4 lg:px-6 md:text-base lg:text-lg
                  rounded-lg border-2 overflow-hidden hidden md:flex
                  ${activeTab === label
                    ? "bg-gradient-to-br from-[#D6AB62] via-[#B8941F] to-[#9A7B1A] text-white transform scale-105"
                    : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border-gray-300  hover:border-[#D6AB62] hover:text-[#7e7149] hover:shadow-lg hover:transform hover:scale-105"
                  }`}
                style={{
                  animationDelay: `${(index + 2) * 100}ms`
                }}
              >
                {/* Icon with unique styling */}
                <div className={`relative p-1.5 rounded-lg transition-all duration-300 hidden md:block ${
                  activeTab === label 
                    ? "bg-white/25 shadow-inner" 
                    : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#D6AB62]/20 group-hover:to-[#B8941F]/20 group-hover:shadow-inner"
                }`}>
                  <Icon 
                    size={16} 
                    className={`transition-all duration-300 ${
                      activeTab === label 
                        ? "text-white drop-shadow-lg" 
                        : "text-gray-600 group-hover:text-[#D6AB62] group-hover:scale-110"
                    }`} 
                  />
                  
                  {/* Icon glow effect */}
                  {activeTab === label && (
                    <div className="absolute inset-0 rounded-lg bg-white/30 animate-ping"></div>
                  )}
                </div>
                {/* Label with special effects */}
                <span className={`relative whitespace-nowrap transition-all duration-300 ${
                  activeTab === label 
                    ? "text-white drop-shadow-md" 
                    : "text-gray-800 group-hover:text-[#D6AB62]"
                }`}>
                  {label}
                </span>
                {/* Unique active indicator */}
                {activeTab === label && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* Second row - Overnight Charter and Contact Us (only on small screens) */}
        <div className="flex gap-3 sm:gap-4 md:gap-5 md:hidden mt-3">
          {dayTripCards.slice(2).map(({ label, icon: Icon }, index) => {
            const sectionId = "night-charter";
            return (
              <button
                key={label}
                onClick={() => handleTabClick(label, sectionId)}
                className={`group relative flex items-center gap-2 transition-all duration-300 font-poppins font-semibold
                 py-2 px-4 lg:px-6 md:text-base lg:text-lg
                  rounded-lg border-2 overflow-hidden
                  ${activeTab === label
                    ? "bg-gradient-to-br from-[#D6AB62] via-[#B8941F] to-[#9A7B1A] text-white transform scale-105"
                    : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border-gray-300 hover:bg-gradient-to-br hover:from-[#D6AB62]/10 hover:to-[#B8941F]/10 hover:border-[#D6AB62] hover:text-[#7e7149] hover:shadow-lg hover:transform hover:scale-105"
                  }`}
                style={{
                  animationDelay: `${(index + 2) * 100}ms`
                }}
              >
                {/* Icon with unique styling */}
                <div className={`relative p-1.5 rounded-lg transition-all duration-300 hidden md:block ${
                  activeTab === label 
                    ? "bg-white/25 shadow-inner" 
                    : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#D6AB62]/20 group-hover:to-[#B8941F]/20 group-hover:shadow-inner"
                }`}>
                  <Icon 
                    size={16} 
                    className={`transition-all duration-300 ${
                      activeTab === label 
                        ? "text-white drop-shadow-lg" 
                        : "text-gray-600 group-hover:text-[#D6AB62] group-hover:scale-110"
                    }`} 
                  />
                  
                  {/* Icon glow effect */}
                  {activeTab === label && (
                    <div className="absolute inset-0 rounded-lg bg-white/30 animate-ping"></div>
                  )}
                </div>
                {/* Label with special effects */}
                <span className={`relative whitespace-nowrap transition-all duration-300 ${
                  activeTab === label 
                    ? "text-white drop-shadow-md" 
                    : "text-gray-800 group-hover:text-[#D6AB62]"
                }`}>
                  {label}
                </span>
                {/* Unique active indicator */}
                {activeTab === label && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                )}
              </button>
            );
          })}
          
          {/* Contact Us button - only on small screens */}
          <button
            onClick={() => {
              setActiveTab("Booking Inquiry");
              scrollToSection("contact-detail");
            }}
            className={`group relative flex items-center gap-2 transition-all duration-300 font-poppins font-semibold
             py-2 px-4 lg:px-6 md:text-base lg:text-lg
              rounded-lg border-2 overflow-hidden
              ${activeTab === "Booking Inquiry"
                ? "bg-gradient-to-br from-[#D6AB62] via-[#B8941F] to-[#9A7B1A] text-white transform scale-105"
                : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border-gray-300 hover:bg-gradient-to-br hover:from-[#D6AB62]/10 hover:to-[#B8941F]/10 hover:border-[#D6AB62] hover:text-[#7e7149] hover:shadow-lg hover:transform hover:scale-105"
              }`}
            style={{
              animationDelay: "300ms"
            }}
          >
            {/* Icon with unique styling */}
            <div className={`relative p-1.5 rounded-lg transition-all duration-300 hidden md:block ${
              activeTab === "Booking Inquiry" 
                ? "bg-white/25 shadow-inner" 
                : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#D6AB62]/20 group-hover:to-[#B8941F]/20 group-hover:shadow-inner"
            }`}>
              <IoCallOutline 
                size={16} 
                className={`transition-all duration-300 ${
                  activeTab === "Booking Inquiry" 
                    ? "text-white drop-shadow-lg" 
                    : "text-gray-600 group-hover:text-[#D6AB62] group-hover:scale-110"
                }`} 
              />
              
              {/* Icon glow effect */}
              {activeTab === "Booking Inquiry" && (
                <div className="absolute inset-0 rounded-lg bg-white/30 animate-ping"></div>
              )}
            </div>
            {/* Label with special effects */}
            <span className={`relative whitespace-nowrap transition-all duration-300 ${
              activeTab === "Booking Inquiry" 
                ? "text-white drop-shadow-md" 
                : "text-gray-800 group-hover:text-[#D6AB62]"
            }`}>
            Booking Inquiry
            </span>
            {/* Unique active indicator */}
            {activeTab === "Booking Inquiry" && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full shadow-lg animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoatInfo;