import HeroSection from "@/Component/superYacht/hero"
import SuperYachtCards from "@/Component/superYacht/yachtcards"
import LuxuryYacht from "@/Component/superYacht/luxuryYacht"
import { Fragment } from "react"
import HomeDestinationCards from "@/Component/superYacht/destination"
import FunMomentsComponent from "@/Component/superYacht/funMoments"
import RentalYacht from "@/Component/superYacht/rentalYacht"
import SuperYachtFAQ from "@/Component/superYacht/FAQs"
import PrivatYacht from "@/Component/superYacht/privatYacht"
import Events from "@/Component/superYacht/celebrations"
import EliteFleet from "@/Component/superYacht/eliteFleet"
import ChooseFarway from "@/Component/superYacht/chooseFarway"
const SuperYacht = () => {
    return (
        <Fragment>
            <HeroSection />
            <SuperYachtCards />
            <SuperYachtFAQ />
            <LuxuryYacht id="phi-phi-island" />
            <EliteFleet />
            <PrivatYacht />
            {/* <PrivateYacht /> */}
            {/* <YachtIslandSlider /> */}
            <HomeDestinationCards />
            <Events />
            <FunMomentsComponent />
            <ChooseFarway />
            <RentalYacht />
        </Fragment>
    )
}
export default SuperYacht