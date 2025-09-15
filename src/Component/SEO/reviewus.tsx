"use client";
import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronUp, FaHeart, FaGift, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { styles, combine } from '@/styles/style';

const ReviewUs = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReviewClick = (platform: string) => {
    console.log(`Opening review on: ${platform}`);
    // Add actual review links here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-mustard rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-zink rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-mustard rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 border-2 border-zink rounded-full"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 animate-float">
          <FaStar className="text-4xl text-mustard opacity-20" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float" style={{animationDelay: '1s'}}>
          <FaHeart className="text-3xl text-zink opacity-20" />
        </div>

        <div className="relative bg-zink py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-mustard rounded-full mb-8 shadow-2xl">
                <FaStar className="text-4xl text-white" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
                Review Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Your feedback helps us create amazing experiences
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <div className="w-20 h-1 bg-mustard rounded-full"></div>
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <div className="w-20 h-1 bg-mustard rounded-full"></div>
              </div>
              <div className="flex justify-center items-center space-x-8 text-gray-200">
                <div className="flex items-center space-x-2">
                  <FaGift className="text-mustard" />
                  <span>Exclusive Benefits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>Repeater Discounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaHeart className="text-mustard" />
                  <span>Referral Commission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className={`${styles.py4} bg-white`}>
        <div className={styles.container}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Thank You Message */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className={`${styles.h2} text-zink mb-6`}>
                  Dear valued yacht charter guest,
                </h2>
                <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className={`${styles.p1} text-center`}>
                  Thank you for choosing <strong>Faraway Yachting</strong> for your unforgettable yacht charter experience.
                </p>
                
                <p className={`${styles.p1}`}>
                  We are incredibly grateful for your trust in us and would love to hear about your experience. 
                  Your feedback is invaluable to us and helps us ensure that every guest receives the amazing 
                  experience they deserve.
                </p>
                
                <div className="bg-mustard bg-opacity-10 border-l-4 border-mustard rounded-r-2xl p-6 my-8">
                  <div className="flex items-start space-x-4">
                    <FaGift className="text-2xl text-mustard mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-zink mb-2">Exclusive Benefits</h4>
                      <p className="text-gray-700">
                        By leaving a review, you'll be eligible for exclusive benefits including a 
                        <strong> repeater discount on future charters</strong> or a 
                        <strong> referral commission</strong> for introducing new clients to our services.
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className={`${styles.p1}`}>
                  Please note that during our peak season, from Christmas to the end of February, 
                  big discounts are unavailable. However, outside of this period, we offer more 
                  exclusive benefits to our valued guests.
                </p>
                
                <p className={`${styles.p1} text-center font-semibold text-zink`}>
                  We cannot wait to welcome you back and make more unforgettable memories with you.
                </p>
                
                <div className="text-center mt-8">
                  <p className={`${styles.p1} font-semibold text-zink`}>
                    Warm regards,<br />
                    The Faraway Yachting Team
                  </p>
                </div>
              </div>
            </div>

            {/* Review Platform Buttons */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className={`${styles.h3} text-zink mb-6`}>
                  Share Your Experience
                </h3>
                <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
              </div>
              
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                 {/* Google Review Button */}
                 <button
                   onClick={() => handleReviewClick("Google")}
                   className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
                 >
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform translate-x-8 -translate-y-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                   <div className="relative text-center">
                     <div className="mb-6">
                       <h4 className={`${styles.h5} text-zink mb-3 font-semibold`}>Review us on</h4>
                       <div className="flex justify-center items-center space-x-1">
                         <span className="text-blue-500 font-bold text-3xl">G</span>
                         <span className="text-red-500 font-bold text-3xl">o</span>
                         <span className="text-yellow-500 font-bold text-3xl">o</span>
                         <span className="text-blue-500 font-bold text-3xl">g</span>
                         <span className="text-green-500 font-bold text-3xl">l</span>
                         <span className="text-red-500 font-bold text-3xl">e</span>
                       </div>
                     </div>
                     <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                       <FaStar className="text-white text-3xl drop-shadow-lg" />
                     </div>
                     <div className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                       Most Popular
                     </div>
                   </div>
                 </button>

                 {/* Tripadvisor Review Button */}
                 <button
                   onClick={() => handleReviewClick("Tripadvisor")}
                   className="group relative overflow-hidden bg-gradient-to-br from-white to-green-50 border-2 border-green-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-green-400 hover:bg-gradient-to-br hover:from-green-50 hover:to-white"
                 >
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full transform translate-x-8 -translate-y-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                   <div className="relative text-center">
                     <div className="mb-6">
                       <h4 className={`${styles.h5} text-zink mb-3 font-semibold`}>Review us on</h4>
                       <div className="text-green-600 font-bold text-2xl tracking-wide">Tripadvisor</div>
                     </div>
                     <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                       <FaStar className="text-white text-3xl drop-shadow-lg" />
                     </div>
                     <div className="mt-4 text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                       Travel Reviews
                     </div>
                   </div>
                 </button>

                 {/* Facebook Review Button */}
                 <button
                   onClick={() => handleReviewClick("Facebook")}
                   className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
                 >
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full transform translate-x-8 -translate-y-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                   <div className="relative text-center">
                     <div className="mb-6">
                       <h4 className={`${styles.h5} text-zink mb-3 font-semibold`}>Review us on</h4>
                       <div className="text-blue-600 font-bold text-2xl tracking-wide">Facebook</div>
                     </div>
                     <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                       <FaStar className="text-white text-3xl drop-shadow-lg" />
                     </div>
                     <div className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                       Social Reviews
                     </div>
                   </div>
                 </button>

                 {/* Trustpilot Review Button */}
                 <button
                   onClick={() => handleReviewClick("Trustpilot")}
                   className="group relative overflow-hidden bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-emerald-400 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white"
                 >
                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full transform translate-x-8 -translate-y-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                   <div className="relative text-center">
                     <div className="mb-6">
                       <h4 className={`${styles.h5} text-zink mb-3 font-semibold`}>Review us on</h4>
                       <div className="text-emerald-600 font-bold text-2xl tracking-wide">Trustpilot</div>
                     </div>
                     <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                       <FaStar className="text-white text-3xl drop-shadow-lg" />
                     </div>
                     <div className="mt-4 text-sm text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                       Trusted Reviews
                     </div>
                   </div>
                 </button>
               </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 bg-gray-50 rounded-3xl p-8">
              <div className="text-center">
                <h3 className={`${styles.h4} text-zink mb-6`}>
                  Why Your Review Matters
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mustard rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaHeart className="text-white text-2xl" />
                    </div>
                    <h4 className={`${styles.h6} text-zink mb-2`}>Help Others</h4>
                    <p className={`${styles.p4} text-gray-600`}>
                      Your review helps future guests make informed decisions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mustard rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaGift className="text-white text-2xl" />
                    </div>
                    <h4 className={`${styles.h6} text-zink mb-2`}>Earn Benefits</h4>
                    <p className={`${styles.p4} text-gray-600`}>
                      Get exclusive discounts and referral commissions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mustard rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaCheckCircle className="text-white text-2xl" />
                    </div>
                    <h4 className={`${styles.h6} text-zink mb-2`}>Improve Service</h4>
                    <p className={`${styles.p4} text-gray-600`}>
                      Help us enhance our yacht charter experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-zink to-blue-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
        >
          <FaChevronUp className="text-xl group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
};

export default ReviewUs;
