"use client";
import Image from 'next/image';
import { styles, combine } from '@/styles';
import PngIcons from '@/icons/pngIcon';

const OurGuests = () => {
    const features = [
        {
            id: 1,
            image: PngIcons.bareboat6,
            title: "Full yacht handover"
        },
        {
            id: 2,
            image: PngIcons.bareboat7,
            title: "Safety training"
        },
        {
            id: 3,
            image: PngIcons.bareboat8,
            title: "Local regulations overview"
        },
    ];

    return (
        <section className={combine("pb-10 pt-15 my-8 bg-white")}>
            <div className={combine(styles.container, "px-4 sm:px-6 lg:px-8")}>
                {/* Main Content Section - 2 Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-left">
                        <div className='mb-23'>
                            <h2 className={combine(styles.h2, "font-extrabold text-mustard mb-6")}>
                                Provisioning
                            </h2>
                            <p className={combine(styles.p2, "text-zink font-inter leading-relaxed")}>
                                We help you stop at a supermarket before boarding to stock supplies.
                            </p>
                        </div>
                        <div 
                            className='relative bg-gradient-to-br from-mustard/10 to-blue-50 rounded-2xl p-6 shadow-lg overflow-hidden'
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-mustard/20 rounded-full -mr-12 -mt-12"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/20 rounded-full -ml-10 -mb-10"></div>
                            
                            <div className="relative z-10">
                                <h4 className={combine(styles.h6, "font-extrabold text-zink font-playfair mb-3")}>
                                    Simple and Stress-Free
                                </h4>
                                <p className={combine('text-zink font-sourceSansPro leading-relaxed', styles.p2)}>
                                    With essentials covered, all that's left is to set sail.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Feature Cards Grid */}
                    <div className="grid grid-cols-2 gap-4 items-start">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 relative ${index === 0 || index === 2 ? '-mt-6' : ''}`}
                                style={{
                                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0796B6, #034250) border-box',
                                    border: '1px solid transparent'
                                }}
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <h3 className={combine(styles.p2, "font-semibold text-black font-playfair text-center leading-tight")}>
                                            {feature.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurGuests;
