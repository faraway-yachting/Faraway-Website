"use client";
import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaPhone, FaEnvelope, FaIdCard, FaGlobe } from 'react-icons/fa';
import { useState } from "react";
const ImpressumContent = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyEmailToClipboard = async () => {
      try {
          await navigator.clipboard.writeText('booking@faraway-yachting.com');
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000); 
      } catch (err) {
      }
  };

  const copyPhoneToClipboard = async () => {
      try {
          await navigator.clipboard.writeText('+66 61 234 5623');
          setPhoneCopied(true);
          setTimeout(() => setPhoneCopied(false), 2000);
      } catch (err) {
      }
  };
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Main Company Information */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Company Information
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete legal and contact information for FARAWAY YACHTING CO.,LTD
            </p>
          </div>
          {/* Company Details Card */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Name */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBuilding className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Company Name</h3>
                    <p className="text-xl font-bold text-gray-900">FARAWAY YACHTING CO.,LTD</p>
                  </div>
                </div>
                {/* VAT ID */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaIdCard className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">VAT ID</h3>
                    <p className="text-xl font-bold text-gray-900">0835540002116</p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start space-x-4 md:col-span-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Registered Address</h3>
                    <p className="text-lg text-gray-900 leading-relaxed">
                      40/1 Chaofa Road, Moo 9<br />
                      Tambon Chalong, Amphoe Mueang Phuket,<br />
                      Chang Wat Phuket 83130
                    </p>
                  </div>
                </div>
                {/* Contact Information */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Telephone</h3>
                    <p className="text-xl font-bold text-gray-900">+66 61 234 5623</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
                    <p className="text-xl font-bold text-gray-900">booking@faraway-yachting.com</p>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-start space-x-4 md:col-span-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Website</h3>
                    <p className="text-xl font-bold text-gray-900">www.faraway-yachting.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumContent;