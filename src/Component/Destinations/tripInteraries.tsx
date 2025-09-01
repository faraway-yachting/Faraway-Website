"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dayTripCards } from "@/data/destination/sliderData";
import { styles, combine } from "@/styles";

const DayTripSlider = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [autoCardIndex, setAutoCardIndex] = useState(0);

  useEffect(() => {
    if (activeTab === null) {
      const interval = setInterval(() => {
        setAutoCardIndex((prevIndex) => (prevIndex + 1) % dayTripCards.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const currentCard = activeTab
    ? dayTripCards.find((card) => card.label === activeTab)
    : dayTripCards[autoCardIndex];

  return (
    <div className={combine("bg-white", styles.py2, styles.px4)}>
      <div className={combine("text-center",styles.container)}>
        <div className="text-center">
          <h2 className={combine("font-bold text-zink", styles.h2)}>
            Day Trip Itineraries
          </h2>
          <p className="mt-2 text-black font-semibold text-xl md:[24px] lg:text-[28px]">
            What do you like to do?
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {dayTripCards.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`py-1 text-[15px] md:text-lg xl:text-xl font-poppins font-medium flex items-center gap-2 transition ${activeTab === label
                  ? "text-mustard border-b-2 border-mustard"
                  : "text-zink border-b-2 border-b-zink"
                  }`}
              >
                <span>
                  <Icon size={24} />
                </span>
                {label}
              </button>
            ))}
          </div>
          {/* Card */}
          {currentCard && (
            <div className="mt-10 flex flex-col sm:flex-row bg-white border shadow-md rounded-xl overflow-hidden max-w-[1000px] mx-auto transition-all duration-500">
              <div className="w-full sm:w-1/2">
                <Image
                  src={currentCard.image}
                  alt={currentCard.category}
                  width={400}
                  height={400}
                  className="object-cover w-full h-[300px] md:h-[485px] lg:h-[560px] xl:h-[580px]"
                />

              </div>
              <div className="p-4 lg:p-6 text-left w-full sm:w-1/2">
                <h3 className={combine("leading-tight font-playfair font-semibold text-blue mb-3", styles.h3)}>
                  {currentCard.category}
                </h3>
                <p className={combine("font-medium text-zink font-inter mb-2", styles.p2)}> {currentCard.text}
                </p>
                <p className={combine("font-medium text-zink font-inter mb-1", styles.p2)}> {currentCard.title}
                </p>
                {currentCard.highlights && currentCard.highlights.length > 0 && (
                  <ul className={combine("list-disc list-inside font-inter font-bold text-zink space-y-1", styles.p3)}>
                    {currentCard.highlights.map((point, idx) => (
                      <li key={idx}>
                        {point}
                        {currentCard.text2?.[idx] && (
                          <span className="text-gray-500">
                            {currentCard.text2[idx]}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Description */}
                <div className={combine("font-medium text-zink font-inter space-y-2", styles.p3)}>
                  {currentCard.description.map((desc, idx) => (
                    <p key={idx} className="mb-3">{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayTripSlider;
