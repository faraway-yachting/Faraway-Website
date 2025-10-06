"use client";
import { useRef, useState } from "react";
import { LuShipWheel, LuAnchor, LuBadgeEuro, LuInfo } from "react-icons/lu";
import { IoBoatOutline } from "react-icons/io5";
import { LuSailboat } from "react-icons/lu";
import { styles, combine } from "@/styles/style";
import BareboatCharter from "./bareboatCharter"
import  Itineraries from "./itineraries"
import SealifeFAQ from "../../common/curiousSealife";
import IncludedInfo from "./includedInfo";
import { FAQContent } from "@/data/overnight-boat/faqs";
import BoatCost from "./boatCost";
import OurFleet from "./ourFleet";
import ChooseFarway from "./chooseFaraway";

interface SeaSide_SixdaysProps {
    contactRef?: React.RefObject<HTMLDivElement | null>;
}

const TabSection = ({ contactRef: propContactRef }: SeaSide_SixdaysProps) => {
    const contactRef = propContactRef || useRef<HTMLDivElement | null>(null);
    const itineraryRef = useRef<HTMLDivElement | null>(null);
    const pricingRef = useRef<HTMLDivElement | null>(null);
    const pricingDetailsRef = useRef<HTMLDivElement | null>(null);
    const yachtRef = useRef<HTMLDivElement | null>(null);
    const faqRef = useRef<HTMLDivElement | null>(null);
    const generalInfoRef = useRef<HTMLDivElement | null>(null);
    const sectionTabs = [
        { icon: IoBoatOutline, label: "Itineraries ", targetRef: itineraryRef },
        { icon: LuAnchor, label: "Inclusions", targetRef: pricingDetailsRef },
        { icon: LuSailboat, label: "The different Yachts", targetRef: yachtRef },
        { icon: LuBadgeEuro, label: "Pricing", targetRef: pricingRef },
        { icon: LuInfo, label: "General information ", targetRef: generalInfoRef },
        { icon: LuShipWheel, label: "FAQ", targetRef: faqRef },
    ];
    const [activeTab, setActiveTab] = useState(sectionTabs[0].label);
    return (
        <div >
            <div className="relative my-6 sm:my-8 md:my-10">
                {/* Faint Background Map */}
                <div className="relative bg-white/80 z-10 py-0 sm:py-10 md:py-10 ">
                    <div className={styles.container}>
                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto max-w-3xl mx-auto">
                            {sectionTabs.map(({ label, icon: Icon, targetRef }) => (
                                <button
                                    key={label}
                                    onClick={() => {
                                        setActiveTab(label);
                                        targetRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }}
                                    className={`py-1 px-2 sm:px-3 text-[16px] md:text-base lg:text-[18px] xl:text-[20px] font-poppins font-medium flex items-center gap-2 transition whitespace-nowrap ${activeTab === label
                                        ? "text-mustard border-b-2 border-b-mustard"
                                        : "text-[#034250] border-b-2 border-b-zink"
                                        }`}
                                >
                                    <Icon size={20} />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Itineraries  />
            <IncludedInfo />
            <BareboatCharter />
            <OurFleet />
            <BoatCost />
            <ChooseFarway />
            
            <SealifeFAQ sectionRef={faqRef} faqData={FAQContent} title="FAQs for Overnight Boat Charters" />
   
        </div>
    );
};

export default TabSection;