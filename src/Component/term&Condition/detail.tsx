"use client";

import React from "react";
import Image from "next/image";
import { MdCreditCard, MdOutlinePrivacyTip, MdSchedule, MdCancel, MdWarning, MdSecurity, MdDescription, MdInfo, MdCheckCircle } from 'react-icons/md';
import { LuFileTerminal } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiSolidCommentDetail } from "react-icons/bi";
import { termsData, insuranceRecommendation, finalMessage } from "../../data/termsData";

// Icon mapping
const iconMap = {
  MdCreditCard,
  MdOutlinePrivacyTip,
  MdSchedule,
  MdCancel,
  MdWarning,
  MdSecurity,
  MdDescription,
  MdInfo,
  MdCheckCircle,
  BiSolidCommentDetail,
  IoMdInformationCircleOutline,
  LuFileTerminal,
};

interface Section {
  number: string;
  title: string;
  points?: string[];
  id: string;
}

export default function TermsWithTable() {
  // Your manually defined TOC (unchanged)
  const sections: Section[] = [
    { number: "01", title: "Booking", points: ["1.6 Daycharter payments", "1.7 Overnight charter payments"], id: "booking" },
    { number: "02", title: "Altering a Booking", id: "altering-a-booking" },
    { number: "03", title: "Cancellations and Insurance", points: ["3.2.1  Day charter cancellation", "3.2.2 Overnight charter cancellation"], id: "cancellations-and-insurance" },
    { number: "04", title: "Force Majeure", id: "force-majeure" },
    { number: "05", title: "Safety", id: "safety" },
    { number: "06", title: "Liability", id: "liability" },
    { number: "07", title: "Holiday & Cancellation Insurance", id: "holiday&cancellation-insurance" },
    { number: "08", title: "Equipment Breakdown", id: "equipment-breakdown" },
    { number: "09", title: "Complaints", id: "complaints" },
    { number: "10", title: "Information Provided", id: "information-provided" },
    { number: "11", title: "Price Changes & Promotions", id: "price-changes&promotions" },
    { number: "12", title: "Intellectual Property & Privacy Policy", id: "intellectual-property&privacy-policy" },
    { number: "13", title: "Additional Terms", id: "additional-terms" },
    { number: "14", title: "Final Note (including bookings as agency)", id: "final-note" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Image */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[950px] h-[450px] overflow-hidden">
        <div className="w-full h-full clip-custom-shape relative">
          <Image src="/images/term1.png" alt="Decorative" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#034250]/30 z-10"></div>
        </div>
        <style jsx>{`
          .clip-custom-shape {
            clip-path: ellipse(75% 100% at 75% 0%);
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl">
        {/* Table of Contents */}
        <div className="relative z-10 p-8 flex items-start gap-6 ms-6">
          <div className="w-50 h-50 bg-zink rounded-full border-3 border-mustard flex items-center justify-center shadow-lg shrink-0">
            <div className="text-center text-white font-bold">
              <p className="text-2xl leading-tight">Table of</p>
              <p className="text-3xl leading-tight">Contents</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-8 pb-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.number}
                className={`flex gap-4 ${section.points ? 'items-start' : 'items-center'} cursor-pointer`}
                onClick={() => handleScroll(section.id)}
              >
                {/* Number Circle */}
                <div className="w-14 h-14 bg-zink rounded-full flex items-center justify-center shadow-md border-3 border-mustard shrink-0">
                  <span className="text-white font-bold text-xl">{section.number}</span>
                </div>
                {/* Title & Points */}
                <div className="flex-1">
                  <h3 className="text-[26px] font-semibold text-zink">{section.title}</h3>
                  {section.points && section.points.length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-base text-zink font-medium">
                      {section.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden px-4 my-14">
          {/* Header */}
          <div className="mb-10 text-zink text-center flex flex-col items-center justify-center">
            <h1 className="text-[40px] md:text-4xl font-semibold mb-4">Terms and Conditions</h1>
            <img src="/images/rframe.png" alt="" className="mb-4 mt-1 w-[500px]" />
            <p className="text-zink text-xl font-medium max-w-3xl mx-auto">
              By booking a yacht charter with us, you agree to our terms and conditions. These apply to all clients for all charters on our vessels, unless otherwise agreed in writing. Please read them carefully before booking.
            </p>
          </div>

          <div className="space-y-8">
            {termsData.map((section) => {
              const IconComponent = iconMap[section.icon as keyof typeof iconMap];
              return (
                <div key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                  {/* Section Header */}
                  <div className="flex items-center space-x-3 border-b border-zink pb-3">
                    {IconComponent && <IconComponent className="w-8 h-8 text-zink" />}
                    <h2 className="text-[28px] font-bold text-zink">{section.title}</h2>
                  </div>

                  {/* Section Content */}
                  <div className="pl-9">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id} className="mb-4">
                        {subsection.title && (
                          <h3 className="font-semibold text-xl text-zink mb-2">{subsection.title}</h3>
                        )}
                        <p className="text-zink text-base">{subsection.content}</p>
                      </div>
                    ))}

                    {/* Special Insurance Box */}
                    {section.id === "insurance" && (
                      <div className="bg-[#E6ECED33] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-6 border-l-[7px] border-l-[#034250]">
                        <div className="flex-1 text-left py-3">
                          <p className="text-zink text-base font-medium">{insuranceRecommendation.title}</p>
                          <p className="text-zink text-base mt-2">{insuranceRecommendation.content}</p>
                        </div>
                        <div className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] hidden md:block">
                          <img src="/images/slideText.png" alt="" />
                        </div>
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
        </div>
      </div>
    </section>
  );
}
