"use client";
import React, { useState, useEffect } from 'react';
import { FaAnchor, FaChevronUp, FaFileContract, FaDownload, FaEnvelope, FaPhone, FaShip, FaWater, FaStar, FaHandshake, FaCheckCircle, FaGlobe, FaUsers, FaAward, FaClock } from 'react-icons/fa';
import { styles, combine } from '@/styles/style';

const Agent = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Boat list data
  const boats = [
    { name: "MY Hot Chilli 38 ft.", type: "Motor Yacht", capacity: "8 guests" },
    { name: "SY Mozart 48 ft.", type: "Sailing Yacht", capacity: "10 guests" },
    { name: "SY Shindig 48 ft.", type: "Sailing Yacht", capacity: "10 guests" },
    { name: "MY Sail La Vie 51 ft.", type: "Motor Yacht", capacity: "12 guests" },
    { name: "SY Amadeus 48 ft.", type: "Sailing Yacht", capacity: "10 guests" }
  ];

  // Contract data
  const contracts = [
    {
      title: "ALL CONTRACTS 25-26",
      subtitle: "(need to be filled only once to receive all contracts)",
      isMain: true,
      icon: FaFileContract,
      color: "bg-zink"
    },
    {
      title: "AMADEUS CABIN CHARTER CONTRACT 25-26",
      subtitle: "Cabin Charter Agreement",
      isMain: false,
      icon: FaUsers,
      color: "bg-blue-700"
    },
    {
      title: "AMADEUS PRIVATE CHARTER CONTRACT 25-26", 
      subtitle: "Private Charter Agreement",
      isMain: false,
      icon: FaStar,
      color: "bg-teal-700"
    },
    {
      title: "HOT CHILLI CONTRACT 25-26",
      subtitle: "Motor Yacht Agreement",
      isMain: false,
      icon: FaShip,
      color: "bg-green-700"
    },
    {
      title: "MOZART CONTRACT 25-26",
      subtitle: "Sailing Yacht Agreement",
      isMain: false,
      icon: FaWater,
      color: "bg-emerald-700"
    },
    {
      title: "SHINDIG CONTRACT 25-26",
      subtitle: "Sailing Yacht Agreement",
      isMain: false,
      icon: FaWater,
      color: "bg-cyan-700"
    },
    {
      title: "SAIL LA VIE CONTRACT 25-26",
      subtitle: "Motor Yacht Agreement",
      isMain: false,
      icon: FaShip,
      color: "bg-indigo-700"
    }
  ];

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

  const handleContractClick = (contractTitle: string) => {
    console.log(`Opening contract: ${contractTitle}`);
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
          <FaShip className="text-4xl text-mustard opacity-20" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float" style={{animationDelay: '1s'}}>
          <FaWater className="text-3xl text-zink opacity-20" />
        </div>

        <div className="relative bg-zink py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-mustard rounded-full mb-8 shadow-2xl">
                <FaHandshake className="text-4xl text-white" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
                Agent Portal
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Welcome to Faraway Yachting's Exclusive Partner Portal
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <div className="w-20 h-1 bg-mustard rounded-full"></div>
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <div className="w-20 h-1 bg-mustard rounded-full"></div>
              </div>
              <div className="flex justify-center items-center space-x-8 text-gray-200">
                <div className="flex items-center space-x-2">
                  <FaAward className="text-mustard" />
                  <span>15% Commission</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>Digital Contracts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-mustard" />
                  <span>Global Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className={`${styles.py4} bg-white`}>
        <div className={styles.container}>
          <div className="bg-gray-50 rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className={`${styles.h2} text-zink mb-6`}>
                Dear Agent or Partner,
              </h2>
              <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
            </div>
            
            <div className={`${styles.grid2Col} items-center`}>
              <div className="space-y-6">
                <p className={`${styles.p1} text-gray-700 leading-relaxed`}>
                  Thank you for your interest in our boat operation services and for considering us as a potential partner for your valuable guests.
                </p>
                <p className={`${styles.p1} text-gray-700 leading-relaxed`}>
                  We are pleased to provide you with the contracts for our boats, which can be found below.
                </p>
                
                {/* Commission Highlight */}
                <div className="bg-mustard text-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <FaAward className="text-3xl" />
                    <div>
                      <h3 className="text-2xl font-bold">15% Commission</h3>
                      <p className="text-yellow-100">Included for all boats in the contract</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-zink mb-6 text-center">Contract Process</h3>
                <div className="space-y-4">
                  {[
                    "Carefully read our terms and conditions and confirm your acceptance of them.",
                    "Fill in all of your details and sign the contract digitally.",
                    "The finished contract, which will be signed by our director and affixed with our company stamp will be sent to you via mail as PDF.",
                    "We receive the contract in CC."
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-mustard rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border-l-4 border-mustard rounded-r-2xl p-6">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-zink mb-2">Digital Contract Acceptance</h4>
                  <p className="text-gray-700">
                    We fully accept digital contracts. We encourage you to help us save the environment by avoiding printing unless it is absolutely necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Section */}
      <div className={`${styles.py4} bg-gray-50`}>
        <div className={styles.container}>
          <div className="text-center mb-12">
            <h2 className={`${styles.h2} text-zink mb-6`}>Our Premium Fleet</h2>
            <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
          </div>
          
          <div className={styles.grid3Col}>
            {boats.map((boat, index) => (
              <div key={index} className="group text-zink bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-mustard rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaAnchor className="text-white text-xl" />
.                  </div>
                  <div className="text-left">
                    <h3 className={combine(styles.h5,"font-semibold")}>{boat.name}</h3>
                    <p className={styles.p4}>{boat.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaUsers className="text-mustard" />
                  <span className={styles.p4}>{boat.capacity}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 border-t-2 border-dashed border-gray-300"></div>
        </div>
      </div>

      {/* Contracts Section */}
      <div className={`${styles.py4} bg-white`}>
        <div className={styles.container}>
          <div className="text-center mb-16">
            <h2 className={`${styles.h2} text-zink mb-6`}>SEASON 25-26 CONTRACTS</h2>
            <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
          </div>

          <div className={styles.grid2Col}>
            {/* ALL CONTRACTS 25-26 */}
            <button
              onClick={() => handleContractClick("ALL CONTRACTS 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    ALL CONTRACTS 25-26
                  </h3>
                </div>
              </div>
            </button>

            {/* AMADEUS CABIN CHARTER CONTRACT 25-26 */}
            <button
              onClick={() => handleContractClick("AMADEUS CABIN CHARTER CONTRACT 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`flex items-center space-x-4`}>
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    AMADEUS CABIN CHARTER CONTRACT 25-26
                  </h3>
                </div>
              </div>
            </button>

            {/* AMADEUS PRIVATE CHARTER CONTRACT 25-26 */}
            <button
              onClick={() => handleContractClick("AMADEUS PRIVATE CHARTER CONTRACT 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`flex items-center space-x-4`}>
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    AMADEUS PRIVATE CHARTER CONTRACT 25-26
                  </h3>
                </div>
              </div>
            </button>

            {/* HOT CHILLI CONTRACT 25-26 */}
            <button
              onClick={() => handleContractClick("HOT CHILLI CONTRACT 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`flex items-center space-x-4`}>
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    HOT CHILLI CONTRACT 25-26
                  </h3>
                </div>
              </div>
            </button>

            {/* MOZART CONTRACT 25-26 */}
            <button
              onClick={() => handleContractClick("MOZART CONTRACT 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`flex items-center space-x-4`}>
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    MOZART CONTRACT 25-26
                  </h3>
                </div>
              </div>
            </button>

            {/* SHINDIG CONTRACT 25-26 */}
            <button
              onClick={() => handleContractClick("SHINDIG CONTRACT 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`flex items-centerspace-x-4`}>
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    SHINDIG CONTRACT 25-26
                  </h3>
                </div>
              </div>
            </button>

            {/* SAIL LA VIE CONTRACT 25-26 */}
            <button
              onClick={() => handleContractClick("SAIL LA VIE CONTRACT 25-26")}
              className="group relative overflow-hidden bg-zink text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`flex items-center space-x-4`}>
                <div className="w-4 h-4 bg-mustard rounded-full"></div>
                <div className="text-left">
                  <h3 className={styles.h5}>
                    SAIL LA VIE CONTRACT 25-26
                  </h3>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`${styles.py4} bg-gray-50`}>
        <div className={styles.container}>
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className={`${styles.h2} text-zink mb-6`}>Get In Touch</h2>
              <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
            </div>
            
            <p className={`${styles.p1} text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed`}>
              Should you have any questions, require assistance, or wish to make changes to the contract, please do not hesitate to contact us:
            </p>
            
            <div className={`${styles.grid2Col} mb-12`}>
              <div className="group bg-zink rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`flex items-center space-x-7`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-3xl text-mustard" />
                  </div>
                  <div>
                    <h5 className={styles.h5}>Email Us</h5>
                    <p className="text-white">info@farawayyachting.com</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-zink rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`flex items-center space-x-7`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-3xl text-mustard" />
                  </div>
                  <div>
                    <h5 className={styles.h5}>Call Us</h5>
                    <p className="text-gray-200">+66 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <p className={`${styles.p1} text-gray-700 mb-6 leading-relaxed`}>
                Thank you again for considering us as your boat operator, and we look forward to the opportunity to work with you.
              </p>
              <div className={`${styles.flexCenter} space-x-4 text-2xl font-bold text-zink`}>
                <FaGlobe className="text-mustard" />
                <span>Sunny regards from Phuket,</span>
              </div>
              <p className={`${styles.p1} font-semibold text-zink mt-2`}>
                Your Faraway Yachting Team
              </p>
            </div>
          </div>
        </div>
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

export default Agent;