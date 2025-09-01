import { styles, combine } from "@/styles";

const HeroSection = () => {
  return (
    <div>
      {/* HERO IMAGE SECTION */}
      <div className={combine("bg-[url('/images/hero.png')]", styles.minH3, styles.px1,styles.flexCol,styles.flexCenter,styles.bgImage)}>
        <div className="text-center flex flex-col justify-center items-center">
          <p className="text-white font-extrabold font-playfair text-[18px] md:text-[24px] xl:text-[28px]">
            DESTINATIONS
          </p>
          <p className="text-white font-normal font-playfair pt-4 text-[28px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-tight">
            Our Destinations In Phuket
          </p>
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
