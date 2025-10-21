import { styles, combine } from '../../styles/style';
import Button from '@/styles/Button';
import { LuAnchor, LuMapPin, LuGlobe, LuPhone, LuMail, LuNavigation, LuMessageCircle, LuClock, LuBuilding } from 'react-icons/lu';

const Booking = () => {
    return (
        <section
            className={combine( "relative w-full bg-cover bg-center bg-no-repeat overflow-hidden", styles.minH2, styles.flexCenter)}
            style={{ backgroundImage: "url('/images/mYacht18.png')" }}
        >
            <div className="absolute inset-0 bg-[#012A50]/60 z-0" />
            {/* Content */}
            <div className={combine(styles.flexCenter, "h-full text-center text-white relative z-10", styles.px1)}>
                <div className={combine(styles.flexCol, "justify-center items-center max-w-4xl mx-auto")}>
                    {/* Main Heading */}
                    <h2 className={combine(styles.h2, "font-semibold font-playfair leading-tight")}>
                    Let’s Talk About Your Yacht
                    </h2>
                    {/* Description */}
                    <p className={combine(styles.p1, "font-normal font-sourceSansPro text-center my-8 max-w-3xl")}>
                    We partner with owners who share our long-term vision—professional management, honest communication, and sustainable growth.<br />
                    If you want your yacht to work for you <span className="font-semibold">contact us today</span> for a private consultation.
                    </p>
                    {/* Contact Information */}
                    <div className={combine(styles.flexCol, "items-center space-y-6 mt-8")}>
                        {/* Location */}
                        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                            <LuMapPin className="text-2xl text-white" />
                            <span className={combine(styles.p1, "font-sourceSansPro text-white font-medium")}>
                                Faraway Yachting — Phuket, Thailand
                            </span>
                        </div>
                        
                        {/* Website */}
                        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                            <LuGlobe className="text-2xl text-white" />
                            <span className={combine(styles.p1, "font-sourceSansPro text-white")}>
                                www.faraway-yachting.com
                            </span>
                        </div>
                        
                        {/* Contact Methods */}
                        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                            <div className="flex items-center space-x-4">
                                <LuMessageCircle className="text-2xl text-white" />
                                <LuMail className="text-2xl text-white" />
                                <LuBuilding className="text-2xl text-white" />
                            </div>
                            <span className={combine(styles.p1, "font-sourceSansPro text-white")}>
                                WhatsApp | Email | Visit us in Chalong
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Booking;
