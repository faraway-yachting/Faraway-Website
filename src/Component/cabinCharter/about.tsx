"use client";

import { FiPhone } from "react-icons/fi";
import Button from "@/styles/Button";
import { styles, combine } from "@/styles/style";

interface AboutProps {
    sectionRef?: React.RefObject<HTMLElement | null>;
    showContactButton?: boolean;
    contactRef?: React.RefObject<HTMLElement | null>;
}
const About = ({ sectionRef, showContactButton, contactRef }: AboutProps) => {
    return (
        <div>
            {/* Decorative line */}
            <div className="absolute w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]">
                <img src="/images/line1.png" alt="" className="w-full h-auto" />
            </div>

            {/* Main Section */}
            <div className="py-4 md:py-9 lg:py-12">
                <div className="relative h-auto md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                    <div className="absolute inset-0 hidden md:block bg-[url('/images/cabout_1.png')] bg-no-repeat bg-right z-[-1]" />
                    {/* Content */}
                    <p className="text-center font-normal text-[16px] sm:text-[18px] md:text-[20px] font-sourceSanspro uppercase text-[#B4C7CB]"></p>
                    <div className={combine("w-full h-full px-4 sm:px-6 md:px-10 lg:px-20", styles.flexCenter)}>
                        <div className="max-w-4xl text-center mx-auto py-8 sm:py-12 md:py-16">
                            <p className="text-center font-normal text-[16px] sm:text-[18px] md:text-[20px] font-sourceSanspro uppercase text-[#B4C7CB]">
                                Sail Into Serenity
                            </p>
                            <h2 className={combine(styles.h2, "text-zink uppercase", styles.py2)}>
                                The best cabin charter in Thailand
                            </h2>
                            <p className={combine(styles.h5, "font-playfair text-mustard uppercase font-semibold")}>
                                Escape. Unwind. Explore
                            </p>
                            <p className={combine(styles.p4, "text-center text-zink mt-5 lg:mt-6 xl:mt-7")}>
                                End your day in comfort with a delicious Thai dinner in your cozy cabin, watching the sunset paint the horizon. Drift to sleep under the stars, serenaded by the ocean breeze.
                            </p>
                            <p className={combine(styles.p4, "text-center text-zink", styles.my1)}>
                                A cabin charter in Thailand isn't just a getaway—it's a journey into serenity, beauty, and unforgettable memories.
                            </p>
                            <p className={combine(styles.p4, "text-center text-zink", styles.pb1)}>
                                With Far Away Yachting, your dream adventure is just a booking away. From luxury yachts to expert crews, we craft tailored, stress-free escapes just for you.
                            </p>
                            <div className="flex justify-center">
                                {showContactButton && contactRef && (
                                    <div className="">
                                        <Button
                                            variant="outline"
                                            onClick={() => {
                                                contactRef?.current?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start"
                                                });
                                            }}
                                        >
                                            <div className="flex items-center">
                                                <FiPhone className="me-2" />
                                                Contact Us
                                            </div>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
