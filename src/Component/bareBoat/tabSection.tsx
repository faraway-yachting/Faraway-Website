"use client";
import { useRef, useState } from "react";
import { LuShipWheel, LuAnchor, LuBadgeEuro, LuInfo, LuCompass } from "react-icons/lu";
import { IoBoatOutline } from "react-icons/io5";
import { LuSailboat } from "react-icons/lu";
import { styles, combine } from "@/styles/style";
import Requirements from "./requirements"
import Itineraries from "./itineraries"
import IdealYacht from "./idealYacht"
import About from "@/Component/Home/about";
import OurGuests from "./provisioning"
import YachtTips from "./tips"
import SealifeFAQ from "./FAQS";
import { BareboatFAQs } from "@/data/bareboat/faqs";

interface SeaSide_SixdaysProps {
    contactRef?: React.RefObject<HTMLDivElement | null>;
}

const BoatTabSection = ({ contactRef: propContactRef }: SeaSide_SixdaysProps) => {
    const contactRef = propContactRef || useRef<HTMLDivElement | null>(null);
    const itineraryRef = useRef<HTMLDivElement | null>(null);
    const pricingRef = useRef<HTMLDivElement | null>(null);
    const inclusionsRef = useRef<HTMLDivElement | null>(null);
    const yachtRef = useRef<HTMLDivElement | null>(null);
    const faqRef = useRef<HTMLDivElement | null>(null);
    const sectionTabs = [
        { icon: IoBoatOutline, label: "Itinerary ", targetRef: itineraryRef },
        { icon: LuAnchor, label: "Bareboat Charter Requirements ", targetRef: inclusionsRef },
        { icon: LuSailboat, label: "The Ideal Yacht", targetRef: yachtRef },
        { icon: LuBadgeEuro, label: "Preparation ", targetRef: pricingRef },
        { icon: LuShipWheel, label: "FAQ", targetRef: faqRef },
    ];
    const [activeTab, setActiveTab] = useState(sectionTabs[0].label);

    const scrollToSection = (targetRef: React.RefObject<HTMLDivElement | null>) => {
        if (targetRef?.current) {
            // Add a small delay to ensure the element is rendered
            setTimeout(() => {
                // Use getBoundingClientRect for more accurate positioning, especially for sticky elements
                const rect = targetRef.current!.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const elementPosition = rect.top + scrollTop;
                const offsetPosition = elementPosition - 110; // 90px offset to show the title clearly

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            console.log(`Target element not found`);
        }
    };

    return (
        <div >
            <div className="relative mt-6 sm:mt-8 lg:mt-10">
                {/* Faint Background Map */}
                <div className="relative bg-white/80 z-10 pt-0 sm:pt-10 md:pt-10 ">
                    <div className={styles.container}>
                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-7 overflow-x-auto max-w-3xl mx-auto">
                            {sectionTabs.map(({ label, icon: Icon, targetRef }) => (
                                <button
                                    key={label}
                                    onClick={() => {
                                        setActiveTab(label);
                                        scrollToSection(targetRef);
                                    }}
                                    className={`py-1 px-2 sm:px-3 text-[16px] md:text-base lg:text-[18px] xl:text-[20px] font-poppins font-medium flex items-center gap-2 transition whitespace-nowrap ${activeTab === label
                                        ? "text-mustard border-b-2 border-b-mustard"
                                        : "text-[#034250] hover:text-[#d6ab61] border-b-2 border-b-zink"
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
            <div ref={itineraryRef}>
                <Itineraries />
            </div>
              <About />
            <div ref={inclusionsRef}>
                <Requirements />
            </div>
            <div ref={yachtRef}>
                < IdealYacht />
            </div>
              <About />
            <div ref={pricingRef}>
                <YachtTips />
                <OurGuests />
            </div>
            <div ref={faqRef}>
                <SealifeFAQ sectionRef={faqRef} faqData={BareboatFAQs} title="Frequently Asked Questions – Bareboat Charter Phuket" />
            </div>
              <About />
        </div>
    );
};

export default BoatTabSection;