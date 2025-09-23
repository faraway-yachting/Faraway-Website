// Define the interface for rental cost feature items
interface RentalCostFeature {
    title: string;
    description: string;
}

// Export the rental cost values
export const rentalCostValues: RentalCostFeature[] = [
    { 
        title: "Type of Yacht", 
        description: "Power yachts use more fuel and cost more than sailing yachts, with luxury features adding to the price." 
    },
    { 
        title: "Group Size", 
        description: "Larger groups may require bigger boats or incur surcharges per guest, affecting the overall rental cost." 
    },
    { 
        title: "Seasonal Pricing", 
        description: "Christmas, New Year, and December–March are peak times with higher rates, while off-season offers better value." 
    },
    { 
        title: "Luxury Features", 
        description: "Air conditioning, water toys, and premium chefs add to the price, but enhance your luxury experience." 
    },
];

// Export the main rental cost data
export const rentalCostData = {
    title: "How Much Does a Phuket Yacht Rental Cost? (2025 Guide)",
    description: "Pricing depends on yacht type, group size, and season, but Phuket remains one of the best-value luxury destinations in Asia.",
    features: rentalCostValues
};
