"use client";
import { useState } from "react";
import { highSeason, greenSeason, ItineraryItem } from "@/data/destination/itineraryData";

const ItinerarySection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => setActiveId(prev => prev === id ? null : id);

  const renderItem = (item: ItineraryItem) => (
    <div key={item.id} className="bg-[#F9FAFB] border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200">
      <button
        onClick={() => toggleItem(item.id)}
        className="flex justify-between items-center w-full p-3 lg:p-4 cursor-pointer text-left"
      >
        <div className="flex items-center gap-4">
          <span className="bg-[#034250] text-white font-poppins text-sm font-medium px-2 py-1 rounded-lg">
            {item.days}
          </span>
          <h4 className="font-semibold text-base text-zink">{item.place}</h4>
        </div>
        <span className="text-2xl font-bold text-gray-400">
          {activeId === item.id ? "−" : "+"}
        </span>
      </button>

      {activeId === item.id && (
        <div className="px-4 pb-4 space-y-4 text-sm sm:text-base text-gray-600">
          {item.itinerary.map((day, idx) => (
            <div key={idx}>
              <h5 className="font-semibold text-zink text-base sm:text-lg mb-2">{day.title}</h5>
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
      <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair text-zink font-bold mb-1 text-center lg:text-left">
        {title}
      </h2>
      <p className="text-mustard text-base lg:text-lg mb-6 font-sourceSansPro text-center lg:text-left">
        {subtitle}
      </p>
      <div className="space-y-4">{data.map(renderItem)}</div>
    </div>
  );

  return (
    <section className="bg-white py-12 px-4 lg:px-8" id="overnightitineraries">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-16">
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
