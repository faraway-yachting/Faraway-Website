"use client";

import React from 'react';
import { RequirementsData, RequirementData } from '@/data/bareboat/boatContent';
import { styles, combine } from '@/styles/style';
import HeadingContent from '@/common/heading';

const Requirements: React.FC = () => {
    return (
        <section className="pb-10 md:pb-14 lg:pb-17 xl:pb-20 pt-7 bg-white relative">
            {/* Top Left Line3 Image */}
            <div className={combine(styles.container, "relative")}>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <HeadingContent
                        heading='What You Need to Know: Requirements'
                        description='To book a <strong>skipper-free yacht charter</strong>, certain <strong>bareboat yacht charter requirements</strong> apply.'
                    />
                </div>
                {/* Requirements Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12">
                    {RequirementsData.map((requirement: RequirementData) => (
                        <div
                            key={requirement.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white group cursor-pointer"
                        >
                            {/* Card Layout: Left Image Section + Right Content Section */}
                            <div className="flex">
                                {/* Left Image Section - Fixed Height */}
                                <div className="w-[140px] md:w-[120px] lg:w-[210px] xl:w-[250px] md:h-[188px] lg:h-[230px] xl:h-[235px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    <img
                                        src={requirement.image}
                                        alt={requirement.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Right Content Section */}
                                <div className="flex-1 py-4 lg:py-8 xl:py-10 px-3 lg:px-6">
                                    <h3 className={`${styles.h5} text-zink font-semibold mb-3`}>
                                        {requirement.title}
                                    </h3>
                                    <ul className={`${styles.p2} text-gray-600 leading-tight space-y-2`}>
                                        {requirement.description.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12 ">
                    <div className="max-w-[78.2rem] w-full bg-[#E6ECED33] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-6 border-l-[7px] border-l-[#034250]">
                        <div className="flex-1 text-left py-3">
                            <p className={combine("text-zink font-semibold mb-2", styles.p3)}>
                                Once approved, your <span className="font-semibold text-mustard font-playfair">Thailand bareboat hire</span>  is cleared for departure.
                            </p>
                            <p className={combine("text-zink font-medium max-w-4xl", styles.p4)}>
                                In case you do not have the correct licensing, we highly recommend a
                                <a href="/crewed-overnight-charter" rel="noopener noreferrer" className='underline font-semibold hover:text-[#d6ab62] cursor-pointer ms-1'>
                                    Crewed Overnight Charter in Phuket </a>
                                or in case this is over your budget, we also operate
                                <a href="/best-of-phukets-islands-cabincharter" rel="noopener noreferrer" className='underline font-semibold hover:text-[#d6ab62] cursor-pointer ms-1'>
                                    the best cabin charter in Phuket.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;


