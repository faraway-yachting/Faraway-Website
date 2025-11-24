"use client";
import Image from "next/image";
import { heroPages, HeroConfig } from "@/data/readmore/heroData";
interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const key = id.toLowerCase();
  const config: HeroConfig = heroPages[key] ?? heroPages["phi-phi-island"];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[70vh] lg:min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${config.bg})` }} >
      <div className="absolute inset-0 bg-[#012A50]/40 z-0" />
      <div className="relative text-center flex flex-col justify-center items-center z-10">
        <p className="text-white font-playfair font-normal pt-4 text-[30px] md:text-[36px] lg:text-[44px] xl:text-[56px] leading-tight">
          {config.title}
        </p>
        <Image src={config.frame} alt="" width={400} height={200} style={{ width: 'auto', height: 'auto' }} />
        <p className="text-white font-sourceSansPro font-extrabold text-[20px] md:text-[22px] lg:text-[25px]xl:text-[28px] mt-2">
          {config.subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
