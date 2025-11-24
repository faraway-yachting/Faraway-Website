
import HeroSection from "@/Component/phuketTaxi/hero"
import MeetingPoints from "@/Component/phuketTaxi/meetingPoints"
import TaxiPrices from "@/Component/phuketTaxi/taxiPrices"
import TaxiRules from "@/Component/phuketTaxi/taxiRules"
import { Fragment } from "react"

const Taxi = () => {
    return (
        <Fragment>
            <HeroSection />
            <TaxiPrices />
            <TaxiRules />
            <MeetingPoints />
        </Fragment>
    )
}
export default Taxi