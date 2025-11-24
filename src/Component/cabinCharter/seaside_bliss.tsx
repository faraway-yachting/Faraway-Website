"use client";
import { useRef, useState } from "react";
import { LuShipWheel, LuAnchor, LuBadgeEuro, LuInfo } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoBoatOutline } from "react-icons/io5";
import { LuSailboat } from "react-icons/lu";
import ContactUs from "./contactUs";
import { styles, combine } from "@/styles/style";
import RenterTips from "./renterTips"
import About from "@/Component/Home/about";
import Sailing_Itinerary from "./sailing_Itineraries";
import PricingSection from "./pricing";
import CruiseDates from "./cruiseDates";
import SealifeFAQ from "../../common/curiousSealife";
import { Sealife } from "@/data/cabincharter/saelife";
import SailingDetails from "@/Component/cabinCharter/oursailsDetail";
import Price_Details from "@/Component/cabinCharter/pricingDetail";
import ChooseCharter from "./chooseCharter";
import OurCrew from "@/Component/cabinCharter/ourCrew";
import SpecialOccasionsCard from "./specailOcassions"
import ChooseFaraway from "./choseFaraway";
import BookYourCharter from "./charterbooking"
import Customization from "./customizeExperience";

interface SeaSide_SixdaysProps {
  contactRef?: React.RefObject<HTMLDivElement | null>;
}

const SeaSide_Sixdays = ({ contactRef: propContactRef }: SeaSide_SixdaysProps) => {
  // Section Refs
  const contactRef = propContactRef || useRef<HTMLDivElement | null>(null);
  const itineraryRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const pricingDetailsRef = useRef<HTMLDivElement | null>(null);
  const yachtRef = useRef<HTMLDivElement | null>(null);
  const cruiseRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const generalInfoRef = useRef<HTMLDivElement | null>(null);
  const sectionTabs = [
    { icon: LuBadgeEuro, label: "Pricing", targetRef: pricingRef },
    { icon: LuAnchor, label: "Inclusions", targetRef: pricingDetailsRef },
    { icon: IoBoatOutline, label: "Itinerary", targetRef: itineraryRef },
    { icon: SlCalender, label: "Cruise Dates", targetRef: cruiseRef },
    { icon: LuSailboat, label: "The Yacht", targetRef: yachtRef },
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
                    : "text-[#034250] border-b-2 hover:text-[#d6ab62] border-b-zink"
                    }`}
                >
                  <Icon size={20} />
                   {label}
                </button>
              ))}
            </div>
            {/* Intro */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 pt-5 items-center">
              <div className="flex flex-col items-center md:items-start text-center md:text-start">
                <p className={combine("text-mustard font-playfair", styles.h5)}>
                  Island Odyssey
                </p>
                <h2 className={combine(styles.h2, "font-bold text-zink py-2 sm:py-2 max-w-xl leading-snug")}>
                  6 Days of Seaside Bliss
                </h2>
                <p className={combine("text-zink pt-3 sm:pt-4 max-w-lg leading-relaxed", styles.p3)}>
                  Sail through Thailand's island gems on a 6-day luxury cabin charter—discover hidden lagoons, vibrant reefs, and serene beaches from Phuket to Koh Rok and Phi Phi Leh.
                </p>
                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      contactRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      });
                    }}
                    className="mt-3 md:mt-6 flex items-center gap-2"
                  >
                    Detail Itinerary
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  src={PngIcons.sixPlaces}
                  alt="Charter Map"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-xl max-h-[390px] md:max-h-[410px] lg:max-h-[470px] xl:max-h-[550px]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <SeaEscape /> */}
      {/* <Thailand_BestLands /> */}
      <PricingSection
        sectionRef={pricingRef}
        showContactButton={true}
        contactRef={contactRef}
      />
      <div ref={pricingDetailsRef}>
        <Price_Details />
      </div>
      <Sailing_Itinerary sectionRef={itineraryRef} />
      <CruiseDates sectionRef={cruiseRef} contactRef={contactRef} />
      <div ref={yachtRef}>
        <SailingDetails />
      </div>
      <div ref={generalInfoRef}>
        <ChooseFaraway />
      </div>
      <OurCrew />
      <ChooseCharter />
      <About />
      <RenterTips />
      <Customization />
      <SpecialOccasionsCard />
      {/* <ComparisonChart /> */}
      {/* <FounderNote /> */}
      <SealifeFAQ sectionRef={faqRef} faqData={Sealife} title="Frequently Asked Questions – Cabin Charter Phuket" />
      <BookYourCharter contactRef={contactRef}/>
      <ContactUs sectionRef={contactRef} />
    
    </div>
  );
};

export default SeaSide_Sixdays;
