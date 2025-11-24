import { styles, combine } from "@/styles";
import HeadingContent from "@/common/heading";
import Image from "next/image";
import { yachtManagementData } from "@/data/managementPhuket/managementPhuketData";

const YachtManagement = () => {
    return (
        <div className={combine(styles.container, "py-6 lg:py-8 mt-0 xl:mt-8")}>
            {/* Main Title Section */}
            <div className={combine("text-center", styles.mb2)}>
                <HeadingContent
                    heading='What Our Yacht Management Covers'
                />
            </div>

            {/* Yacht Management Sections */}
            {yachtManagementData.map((yacht, index) => (
                <div key={yacht.id} className="grid grid-cols-12 gap-6 items-center mb-7 md:mb-9 lg:mb-12 xl:mb-14 shadow-xl rounded-tl-none md:rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-200">
                    {/* Text Content */}
                    <div className="col-span-12 md:col-span-8 space-y-4 ps-3 md:ps-5 lg:ps-7">
                        <div className={combine("flex items-center ", styles.mb1)}>
                            <h3 className={combine(styles.h3, "text-zink")}>
                                {yacht.category}
                            </h3>
                        </div>

                        <p className={combine(styles.p3, "text-zink leading-relaxed max-w-xl")}>
                            {yacht.description}
                        </p>
                    </div>

                    {/* Image */}
                    <div className="col-span-12 md:col-span-4 relative">
                        <div className={combine("relative w-full h-[250px] md:h-[270px] lg:h-[320px] xl:h-[350px]", "overflow-hidden")}>
                            <Image
                                src={yacht.imageSrc}
                                alt={yacht.imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default YachtManagement;