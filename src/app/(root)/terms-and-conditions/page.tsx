import TermsAndConditions from "@/Component/term&Condition/detail"
import HeroSection from "@/Component/term&Condition/hero"
import { Fragment } from "react"
import {termsAndConditionsMetadata} from "@/lib/metadata";

export const metadata = termsAndConditionsMetadata;
const TermsAndCondition = () => {
    return (
        <Fragment>
            <HeroSection />
            <TermsAndConditions />
        </Fragment>
    )
}
export default TermsAndCondition