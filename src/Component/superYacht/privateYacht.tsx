
import HeadingContent from "@/common/heading";
import { WhyData } from "@/data/superyacht/cardData";
import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles";

const PrivateYacht = () => {
    return (
        <div className={combine("relative bg-white", styles.mb2)}>
            <div className={combine(
                "absolute top-0 left-0 z-10", styles.w3
            )}>
                <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
            </div>
            <div className={combine(
                "relative bg-gray-100 py-12", styles.px5
            )}>
                <div className="absolute bottom-0 right-0 z-0">
                    <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
                </div>
                <div className={combine("relative py-[50px]", styles.container)}>
                    <HeadingContent
                        heading="Private Yacht in Phuket"
                        description="Discover Thailand's islands at your pace with a private yacht charter—bespoke experiences tailored to your desires and style." />
                    <div className={styles.containerLarge}>
                        <div className={combine(styles.grid3Col, "gap-4 mt-10")}>
                            {WhyData.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-center space-y-3 px-2 mt-5 lg:mt-0"
                                >
                                    <div className={styles.flexCenter}>
                                        <div className="bg-zink text-white w-15 h-15 flex items-center justify-center rounded-full">
                                            <item.icon size={32} />
                                        </div>
                                    </div>
                                    <h3 className={combine(styles.p3, "font-semibold text-mustard")}>
                                        {item.label}
                                    </h3>
                                    <p className={combine(styles.p2, "text-gray-600", "text-center")}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PrivateYacht