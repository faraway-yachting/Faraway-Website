import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { combine, styles } from "@/styles";
import { heroData } from "@/data/phukettaxi";

const HeroSection = ()=> {
  return (
    <div>
    <HeroContent
      heading={heroData.heading}
      subheading={heroData.subheading}               
      description={heroData.description}
      backgroundImage={heroData.backgroundImage}
      dividerImage={PngIcons.rframe2}
      minHeightClass="min-h-[64vh]"
    
    />
    <div className={combine("flex flex-col md:flex-row md:items-center md:justify-between","max-w-7xl mx-auto mt-5 px-4 xl:px-0 md:gap-15 lg:gap-7 xl:gap-0 gap-2")}>
      <h2 className={combine(styles.h4 ,"font-bold text-zink max-w-md")}>{heroData.title}</h2>
      <p className={combine(styles.p2, "max-w-md text-zink")}>{heroData.subtitle}</p>
    </div>
    </div>

  );
};
export default HeroSection 