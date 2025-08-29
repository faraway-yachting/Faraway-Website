import { FunMoments } from "@/data/superyacht/cardData";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const FunMomentsComponent = () => {
    const funMomentsData = FunMoments["fun-moments"].items;
    
    return(
   
<section className="relative bg-white py-7 lg:py-10 overflow-hidden">
 
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair font-bold text-mustard mb-4">Celebrate & Explore in Style</h2>
      <p className="text-base md:text-xl xl:text-[22px] font-normal font-sourceSansPro max-w-5xl text-zink mx-auto text-gray-700">
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
                    <p className="font-bold md:text-lg lg:text-xl text-zink">{heading}</p>
                    <p className="text-zink text-base lg:text-lg font-sourceSansPro">{item.description[index]}</p>
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