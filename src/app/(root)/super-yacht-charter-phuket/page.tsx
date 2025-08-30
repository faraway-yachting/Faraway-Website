import HeroSection from "@/Component/superYacht/hero"
import SuperYachtCards from "@/Component/superYacht/yachtcards"
import LuxuryYacht from "@/Component/superYacht/luxuryYacht"
import { Fragment } from "react"
import YachtIslandSlider from "@/Component/superYacht/yachtIsland"
import FunMomentsComponent from "@/Component/superYacht/funMoments"
import RentalYacht from "@/Component/superYacht/rentalYacht"
import SuperYachtFAQ from "@/Component/superYacht/FAQs"
import DreamyYacht from "@/Component/superYacht/dreamYacht"
import PrivateYacht from "@/Component/superYacht/privateYacht"

const SuperYacht = () => {
    return (
        <Fragment>
            <HeroSection />
            <SuperYachtCards />
            <LuxuryYacht id="phi-phi-island" />
            <PrivateYacht />
            <YachtIslandSlider />
            <FunMomentsComponent />
            <RentalYacht />
            <SuperYachtFAQ />
            <DreamyYacht />
        </Fragment>
    )
}
export default SuperYacht