import { Fragment } from "react";
import HeroSection from "@/Component/cabinCharter/hero";
import { cabinCharterMetadata } from "@/lib/metadata";
import CabinCharterClient from "./CabinCharterClient";

export const metadata = cabinCharterMetadata;

const CabinCharter = () => {
  return (
    <Fragment>
      <CabinCharterClient />
    </Fragment>
  );
};

export default CabinCharter;
