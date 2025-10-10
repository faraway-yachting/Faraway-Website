import Button from "@/styles/Button"
import { styles, combine } from "@/styles";

const RentalYacht = () => {
    // Benefits data array
    const benefits = [
        "Premium services that guarantee comfort and relaxation",
        "Local insights combined with world-class service",
        "Various yacht charter options are available",
        "Customizable experiences to your unique preferences"
    ];
    // Services data array
    const services = [
        " for updated yacht availability and exclusive packages. Located in Phuket, Thailand – serving guests from around the world.",
        "Sail and make your fantasies come true. Your luxury private yacht is ready."
    ];

    return (
        <div className="relative">
            {/* HERO IMAGE SECTION */}
            <div className={combine("bg-[url('/images/super4.png')] flex min-h-[60vh] md:min-h-[54vh] lg:min-h-[48vh] xl:min-h-[48vh]", styles.mt3, styles.mb1, styles.bgImage)}>
                {/* Creative Multi-Layer Overlay */}
                <div className="absolute inset-0 bg-[#012A50]/60 z-0" />
                {/* Creative Floating Elements */}
                <div className="absolute top-8 md:top-14 left-8 md:left-14 w-20 md:w-32 h-20 md:h-32 border-2 border-[#F9B233]/30 rotate-45 animate-spin"></div>
                <div className="absolute bottom-16 md:bottom-24 right-16 md:right-24 w-16 md:w-24 h-16 md:h-24 bg-[#F4A261]/20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-16 md:w-20 h-16 md:h-20 border-2 border-[#F9B233]/20 transform rotate-12 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 md:w-16 h-12 md:h-16 bg-[#F4A261]/15 rounded-full animate-ping"></div>
                {/* Content */}
                <div className={combine("relative z-10 w-full", styles.container)}>
                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 lg:gap-16 xl:gap-32 py-16 md:py-24 lg:py-18">
                        {/* LEFT SIDE - Main Content */}
                        <div className="md:max-w-md lg:max-w-lg xl:max-w-2xl text-center md:text-left relative">
                            {/* Creative Background Elements */}
                            <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-[#F9B233]/10 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-20 md:w-24 h-20 md:h-24 border-2 border-[#F4A261]/20 rounded-full"></div>

                            {/* Main Heading */}
                            <h2 className={combine("text-white font-extrabold font-playfair leading-tight mb-4 text-shadow-lg", styles.h2)}>
                            Book Your Dream Super Yacht in Phuket Today
                            </h2>
                            {/* Description */}
                            <p className={combine("text-white/80 font-normal font-inter leading-relaxed mb-7", styles.p2)}>
                            Your dream super yacht charter Phuket vacation starts the moment you contact us. If you are looking for a romantic sailing trip, an adventure-filled family yacht holiday, or a VIP corporate yacht charter, we’ll give you the best possible options and guide you throughout your journey.                            </p>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-3 h-3 bg-mustard rounded-full shadow-sm"></div>
                                        <span className={combine("text-white font-semibold", styles.p2)}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* RIGHT SIDE - Services & CTA */}
                        <div className="max-w-lg text-center md:text-left relative">
                            {/* Services Card */}
                            <div className="bg-zink rounded-[2rem] p-6 md:p-6 lg:p-10 shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(1,42,80,0.4)] transition-all duration-700 relative overflow-hidden group mb-6">
                                {/* Creative Background Pattern */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRjlCMjMzIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0yMCAwTDI0LjQ5IDE1LjUxTDQwIDIwTDI0LjQ5IDI0LjQ5TDIwIDQwTDE1LjUxIDI0LjQ5TDAgMjBMMTUuNTEgMTUuNTFMMjAgMFoiLz48L2c+PC9zdmc+')] opacity-30 animate-pulse"></div>
                                {/* Geometric Cut Corners */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-mustard transform rotate-45 translate-x-10 -translate-y-10"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-mustard transform rotate-45 -translate-x-8 translate-y-8"></div>

                                <div className="relative z-10">
                                    {/* Services List */}
                                    <h6 className={combine("text-white font-bold mb-4", styles.h5)}>Contact us today</h6>
                                    <div className="space-y-3">
                                        {services.map((service, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className={combine("text-white font-medium", styles.p4)}>{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* CTA Button */}
                            {/* <div className="text-center md:text-left flex justify-center md:justify-start">
                                <Button
                                    variant="primary"
                                    href="/contact"
                                    className="w-full md:w-auto"
                                >
                                    Check Availability
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RentalYacht