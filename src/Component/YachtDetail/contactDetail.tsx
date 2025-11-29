"use client";
import React from "react";
import { Yacht } from "../YachtDetail/hero";
import { styles, combine } from "@/styles";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/common/contactForm";
import { 
    yachtDetailInitialFormState, 
    yachtDetailFormFields, 
    type YachtDetailFieldName 
} from "@/data/contact/formFields";

type Props = {
    data: Yacht | null;
};

const ContactDetail: React.FC<Props> = ({ data }) => {
    const handleFormSubmit = (formData: Record<YachtDetailFieldName, string>) => {
        // Handle form submission here
        console.log("Yacht inquiry submitted:", formData);
    };

    return (
        <div id="contact-detail" className="bg-white sticky rounded-lg p-3 w-full border-2 border-zink">
            <div className="flex flex-col items-center justify-center text-center">
                <h5 className={combine("font-playfair text-[#034250] font-bold text-[16px] md:text-[15px] lg:text-[18px] xl:text-[22px]")}>
                    {data?.title}
                </h5>
                <h3 className={combine("text-zink mt-1", styles.p4)}>
                    Looking for a yacht charter?
                </h3>
                <a
                    href="tel:+66612345623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combine("text-zink font-inter mt-2 flex items-center hover:text-[#D6AB62] ", styles.p4)}
                >
                    <span className="text-base font-semibold me-2"><FaPhoneAlt /></span>+66 61 234 5623
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combine("text-zink font-inter flex items-center mt-1 hover:text-[#D6AB62] ", styles.p4)}
                >
                    <span className="text-xl font-semibold me-2"><FaWhatsapp /></span>+66 61 234 5623
                </a>
            </div>

            {/* Contact Form */}
            <div className="mt-3 lg:mt-4 xl:mt-2 w-full">
                <ContactForm
                    formFields={yachtDetailFormFields}
                    initialFormState={yachtDetailInitialFormState}
                    onSubmit={handleFormSubmit}
                    submitButtonText="Submit"
                    formSpacing="space-y-1"
                    centerButton={true}
                />
            </div>
        </div>
    );
};

export default ContactDetail;
