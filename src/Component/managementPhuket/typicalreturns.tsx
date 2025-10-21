"use client";
import { styles, combine } from "@/styles";
import { MdPeople, MdRestaurant, MdPool, MdMoreHoriz } from 'react-icons/md';
import HeadingContent from "@/common/heading";
import PngIcons from "@/icons/pngIcon";
import Button from "@/styles/Button";
const TypicalReturns = () => {
    const features = [
        {
            icon: MdPeople,
            heading: "10–20 % annual ROI",
            text: "under normal market conditions"
        },
        {
            icon: MdRestaurant,
            heading: "Up to 30 %",
            text: "when vessels are built or refitted cost-effectively"
        },
        {
            icon: MdPool,
            heading: "Year 1",
            text: "setup and optimisation phase"
        },
        {
            icon: MdMoreHoriz,
            heading: "Years 2 +",
            text: "stable earnings and capital appreciation"
        }
    ];

    return (
        <div>
            <div className="pb-7 md:pb-13 lg:pb-16 bg-white">
                <div className={combine(styles.container, "max-w-7xl")}>
                    {/* Main Title - Overnight Boat Charter */}
                    <div className="text-center mb-8">
                        <HeadingContent
                            heading="Typical Returns & Realistic Expectations"
                        />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11 lg:gap-15 xl:gap-20 items-center py-6">
                        {/* Left Side - Organic Image Collage */}
                        <div >
                            <img
                                src={PngIcons.mYacht7}
                                alt="Beach scene with yacht rental items"
                                className="w-full h-[380px] md:h-[490px] lg:h-[610px] rounded-2xl"
                            />
                        </div>
                        {/* Right Side - Features List */}
                        <div className="space-y-2">
                            <h3 className={combine("text-zink font-semibold font-playfair mb-2", styles.h3)}>Realistic Expectations</h3>
                            <p className={combine("text-zink font-inter font-medium mb-2", styles.p3)}>Our investors value reliability more than hype—steady returns, minimal downtime, and clean books.</p>
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
                                            <span className={combine("font-semibold me-2", styles.p1)}>{feature.heading}</span>
                                            {feature.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="pb-9 lg:pb-15 pt-0 xl:py-3 bg-white">
                <div className={combine(styles.container, "px-4")}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6">
                            <h3 className={combine(styles.h3, "text-zink font-playfair font-semibold leading-tight")}>
                            Engineering-Led Management
                            </h3>
                            <p className={combine(styles.p1, "text-zink font-inter font-normal leading-relaxed max-w-lg")}>
                            Reliability equals profit.<br />We focus on system efficiency: high-output alternators, lithium storage, solar arrays, and smart inverter setups. Reducing generator hours extends equipment life and slashes fuel burn. Every upgrade pays for itself in lower operating costs and happier guests.</p>
                        </div>
                        {/* Right Column - Image Collage */}
                        <div>
                            <img
                                src={PngIcons.mYacht8}
                                alt="Beach scene with yacht rental items"
                                className="w-full h-[380px] md:h-[460px] lg:h-[520px] xl::h-[570px] rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default TypicalReturns;