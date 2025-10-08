"use client";
import HeroSection from "@/Component/Overnight-boat-Charter/hero";
import About from "@/Component/Home/about";
import YachtMatchmaker from "@/Component/Charter/matchMark";
import { Fragment, useRef } from "react";
import TabSection from "@/Component/Overnight-boat-Charter/tabSection";
import Booking from "@/Component/Overnight-boat-Charter/booking";

const OvernightCharterClient = () => {
    const contactRef = useRef<HTMLDivElement | null>(null);

    return (
        <Fragment>
            <HeroSection contactRef={contactRef} />
            <About />
            <YachtMatchmaker />
            <TabSection />
            <Booking />
        </Fragment>
    )
};

export default OvernightCharterClient;
