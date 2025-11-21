import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles/style";
import Button from "@/styles/Button";
import { FiPhone } from "react-icons/fi";
import { LuAnchor } from "react-icons/lu";
import { RefObject } from "react";
import Image from "next/image";
import {
  GoogleRatingBadge,
  TripAdvisorRatingBadge,
  WorldLuxuryAwardBadge,
} from "@/common/RatingBadges";

type HeroSectionProps = {
  heading: string;
  subheading?: string;
  backgroundImage: string;
  dividerImage?: string;
  button?: string;
  description: string;
  buttontext?: string;
  href?: string;
  contactRef?: RefObject<HTMLDivElement | null>;
  showContactButton?: boolean;
  contactButtonText?: string;
  minHeightClass?: string;
  overlayColor?: string;
  textColor?: string;
  showRatingBadges?: boolean;
  showGoogleRating?: boolean;
  showTripAdvisorRating?: boolean;
  showWorldLuxuryAward?: boolean;
  awardPositionClass?: string;
};
const HeroContent: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  backgroundImage,
  dividerImage = PngIcons.rframe2,
  button,
  buttontext,
  description,
  href,
  contactRef,
  showContactButton = false,
  contactButtonText,
  minHeightClass = styles.minH2,
  overlayColor = "bg-[#012A50]/50",
  textColor = "text-white",
  showRatingBadges = false,
  showGoogleRating = false,
  showTripAdvisorRating = false,
  showWorldLuxuryAward = false,
  awardPositionClass = "absolute top-1 right-3 sm:top-6 sm:right-6 lg:top-6 lg:right-7 z-20 drop-shadow-2xl",
}) => {
  return (
    <section
      className={combine(styles.bgImage, "bg-center", minHeightClass, styles.flexCenter, "relative")}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* World Luxury Award Badge - positioned absolutely (mobile only) */}
      {showWorldLuxuryAward && (
        <WorldLuxuryAwardBadge positionClass={awardPositionClass + " sm:hidden"} />
      )}
      {/* Dark overlay */}
      <div className={combine("absolute inset-0 z-0", overlayColor)} />
      {/* Content on top */}
      <div className={combine(styles.flexCenter, "h-full text-center relative z-10", styles.px1, textColor)}>
        <div className={combine(styles.flexCol, "justify-center items-center max-w-4xl mx-auto")}>
          {/* Title Text */}
          <h1 
            className={combine(styles.h1, "font-semibold font-playfair mb-2 leading-tight md:max-w-2xl lg:max-w-3xl w-full")}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          {dividerImage && (
            <img
              src={dividerImage}
              alt="Divider"
              className={combine(styles.w2, "flex justify-center text-center mx-auto my-1 md:my-2")}
            />
          )}
           {subheading && (
             <p 
               className={combine("font-playfair font-semibold text-center mb-4 text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px]")}
               dangerouslySetInnerHTML={{ __html: subheading }}
             />
           )}
          <p 
            className={combine(styles.p1, "font-normal font-sourceSansPro text-center mt-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl")}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {button && buttontext && (
            <div className="mt-9">
              {href ? (
                <a href={href}>
                  <Button variant="primary">
                    <div className="flex items-center">
                      <FiPhone className="mr-2" />
                      {buttontext}
                    </div>
                  </Button>
                </a>
              ) : (
                <Button variant="primary">
                  <div className="flex items-center">
                    <FiPhone className="mr-2" />
                    {buttontext}
                  </div>
                </Button>
              )}
            </div>
          )}
          {showContactButton && contactRef && (
            <div className="mt-9">
              {href ? (
                <a href={href}>
                  <Button variant="primary">
                    <div className="flex items-center">
                      <LuAnchor className="mr-2" />
                      {contactButtonText}
                    </div>
                  </Button>
                </a>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => {
                    contactRef?.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }}
                >
                  <div className="flex items-center">
                    <LuAnchor className="mr-2" />
                    {contactButtonText}
                  </div>
                </Button>
              )}
            </div>
          )}
          {/* Rating Badges Section - Optional */}
          {showRatingBadges && (showGoogleRating || showTripAdvisorRating) && (
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-9 w-full mt-4 md:mt-8 lg:mt-10 px-4 relative z-20">
              {showGoogleRating && (
                <GoogleRatingBadge />
              )}
              {showWorldLuxuryAward && (
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
              )}
              {showTripAdvisorRating && (
                <TripAdvisorRatingBadge />
              )}
            </div>
          )}
        </div>
      </div >
    </section >
  );
};

export default HeroContent;
