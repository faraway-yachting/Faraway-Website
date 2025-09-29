import PrivateYachtContent from "@/common/privateYachtContent";
import PngIcons from "@/icons/pngIcon";
import { rentalCostData } from "@/data/charter/rentalCostData";

const RentalCost = () => {
  const rentalCostInfo = {
    title: rentalCostData.title,
    description: rentalCostData.description,
    heading: rentalCostData.heading,
    imageSrc: PngIcons.privateyact,
    imageAlt: "Phuket Yacht Rental Cost",
    features: rentalCostData.features
  };

  return <PrivateYachtContent {...rentalCostInfo} />;
};

export default RentalCost;
