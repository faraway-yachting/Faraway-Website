import PngIcons from "@/icons/pngIcon";
import { styles, combine, Button } from "@/styles";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import {
  GoogleRatingBadge,
  TripAdvisorRatingBadge,
  WorldLuxuryAwardBadge,
} from "@/common/RatingBadges";

const HeroContent = () => {
  const { bgImage, w2, flexCenter, flexCol, h1, containerXl, flexBetween, p1 ,} = styles;

  return (
    <section
      className={combine(
        bgImage,
          "relative bg-[url('/images/homeimg1.png')] min-h-[93vh] md:min-h-[81vh] flex justify-center overflow-hidden"
      )}
    >
      <WorldLuxuryAwardBadge positionClass="absolute top-1 right-3 sm:top-6 sm:right-6 lg:top-6 lg:right-7 z-20 drop-shadow-2xl sm:hidden" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Content on top */}
        <div className={combine(flexCenter, "h-full text-center text-white px-4 relative z-10 mt-4 md:mt-0")}>
          <div className={combine(flexCol, "justify-center items-center max-w-4xl mx-auto space-y-6")}>
            <h1 className={combine(h1, "leading-tight md:max-w-2xl lg:max-w-2xl w-full")}>
              Phuket Yacht Charter
            </h1>
            <img
              src={PngIcons.rframe2}
              alt="Divider"
              className={combine(w2, flexBetween, "mx-auto mb-3 drop-shadow-lg opacity-90")}
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
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-4 md:gap-5 lg:gap-9 w-full mt-0 md:mt-8 lg:mt-10">
              <GoogleRatingBadge />
              <a
                href="https://www.theworldluxurytravelawards.com/establishment/faraway-yachting-co-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex flex-shrink-0 transition-transform hover:scale-[1.05] drop-shadow-2xl"
              >
                <Image
                  src="/images/2025 Personalised Travel Winner Logo263.png"
                  alt="World Luxury Travel Awards 2025 Winner"
                  width={140}
                  height={180}
                  className="h-auto w-[120px] md:w-[140px] lg:w-[160px] max-w-none"
                  priority
                />
              </a>
              <TripAdvisorRatingBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroContent;