"use client";
import { Fragment, useRef } from "react";
import HeroSection from "@/Component/cabinCharter/hero";
import About from "@/Component/cabinCharter/about";
import SeaSide_Sixdays from "@/Component/cabinCharter/seaside_bliss";

const CabinCharter = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <HeroSection contactRef={contactRef} />
      <About showContactButton={true} contactRef={contactRef} />
      <SeaSide_Sixdays contactRef={contactRef} />
    </Fragment>
  );
};

export default CabinCharter;
