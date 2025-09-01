import PngIcons from "@/icons/pngIcon";
import { GiPalmTree } from "react-icons/gi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { FaAnchor } from "react-icons/fa";
import { IconType } from "react-icons";
import { PiCrown } from "react-icons/pi";
import { IoMdGlobe } from "react-icons/io";
import { FaShuffle } from "react-icons/fa6";
import { GrCompass } from "react-icons/gr";

export interface Attraction {
    id: string;
    image: string;
    label: string;
    title: string;
    heading: string;
    description: string;
    highlights: string[];
    tip: string;
    
}

export interface SuperYachtAttractions {
    items: Attraction[];
}

export const attractionsMap: Record<string, SuperYachtAttractions> = {
    "phi-phi-island": {
        items: [
            {
                id: "01",
                image: PngIcons.card2,
                label: "Sail in Comfort with World-Class Service",
                title: " Super Yacht Charter Phuket",
                heading: "Why It's Special",
                description:
                    "Step aboard more than just a yacht — enjoy a premium sea experience with professional crew, five- star hospitality, and tailor- made itineraries.",
                highlights: [
                    "Custom itineraries to match your preferences",
                    "Full-service onboard with luxury amenities",
                    "Five-star hospitality & guest care",
                    "Safe, precise navigation by expert crew",
                ],
                tip: "Every detail is fine - tuned so you feel like royalty, with a relaxing, hassle - free journey at sea.",
            },
            {
                id: "02",
                image: PngIcons.card3,
                label: "A Floating Five - Star Resort",
                title: "Your Luxury Yacht Phuket",
                heading: "Why It's Special",
                description:
                    "Enjoy comfort, style, and panoramic sea views aboard our luxury yachts.Every detail blends technology and elegance for a truly unforgettable journey.",
                highlights: [
                    "Air - conditioned, ultra - clean vessels",
                    "Entertainment & sound systems",
                    "Outdoor lounges & sun decks",
                    "Luxurious interiors & premium amenities",
                    "Water toys & fun activities",
                ],
                tip: "Dine under the stars, sip cocktails on the flybridge, and wake up to rejuvenating mornings at sea.",
            },
        ]
    },
}

export interface Attraction2 {
    id: string;
    heading: string[];
    description: string[];
    image: string;
}

export interface SuperYacht2 {
    items: Attraction2[];
}

export const FunMoments: Record<string, SuperYacht2> = {
    "fun-moments": {
        items: [
            {
                id: "01",
                image: PngIcons.super2,
                heading: ["Yacht Weddings", "Parties & Celebrations", "Corporate Events", "Add-On Experiences"],
                description: [
                    "Exchange vows at sea with panoramic views, elegant décor, and five-star service.",
                    "Celebrate birthdays, stag/hen nights, or special moments on a luxury floating venue.",
                    "Host retreats or meetings with tailored themes, gourmet dining, and seamless coordination.",
                    "Enhance your event with spa treatments, live music, BBQ beach parties, or surprise proposals.",
                ]
            },
            {
                id: "02",
                image: PngIcons.super3,
                heading: ["Custom Itineraries", "Onboard Experiences", "Land Excursions", "Tailored Journeys"],
                description: [
                    "Design your dream route with hidden beaches, iconic islands, and flexible sailing times.",
                    "Enjoy wine tastings, themed dinners, yoga at sea, or spa treatments.",
                    "Explore guided island tours, beach picnics, diving trips, and snorkeling adventures.",
                    "From romantic escapes to week-long adventures or wellness retreats—your charter, your way.",
                ]
            }
        ]
    }
}

export interface FAQItem {
    place: string;
    description: string;
}

