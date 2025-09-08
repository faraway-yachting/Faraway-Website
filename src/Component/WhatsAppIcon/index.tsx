'use client';

import React, { useState, useEffect } from 'react';

const WhatsAppIcon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show icon immediately on page load
      setIsVisible(true);  
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);                                                 
      // WhatsApp URL with specific format to ensure chat opens
      const whatsappUrl = 'https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0';
      window.open(whatsappUrl, '_blank');
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`relative cursor-pointer transition-all duration-700 ease-out transform ${
          isVisible ? 'animate-bounce-in' : 'opacity-0 scale-0'
        } ${isHovered ? 'scale-110 -translate-y-2' : 'scale-100 translate-y-0'} ${
          isClicked ? 'scale-95' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}
        style={{
          animation: isVisible ? 'bounceIn 0.8s ease-out, float 3s ease-in-out infinite 1s' : 'none'
        }}
      >
        {/* Multiple pulsing rings with different delays */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" style={{ animationDelay: '0s' }}></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        
        {/* Rotating gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-spin opacity-20" style={{ animationDuration: '4s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1 -left-2 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '1.4s' }}></div>
        
        {/* Main WhatsApp icon with enhanced effects */}
        <div className={`relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 rounded-full p-4 shadow-2xl transition-all duration-500 transform ${
          isHovered ? 'rotate-12 shadow-green-500/50 shadow-3xl' : 'rotate-0 shadow-xl'
        } ${isClicked ? 'scale-90' : 'scale-100'}`}>
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-sm"></div>
          
          <svg
            className={`w-8 h-8 text-white transition-all duration-300 ${
              isHovered ? 'scale-110 drop-shadow-lg' : 'scale-100'
            } ${isClicked ? 'scale-95' : 'scale-100'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
        
        {/* Hover box hidden */}
      </div>
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppIcon;
