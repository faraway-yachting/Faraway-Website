import Button from "../../styles/Button";
import { styles, combine } from "@/styles";

const Banner = () => {
  return (
    <div className="relative">
      {/* HERO IMAGE SECTION */}
      <div className={combine("bg-[url('/images/BANNER.png')]  min-h-[60vh] md:min-h-[56vh] lg:min-h-[46vh] xl:min-h-[57vh] flex items-center relative", styles.bgImage, "mb-3 md:mb-4 lg:mb-6 mt-9 md:mt-12 lg:mt-15")}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#034250]/47 z-0" />
        {/* Content */}
        <div className={combine("relative z-10 w-full", styles.px1,styles.container)}>
          <div className={combine("flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 py-10")}>
            {/* LEFT SIDE - Heading & Subheading */}
            <div className="max-w-xl text-center lg:text-left">
              <h1 className={combine("text-white font-extrabold leading-snug", styles.h2)}>
                Overnight Itineraries
              </h1>
              <p className={combine("text-white font-normal pt-4 leading-relaxed", styles.p3)}>
                Whether you're dreaming of hidden coves, vibrant coral reefs, or quiet beach nights — we'll make it happen. Enjoy sunset sails, star-lit dinners, and waking up to paradise.
              </p>
            </div>

            {/* RIGHT SIDE - Description + Button */}
            <div className="max-w-sm text-center">
              <p className={combine("text-white font-normal mb-4", styles.p2)}>
                Want something unique? We customize every trip to fit your style, pace, and preferences.
              </p>
              <div className="flex items-center justify-center">
                <Button variant="outline" href="/contact">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
