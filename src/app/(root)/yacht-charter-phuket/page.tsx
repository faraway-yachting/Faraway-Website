
import Adventure from "@/Component/Charter/adventure";
import BestLands from "@/Component/Charter/bestLands";
import HeroSection from "@/Component/Charter/hero";
import YachtMatchmaker from "@/Component/Charter/matchMark";
import YachtAdventure from "@/Component/Charter/yachtAdventure";
import { crewedYachtMetadata } from "@/lib/metadata";
import { Fragment } from "react";

export const metadata = crewedYachtMetadata;

export default function crewed_Charter() {
  return (
    <Fragment>
      <HeroSection />
      <YachtMatchmaker />
      <Adventure />
      <BestLands />
      <YachtAdventure />
    </Fragment>
  );
}
