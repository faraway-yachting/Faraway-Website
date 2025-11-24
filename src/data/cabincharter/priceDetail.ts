import { IconType } from "react-icons";
import { LuCopyCheck } from "react-icons/lu";
import { LuCopySlash } from "react-icons/lu";
import { TbCopyMinus } from "react-icons/tb";
import { TbCopyPlus } from "react-icons/tb";
import { LuWine } from "react-icons/lu";
import { LuMartini } from "react-icons/lu";
import { LuBed } from "react-icons/lu";
import { LuUtensils } from "react-icons/lu";
import { LuLeaf } from "react-icons/lu";

export interface ItineraryItem {
    id: string;
    icon: IconType;
    place: string;
    link?: string;
    href?: string;
    itinerary: {
        description?: string[];
        link?: string;
        href?: string;
    }[];
}

export const priceDetail: ItineraryItem[] = [
    {
        id: "1",
        icon: LuCopyCheck,
        place: "Inclusions",
        itinerary: [
            {
                description: [
                    "5 nights/ 6 days sailing (check-in, check out 11:00)",
                    "Use of the booked cabin and bathroom",
                    "Service of 3 crew: captain, cook/stewardess, and deckhand/engineer",
                    "Running cost of yacht (fuel & berthing)",
                    "Full board including 5 x breakfast, 5x lunch, and 4x dinner, as well as fruits and snacks",
                    "Beach BBQ (if permitted by the national park)",
                    "Welcome drink",
                    "Coffee (coffee machine is available), tea, and drinking water",
                    "Snorkeling gear (mask, snorkel, 12 fins in different sizes)",
                    "Handline fishing",
                    "Trawling by crew",
                    "Linen, bath towels, and swimming towels",
                    "2 x stand-up paddle boards (shared with other guests on board)",
                    "2 x kayak (shared with other guests on board)",
                    "Accident insurance (up to 1 million THB)"
                ],
            }
        ]
    },
    {
        id: "2",
        icon: LuCopySlash,
        place: "Please do not forget to bring:",
        itinerary: [
            {
                description: [
                    "Hat or cap",
                    "Sun lotion",
                    "Sunglasses",
                    "Comfortable shoes",
                    "Camera",
                    "Waterproof bag",
                    "Swimsuit",
                ],
            }
        ]
    },
    {
        id: "3",
        icon: TbCopyMinus,
        place: "Exclusions",
        itinerary: [
            {
                description: [
                    "Airline flights, transfers, or hotels",
                    "Rental vehicles or water taxis",
                    "Meals or drinks in restaurants",
                    "National Park and entrance fees when applicable (Phi Phi Don viewpoint 50 THB, Lanta water fall 200 THB, Koh Muk 300 THB, Koh Rok & Koh Haa 400 THB, Phi Phi Leh 400 THB)",
                    "Soft drinks, beer, wine, spirits, cocktails"
                ],
            }
        ]
    },
    {
        id: "4",
        icon: TbCopyPlus,
        place: "Optional extras",
        itinerary: [
            {
                description: [
                    "Taxi transfer before or after the charter – price depending on location",
                    "Private stand up paddle board 700THB/day",
                ],
            }
        ]
    },
    {
        id: "5",
        icon: LuWine,
        place: "Drinks preordered and prepaid",
        itinerary: [
            {

                description: [
                    "Soft drinks (coke, coke zero, sprite, fanta) 30 THB per can",
                    "Local beers(Leo, Singha or Chang, Heineken alcohol free) 80 THB per can",
                    "Foreign beers (Asahi, Heineken, Carlsberg) 120 THB per can",
                    "1 pack (24 cans) of local beers (Leo, Singha or Chang) 1500 THB per pack",
                    "Wine (white or red) = 800 THB per bottle",
                    "Sparkling wine = 1200 THB per bottle",
                    "Cocktail = 290 THB per cocktail",
                    "Other alcoholic drinks on request"
                ],
            }
        ]
    },
    {
        id: "6",
        icon: LuMartini,
        place: "Drinks on board (pay what you consume)",
        itinerary: [
            {
                link: "Beverage-Menu",
                href: "/beverage-menu",

            }
        ]
    },
    {
        id: "7",
        icon: LuBed,
        place: "Cabins and onboard comfort",
        itinerary: [
            {

                description: [
                    "You’ll stay in comfortable double cabins with fans, reading lights, and plenty of natural ventilation. Each cabin is designed for rest after a day of adventure. Whether you’re sharing with a partner or a fellow traveler, your space is cozy and private."
                ],
            }
        ]
    },
    {
        id: "8",
        icon: LuUtensils,
        place: "Gourmet dining and Thai beach BBQs",
        itinerary: [
            {

                description: [
                    "Meals are a highlight. Our chef prepares authentic Thai dishes daily, alongside fresh fruit, seafood, and snacks. Highlights include a beach BBQ under the stars and one dinner on land in on a scenic beach including a fire-show (if weather permits)."
                ],
            }
        ]
    },
    {
        id: "9",
        icon: LuLeaf,
        place: "Eco-friendly sailing and activities",
        itinerary: [
            {

                description: [
                    "Enjoy snorkeling, kayaking, and paddleboarding — all included. Our Thailand cabin charter operates with eco-conscious practices: solar power, reduced plastic use, loads of sailing and ocean-friendly cleaning products. You can relax knowing your adventure is sustainable."
                ],
            }
        ]
    },

];
