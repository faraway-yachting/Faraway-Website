import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { RefObject } from "react";

interface HeroSectionProps {
  contactRef?: RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ contactRef }: HeroSectionProps) => {
  return (
    <HeroContent
      heading="Cabin Charter Phuket A Luxurious Sailing Adventure"
      description="Set Sail on a Luxury yacht Phuket Adventure, Uncovering the Mystique of Phuket's Island Paradise for 6 Days and 5 Nights"
      backgroundImage="/images/charterimg.png"
      dividerImage={PngIcons.rframe2}
      contactRef={contactRef}
      showContactButton={true}
    />
  );
};
export default HeroSection 