import { styles, combine } from '../../styles/style';
import { LuMapPin, LuGlobe, LuPhone } from 'react-icons/lu';
const Booking = () => {
    return (
        <section
            className={combine("relative w-full bg-cover bg-center bg-no-repeat overflow-hidden min-h-[64vh] md:min-h-[63vh] lg:min-h-[66vh] xl:min-h-[61vh]", styles.flexCenter)}
            style={{ backgroundImage: "url('/images/mYacht18.png')" }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#012A50]/80 via-[#012A50]/60 to-[#001122]/70 z-0" />

            {/* Content */}
            <div className={combine(styles.flexCenter, "h-full text-white relative z-10", styles.px1)}>
                <div className={combine(styles.container, "w-full")}>
                    <div className={combine(styles.grid2Col, "gap-7 md:gap-11 lg:gap-13 xl:gap-16 items-center")}>
                        {/* Left Side - Content */}
                        <div className="text-left space-y-4 lg:space-y-6">
                            {/* Main Heading */}
                            <h2 className={combine(styles.h2, "font-bold leading-tight")}>
                                Let's Talk About Your Yacht
                            </h2>
                            {/* Description */}
                            <p className={combine(styles.p1, "font-normal font-inter leading-tight text-white/90")}>
                                We partner with owners who share our long-term vision—professional management, honest communication, and sustainable growth. If you want your yacht to work for you <span className="font-semibold text-white">contact us today</span> for a private consultation.
                            </p>
                        </div>
                        {/* Right Side - Contact Information */}
                        <div className="flex justify-center md:justify-end">
                            <div className="max-w-md text-center md:text-left relative">
                                {/* Services Card */}
                                <div className="bg-zink rounded-[2rem] p-6 md:p-6 lg:p-7 shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(1,42,80,0.4)] transition-all duration-700 relative overflow-hidden group mb-6">
                                    {/* Creative Background Pattern */}
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRjlCMjMzIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0yMCAwTDI0LjQ5IDE1LjUxTDQwIDIwTDI0LjQ5IDI0LjQ5TDIwIDQwTDE1LjUxIDI0LjQ5TDAgMjBMMTUuNTEgMTUuNTFMMjAgMFoiLz48L2c+PC9zdmc+')] opacity-30 animate-pulse"></div>
                                    {/* Golden Accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-mustard transform rotate-45 translate-x-10 -translate-y-10"></div>
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-mustard transform rotate-45 -translate-x-8 translate-y-8"></div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className={combine(styles.h5, "text-white font-semibold", styles.mb1)}>Contact us today</h3>

                                        <div className="space-y-4 text-white">
                                            {/* Contact Points */}
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-3">
                                                    <LuMapPin className="text-mustard text-lg" />
                                                    <span className={combine(styles.p4, "text-white font-medium font-inter")}>Faraway Yachting — Phuket, Thailand</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <LuGlobe className="text-mustard text-lg" />
                                                    <span className={combine(styles.p4, "text-white font-inter")}>www.faraway-yachting.com</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <LuPhone className="text-mustard text-lg" />
                                                    <span className={combine(styles.p4, "text-white font-inter")}>WhatsApp | Email | Visit us in Chalong</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Booking;
