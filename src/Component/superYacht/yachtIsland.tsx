"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PngIcons from "@/icons/pngIcon";
import HeadingContent from "@/common/heading";

const islands = [
  { title: "Koh Phi Phi", image: PngIcons.thPlace_1 },
  { title: "James Bond Island", image: PngIcons.thPlace_2 },
  { title: "Koh Yao Noi", image: PngIcons.thPlace_3 },
  { title: "Coral Island", image: PngIcons.thPlace_4 },
  { title: "Racha Islands", image: PngIcons.thPlace_5 },
];
const Thailand_BestLands = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className="py-8 md:py-10 lg:py-13 xl:py-16 px-4 bg-white relative overflow-hidden">
      <div className="mx-auto mb-12 sm:mb-16">
        <HeadingContent
          heading="Phuket Island Hopping by Yacht"
          description='Discover turquoise waters, hidden lagoons, limestone cliffs, and vibrant coral reefs on a private yacht adventure.' />
      </div>
      <div className="w-full relative">
        {/* Top Ellipse - Single overlay for all images */}
        <img
          src="/images/Ellipse 1.png"
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full"
        />
        <Slider {...settings}>
          {islands.map((island, index) => (
            <div key={index} className="px-3 lg:px-2 xl:px-3">
              <div className="relative">
                {/* Image Box */}
                <div className="relative overflow-hidden z-20 rounded-lg">
                  <img
                    src={island.image}
                    alt={island.title}
                    className="w-full h-[300px] md:h-[350px] lg:h-[350px] xl:h-[440px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-11 md:bottom-13 lg:bottom-17 xl:bottom-20 left-5 text-white text-[25px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-playfair font-extrabold drop-shadow-lg">
                    {island.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Bottom Ellipse - Single overlay for all images */}
        <img
          src="/images/Ellipse 2.png"
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-full" />
      </div>
      {/* Text Box - Centered with max-width */}
      <div className="flex justify-center mt-12 ">
        <div className="max-w-[78.2rem] w-full bg-[#E6ECED33] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-6 border-l-[7px] border-l-[#034250]">
          <div className="flex-1 text-left py-3">
            <p className="text-zink font-sourceSansPro font-semibold text-[16px] md:text-[18px] lg:text-[20px] mb-2">
              <span className="font-semibold text-mustard font-playfair me-2">Info:</span>Adventure Your Way!
            </p>
            <p className="text-zink font-sourceSansPro font-semibold text-base max-w-3xl">
              Choose a full-day rental or a multi-day charter—custom itineraries designed for ultimate relaxation, adventure, and stunning views.
            </p>
          </div>
          <div className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] hidden md:block ">
            <img src="/images/slideText.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Thailand_BestLands;
