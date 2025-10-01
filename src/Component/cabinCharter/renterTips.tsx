import React from 'react';
import { yachtTipsMainData } from '../../data/cabincharter/sailingData';
import { styles, combine } from '../../styles/style';
import HeadingContent from "@/common/heading";

const RenterTips: React.FC = () => {
    const { title,  tips } = yachtTipsMainData;

    return (
        <section className={combine("relative mt-10")}>
            <div className={combine(styles.container, "relative")}>
                {/* Main Content Container */}
                <div className='absolute top-40 lg:top-60 xl:top-60 left-40 lg:left-70 xl:left-100 z-10 hidden md:block'>
                    <img src="/images/crewedimg19.png" alt="Yacht tip icon" />
                </div> 

                <div >
                    <img src="/images/crewedimg18.png" alt="Yacht tip icon" className='absolute top-30 right-0 lg:right-10 z-10 hidden lg:block '  />
                </div>
                <div className={combine("relative bg-white p-0 lg:p-7")}>
                    <div className={combine("text-center", styles.mb2)}>
                      <HeadingContent 
                      heading="Tips for First-Time Renters"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Beach Scene */}
                        <div className="relative">
                            <img
                                src="/images/cabinimg.png"
                                alt="Beach scene with yacht rental items"
                                className="w-full h-[340px] md:h-[520px] lg:h-[580px] rounded-2xl"
                            />
                        </div>

                        {/* Right Side - Tips */}
                        <div className={combine("space-y-5 lg:space-y-8")}>
                            {tips.map((tip, index) => (
                                <div key={index} className="flex items-start space-x-3 lg:space-x-6">
                                    {/* Tip Number and Icon */}
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-25 lg:h-25 flex-shrink-0">
                                        <img
                                            src={tip.icon}
                                            alt={tip.title}
                                            className="w-full h-full object-contain"
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

export default RenterTips;
