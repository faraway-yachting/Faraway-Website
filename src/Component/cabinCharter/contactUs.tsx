"use client";
import { RefObject } from "react";
import { styles, combine } from "@/styles";
import ContactForm from "@/common/contactForm";
import { 
    cabinCharterInitialFormState, 
    cabinCharterFormFields, 
    type CabinCharterFieldName 
} from "@/data/contact/formFields";

interface ContactUsProps {
    sectionRef: RefObject<HTMLDivElement | null>;
}

const ContactUs = ({ sectionRef }: ContactUsProps) => {
    const handleFormSubmit = (formData: Record<CabinCharterFieldName, string>) => {
        // Handle form submission here
        console.log("Booking Request submitted:", formData);
    };

    return (
        <div ref={sectionRef}>
            <section className={combine("bg-white", styles.py4, styles.px3)}>
                <div className={combine(" bg-white", styles.container)}>
                    <div className="col-span-12 lg:col-span-7 mx-auto">
                        <h2 className={combine("text-center font-bold text-zink mb-7", styles.h2)}>
                            Booking Request
                        </h2>
                        
                        <ContactForm
                            formFields={cabinCharterFormFields}
                            initialFormState={cabinCharterInitialFormState}
                            onSubmit={handleFormSubmit}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
