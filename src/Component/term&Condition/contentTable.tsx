// components/TableOfContents.tsx
"use client"
import React from "react";
import Image from "next/image";
interface Section {
  number: string;
  title: string;
  points?: string[];
}

const TableOfContents: React.FC = () => {
  const sections: Section[] = [
    { number: "01", title: "Booking", points: ["1.6 Daycharter payments", "1.7 Overnight charter payments"] },
    { number: "02", title: "Altering a Booking" },
    {
      number: "03",
      title: "Cancellations and Insurance",
      points: ["3.2.1  Day charter cancellation", "3.2.2 Overnight charter cancellation"],
    },
    { number: "04", title: "Force Majeure" },
    { number: "05", title: "Safety" },
    { number: "06", title: "Liability" },
    { number: "07", title: "Holiday & Cancellation Insurance" },
    { number: "08", title: "Equipment Breakdown" },
    { number: "09", title: "Complaints" },
    { number: "10", title: "Information Provided" },
    { number: "11", title: "Price Changes & Promotions" },
    { number: "12", title: "Intellectual Property & Privacy Policy" },
    { number: "13", title: "Additional Terms" },
    { number: "14", title: "Final Note (including bookings as agency)" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Absolute Top Right Image */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[950px] h-[450px] overflow-hidden">
        <div className="w-full h-full clip-custom-shape relative">
          {/* Image */}
          <Image
            src="/images/term1.png"
            alt="Decorative"
            fill
            className="object-cover"
          />
          {/* Color overlay ABOVE image */}
          <div className="absolute inset-0 bg-[#034250]/30 z-10"></div>
        </div>

        <style jsx>{`
    .clip-custom-shape {
      clip-path: ellipse(75% 100% at 75% 0%);
    }
  `}</style>
      </div>

      <div className="max-w-[78.5rem] mx-auto bg-white rounded-xl">
        {/* Top Section with Purple Circle */}
        <div className="relative z-10 p-8 flex items-start gap-6 ms-6">
          <div className="w-50 h-50 bg-zink rounded-full border-3 border-mustard flex items-center justify-center shadow-lg shrink-0">
            <div className="text-center text-white font-bold">
              <p className="text-2xl leading-tight">Table of</p>
              <p className="text-3xl leading-tight">Contents</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-8 pb-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.number} className={`flex gap-4 ${section.points ? 'items-start' : 'items-center'}`}>
                {/* Number Circle */}
                <div className="w-14 h-14 bg-zink rounded-full flex items-center justify-center shadow-md border-3 border-mustard shrink-0">
                  <span className="text-white font-bold text-xl">{section.number}</span>
                </div>

                {/* Title & Points */}
                <div className="flex-1">
                  <h3 className="text-[26px] font-semibold text-zink">{section.title}</h3>
                  {section.points && (
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
      </div>
    </section >
  );
};

export default TableOfContents;
