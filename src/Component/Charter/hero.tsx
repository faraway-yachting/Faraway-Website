"use client";

import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();
  //  url based Seletion
  const heading =
    pathname === "/bareboat-charter-thailand"
      ? "Bareboat Charter Thailand"
      : "Phuket Yacht Rental – Your Gateway to Luxury and Adventure";

  const description =
    pathname === "/bareboat-charter-thailand"
      ? "Experience a luxurious Phuket getaway with our all-inclusive yacht rentals, featuring gourmet cuisine, refreshing drinks, and a professional crew. Wherever you wish to go, we’ll take you there in style and comfort."
      : "A Phuket yacht rental lets you escape the crowds and enjoy the Andaman Sea in total privacy. With Faraway Yachting, every trip is tailored for comfort, luxury, and unforgettable memories.";

      const subHeading =
      pathname === "/bareboat-charter-thailand"
        ? "Discover the Best Phuket Yacht Rental Options"
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
    />
  );
};
export default HeroSection;
