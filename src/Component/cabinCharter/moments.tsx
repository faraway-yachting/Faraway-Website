"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingContent from "@/common/heading";
import { momentsTestimonials, Testimonial } from "@/data/cabincharter/momentsData";
import { Button } from "@/styles";

const FunMoments: React.FC = () => {
  const [readMore, setReadMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    <div className="max-w-7xl mx-auto pb-6 md:pb-8 lg:pb-12">
      <div>
        <HeadingContent
          heading="Moments That Made Waves"
          description="From sunset dinners to secret lagoons — hear what made it unforgettable"
        />
      </div>
      <Slider {...settings}>
        {momentsTestimonials.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-300 px-2 sm:px-2 md:px-3 lg:px-4 mt-[47px] ${currentSlide === index ? "scale-105 xl:scale-97 z-10" : "scale-85 "
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
                <p
                  className={`pt-3 md:pt-0 px-3 md:px-4 vmd:pt-0 text-[12px] md:text-base lg:text-[19px] font-normal leading-[19px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] text-zinc-800 font-inter italic transition-all duration-300 ${!readMore ? "line-clamp-5 lg:line-clamp-none" : ""
                    }`}
                >
                  {item.desp}
                </p>

                {/* Read More / Read Less button - only show if text is long */}
                <div className="px-2 md:px-3 lg:px-6 mt-0 md:mt-1 block lg:hidden">
                  <Button
                    variant="outline"
                    onClick={() => setReadMore(!readMore)}
                    className="text-zink pb-1 underline text-[12px] md:text-sm font-medium hover:text-[#D6AB61]"
                  >
                    {readMore ? "Read Less" : "Read More"}
                  </Button>
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
                <p className="text-sm md:text-base lg:text-xl font-bold text-mustard font-sourceSansPro">
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