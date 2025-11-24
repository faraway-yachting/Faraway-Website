import { IconType } from "react-icons";
import { PiCrown } from "react-icons/pi";
import { IoMdGlobe } from "react-icons/io";
import { FaShuffle } from "react-icons/fa6";

interface WhatWeCollectItem {
    icon: IconType;
    title: string;
    description: string;
}

interface YachtChoiceFeature {
    title: string;
    description: string;
    capacity: string;
    href?: string;
}
// Export the main yacht choice data
export const whatWeCollectData: WhatWeCollectItem[] = [
    {
        icon: PiCrown ,
        title: "Romantic sailing charter Phuket for honeymoons and anniversaries",
        description: "Celebrate love on board. From sunsets at sea to private dinners, our charters are ideal for honeymoons, anniversaries, and proposals."
    },
    {
        icon: IoMdGlobe,
        title: "Group celebrations – birthdays and reunions",
        description: "Small groups can save up to 30% compared to a private yacht by booking multiple cabins. Perfect for birthdays, reunions, and milestone trips."
    },
    {
        icon:FaShuffle,
        title: "Solo adventures – meet like-minded travelers",
        description: "Solo travelers find our charters social and welcoming. Shared meals and activities make it easy to meet new friends and share the journey."
    },
   
];