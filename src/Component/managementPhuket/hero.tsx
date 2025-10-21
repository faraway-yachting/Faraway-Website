import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { RefObject } from "react";

interface HeroSectionProps {
  contactRef?: RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ contactRef }: HeroSectionProps) => {
  return (
    <HeroContent
      heading="Yacht Management Phuket"
      description="Maximise your yacht’s income, minimise your workload.
 At Faraway Yachting, we provide full-service yacht management in Phuket for owners and investors who expect both transparency and results. From technical maintenance to charter bookings, crewing, accounting, and compliance, we handle every detail so your yacht runs profitably and smoothly all year round. <br />
 Whether you already own a vessel or are exploring investment opportunities in Thailand, our locally based team combines 30 years of experience, engineering know-how, and 700 five-star reviews to deliver consistent returns and peace of mind."
      backgroundImage={PngIcons.mYacht1}
      dividerImage={PngIcons.rframe2}
    />
  );
};
export default HeroSection 