import ContactBanner from "@/common/contactbanner";
import HeadingContent from "@/common/heading"
import { styles, combine } from "@/styles";

const About = () => {
    return (
        <div className={combine(styles.my3, styles.pb1)}>
            {/* The Heading Section fetch from Common file */}
            {/* <HeadingContent
                heading="Book Your Private Yacht In Phuket"
                description="We specialize in private yacht charters — from luxury day trips to Phi Phi and Phang Nga Bay to exclusive overnight and cabin charters across Thailand’s most beautiful islands." /> */}
            <div className="mt-4">
                {/* Contact Detail section */}
                <ContactBanner />
            </div>
        </div>
    )
}
export default About