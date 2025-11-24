"use client";
import { useState } from "react";
import { priceDetail, ItineraryItem } from "@/data/cabincharter/priceDetail";
import { IconType } from "react-icons";
import HeadingContent from "@/common/heading";
import { styles, combine } from "@/styles/style";

const Price_Details = () => {
    const [activeId, setActiveId] = useState<string | null>("1");

    const toggleItem = (id: string) => {
        setActiveId(prev => (prev === id ? null : id));
    };
    const renderItem = (item: ItineraryItem) => {
        const isActive = activeId === item.id;
        const Icon = item.icon as IconType;
        return (
            <div
                key={item.id}
                className="border bg-white border-gray-200 rounded-lg hover:shadow-md transition duration-200"
            >
                {/* Header */}
                <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center w-full p-2 md:p-3 lg:p-4 text-left">
                    <div className="flex items-center gap-4">
                        <div className="bg-zink text-white p-2 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                        </div>
                        <h3 className={combine("font-bold text-zink", styles.p1)}>{item.place}</h3>
                    </div>
                    <span className="text-2xl font-bold text-gray-400">{isActive ? "−" : "+"}</span>
                </button>
                {/* Accordion Body */}
                {isActive && (
                    <div className="px-2 md:px-4 pb-6 space-y-2">
                        {item.itinerary?.map((entry, idx) => (
                            <div key={idx}>
                                {entry.description?.map((desc, i) => (
                                    <p key={`${idx}-${i}`}
                                        className={combine("ms-3 text-[#333333] leading-tight flex items-start gap-2", styles.p3)}>
                                        <span className="text-black font-bold">•</span>
                                        {desc}
                                    </p>
                                ))}
                                {entry.link && entry.href && (
                                    <a 
                                        href={entry.href}
                                        className={combine("flex items-center", styles.p3)}
                                    >
                                      <span className="text-black font-bold mx-3">•</span>
                                      <p className="text-zink hover:text-[#d6ab62] underline">
                                        {entry.link}
                                        </p>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };
    // Divide items manually
    const leftColumn = priceDetail.filter(item => ["1", "2", "3", ].includes(item.id));
    const rightColumn = priceDetail.filter(item => ["4", "5", "6","7", "8", "9"].includes(item.id));
    return (
        <section className="bg-[#E6ECED1A] py-12 px-4 lg:px-4 xl:px-8">
            <div className={styles.containerLarge}>
                {/* Heading */}
                <div className="mb-12 ">
                    <HeadingContent
                        heading="What’s Included in Your Phuket Cabin Charter"
                       />
                </div>
                {/* Itinerary Columns */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                    <div className="space-y-4">{leftColumn.map(renderItem)}</div>
                    <div className="space-y-4">{rightColumn.map(renderItem)}</div>
                </div>
            </div>
        </section>
    );
};
export default Price_Details;
