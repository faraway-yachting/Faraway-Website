
import { TbSailboat } from "react-icons/tb";
import { LuShieldQuestion } from "react-icons/lu";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";
import { RiServiceFill } from "react-icons/ri";
import { IconType } from "react-icons";

interface WhyItem {
  id: number;
  icon: IconType;
  label: string;
  link?: string[];
  href?: string[];
  description: string;
}

export const WhyData: WhyItem[] = [
  {
    id: 1,
    icon: TbSailboat,
    label: "Experienced Phuket Operator  ",
    description:
      "Trusted with years of yacht charter expertise.",
  },
  {
    id: 2,
    icon: IoCheckmarkDoneCircleSharp,
    label: "Tailor-Made Experiences ",
    description:
      "Every charter is private and customized.",
  },
  {
    id:3,
    icon: RiServiceFill,
    label: "Full Service  " ,
    description:
      "From itinerary planning to catering, everything is taken care of.",
  },
  {
    id: 4,
    icon: HiMapPin,
    label: "Local Knowledge" ,
    description:
      "Expert crew with deep experience in Thailand's waters.",
  },

  {
    id: 5,
    icon: MdStars,
    label: "Proven Reputation " ,
    description:
      "Over 750 reviews with a 5 star average on Google and TripAdvisor.",
      link:[
        "GOOGLE REVIEWS" ,
      "TRIPADVISOR REVIEWS",
      ],
      href:[
        "https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8254214,98.3448494,18z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D",
        "https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html"
      ]
  },

];
