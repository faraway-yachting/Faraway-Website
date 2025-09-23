
import About from "@/Component/Home/about";
import Destinations_Section from "@/Component/Home/destination";
import ExploreThailand from "@/Component/Home/exploreThailand";
import HeroSection from "@/Component/Home/hero";
import PrivateYacht_Tour from "@/Component/Home/privateTour";
import TodaysAdventure from "@/Component/Home/todaysAdventure";
import VoyageCards from "@/Component/Home/voyageCards";

import Sailingyacht_Phuket from "@/Component/Home/yachtinPhuket";
import { Fragment } from "react";
import BookwithUs from "@/Component/Home/setDeal";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;
export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <TodaysAdventure />
      {/* <FunMoments /> */}
      <BookwithUs />
      <PrivateYacht_Tour />
      <Sailingyacht_Phuket />
      <ExploreThailand />
      <VoyageCards />
      <Destinations_Section />
    </Fragment>
  );
}
