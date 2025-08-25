"use client";
import HeadingContent from "@/common/heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import { yachtFeatures, catamaranDetails, yachtThumbnails } from "@/data/cabincharter/momentsData";

const SailingDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => 
      setCurrentIndex(prev => (prev + 1) % yachtThumbnails.length), 4000
    );
    return () => clearInterval(interval);
  }, []);

  const renderFeature = ({ image, title, value }: any, index: number) => (
    <div key={index} className="border border-gray-200 px-3 py-2 rounded-md text-center bg-[#FFFDF8]">
      <div className="flex flex-col items-center gap-1 text-[#9BA6B2]">
        <img src={image} alt={title} />
        <p className="text-lg lg:text-[20px] font-semibold font-playfar text-zink">{title}</p>
      </div>
      <p className="text-zink text-lg lg:text-[20px] font-medium font-sourceSansPro">{value}</p>
    </div>
  );

  const renderDetail = ({ label, description }: any, idx: number) => (
    <div key={idx} className="bg-white">
      <p className="font-bold text-2xl font-sourceSansPro text-zink">{label}:</p>
      <p className="text-zink font-normal pt-1 pb-3 font-sourceSansPro text-base leading-relaxed md:text-xl md:py-3">
        {description}
      </p>
    </div>
  );

  return (
    <section className="bg-white py-10 lg:py-12 xl:py-14 px-4 md:px-0 lg:px-8">
      <div className="max-w-[78.2rem] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <HeadingContent
            heading="Details of Our Sailing Catamaran"
            description="Discover the features that make our catamaran the ultimate escape vessel"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center justify-center lg:justify-start lg:items-start">
          {/* Left: Image Slider (5 of 12 columns) */}
          <div className="md:col-span-5">
            <div className="relative w-full h-[400px] rounded-tl-3xl rounded-br-3xl overflow-hidden mb-4">
              <Image
                src={yachtThumbnails[currentIndex]}
                alt="Sailing Catamaran"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {yachtThumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 cursor-pointer overflow-hidden rounded-md border transition-all duration-300 ${
                    i === currentIndex ? "border-zink" : "border-gray-300 blur-[1px] hover:blur-0"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                >
                  <Image
                    src={thumb}
                    alt={`Thumb ${i}`}
                    width={70}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Features & Details */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 lg:mt-0">
              {yachtFeatures.map(renderFeature)}
            </div>
            
            {/* Desktop Table */}
            <div className="w-full border border-gray-200 rounded-lg overflow-hidden hidden md:block">
              <table className="w-full table-auto text-left text-[15px] font-sourceSanspro">
                <tbody>
                  {catamaranDetails.map((item, idx) => (
                    <tr key={idx} className="bg-white">
                      <td className="font-bold text-[24px] font-playfair text-zink px-4 py-3 w-[80px] align-top">
                        {item.label}:
                      </td>
                      <td className="px-4 py-3 text-zink font-normal font-sourceSansPro text-[20px] leading-relaxed">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Details */}
            <div className="block md:hidden space-y-4">
              {catamaranDetails.map(renderDetail)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SailingDetails;
