
import BestLands from "@/Component/Charter/bestLands";
import HeroSection from "@/Component/Charter/hero";
import TodaysAdventure from "@/common/todayAdventure"
import YachtMatchmaker from "@/Component/Charter/matchMark";
import About from "@/Component/Home/about";
import ChooseFarway from "@/Component/Charter/chooseFarway";
import RentalCost from "@/Component/Charter/rentalCost"
import PriceRange from "@/Component/Charter/priceRange"
import { crewedYachtMetadata } from "@/lib/metadata";
import ChooseYacht from "@/Component/Charter/chooseYacht";
import { Fragment } from "react";
import RentalRoutes from "@/Component/Charter/rentalRoutes";
import SpecialOccasions from "@/Component/Charter/specailOccasions";
import YachtTipsSection from "@/Component/Charter/yachtTips";
import EcoFriendly from "@/Component/Charter/ecoFriendly";
import YachtCustomization from "@/Component/Charter/yachtCustomization"
import AboutSection_FAQs from "@/Component/Charter/FAQS";
export const metadata = crewedYachtMetadata;

export default function crewed_Charter() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <YachtMatchmaker />
      <ChooseFarway />
      <RentalCost  />
      <TodaysAdventure />
      <PriceRange />
      <ChooseYacht />
      <SpecialOccasions />
      <YachtTipsSection />
      <RentalRoutes />
      <YachtCustomization />
      <EcoFriendly />
      <BestLands />
      <AboutSection_FAQs />
    </Fragment>
  );
}
