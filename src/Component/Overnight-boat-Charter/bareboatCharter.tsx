import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles/style";
import Button from "@/styles/Button";

const BareboatCharter = () => {
    return (
        <section className="py-16 lg:py-20 xl:py-3 bg-white">
            <div className={combine(styles.container, "px-4")}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                        <h3 className={combine(styles.h3, "text-zink font-playfair font-semibold leading-tight")}>
                            Bareboat Charters
                        </h3>
                        <p className={combine(styles.p1, "text-zink font-inter font-normal leading-relaxed max-w-lg")}>
                            For fully licensed sailors, bareboat charters provide full independence for your overnight yacht rental Phuket with nothing included apart of the yacht itself.
                        </p>
                        <div className="pt-2">
                            <a href="/bareboat-charter-thailand">
                                <p className={combine(styles.p1, "text-zink font-inter font-semibold underline leading-relaxed cursor-pointer hover:text-[#d6ab62] not-first:max-w-lg")}>
                                    Find out more about bareboat charters!
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image Collage */}
                    <div>
                        <img
                            src={PngIcons.nightCharterimg2}
                            alt="Beach scene with yacht rental items"
                            className="w-full h-[380px] md:h-[490px] lg:h-[610px] rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BareboatCharter;