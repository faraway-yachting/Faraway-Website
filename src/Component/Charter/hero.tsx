"use client";

import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { usePathname } from "next/navigation";
import { RefObject } from "react";

interface HeroSectionProps {
  contactRef?: RefObject<HTMLDivElement | null>;
}

const HeroSection = ({ contactRef }: HeroSectionProps) => {
  const pathname = usePathname();
  //  url based Seletion
  const heading =
    pathname === "/bareboat-charter-thailand"
      ? "Bareboat Charter Phuket – Your Adventure, Your Command"
      : "Phuket Yacht Rental – Your Gateway to Luxury and Adventure";

  const description =
    pathname === "/bareboat-charter-thailand"
      ? "Explore the Andaman Sea on your own terms with a bareboat charter Phuket. Take the helm yourself, enjoy total freedom, and design a sailing journey exactly the way you want it. Whether with family, friends, or as a couple, your Phuket bareboat charter lets you discover Thailand’s islands in complete independence."
      : "A Phuket yacht rental lets you escape the crowds and enjoy the Andaman Sea in total privacy. With Faraway Yachting, every trip is tailored for comfort, luxury, and unforgettable memories.";

      const subHeading =
      pathname === "/bareboat-charter-thailand"
        ? ""
        : "Discover the Best Phuket Yacht Rental Options";
        
      const BgImage=
      pathname === "/bareboat-charter-thailand"
      ? "/images/boatimg1.png"
      : "/images/crewedimg.png";
  return (
    <HeroContent
      heading={heading}
      description={description}
      subheading={subHeading}
      backgroundImage={BgImage}
      dividerImage={PngIcons.rframe2}
      contactRef={pathname === "/bareboat-charter-thailand" ? contactRef : undefined}
      showContactButton={pathname === "/bareboat-charter-thailand"}
      contactButtonText={pathname === "/bareboat-charter-thailand" ? "  Get Aboard – Limited Availability" : undefined}
      href={pathname === "/bareboat-charter-thailand" ? "/contact" : undefined}
    />
  );
};
export default HeroSection;
