import Button from "@/styles/Button"
import { styles, combine } from "@/styles";

const RentalYacht = () => {
    // Benefits data array
    const benefits = [
        "Untouched islands: Koh Hong, Koh Yao Noi, Phi Phi",
        "Dream Phuket itinerary with beaches & snorkeling",
        "Celebrate milestones: birthdays, weddings, anniversaries"
    ];
    // Services data array
    const services = [
        "Sunset Cruises from Phuket",
        "Island Hopping in the Andaman Sea", 
        "Luxury Sailing Trips in Thailand",
        "Overnight Yacht Rentals"
    ];

    return (
        <div className="relative">
            {/* HERO IMAGE SECTION */}
            <div className={combine("bg-[url('/images/BANNER.png') flex items-center", styles.minH2, styles.mt3, styles.mb1,styles.bgImage)}>
                {/* Creative Multi-Layer Overlay */}
                <div className="absolute inset-0 bg-[#012A50]/50 z-0" />
                {/* Creative Floating Elements */}
                <div className="absolute top-16 left-16 w-32 h-32 border-2 border-[#F9B233]/30 rotate-45 animate-spin"></div>
                <div className="absolute bottom-24 right-24 w-24 h-24 bg-[#F4A261]/20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#F9B233]/20 transform rotate-12 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-[#F4A261]/15 rounded-full animate-ping"></div>
                {/* Content */}
                <div className={combine("relative z-10 w-full", styles.container)}>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-20 md:gap-24 lg:gap-28 xl:gap-32 py-24">
                        {/* LEFT SIDE - Main Content */}
                        <div className="max-w-2xl text-center lg:text-left relative">
                            {/* Creative Background Elements */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#F9B233]/10 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-[#F4A261]/20 rounded-full"></div>
                            
                            {/* Main Heading */}
                            <h1 className={combine("text-white font-extrabold font-playfair leading-tight mb-6 text-shadow-lg", styles.h1)}>
                                Private Yacht in Phuket
                            </h1>
           {/* Description */}
                            <p className={combine("text-white/80 font-normal font-inter leading-relaxed mb-10", styles.p2)}>
                                Experience Thailand's magnificent islands with a Private Yacht Charter in Phuket. We create custom yachting experiences tailored to your desires and pace.
                            </p>
                            
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
                        <div className="max-w-lg text-center lg:text-left relative">
                            {/* Services Card */}
                            <div className="bg-gradient-to-br from-white/25 via-white/20 to-white/15 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 border border-white/40 shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(249,178,51,0.3)] transition-all duration-700 relative overflow-hidden group mb-6">
                                {/* Creative Background Pattern */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRjlCMjMzIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0yMCAwTDI0LjQ5IDE1LjUxTDQwIDIwTDI0LjQ5IDI0LjQ5TDIwIDQwTDE1LjUxIDI0LjQ5TDAgMjBMMTUuNTEgMTUuNTFMMjAgMFoiLz48L2c+PC9zdmc+')] opacity-30 animate-pulse"></div>
                                 {/* Geometric Cut Corners */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#034250] transform rotate-45 translate-x-10 -translate-y-10"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-mustard transform rotate-45 -translate-x-8 translate-y-8"></div>
                                
                                <div className="relative z-10">
                                    {/* Services List */}
                                    <h6 className={combine("text-white font-bold mb-6", styles.h6)}>Our Services</h6>
                                    <div className="space-y-3">
                                        {services.map((service, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-mustard rounded-full"></div>
                                                <span className={combine("text-white font-medium", styles.p4)}>{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* CTA Button */}
                            <div className="text-center lg:text-left flex justify-center">
                                <Button 
                                    variant="primary" 
                                    href="/contact" 
                                    className="w-full md:w-auto"
                                >
                                    Check Availability
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RentalYacht