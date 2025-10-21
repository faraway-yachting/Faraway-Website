import Image from 'next/image';
import { styles, combine } from '@/styles';

// Card data
const occasionCards = [
    {
        id: 1,
        icon: "/images/nicon1.png",
        title: "700+ verified five-star reviews",
        description: "Prove consistent service excellence.",
        titleColor: "text-mustard"
    },
    {
        id: 2,
        icon: "/images/nicon2.png",
        title: "Local office in Chalong",
        description: "Always reachable, no remote management headaches.",
        titleColor: "text-zink"
    },
    {
        id: 3,
        icon: "/images/nicon3.png",
        title: "Young, motivated management team",
        description: "Trained to international standards.",
        titleColor: "text-zink"
    },
    {
        id: 4,
        icon: "/images/nicon4.png",
        title: "Scalable Model",
        description: "Manage one yacht or build a fleet syndicate—our structure adapts.",
        titleColor: "text-mustard"
    }
];

// Reusable card component
const FarawayDifference= ({ icon, title, description, titleColor }: {
    icon: string;
    title: string;
    description: string;
    titleColor: string;
}) => (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 xl:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="xl:flex xl:items-center gap-3 sm:gap-4 md:gap-5">
            <img src={icon} alt={title} className="w-10 h-10 sm:w-12 sm:h-12 mb-3 xl:mb-0 flex-shrink-0 hidden lg:block" />
            <h3 className={combine(`${titleColor} font-semibold text-[17px] md:text-[16px] lg:text-[19px] xl:text-[20px] leading-tight`)}>
                {title}
            </h3>
        </div>
        <p 
            className={combine("text-zink leading-relaxed mt-2 sm:mt-3 font-inter text-sm md:text[13px] lg:text-sm xl:text-base", styles.p2,)}
            dangerouslySetInnerHTML={{ __html: description }}
        />
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

const Farawaydifference= () => {
    return (
        <section className={combine("py-4 sm:py-12 md:py-6 lg:py-8 xl:py-24 bg-white", styles.px1)}>
            <div className={styles.containerLarge}>
                <div className={combine("grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 lg:gap-8 xl:gap-16")}>
                    {/* Left Column - Images */}
                    <div className="relative flex items-center ">
                        <div className="relative  w-full h-[350px] sm:h-[400px] md:h-[470px] lg:h-[550px] xl:h-[600px] mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                           <Image
                                src="/images/myacht9.png"
                                alt="Special Occasions Yacht Charter"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                           />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                        <div className="text-center lg:text-left">
                            <h3 className={combine('text-zink font-semibold mb-3 sm:mb-4', styles.h3)}>
                                Special Occasions with Your Overnight Boat Charter Phuket
                            </h3>
                            <p className={combine('text-zink font-inter mt-2 sm:mt-3', styles.p3)}>
                                With notice, we can arrange decorations, themed dinners, or onboard entertainment to personalize your <span className="font-semibold">overnight boat hire Phuket</span>.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-6">
                            {occasionCards.map((card) => (
                                <FarawayDifference
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

export default Farawaydifference;