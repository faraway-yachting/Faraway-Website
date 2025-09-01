import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import { FaCheckCircle } from "react-icons/fa";
import { broadboatValues } from "@/data/destination/broadboatData";
import { styles, combine } from "@/styles";

const values = broadboatValues;
const BroadBoat = () => (
    <section className={combine("relative bg-white overflow-hidden", styles.pb1, "pt-7 md:pt-9")}>

        <div className={combine("relative z-10", styles.px3,styles.container)}>
            <div className={combine("text-center", styles.mb2)}>
                <h2 className={combine("text-mustard mb-4", styles.h2)}>Bareboat Charter Phuket</h2>
                <p className={combine("font-sourceSansPro max-w-5xl text-zink mx-auto text-gray-700", styles.p1)}>
                    At Faraway Yachting, we believe your holiday should be more than a getaway—it should be an unforgettable escape.
                </p>
            </div>
            <div className={combine("items-center", styles.gap1, styles.grid2Col)}>

                <div>
                    <ul className="space-y-4 lg:space-y-6">
                        {values.map((v, i) => (
                            <li key={i} className="flex items-start gap-3 max-w-lg">
                                <FaCheckCircle className="text-[#F9B233] mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                                <div>
                                    <p className={combine("font-bold text-zink", styles.p3)}>{v.title}</p>
                                    <p className={combine("text-zink font-sourceSansPro", styles.p2)}>{v.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    <Image src={PngIcons.bareboat} alt="Mission" width={590} height={590} className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    </section>
);
export default BroadBoat;
