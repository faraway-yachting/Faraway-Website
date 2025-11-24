"use client";
import About from "@/Component/Home/about";
import { Fragment, useRef } from "react";
import HeroSection from "@/Component/cabinCharter/hero";
import SeaSide_Sixdays from "@/Component/cabinCharter/seaside_bliss";

const CabinCharterClient = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <HeroSection contactRef={contactRef} />
      <About />
      <SeaSide_Sixdays contactRef={contactRef} />
    </Fragment>
  );
};

export default CabinCharterClient;
