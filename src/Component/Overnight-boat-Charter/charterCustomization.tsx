import React from 'react';
import { styles, combine } from '../../styles/style';
import HeadingContent from "@/common/heading";
import { FaSwimmer, FaUtensils } from 'react-icons/fa';
import { HiMiniInformationCircle } from "react-icons/hi2";

const NightCharter_Customization = () => {
    return (
        <div className="relative">
            {/* SUSTAINABILITY SECTION */}
            <div className={combine("relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]",)}>
             {/* Content */}
                <div className={combine("relative z-10 w-full", styles.container)}>
                    <div className="py-8 md:py-10 lg:py-15">
                        {/* Header Section */}
                        <div className="text-center mb-6 md:mb-8 lg:mb-12">
                            <HeadingContent
                                heading="Customizing Your Overnight Yacht Charter Phuket"
                                description="Every <strong>Overnight Boat Charter Phuket</strong> with Faraway is unique. From your very first inquiry, our team works with you to design the perfect journey. Before departure, you’ll meet with our expert sailors for a personalized briefing, using the latest weather forecast to shape the best itinerary together."
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
                                                <FaSwimmer className="text-white" />
                                            </div>
                                            <h3 className={combine("text-zink font-bold", styles.h4)}>
                                                Activity Options                                    </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 p-4 bg-zinc-100/80 rounded-xl hover:bg-zinc-200/80 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-[#D6AB62] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    1
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Dive or snorkel in crystal-clear waters.                                        </p>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-zinc-100/80 rounded-xl hover:bg-zinc-200/80 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-[#D6AB62] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    2
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Go fishing or paddleboarding around secluded bays.                                        </p>
                                            </div>
                                            <div className="flex items-start gap-3 p-4 bg-zinc-100/80 rounded-xl hover:bg-zinc-200/80 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-[#D6AB62] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    3
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Choose optional extras like kayaking or longtail transfers for island exploration.
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
                                                <FaUtensils className="text-white" />
                                            </div>
                                            <h3 className={combine("text-zink font-bold", styles.h4)}>
                                                Dining & Comfort
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 p-4 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors duration-300">
                                                <div className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    1
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Enjoy authentic Thai cuisine freshly prepared by your private chef.                                        </p>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors duration-300">
                                                <div className="w-8 h-8  bg-mustard rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    2
                                                </div>
                                                <p className={combine("text-zink", styles.p2)}>
                                                    Request special menus, from vegetarian and vegan to international favorites.                                        </p>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors duration-300">
                                                <div className="w-8 h-8  bg-mustard rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                                    3
                                                </div>
                                                <p className={combine("text-zinc-700", styles.p2)}>
                                                    Celebrate milestones with personalized touches such as a birthday cake or romantic dinner setup.                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white rounded-6xl shadow-xl p-6 flex items-start gap-4 max-w-7xl">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                                <HiMiniInformationCircle className='text-white text-3xl' />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                                    Your <span className='font-semibold'>overnight yacht charter Phuket</span> can be fully tailored to your preferences. With enough notice, almost anything is possible — making each charter a one-of-a-kind experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NightCharter_Customization;