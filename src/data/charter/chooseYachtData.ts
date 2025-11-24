import { IconType } from "react-icons";
import { PiCrown } from "react-icons/pi";
import { IoMdGlobe } from "react-icons/io";
import { FaShuffle } from "react-icons/fa6";
import { GrCompass } from "react-icons/gr";

// Define the interface for yacht choice feature items
interface YachtChoiceFeature {
    title: string;
    description: string;
    capacity: string;
    href?: string;
}

// Define the interface for what we collect items
interface WhatWeCollectItem {
    icon: IconType;
    title: string;
    description: string;
}

// Export the yacht choice values
export const yachtChoiceValues: YachtChoiceFeature[] = [
    { 
        title: "Small Groups & Budget-Friendly Options", 
        description: "For up to 15 guests, our Hot Chilli power catamaran is fast, fuel-efficient, and fully equipped with a galley and bathrooms. It's one of the best-value Phuket yacht rentals.",
        capacity: "Up to 15 guests",
        href: "https://www.faraway-yachting.com/crewed_boats/power-catamaran-rental-phi-phi-islands"
    },
    { 
        title: "Mid-Tier Luxury Yachts", 
        description: "For groups of 2–25, Sail La Vie is the ideal mid-range choice. With air conditioning, a private chef, and comfortable design, it's perfect for families and small groups wanting extra luxury.",
        capacity: "2-25 guests",
        href: "https://www.faraway-yachting.com/crewed_boats/power-catamaran-island-hopping"
    },
    { 
        title: "Ultimate Luxury Superyachts", 
        description: "For the pinnacle of indulgence, Mia Kai offers VIP service at USD 10,000+ per day. Perfect for weddings, corporate events, or luxury escapes.",
        capacity: "VIP Service",
        href: "https://www.faraway-yachting.com/crewed_boats/bilgin-yacht-98"
    },
];

// Export the main yacht choice data
export const chooseYachtData = {
    title: "Choosing the Right Yacht for Your Phuket Rental",
    description: "Every group has different needs, so we recommend the best vessel for your occasion.",
    features: yachtChoiceValues
};


export const whatWeCollectData: WhatWeCollectItem[] = [
    {
        icon: PiCrown ,
        title: "Weddings & Honeymoons",
        description: "Exchange vows at sea or sail into married life with a honeymoon across Thailand’s most romantic islands."
    },
    {
        icon: IoMdGlobe,
        title: "Proposals & Anniversaries",
        description: "Celebrate milestones with champagne at sunset or a chef-prepared dinner under the stars."
    },
    {
        icon:FaShuffle,
        title: "Birthdays, Hen & Stag Parties",
        description: "Transform a yacht into your private floating venue with music, entertainment, and themed décor."
    },
    {
        icon: GrCompass,
        title: "Corporate Events",
        description: "From team-building activities to client hospitality, yachts offer privacy and exclusivity unmatched by land venues."
    }
];