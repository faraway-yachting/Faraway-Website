import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import { FaCheckCircle } from "react-icons/fa";
import { privateYachtValues } from "@/data/destination/broadboatData";
import { styles, combine } from "@/styles";

const PrivateYacht = () => (
  <section className={combine("relative bg-white overflow-hidden", styles.py4)}>
  
    <div className={combine("relative z-10 max-w-7xl mx-auto", styles.px3,styles.container)}>
      <div className={combine("text-center", styles.mb2)}>
        <h2 className={combine("text-mustard mb-4", styles.h2)}>Private Yacht in Phuket</h2>
        <p className={combine("font-normal font-sourceSansPro max-w-5xl text-zink mx-auto text-gray-700", styles.p1)}>
          At Faraway Yachting, we believe your holiday should be more than a getaway—it should be an unforgettable escape.
        </p>
      </div>
      <div className={combine("grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-11 xl:gap-14 items-center", styles.gap1)}>
        <div className="w-full">
          <Image src={PngIcons.privateyact} alt="Mission" width={590} height={590} className="w-full h-[350px] md:h-auto object-cover" />
        </div>
        <div>
          <ul className="space-y-4 lg:space-y-6">
            {privateYachtValues.map((v, i) => (
              <li key={i} className="flex items-start gap-3 max-w-lg">
                <FaCheckCircle className="text-[#F9B233] mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                <div>
                  <p className={combine("font-bold text-zink", styles.p3)}>{v.title}</p>
                  <p className={combine("text-zink", styles.p2)}>{v.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PrivateYacht;
