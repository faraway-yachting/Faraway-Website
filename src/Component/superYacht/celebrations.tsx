import React from 'react';
import { styles, combine } from '../../styles/style';
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoBoatSharp } from "react-icons/io5";
import { MdSolarPower } from "react-icons/md";
import { FaArrowsSpin } from "react-icons/fa6";
import { IoFish } from "react-icons/io5";
const sustainability = [
    {
        id: 1,
        icon: IoBoatSharp,
        title: "Private setting with panoramic ocean views"
    },
    {
        id: 2,
        icon: MdSolarPower,
        title: "Custom themes, gourmet menus, and elegant decorations"
    },
    {
        id: 3,
        icon: FaArrowsSpin,
        title: "Full-service crew and professional event coordination"
    },
    {
        id: 4,
        icon: IoFish,
        title: "Add-on experiences like onboard spa treatments, live music, or BBQ beach parties"
    }
];

// Reusable activity card component
const ActivityCard = ({ Icon, title }: {
    Icon: React.ComponentType<any>;
    title: string;
}) => (
    <div className="text-center group mt-4 lg:mt-6 xl:mt-8">
        <div className="mb-6">
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 bg-white"
                style={{
                    borderColor: '#F09819'
                }}
            >
                <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                        background: 'linear-gradient(135deg, #F09819 0%, #FF512F 50%, #F09819 100%)',
                        borderRadius: '50%'
                    }}
                >
                    <Icon className="w-8 h-8 text-white" />
                </div>
            </div>
        </div>
        <h3 className={combine("text-zink font-medium font-inter", styles.p3)}>
            {title}
        </h3>
    </div>
);
const Events = () => {
    return (
        <section className={combine("pb-14 pt-12 bg-white",)}>
            <div className={styles.container}>
                <div className="max-w-7xl mx-auto">
                    {/* Main Title */}
                    <div className="text-center mb-12 md:mb-10">
                        <h2 className={combine(styles.h2, "font-extrabold text-zink mb-4")}>
                            Yacht Weddings, Parties & Corporate Events in Phuket                        </h2>
                        <img
                            src="/images/rframe.png"
                            alt=""
                            className="md:max-w-4xl lg:max-w-3xl w-full my-3 mx-auto"
                        />
                        <h3 className={combine(styles.h3, "text-mustard font-semibold text-center mb-4")}>
                            Host Your Special Moments at Sea
                        </h3>
                        <p className={combine(styles.p2, "font-normal max-w-5xl font-inter text-zink mx-auto leading-relaxed")}>
                            Get ready to store more memories that you’ll cherish for a lifetime with a private yacht event in Phuket. Our super yachts are ready to provide you with the best floating venue when it comes to a luxury wedding, a corporate retreat, a stag or hen party, or even just a special day with your loved ones.
                        </p>
                    </div>
                    <p className={combine("text-zink font-semibold font-inter", styles.p3)}>Why celebrate aboard a premium yacht?                    </p>

                    {/* Feature Points */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-6">
                        {sustainability.map((item) => (
                            <ActivityCard
                                key={item.id}
                                Icon={item.icon}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-6xl shadow-xl p-6 flex items-center gap-4 mt-5 max-w-7xl">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                        <HiMiniInformationCircle className='text-white text-3xl' />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                            People do love surprise proposals with amazing sea creatures, just as we do. Make those memorable moments happen, as we will handle every detail while you enjoy the best time of your life on the sea.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Events;