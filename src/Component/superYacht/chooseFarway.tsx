import { styles, combine } from "@/styles";
import { LuSailboat } from "react-icons/lu";
import { HiMiniInformationCircle } from "react-icons/hi2";
import About from "@/Component/Home/about";
import HeadingContent from "@/common/heading";
const ChooseFarway = () => {
    const reasons = [
        "Expertise in the field with premium island and anchorage access",
        "Custom experiences that are worth your time",
        "Multilingual customer support team",
        "Clear, upfront pricing—no hidden fees, ever",
        "Fully-functional fleets to meet global standards"
    ];

    return (
        <div>
            <section className="relative bg-white py-12 md:py-14 lg:py-17 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-mustard/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

                <div className={combine("relative z-10", styles.containerLarge, styles.px1)}>
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className={combine(styles.h2, "font-extrabold text-zink mb-4")}>
                            Phuket Super Yacht Rental – Why Choose Us?
                        </h2>
                        <img
                            src="/images/rframe.png"
                            alt=""
                            className="md:max-w-4xl lg:max-w-3xl w-full my-3 mx-auto"
                        />
                        <h3 className={combine(styles.h3, "text-mustard font-semibold text-center mb-6")}>
                            Experience the Faraway Yachting Difference
                        </h3>
                        <p className={combine(styles.p2, "font-normal max-w-5xl font-inter text-zink mx-auto leading-relaxed")}>
                            Since the foundation of our company in 1997, we have garnered over 650 five-star reviews across Google and TripAdvisor, making us a trusted and exclusive yacht charter in Thailand. We have a high volume of repeat clients due to our professionalism, transparency, and commitment to delivering exceptional experiences.
                        </p>
                    </div>

                    {/* Main Content Card */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-8 lg:p-10 mb-8">
                        {/* Title with Icon */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-mustard rounded-full flex items-center justify-center flex-shrink-0">
                                <LuSailboat className="text-white text-xl md:text-2xl" />
                            </div>
                            <h3 className={combine(styles.h5, "font-bold text-zink")}>
                                Here are the reasons why travelers choose us over our competitors:
                            </h3>
                        </div>

                        {/* Reasons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-r from-blue-50/50 to-transparent p-5 md:p-6 rounded-xl border-l-4 border-mustard hover:border-mustard/80 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center group-hover:bg-mustard/90 transition-colors duration-300">
                                                <span className="text-white text-lg font-bold">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className={combine(styles.p2, "font-semibold text-zink leading-relaxed")}>
                                                {reason}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                We’re proud to say that we are not just a yacht rental company in Phuket—we’re your dedicated luxury travel buddy.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* CTA */}
            <div className="mt-12 md:mt-15 lg:mt-18">
                <HeadingContent
                    heading="Book Your Super Yacht Charter in Phuket Today"
                />
                <About />
            </div>
        </div>
    );
};

export default ChooseFarway;
