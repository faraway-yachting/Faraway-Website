// src/data/home/homeDestinations.ts

import PngIcons from "@/icons/pngIcon";

export interface HomeDestinationItem {
  id: string;         
  image: string;      
  title: string;
  description: string;
}

const HomeDestinationData: HomeDestinationItem[] = [
  {
    id: "phang-nga-bay",
    title: "Phang Nga Bay",
    image: PngIcons.image2,
    description: "Home to James Bond Island, hidden lagoons, and dramatic cliffs."
  },
  {
    id: "phi-phi-island",
    title: "Phi Phi Islands", 
    image: PngIcons.image1,
    description: "Iconic Maya Bay, crystal waters, and vibrant marine life."
  },
  {
    id: "racha-islands",
    title: "Racha Islands",
    image: PngIcons.image3,
    description: "Clear water, soft sand, and excellent snorkeling."
  },
  {
    id: "phang-nga-bay",
    title: "Similan Islands",
    image: PngIcons.image4,
    description: "A diver's paradise, perfect for multi-day charters."
  },
  {
    id: "phang-nga-bay",
    title: "Butang Islands",
    image: PngIcons.image5,
    description: "Remote and untouched beauty, near the Malaysian border."
  },
  {
    id: "koh-rok",
    title: "Koh Rok & Koh Ha",
    image: PngIcons.image6,
    description: "Part of a national park, famous for turquoise lagoons and coral reefs."
  },
  {
    id: "koh-muk",
    title: "Koh Muk (Emerald Cave)",
    image: PngIcons.image7,
    description: "Swim through a secret cave to find a hidden beach once used by pirates."
  }
];

export default HomeDestinationData;
