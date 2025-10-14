import React from 'react';
import { styles, combine } from '../../styles/style';
import HeadingContent from "@/common/heading";
import PngIcons from "@/icons/pngIcon"

// Define the interface for yacht tips items
interface YachtTip {
    number: string;
    description: string;
    icon: string; // Icon image path
}
// Export the yacht tips data based on the Figma design
export const yachtTipsData: YachtTip[] = [
    {
        number: "01",
        description: "Use soft luggage for easy storage",
        icon: PngIcons.bareboat3
    },
    {
        number: "02",
        description: "Bring multiple swimwear sets, polarized sunglasses, hats, reef-safe sunscreen, and a camera",
        icon: PngIcons.bareboat4
    },
    {
        number: "03",
        description: "Deck shoes or sandals with grip are useful",
        icon: PngIcons.bareboat5
    }
];
// Export the main yacht tips data
export const yachtTipsMainData = {
    title: "What to Know Before You Go",
    subtitle: "Preparation ensures your do-it-yourself boat rental Thailand is smooth.",
    tips: yachtTipsData
};

const YachtTips: React.FC = () => {
    return (
        <section className={combine("relative mb-6 md:mb-7 lg:mb-9 mt-8")}>
            <div className={combine(styles.container, "relative")}>

                <div>
                    <img src="/images/crewedimg18.png" alt="Yacht tip icon" className='absolute top-30 right-0 lg:right-10 z-10 hidden md:block ' />
                </div>
                <div className={combine("relative bg-white p-0 lg:p-7")}>
                    <div className={combine("text-center", styles.mb2)}>
                        <HeadingContent
                            heading="What to Know Before You Go"
                            description="Preparation ensures your <strong>do-it-yourself boat rental Thailand</strong> is smooth.
"
                        />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
                        {/* Left Side - Beach Scene */}
                        <div className="relative">
                            <img
                                src={PngIcons.bareboat2}
                                alt="Beach scene with yacht rental items"
                                className="w-[490px] h-[380px] md:h-[440px] lg:h-[440px] rounded-2xl"
                            />
                        </div>
                        {/* Right Side - Tips */}
                        <div className={combine("space-y-5 lg:space-y-8")}>
                        <h3 className={combine('text-zink font-semibold',styles.p5)}>Packing Tips</h3>
                            {yachtTipsData.map((tip, index) => (
                                <div key={index} className="flex items-center space-x-3 lg:space-x-6">
                                    {/* Tip Number and Icon */}
                                    <div >
                                        <img
                                            src={tip.icon}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Tip Content */}
                                    <div className="flex-1 pt-2">

                                        <p className={combine(styles.p2, "text-zink leading-relaxed")}>
                                            {tip.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YachtTips;
