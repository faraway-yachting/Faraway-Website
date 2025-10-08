"use client";
import { styles, combine } from "@/styles";
import { MdPeople, MdRestaurant, MdPool, MdMoreHoriz } from 'react-icons/md';
import HeadingContent from "@/common/heading";
import Image from "next/image";
import PngIcons from "@/icons/pngIcon";

const IncludedInfo = () => {
    const features = [
        {
            icon: MdPeople,
            text: "A minimum of 3 crew: Captain, deckhand/guide & chef/hostess."
        },
        {
            icon: MdRestaurant,
            text: "All meals, fresh water, and fuel."
        },
        {
            icon: MdPool,
            text: "Snorkeling equipment and fishing equipment."
        },
        {
            icon: MdMoreHoriz,
            text: "More depending on the vessel and its specifications."
        }
    ];

    return (
        <div className="pb-7 md:pb-13 lg:pb-16 bg-white">
            <div className={combine(styles.container, "max-w-7xl")}>
                {/* Main Title - Overnight Boat Charter */}
                <div className="text-center mb-8">
                    <HeadingContent
                        heading="What’s Included in Your Phuket Overnight Boat Charter"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11 lg:gap-15 xl:gap-20 items-center py-6">
                    {/* Left Side - Organic Image Collage */}
                    <div >
                        <img
                            src={PngIcons.nightCharterimg1}
                            alt="Beach scene with yacht rental items"
                            className="w-full h-[380px] md:h-[490px] lg:h-[610px] rounded-2xl"
                        />
                    </div>
                    {/* Right Side - Features List */}
                    <div className="space-y-2">
                        <h3 className={combine("text-zink font-semibold font-playfair mb-2", styles.h3)}>Crewed Charters</h3>
                        <p className={combine("text-zink font-inter font-medium mb-2", styles.p3)}>Most guests prefer <span className="font-semibold">crewed overnight boat charters in Phuket</span>, which include</p>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-3xl p-2 lg:p-4 cursor-pointer hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-mustard rounded-lg flex items-center justify-center">
                                            <feature.icon className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    <p className={combine("text-zink font-inter font-mediumleading-relaxed pt-2", styles.p3)}>
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <p className={combine("text-zink font-inter max-w-4xl mx-auto leading-relaxed mt-2", styles.p2)}>
                            Alcohol and soft drinks are typically extra. Some higher end luxury yachts use an <span className="font-semibold">Advanced Provisioning Allowance (APA)</span> system for provisions and fuel.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default IncludedInfo;