import Image from 'next/image';
import { styles, combine } from '@/styles';
import HeadingContent from '@/common/heading';
import { FaCheckCircle } from "react-icons/fa";
import { HiMiniInformationCircle } from "react-icons/hi2";

// Reusable components
const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

interface BoatCardProps {
    src: string;
    alt: string;
    title: string;
    price: string;
    badge: string;
    badgeColor: string;
    badgeTextColor?: string;
}

const BoatCard = ({ src, alt, title, price, badge, badgeColor, badgeTextColor = "text-white" }: BoatCardProps) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <Image src={src} alt={alt} width={300} height={200} className="w-full h-58 lg:h-56 xl:h-61 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
            <div className="absolute top-3 right-3">
                <span className={`${badgeColor} ${badgeTextColor} px-3 py-1 rounded-full text-base font-medium`}>
                    {badge}
                </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
                <h3 className={combine(styles.p5, "font-bold text-zink")}>{title}</h3>
            </div>
        </div>
        <div className="px-3 pb-4">
            <div className="">
                <p className={combine(styles.p1, "font-bold text-mustard")}>{price}</p>
                <span className={combine(styles.p4, "text-gray-500 font-inter ml-1")}>per night.</span>
            </div>
        </div>
    </div>
);

interface FactorItemProps {
    title: string;
    description: string;
}

const FactorItem = ({ title, description }: FactorItemProps) => (
    <li className="flex items-start gap-3 max-w-2xl">
        <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
        <div>
            <p className={combine("font-bold text-zink pb-1", styles.p3)}>{title}</p>
            <p className={combine("text-zink font-sourceSansPro", styles.p2)}>{description}</p>
        </div>
    </li>
);

const BoatCost = () => {
    const boats = [
        { src: "/images/overnightimg8.png", alt: "Hot Chilli speedboat", title: "Hot Chilli", price: "€900 - €1,500", badge: "Budget", badgeColor: "bg-[#DDF0FF]", badgeTextColor: "text-zink" },
        { src: "/images/overnightimg9.png", alt: "Mid-tier Catamaran", title: "Mid-tier Catamarans", price: "€1,000 - €1,800", badge: "Mid-tier", badgeColor: "bg-[#009AFF]" },
        { src: "/images/overnightimg10.png", alt: "C'est La Vie luxury yacht", title: "C'est La Vie (luxury)", price: "€2,500 - €5,000", badge: "Luxury", badgeColor: "bg-[#0061B1]" },
        { src: "/images/overnightimg11.png", alt: "Mia Kai superyacht", title: "Mia Kai (superyacht)", price: "€10,000 - €15,000", badge: "Superyacht", badgeColor: "bg-[#012A50]" }
    ];

    const factors = [
        { title: "Seasonality", description: "Prices are higher during Christmas & New Year and the high season from November till May." },
        { title: "Amenities", description: "Luxury features like air conditioning, water toys, highly trained crew or premium dining increase costs." },
        { title: "Guest count", description: "Some yachts charge extra the more guests are onboard." }
    ];

    return (
        <div className={combine(styles.container, "pt-7 pb-8 lg:pb-16")}>
            <div className="mb-10">
                <HeadingContent heading="Cost of an Overnight Boat Charter in Phuket"
                description="The cost of an overnight boat charter Phuket varies by yacht type, group size, and season." />
            </div>

            <div className={combine("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-5 xl:gap-6 mb-16")}>
                {boats.map((boat, index) => <BoatCard key={index} {...boat} />)}
            </div>

            <div className="mb-10">
                <div className="grid grid-cols-12 gap-6 mt-5">
                    {/* First column - colspan 5 */}
                    <div className="col-span-12 md:col-span-5 flex items-center">
                        <h3 className={combine(styles.h3, "font-bold mb-3 md:mb-8 bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] bg-[length:200%_auto] bg-clip-text text-transparent hover:bg-[length:100%_auto] transition-all duration-500 text-center")}>Factors Affecting Cost</h3>
                    </div>

                    {/* Second column - colspan 7 */}
                    <div className="col-span-12 md:col-span-7">
                        <ul className="space-y-4 lg:space-y-6">
                            {factors.map((factor, index) => <FactorItem key={index} {...factor} />)}
                        </ul>
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
                    <h4 className={combine('text-zink font-bold font-playfair mb-2', styles.h5)}>
                        Tip from our general manager                    </h4>
                    <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                        A 5-night overnight boat charter Phuket offers the best balance of cost and experience. On top you can escape the most crowded islands if choosing a charter of 5 nights or more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BoatCost;