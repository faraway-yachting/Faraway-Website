import ContactBanner from "@/common/contactbanner";
import HeadingContent from "@/common/heading"
import { styles, combine } from "@/styles";

const About = () => {
    return (
        <div className={combine(styles.my3, styles.pb1)}>
            {/* The Heading Section fetch from Common file */}
            <HeadingContent
                heading="Book Your Private Yacht In Phuket"
                description="Book your private yacht in Phuket for a luxurious and unforgettable sailing experience! Explore the stunning islands, crystal-clear waters and hidden gems of this tropical paradise in style. Book Now!" />
            <div className="mt-4">
                {/* Contact Detail section */}
                <ContactBanner />
            </div>
        </div>
    )
}
export default About