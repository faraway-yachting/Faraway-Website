// Define the interface for price range feature items
interface PriceRangeFeature {
    title: string;
    description: string;
    price: string;
    currency: string;
}

// Export the price range values
export const priceRangeValues: PriceRangeFeature[] = [
    { 
        title: "Day Rentals", 
        description: "Perfect for day trips and island hopping adventures",
        price: "From 29,900 THB",
        currency: "≈ USD 1,000"
    },
    { 
        title: "Overnight Charters", 
        description: "Complete experience with accommodation, crew, and meals included",
        price: "From €1,000",
        currency: "per night"
    },
    { 
        title: "Luxury Superyachts", 
        description: "Full VIP experiences with premium amenities and services",
        price: "From €10,000",
        currency: "per day"
    },
];

// Export the main price range data
export const priceRangeData = {
    title: "Typical Price Ranges",
    description: "Whether you're planning a private boat rental in Phuket for just a day or a week-long luxury yacht charter, we offer flexible packages to match your budget and style. By understanding these factors, you can plan a Phuket yacht rental that perfectly balances your budget and expectations.",
    features: priceRangeValues
};
