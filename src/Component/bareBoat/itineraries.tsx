"use client";

import React from 'react';
import { styles, combine } from '@/styles/style';
import HeadingContent from '@/common/heading';

const Itineraries: React.FC = () => {
    return (
        <section className={combine("relative bg-white pt-10", styles.my3)}>
            <div className={combine(styles.container)}>
                <div className={combine("text-center", styles.mb2)}>
                    <HeadingContent
                        heading="Charting Your Own Course: Self-Skippered Itineraries"
                        description="Plan your <strong>self-skippered charter Phuket</strong> exactly as you want it."
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Shorter Routes */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                        <h3 className={combine("text-zink font-bold font-playfair mb-4", styles.h5)}>
                            Shorter Routes (2–4 Nights)
                        </h3>
                        <ul className="space-y-3">
                            <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                                <span className="w-2 h-2 bg-mustard rounded-full"></span>
                                Phang Nga Bay
                            </li>
                            <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                                <span className="w-2 h-2 bg-mustard rounded-full"></span>
                                Phi Phi Islands
                            </li>
                        </ul>
                    </div>

                    {/* Longer Adventures */}
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                        <h3 className={combine("text-zink font-bold font-playfair mb-4", styles.h5)}>
                            Longer Adventures (5–7+ Nights)
                        </h3>
                        <ul className="space-y-3">
                            <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                                <span className="w-2 h-2 bg-mustard rounded-full"></span>
                                Similan Islands in the north
                            </li>
                            <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                                <span className="w-2 h-2 bg-mustard rounded-full"></span>
                                Butang Islands in the south
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Expert Briefings */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                    <h3 className={combine("text-zink font-bold font-playfair mb-2", styles.h5)}>
                        Expert Briefings Before You Sail
                    </h3>
                    <p className={combine("text-gray-600 mb-6", styles.p2)}>
                        Before departure, our team provides:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 mb-6">
                        <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                            <span className="w-2 h-2 bg-mustard rounded-full"></span>
                            Safety instructions
                        </li>
                        <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                            <span className="w-2 h-2 bg-mustard rounded-full"></span>
                            Area navigation tips
                        </li>
                        <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                            <span className="w-2 h-2 bg-mustard rounded-full"></span>
                            The latest weather forecast
                        </li>
                        <li className={combine("text-zink flex items-center gap-2", styles.p2)}>
                            <span className="w-2 h-2 bg-mustard rounded-full"></span>
                            Local advice to fine-tune your itinerary
                        </li>
                    </ul>

                    {/* Footer */}
                    <div className="pt-6 border-t border-gray-200">
                        <h4 className={combine("text-mustard font-bold font-playfair mb-2", styles.p1)}>
                            Freedom with Guidance
                        </h4>
                        <p className={combine("text-zink", styles.p2)}>
                            This balance of independence and support is what makes an <span className="font-semibold">independent sailing charter Phuket</span> so rewarding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Itineraries;

