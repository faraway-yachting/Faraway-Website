import { Fragment } from "react";
import { overnightCharterMetadata } from "@/lib/metadata";
import OvernightCharterClient from "./OvernightCharterClient";

export const metadata = overnightCharterMetadata;

const NightBoat_Charter = () => {
  return (
    <Fragment>
      <OvernightCharterClient />
    </Fragment>
  );
};

export default NightBoat_Charter;