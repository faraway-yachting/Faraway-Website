export interface RouteCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  yachtTypes: string[];
  destinations: string[];
  highlights: string[];
  image: string;
  buttonText: string;
}

export const rentalRoutesData: RouteCard[] = [
  {
    id: "half-day",
    title: "Half-Day Rentals",
    description: "Perfect for quick escapes and relaxed cruising around Phuket's beautiful waters.",
    duration: "4-6 hours",
    yachtTypes: ["Sailing Yachts", "Power Yachts"],
    destinations: ["Coral Island", "Promthep Cape", "Koh Mai Thon", "Racha Yai"],
    highlights: [
      "Relaxed cruise experience",
      "Quick island hopping",
      "Perfect for families",
      "Beautiful sunset views"
    ],
    image: "/images/Crewedimg11.png",
    buttonText: "Explore Half-Day Routes"
  },
  {
    id: "full-day",
    title: "Full-Day Rentals",
    description: "Comprehensive adventures with snorkeling, swimming, and island exploration.",
    duration: "8-10 hours",
    yachtTypes: ["Catamarans", "Power Vessels"],
    destinations: ["Koh Mai Thon", "Racha Yai", "Phi Phi Islands", "Phang Nga Bay"],
    highlights: [
      "Snorkeling & swimming",
      "Island exploration",
      "Lunch on board",
      "Multiple destinations"
    ],
    image: "/images/crewedimg12.png",
    buttonText: "Discover Full-Day Adventures"
  },
  {
    id: "multi-day",
    title: "Multi-Day Adventures",
    description: "Extended voyages to hidden bays and remote coral reefs far from the crowds.",
    duration: "2-7+ nights",
    yachtTypes: ["Luxury Yachts", "Catamarans", "Motor Yachts"],
    destinations: ["Racha Noi", "Phi Phi Islands", "Phang Nga Bay", "Remote Bays"],
    highlights: [
      "Sleep under the stars",
      "Access remote locations",
      "Best value experience",
      "Exclusive destinations"
    ],
    image: "/images/crewedimg13.png",
    buttonText: "Plan Multi-Day Voyage"
  }
];

