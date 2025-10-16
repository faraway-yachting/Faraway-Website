import React from 'react';
import { yachtTipsMainData } from '../../data/charter/yachtTipsData';
import { styles, combine } from '../../styles/style';
import HeadingContent from "@/common/heading";

const YachtTips: React.FC = () => {
    const { title,  tips } = yachtTipsMainData;

    return (
        <section className={combine("relative mb-12")}>
            <div className={combine(styles.container, "relative")}>
                {/* Main Content Container */}
                <div className='absolute top-55 lg:top-75 xl:top-85 left-40 lg:left-70 xl:left-100 z-10 hidden md:block'>
                    <img src="/images/crewedimg19.png" alt="Yacht tip icon" />
                </div> 

                <div>
                    <img src="/images/crewedimg18.png" alt="Yacht tip icon" className='absolute top-30 right-0 lg:right-10 z-10 hidden md:block '  />
                </div>
                <div className={combine("relative bg-white p-0 lg:p-7")}>
                    <div className={combine("text-center", styles.mb2)}>
                      <HeadingContent 
                      heading="Tips for First-Time Phuket Yacht Rentals"
                      description="Renting a yacht for the first time? Here’s what you need to know"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Beach Scene */}
                        <div className="relative">
                            <img
                                src="/images/crewedimg17.png"
                                alt="Beach scene with yacht rental items"
                                className="w-full h-[380px] md:h-[490px] lg:h-[580px] rounded-2xl"
                            />
                        </div>

                        {/* Right Side - Tips */}
                        <div className={combine("space-y-5 lg:space-y-8")}>
                            {tips.map((tip, index) => (
                                <div key={index} className="flex items-start space-x-3 lg:space-x-6">
                                    {/* Tip Number and Icon */}
                                    <div >
                                        <img
                                            src={tip.icon}
                                            alt={tip.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Tip Content */}
                                    <div className="flex-1 pt-2">
                                        <h3 className={combine(styles.h5, "text-zink mb-1 lg:mb-3")}>
                                            {tip.title}
                                        </h3>
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
