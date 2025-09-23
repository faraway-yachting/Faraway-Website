
import Adventure from "@/Component/Charter/adventure";
import BestLands from "@/Component/Charter/bestLands";
import HeroSection from "@/Component/Charter/hero";
import YachtMatchmaker from "@/Component/Charter/matchMark";
import About from "@/Component/Home/about";
import ChooseFarway from "@/Component/Charter/chooseFarway";
import YachtAdventure from "@/Component/Charter/yachtAdventure";
import RentalCost from "@/Component/Charter/rentalCost"
import PriceRange from "@/Component/Charter/priceRange"
import { crewedYachtMetadata } from "@/lib/metadata";
import ChooseYacht from "@/Component/Charter/chooseYacht";
import { Fragment } from "react";
import RentalRoutes from "@/Component/Charter/rentalRoutes";
import SpecialOccasions from "@/Component/Charter/specailOccasions";

export const metadata = crewedYachtMetadata;

export default function crewed_Charter() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <YachtMatchmaker />
      <ChooseFarway />
      <RentalCost  />
      <PriceRange />
      <ChooseYacht />
      <RentalRoutes />
      <SpecialOccasions />
      <Adventure />
      <BestLands />
      <YachtAdventure />
    </Fragment>
  );
}
