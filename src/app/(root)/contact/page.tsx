import ContactSection from "@/Component/Contact"
import { Fragment } from "react"
import { contactMetadata } from "@/lib/metadata";

export const metadata = contactMetadata;
const Contact = () => {
    return (
        <Fragment>
            <ContactSection />
        </Fragment>
    )
}
export default Contact