import { combine, styles } from "@/styles";
import { FaAnchor } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";

const PrivatYacht = () => {
    return (
        <div className="relative bg-white">
            <div className={combine("relative bg-white")}>
                <div className={combine("relative", styles.px1, styles.containerLarge, "py-12 md:py-16 lg:py-20")}>
                    
                    {/* Header Section */}
                    <div className="mb-9 lg:mb-13 xl:mb-16">
                        <h2 className={combine(styles.h2, "font-extrabold text-zink text-center mb-3")}>
                            Private Yacht in Phuket
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img src="/images/rframe.png" alt="" className="max-w-md w-full" />
                        </div>
                        <h3 className={combine(styles.h3, "text-mustard font-semibold text-center mb-4")}>
                            Your Exclusive Getaway
                        </h3>
                        <p className={combine(styles.p3, "text-zink max-w-4xl mx-auto text-center leading-relaxed")}>
                            Get to know more about Thailand's magnificent islands at your own convenience with a <span className="font-semibold">Private Yacht Charter in Phuket. At Faraway Yachting Co. Ltd.</span>, we create custom yachting experiences that aim to satisfy your desires, go along with your personality, and pace.
                        </p>
                    </div>

                    {/* Benefits Section */}
                    <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <FaAnchor className="text-mustard" size={40} />
                            </div>
                            <h3 className={combine(styles.p5, "font-bold text-zink")}>
                                Enjoy a <span className="font-semibold">private boat charter in Phuket</span> that will give you the following benefits:
                            </h3>
                        </div>
                    <div className="mb-9 border-t border-gray-200 pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-6xl">
                            <div className="flex items-start gap-3">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Get to see untouched islands such as Koh Hong, Koh Yao Noi, and Phi Phi
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Celebrate with style, especially if you have significant life milestones like birthdays, weddings, and anniversaries
                                </p>
                            </div>

                            <div className="flex items-start gap-3 md:col-span-2">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Let your dream <span className="font-semibold">Phuket yacht itinerary </span>come to life, such as visiting various beaches, snorkeling spots, and eating mouth-watering food
                                </p>
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
                                No doubt that the welcome drinks, private chefs, sunset toasts, and premium concierge service from start to finish will make a difference. Our team works around the clock to make sure that your experience is a smooth sailing one!                                </p>
                            </div>
                        </div>

                    {/* Notable Experiences Section */}
                    <div className="flex items-center gap-4 mb-4 mt-10">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <FaAnchor className="text-mustard" size={40} />
                            </div>
                            <h3 className={combine(styles.p5, "font-bold text-zink")}>
                                Most notable experiences include:
                            </h3>
                        </div>
                    <div className="border-t border-gray-200 pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-6xl">
                            <div className="flex items-start gap-3">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Sunset Cruises from Phuket
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Island Hopping in the Andaman Sea
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Luxury Sailing Trips in Thailand
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-zink text-2xl mt-1">•</span>
                                <p className={combine(styles.p3, "text-zink leading-relaxed")}>
                                    Overnight Yacht Rentals for Couples or Groups
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivatYacht;
