import ChooseFaraway from "@/Component/managementPhuket/chooseFaraway"
import { Fragment} from "react";
import HeroSection from "@/Component/managementPhuket/hero";
import YachtManagement from "@/Component/managementPhuket/yachtManagement"
import Booking from "@/Component/managementPhuket/yachtAbout"
import PhuketAdvantage from "@/Component/managementPhuket/phuketAdvantage"
import OwnerJourney from "@/Component/managementPhuket/ownerJourney"
import TypicalReturns from "@/Component/managementPhuket/typicalreturns"
import Farawaydifference from "@/Component/managementPhuket/farawaydifference";
import Feedback from "@/Component/managementPhuket/feedback";
const YachtManagementPhuket = () => {
    
    return (
        <Fragment>
            <HeroSection />
            <ChooseFaraway />
            <YachtManagement />
            <PhuketAdvantage />
            <OwnerJourney />
            <TypicalReturns />
            <Farawaydifference />
            <Feedback />
            <Booking />
        </Fragment>
    )
}
export default YachtManagementPhuket;