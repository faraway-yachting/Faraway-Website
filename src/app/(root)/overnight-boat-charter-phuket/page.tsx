"use client";
import HeroSection from "@/Component/Overnight-boat-Charter/hero";
import About from "@/Component/Home/about";

import { Fragment, useRef } from "react";
import TabSection from "@/Component/Overnight-boat-Charter/tabSection";

const NightBoat_Charter= () => {
    const contactRef = useRef<HTMLDivElement | null>(null);
    
    return(
        <Fragment>
            <HeroSection contactRef={contactRef} />
            <About/>
          
            <TabSection />
        
        </Fragment>
    )
};
export default NightBoat_Charter