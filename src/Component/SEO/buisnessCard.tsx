"use client";
import React, { useState } from 'react';
import { FaWhatsapp,  FaPhoneAlt , FaGlobe, FaFacebook, FaInstagram, FaUser, FaUserTie, FaCalculator, FaTimes } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { styles, combine } from "@/styles/style";
import { RiTeamFill } from "react-icons/ri";

const BusinessCard = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const contactCards = [
    { icon: FaWhatsapp, title: "WHATS APP", subtitle: "for Bookings", href:"https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0" },
    { 
      icon: FaPhoneAlt, 
      title: "PHONE & MAIL", 
      subtitle: "for Bookings", 
      email: "booking@faraway-yachting.com", 
      phone: "+66612345623", 
      website:"https://www.faraway-yachting.com/", 
      showPopup: true,
      address: {
        title: "Office at the pier:",
        lines: [
          "40/1 Chaofa Road, Moo 9",
          "Tambon Chalong, Amphoe Mueang Phuket,",
          "Chang Wat Phuket 83130"
        ]
      }
    },
    { icon: SiLine, title: "LINE", subtitle: "for Bookings", href:"https://line.me/ti/p/IF91DcUiYa" },
    { icon: FaGlobe, title: "WEBSITE", subtitle: "" ,href:"https://faraway-yachting.com"},
    { icon: FaFacebook, title: "FACEBOOK", subtitle: "", href:"https://www.facebook.com/FarawayYachting"},
    { icon: FaInstagram, title: "INSTAGRAM", subtitle: "" ,href:"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ffarawayyachting%2F%3Ffbclid%3DIwAR0iAzKhJjfT0NVO5X5tKjjJ-uwaWQ4m6DQ03l9vQiGxJ8Q7OJQQByekk54&is_from_rle"}
  ];

  const teamCards = [
    { 
      icon: FaUser, 
      title: "CEO Flo", 
      subtitle: "(not for bookings!)",
      email:"flo@faraway-yachting.com",
      phone: "+6695954142143",
      website:"https://www.faraway-yachting.com/", 
    },
    { 
      icon: FaUserTie, 
      title: "General Manager Steve", 
      subtitle: "for Bookings",
      email: "steve@faraway-yachting.com",
      phone: "+66950151680",
      website:"https://www.faraway-yachting.com/", 
    },
    { 
      icon: FaCalculator, 
      title: "Accounting Manager Oil", 
      subtitle: "(not for bookings!)",
      email: "flo@faraway-yachting.com",
      phone: "+66910606393",
      website:"https://www.faraway-yachting.com/", 
    }
  ];

  const handleCardClick = (member: any) => {
    setSelectedTeamMember(member);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTeamMember(null);
  };

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
              const isPhoneCard = card.title === "PHONE & MAIL";
              
              if (isPhoneCard && card.showPopup) {
                return (
                  <div 
                    key={index} 
                    onClick={() => handleCardClick(card)}
                    className="bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                  >
                    <div className="text-center">
                      <div className={`${styles.flexCenter} w-16 h-16 mx-auto mb-4 bg-mustard rounded-xl group-hover:bg-zink transition-colors duration-300`}>
                        <IconComponent className="text-white text-2xl" />
                      </div>
                      <h5 className={combine(styles.h5, "font-bold text-zink mb-2")}>{card.title}</h5>
                      {card.subtitle && <p className={combine(styles.p4,"text-zink font-inter")}>{card.subtitle}</p>}
                    </div>
                  </div>
                );
              }
              
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
                <div 
                  key={index} 
                  onClick={() => handleCardClick(card)}
                  className="bg-white rounded-2xl p-4 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                >
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

      {/* Team Member Popup */}
      {isPopupOpen && selectedTeamMember && (
        <div className="fixed inset-0 bg-transparent bg-opacity-20 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 z-10"
            >
              <FaTimes className="text-gray-600 text-base" />
            </button>

            {/* Popup Content - Following the business card style */}
            <div className="p-6 text-center">
              {/* Company Header */}
              <div className="mb-4">
                <h3 className= "text-zink mb-2 text-[28px] font-semibold">
                  Faraway Yachting Co. Ltd.
                </h3>
                <div className="w-16 h-0.5 bg-mustard mx-auto rounded-full mb-4"></div>
              </div>

              {/* Team Member Info */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-3 bg-mustard rounded-xl flex items-center justify-center">
                  <RiTeamFill className="text-white text-4xl" />
                </div>
                <h4 className={combine(styles.p2, "text-zink font-bold mb-1")}>
                  {selectedTeamMember.title === "PHONE & MAIL" ? "Reservation team - Faraway Yachting Co. Ltd." : "Reservation team - Faraway Yachting Co. Ltd."}
                </h4>
              </div>

              {/* Horizontal Line */}
              <div className="w-full h-px bg-gray-200 mb-4"></div>

              {/* Contact Info */}
              <div className="space-y-3 mb-4">
                <div>
                  <p className={combine(styles.p4, "text-zink")}>{selectedTeamMember.email}</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div>
                  <p className={combine(styles.p4, "text-zink")}>{selectedTeamMember.phone}</p>
                </div>
                {selectedTeamMember.website && (
                  <>
                    <div className="w-full h-px bg-gray-200"></div>
                    <div>
                      <a 
                        href={selectedTeamMember.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={combine(styles.p4, "text-blue-700 hover:text-blue-800 underline")}
                      >
                        {selectedTeamMember.website}
                      </a>
                    </div>
                  </>
                )}
                <div className="w-full h-px bg-gray-200"></div>
              </div>

              {/* Office Location */}
              {selectedTeamMember.address && (
                <div className="text-left">
                  <p className={combine(styles.p4, "text-zink mb-1 font-semibold")}>{selectedTeamMember.address.title}</p>
                  <div className="space-y-1">
                    {selectedTeamMember.address.lines.map((line: string, index: number) => (
                      <p key={index} className={combine(styles.p4, "text-zink")}>{line}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Notice */}
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className={combine(styles.p4, "text-yellow-800 font-inter")}>
                  <strong>Note:</strong> {selectedTeamMember.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;