import { IconType } from "react-icons";
import { FaClock, FaCar, FaHourglassHalf } from "react-icons/fa";
import PngIcons from "@/icons/pngIcon";
// Taxi Rules Interface
export interface TaxiRule {
  icon: IconType;
  text: string;
}

// Taxi Price Card Interface
export interface TaxiPriceCard {
  price: number;
  locations: string[];
  image: string;
}

// Hero Section Data Interface
export interface HeroData {
  heading: string;
  subheading: string;
  description: string;
  backgroundImage: string;
  title: string;
  subtitle: string;
}

// Meeting Points Data Interface
export interface MeetingPointLink {
  label: string;
  href: string;
}

export interface MeetingPointsData {
  heading: string;
  links: MeetingPointLink[];
  reminderText: string;
  closingText: string;
}

// Taxi Rules Data
export const taxiRules: TaxiRule[] = [
  { 
    icon: FaClock, 
    text: "Drivers <strong>normally arrive 15 minutes early</strong> to the booked time" 
  },
  { 
    icon: FaCar, 
    text: "They can <strong>wait up to 15 minutes</strong> for free after the booked time" 
  },
  { 
    icon: FaHourglassHalf, 
    text: "After that 15 minutes, waiting time is <strong>charged at 200 THB per hour!</strong>" 
  },
  { 
    icon: FaCar, 
    text: "If the delay is longer, the driver <strong>may need to leave</strong> to stay on schedule with other bookings & you need to wait for another taxi" 
  },
];

// Important Reminder Data
export const importantReminder = {
  title: "Important Reminder About Delays",
  description: "If guests are delayed—whether using their own taxi or one booked through us",
  warning: "👉 Charter hours cannot be extended!!!!!!!!"
};

// Taxi Prices Data
export const taxiPrices: TaxiPriceCard[] = [
  { 
    price: 800, 
    locations: ["Rawai", "Kata", "Karon"], 
    image: PngIcons.timg2 
  },
  { 
    price: 900, 
    locations: ["Patong", "Thalang Circle", "Phuket Town", "Cape Panwa", "Ao Yon", "Nai Harn", "Nui Beach"], 
    image: PngIcons.timg3 
  },
  { 
    price: 1000, 
    locations: ["Surin Beach", "Kamala", "Ao Yamoo"], 
    image: PngIcons.timg4 
  },
  { 
    price: 1100, 
    locations: ["Airport", "Bang Tao", "Nai Yang", "Pa Sak", "Ao Por"], 
    image: PngIcons.timg5 
  },
  { 
    price: 1200, 
    locations: ["Nai Thon", "Layan"], 
    image: PngIcons.timg6 
  },
  { 
    price: 1400, 
    locations: ["Mai Khao"], 
    image: PngIcons.timg7 
  },
  { 
    price: 4700, 
    locations: ["Khao Sok"], 
    image: PngIcons.timg8 
  },
  { 
    price: 6000, 
    locations: ["Donsak Pier"], 
    image: PngIcons.timg9 
  },
  { 
    price: 2000, 
    locations: ["Na Tai"], 
    image: PngIcons.timg10 
  },
  { 
    price: 2700, 
    locations: ["Khao Lak (South)"], 
    image: PngIcons.timg11 
  },
  { 
    price: 3200, 
    locations: ["Khao Lak (North)"], 
    image: PngIcons.timg12 
  },
  { 
    price: 3700, 
    locations: ["Ao Nang"], 
    image: PngIcons.timg13 
  },
];

// Hero Section Data
export const heroData: HeroData = {
  heading: "Getting to Faraway Yachting",
  subheading: "Easy Phuket Taxi Transfers to Chalong Pier",
  description: "Planning your Phuket yacht charter with us? We're here to make your journey smooth from anywhere on the island. Whether you're starting from Patong, Phuket Town, or the airport, we'll guide you on the best ways to reach our base at Chalong Pier.",
  backgroundImage: "/images/timg14.png",
  title: "Taxi Options, Prices, and What to Expect",
  subtitle: "You can choose between local taxi apps (Grab, Bolt) or book a private transfer through us."
};

// Meeting Points Data
export const meetingPointsData: MeetingPointsData = {
  heading: "Booking Your Taxi and Meeting Points",
  links: [
    {
      label: "DAYCHARTER MEETING POINT",
      href: "/daycharter-meeting"
    },
    {
      label: "OVERNIGHT CHARTER MEETING POINT",
      href: "/overnight-charter-meeting"
    }
  ],
  reminderText: "Just remember, if you choose to book independently and there's a delay, we can't extend your charter hours. If you book through us, we'll help ensure everything stays on schedule as much as possible.",
  closingText: "Feel free to reach out with any questions or to arrange your taxi in advance. We're here to make sure your Phuket yacht charter experience is seamless from start to finish!"
};

// Additional Information Data
export const additionalInfo = {
  grabBoltWarning: "If you prefer to use Grab or Bolt, that's totally fine—just be aware that in high season, these apps might cancel on you last minute. It's not uncommon for them to cancel several times, so we strongly recommend booking at least half an hour earlier than you think you need to arrive. This way you won't lose any valuable charter time.",
  bookingAdvice: "If you book through us and there's any unexpected delay on their end, we'll make sure to help make up for lost time. You need to book at least one day in advance wit us so we can arrange the schedule for the taxi the next day."
};

// Map Image Data
export const mapImage = {
  src: "/images/land4.png",
  alt: "Taxi service map"
};

