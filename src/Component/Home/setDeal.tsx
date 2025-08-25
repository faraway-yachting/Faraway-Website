import HeadingContent from "@/common/heading";
import { WhyData } from "@/data/why";
import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles/common";

const Why = () => {
    const { mb16, w3, py3, px5, h5,container, containerLarge, grid3Col, mt10, flexCenter, h3, p2 } = styles;

    return (
        <div className={combine("relative bg-white ", mb16)}>
            <div className={combine(
                "absolute top-0 left-0 z-10 ", w3,
              
            )}>
                <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
            </div>
            <div className={combine(
                "relative bg-gray-100", py3, px5,
            )}>
                <div className="absolute bottom-0 right-0 z-0">
                    <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
                </div>
                <div className={combine("relative py-[50px]", container)}>
                    <HeadingContent
                        heading="Why Book With Us"
                        description="Enjoy AI-powered yacht recommendations, real-time availability, and secure bookings for a seamless luxury experience." />
                    <div className={containerLarge}>
                        <div className={combine(grid3Col, mt10)}>
                            {WhyData.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-center space-y-3 px-2 mt-5 lg:mt-0"
                                >
                                    <div className={flexCenter}>
                                        <div className="bg-zink text-white w-15 h-15 flex items-center justify-center rounded-full">
                                            <item.icon size={32} />
                                        </div>
                                    </div>
                                    <h3 className={combine(h5, "font-semiboldtext-mustard")}>
                                        {item.label}
                                    </h3>
                                    <p className={combine(p2, "text-gray-600", "text-center")}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;
