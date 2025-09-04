import { Fragment } from "react";
import HeroSection from "@/Component/cabinCharter/hero";
import About from "@/Component/cabinCharter/about";
import SeaSide_Sixdays from "@/Component/cabinCharter/seaside_bliss";
import { cabinCharterMetadata } from "@/lib/metadata";

export const metadata = cabinCharterMetadata;

const CabinCharter = () => {
  return (
    <Fragment>
      <HeroSection />
      <About showContactButton={true} />
      <SeaSide_Sixdays />
    </Fragment>
  );
};

export default CabinCharter;
