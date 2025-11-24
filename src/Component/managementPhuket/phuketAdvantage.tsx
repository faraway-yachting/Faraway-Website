import { styles, combine } from "@/styles";
import HeadingContent from "@/common/heading";
import PngIcons from "@/icons/pngIcon";
import { HiMiniInformationCircle } from "react-icons/hi2";

// Data structure for the advantage sections
const advantageData = [
    {
        id: 1,
        title: "High season",
        period: "November – April",
        description: "(strongest bookings and rates)",
        color: "#F0642D",
        image: PngIcons.mYacht10,
        alt: "High season yacht"
    },
    {
        id: 2,
        title: "Low season",
        period: "May – October",
        description: "(ideal for refits and upgrades)",
        color: "#F07C3A",
        image: PngIcons.mYacht11,
        alt: "Low season yacht"
    },
    {
        id: 3,
        title: "Optimal purchase window",
        period: "May–June",
        description: "(When yards have capacity and valuations dip)",
        color: "#E24A64",
        image: PngIcons.mYacht12,
        alt: "Optimal purchase yacht"
    }
];

const PhuketAdvantage = () => {
    return (
        <div className={combine(styles.container, "py-10 lg:py-12 bg-white")}>
            {/* Main Title Section */}
            <div className={combine("text-center mb-9")}>
                <HeadingContent
                    heading='The Phuket Advantage'
                    description="Phuket is Southeast Asia’s most established yachting hub—modern marinas, skilled craftsmen, and direct flight access for guests. <br /> Compared with Europe or the Caribbean, operating costs are 30–40 % lower, while charter demand keeps growing."
                />
            </div>
            {/* Three column layout: title, period/description, image */}
            <div className={combine("mb-12")}>
                <div className="space-y-0">
                    {advantageData.map((item, index) => (
                        <div key={item.id}>
                            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-5 lg:py-6 xl:py-8 ${index === 0 ? 'border-t-2 border-gray-300' : ''} ${index === advantageData.length - 1 ? 'border-b-2 border-gray-300' : ''}`}>
                                {/* First Column - Title */}
                                <div className="text-left">
                                    <h3
                                        className={combine(styles.h4, "font-bold ms-3 lg:ms-5 xl:ms-8 bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] bg-clip-text text-transparent leading-tight")}
                                    >
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Second Column - Period and Description */}
                                <div className="text-center">
                                    <p className={combine(styles.h5, "font-semibold text-zink mb-1")}>
                                        {item.period}
                                    </p>
                                    <p className={combine(styles.p3, "text-zink font-medium")}>
                                        {item.description}
                                    </p>
                                </div>
                                {/* Third Column - Image */}
                                <div className={combine(styles.flexCenter, "lg:justify-end me-3 lg:me-5 xl:me-8")}>
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full max-w-xs h-22 lg:h-25 object-cover rounded-full shadow-md"
                                    />
                                </div>
                            </div>
                            {/* Horizontal divider line between sections */}
                            {index < advantageData.length - 1 && (
                                <div className="border-t-2 border-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom information box with heart icon */}
            <div className="bg-white rounded-6xl shadow-xl p-6 flex items-start gap-4 max-w-7xl mt-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiMiniInformationCircle className='text-white text-3xl' />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                    Owning a yacht in Phuket means earning in high season while enjoying personal use in low season—a perfect lifestyle-investment balance.                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhuketAdvantage;
