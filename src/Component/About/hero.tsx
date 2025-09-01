import HeroSection2 from "@/common/hero2";
import { styles } from "@/styles";

const HeroSection = () => {
    return (
        <div className={styles.bgImage}>
            <HeroSection2
                heading="About Us"
                breadcrumb="About Us"
                backgroundImage="/images/aboutimg1.png"
            />
        </div>
    )
}
export default HeroSection;