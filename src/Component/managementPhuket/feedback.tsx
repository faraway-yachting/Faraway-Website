"use client";
import React from "react";
import HeadingContent from "@/common/heading";
import { FAQContent } from "@/data/managementPhuket/faqs";
import SealifeFAQ from "@/common/curiousSealife";
import { styles } from "@/styles/style";
export default function Feedback() {
    return (
        <div>
            <div className="relative overflow-hidden bg-[#EEF8FF] lg:bg-[url('/images/mbg2.png')] lg:bg-no-repeat lg:bg-bottom lg:bg-[length:100%_260px] pb-[30px] lg:pb-[260px]">
                {/* top border */}

                <div className={`relative ${styles.container} py-16`}>
                    <HeadingContent
                        heading="Client Feedback"
                    />
                    {/* testimonials row */}
                    <div className="relative mt-0 lg:mt-12 grid grid-cols-1 items-center gap-12 lg:gap-0 xl:gap-7 lg:grid-cols-2">
                        {/* left card */}
                        <div className="relative">
                            <div className="absolute right-0 top-14 z-10 translate-x-0 lg:-translate-x-1/2 transform-none lg:transform">
                                {/* avatar */}
                                <div className="me-0 md:me-5 lg:me-0">
                                    <img src="/images/mYacht14.png" alt="Client avatar Marco L." className="h-full w-full object-cover" />
                                </div>
                            </div>
                            {/* connector line from avatar to card */}
                            <div className="ml-auto lg:ml-0 me-39 md:me-46 lg:me-58 flex flex-col justify-end rounded-xl mt-14 bg-white p-4 shadow-lg ring-1 ring-black/5 max-w-xs lg:max-w-xl ">
                                <p className={`${styles.p2} text-zink`}>
                                    "I can finally enjoy ownership without daily stress. The team handles everything."
                                </p>
                                <p className={` ${styles.p4} font-semibold mt-3 text-zink`}>
                                    — Marco L., Owner
                                </p>
                            </div>
                        </div>

                        {/* right card */}
                        <div className="relative">
                            <div className="absolute left-18 md:left-23 lg:left-20 top-[-10px] z-10 -translate-x-1/2 transform">
                                <div className="">
                                    <img src="/images/mYacht13.png" alt="Client avatar Ben V." className="h-full w-full object-cover" />
                                </div>
                            </div>
                            {/* connector line from avatar to card */}
                            <div className="ms-39 md:ms-45 lg:ms-40 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 max-w-xs lg:max-w-xl">
                                <p className={`${styles.p2} text-zink font-inter`}>
                                    "Faraway Yachting transformed my yacht into a reliable income stream. Their
                                    transparency and professionalism stand out in Phuket."
                                </p>
                                <p className={`mt-3 ${styles.p4} font-semibold text-zink`}>— Ben V., Investor</p>
                            </div>
                        </div>
                    </div>
                    {/* bubbles */}
                    <div className="pointer-events-none absolute inset-0 hidden lg:block">
                        {/* left bubble strip under left avatar */}
                        <img
                            src="/images/mYacht15.png"
                            alt="Bubbles"
                            className="absolute left-[41%] top-[77%] -translate-x-1/2 w-15"
                            loading="lazy"
                        />
                        {/* right bubble strip under right avatar */}
                        <img
                            src="/images/mYacht16.png"
                            alt="Bubbles"
                            className="absolute left-[53%] top-[68%] -translate-x-1/2 w-13"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="py-10">
                <SealifeFAQ faqData={FAQContent} title="Frequently Asked Questions (FAQ)" />
            </div>
        </div>
    );
}





