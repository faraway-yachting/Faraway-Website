import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { combine, styles } from "@/styles";
import { RefObject } from "react";

interface HeroSectionProps {
  contactRef?: RefObject<HTMLDivElement | null>;
}

const HeroSection = ()=> {
  return (
    <div>
    <HeroContent
      heading="Getting to Faraway Yachting"
      subheading="Easy Phuket Taxi Transfers to Chalong Pier"               
      description="Planning your Phuket yacht charter with us? We're here to make your journey smooth from anywhere on the island. Whether you're starting from Patong, Phuket Town, or the airport, we'll guide you on the best ways to reach our base at Chalong Pier."
      backgroundImage="/images/timg1.png"
      dividerImage={PngIcons.frame3}
      minHeightClass="min-h-[64vh]"
      overlayColor="bg-white/1"
      textColor="text-zink"
    />
    <div className={combine(styles.flexBetween,"max-w-7xl mx-auto mt-5")}>
      <h3 className={combine(styles.h4 ,"font-bold text-zink max-w-md")}>Taxi Options, Prices, and What to Expect</h3>
      <p className={combine(styles.p2, "max-w-md text-zink")}>You can choose between local taxi apps (Grab, Bolt) or book a private transfer through us.</p>
    </div>
    </div>

  );
};
export default HeroSection 