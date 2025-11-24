// Define the interface for rental cost feature items
interface RentalCostFeature {
    title: string;
    description: string;
}

// Export the rental cost values
export const rentalCostValues: RentalCostFeature[] = [
    { 
        title: "2–4 Nights: Island Highlights", 
        description: "Explore <strong>Phang Nga Bay, Phi Phi Islands</strong>, and <strong>Racha Islands</strong>. Short but packed with beauty, these are ideal if you're new to an <strong>overnight yacht charter Phuket</strong>." 
    },
    { 
        title: "<span class=\"text-orange\">5 Nights: Best Value Itinerary</span>", 
        description: "<span class=\"text-orange\">Reach remote islands such as Koh Mook, Koh Rok, and Koh Ha. A <strong>5-night overnight boat charter Phuket</strong> is our top recommendation for variety and value.</span>" 
    },
    { 
        title: "7+ Nights: Ultimate Adventures", 
        description: "Longer charters let you explore the <strong>Similan Islands</strong> or the Butang Archipelago—perfect for divers and adventurers who want the most exclusive <strong>overnight boat charter Phuket</strong> experience." 
    },
];

// Export the main rental cost data
export const rentalCostData = {
    title: "Top Itineraries for an Overnight Boat Charter Phuket Experience",
    features: rentalCostValues
};
