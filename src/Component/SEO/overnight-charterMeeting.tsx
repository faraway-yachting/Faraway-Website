"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaLine, FaShip, FaAnchor } from "react-icons/fa";
import { styles, combine } from "@/styles/style";
import { useState } from "react";

const NightCharter_Meeting = () => {
    const [phoneCopied, setPhoneCopied] = useState(false);

    const copyPhoneToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('+66612345623');
            setPhoneCopied(true);
            setTimeout(() => setPhoneCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy phone number:', err);
        }
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Main Container */}
            <div className={combine(styles.container, "py-12")}>
                {/* Hero Section */}
                <div className="text-center mb-7 md:mb-9 lg:mb-13">
                    <h2 className={combine(styles.h2, "font-semibold text-zink mb-3")}>
                        Meeting Location  Overnight Charter
                    </h2>

                    <img src="/images/rframe.png" alt="" className={combine(styles.w2, "my-3 pb-2 mx-auto")} />

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Welcome aboard! Your adventure begins here at our office location.
                    </p>
                </div>
                {/* Content Cards - Three in One Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-5 xl:gap-15 mb-5 lg:mb-7 xl:mb-9">
                    {/* Office Location Card */}
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-mustard p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-mustard rounded-lg flex items-center justify-center mr-3">
                                <FaMapMarkerAlt className="text-xl text-white" />
                            </div>
                            <h3 className={combine(styles.h5, "text-zink font-semibold")}>Office Location</h3>
                        </div>

                        <p className={combine(styles.p4, "text-gray-700 mb-4 leading-relaxed")}>
                            Please meet our team at our office, which is located right behind the{" "}
                            <span className="font-bold text-mustard">"Arch 39" Hotel</span>:
                        </p>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <a
                                href="https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8231625,98.3437787,15z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h4 className={combine(styles.p3, "font-semibold text-blue-600 underline mb-3 hover:text-[#D6AB62]")}>
                                    FARAWAY YACHTING OFFICE
                                </h4>
                            </a>
                            <div className="space-y-1 text-gray-700">
                                <p className={styles.p4}>40, 1 Chaofa Road</p>
                                <p className={styles.p4}>Chalong,</p>
                                <p className={combine(styles.p4, "font-semibold")}>Phuket, 83130</p>
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
                                    30 minutes before your boat charter time
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
                                <button
                                    onClick={copyPhoneToClipboard}
                                    className={combine(
                                        styles.p3,
                                        "font-bold text-zink bg-blue-100 hover:bg-blue-200 hover:text-[#D6AB62] px-4 py-2 rounded-lg border border-red-200 cursor-pointer transition-all duration-200"
                                    )}
                                >
                                    {phoneCopied ? "Copied!" : "+66612345623"}
                                </button>
                            </div>

                            <p className={combine(styles.p4, "text-gray-700 mb-4")}>
                                on phone, WhatsApp and Line App.
                            </p>

                            {/* Contact Platform Icons */}
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex flex-col items-center group">
                                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                            <FaWhatsapp className="text-lg text-white" />
                                        </div>
                                        <span className={combine(styles.p4, "text-gray-600")}>WhatsApp</span>
                                    </div>
                                </a>
                                <a
                                    href="https://line.me/ti/p/IF91DcUiYa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex flex-col items-center group">
                                        <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                            <FaLine className="text-lg text-white" />
                                        </div>
                                        <span className={combine(styles.p4, "text-gray-600")}>Line App</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Static Images */}
                <div className="space-y-8 lg:space-y-10 xl:space-y-12 mb-7 md:mb-9 lg:mb-13">
                    {/* Image 1 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-[500px] relative">
                            <Image
                                src="/images/nightMeet1.png"
                                alt="Meeting Location Details"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className={combine(styles.h3, "mb-2")}>Meeting Location</h3>
                                <p className={styles.p2}>If coming from the beach road turn left at the Arch 39 hotel. </p>
                            </div>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-[500px] relative">
                            <Image
                                src="/images/nightMeet2.png"
                                alt="Meeting Information"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className={combine(styles.h3, "mb-2")}>Meeting Location</h3>
                                <p className={styles.p2}>Turn right in front of the “boat shaped” bar to see the entrance of the office.

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-[500px] relative">
                            <Image
                                src="/images/nightMeet3.png"
                                alt="Contact Information"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className={combine(styles.h3, "mb-2")}>Contact Information</h3>
                                <p className={styles.p2}>We're here to help</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className={combine(styles.h4, "text-zink font-semibold mb-1")}>
                            We wish you a great time onboard!
                        </h4>
                        <p className={combine(styles.h5, "text-zink")}>
                            Team Faraway Yachting
                        </p>
                    </div>
                </div>
                {/* Closing Message */}
            </div>
        </div>
    );
};

export default NightCharter_Meeting;