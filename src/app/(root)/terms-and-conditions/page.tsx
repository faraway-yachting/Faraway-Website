import TermsAndConditions from "@/Component/term&Condition/detail"
import HeroSection from "@/Component/term&Condition/hero"
import { Fragment } from "react"

const TermsAndCondition = () => {
    return (
        <Fragment>
            <HeroSection />
            {/* <TableOfContents /> */}
            <TermsAndConditions />
        </Fragment>
    )
}
export default TermsAndCondition