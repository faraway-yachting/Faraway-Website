import HeadingContent from "@/common/heading";
import { styles, combine } from "@/styles";
const OurCrew = () => {
    return (
        <div>
            <div className={combine(styles.containerLarge, "my-12 px-4")}>
                <HeadingContent
                    heading="Meet Our Crew"
                    description="Captain Sunee brings unmatched local knowledge, while Milk — one of Phuket’s best chefs — ensures every meal is a highlight. Together with our trained deckhand, they deliver safety, service, and unforgettable hospitality."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    <div className="relative">
                        <img
                            src="/images/Sunee.png"
                            alt="Captain Sunee"
                            className="w-full h-[320px] md:h-[370px] lg:h-[400px] xl:h-[450px] object-cover rounded-lg"
                        />
                        <div className={combine("absolute bottom-3 left-3 bg-zink bg-opacity-70 text-white px-8 py-1 rounded font-semibold",styles.h5)}>
                            Sunee
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/images/EM.png"
                            alt="Deckhand"
                            className="w-full h-[320px] md:h-[370px] lg:h-[400px] xl:h-[450px] object-cover rounded-lg"
                        />
                        <div className={combine("absolute bottom-3 left-3 bg-zink bg-opacity-70 text-white px-8 py-1 rounded text-sm font-semibold",styles.h5)}>
                            EM
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/images/Milk.png"
                            alt="Chef Milk"
                            className="w-full h-[320px] md:h-[370px] lg:h-[400px] xl:h-[450px] object-cover object-top rounded-lg"
                        />
                        <div className={combine("absolute bottom-3 left-3 bg-zink bg-opacity-70 text-white px-8 py-1 rounded text-sm font-semibold",styles.h5)}>
                            Milk
                        </div>
                    </div>
                </div>
                <div className="max-w-[78.2rem] w-full bg-[#E6ECED33] mt-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-6 py-0 xl:py-6 border-l-[7px] border-l-[#034250]">
                    <div className="flex-1 text-left py-3">
                        <p className={combine("text-zink font-semibold mb-2", styles.p3)}>
                            <span className="font-semibold text-mustard font-playfair">Info:</span> Commitment to quality
                        </p>
                        <p className={combine("text-zink font-semibold max-w-3xl", styles.p4)}>
                            We don’t just sell trips — we craft journeys. Our repeat guests, glowing reviews, and refined itineraries show our dedication to creating the best <span className="font-semibold">Phuket cabin charter</span> available.
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] hidden md:block ">
                        <img src="/images/slideText.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurCrew;