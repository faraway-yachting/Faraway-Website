import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { RefObject } from "react";

interface HeroSectionProps {
  contactRef?: RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ contactRef }: HeroSectionProps) => {
  return (
    <HeroContent
      heading="Overnight Boat Charter Phuket – Discover Remote Islands Beyond the Crowds"
      description="Escape the ordinary with an <strong>Overnight Boat Charter Phuket</strong>. Sail off the beaten track, enjoy breathtaking sunsets and sunrises, feast on Thai flavors prepared by your private chef, and immerse yourself in island life and culture."
      backgroundImage="/images/overnightimg1.png"
      dividerImage={PngIcons.rframe2}
      contactRef={contactRef}
      showContactButton={true}
      contactButtonText="Plan Your Adventure Now"
      href="/contact"
    />
  );
};
export default HeroSection 