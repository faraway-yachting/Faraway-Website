"use client";
import React, { useState } from "react";
import {
  FaAnchor,
  FaEnvelope,
  FaPhone,
  FaHandshake,
  FaCheckCircle,
  FaGlobe,
  FaAward,
} from "react-icons/fa";
import { styles, combine } from "@/styles/style";

const Agent = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Boat list data
  const boats = [
    {
      name: "MY Hot Chilli 38 ft.",
      type: "Motor Yacht",
      link: "https://drive.google.com/drive/folders/1M-OzS6gWi0i2FhXjsZcWTgMqn9eL0E7q?usp=drive_link",
    },
    {
      name: "SY Mozart 48 ft.",
      type: "Sailing Yacht",
      link: "https://drive.google.com/drive/folders/140ErRc-9ntOILE-X1anLGEB_xfFoxvyp",
    },
    {
      name: "SY Shindig 48 ft.",
      type: "Sailing Yacht",
      link: "https://drive.google.com/drive/folders/1xFjE68Tk-yGJlNwiZra_fkSDibNwMamW?usp=drive_link",
    },
    {
      name: "MY Sail La Vie 51 ft.",
      type: "Motor Yacht",
      link: "https://drive.google.com/drive/folders/1CBA_PKwPJcQe6xAWzyjjWkqP4TMel8wx?usp=drive_link",
    },
    {
      name: "SY Amadeus 48 ft.",
      type: "Sailing Yacht",
      link: "https://drive.google.com/drive/folders/1LZSegN6GmT90benf4whmJO2cC2P3bwJc?usp=drive_link",
    },
    {
      name: "SY Nauti By Nature",
      type: "Sailing Yacht",
      link: "https://drive.google.com/drive/folders/10idqkq1CEsqJE-k2pQSu48lP0JpLs9i8?usp=drive_link",
    },
  ];

  // Contracts data
  const contracts = [
    {
      title: "ALL CONTRACTS 25-26",
      href: "https://sendlink.co/documents/doc-form/68b53602355b332ea13c54b3?locale=en-US",
    },
    {
      title: "AMADEUS CABIN CHARTER CONTRACT 25-26",
      href: "https://sendlink.co/documents/doc-form/68b96d08fac8341820e78b49?locale=en-US",
    },
    {
      title: "AMADEUS PRIVATE CHARTER CONTRACT 25-26",
      href: "https://sendlink.co/documents/doc-form/68b930bf654223cf029f98db?locale=en-US",
    },
    {
      title: "HOT CHILLI CONTRACT 25-26",
      href: "https://sendlink.co/documents/doc-form/68b94360fac834e09ee6c668?locale=en-US",
    },
    {
      title: "MOZART CONTRACT 25-26",
      href: "https://sendlink.co/documents/doc-form/68ba5e1f0cb4b8c5dbeae59c?locale=en-US",
    },
    {
      title: "SHINDIG CONTRACT 25-26",
      href: "https://sendlink.co/documents/doc-form/68ba75dcd427e85dbf5ff990?locale=en-US",
    },
    {
      title: "SAIL LA VIE CONTRACT 25-26",
      href: "https://sendlink.co/documents/doc-form/68ba59c7fac8342daaf3d482?locale=en-US",
    },
    {
      title: "Nauti By Nature CONTRACT 2025-2026",
      href: "https://sendlink.co/documents/doc-form/68ba70cf0cb4b8768ceb3bc6?locale=en-US",
    },
  ];

  


  const copyPhoneToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('+66 123 456 789');
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('info@farawayyachting.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-zink py-20">
        <div className={styles.container}>
          <div className="text-center text-white">
            <div className={`${styles.flexCenter} w-24 h-24 bg-mustard rounded-full mb-8 shadow-2xl mx-auto`}>
              <FaHandshake className="text-4xl text-white" />
            </div>
            <h1 className={`${styles.h1} mb-6 text-white`}>
              Agent Contracts
            </h1>
            <p className={`${styles.p1} text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed`}>
              Welcome to Faraway Yachting's Exclusive Partner Portal
            </p>
            <div className={`${styles.flexCenter} space-x-4 mb-8`}>
              <div className="w-20 h-1 bg-mustard rounded-full"></div>
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <div className="w-20 h-1 bg-mustard rounded-full"></div>
            </div>
            <div className={`${styles.flexCenter} space-x-4 md:space-x-8 text-gray-200 flex-wrap gap-4`}>
              <div className={`${styles.flexCenter} space-x-2`}>
                <FaAward className="text-mustard" />
                <span className="text-sm md:text-base">15% Commission</span>
              </div>
              <div className={`${styles.flexCenter} space-x-2`}>
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm md:text-base">Digital Contracts</span>
              </div>
              <div className={`${styles.flexCenter} space-x-2`}>
                <FaGlobe className="text-mustard" />
                <span className="text-sm md:text-base">Global Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className={`${styles.py4} bg-white`}>
        <div className={styles.container}>
          <div className="bg-gray-50 rounded-3xl p-5 md:p-7 lg:p-8 xl:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className={`${styles.h2} text-zink mb-6`}>
                Dear Agent or Partner,
              </h2>
              <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
            </div>

            <div className={`${styles.grid2Col} items-start`}>
              <div className="space-y-6">
                <p className={`${styles.p1} text-gray-700 leading-relaxed`}>
                  Thank you for your interest in our boat operation services and
                  for considering us as a potential partner for your valuable
                  guests.
                </p>
                <p className={`${styles.p1} text-gray-700 leading-relaxed`}>
                  We are pleased to provide you with the contracts for our
                  boats, which can be found below.
                </p>

                {/* Commission Highlight */}
                <div className="bg-mustard text-white rounded-2xl p-6 shadow-lg">
                  <div className={`${styles.flexCenter} space-x-3`}>
                    <FaAward className="text-3xl" />
                    <div>
                      <h3 className={`${styles.h3} text-white`}>15% Commission</h3>
                      <p className={`${styles.p4} text-yellow-100`}>
                        Included for all boats in the contract
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg">
                <h3 className={`${styles.h3} text-zink mb-6 text-center`}>
                  Contract Process
                </h3>
                <div className="space-y-2 lg:space-y-4">
                  {[
                    "Carefully read our terms and conditions and confirm your acceptance of them.",
                    "Fill in all of your details and sign the contract digitally.",
                    "The finished contract, which will be signed by our director and affixed with our company stamp will be sent to you via mail as PDF.",
                    "We receive the contract in CC.",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`${styles.flexCenter} w-8 h-8 bg-mustard rounded-full flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <p className={`${styles.p2} text-gray-700 leading-relaxed`}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border-l-4 border-mustard rounded-r-2xl p-4 md:p-6">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-2xl text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className={`${styles.h5} text-zink mb-2`}>
                    Digital Contract Acceptance
                  </h4>
                  <p className={`${styles.p2} text-gray-700`}>
                    We fully accept digital contracts. We encourage you to help
                    us save the environment by avoiding printing unless it is
                    absolutely necessary.
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
            <h2 className={`${styles.h2} text-zink mb-6`}>Media</h2>
            <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-6 lg:gap-10 xl:gap-15">
            {boats.map((boat, index) => (
              <a
                key={index}
                href={boat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zink bg-white rounded-2xl p-4 lg:p-5 xl:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block"
              >
                <div className="flex items-center space-x-4">
                  <div className={`${styles.flexCenter} w-12 h-12 bg-mustard rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <FaAnchor className="text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className={combine(styles.h5, "font-semibold")}>
                      {boat.name}
                    </h3>
                    <p className={styles.p4}>{boat.type}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 border-t-2 border-dashed border-gray-300"></div>
        </div>
      </div>

      {/* Contracts Section */}
      <div className={`${styles.py4} bg-white`}>
        <div className={styles.container}>
          <div className="text-center mb-16">
            <h2 className={`${styles.h2} text-zink mb-6`}>
              SEASON 25-26 CONTRACTS
            </h2>
            <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
          </div>

          <div className={styles.grid2Col}>
            {contracts.map((contract, index) => (
              <a
                key={index}
                href={contract.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="group relative overflow-hidden bg-zink text-white rounded-2xl p-4 lg:p-5 xl:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full h-19 flex items-center">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-4 h-4 bg-mustard rounded-full flex-shrink-0"></div>
                    <div className="text-left flex-1">
                      <h3 className={`${styles.h5} leading-tight`}>{contract.title}</h3>
                    </div>
                  </div>
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`${styles.py4} bg-gray-50`}>
        <div className={styles.container}>
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className={`${styles.h2} text-zink mb-6`}>Get In Touch</h2>
              <div className="w-32 h-1 bg-mustard mx-auto rounded-full"></div>
            </div>
            <p className={`${styles.p1} text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed`}>
              Should you have any questions, require assistance, or wish to make
              changes to the contract, please do not hesitate to contact us:
            </p>

            <div className={`${styles.grid2Col} mb-12`}>
              <div className="group bg-zink rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaEnvelope className="text-2xl md:text-3xl text-mustard" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className={`${styles.h5} mb-1`}>Email Us</h5>
                    <button
                      onClick={copyEmailToClipboard}
                      className="text-gray-200 hover:text-mustard transition-colors duration-300 cursor-pointer text-sm md:text-base break-all"
                    >
                      {emailCopied ? 'Copied!' : 'booking@faraway-yachting.com'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-zink rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaPhone className="text-2xl md:text-3xl text-mustard" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className={`${styles.h5} mb-1`}>Call Us</h5>
                    <button
                      onClick={copyPhoneToClipboard}
                      className="text-gray-200 hover:text-mustard transition-colors duration-300 cursor-pointer text-sm md:text-base"
                    >
                      {phoneCopied ? 'Copied!' : '+66612345623'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <p className={`${styles.p1} text-gray-700 mb-6 leading-relaxed`}>
                Thank you again for considering us as your boat operator, and we
                look forward to the opportunity to work with you.
              </p>
              <div className={`${styles.flexCenter} space-x-0 md:space-x-4 text-2xl font-bold text-zink`}>
                <FaGlobe className="text-mustard hidden md:block" />
                <span>Sunny regards from Phuket,</span>
              </div>
              <p className={`${styles.p1} font-semibold text-zink mt-2`}>
                Your Faraway Yachting Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
