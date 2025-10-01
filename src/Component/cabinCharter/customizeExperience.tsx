import React from 'react';
import { styles, combine } from '../../styles/style';

const Customization: React.FC = () => {
    // Customization options data array
    const customizations = [
        "Special touches:",
        "Dietary needs: ",
        "Optional extras: "
    ];
    const description = [
        "Celebrating a birthday or anniversary? We’ll provide a complimentary cake or drink, and you can pre-order wine or sparkling for a toast.",
        " Vegetarian, vegan, or other preferences? No problem — we adapt menus at no extra cost. Premium requests (e.g., seafood-only) can be arranged with advance notice.",
        "Rent a private paddleboard for a small daily fee if you’d like exclusive use."
    ]

    return (
        <div className="relative my-13">
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
                        <div className="md:max-w-md lg:max-w-lg xl:max-w-4xl text-center md:text-left relative">
                            {/* Creative Background Elements */}
                            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-[#F9B233]/10 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-20 md:w-24 h-20 md:h-24 border-2 border-[#F4A261]/20 rounded-full"></div>

                            {/* Main Heading */}
                            <h2 className={combine("text-white font-extrabold font-playfair leading-tight mb-6 text-shadow-lg", styles.h1)}>
                            Customizing Your Cabin Charter Experience
                            </h2>
                            {/* Customization Options Grid */}
                            <div className="grid grid-cols-1 gap-4">
                                {customizations.map((customization, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <h5 className={combine("text-white font-semibold ", styles.p2)}>{customization} <span className='ms-2 font-normal'>{description[index]}</span></h5>
                                    </div>
                                ))}
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customization;