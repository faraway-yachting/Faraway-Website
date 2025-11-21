import HeadingContent from "@/common/heading"
import { LuHandHeart } from "react-icons/lu";
import { combine ,styles } from "@/styles";
const TaxiPrices = () =>{
    return(
        <div className="my-10">
            <HeadingContent 
            heading="Taxi Prices If Booked With Us"
            />
            <img src="" alt="" />
            <div className="bg-white rounded-6xl shadow-xl p-6 flex items-center gap-4 max-w-7xl mx-auto">
                        {/* Icon */}
                        <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                            <LuHandHeart className='text-white text-3xl' />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                            If you book through us and there’s any unexpected delay on their end, we’ll make sure to help make up for lost time. You need to book at least one day in advance wit us so we can arrange the schedule for the taxi the next day.                            </p>
                        </div>
                    </div>

        </div>
    )
}                                            
export default TaxiPrices