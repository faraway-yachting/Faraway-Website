"use client";
import { useState } from "react";
import { cruiseDates } from "@/data/cabincharter/cruiseDates";
import { RefObject } from "react";

interface CruiseDatesProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}

const CruiseDates = ({ sectionRef }: CruiseDatesProps) => {
    const [activeTab, setActiveTab] = useState<"1" | "2">("1");
    const data = cruiseDates.find((c) => c.id === activeTab);

    const tabs = [
        { id: "1", label: "Two Person in Double Cabin" },
        { id: "2", label: "Single Person in Double Cabin" }
    ];
    const baseTabClasses = "px-3 md:px-4 lg:px-6 py-2 border font-playfair text-[15px] md:text-[20px] lg:text-[23px] xl:text-[25px] text-black font-bold transition duration-300";
    const activeTabClasses = "border-gray-400 bg-[#E6ECED33] py-2 md:py-4 rounded-xl";
    const inactiveTabClasses = "border-transparent";
    const baseCellClasses = "px-4 py-3 text-zink border-black";
    const priceLabelClasses = "text-[13px] md:text-lg lg:text-[20px] font-sourceSansPro font-semibold text-mustard";
    const thClasses = "py-3 px-4 border-b border-black";
    return (
        <section ref={sectionRef} className="bg-white pt-4 pb-13 lg:pb-16 px-4 xl:px-0">
            <div className="max-w-[78.2rem] mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair text-zink font-semibold">
                        Cruise Dates
                    </h2>
                    <p className="text-zink font-sourceSansPro mt-2 font-normal text-xl md:text-[24px] lg:text-[28px] xl:text-[32px]">
                        Prices start from 999 € per person
                    </p>
                </div>

                <div className="flex justify-center mb-6 gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as "1" | "2")}
                            className={`${baseTabClasses} ${activeTab === tab.id ? activeTabClasses : inactiveTabClasses}`}
                        >
                            {tab.label}
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
                                            <button className="text-dark hover:text-[#D6AB62]">
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
