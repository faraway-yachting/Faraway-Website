import HeadingContent from "@/common/heading";
import { WhyData } from "@/data/home/why";
import PngIcons from "@/icons/pngIcon";
import { styles, combine } from "@/styles";
import Link from "next/link";

const BookwithUs = () => {
    const { w3, px5, h5, container, containerLarge, flexCenter, p2 } = styles;

    return (
        <div className={combine("relative bg-white mb-16")}>
            <div className={combine(
                "absolute top-0 left-0 z-10 ", w3,

            )}>
                <img src={PngIcons.line3} alt="" className="w-auto h-auto" />
            </div>
            <div className={combine(
                "relative bg-gray-100 py-12", px5,
            )}>
                <div className="absolute bottom-0 right-0 z-0">
                    <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
                </div>
                <div className={combine("relative py-[50px]", container)}>
                    <HeadingContent
                        heading="Why to book a yacht with us in Phuket?" />
                    <div className={containerLarge}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 md:gap-x-7 lg:gap-x-8 xl:gap-x-10 mt-10">
                            {WhyData.map((item) => (
                                <div
                                    key={item.id}
                                    className="text-center space-y-3 px-2 mt-5 lg:mt-0 min-h-[200px]"
                                >
                                    <div className={flexCenter}>
                                        <div className="bg-zink text-white w-15 h-15 flex items-center justify-center rounded-full">
                                            <item.icon size={32} />
                                        </div>
                                    </div>
                                    <h3 className={combine(h5, "font-semibold text-mustard")}>
                                        {item.label}
                                    </h3>
                                    <p className={combine(p2, "text-gray-600", "text-center")}>
                                        {item.description}
                                    </p>
                                    {item.link && item.href && (
                                        <div className="flex justify-center gap-4 mt-3">
                                            {item.link.map((linkText, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href![index]}
                                                    target="_blank"
                                                    className="text-mustard text-base font-semibold font-playfair underline transition-all duration-200 hover:text-[#012A50]"
                                                >
                                                    {linkText}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className={combine("text-center text-zink font-medium font-inter", styles.p1)}>With Faraway Yachting, your <strong>Phuket yacht charter</strong> is seamless, safe, and unforgettable.</p>
            </div>
        </div>
    );
};

export default BookwithUs;
