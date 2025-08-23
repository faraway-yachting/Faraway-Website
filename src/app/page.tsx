
import About from "@/Component/Home/about";
import Destinations_Section from "@/Component/Home/destination";
import ExploreThailand from "@/Component/Home/exploreThailand";
import HeroSection from "@/Component/Home/hero";
import PrivateYacht_Tour from "@/Component/Home/privateTour";
import TodaysAdventure from "@/Component/Home/todaysAdventure";
import Sailingyacht_Phuket from "@/Component/Home/yachtinPhuket";
import { Fragment } from "react";
import dynamic from "next/dynamic";

const FunMoments = dynamic(() => import("@/Component/cabinCharter/moments"), {
  ssr: false,
});

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <TodaysAdventure />
       <FunMoments />
      <PrivateYacht_Tour />
      <Sailingyacht_Phuket />
      <ExploreThailand />
      <Destinations_Section />
    </Fragment>
  );
}
