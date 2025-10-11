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
                title: " Luxury Super Yacht Charter Phuket",
                heading: "Some of the benefits that you’ll get are:",
                description:
                    "When you book a <strong>luxury super yacht charter in Phuket</strong>, it is not just about the vessel– you’re entering a gateway to a premium experience at sea. Our <strong>luxury boat rental in Thailand</strong> is crewed with professional crews that are ready to take on your needs anytime you want to.",
                highlights: [
                    "Itineraries crafted to your personal preferences",
                    "Full-service onboard",
                    "Five-star hospitality experience",
                    "Precise navigation and guest services that guarantee a safe journey",
                ],
                tip: "Once you are on board, you’ll feel that you are a royal as we fine-tune every detail for an enjoyable, relaxing, and hassle-free experience you can ever imagine.",
            },
            {
                id: "02",
                image: PngIcons.card3,
                label: "A Floating Five-Star Resort",
                title: "Your Luxury Yacht Phuket",
                heading: "Our luxury yachts come with the following features:",
                description:
                    "Our guests love our <strong>luxury Yacht Charters in Phuket</strong> because they seek comfort, style, and sophistication. Once you step outside the yacht or even peek at the window, you’ll be able to see the panoramic sea views coupled with great decks and spacious seats. We guarantee to give you a great time with the blend of technology and elegance.",
                highlights: [
                    "Air-conditioned, ultra-clean vessels",
                    "Entertainment systems bring more fun and excitement",
                    "Outdoor lounge areas and sunbathing decks",
                    "Luxurious amenities and interiors",
                    "Different kinds of toys to play around",
                ],
                tip: "Dinner under the stars, drink cocktails on the flybridge, or experience mornings that truly rejuvenate; this is the luxury yacht Phuket travel is all about. It will help you escape whatever problems you may have or just give some pause to the busy city you are living in.",
            },
        ]
    },
}

export interface Attraction2 {
    id: string;
    heading?: string;
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
                heading: "Make your trip more exciting with:",
                description: [
                    "Handpicked destinations from hidden beaches to iconic islands",
                    "Flexible sailing times and overnight anchorages",
                    "Onboard experiences like wine tastings, themed dinners, or yoga at sea",
                    "Land excursions: guided island tours, beach picnics, diving trips",
                ]
            },
            {
                id: "02",
                image: PngIcons.super3,
                heading: "Additional options include:",
                description: [
                    "A romantic cruise with secluded island stops and candlelit dinners",
                    "A week-long island-hopping trip with adventure sports and snorkeling",
                    "A relaxed wellness escape with spa treatments and detox menus onboard",
                ]
            },
            {
                id: "03",
                image: PngIcons.super3,
                heading: "Some of the destinations are the following:",
                description: [
                    "Similan Islands - Known for diving and crystal-clear visibility",
                    "Koh Phi Phi Leh - Home to Maya Bay, perfect for night anchoring",
                    "Racha Islands - Perfect for snorkeling and peaceful beaches",
                    "Koh Rok and Koh Haa - Fantastic for relaxation if you want a remote place, combined with local culture",
                ]
            }
        ]
    }
}

export interface FAQItem {
    place: string;
    description: string;
    link?: string;
    href?: string;
}

export const superYacht: FAQItem[] = [
    {
        place: "What is included and excluded in a Super Yacht Charter Phuket?",
        description: "Every yacht has its distinct inclusions and exclusions. However, the typical inclusions are crews, fuel, meals, and the use of water toys. On the other hand, exclusions are often national park fees and other optional services. Kindly check each <strong>yacht's detail page</strong> or contact us directly for more details.",
    },
    {
        place: "Can you arrange special requests for our Luxury Boat Charter Phuket?",
        description: "Yes — with advance notice, we can arrange anything legal and feasible. Some of the best examples are candlelit dinners, beach parties, live DJs, Thai massage therapists, fire shows, or proposal setups. Just tell us what you have in mind, and we'll try our best to make your dream <strong>super yacht charter</strong> cruise in <strong>Phuket</strong> a reality",
    },
    {
        place: "Do I need sailing experience to charter a super yacht?",
        description: "Not at all. You’ll enjoy your yacht charter experience even if you are a first-timer as all of our <strong>super yacht charters in Phuket</strong> already have professional crews in them. Just relax and enjoy without bothering yourself with how to navigate a yacht.",
    },
    {
        place: "What’s the difference between a super yacht and a luxury yacht?",
        description: "Technically, a luxury yacht is smaller than a super yacht. However, both of them offer superb comfort and service. If you want more space, then go for a super yacht as it offers more than 70 feet of floor area, which is perfect if you have more guests. You can enjoy various features such as jacuzzis, multi-level decks, and more.",
    },
    {
        place: "How far in advance should I book my yacht charter in Phuket?",
        description: "To safely secure your ideal dates, it would be great if you could book 3 to 6 months ahead of your planned trip. The high season in Phuket is usually from November to April, which is why last-minute bookings during these months are not advisable, as slots are filled rapidly.",
    },
    {
        place: "Can we visit both Phi Phi and James Bond Island in one day?",
        description: "Since the distance between these locations is too far from each other, it is advisable to book a 2-day, 1night super yacht charter or 2 day charters (discounts apply if booking 2 days) to maximize your satisfaction. We are here to help you create a customized overnight itinerary to help you explore the islands comfortably.",
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
        description: "Yes, all of our <strong>luxury yachts in Phuket</strong> are equipped with Wi-Fi, air-conditioning, and modern entertainment systems, so you will be comfortable and connected to the world at all times.",
    },
    {
        place: "What happens if the weather is bad?",
        description: "The safety of our guests always matters. If the Marine Department of Thailand restricts sea travel due to weather, we will help you reschedule or adjust the route of your trip. For more details, kindly see our",
        link: "Terms & Conditions page",
        href: "https://www.faraway-yachting.com/terms-and-conditions",
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
        icon: PiMapPinAreaFill,
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
        icon: PiCrown,
        title: "Unmatched Comfort",
        description: "Premium services that guarantee comfort & relaxation"
    },
    {
        icon: IoMdGlobe,
        title: "Insider Expertise",
        description: "Local insights combined with world-class service"
    },
    {
        icon: FaShuffle,
        title: "Flexible Choices",
        description: "Various yacht charter options are available"
    },
    {
        icon: GrCompass,
        title: "Tailored Journeys",
        description: "Customizable experiences to your unique preferences"
    }
];


export interface YachtDestinationItem {
  id: string;         
  image: string;      
  title: string;
  description: string;
}

const YachtsDestinationData: YachtDestinationItem[] = [
  {
    id: "Koh Phi Phi",
    title: "Koh Phi Phi", 
    image: PngIcons.image1,
    description: "Perfect for snorkeling and beach picnics"
  },
  {
    id: "phang-nga-bay",
    title: "James Bond Island (Koh Tapu) ",
    image: PngIcons.image4,
    description: "An iconic limestone spike featured in The Man with the Golden Gun"
  },
  {
    id: "phang-nga-bay",
    title: "Koh Yao Noi & Koh Yao Yai ",
    image: PngIcons.image5,
    description: " Quiet islands with lush scenery and local culture"
  },
  {
    id: "koh-rok",
    title: "Coral Island (Koh Hae) ",
    image: PngIcons.image6,
    description: "Great for water activities and close to Phuket"
  },
  {
    id: "racha-islands",
    title: "Racha Islands",
    image: PngIcons.image3,
    description: "Especially Racha Noi, popular for its mesmerizing waters and lower number of tourists, offers a more discreet escapade for relaxation and water activities."
  },
];

export default YachtsDestinationData;





