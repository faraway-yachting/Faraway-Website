import Image from 'next/image';
import { styles, combine } from '@/styles';

// Card data
const occasionCards = [
    {
        id: 1,
        icon: "/images/nicon1.png",
        title: "Honeymoon yacht charter Phuket",
        description: "Private escapes with candlelit dinners.",
        titleColor: "text-mustard"
    },
    {
        id: 2,
        icon: "/images/nicon2.png",
        title: "Proposals & anniversaries",
        description: "Romantic setups on secluded islands",
        titleColor: "text-zink"
    },
    {
        id: 3,
        icon: "/images/nicon3.png",
        title: "Birthdays & milestones",
        description: "Festive, private, and unforgettable.",
        titleColor: "text-zink"
    },
    {
        id: 4,
        icon: "/images/nicon4.png",
        title: "Corporate retreats",
        description: "Team-building in luxury aboard your overnight yacht charter Phuket.",
        titleColor: "text-mustard"
    }
];

// Reusable card component
const OccasionCard = ({ icon, title, description, titleColor }: {
    icon: string;
    title: string;
    description: string;
    titleColor: string;
}) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-5">
            <img src={icon} alt={title} className="w-12 h-12" />
            <h3 className={combine(`${titleColor} font-semibold text-[21px]`)}>
                {title}
            </h3>
        </div>
        <p className={combine("text-zink leading-relaxed mt-3 font-inter", styles.p2,)}>
            {description}
        </p>
    </div>
);

// Small image component
const SmallImage = ({ src, alt, width, height }: {
    src: string;
    alt: string;
    width: number;
    height: number;
}) => (
    <div className="w-16 md:w-20 h-12 md:h-16 rounded-lg overflow-hidden shadow-lg">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover"
        />
    </div>
);

const Specail_Occasions = () => {
    return (
        <section className={combine("py-16 bg-white", styles.px1)}>
            <div className={styles.container}>
                <div className={combine(styles.grid2Col, "gap-12")}>
                    {/* Left Column - Images */}
                    <div className="relative">
                        <div className="relative w-full h-[450px] mx-auto lg:mx-0">
                           <img src="/images/overnightimg16.png" alt="" />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className={combine('text-zink font-semibold', styles.h3)}>
                                Special Occasions with Your Overnight Boat Charter Phuket
                            </h3>
                            <p className={combine('text-zink font-inter', styles.p3)}>
                                With notice, we can arrange decorations, themed dinners, or onboard entertainment to personalize your overnight boat hire Phuket.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {occasionCards.map((card) => (
                                <OccasionCard
                                    key={card.id}
                                    icon={card.icon}
                                    title={card.title}
                                    description={card.description}
                                    titleColor={card.titleColor}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specail_Occasions;