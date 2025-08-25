import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles/common";

type HeroSectionProps = {
  heading: string;
  subheading: string;
  backgroundImage: string;
  dividerImage?: string;
  button?: string;
};

const HeroContent: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  backgroundImage,
  dividerImage = PngIcons.rframe2,
  button,

}) => {
  return (
    <section
      className={combine(styles.bgImage, "bg-center", styles.minH2, styles.flexCenter)}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/60 z-0" />

      {/* Content on top */}
      <div className={combine(styles.flexCenter, "h-full text-center text-white relative z-10", styles.px1)}>
        <div className={combine(styles.flexCol, "justify-center items-center max-w-4xl mx-auto")}>
          {/* Title Text */}
          <h2 className={combine(styles.h2, "font-semibold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full")}>
            {heading}
          </h2>
          {dividerImage && (
            <img
              src={dividerImage}
              alt="Divider"
              className={combine(styles.w2, "flex justify-center text-center mx-auto")}
            />
          )}
          <p className={combine(styles.p1, "font-normal font-sourceSansPro text-center mt-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl")}>
            {subheading}
          </p>
          {button && (
            <button className={combine("mt-4 bg-transparent font-sourceSansPro border border-white px-3 py-2 text-white font-medium hover:bg-[#D6AB61]", styles.p2)}>
              Contact Us Now
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
