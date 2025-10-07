"use client";

import HeadingContent from "@/common/heading";
import { FaStar, FaGoogle, FaTripadvisor } from "react-icons/fa";
import { styles, combine } from "@/styles";
import React, { useState } from "react";
import OurGuests from "@/Component/Overnight-boat-Charter/ourGuests";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { overnightTestimonials } from "@/data/overnight-boat/review";
const ChooseFarway = () => {
  return (
    <div>
      <section className={combine("py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50")}>
        <div className={combine(styles.containerLarge, " px-4 sm:px-6 lg:px-8")}>
          {/* Main Heading */}
          <div className="text-center mb-16">
            <HeadingContent
              heading="Why Choose Faraway Yachting for Your Overnight Boat Charter in Phuket"
            />
          </div>

          {/* Description and Reviews Widgets Section */}
          <div className={combine("bg-white rounded-2xl shadow-xl border border-gray-100  mb-16 ", styles.padding1)}>
            <div className={combine(styles.grid2Col, "gap-12 items-center")}>
              {/* Left Side - Description */}
              <div>
                <h3 className={combine(styles.h4, "font-bold text-zink font-playfair", styles.mb1)}>
                  Trusted by Travelers Worldwide
                </h3>
                <p className={combine(styles.p2, "text-zink leading-relaxed  font-inter")}>
                  With nearly 30 years of experience in the Andaman Sea, Faraway Yachting is Phuket’s trusted specialist for overnight yacht charters. Since 2022, our new management team has blended modern innovation with decades of expertise, earning more than </p>
                <div className={combine("font-bold font-playfair text-blue-600", styles.mb1, styles.h4)}>750+ ★★★★★ Reviews</div>
              </div>

              {/* Right Side - Review Widgets */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border cursor-pointer border-blue-200 hover:border-blue-300">
                  <a href="https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8254214,98.3448494,18z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-4 mb-4">
                      <FaGoogle className="w-8 h-8 text-blue-500" />
                      <div>
                        <h4 className={combine(styles.p3, "text-zink font-semibold font-playfair ")}>Google Reviews</h4>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={combine(styles.p4, "text-gray-600 font-inter")}>Read our latest reviews on Google</p>
                  </a>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 cursor-pointer hover:border-green-300">
                  <a href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-4 mb-4">
                      <FaTripadvisor className="w-8 h-8 text-green-500" />
                      <div>
                        <h4 className={combine(styles.p3, "text-gray-900 font-semibold font-playfair")}>TripAdvisor</h4>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={combine(styles.p4, "text-gray-600 font-inter")}>Check our ratings on TripAdvisor</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Reviews Section */}
          <FunMoments />
          <OurGuests />
        </div>

      </section >
    </div>
  );
};

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

    <div className={combine(styles.container, "")}>
      <Slider {...settings}>
        {overnightTestimonials.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-300 mt-[47px] ${currentSlide === index ? "scale-105 xl:scale-97 z-10" : "scale-85 "
              }`}>
            <div className="bg-white border border-gray-200 rounded-tl-3xl rounded-br-3xl shadow-md h-full flex flex-col justify-between min-h-[183px] md:min-h-[230px] lg:min-h-[250px] xl:min-h-[270px] max-w-7xl w-full ">

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

export default ChooseFarway;
