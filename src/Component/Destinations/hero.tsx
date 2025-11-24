import { styles, combine } from "@/styles";
import Image from "next/image";
import {
  GoogleRatingBadge,
  TripAdvisorRatingBadge,
  WorldLuxuryAwardBadge,
} from "@/common/RatingBadges";

const HeroSection = () => {
  return (
    <div>
      {/* HERO IMAGE SECTION */}
      <div className={combine("bg-[url('/images/hero.png')]", styles.minH3, styles.px1,styles.flexCol,styles.flexCenter,styles.bgImage, "relative")}>
        <WorldLuxuryAwardBadge positionClass="absolute top-1 right-3 sm:top-6 sm:right-6 lg:top-6 lg:right-7 z-20 drop-shadow-2xl sm:hidden" />
        <div className="text-center flex flex-col justify-center items-center relative z-10">
          <p className="text-white font-extrabold font-playfair text-[18px] md:text-[24px] xl:text-[28px]">
            DESTINATIONS
          </p>
          <h1 className="text-white font-normal font-playfair pt-4 text-[28px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-tight">
            Our Destinations In Phuket
          </h1>
          {/* Rating Badges Section */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full mt-4 md:mt-8 lg:mt-10 px-4 relative z-20">
            <GoogleRatingBadge />
            <a
              href="https://www.theworldluxurytravelawards.com/establishment/faraway-yachting-co-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex flex-shrink-0 transition-transform hover:scale-[1.05] drop-shadow-2xl relative z-10"
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

      {/* DESCRIPTION PARAGRAPH */}
      <p className="text-center text-zink font-sourceSansPro text-base sm:text-lg md:text-xl font-normal max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-12 leading-relaxed">
        Experience the epitome of luxury with Far Away Yachting’s private yacht in Phuket. Explore
        our magical destinations like Phi Phi Islands, the breathtaking Phang Nga Bay, and more in
        unparalleled style & comfort. Embark on a bareboat charter or indulge in a fully crewed
        experience, tailored to your desires.
      </p>
    </div>
  );
};

export default HeroSection;
