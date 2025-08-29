import HeroSection from "@/Component/superYacht/hero"
import SuperYachtCards from "@/Component/superYacht/yachtcards"
import LuxuryYacht from "@/Component/superYacht/luxuryYacht"
import { Fragment } from "react"
import YachtIslandSlider from "@/Component/superYacht/yachtIsland"
import FunMomentsComponent from "@/Component/superYacht/funMoments"
import RentalYacht from "@/Component/superYacht/rentalYacht"
import SuperYachtFAQ from "@/Component/superYacht/FAQs"

const SuperYacht = () => {
    return (
        <Fragment>
            <HeroSection />
            <SuperYachtCards />
            <LuxuryYacht id="phi-phi-island" />
            <YachtIslandSlider />
            <FunMomentsComponent />
            <RentalYacht />
            <SuperYachtFAQ />
        </Fragment>
    )
}
export default SuperYacht