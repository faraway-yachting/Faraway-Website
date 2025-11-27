
import HeroSection from "@/Component/phuketTaxi/hero";
import MeetingPoints from "@/Component/phuketTaxi/meetingPoints";
import TaxiPrices from "@/Component/phuketTaxi/taxiPrices";
import TaxiRules from "@/Component/phuketTaxi/taxiRules";
import { taxiMetadata } from "@/lib/metadata";
import { Fragment } from "react";

export const metadata = taxiMetadata;

const Taxi = () => {
  return (
    <Fragment>
      <HeroSection />
      <TaxiPrices />
      <TaxiRules />
      <MeetingPoints />
    </Fragment>
  );
};
export default Taxi;