import Button from "@/styles/Button"

const RentalYacht = () => {
    return (
        <div className="relative">
            {/* HERO IMAGE SECTION */}
            <div className="bg-[url('/images/BANNER.png')] bg-cover bg-center bg-no-repeat min-h-[90vh] md:min-h-[85vh] lg:min-h-[80vh] xl:min-h-[73vh] flex items-center relative mb-3 md:mb-4 lg:mb-6 mt-9 md:mt-12 lg:mt-15 overflow-hidden">
                {/* Creative Multi-Layer Overlay */}
                <div className="absolute inset-0 bg-[#012A50]/50 z-0" />

                
                {/* Creative Floating Elements */}
                <div className="absolute top-16 left-16 w-32 h-32 border-2 border-[#F9B233]/30 rotate-45 animate-spin"></div>
                <div className="absolute bottom-24 right-24 w-24 h-24 bg-[#F4A261]/20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#F9B233]/20 transform rotate-12 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-[#F4A261]/15 rounded-full animate-ping"></div>
                
                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-20 md:gap-24 lg:gap-28 xl:gap-32 py-24">
                        {/* LEFT SIDE - Main Content */}
                        <div className="max-w-2xl text-center lg:text-left relative">
                            {/* Creative Background Elements */}
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#F9B233]/10 to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-[#F4A261]/20 rounded-full"></div>
                            
                            {/* Main Heading */}
                            <h1 className="text-white font-extrabold font-playfair text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] leading-tight mb-6 text-shadow-lg">
                                Private Yacht in Phuket
                            </h1>
                            <p className="text-white/90 font-medium font-inter text-[20px] md:text-[22px] leading-relaxed mb-8">
                                Your Exclusive Getaway
                            </p>
                            
                            {/* Description */}
                            <p className="text-white/80 font-normal font-inter text-[16px] md:text-[18px] leading-relaxed mb-10">
                                Get to know more about Thailand's magnificent islands at your own convenience with a Private Yacht Charter in Phuket. At Faraway Yachting Co. Ltd., we create custom yachting experiences that aim to satisfy your desires, go along with your personality, and pace.
                            </p>
                            
                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-3 group">
                                    <div className="w-3 h-3 bg-[#F9B233] rounded-full shadow-sm"></div>
                                    <span className="text-white font-semibold text-[16px] md:text-[18px]">Untouched islands: Koh Hong, Koh Yao Noi, and Phi Phi</span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="w-3 h-3 bg-[#F4A261] rounded-full shadow-sm"></div>
                                    <span className="text-white font-semibold text-[16px] md:text-[18px]">Dream Phuket yacht itinerary with beaches & snorkeling</span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="w-3 h-3 bg-[#F9B233] rounded-full shadow-sm"></div>
                                    <span className="text-white font-semibold text-[16px] md:text-[18px]">Celebrate milestones: birthdays, weddings, anniversaries</span>
                                </div>
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
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F9B233] transform rotate-45 -translate-x-8 translate-y-8"></div>
                                
                                <div className="relative z-10">
                                    {/* Services List */}
                                    <h3 className="text-white font-bold text-[20px] md:text-[22px] mb-6">Our Services</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#F9B233] rounded-full"></div>
                                            <span className="text-white font-medium text-[14px] md:text-[16px]">Sunset Cruises from Phuket</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#F4A261] rounded-full"></div>
                                            <span className="text-white font-medium text-[14px] md:text-[16px]">Island Hopping in the Andaman Sea</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#F9B233] rounded-full"></div>
                                            <span className="text-white font-medium text-[14px] md:text-[16px]">Luxury Sailing Trips in Thailand</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#F4A261] rounded-full"></div>
                                            <span className="text-white font-medium text-[14px] md:text-[16px]">Overnight Yacht Rentals</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="text-center lg:text-left flex justify-center">
                                <Button 
                                    variant="outline" 
                                    href="/contact" 
                                    className="bg-gradient-to-r from-[#F9B233] to-[#F4A261] text-white border-0 px-12 py-5 text-xl font-bold rounded-2xl hover:from-[#F4A261] hover:to-[#F9B233] transform hover:scale-110 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(249,178,51,0.4)] relative overflow-hidden group w-full md:w-auto"
                                >
                                    <span className="relative z-10">Check Availability</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#F4A261] to-[#F9B233] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#F9B233] to-[#F4A261] rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
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