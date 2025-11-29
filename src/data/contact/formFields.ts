export const initialFormState = {
    name: "",
    email: "",
    phone: "",
    preferredCommunication: "",
    yachtRange: "",
    yachtType: "",
    travelDate: "",
    returnDate: "",
    guests: "",
    message: "",
};

export type FieldName = keyof typeof initialFormState;

export type FieldConfig = {
    name: FieldName;
    label: string;
    type: "text" | "email" | "tel" | "number" | "date" | "select" | "textarea";
    required?: boolean;
    options?: { value: string; label: string }[];
    gridCols?: number;
};

export const formFields: FieldConfig[] = [
    { name: "name", label: "Your Name", type: "text", required: true, gridCols: 2 },
    { name: "email", label: "Your Email", type: "email", required: true, gridCols: 2 },
    { name: "phone", label: "Phone Number", type: "tel", gridCols: 2 },
    { 
        name: "preferredCommunication", 
        label: "Preferred Communication Channel", 
        type: "select", 
        gridCols: 2,
        options: [
            { value: "whatsapp", label: "WhatsApp" },
            { value: "mail", label: "Mail" },
            { value: "line", label: "Line" }
        ]
    },
    { 
        name: "yachtRange", 
        label: "Yacht Range", 
        type: "select", 
        gridCols: 2,
        options: [
            { value: "budget", label: "Budget" },
            { value: "mid-range", label: "Midrange" },
            { value: "luxury", label: "Luxury" },
        ]
    },
    { 
        name: "yachtType", 
        label: "Select Yacht Type", 
        type: "select", 
        gridCols: 2,
        options: [
            { value: "crewed", label: "Crewed Day Charter" },
            { value: "bareboat", label: "Crewed Overnight Charter" },
            { value: "motor-yacht", label: "Bareboat Charter" }
        ]
    },
    { name: "travelDate", label: "Travel Date", type: "date", required: true, gridCols: 2 },
    { name: "returnDate", label: "Return Date", type: "date", gridCols: 2 },
    { name: "guests", label: "No. of Guests", type: "number" },
    { name: "message", label: "Any other comments or requests?", type: "textarea" },
];

// Yacht Detail Form Fields
export const yachtDetailInitialFormState = {
    name: "",
    email: "",
    whatsapp: "",
    guests: "",
    travelDate: "",
    returnDate: "",
    message: "",
};

export type YachtDetailFieldName = keyof typeof yachtDetailInitialFormState;

export type YachtDetailFieldConfig = {
    name: YachtDetailFieldName;
    label: string;
    type: "text" | "email" | "tel" | "number" | "date" | "textarea";
    required?: boolean;
    gridCols?: number;
};

export const yachtDetailFormFields: YachtDetailFieldConfig[] = [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "whatsapp", label: "WhatsApp (if available)", type: "tel" },
    { name: "guests", label: "No of guests", type: "number", required: true },
    { name: "travelDate", label: "Travel Date", type: "date", required: true, gridCols: 2 },
    { name: "returnDate", label: "Return Date", type: "date", required: true, gridCols: 2 },
    { name: "message", label: "Any other comments or requests?", type: "textarea" },
];

// Cabin Charter Form Fields (for best-of-phukets-islands-cabincharter page)
export const cabinCharterInitialFormState = {
    name: "",
    email: "",
    phone: "",
    cabinType: "",
    personInCabin: "",
    guests: "",
    travelDate: "",
    returnDate: "",
    message: "",
};

export type CabinCharterFieldName = keyof typeof cabinCharterInitialFormState;

export type CabinCharterFieldConfig = {
    name: CabinCharterFieldName;
    label: string;
    type: "text" | "email" | "tel" | "number" | "date" | "select" | "textarea";
    required?: boolean;
    options?: { value: string; label: string }[];
    gridCols?: number;
};

export const cabinCharterFormFields: CabinCharterFieldConfig[] = [
    { name: "name", label: "Your Name", type: "text", required: true, gridCols: 2 },
    { name: "email", label: "Your Email", type: "email", required: true, gridCols: 2 },
    { name: "phone", label: "Phone Number", type: "tel", gridCols: 2 },
    { 
        name: "cabinType", 
        label: "Select Cabin Type", 
        type: "select", 
        gridCols: 2,
        options: [
            { value: "single", label: "Ensuite Cabin" },
            { value: "double", label: "Non-Ensuite Cabin" },
        ]
    },
    { 
        name: "personInCabin", 
        label: "Select Person in Cabin", 
        type: "select", 
        gridCols: 2,
        options: [
            { value: "1", label: "Two Person in a Single Cabin" },
            { value: "2", label: "Single Person in a Single Cabin" },
        ]
    },
    { name: "guests", label: "No. of Guests", type: "number", gridCols: 2 },
    { name: "travelDate", label: "Travel Date", type: "date", required: true, gridCols: 2 },
    { name: "returnDate", label: "Return Date", type: "date", gridCols: 2 },
    { name: "message", label: "Locations you want to visit or any questions?", type: "textarea" },
];

