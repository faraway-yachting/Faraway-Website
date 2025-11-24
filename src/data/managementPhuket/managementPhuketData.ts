import { TbSailboat } from "react-icons/tb";
import { LuShieldQuestion } from "react-icons/lu";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";
import { IconType } from "react-icons";
import PngIcons from "@/icons/pngIcon";
// Yacht Management Interfaces and Data
export interface YachtManagementItem {
  id: string;
  category: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
}

export const yachtManagementData: YachtManagementItem[] = [
  {
    id: "Technical-&-Maintenance",
    category: "Technical & Maintenance",
    description: ["Preventive maintenance is the backbone of profitable yacht management in Phuket.",
      "We plan and document every service—antifouling, engine work, electrical upgrades, refits, and safety checks—so issues are solved before they become breakdowns. All works are recorded in shared maintenance sheets for full transparency."],
    imageSrc: PngIcons.mYacht2,
    imageAlt: "Hot Chilli Power Catamaran sailing on blue water"
  },
  {
    id: "Crewing&HR",
    category: "Crewing & HR",
    description: ["A great crew makes or breaks guest experience. We recruit, train, and manage qualified captains, deckhands, and chefs, ensuring proper visas, contracts, and insurance. During high season, we scale teams efficiently while keeping payroll predictable."],
    imageSrc: PngIcons.mYacht3,
    imageAlt: "Luxury Sailing Catamaran with spacious deck"
  },
  {
    id: "Marketing&Bookings",
    category: "Marketing & Bookings",
    description: ["Faraway Yachting is among Phuket's most visible charter brands.",
      "Your yacht is promoted on our own high-converting websites and through global agency partners. We focus on overnight charters and power catamarans, niches with strong margins and repeat clientele."],
    imageSrc: PngIcons.mYacht4,
    imageAlt: "Super Yacht with luxury amenities"
  },
  {
    id: "Finance & Compliance",
    category: "Finance & Compliance",
    description: ["We manage invoicing, cash flow, VAT compliance, and insurance claims.",
      "Each owner receives detailed monthly reports showing revenue, expenses, and ROI projections. No hidden costs—ever."],
    imageSrc: PngIcons.mYacht5,
    imageAlt: "Super Yacht with luxury amenities"
  },
  {
    id: "Refits & Upgrades",
    category: "Refits & Upgrades",
    description: ["Need a refresh? We coordinate everything from hull paint and teak work to electronics and hybrid power conversions. Quality control and cost efficiency come first."],
    imageSrc: PngIcons.mYacht6,
    imageAlt: "Super Yacht with luxury amenities"
  }
];
// Why Choose Faraway Interfaces and Data
interface WhyChooseItem {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const WhyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    icon: TbSailboat,
    title: "Proven Track Record",
    description: "Expanded from two to six yachts in just three years."
  },
  {
    id: 2,
    icon: LuShieldQuestion,
    title: "Specialised in Phuket Yacht Management",
    description: "Deep understanding of Thailand's charter market, laws, and logistics."
  },
  {
    id: 3,
    icon: IoCheckmarkDoneCircleSharp,
    title: "Owner-Aligned Philosophy",
    description: "We often co-invest—your success is literally our success."
  },
  {
    id: 4,
    icon: MdStars,
    title: "Transparent Reporting",
    description: "Monthly P&L, maintenance logs, and real-time communication."
  },
  {
    id: 5,
    icon: HiMapPin,
    title: "Sustainability in Action",
    description: "Solar and 48V electrical systems cut fuel use by up to 40%."
  }
];