export const superYacht: FAQItem[] = [
    {
        place: "What is included and excluded in a Super Yacht Charter Phuket?",
        description: "Every yacht has its distinct inclusions and exclusions. However, the typical inclusions are crews, fuel, meals, and the use of water toys. On the other hand, exclusions are often national park fees and other optional services. Kindly check each yacht's detail page or contact us directly for more details.",
    },
    {
        place: "Can you arrange special requests for our Luxury Boat Charter Phuket?",
        description: "Yes — with advance notice, we can arrange anything legal and feasible. Some of the best examples are candlelit dinners, beach parties, live DJs, Thai massage therapists, fire shows, or proposal setups. Just tell us what you have in mind, and we'll try our best to make your dream super yacht charter cruise in Phuket a reality.",
    },
    {
        place: "Do I need sailing experience to charter a super yacht?",
        description: "Not at all. You'll enjoy your yacht charter experience even if you are a first-timer as all of our super yacht charters in Phuket already have professional crews in them. Just relax and enjoy without bothering yourself with how to navigate a yacht.",
    },
    {
        place: "What's the difference between a super yacht and a luxury yacht?",
        description: "Technically, a luxury yacht is smaller than a super yacht. However, both of them offer superb comfort and service. If you want more space, then go for a super yacht as it offers more than 70 feet of floor area, which is perfect if you have more guests. You can enjoy various features such as jacuzzis, multi-level decks, and more.",
    },
    {
        place: "How far in advance should I book my yacht charter in Phuket?",
        description: "To safely secure your ideal dates, it would be great if you could book 3 to 6 months ahead of your planned trip. The high season in Phuket is usually from November to April, which is why last-minute bookings during these months are not advisable, as slots are filled rapidly.",
    },
    {
        place: "Can we visit both Phi Phi and James Bond Island in one day?",
        description: "Since the distance between these locations is too far from each other, it is advisable to book a 2-day, 1-night super yacht charter or 2 day charters (discounts apply if booking 2 days) to maximize your satisfaction. We are here to help you create a customized overnight itinerary to help you explore the islands comfortably.",
    },
    {
        place: "Are children and pets allowed on board?",
        description: "Children are welcome on all of our yachts. You can also opt to hire a nanny through us to give you a worry-free experience while cruising. However, when it comes to pets, there is a need to get approval from the owner of the yachts, and a refundable damage deposit may apply. Just message us directly for more details.",
    },
    {
        place: "What should I pack for a one-day or multi-day Super Yacht Charter in Phuket?",
        description: "It would be great if you had swimwear, light breathable clothing, sunscreen, a hat, sunglasses, sandals, and personal items.",
    },
    {
        place: "Is there Wi-Fi and air conditioning onboard?",
        description: "Yes, all of our luxury yachts in Phuket are equipped with Wi-Fi, air-conditioning, and modern entertainment systems, so you will be comfortable and connected to the world at all times.",
    },
    {
        place: "What happens if the weather is bad?",
        description: "The safety of our guests always matters. If the Marine Department of Thailand restricts sea travel due to weather, we will help you reschedule or adjust the route of your trip. For more details, kindly see our Terms & Conditions page.",
    },
    {
        place: "What is the itinerary for a Super Yacht Charter Phuket?",
        description: "We can suggest sample itineraries to help you decide. On top of that, you can have a tailored itinerary to give you more freedom of choice. Your ideal holiday will be filled with excitement once you visit the remote islands while enjoying the view of the lush rainforests and clear waters. Also, if you are a thrill-seeker you can enjoy some water sports during your stay.",
    },
]

interface WhyItem {
  id: number;
  icon: IconType;
  label: string;
  description: string;
}

interface WhatWeCollectItem {
  icon: IconType;
  title: string;
  description: string;
}

export const WhyData: WhyItem[] = [
  {
    id: 1,
    icon: GiPalmTree,
    label: "Island Exploration",
    description:
      "Discover untouched gems like Koh Hong, Koh Yao Noi, and the famous Phi Phi Islands.",
  },
  {
    id: 2,
    icon:  PiMapPinAreaFill,
    label: "Tailored Itineraries",
    description:
      "From beaches and snorkeling to fine dining—your dream yacht journey, your way.",
  },
  {
    id: 3,
    icon: MdCelebration,
    label: "Celebrations at Sea ",
    description:
      "Host birthdays, weddings, or anniversaries in true luxury and style.",
  },
  {
    id: 4,
    icon: FaAnchor,
    label: "Exclusive Experiences",
    description:
      "Enjoy sunset cruises, island hopping, luxury sailing, or overnight yacht stays.",
  },
];

export const whatWeCollectData: WhatWeCollectItem[] = [
    {
        icon: PiCrown ,
        title: "Unmatched Comfort",
        description: "Premium services that guarantee comfort & relaxation"
    },
    {
        icon: IoMdGlobe,
        title: "Insider Expertise",
        description: "Local insights combined with world-class service"
    },
    {
        icon:FaShuffle,
        title: "Flexible Choices",
        description: "Various yacht charter options are available"
    },
    {
        icon:GrCompass,
        title: "Tailored Journeys",
        description: "Customizable experiences to your unique preferences"
    }
];






