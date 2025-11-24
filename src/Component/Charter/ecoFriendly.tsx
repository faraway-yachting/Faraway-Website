import React from 'react';
import { styles, combine } from '../../styles/style';
import HeadingContent from "@/common/heading";
import { FaBolt, FaTint } from 'react-icons/fa';

const EcoFriendly: React.FC = () => {
    return (
        <div className="relative">
            {/* SUSTAINABILITY SECTION */}
            <div className={combine("relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]", )}>

                {/* Content */}
                <div className={combine("relative z-10 w-full", styles.container)}>
                    <div className="py-8 md:py-10 lg:py-15">
                        {/* Header Section */}
                        <div className="text-center mb-6 md:mb-8 lg:mb-12">
                            <HeadingContent
                                heading="Sustainability and Eco-Friendly Yacht Rentals"
                                description="Faraway Yachting is committed to protecting the Andaman Sea with sustainable practices."
                            />
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                            {/* Green Technology Card */}
                            <div className="relative group">
                                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-zinc-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90">
                                    {/* Decorative Elements */}


                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-[#D6AB62] to-[#F4A261] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                                <FaBolt className="text-white" />
                                            </div>
                                            <h3 className={combine("text-zink font-bold", styles.h4)}>
                                                Green Technology
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 p-4 bg-zinc-100/80 rounded-xl hover:bg-zinc-200/80 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-[#D6AB62] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    1
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Solar power, lithium-ion batteries, and 48V systems reduce diesel usage
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-zinc-100/80 rounded-xl hover:bg-zinc-200/80 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-[#D6AB62] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    2
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Our Lightweight aluminum catamarans are among the most fuel-efficient in Phuket
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Eco-Friendly Practices Card */}
                            <div className="relative group">
                                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-zinc-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-[#D6AB62] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                                <FaTint className="text-white" />
                                            </div>
                                            <h3 className={combine("text-zink font-bold", styles.h4)}>
                                                Eco-Friendly Practices
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 p-4 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    1
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Onboard water filtration reduces bottled plastic use
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors duration-300">
                                                <div className="w-8 h-8  bg-mustard rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    2
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Waste is separated and recycled whenever possible
                                                </p>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors duration-300">
                                                <div className="w-8 h-8  bg-mustard rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    3
                                                </div>
                                                <p className={combine("text-zinc-700", styles.p2)}>
                                                    Only ocean-safe cleaning products are used
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className={combine("text-zink font-semibold",styles.p1)}>By choosing us, you’re helping preserve Phuket’s marine beauty for the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendly;
