import { styles, combine } from "@/styles";
import Image from "next/image";

const EliteFleet = () => {
    return (
        <div className={combine("relative")}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/supery1.png"
                    alt="Luxury yacht background"
                    fill
                    className="object-cover"
                    priority={false}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#012A50]/60"></div>
            </div>

            <div className={combine(styles.px1, styles.containerLarge, "relative z-10")}>
                <div className="relative py-10 md:py-12 lg:py-16 xl:py-20">

                    {/* Main Content */}
                    <div className="relative z-10 text-center">
                        {/* Main Heading */}
                        <h2 className={combine(
                            styles.h2,
                            "text-white font-extrabold mb-3 md:mb-4"
                        )}>
                            Luxury Yachts Available for Charter
                        </h2>
                        <div className="flex items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6 lg:mb-7">
                            <div className="w-16 md:w-20 border-b-3 border-mustard"></div>
                            <h3 className={combine(
                                styles.h3,
                                "text-mustard font-bold"
                            )}>
                                Our Elite Fleet
                            </h3>
                            <div className="w-16 md:w-20 border-b-3 border-mustard"></div>
                        </div>
                        {/* Description */}
                        <div className={combine(
                            styles.containerXl,
                            "mx-auto space-y-4 md:space-y-5"
                        )}>
                            <p className={combine(
                                styles.p2,
                                "text-white font-medium leading-relaxed"
                            )}>
                                The comprehensive selection of high-end luxury yachts and catamarans for charter in Phuket ranges from 70 to 200+ feet. You&apos;ll feel the wonders of engineering, absolute elegance, and see the beautiful designs once you are on board. You are in for a treat as they are coupled with an indulging and adventure-packed experience.
                            </p>

                            <p className={combine(
                                styles.p2,
                                "text-white font-medium leading-relaxed"
                            )}>
                                So if you are currently searching for a quick and responsive motor yacht combined with ample space that gives superb riding comfort, we have options for you to check out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EliteFleet;

