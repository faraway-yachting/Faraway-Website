"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingContent from "@/common/heading";
import { momentsTestimonials } from "@/data/cabincharter/momentsData";
import { styles, combine } from "@/styles/style";

const FunMoments: React.FC = () => {
  const [readMoreStates, setReadMoreStates] = useState<{ [key: string]: boolean }>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Function to truncate text by word count
  const truncateByWords = (text: string, wordLimit: number): string => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  // Function to toggle read more state for individual slides
  const toggleReadMore = (slideId: string) => {
    setReadMoreStates(prev => ({
      ...prev,
      [slideId]: !prev[slideId]
    }));
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20%",
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };
  return (
    <div className={combine(styles.container, "pb-6 md:pb-8 lg:pb-12")}>
      <div>
        <HeadingContent
          heading="Guest Reviews from our Phuket Yacht Charters"
          description="At Faraway Yachting, we’re proud to have received over 750 verified ★★★★★ reviews from guests around the world. Travelers highlight our professional crew, delicious meals, and the unforgettable memories they made at sea. Whether it’s a honeymoon, birthday, or family holiday, our reviews show that your Phuket yacht charter is in the best possible hands"
        />
      </div>
      <Slider {...settings}>
        {momentsTestimonials.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-300 mt-[47px] ${currentSlide === index ? "scale-105 xl:scale-97 z-10" : "scale-85 "
              }`}>
            <div className="bg-white border border-gray-200 rounded-tl-3xl rounded-br-3xl shadow-md h-full flex flex-col justify-between min-h-[183px] md:min-h-[230px] lg:min-h-[250px] xl::min-h-[270px] max-w-7xl w-full ">

              <div className="flex flex-col w-full">
                {/* Top row: two icons justified at the ends */}
                <div className="hidden md:block">
                  <div className="flex justify-between mb-2 w-full ">
                    <img src={item.image2} alt="" className="h-4 lg:h-6 w-auto mt-6 ms-6" />
                    <img src={item.image1} alt="" className="h-9 md:h-12 lg:h-17 xl:h-20 w-auto " />
                  </div>
                </div>
                {/* Description immediately below */}
                <div className="pt-3 md:pt-0 px-3 md:px-4">
                  <p
                    className={combine("font-normal text-zinc-800 italic transition-all duration-300", styles.p3)}
                  >
                    {/* Mobile view - show truncated text with read more */}
                    <span className="block md:hidden">
                      {!readMoreStates[item.id] ? (
                        <>
                          {truncateByWords(item.desp, 33).replace('...', '')}
                          <span className="text-zink underline text-[12px] font-medium hover:text-[#D6AB61] cursor-pointer ml-1" onClick={() => toggleReadMore(item.id)}>
                            Read More
                          </span>
                        </>
                      ) : (
                        <>
                          {item.desp}
                          <span className="text-zink underline text-[12px] font-medium hover:text-[#D6AB61] cursor-pointer ml-1 block" onClick={() => toggleReadMore(item.id)}>
                            Read Less
                          </span>
                        </>
                      )}
                    </span>
                    
                    {/* Medium screens and larger - show full description */}
                    <span className="hidden md:block">
                      {item.desp}
                    </span>
                  </p>
                </div>

              </div>
              {/* Bottom: Author */}
              <div className="flex items-center gap-3 mt-1 md:mt-3 px-3 md:px-4 lg:px-6 pb-3 md:pb-4 lg:pb-6">
                <Image
                  src={item.image3}
                  alt={item.author}
                  width={56}
                  height={56}
                  className="rounded-full w-10 md:w-14 lg:w-17 xl:w-20 h-10 md:h-14 lg:h-17 xl:h-20" />
                <p className={combine("font-bold text-mustard", styles.p3)}>
                  {item.author}
                </p>
              </div>
            </div>
          </div>
        ))
        }
      </Slider >
    </div >
  );
};
export default FunMoments;