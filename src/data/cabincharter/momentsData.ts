import PngIcons from "@/icons/pngIcon";

// Type for testimonials
export interface Testimonial {
  id: string;
  image1: string;
  image2: string;
  image3: string;
  desp: string;
  author: string;
}

// Type for yacht features
export interface YachtFeature {
  title: string;
  value: string;
  image: string;
}

// Type for catamaran details
export interface CatamaranDetail {
  label: string;
  description: string;
}

// Testimonials data
export const momentsTestimonials: Testimonial[] = [
  {
    id: "1",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.profile1,
    desp: "It was my first experience on a yacht and the most unforgettable in my life. Thanks to Flo and Captain Sunee for that! We spent 7 days at the sea and, to be honest, we really didn't want it to end. We visited many beautiful islands, snorkeled and peered into the starry sky and met the best sunrises in my life. Looking forward to our next adventure with Captain Sunee and Faraway",
    author: "Анастасия Ткаченко",
  },
  {
    id: "2",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.profile2,
    desp: "6 of us booked a 1 week private Cat charter on Amadeus with Faraway, and it was the best holiday ever. We came from Finland and Canada and from the moment we were picked up from our hotel in Rawai to the final disembarking in Chalong, we were totally spoiled by the amazing crew, top notch food, spacious Mumby cat and detailed planning/logistics and of course all the beautiful",
    author: "Peter Koning",
  },
  {
    id: "3",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.profile3,
    desp: "Lifetime memories!!! We spent 6 days and 5 nights on the Mozart with our friends and had the privilege of experiencing this unforgettable sailing trip in the Andaman Sea with Flo and Oil. Starting with the welcome, everything was great. We drove to the most beautiful beaches. Everything without stress and we were always a little ahead of many tourists",
    author: "Ulrike Zahn",
  },
  {
    id: "4",
    image1: PngIcons.quote,
    image2: PngIcons.star,
    image3: PngIcons.profile4,
    desp: "We just returned from an exceptional 6 day boat trip aboard the Amadeus to the islands around Phuket. I highly recommend this trip for anyone who is an avid snorkeler, enjoys delicious Thai food and loves watching sunsets and sunrises in beautiful coves with new friends. The crew - Sunee, Milk and Bus - were truly and absolutely outstanding. We booked a double cabin",
    author: "Claudia Williams",
  },
];

// Yacht features data
export const yachtFeatures: YachtFeature[] = [
  { title: "Design", value: "Mumby 48", image: PngIcons.icon4 },
  { title: "Year Built", value: "2013", image: PngIcons.icon5 },
  { title: "Length", value: "48 ft (14.5 m)", image: PngIcons.icon6 },
  { title: "No. of guests", value: "Max. 8", image: PngIcons.icon7 },
];

// Catamaran details data
export const catamaranDetails: CatamaranDetail[] = [
  {
    label: "Cabins",
    description:
      "3 en-suite double queen-size cabins, 1 double queen-size cabin with nearby bathroom, and 2 forward single cabins.",
  },
  {
    label: "Comfort",
    description:
      "The cabins have double fans, reading lights, mosquito screens, and there are 4 bathrooms with shower. There is also an additional deck shower, sun protection from a fixed bimini and flexible awning, and an espresso machine.",
  },
  {
    label: "Entertainment",
    description:
      "audio CD/MP4 player, i-pod docking station, outside loudspeakers, audio library. You will NOT find TV and video on this yacht !!!!!",
  },
  {
    label: "Standard",
    description:
      "8-person tender with outboard, fishing equipment, snorkeling equipment, 2 kayaks & 1 paddleboard and safety equipment",
  },
  {
    label: "Sailing",
    description: "cruising speed 8 knots, top speed FAST",
  },
  {
    label: "Special",
    description:
      "Amadeus is known for its high standard of Thai and European catering and Italian style espresso's. Free Thai cooking lessons, if interested! Your holiday on Amadeus will be a relaxing and culinary experience.",
  },
];

// Thumbnails data
export const yachtThumbnails: string[] = [
  PngIcons.sailImage,
  PngIcons.sailImage1,
  PngIcons.sailImage2,
  PngIcons.sailImage3,
  PngIcons.sailImage3,
];

// Type for pricing options
export interface PricingOption {
  title: string;
  price: string;
  per: string;
  type: string;
  features: string[];
}

// Pricing data
export const pricingOptions: PricingOption[] = [
  {
    title: "Oceanview Duo – Ensuite Cabin",
    price: "€1,199",
    per: "per person",
    type: "Double Occupancy",
    features: [
      "Private ensuite bathroom",
      "Ideal for couples or friends",
      "Wake up to the sea every morning",
    ],
  },
  {
    title: "Solo Serenity – Ensuite Cabin",
    price: "€1,599",
    per: "per person",
    type: "Single Occupancy",
    features: [
      "Enjoy your own ensuite space",
      "No sharing, just serenity",
      "Premium comfort for solo travelers",
    ],
  },
  {
    title: "Shared Bliss – Non-Ensuite Cabin",
    price: "€1,099",
    per: "per person",
    type: "Double Occupancy",
    features: [
      "Budget-friendly comfort",
      "Shared facilities",
      "Great for easy-going duos",
    ],
  },
  {
    title: "Private Retreat – Non-Ensuite Cabin",
    price: "€1,499",
    per: "per person",
    type: "Single Occupancy",
    features: [
      "Simple and peaceful stay",
      "Shared facilities, personal space",
      "Ideal for quiet solo explorers",
    ],
  },
];

// Type for sea escape features
export interface SeaEscapeFeature {
  icon: any; // React component type
  title: string;
  desc: string;
}
// Sea escape features data
export const seaEscapeFeatures: SeaEscapeFeature[] = [
  {
    icon: "LuTreePalm",
    title: "Island-Hopping Bliss",
    desc: "Discover iconic spots like Koh Phi Phi, Koh Lanta, Koh Rok & more—all in one unforgettable trip.",
  },
  {
    icon: "TbWheel",
    title: "Picture-Perfect Views",
    desc: "From hidden lagoons to mountaintop lookouts, get ready for the best photo ops in Thailand.",
  },
  {
    icon: "LuUtensilsCrossed",
    title: "Delicious Dining",
    desc: "Savor authentic Thai cuisine, beach BBQs, and a special dinner at a local restaurant.",
  },
  {
    icon: "LuOrigami",
    title: "All-Inclusive Comfort",
    desc: "Sleep in cozy cabins, relax on deck, and let a professional 3-person crew handle everything.",
  },
];
