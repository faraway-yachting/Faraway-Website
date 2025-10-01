"use client";
import HeadingContent from "@/common/heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import { yachtFeatures, catamaranDetails, yachtThumbnails } from "@/data/cabincharter/momentsData";
import { styles, combine } from "@/styles/style";

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
        <p className={combine(styles.p2, "font-semibold text-zink",  index === 3 ? "mt-2" : "",)}>{title}</p>
      </div>
      <p className={combine("text-zink font-medium", styles.p4)}>{value}</p>
    </div>
  );

  const renderDetail = ({ label, description }: any, idx: number) => (
    <div key={idx} className="bg-white">
      <h3 className={combine("font-bold text-zink", styles.h5)}>{label}:</h3>
      <p className={combine("text-zink pt-1 pb-3 leading-relaxed md:py-3", styles.p3)}>
        {description}
      </p>
    </div>
  );

  return (
    <section className="bg-white pb-10 lg:pb-12 xl:pb-14 px-4 md:px-4 xl:px-8">
      <div className={styles.containerLarge}>
        {/* Title */}
        <div className="text-center mb-10">
          <HeadingContent
            heading="Details of Sailing Yacht Amadeus "
            description="Discover the features that make our catamaran the ultimate escape vessel"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center justify-center lg:justify-start lg:items-start">
          {/* Left: Image Slider (5 of 12 columns) */}
          <div className="md:col-span-5">
            <div className="relative w-full h-[290px] md:h-[320px] lg:h-[350px] xl:h-[400px] rounded-tl-3xl rounded-br-3xl overflow-hidden mb-4">
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
                      <td className={combine("font-bold text-zink px-4 py-3 w-[80px] align-top", styles.p1)}>
                        {item.label}:
                      </td>
                      <td className={combine("px-4 py-3 text-zink leading-relaxed", styles.p2)}>
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile Details */}
            <div className="block md:hidden space-y-2 lg:space-y-3 xl:space-y-4">
              {catamaranDetails.map(renderDetail)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SailingDetails;
