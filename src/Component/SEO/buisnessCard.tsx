"use client";
import React from 'react';
import { FaWhatsapp,  FaPhoneAlt , FaGlobe, FaFacebook, FaInstagram, FaUser, FaUserTie, FaCalculator } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';

const BusinessCard = () => {
  const contactCards = [
    { icon: FaWhatsapp, title: "WHATS APP", subtitle: "for Bookings" },
    { icon: FaPhoneAlt, title: "PHONE & MAIL", subtitle: "for Bookings" },
    { icon: SiLine, title: "LINE", subtitle: "for Bookings" },
    { icon: FaGlobe, title: "WEBSITE", subtitle: "" },
    { icon: FaFacebook, title: "FACEBOOK", subtitle: "" },
    { icon: FaInstagram, title: "INSTAGRAM", subtitle: "" }
  ];

  const teamCards = [
    { icon: FaUser, title: "CEO Flo", subtitle: "(not for bookings!)" },
    { icon: FaUserTie, title: "General Manager Steve", subtitle: "(not for bookings!)" },
    { icon: FaCalculator, title: "Accounting Manager Oil", subtitle: "(not for bookings!)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="w-40 h-15 mx-auto mb-4 flex items-center justify-center">
              <img src="/images/logo.png" alt="Faraway Yachting Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-4xl font-bold text-zink mb-3 tracking-tight">
              Faraway Yachting Co. Ltd.
            </h1>
            <div className="w-24 h-1 bg-mustard mx-auto rounded-full"></div>
          </div>

        {/* Contact Cards Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zink text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-mustard rounded-xl flex items-center justify-center group-hover:bg-zink transition-colors duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="font-bold text-lg text-zink mb-2">{card.title}</h3>
                    {card.subtitle && <p className="text-sm text-gray-600">{card.subtitle}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zink text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-mustard rounded-xl flex items-center justify-center group-hover:bg-zink transition-colors duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="font-bold text-lg text-zink mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;