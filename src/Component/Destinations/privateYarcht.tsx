import PrivateYachtContent from "@/common/privateYachtContent";
import PngIcons from "@/icons/pngIcon";
import { privateYachtValues } from "@/data/destination/broadboatData";

const PrivateYacht = () => {
  const privateYachtData = {
    title: "Private Yacht in Phuket",
    description: "At Faraway Yachting, we believe your holiday should be more than a getaway—it should be an unforgettable escape.",
    imageSrc: PngIcons.privateyact,
    imageAlt: "Private Yacht",
    features: privateYachtValues
  };

  return <PrivateYachtContent {...privateYachtData} />;
};

export default PrivateYacht;
