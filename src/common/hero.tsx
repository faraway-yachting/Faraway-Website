import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles/style";
import Button from "@/styles/Button";
import { FiPhone } from "react-icons/fi";
import { LuAnchor } from "react-icons/lu";
import { RefObject } from "react";

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
  contactButtonText ,
}) => {
  return (
    <section
      className={combine(styles.bgImage, "bg-center", styles.minH2, styles.flexCenter)}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#012A50]/50 z-0" />
      {/* Content on top */}
      <div className={combine(styles.flexCenter, "h-full text-center text-white relative z-10", styles.px1)}>
        <div className={combine(styles.flexCol, "justify-center items-center max-w-4xl mx-auto")}>
          {/* Title Text */}
          <h1 className={combine(styles.h1, "font-semibold font-playfair mb-2 leading-tight md:max-w-2xl lg:max-w-3xl w-full")}>
            {heading}
          </h1>
          {dividerImage && (
            <img
              src={dividerImage}
              alt="Divider"
              className={combine(styles.w2, "flex justify-center text-center mx-auto my-1 md:my-2")}
            />
          )}
           {subheading && (
             <p className={combine("font-playfair font-semibold text-center mb-4 text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px]")}>{subheading}</p>

           )}
          <p className={combine(styles.p1, "font-normal font-sourceSansPro text-center mt-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl")}>
            {description}
          </p>
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
        </div>
      </div >
    </section >
  );
};

export default HeroContent;
