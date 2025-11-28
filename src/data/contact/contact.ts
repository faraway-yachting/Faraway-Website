// src/data/contactData.ts
import { IconType } from "react-icons";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaLine,
    FaRegEnvelope,
} from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
// ---------- CONTACT INFO TYPES ----------
export interface ContactDetail {
    icon: IconType; // React component (not JSX)
    text: string;
    title: string;
}

export const contactDetails: ContactDetail[] = [
    {
        icon: FaRegEnvelope,
        text: "booking@faraway-yachting.com",
        title: "Email",
    },
    {
        icon: FaPhoneAlt,
        text: "+66 61 2345623",
        title: "Call us"
    },
    {
        icon: FaWhatsapp,
        text: "+66 61 2345623",
        title: "Whatsapp"
    },
    {
        icon: FaLine,
        title: "Line",
        text: "+66 61 2345623",
    },
    {
        icon: TbLocation,
        text: "40/1 Moo 9 Chalong Phuket",
        title: "Our Location",
    },
];
