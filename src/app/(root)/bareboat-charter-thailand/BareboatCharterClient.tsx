"use client";
import { Fragment, useRef } from "react";
import HeroSection from "@/Component/Charter/hero";
import About from "@/Component/Home/about";
import YachtMatchmaker from "@/Component/Charter/matchMark";
import BoatTabSection from "@/Component/bareBoat/tabSection";
import ChooseFarway from "@/Component/bareBoat/chooseFarway";
import ChooseBareboat  from "@/Component/bareBoat/chooseBareboat"
const BareboatCharterClient = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <HeroSection contactRef={contactRef} />
      <About />
      <YachtMatchmaker />
      <ChooseFarway />
      <BoatTabSection />
      <ChooseBareboat />
    </Fragment>
  );
};

export default BareboatCharterClient;

