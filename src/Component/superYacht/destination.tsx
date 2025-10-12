import Image from 'next/image';
import { styles, combine } from '@/styles';
import HeadingContent from '@/common/heading';
import { HiMiniInformationCircle } from "react-icons/hi2";
import PngIcons from "@/icons/pngIcon"
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
    description: string;
}

const BoatCard = ({ src, alt, title, description = "text-white" }: BoatCardProps) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative flex-shrink-0">
            <Image src={src} alt={alt} width={300} height={200} className="w-full h-60 lg:h-62 xl:h-66 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
                <h3 className={combine(styles.p5, "font-bold text-zink")}>{title}</h3>
            </div>
        </div>
        <div className="px-3 pb-4 flex-grow flex items-start">
            <div className="">
                <p className={combine(styles.p3, "font-medium font-inter text-zink")}>{description}</p>
            </div>
        </div>
    </div>
);
const BoatCost = () => {
    const boats = [
        { src: PngIcons.image2, alt: "Hot Chilli speedboat", title: "Koh Phi Phi", description: "Perfect for snorkeling and beach picnics" },
        { src: PngIcons.image3, alt: "Mid-tier Catamaran", title: "James Bond Island (Koh Tapu)", description: " An iconic limestone spike featured in The Man with the Golden Gun" },
        { src: PngIcons.image5, alt: "C'est La Vie luxury yacht", title: "Koh Yao Noi & Koh Yao Yai", description: " Quiet islands with lush scenery and local culture" },
        { src: PngIcons.image1, alt: "Mia Kai superyacht", title: "Coral Island (Koh Hae)", description: "Great for water activities and close to Phuket" },
        { src: PngIcons.image6, alt: "Mia Kai superyacht", title: "Racha Islands ", description: "Especially Racha Noi, popular for its mesmerizing waters and lower number of tourists, offers a more discreet escapade for relaxation and water activities." },

    ];

    return (
        <div className={combine(styles.container, "pt-7 pb-8 lg:pb-16")}>
           {/* Header Section */}
           <div className="mb-9 lg:mb-13 xl:mb-16">
                        <h2 className={combine(styles.h2, "font-extrabold text-zink text-center mb-3")}>
                        Phuket Island Hopping by Yacht
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img src="/images/rframe.png" alt="" className="max-w-md w-full" />
                        </div>
                        <h3 className={combine(styles.h3, "text-mustard font-semibold text-center mb-4")}>
                        Discover Hidden Gems in the Andaman Sea
                        </h3>
                        <p className={combine(styles.p3, "text-zink max-w-4xl mx-auto text-center leading-relaxed")}>
                        A <span className="font-semibold">Phuket island hopping yacht charter</span> is the best choice if you want to see the beauty of Thailand’s tropical paradise. You’ll have the chance to get a glimpse of the turquoise waters and the lovely creatures residing on the island. There are also limestone cliffs and hidden lagoons that are home to various coral reefs, which are worth seeing.                        </p>
                    </div>

            <div className={combine("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-5 xl:gap-6 mb-16 auto-rows-fr")}>
                {boats.map((boat, index) => <BoatCard key={index} {...boat} />)}
            </div>


            <div className="bg-white rounded-6xl shadow-xl p-6 flex items-start gap-4 max-w-7xl">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiMiniInformationCircle className='text-white text-3xl' />
                </div>

                {/* Content */}
                <div className="flex-1">
                
                    <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                    If you are looking for a <span className='font-semibold'>full-day yacht rental </span> or an extended multi-day charter, we’ll help you create an itinerary that will give you the ultimate adventure, relaxation, and picture-perfect views.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BoatCost;