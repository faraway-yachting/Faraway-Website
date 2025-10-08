import { styles, combine } from '../../styles/style';
import Button from '@/styles/Button';
import { LuAnchor } from 'react-icons/lu';

const Booking = () => {
    return (
        <section
            className={combine( "relative w-full bg-cover bg-end bg-no-repeat overflow-hidden", styles.minH2, styles.flexCenter)}
            style={{ backgroundImage: "url('/images/overnightimg17.png')" }}
        >
            <div className="absolute inset-0 bg-[#012A50]/50 z-0" />

            {/* Content */}
            <div className={combine(styles.flexCenter, "h-full text-center text-white relative z-10", styles.px1)}>
                <div className={combine(styles.flexCol, "justify-center items-center max-w-4xl mx-auto")}>
                    {/* Main Heading */}
                    <h2 className={combine(styles.h2, "font-semibold font-playfair leading-tight")}>
                        BOOK YOUR OVERNIGHT BOAT CHARTER PHUKET TODAY
                    </h2>

                    {/* Description */}
                    <p className={combine(styles.p1, "font-normal font-sourceSansPro text-center my-8 max-w-3xl")}>
                        Ready to experience Phuket's islands in complete privacy and comfort? Whether it's a honeymoon,
                        a family escape, or a multi-day luxury yacht charter Phuket, Faraway Yachting will make it unforgettable.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-4 mt-3">
                        <Button variant="primary" href='/contact' className="px-8 py-4 text-lg">
                            <div className="flex items-center">
                                <LuAnchor className="mr-2" />
                                Contact us today
                            </div>
                        </Button>
                    </div>

                    {/* Sub-text */}
                    <p className="text-base md:text-lg lg:text-xl font-inter text-white/90">
                        to start planning your Overnight Boat Charter Phuket
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Booking;
