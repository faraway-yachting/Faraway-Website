"use client";
import { useEffect, useState } from "react";
import { MdCreditCard, MdSchedule, MdCancel, MdWarning, MdSecurity, MdDescription, MdInfo, MdCheckCircle } from 'react-icons/md';
import { termsData, cancellationDetails, insuranceRecommendation, finalMessage } from '../../data/termsData';

// Icon mapping object
const iconMap = {
  MdCreditCard,
  MdSchedule,
  MdCancel,
  MdWarning,
  MdSecurity,
  MdDescription,
  MdInfo,
  MdCheckCircle
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg  overflow-hidden px-4 my-14">
      {/* Header */}
             <div className="mb-10 text-zink text-center flex flex-col items-center justify-center">
        <h1 className="text-[40px] md:text-4xl font-semibold mb-4">Terms and Conditions</h1>
        <img src="/images/rframe.png" alt="" className="mb-4 mt-1 w-[500px]"/>
        <p className="text-zink text-xl font-medium max-w-3xl mx-auto">
        By booking a yacht charter with us, you agree to our terms and conditions. These apply to all clients for all charters on our vessels, unless otherwise agreed in writing. Please read them carefully before booking
        </p>
      </div>
      {/* Main Content */}
      <div className="space-y-8">
        {/* Dynamic Sections */}
        {termsData.map((section, sectionIndex) => {
          const IconComponent = iconMap[section.icon as keyof typeof iconMap];
          return (
            <div key={section.id} id={section.id} className="space-y-4">
              {/* Section Header */}
              <div className="flex items-center space-x-3 border-b border-zink pb-3">
                <IconComponent className="w-8 h-8 text-zink" />
                <h2 className="text-[28px] font-bold text-zink">{section.title}</h2>
              </div>

              {/* Section Content */}
              <div className="pl-9">
                {section.id === "cancellations-and-insurance" ? (
                  // Special handling for cancellations and insurance section
                  <div className="space-y-4">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id}>
                        <h3 className="font-semibold text-xl text-zink mb-2">{subsection.title}</h3>
                        <p className="text-zink text-base">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                ) : section.id === "insurance" ? (
                  // Special handling for insurance section with recommendation box
                  <div className="space-y-4">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id} className="">
                        <h3 className="font-semibold text-zink mb-2 text-xl">{subsection.title}</h3>
                        <p className="text-zink text-base">{subsection.content}</p>
                      </div>
                    ))}

                    <div className="bg-[#E6ECED33] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-6 border-l-[7px] border-l-[#034250]">
                      <div className="flex-1 text-left py-3">
                        <p className="text-zink text-base font-medium">{insuranceRecommendation.title}</p>
                        <p className="text-zink text-base mt-2">{insuranceRecommendation.content}</p>
                      </div>
                      <div className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] hidden md:block ">
                        <img src="/images/slideText.png" alt="" />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Standard section rendering
                  <div className="space-y-4">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id}>
                        {subsection.title && (
                          <h3 className="font-semibold text-xl text-zink mb-2">{subsection.title}</h3>
                        )}
                        <p className="text-zink text-base">{subsection.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}           

        {/* Final Message */}
        <div className="bg-gradient-to-r from-[#046B7A] to-[#034250] text-white p-8 text-center rounded-lg border-3 border-mustard mt-16">
          <h3 className="text-2xl font-bold mb-4">{finalMessage.title}</h3>
          <p className="text-white text-lg">{finalMessage.subtitle}</p>
          <p className="text-white text-xl font-semibold mt-2">{finalMessage.signature}</p>
        </div>
      </div>
    </div >
  );
}
