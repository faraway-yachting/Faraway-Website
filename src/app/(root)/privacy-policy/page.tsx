import About from "@/Component/privacyPolicy/about"
import InfoSection from "@/Component/privacyPolicy/interpretation"
import PolicyInfo from "@/Component/privacyPolicy/policy"
import { Fragment } from "react"

const PrivacyPolicy = () => {
    return (
        <Fragment>
            <About />
            <InfoSection />
            <PolicyInfo />
        </Fragment>
    )
}
export default PrivacyPolicy