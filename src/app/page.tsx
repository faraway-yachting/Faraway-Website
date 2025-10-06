
import About from "@/Component/Home/about";
import ExploreThailand from "@/Component/Home/exploreThailand";
import HeroSection from "@/Component/Home/hero";
import TodaysAdventure from "@/Component/Home/todaysAdventure";
import VoyageCards from "@/Component/Home/voyageCards";
import Sailingyacht_Phuket from "@/Component/Home/yachtinPhuket";
import { Fragment } from "react";
import BookwithUs from "@/Component/Home/setDeal";
import { homeMetadata } from "@/lib/metadata";
import AboutFaraway from "@/Component/Home/aboutFaraway";
export const metadata = homeMetadata;
export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <TodaysAdventure />
      <VoyageCards />
      <ExploreThailand />
      <BookwithUs />
      {/* <PrivateYacht_Tour /> */}
      <Sailingyacht_Phuket />
      <AboutFaraway/>
    </Fragment>
  );
}
