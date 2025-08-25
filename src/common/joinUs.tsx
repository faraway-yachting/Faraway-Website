"use client";
import React from "react";
import { styles, combine } from "@/styles/common";

interface JoinUsProps {
  id?: string;
  bgImage: string;
  bgColor?: string;
  overlayOpacity?: number;
}

const JoinUs: React.FC<JoinUsProps> = ({
  bgImage,
  bgColor = "#034250",
  overlayOpacity = 0.6,
}) => {
  const overlayRGBA = `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(
    bgColor.slice(3, 5),
    16
  )}, ${parseInt(bgColor.slice(5, 7), 16)}, ${overlayOpacity})`;

  return (
    <div
      className={combine("relative flex flex-col justify-center items-center", "min-h-[60vh] md:min-h-[60vh] lg:min-h-[70vh]", styles.px3)}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayRGBA }}
      />

      <div className="relative z-20 text-center">
        <p className={combine("text-white font-playfair font-extrabold", styles.h3)}>
          WHAT ARE YOU WAITING FOR?
        </p>
        <p className={combine("text-white  pt-5 sm:pt-6 max-w-4xl mx-auto font-medium leading-relaxed", styles.p1)}>
          Secure your private yacht in Phuket today and dive into the heart of
          the mesmerizing Phuket islands. With Faraway Yachting Co. Ltd., you're
          not just setting sail but embarking on an unforgettable Phuket
          adventure
        </p>
        <button className={combine("bg-white text-[#034250] rounded-lg px-5 py-2 mt-8 sm:mt-10 hover:bg-[#034250] hover:text-white transition duration-300", styles.p3)}>
          Start Your Adventure
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
