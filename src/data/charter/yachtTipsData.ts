// Define the interface for yacht tips items
interface YachtTip {
    number: string;
    title: string;
    description: string;
    icon: string; // Icon image path
}

// Export the yacht tips data based on the Figma design
export const yachtTipsData: YachtTip[] = [
    {
        number: "01",
        title: "What to Bring",
        description: "Swimwear, sunscreen, hat, sunglasses, and light clothing. For overnight trips: extra swimwear, casual outfits, and shoes suitable for island walks.",
        icon: "/images/crewedimg15.png"
    },
    {
        number: "02", 
        title: "Park Fees",
        description: "National park entries require cash in Thai Baht (usually 300-400 THB per adult per park).",
        icon: "/images/crewedimg14.png"
    },
    {
        number: "03",
        title: "Seasickness", 
        description: "Stay hydrated, eat a good breakfast, and avoid heavy drinking before sailing. Our crews carry seasickness tablets on board for you at any time.",
        icon: "/images/crewedimg16.png"
    }
];

// Export the main yacht tips data
export const yachtTipsMainData = {
    title: "Tips for First-Time Phuket Yacht Rentals",
    subtitle: "Renting a yacht for the first time?",
    tips: yachtTipsData
};
