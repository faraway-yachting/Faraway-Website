
import About from "@/Component/Home/about";
import Destinations_Section from "@/Component/Home/destination";
import ExploreThailand from "@/Component/Home/exploreThailand";
import HeroSection from "@/Component/Home/hero";
import PrivateYacht_Tour from "@/Component/Home/privateTour";
import TodaysAdventure from "@/Component/Home/todaysAdventure";
import FunMoments from "@/Component/cabinCharter/moments";
import Sailingyacht_Phuket from "@/Component/Home/yachtinPhuket";
import { Fragment } from "react";
import Why from "@/Component/Home/setDeal";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <TodaysAdventure />
     <Why />
      <PrivateYacht_Tour />
      <Sailingyacht_Phuket />
      <ExploreThailand />
      <FunMoments />
      <Destinations_Section />
      
    </Fragment>
  );
}
