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

            {/* Taxi Price Cards Grid */}
            <div className={combine(styles.container, "mb-10")}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                    {taxiPrices.map((taxi, index) => (
                        <div
                            key={index}
                            className="bg-white h-[253px] md:h-[270px] lg:h-[285px] xl:h-[310px] p-2 border border-2 border-[#EBEBEB] rounded-tl-2xl rounded-br-2xl hover:border-[#7F93A6] overflow-hidden transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-[120px] md:h-[145px] lg:h-[150px] xl:h-[190px] overflow-hidden rounded-tl-xl rounded-br-xl">
                                <Image
                                    src={taxi.image}
                                    alt={taxi.locations.join(" / ")}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-2">
                            
                                    

                                {/* Locations - Display with " / " separator */}
                                <div>
                                    <p className={combine("text-zink font-playfair text-[16px] md:text-[17px] lg:text-[19px] leading-tight pt-1 md:pt-2")}>
                                        {taxi.locations.join(" / ")}{" "}
                                        <span className={combine("text-[16px] md:text-[17px] lg:text-[19px] font-playfair text-zink font-bold ps-1")}>
                                            ({taxi.price.toLocaleString()} THB)
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative w-full h-[240px] md:h-[280px] lg:h-[580px] overflow-hidden rounded-xl">
                    <Image
                        src={mapImage.src}
                        alt={mapImage.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
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