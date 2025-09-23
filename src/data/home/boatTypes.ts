import { IconType } from "react-icons";
import { LuSailboat } from "react-icons/lu";
import { IoBoatOutline } from "react-icons/io5";
import { FaShip } from "react-icons/fa";

export interface BoatType {
  id: string;
  title: string;
  description: string;
  icon: IconType;

}
export const boatTypesData: BoatType[] = [
  {
    id: "catamaran",
    title: "Sailing Catamarans",
    description: "Spacious, shaded, and stable. Perfect for families, groups, and overnight charters.",
    icon: LuSailboat,

  },
  {
    id: "sailboat",
    title: "Power Catamarans",
    description: "Fast, comfortable, and efficient. Ideal for day charters that reach Phi Phi or Phang Nga Bay.",
    icon: IoBoatOutline,

  },
  {
    id: "motor-yacht",
    title: "Luxury Motor Yachts",
    description: " Private and stylish. A premium option for smaller groups who want speed and comfort.",
    icon: FaShip,
   
  },
  {
    id: "Superyachts",
    title: "Superyachts",
    description: "The most luxurious experience available in Phuket, complete with first-class service.",
    icon: IoBoatOutline,

  },
  {
    id: "Bareboats",
    title: "Bareboats",
    description: "For licensed sailors, enjoy the freedom of captaining your own yacht and exploring at your own pace.",
    icon: FaShip,
   
  }
];
