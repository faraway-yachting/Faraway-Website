// Define the interface for rental cost feature items
import PngIcons from "@/icons/pngIcon"
interface ChooseData {
    title: string;
    description: string;
}

// Export the rental cost values
export const ChooseFaraway: ChooseData[] = [
    {
        title: "Escape the Crowds",
        description: "With a bareboat, you sail beyond the day-trip routes and discover secluded beaches, hidden bays, and remote anchorages."
    },
    {
        title: "Better Value Than Europe or the Caribbean",
        description: "Thailand offers lower costs for charters compared to traditional sailing hubs. While prices are rising, Phuket still represents outstanding value."
    },
    {
        title: "Unmatched Natural Beauty",
        description: "The Andaman Sea features iconic limestone cliffs, white-sand beaches, and thriving coral reefs—perfect for independent sailors."
    },
];

// Export the main rental cost data
export const rentalCostData = {
    title: "Why Choose a Bareboat Charter in Phuket?",
    description: "A <strong>bareboat charter in Phuket</strong> offers scenery, value, and freedom unlike anywhere else.",
    features: ChooseFaraway
};


export interface RequirementData {
    id: string;
    title: string;
    description: string[];
    image: string;

}
export const RequirementsData: RequirementData[] = [
    {
        id: "licensing",
        title: "Licensing & Experience",
        description: [
            "Valid captain's license",
            "VHF radio license",
            "Two weeks of experience on a similar vessel",
        ],
        image: PngIcons.bareboat9,
    },
    {
        id: "approval",
        title: "Approval Process",
        description: [
            "Submit your documents",
            "Insurance confirms eligibility",
            "Select from available yachts for your dates",
        ],
        image: PngIcons.bareboat10,
    },
]