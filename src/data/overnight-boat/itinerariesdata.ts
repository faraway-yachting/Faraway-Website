// Define the interface for rental cost feature items
interface RentalCostFeature {
    title: string;
    description: string;
}

// Export the rental cost values
export const rentalCostValues: RentalCostFeature[] = [
    { 
        title: "2–4 Nights: Island Highlights", 
        description: "Explore Phang Nga Bay, Phi Phi Islands, and Racha Islands. Short but packed with beauty, these are ideal if you’re new to an overnight yacht charter Phuket." 
    },
    { 
        title: "5 Nights: Best Value Itinerary", 
        description: "Reach remote islands such as Koh Mook, Koh Rok, and Koh Ha. A 5-night overnight boat charter Phuket is our top recommendation for variety and value." 
    },
    { 
        title: "7+ Nights: Ultimate Adventures", 
        description: "Longer charters let you explore the Similan Islands or the Butang Archipelago—perfect for divers and adventurers who want the most exclusive overnight boat charter Phuket experience." 
    },
];

// Export the main rental cost data
export const rentalCostData = {
    title: "Top Itineraries for an Overnight Boat Charter Phuket Experience",
    features: rentalCostValues
};
