// Define the interface for broadboat feature items
interface BroadboatFeature {
    title: string;
    description: string;
}
// Export the typed array
export const broadboatValues: BroadboatFeature[] = [
    { 
        title: "Choose Your Vessel", 
        description: "From sleek monohulls to spacious catamarans, our well-maintained fleet is ready for your comman" 
    },
    { 
        title: "Explore Hidden Gems", 
        description: "Discover secluded bays, vibrant reefs, and untouched coves—Phuket's islands are yours to uncover." 
    },
    { 
        title: "Live the Journey", 
        description: "Swim in crystal-clear waters, snorkel vibrant coral reefs, and soak in epic sunsets—every day is a new chapter." 
    },
    { 
        title: "Iconic Destinations", 
        description: "Sail to Phi Phi's limestone cliffs, glide through Phang Nga Bay, or anchor at remote tropical paradises." 
    },
];

// Export the private yacht values
export const privateYachtValues: BroadboatFeature[] = [
    { title: "Private Yachts", description: "Our handpicked fleet blends luxury, comfort, and style—from sleek modern vessels to timeless classics." },
    { title: "Tailored Experiences", description: "Cruise through Phuket's hidden coves and crystal-clear waters with custom itineraries designed just for you." },
    { title: "Expert Crew", description: "Our passionate crew ensures smooth sailing and reveals the Andaman Sea's best-kept secrets." },
    { title: "Gourmet Dining", description: "Savor chef-prepared meals made with fresh, local ingredients—every bite paired with a stunning view." },
    { title: "Ultimate Relaxation", description: "Lounge on sun-drenched decks or retreat to your private cabin—every moment is pure serenity." },
];
