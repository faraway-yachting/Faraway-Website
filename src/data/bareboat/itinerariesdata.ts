// Define interfaces for itinerary data
export interface RouteItem {
    name: string;
    image: string;
}

export interface BriefingItem {
    title: string;
    icon: string;
}

export interface ItinerariesData {
    mainTitle: string;
    subtitle: string;
    shorterRoutes: {
        title: string;
        duration: string;
        routes: RouteItem[];
    };
    longerAdventures: {
        title: string;
        duration: string;
        routes: RouteItem[];
    };
    expertBriefings: {
        title: string;
        subtitle: string;
        items: BriefingItem[];
    };
}

// Export the itineraries data
export const itinerariesData: ItinerariesData = {
    mainTitle: "Charting Your Own Course: Self-Skippered Itineraries",
    subtitle: "Plan your self-skippered charter Phuket exactly as you want it.",
    shorterRoutes: {
        title: "Shorter Routes",
        duration: "2–4 Nights",
        routes: [
            {
                name: "Phang Nga Bay",
                image: "/images/phang-nga-bay.png"
            },
            {
                name: "Phi Phi Islands",
                image: "/images/phi-phi-islands.png"
            }
        ]
    },
    longerAdventures: {
        title: "Longer Adventures",
        duration: "5–7+ Nights",
        routes: [
            {
                name: "Similan Islands in the north",
                image: "/images/similan-islands.png"
            },
            {
                name: "Butang Islands in the south",
                image: "/images/butang-islands.png"
            }
        ]
    },
    expertBriefings: {
        title: "Expert Briefings Before You Sail",
        subtitle: "Before departure, our team provides:",
        items: [
            {
                title: "Safety instructions",
                icon: "/images/safety-icon.png"
            },
            {
                title: "Area navigation tips",
                icon: "/images/navigation-icon.png"
            },
            {
                title: "The latest weather forecast",
                icon: "/images/weather-icon.png"
            },
            {
                title: "Local advice to fine-tune your itinerary",
                icon: "/images/advice-icon.png"
            }
        ]
    }
};
