"use client";
import { useState } from "react";
import { cruiseDates } from "@/data/cabincharter/cruiseDates";
import { RefObject } from "react";
import Button from "@/styles/Button";
import { styles, combine } from "@/styles/style";

interface CruiseDatesProps {
    sectionRef: RefObject<HTMLDivElement | null>;
    contactRef?: RefObject<HTMLDivElement | null>;
}
const CruiseDates = ({ sectionRef, contactRef }: CruiseDatesProps) => {
    const [activeTab, setActiveTab] = useState<"1" | "2">("1");
    const data = cruiseDates.find((c) => c.id === activeTab);
    const tabs = [
        { id: "1", label: "Two Person in Double Cabin" },
        { id: "2", label: "Single Person in Double Cabin" }
    ];
    const baseTabClasses = combine("px-3 md:px-4 lg:px-6 py-2 border text-zink font-bold transition duration-300", styles.h5);
    const activeTabClasses = "border-gray-400 bg-[#E6ECED33] py-2 md:py-4 rounded-xl";
    const inactiveTabClasses = "border-transparent";
    const baseCellClasses = "px-4 py-3 text-zink border-black";
    const priceLabelClasses = combine(styles.p3, "font-semibold text-mustard");
    const thClasses = "py-3 px-4 border-b border-black";
    return (
        <section ref={sectionRef} className={combine("bg-white pb-13 lg:pb-16 pt-8 lg:pt-10 xl:pt-12", styles.px1)}>
            <div className={styles.containerLarge}>
            <div className="text-center mb-10">
                    <h2 className={combine(styles.h2,"text-zink font-semibold")}>
                    Cabin Charter Dates in Phuket 
                    </h2>
                    <img src="/images/rframe.png" alt="" className={combine(styles.w2, "my-3 mx-auto")} />
                </div>

                <div className="flex justify-center mb-6 gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as "1" | "2")}
                            className={`${baseTabClasses} ${activeTab === tab.id ? activeTabClasses : inactiveTabClasses}`}
                        >
                          <h5 className="text-zink"> {tab.label} </h5> 
                            <p className={priceLabelClasses}>(price per person)</p>
                        </button>
                    ))}
                </div>

                {data && (
                    <div className="w-full overflow-x-auto border border-black rounded-lg max-w-5xl mx-auto">
                        <table className="min-w-[700px] w-full table-auto border-collapse text-center text-sm md:text-base font-sourceSansPro">
                            <thead className="bg-[#D6AB62] text-zink">
                                <tr className="text-[18px] lg:text-[20px] font-bold font-poopins text-white">
                                    <th className={`${thClasses} border-r`}>Date</th>
                                    <th className={`${thClasses} border-r`}>Availability</th>
                                    <th className={`${thClasses} border-r`}>Ensuite Cabin P.P.</th>
                                    <th className={`${thClasses} border-r`}>Non Ensuite Cabin P.P.</th>
                                    <th className={thClasses}>Book Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.dates.map((date, index) => (
                                    <tr key={index} className="bg-white text-[16px] lg:text-[18px] text-zink font-poppins font-medium hover:bg-[#f3f4f6] transition">
                                        <td className={`${baseCellClasses} ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {date}
                                        </td>
                                        <td className={`${baseCellClasses} ${index !== data.dates.length - 1 ? "border-b" : ""} border-r text-green-600 capitalize font-bold`}>
                                            {data.availibility[index] || "-"}
                                        </td>
                                        <td className={`${baseCellClasses} ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {data.ensuitCabin[index] || "-"}
                                        </td>
                                        <td className={`${baseCellClasses} ${index !== data.dates.length - 1 ? "border-b" : ""} border-r`}>
                                            {data.nonEnsuitCabin[index] || "-"}
                                        </td>
                                        <td className={`${baseCellClasses} ${index !== data.dates.length - 1 ? "border-b" : ""}`}>
                                            <button 
                                                onClick={() => {
                                                    contactRef?.current?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start"
                                                    });
                                                }}
                                                className="text-lg text-zink underline underline-offset-3 text-center cursor-pointer hover:text-[#D6AB62] transition-colors duration-200"
                                            >
                                                {data.bookNow[index] || "Book"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CruiseDates;
