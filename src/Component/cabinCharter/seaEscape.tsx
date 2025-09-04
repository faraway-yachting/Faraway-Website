import PngIcons from "@/icons/pngIcon";
import { LuTreePalm, LuUtensilsCrossed, LuOrigami } from "react-icons/lu";
import { TbWheel } from "react-icons/tb";
import { seaEscapeFeatures } from "@/data/cabincharter/momentsData";
import { styles, combine } from "@/styles/style";

// Icon mapping for dynamic icon rendering
const iconMap = {
    LuTreePalm,
    TbWheel,
    LuUtensilsCrossed,
    LuOrigami,
};

const SeaEscape = () => {
    return (
        <div className="relative xl:px-4">
            <div className="absolute bg-[#FCFCFC] top-0 left-0 z-10 w-[100px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[250px]">
                <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
            </div>
            <section className="relative py-6 lg:py-8 px-4 xl:px-8 bg-[#FCFCFC]">
                <div className="absolute bottom-0 right-0 z-0 ">
                    <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
                </div>

                <div className="relative z-10 text-center max-w-5xl md:max-w-3xl mx-auto mb-6 md:mb-6 lg:mb-8 xl:mb-10">
                    <h2 className={combine(styles.h2, styles.mb1, "max-w-5xl md:max-w-3xl text-center mx-auto text-zink font-semibold")}>
                        What's Included – Your All-Inclusive Sea Escape
                    </h2>
                    <p className={combine(styles.p2, styles.flexCenter, "text-zink md:max-w-xl lg:max-w-2xl mx-auto xl:max-w-3xl text-center")}>
                        Step aboard Amadeus for 6 days of island-hopping bliss—gourmet meals, snorkeling, kayaking, and epic views, all expertly handled by Far Away Charters
                    </p>
                </div>

                <div className={combine("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-5 xl:gap-10 py-3 mb-7", styles.container)}>
                    {seaEscapeFeatures.map(({ icon, title, desc }) => {
                        const IconComponent = iconMap[icon as keyof typeof iconMap];
                        return (
                            <div key={title} className="text-center space-y-3 px-2 mt-5 lg:mt-0">
                                <div className="flex justify-center">
                                    <div className="bg-zink text-white w-15 h-15 flex items-center justify-center rounded-full">
                                        <IconComponent size={32} />
                                    </div>
                                </div>
                                <h3 className={combine(styles.p1, "font-bold text-mustard")}>{title}</h3>
                                <p className={combine(styles.p4, "text-gray-600 text-center")}>{desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default SeaEscape;
