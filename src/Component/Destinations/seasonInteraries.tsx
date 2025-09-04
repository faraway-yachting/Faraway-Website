"use client";
import { useState } from "react";
import { highSeason, greenSeason, ItineraryItem } from "@/data/destination/itineraryData";
import { styles, combine } from "@/styles";

const ItinerarySection = () => {
  const [activeId, setActiveId] = useState<string | null>("high-1");

  const toggleItem = (id: string) => setActiveId(prev => prev === id ? null : id);

  const renderItem = (item: ItineraryItem) => (
    <div key={item.id} className="bg-[#F9FAFB] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <button
        onClick={() => toggleItem(item.id)}
        className="flex justify-between items-center w-full px-3 lg:px-4 py-2 lg:py-3 cursor-pointer text-left"
      >
        <div className="flex items-center gap-4">
          <span className="bg-zink text-white font-poppins text-sm font-medium px-2 py-1 rounded-lg">
            {item.days}
          </span>
          <h4 className={combine("font-semibold text-zink text-xl")}>{item.place}</h4>
        </div>
        <span className="text-2xl font-bold text-gray-400">
          {activeId === item.id ? "−" : "+"}
        </span>
      </button>

      {activeId === item.id && (
        <div className="px-4 pb-4 space-y-4 text-sm sm:text-base text-gray-600">
          {item.itinerary.map((day, idx) => (
            <div key={idx}>
              <h5 className={combine("font-semibold text-zink mb-2", styles.p2)}>{day.title}</h5>
              <ul className="space-y-1 list-disc list-inside text-gray-700 font-sourceSansPro">
                {day.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const SeasonSection = ({ title, subtitle, data }: { title: string; subtitle: string; data: ItineraryItem[] }) => (
    <div>
      <h2 className={combine("text-zink font-bold mb-1 text-center lg:text-left", styles.h3)}>
        {title}
      </h2>
      <p className={combine("text-mustard mb-6 text-center lg:text-left", styles.p2)}>
        {subtitle}
      </p>
      <div className="space-y-4">{data.map(renderItem)}</div>
    </div>
  );

  return (
    <section className={combine("bg-white", styles.py4, styles.px4)} id="overnightitineraries">
      <div className={styles.container}>
        <div className={combine("grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-16", styles.gap1)}>
          <SeasonSection 
            title="High Season Itineraries" 
            subtitle="(From November till April)" 
            data={highSeason} 
          />
          <SeasonSection 
            title="Green Season Itineraries" 
            subtitle="(From May till October)" 
            data={greenSeason} 
          />
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
