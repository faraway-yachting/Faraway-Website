import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { RefObject } from "react";

interface HeroSectionProps {
  contactRef?: RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ contactRef }: HeroSectionProps) => {
  return (
    <HeroContent
      heading="Cabin Charter Phuket – Luxury Sailing Made Affordable"
      description="Sail away on a 6-day, 5-night journey to Thailand’s most breathtaking islands. A cabin charter Phuket offers the perfect blend of privacy and adventure, ou’ll explore hidden caves, snorkel vibrant reefs, and enjoy beach BBQs — all from the comfort of a luxury catamaran. Perfect for solo travelers, couples, small groups or friends who want more than a day trip."
      backgroundImage="/images/charterimg.png"
      dividerImage={PngIcons.rframe2}
      contactRef={contactRef}
      showContactButton={true}
    />
  );
};
export default HeroSection 