"use client";
import YachtsDestinationData, { YachtDestinationItem } from "../../data/superyacht/cardData";
import Image from "next/image";
import Link from "next/link";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { styles, combine, Button } from "../../styles";

// Function to truncate description text
const truncateDescription = (text: string, maxLength: number = 112) => {
    if (text.length <= maxLength) return text;

    return text.substring(0, maxLength).trim() + "...";
};

const YachtDestinationCards = () => {
    return (
        <div className="bg-white mb-9">
            <div className={styles.container}>
                <div className="text-center mb-12 md:mb-10">
                    <h2 className={combine(styles.h2, "font-extrabold text-zink mb-4")}>
                        Phuket Island Hopping by Yacht
                    </h2>
                    <img
                        src="/images/rframe.png"
                        alt=""
                        className="md:max-w-4xl lg:max-w-3xl w-full my-3 mx-auto"
                    />
                    <h3 className={combine(styles.h3, "text-mustard font-semibold text-center mb-4")}>
                        Discover Hidden Gems in the Andaman Sea
                    </h3>
                    <p className={combine(styles.p2, "font-normal max-w-5xl font-inter text-zink mx-auto leading-relaxed")}>
                        A Phuket island hopping yacht charter is the best choice if you want to see the beauty of Thailand’s tropical paradise. You’ll have the chance to get a glimpse of the turquoise waters and the lovely creatures residing on the island. There are also limestone cliffs and hidden lagoons that are home to various coral reefs, which are worth seeing.                    </p>
                </div>
                <p className={combine("text-zink font-semibold font-inter",styles.p3)}>The top island-hopping destinations include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8">
                    {YachtsDestinationData.map((item: YachtDestinationItem, index: number) => (
                        <div
                            key={index}
                            className={combine(
                                "group overflow-hidden transition-transform duration-300 border border-gray-300 rounded-tl-3xl rounded-b-lg hover:shadow-2xl hover:scale-[1.03] bg-white",
                                styles.mt1
                            )}
                        >
                            {/* IMAGE */}
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt="card"
                                    width={400}
                                    height={300}
                                    className={combine(
                                        "object-cover w-full rounded-tl-3xl rounded-br-3xl",
                                        "h-[240px] sm:h-[230px] md:h-[245px] lg:h-[250px] xl:h-[280px]"
                                    )}
                                />
                                <div className="absolute inset-0 bg-[#012A50]/20 z-0" />
                                <div className="absolute bottom-0 bg-opacity-40 w-full text-white px-4 py-2 z-10">
                                    <h3 className={combine("text-foreground font-extrabold transition-all duration-300", styles.h3)}>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                            {/* TEXT & BUTTON */}
                            <div className={combine("px-4 py-4 flex flex-col justify-between", "min-h-[150px] md:min-h-[180px] lg:min-h-[200px]")}>
                                <p className={combine("text-black", styles.p2)}>{truncateDescription(item.description, 112)}</p>
                                <div className={combine("flex justify-between items-center gap-4", styles.mt1)}>
                                    <Link href={`/${item.id}`}>
                                        <p className={combine("text-zink font-extrabold underline cursor-pointer hover:text-[#d6ab62]", styles.h6)}>
                                            Read More
                                        </p>
                                    </Link>
                                    <Button variant="outline" href="/contact">
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white rounded-6xl shadow-xl p-6 flex items-center gap-4 mt-5 max-w-7xl">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                        <HiMiniInformationCircle className='text-white text-3xl' />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                        If you are looking for a <span className="font-semibold">full-day yacht rental</span> or an extended multi-day charter, we’ll help you create an itinerary that will give you the ultimate adventure, relaxation, and picture-perfect views.                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YachtDestinationCards;
