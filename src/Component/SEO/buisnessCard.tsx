"use client";
import React from 'react';
import { FaWhatsapp,  FaPhoneAlt , FaGlobe, FaFacebook, FaInstagram, FaUser, FaUserTie, FaCalculator } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { styles, combine } from "@/styles/style";

const BusinessCard = () => {
  const contactCards = [
    { icon: FaWhatsapp, title: "WHATS APP", subtitle: "for Bookings", href:"https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0" },
    { icon: FaPhoneAlt, title: "PHONE & MAIL", subtitle: "for Bookings", href: "tel:+66612345623" },
    { icon: SiLine, title: "LINE", subtitle: "for Bookings", href:"https://line.me/ti/p/IF91DcUiYa" },
    { icon: FaGlobe, title: "WEBSITE", subtitle: "" ,href:"https://faraway-yachting.com"},
    { icon: FaFacebook, title: "FACEBOOK", subtitle: "", href:"https://www.facebook.com/FarawayYachting"},
    { icon: FaInstagram, title: "INSTAGRAM", subtitle: "" ,href:"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ffarawayyachting%2F%3Ffbclid%3DIwAR0iAzKhJjfT0NVO5X5tKjjJ-uwaWQ4m6DQ03l9vQiGxJ8Q7OJQQByekk54&is_from_rle"}
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
            <h2 className={combine(styles.h2, "text-zink mb-3 tracking-tight")}>
              Faraway Yachting Co. Ltd.
            </h2>
            <div className="w-24 h-1 bg-mustard mx-auto rounded-full"></div>
          </div>

        {/* Contact Cards Grid */}
        <div className="mb-16">
          <h3 className={combine(styles.h3, "text-zink text-center font-semibold mb-8")}>Contact Us</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7 xl:gap-10">
            {contactCards.map((card, index) => {
              const IconComponent = card.icon;
              const isWebsiteCard = card.title === "WEBSITE";
              const isSocialCard = card.title === "FACEBOOK" || card.title === "INSTAGRAM";
              return (
                <a key={index} href={card.href} target={card.href?.startsWith('tel:') ? '_self' : '_blank'} rel="noopener noreferrer" className="block">
                  <div className={`bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer ${(isWebsiteCard || isSocialCard) ? 'min-h-[163px] md:min-h-0' : ''}`}>
                    <div className="text-center">
                      <div className={`${styles.flexCenter} w-16 h-16 mx-auto mb-4 bg-mustard rounded-xl group-hover:bg-zink transition-colors duration-300`}>
                        <IconComponent className="text-white text-2xl" />
                      </div>
                      <h5 className={combine(styles.h5, "font-bold text-zink mb-2")}>{card.title}</h5>
                      {card.subtitle && <p className={combine(styles.p4,"text-zink font-inter")}>{card.subtitle}</p>}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="mb-16">
          <h3 className={combine(styles.h3, "text-zink text-center font-semibold mb-8")}>Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 xl:gap-10">
            {teamCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-mustard rounded-xl flex items-center justify-center group-hover:bg-zink transition-colors duration-300">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h5 className={combine(styles.h5, "font-bold text-zink mb-2")}>{card.title}</h5>
                    <p className={combine(styles.p4,"text-zink font-inter")}>{card.subtitle}</p>
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