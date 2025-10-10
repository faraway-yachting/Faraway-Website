import React from 'react';
import { styles, combine } from '../../styles/style';
import { PiPersonSimpleSwimFill, PiBoatFill } from "react-icons/pi";
import { TbEaseInOutControlPoints } from "react-icons/tb";
import HeadingContent from '@/common/heading';
import { IoBoatSharp } from "react-icons/io5";
import { MdSolarPower } from "react-icons/md";
import { FaArrowsSpin } from "react-icons/fa6";
import { IoFish } from "react-icons/io5";
// Activity data
const activities = [
    {
        id: 1,
        icon: PiPersonSimpleSwimFill,
        title: "Activities like snorkeling, swimming, & island-hopping"
    },
    {
        id: 2,
        icon: TbEaseInOutControlPoints,
        title: "Spacious cabins for kids and adults"
    },
    {
        id: 3,
        icon: PiBoatFill,
        title: "Flexible itineraries tailored to your group's preferences"
    }
];

const sustainability = [
    {
        id: 1,
        icon: IoBoatSharp,
        title: "Aluminum sailing catamarans that use 5–10x less diesel than competitors due to huge sail area and low weight."
    },
    {
        id: 2,
        icon: MdSolarPower,
        title: "Three yachts upgraded to the latest 48V battery - solar systems."
    },
    {
        id: 3,
        icon: FaArrowsSpin,
        title: "Reduced plastic use and eco-friendly cleaning products."
    },
    {
        id: 4,
        icon: IoFish,
        title: "Guests encouraged to travel responsibly and respect marine life."
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

const GroupAdventure = () => {
    return (
        <div>
            <section className={combine("py-10  bg-white",)}>
                <div className={styles.container}>
                    <div className="max-w-6xl mx-auto">
                        {/* Main Title */}
                        <div className="text-center mb-8">
                            <HeadingContent
                                heading="Family & Group Adventures on an Overnight Boat Charter Phuket"
                                description="An overnight boat charter Phuket is perfect for families and groups"
                            />
                        </div>

                        {/* Feature Points */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                            {activities.map((activity) => (
                                <ActivityCard
                                    key={activity.id}
                                    Icon={activity.icon}
                                    title={activity.title}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            <section className={combine("pb-10 pt-7 bg-white",)}>
                <div className={styles.container}>
                    <div className="max-w-7xl mx-auto">
                        {/* Main Title */}
                        <div className="text-center mb-8">
                            <HeadingContent
                                heading="Sustainability and Eco-Friendly Yacht Charters"
                                description="Faraway Yachting is proud to offer one of the most sustainable options for an overnight boat charter Phuket."
                            />
                        </div>

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
                </div>
            </section>

        </div>
    );
};

export default GroupAdventure;
