 import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import { FaCheckCircle } from "react-icons/fa";
import { privateYachtValues } from "@/data/destination/broadboatData";

const PrivateYacht = () => (
  <section className="relative bg-white py-7 lg:py-10 overflow-hidden">
  
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair font-bold text-mustard mb-4">Private Yacht in Phuket</h2>
        <p className="text-base md:text-xl xl:text-[22px] font-normal font-sourceSanspro max-w-5xl text-zink mx-auto text-gray-700">
          At Faraway Yachting, we believe your holiday should be more than a getaway—it should be an unforgettable escape.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-11 xl:gap-14 items-center">
        <div className="w-full">
          <Image src={PngIcons.privateyact} alt="Mission" width={590} height={590} className="w-full h-[350px] md:h-auto object-cover" />
        </div>
        <div>
          <ul className="space-y-4 lg:space-y-6">
            {privateYachtValues.map((v, i) => (
              <li key={i} className="flex items-start gap-3 max-w-lg">
                <FaCheckCircle className="text-[#F9B233] mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                <div>
                  <p className="font-bold md:text-lg lg:text-xl text-zink">{v.title}</p>
                  <p className="text-zink text-base lg:text-lg">{v.description}</p>
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
