import PngIcons from "@/icons/pngIcon";
import { styles, combine, Button } from "@/styles";
import { FiPhone } from "react-icons/fi";

const HeroContent = () => {
  const { bgImage, w1, w2, flexCenter, flexCol, h1, containerXl, flexBetween, p1 ,} = styles;

  return (
    <section className={combine(bgImage, "bg-[url('/images/homeimg1.png')] min-h-[81vh] flex justify-center")}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />
      {/* Batch Image Top-Left inside container */}
      <div className="relative max-w-6xl mx-auto w-full">
        <a 
          href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute cursor-pointer z-20"
        >
          <img
            src="/images/batch1.png"
            alt="Batch"
            className={combine( w1, "h-auto mt-2 md:mt-5 top-0 md:top-4 lg:top-5 xl:top-6 drop-shadow-lg hover:opacity-90 transition-opacity")}
          />
        </a>
        {/* Content on top */}
        <div className={combine(flexCenter, "h-full text-center text-white px-4 relative z-10 mt-4 md:mt-0")}>
          <div className={combine(flexCol, "justify-center items-center max-w-4xl mx-auto")}>
            <h1 className={combine(h1, "leading-tight md:max-w-2xl lg:max-w-2xl w-full")}>
              Phuket Yacht Charter
            </h1>
            <img
              src={PngIcons.rframe2}
              alt="Divider"
              className={combine(w2, flexBetween, "mx-auto my-3 drop-shadow-lg opacity-90")}
            />
            <p className={combine("font-playfair font-semibold text-center mb-4 text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px]")}>Private Yacht Charters, Catamarans & Luxury Cruises in Phuket</p>
            <p className={combine(p1, "font-light font-sourceSansPro text-center mb-4 md:mb-6", containerXl, "drop-shadow-lg text-white/95")}>
            Faraway Yachting is a leading <span className="font-semibold">Phuket yacht charter operator</span> , creating unforgettable experiences at sea. 
            We specialize in private yacht charters — from luxury day trips to Phi Phi and Phang Nga Bay to exclusive overnight and cabin charters across Thailand’s most beautiful islands.
            </p>
            <div className="flex justify-center">
              <Button
                href="/contact"
                variant="primary"
              >
                <div className="flex items-center">
                  <FiPhone className="mr-2" />
                  Contact Us Now
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroContent;