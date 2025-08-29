import { FiPhone } from "react-icons/fi";
import { styles, combine, Button } from "@/styles";

interface SetSailProps {
    id?: string;
    bgImage: string;
    bgColor?: string;
    overlayOpacity?: number;
}

const SetSail: React.FC<SetSailProps> = ({
    bgImage,
    bgColor = "#034250",
    overlayOpacity = 0.6,
}) => {
    const overlayRGBA = `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(
        bgColor.slice(3, 5),
        16
    )}, ${parseInt(bgColor.slice(5, 7), 16)}, ${overlayOpacity})`;

    return (
        <section className={combine("relative mb-8 overflow-hidden flex items-center justify-center", "min-h-[60vh] md:min-h-[60vh] lg:min-h-[70vh]")}>
            {/* Background Image */}
            <img
                src={bgImage}
                alt="Set Sail"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#012A50]/40 z-0" />

            {/* Content */}
            <div className={combine("relative z-20 text-center max-w-screen-xl", styles.px3)}>
                <p className={combine("text-white font-semibold mb-4 lg:mb-5 font-inter", styles.p2)}>
                    Set Sail With Us
                </p>
                <h2 className={combine("text-white uppercase font-extrabold font-playfair max-w-2xl mx-auto leading-tight", styles.h3)}>
                    Set Sail for Luxury and Adventure with Far Away Yacht Charters
                </h2>
                <p className="text-white text-base md:text-lg lg:text-xl font-normal font-inter max-w-3xl px-4 py-3 lg:py-5 leading-relaxed lg:leading-tight">
                    Luxury, adventure, and unforgettable views—all aboard your private yacht. Discover hidden coves, island gems, and the beauty of Phuket.
                </p>

                <div className="flex justify-center mt-4">
                    <Button 
                        href="/contact"
                        variant="primary"
                    >
                        <div className="flex items-center">
                            <FiPhone className="mr-2" />
                            Contact Us Now
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SetSail;
