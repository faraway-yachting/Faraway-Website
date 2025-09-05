"use client";

import { Fragment, useRef } from "react";
import HeroSection from "@/Component/cabinCharter/hero";
import About from "@/Component/cabinCharter/about";
import SeaSide_Sixdays from "@/Component/cabinCharter/seaside_bliss";

const CabinCharterClient = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <HeroSection contactRef={contactRef} />
      <About sectionRef={contactRef}
        showContactButton={true}
        contactRef={contactRef} />
      <SeaSide_Sixdays contactRef={contactRef} />
    </Fragment>
  );
};

export default CabinCharterClient;
