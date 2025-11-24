import HeadingContent from "@/common/heading"
import HomeDestinationCards from "./homeDestinationCards"
// import SetSail from "@/common/yarchtcharter"
import { styles, combine, Button } from "@/styles";

const ExploreThailand = () => {
    return (
        <div>
            {/* Heading Section */}
            <HeadingContent
                heading="Destinations in the Andaman Sea"
                description="A <strong>Phuket yacht charter</strong> gives you access to some of the world’s most iconic islands and hidden gems" />
            {/* Destination Cards */}
            <HomeDestinationCards />
            <div className={combine(styles.my2, styles.flexCenter)}>
                <Button 
                href="/magical-destinations-with-private-yacht-in-phuket"
                    variant="primary"
                >
                    View More Destinations
                </Button>
            </div>
        </div>
    )
}
export default ExploreThailand