import PngIcons from "@/icons/pngIcon";
import { priceRangeValues } from "@/data/charter/priceRangeData";
import PriceRangeContent from "@/common/broadboatContent";

const PriceRange = () => (
    <PriceRangeContent
        title="Typical Price Ranges"
        description="Whether you're planning a private boat rental in Phuket for just a day or a week-long luxury yacht charter, we offer flexible packages to match your budget and style. By understanding these factors, you can plan a Phuket yacht rental that perfectly balances your budget and expectations."
        values={priceRangeValues}
        imageSrc={PngIcons.bareboat}
        imageAlt="Yacht Charter Pricing"
    />
);
export default PriceRange;
