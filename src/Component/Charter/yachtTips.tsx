import React from 'react';
import { yachtTipsMainData } from '../../data/charter/yachtTipsData';
import { styles, combine } from '../../styles/style';

const YachtTips: React.FC = () => {
    const { title,  tips } = yachtTipsMainData;

    return (
        <section className={combine("relative mb-12")}>
            <div className={combine(styles.container, "relative")}>
                {/* Main Content Container */}
                <div className='absolute top-40 lg:top-50 xl:top-60 left-40 lg:left-70 xl:left-100 z-10 hidden md:block'>
                    <img src="/images/crewedimg19.png" alt="Yacht tip icon" />
                </div> 

                <div className='absolute top-20 right-0 z-10 hidden md:block'>
                    <img src="/images/crewedimg18.png" alt="Yacht tip icon"  />
                </div>
                <div className={combine("relative bg-white p-0 lg:p-5 xl:p-8")}>
                    <div className={combine("text-center", styles.mb2)}>
                        <h2 className={combine(styles.h2, "text-zink")}>
                            {title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-9 xl:gap-12 items-center">
                        {/* Left Side - Beach Scene */}
                        <div className="relative">
                            <img
                                src="/images/crewedimg17.png"
                                alt="Beach scene with yacht rental items"
                                className="w-full h-[280px] md:h-[480px] lg:h-[530px] xl:h-[580px] rounded-2xl md:block"
                            />
                        </div>

                        {/* Right Side - Tips */}
                        <div className={combine("space-y-4 lg:space-y-6 xl:space-y-8")}>
                            {tips.map((tip, index) => (
                                <div key={index} className="flex items-start space-x-6">
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
                                        <h3 className={combine(styles.h5, "text-zink mb-2 lg:mb-3")}>
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
