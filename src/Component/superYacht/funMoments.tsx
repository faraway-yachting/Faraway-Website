import { FunMoments } from "@/data/superyacht/cardData";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { styles, combine } from "@/styles";

const FunMomentsComponent = () => {
    const funMomentsData = FunMoments["fun-moments"].items;
    
    return(
   
<section className={combine("relative bg-white overflow-hidden", styles.py4)}>
 
  <div className={combine("relative z-10", styles.container)}>
    <div className={combine("text-center", styles.mb2)}>
      <h2 className={combine(styles.h2, "font-bold text-mustard mb-4")}>Celebrate & Explore in Style</h2>
      <p className={combine(styles.p1, "font-normal font-sourceSansPro max-w-5xl text-zink mx-auto text-gray-700")}>
      From unforgettable yacht weddings and private parties to tailor-made island-hopping itineraries, our luxury charters in Phuket deliver personalized experiences on the open sea.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8 lg:gap-11 xl:gap-14 items-center">
      {funMomentsData.map((item, i) => (
        <div key={item.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
          {/* Image Column */}
          <div className={`flex justify-center my-5 md:my-0 ${i % 2 === 1 ? 'md:order-2 md:justify-end' : 'md:order-1 md:justify-start'}`}>
            <div className="w-full md:w-full">
              <Image src={item.image} alt={item.heading[0]} width={590} height={590} className="w-full h-[350px] md:h-auto object-cover" />
            </div>
          </div>
          {/* Content Column */}
          <div className={`${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
            <ul className="space-y-4 lg:space-y-6">
              {item.heading.map((heading, index) => (
                <li key={index} className="flex items-start gap-3 max-w-lg">
                  <FaCheckCircle className="text-[#F9B233] mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                  <div>
                    <p className={combine("font-bold md:text-lg lg:text-xl text-zink")}>{heading}</p>
                    <p className={combine("text-zink",styles.p2)}>{item.description[index]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    )
}
export default FunMomentsComponent