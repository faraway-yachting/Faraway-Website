import PngIcons from "@/icons/pngIcon";
import { broadboatValues } from "@/data/destination/broadboatData";
import BroadboatContent from "@/common/broadboatContent";

const BroadBoat = () => (
    <BroadboatContent
        title="Bareboat Charter Phuket"
        description="At Faraway Yachting, we believe your holiday should be more than a getaway—it should be an unforgettable escape."
        values={broadboatValues}
        imageSrc={PngIcons.bareboat}
        imageAlt="Bareboat Charter"
    />
);
export default BroadBoat;
