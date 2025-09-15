import Image from "next/image";
import { LuSailboat } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { attractionsMap } from "@/data/superyacht/cardData";
import { combine, styles } from "@/styles";
import HeadingContent from "@/common/heading";

interface LuxuryYachtProps {
    id: string;
}

const LuxuryYacht = ({ id }: LuxuryYachtProps) => {
    const attractionData = attractionsMap[id];

    if (!attractionData) {
        return <div>No data found for {id}</div>;
    }

    return (
        <div className={styles.my3}>
            <div className={combine(styles.px1, styles.containerLarge)}>
                <div className={styles.my2}>
                    <HeadingContent
                        heading="Unforgettable Luxury Yacht Experiences in Phuket"
                    description= "Discover world-class yacht charters designed for comfort, style, and sophistication. From personalized itineraries to floating five-star resorts, we bring you the finest way to explore the Andaman Sea."
               />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {attractionData.items.map((item, index) => (
                        <div key={index} className={styles.mb2}>
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                                {/* Image Column */}
                                <div className={`flex justify-center my-5 md:my-0 ${index % 2 === 1 ? 'md:order-2 md:justify-end' : 'md:order-1 md:justify-start'}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className="w-[390px] md:w-[320px] lg:w-[420px] xl:w-[470px] h-auto border-4 border-[#D6AB62] rounded-tl-3xl rounded-br-3xl "
                                    />
                                </div>

                                {/* Content Column */}
                                <div className={`space-y-3 lg:space-y-4 xl:space-y-5 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                    <div className="relative mt-10 md:mt-0">
                                        <span className="text-[62px] md:text-[70px] lg:text-[95px] xl:text-[118px] pt-14 md:pt-12 lg:pt-8 xl:pt-0 font-semibold font-inter text-gray-100 absolute -top-20 left-0">
                                            {item.id}
                                        </span>
                                        <div className="flex items-center ms-11">
                                            <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                                            <p className="text-mustard font-semibold text-sm lg:tex[15px] xl:text-xl font-inter uppercase relative z-10 ms-3">
                                                {item.label}
                                            </p>
                                        </div>
                                        <h3 className={combine(styles.h2, "text-zink relative z-10 xl:ms-11")}>
                                            {item.title}
                                        </h3>
                                        <p className={combine(styles.p4, "text-zink relative z-10")}>
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 mt-4 flex-col">
                                        <div className="flex">
                                            <span className="w-8 h-8 bg-mustard rounded-full flex items-center justify-center me-1"><LuSailboat className="text-white " size={20} /></span>
                                            <p className={combine("font-semibold text-zink",styles.h5)}>{item.heading}</p>
                                        </div>
                                        <ul className="list-disc pl-4 text-base text-zink font-medium font-sourceSansPro space-y-1">
                                            {item.highlights.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-start mt-3">
                                        <IoWarningOutline className="text-zink" size={24} />
                                        <p className={combine("text-base text-zink font-inter font-medium")}><span className="font-bold text-mustard text-base font-inter me-2 ">Tip:</span>{item.tip}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LuxuryYacht;