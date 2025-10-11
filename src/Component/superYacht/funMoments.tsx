import { FunMoments } from "@/data/superyacht/cardData";
import Image from "next/image";
import { HiMiniInformationCircle } from "react-icons/hi2";

import { FaCheckCircle } from "react-icons/fa";
import { styles, combine } from "@/styles";

const FunMomentsComponent = () => {
  const funMomentsData = FunMoments["fun-moments"].items;

  return (
    <section className={combine("relative bg-white overflow-hidden", styles.py4)}>
      <div className={combine("relative z-10", styles.container)}>
        <div className={combine("text-center", styles.mb2)}>
          <h2 className={combine(styles.h2, "font-semibold text-zink mb-4")}>Custom Super Yacht Charter in Phuket Itineraries</h2>
          <img src="/images/rframe.png" alt="" className={combine(" md:max-w-4xl lg:max-w-3xl w-full my-3 mx-auto")} />
          <h3 className={combine(styles.h3, "text-mustard font-semibold text-center mb-4")}>
            Your Dream Route, Your Way
          </h3>
          <p className={combine(styles.p1, "font-normal max-w-5xl font-inter text-zink mx-auto text-gray-700")}>
            No two guests are the same, and neither are our charters. With our <span className="font-semibold">custom super yacht charters in Phuket</span>, you take charge of where to go, how long to stay, and the activities you’ll want on your trip. We will ensure a fully personalized route that keeps you relaxed, excited, and safe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8 lg:gap-11 xl:gap-9 items-center">
          {funMomentsData.map((item, i) => (
            <div key={item.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              {/* Image Column */}
              <div className={`flex justify-center my-5 md:my-0 ${i % 2 === 1 ? 'md:order-2 md:justify-end' : 'md:order-1 md:justify-start'}`}>
                <div className="">
                  <Image
                    src={item.image}
                    alt={item.heading || ''}
                    width={500}
                    height={390}
                    className="w-full xl:h-[540px] object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Content Column */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <ul className="space-y-4 lg:space-y-6">
                  <h3 className={combine("font-semibold text-zink", styles.p5)}>{item.heading}</h3>
                  {item.description.map((description, index) => (
                    <li key={index} className="flex items-start gap-3 max-w-lg">
                      <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                      <div>
                        <p className={combine("text-zink", styles.p2)}>{item.description[index]}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-6xl shadow-xl p-6 flex items-start gap-4 max-w-7xl">
          {/* Icon */}
          <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
            <HiMiniInformationCircle className='text-white text-3xl' />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
              Perfect if you are going for a week-long sailing or a short itinerary, this charter gives you the capacity to let you maximize your journey to its full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FunMomentsComponent