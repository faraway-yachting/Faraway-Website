import React from 'react';
import { styles, combine } from '../../styles/style';
import Button from '../../styles/Button';

const YachtCustomization: React.FC = () => {
    // Customization options data array
    const customizations = [
        "Water Activities:",
        "Onboard Entertainment:",
        "Dining & Drinks:"
    ];
    const description = [
        "Snorkeling, scuba diving, fishing, kayaking, paddleboarding, jet skiing, parasailing",
        " DJs, live bands, dancers, and themed parties",
        " Fresh seafood BBQs, gourmet menus, and custom cake. Special alcohol selections can be arranged with advance notice."
    ]
    // Additional services data array
    const additionalServices = [
        "With early planning, nearly anything is possible—if it’s legal and feasible, we’ll make it happen.",

    ];

    return (
        <div className="relative">
            {/* HERO IMAGE SECTION */}
            <div className={combine("bg-[url('/images/super4.png')] flex min-h-[60vh] md:min-h-[54vh] lg:min-h-[58vh]", styles.mb1, styles.bgImage)}>
                {/* Creative Multi-Layer Overlay */}
                <div className="absolute inset-0 bg-[#012A50]/60 z-0" />
                {/* Creative Floating Elements */}
                <div className="absolute top-8 md:top-16 left-8 md:left-16 w-20 md:w-32 h-20 md:h-32 border-2 border-[#F9B233]/30 rotate-45 animate-spin"></div>
                <div className="absolute bottom-16 md:bottom-24 right-16 md:right-24 w-16 md:w-24 h-16 md:h-24 bg-[#F4A261]/20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-16 md:w-20 h-16 md:h-20 border-2 border-[#F9B233]/20 transform rotate-12 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 md:w-16 h-12 md:h-16 bg-[#F4A261]/15 rounded-full animate-ping"></div>

                {/* Content */}
                <div className={combine("relative z-10 w-full", styles.container)}>
                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 lg:gap-16 xl:gap-32 py-16 md:py-24 lg:py-24">
                        {/* LEFT SIDE - Main Content */}
                        <div className="md:max-w-md lg:max-w-lg xl:max-w-2xl text-center md:text-left relative">
                            {/* Creative Background Elements */}
                            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-[#F9B233]/10 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-20 md:w-24 h-20 md:h-24 border-2 border-[#F4A261]/20 rounded-full"></div>

                            {/* Main Heading */}
                            <h2 className={combine("text-white font-extrabold font-playfair leading-tight mb-6 text-shadow-lg", styles.h1)}>
                                Customizing Your Phuket Yacht Experience
                            </h2>
                            {/* Description */}
                            <p className={combine("text-white/80 font-normal font-inter leading-relaxed mb-10", styles.p2)}>
                                Make your yacht rental truly unique with custom add-ons
                            </p>

                            {/* Customization Options Grid */}
                            <div className="grid grid-cols-1 gap-4">
                                {customizations.map((customization, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-3 h-3 bg-mustard rounded-full shadow-sm"></div>
                                        <h5 className={combine("text-white font-semibold", styles.p2)}>{customization} <span className='font-normal'>{description[index]}</span></h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE - Additional Services & CTA */}
                        <div className="max-w-lg text-center md:text-left relative">
                            {/* Services Card */}
                            <div className="bg-zink rounded-[2rem] p-6 md:p-6 lg:p-10 shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(1,42,80,0.4)] transition-all duration-700 relative overflow-hidden group mb-6">
                                {/* Creative Background Pattern */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRjlCMjMzIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0yMCAwTDI0LjQ5IDE1LjUxTDQwIDIwTDI0LjQ5IDI0LjQ5TDIwIDQwTDE1LjUxIDI0LjQ5TDAgMjBMMTUuNTEgMTUuNTFMMjAgMFoiLz48L2c+PC9zdmc+')] opacity-30 animate-pulse"></div>
                                {/* Geometric Cut Corners */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-mustard transform rotate-45 translate-x-10 -translate-y-10"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-mustard transform rotate-45 -translate-x-8 translate-y-8"></div>

                                <div className="relative z-10">
                                    {/* Services List */}
                                    <div className="space-y-3">
                                        {additionalServices.map((service, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className={combine("text-white font-medium max-[] md:max-w-[200px]", styles.p4)}>{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            {/* CTA Button */}
                            <div className="text-center md:text-left flex justify-center md:justify-start">
                                <Button
                                    variant="primary"
                                    href="/contact"
                                    className="w-full md:w-auto"
                                >
                                    Customize Your Experience
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YachtCustomization;