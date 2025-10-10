import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { styles, combine } from "@/styles";
import { rentalCostData } from "@/data/overnight-boat/itinerariesdata";
import HeadingContent from "@/common/heading";

const Itineraries = () => {
    const { title, features } = rentalCostData;

    return (
        <section className={combine("relative bg-white overflow-hidden my-5 lg:my-8", styles.pb1, "pt-7 md:pt-9")}>
            <div className={combine("relative z-10 px-4", styles.container)}>
                <div className={combine("text-center", styles.mb2)}>
                <HeadingContent
                heading="Top Itineraries for an Overnight Boat Charter Phuket Experience"
                />
                </div>
                <div className={combine("items-center", styles.gap1, styles.grid2Col)}>
                    <div>
                        <ul className="space-y-4 lg:space-y-6">
                            {features.map((v, i) => (
                                <li key={i} className="flex items-start gap-3 max-w-lg">
                                    <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                                    <div>
                                        <p className={combine("font-bold text-zink font-playfair mb-2", styles.p3)} dangerouslySetInnerHTML={{ __html: v.title || '' }}></p>
                                        <p className={combine("text-zink font-sourceSansPro", styles.p2)} dangerouslySetInnerHTML={{ __html: v.description || '' }}></p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-end">
                        <img src="/images/overnight1.png" alt="Overnight boat charter in Phuket" width={590} height={590} className="w-full h-[360px] md:h-[485px] lg:h-[520px] xl:h-[560px] "/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Itineraries;