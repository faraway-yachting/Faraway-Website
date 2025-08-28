import React from "react";
import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles/common";

type HeroSectionProps = {
  heading: string;
  breadcrumb?: string;
  backgroundImage?: string;
  dividerImage?: string;
};

const HeroSection2: React.FC<HeroSectionProps> = ({
  heading,
  breadcrumb,
  backgroundImage,
  dividerImage = PngIcons.rframe2,
}) => {
  return (
    <section
      className={combine(styles.bgImage, "bg-[#0061B1]/25 bg-center min-h-[52vh] md:min-h-[62vh] lg:min-h-[72vh] xl:min-h-[70vh]", styles.flexCenter)}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#012A50]/50 z-0" />

      {/* Content */}
      <div className={combine("relative z-10 text-white text-center", styles.px1, styles.container)}>
        <div className={combine(styles.flexCol, "justify-center items-center max-w-3xl mx-auto")}>
          <p className={combine(styles.h1, "font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full")}>
            {heading}
          </p>
          <img
            src={dividerImage}
            alt="Divider"
            className={combine("mx-auto my-1 md:my-2", styles.w3)}
          />
          <p className={combine("text-base text-white font-normal font-sourceSansPro text-center mt-2 md:max-w-xl lg:max-w-2xl xl:max-w-5xl", styles.p1)}>
            <span className="text-red-500">Home </span> – {breadcrumb}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;