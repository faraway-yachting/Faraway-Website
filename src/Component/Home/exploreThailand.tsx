import HeadingContent from "@/common/heading"
import Cards from "../Destinations/cards"
import SetSail from "@/common/yarchtcharter"
import { styles, combine } from "@/styles/common";

const ExploreThailand = () => {
    return (
        <div>
            {/* Heading Section */}
            <HeadingContent
                heading="Explore Thailand with a private Yacht"
                description="Explore Thailand's remote islands with a private yacht, enjoy exclusive dining onboard and unwind with sunset yoga on white sandy beaches. Swim in sparkling waters and create lasting memories. Book your private yacht in Phuket." />
            {/* Destination Cards */}
            <Cards />
            <div className={combine(styles.my2, styles.flexCenter)}>
                <button className={combine(styles.btnPrimary, "font-semibold", styles.margin4, "text-base px-5 py-3 rounded-lg hover:bg-[#D6AB61]")}>View More Destinations</button>
            </div>
            {/* Book Your Trip */}
            <SetSail
                bgImage="/images/homeimg6.png"
                bgColor="#034250"
                overlayOpacity={0.5}
            />
        </div>
    )
}
export default ExploreThailand