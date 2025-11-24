import { Fragment } from "react";
import { bareboatMetadata } from "@/lib/metadata";
import BareboatCharterClient from "./BareboatCharterClient";

export const metadata = bareboatMetadata;

export default function bareBoat_Charter() {
  return (
    <Fragment>
      <BareboatCharterClient />
    </Fragment>
  );
}
