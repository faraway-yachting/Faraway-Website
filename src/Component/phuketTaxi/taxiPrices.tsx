import HeadingContent from "@/common/heading"
import { LuHandHeart } from "react-icons/lu";
import { combine, styles } from "@/styles";
import Image from "next/image";
import { taxiPrices, mapImage, additionalInfo } from "@/data/phukettaxi";

const TaxiPrices = () => {
    return (
        <div className="my-10">
            <h3 className={combine(styles.h2, "font-extrabold text-zink text-center text-zink capitalize")} style={{ boxShadow: "#00000040" }}>
                Taxi Prices If Booked With Us
            </h3>
            <img src="/images/rframe.png" alt="" className={combine(" md:max-w-4xl lg:max-w-3xl w-full my-4 mx-auto")} />
            {/* Taxi Price List matching privacy policy style */}
            <div className={combine(styles.container, "mb-10")}>
                <div>
                    <div className="space-y-4">
                        {taxiPrices.map(({ price, locations }, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-mustard rounded-full mt-2 flex-shrink-0" />
                                <div>
                                    <span className={combine("font-semibold text-mustard", styles.p3)}>
                                        {price.toLocaleString()} THB:
                                    </span>
                                    <span className={combine("text-zink ml-2", styles.p3)}>
                                        {locations.join(" / ")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="max-w-7xl mx-auto px-4">
                <div className="relative w-full h-[240px] md:h-[280px] lg:h-[580px] overflow-hidden rounded-xl">
                    <Image
                        src={mapImage.src}
                        alt={mapImage.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            </div> */}
            <div className="px-4 xl:px-0">
                <div className="bg-white rounded-6xl shadow-xl p-4 md:p-6 flex items-center gap-4 max-w-7xl mx-auto mb-10 mt-8 ">

                    {/* Icon */}
                    <div className="hidden md:flex w-14 h-14 bg-[#D6ab62] rounded-xl items-center justify-center flex-shrink-0">
                        <LuHandHeart className='text-white text-3xl' />
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                        <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                            {additionalInfo.bookingAdvice}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaxiPrices