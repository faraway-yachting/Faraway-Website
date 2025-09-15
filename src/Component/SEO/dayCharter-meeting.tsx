import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaLine, FaShip, FaAnchor } from "react-icons/fa";
import { styles, combine } from "@/styles/style";
const DayCharterMeetig = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Main Container */}
            <div className={combine(styles.container, "py-12")}>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h2 className={combine(styles.h2, "font-semibold text-zink mb-6")}>
                        Meeting Location Day Charter
                    </h2>

                    <img src="/images/rframe.png" alt="" className={combine(styles.w2, "my-3 mx-auto")} />

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Please meet our team member with the blue shirt under the white tent at this location</p>
                </div>

                {/* Content Cards - Three in One Row */}
                <div className={combine(styles.grid3Col, "mb-16")}>
                    {/* Office Location Card */}
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-mustard p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center mr-3">
                                <FaMapMarkerAlt className="text-xl text-white" />
                            </div>
                            <h5 className={combine(styles.h5, "text-zink font-semibold")}>CHALONG PIER MEETING POINT
                            </h5>
                        </div>
                        <p className={combine(styles.p4, "text-gray-700 mb-4 leading-relaxed")}>
                            Please meet our team at our office, which is located right behind the{" "}
                            <span className="font-bold text-base text-mustard">"Arch 39" Hotel</span>:
                        </p>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h4 className={combine(styles.p3, "font-semibold text-zink mb-3")}>
                                FARAWAY YACHTING OFFICE
                            </h4>
                            <div className="space-y-1 text-gray-700">
                                <p className={styles.p4}>12 Sunrise Rd,</p>
                                <p className={styles.p4}>Chalong, Mueang Phuket District,</p>
                                <p className={combine(styles.p4, "font-semibold")}>Phuket 83100</p>
                            </div>
                        </div>
                    </div>

                    {/* Arrival Time Card */}
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-mustard p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center mr-3">
                                <FaClock className="text-xl text-white" />
                            </div>
                            <h3 className={combine(styles.h5, "text-zink font-semibold")}>Arrival Time</h3>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <p className={combine(styles.p4, "text-gray-700 leading-relaxed")}>
                                Please be there{" "}
                                <span className="font-bold text-mustard px-2 py-1 rounded text-base">
                                    15 minutes before your boat charter time
                                </span>
                                , so there is enough time to bring you to the boat and give you a briefing before the charter starts.
                            </p>

                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-mustard p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center mr-3">
                                <FaPhone className="text-xl text-white" />
                            </div>
                            <h3 className={combine(styles.h5, "text-zink font-semibold")}>Contact Info</h3>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                            <p className={combine(styles.p4, "text-gray-700 mb-4")}>
                                Our Team will be reachable under:
                            </p>

                            <div className="mb-4">
                                <span className={combine(styles.p3, "font-bold text-zink bg-blue-100 hover:text-[#D6AB62] px-4 py-2 rounded-lg border border-red-200")}>
                                    +66612345623
                                </span>
                            </div>

                            <p className={combine(styles.p4, "text-gray-700 mb-4")}>
                                on phone, WhatsApp and Line App.
                            </p>

                            {/* Contact Platform Icons */}
                            <div className="flex justify-center space-x-4">
                                <div className="flex flex-col items-center group">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                        <FaWhatsapp className="text-lg text-white" />
                                    </div>
                                    <span className={combine(styles.p4, "text-gray-600")}>WhatsApp</span>
                                </div>
                                <div className="flex flex-col items-center group">
                                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                        <FaLine className="text-lg text-white" />
                                    </div>
                                    <span className={combine(styles.p4, "text-gray-600")}>Line App</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Closing Message */}
                <div>
                    <h4 className={combine(styles.h4, "text-zink font-semibold mb-1")}>
                        We wish you a great time onboard!
                    </h4>
                    <p className={combine(styles.h5, "text-zink")}>
                        Team Faraway Yachting
                    </p>
                </div>
            </div>
        </div>
    )
}
export default DayCharterMeetig;