"use client";

import { FiPhone } from "react-icons/fi";

// Common styles
const commonText = "text-center font-normal font-inter text-zink text-base"
const spacing = "py-4 md:py-9 lg:py-12"
const container = "w-full h-full px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center"
const content = "max-w-4xl text-center mx-auto py-8 sm:py-12 md:py-16"

const About = () => {
    return (
        <div>
            {/* Decorative line */}
            <div className="absolute w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]">
                <img src="/images/line1.png" alt="" className="w-full h-auto" />
            </div>

            {/* Main Section */}
            <div className={spacing}>
                <div className="relative h-auto md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                    {/* Background image */}
                    <div className="absolute inset-0 hidden md:block bg-[url('/images/cabout_1.png')] bg-no-repeat bg-right z-[-1]" />
                    
                    {/* Content */}
                    <div className={container}>
                        <div className={content}>
                            <p className="text-center font-normal text-[16px] sm:text-[18px] md:text-[20px] font-sourceSanspro uppercase text-[#B4C7CB]">
                                Sail Into Serenity
                            </p>
                            <p className="text-[26px] sm:text-[32px] md:text-[32px] lg:text-[40px] font-semibold font-playfair text-zink uppercase py-3 sm:py-4 md:py-5">
                                The best cabin charter in Thailand
                            </p>
                            <p className="text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] font-sourceSanspro text-mustard uppercase font-semibold">
                                Escape. Unwind. Explore
                            </p>
                            <p className={`${commonText} pt-3 sm:pt-4`}>
                                End your day in comfort with a delicious Thai dinner in your cozy cabin, watching the sunset paint the horizon. Drift to sleep under the stars, serenaded by the ocean breeze.
                            </p>
                            <p className={`${commonText} py-2 sm:py-3`}>
                                A cabin charter in Thailand isn't just a getaway—it's a journey into serenity, beauty, and unforgettable memories.
                            </p>
                            <p className={`${commonText} pb-3 sm:pb-4`}>
                                With Far Away Yachting, your dream adventure is just a booking away. From luxury yachts to expert crews, we craft tailored, stress-free escapes just for you.
                            </p>
                            <div className="flex justify-center">
                                <button className="text-xs sm:text-sm md:text-base lg:text-lg font-poppins bg-zink px-3 py-2 lg:px-5 lg:py-3 text-white rounded-lg mt-3 sm:mt-4 lg:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
                                    <FiPhone />
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
