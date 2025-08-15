"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdCreditCard, MdOutlinePrivacyTip, MdSchedule, MdCancel, MdWarning, MdSecurity, MdDescription, MdInfo, MdCheckCircle } from 'react-icons/md';
import { LuFileTerminal } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiSolidCommentDetail } from "react-icons/bi";
import { termsData, insuranceRecommendation, finalMessage } from "../../data/termsData";
import HeadingContent from "@/common/heading";

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

interface Point {
  text: string;
  id: string;
}

interface Section {
  number: string;
  title: string;
  points?: Point[];
  id: string;
}

export default function TermsWithTable() {
  const router = useRouter();
  // Your manually defined TOC (unchanged)
  const sections: Section[] = [
    {
      number: "01", title: "Booking", id: "booking", points: [
        { text: "1.6 Daycharter payments", id: "daycharter-payments" },
        { text: "1.7 Overnight charter payments", id: "overnight-charter-payments" }],
    },
    { number: "02", title: "Altering a Booking", id: "altering-a-booking" },
    {
      number: "03", title: "Cancellations and Insurance", id: "cancellations-and-insurance", points: [
        { text: "3.2.1 Day charter cancellation", id: "day-charter-cancellation" },
        { text: "3.2.2 Overnight charter cancellation", id: "overnight-charter-cancellation"} ],
    },
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
    // Update URL with the ID
    router.push(`#${id}`);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1); // Remove the # symbol
      
      // Check if it's a section ID
      const section = sections.find(s => s.id === targetId);
      if (section) {
        setTimeout(() => handleScroll(section.id), 100);
        return;
      }
      
      // Check if it's a subsection ID by looking through all sections
      for (const section of sections) {
        if (section.points) {
          const point = section.points.find(p => p.id === targetId);
          if (point) {
            setTimeout(() => handleScroll(point.id), 100);
            return;
          }
        }
      }
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Image */}
      <div className="absolute top-0 right-0 w-[370px] md:w-[520px] lg:w-[700px] xl:w-[950px] h-[290px] md:h-[260px] lg:h-[350px] xl:h-[450px] overflow-hidden hidden md:block">
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
        <div className="relative z-10 p-8 flex items-start gap-6 ms-0 xl:ms-6">
          <div className="w-32 md:w-33 lg:w-38 xl:w-50 h-32 md:h-33 lg:h-38 xl:h-50 bg-zink rounded-full border-3 border-mustard flex items-center justify-center shadow-lg shrink-0">
            <div className="text-center text-white font-bold">
              <p className="text-lg md:text-lg lg:text-xl xl:text-2xl  leading-tight">Table of</p>
              <p className="text-xl md:text-xl lg:text-2xl xl:text-3xl leading-tight">Contents</p>
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
                <div className="w-11 lg:w-14 h-11 lg:h-14 bg-zink rounded-full flex items-center justify-center shadow-md border-3 border-mustard shrink-0">
                  <span className="text-white font-bold text-base lg:text-xl">{section.number}</span>
                </div>
                {/* Title & Points */}
                <div className="flex-1">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-semibold text-zink">{section.title}</h3>
                  {section.points && section.points.length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-base text-zink font-medium">
                      {section.points.map((point, idx) => (
                        <li 
                          key={idx} 
                          className="cursor-pointer hover:text-mustard transition-colors duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleScroll(point.id);
                          }}
                        >
                          {point.text}
                        </li>
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
          <div className="mb-10">
            <HeadingContent
              heading="Terms and Conditions"
              description="By booking a yacht charter with us, you agree to our terms and conditions. These apply to all clients for all charters on our vessels, unless otherwise agreed in writing. Please read them carefully before booking." />
          </div>
          <div className="space-y-8">
            {termsData.map((section) => {
              const IconComponent = iconMap[section.icon as keyof typeof iconMap];
              return (
                <div key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                  {/* Section Header */}
                  <div className="flex items-center space-x-3 border-b border-zink pb-3">
                    {IconComponent && <IconComponent className="w-8 h-8 text-zink" />}
                    <h2 className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-zink">{section.title}</h2>
                  </div>

                  {/* Section Content */}
                  <div className="pl-9">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.id} id={subsection.id} className="mb-4 scroll-mt-24">
                        {subsection.title && (
                          <p className="font-semibold text-lg md:text-xl text-zink mb-2 me-3">{subsection.title}<span className="text-zink text-sm md:text-base font-normal ms-2">{subsection.content}</span>
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Special Insurance Box */}
                    {section.id === "insurance" && (
                      <div className="bg-[#E6ECED33] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-6 border-l-[7px] border-l-[#034250]">
                        <div className="flex-1 text-left py-3">
                          <p className="text-zink text-base font-medium">{insuranceRecommendation.title}</p>
                          <p className="text-zink text-sm md:text-base mt-2">{insuranceRecommendation.content}</p>
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
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">{finalMessage.title}</h3>
              <p className="text-white text-basemd:text-lg">{finalMessage.subtitle}</p>
              <p className="text-white text-lg lg:text-xl font-semibold mt-2">{finalMessage.signature}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
