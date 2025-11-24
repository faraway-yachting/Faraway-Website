// src/data/contactData.ts
import { IconType } from "react-icons";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaLine,
    FaRegEnvelope,
} from "react-icons/fa";
import { RiMap2Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";

// ---------- FORM FIELD TYPES ----------
export interface FormField {
    id: string;
    label: string;
    type: string;
    required: boolean;
}

export const formFields: FormField[] = [
    { id: "name", label: "Your Name", type: "text", required: true },
    { id: "email", label: "Your Email", type: "email", required: true },
    { id: "phone", label: "Your Phone", type: "text", required: false },
    { id: "whatsapp", label: "WhatsApp", type: "text", required: false },
    { id: "country", label: "Country", type: "text", required: false },
    { id: "guests", label: "No. of Guests", type: "number", required: false },
    { id: "charterType", label: "Charter Type", type: "text", required: false },
    { id: "yachtType", label: "Select Yacht Type", type: "text", required: false },
    { id: "travelDate", label: "Travel Date", type: "date", required: true },
    { id: "returnDate", label: "Return Date", type: "date", required: false },
];

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
