
import { TbSailboat } from "react-icons/tb";
import { LuShieldQuestion } from "react-icons/lu";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IconType } from "react-icons";

interface WhyItem {
  id: number;
  icon: IconType;
  label: string;
  description: string;
}

export const WhyData: WhyItem[] = [
  {
    id: 1,
    icon: TbSailboat,
    label: "Verified & Trusted Yachts",
    description:
      "Every yacht is inspected & verified for top-notch quality, safety, and luxury.",
  },
  {
    id: 2,
    icon: IoCheckmarkDoneCircleSharp,
    label: "Secure & Transparent Payments",
    description:
      "Enjoy 100% secure transactions with no hidden fees — pay with confidence.",
  },
  {
    id: 3,
    icon: LuShieldQuestion,
    label: "24/7 Customer & AI Support ",
    description:
      "Live agents & AI concierge provide round-the-clock assistance for a smooth trip.",
  },
];
