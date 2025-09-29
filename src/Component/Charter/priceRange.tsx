import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import { FaCheckCircle } from "react-icons/fa";
import { styles, combine } from "@/styles";

const BroadboatContent = () => (
    <section className={combine("relative bg-white overflow-hidden mb-9")}>
        <div className={combine("relative z-10", styles.px3, styles.container)}>

            <div className={combine("items-center", styles.gap1, styles.grid2Col)}>
                <div>
              
            <h3 className={combine("text-zink font-semibold mb-3",styles.h3)}>Typical Price Ranges</h3>
    
                    <ul className="space-y-4 lg:space-y-6">
                        <li className="flex items-start gap-3 max-w-lg">
                            <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                            <div>
                                <p className={combine("font-bold text-zink pb-1", styles.p3)}>Day rentals</p>
                                <p className={combine("text-zink font-sourceSansPro", styles.p2)}> From around 29,900 THB (≈ USD 1,000) for smaller catamarans.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 max-w-lg">
                            <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                            <div>
                                <p className={combine("font-bold text-zink pb-1", styles.p3)}>Overnight charters</p>
                                <p className={combine("text-zink font-sourceSansPro", styles.p2)}>From €1,000 per night including accommodation, crew, and meals.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 max-w-lg">
                            <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                            <div>
                                <p className={combine("font-bold text-zink pb-1", styles.p3)}>Luxury superyachts</p>
                                <p className={combine("text-zink font-sourceSansPro", styles.p2)}>From € 10,000 per day for full VIP experiences.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <Image src={PngIcons.privateyact} alt="Price Range" width={590} height={590} className="w-full h-auto object-cover" />
                </div>
            </div>
            <p className="text-zink text-lg font-semibold font-inter max-w-5xl mb-2">Whether you’re planning a private boat rental in Phuket for just a day or a week-long luxury yacht charter, we offer flexible packages to match your budget and style. By understanding these factors, you can plan a Phuket yacht rental that perfectly balances your budget and expectations. </p>
        </div>
    </section>
);

export default BroadboatContent;
