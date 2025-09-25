export interface FAQS {
    id:string;
    place: string;
    description: string;
    link?: string;
    href?: string;
}

export const FAQContent: FAQS[] = [
    {
        id:'1',
        place: "What's the difference between a Phuket yacht rental and a yacht charter?",
        description: `A rental often refers to day trips, while a charter usually means multi-day, tailor-made experiences.`,
    },
    {
        id:'2',
        place: "Can I customize my Phuket yacht rental itinerary?",
        description: `Yes. Every trip is flexible, from snorkeling stops to luxury dining themes.`,
    },
    {
        id:'3',
        place: "Are Phuket yacht rentals suitable for families with children?",
        description: `Absolutely. Catamarans are stable and safe, with shaded areas and child-sized life jackets.`,
    },
    {
        id:'4',
        place: "Do I need sailing experience to rent a yacht in Phuket?",
        description: `No. All rentals include a licensed crew. Bareboat charters require a valid sailing license.`,
    },
    {
        id:'5',
        place: "How far in advance should I book a Phuket yacht rental?",
        description: `For peak season, book 3–6 months ahead. Off-season availability is usually more flexible.`,
    },
    {
        id:'6',
        place: "Can I book a Phuket yacht day trip?",
        description: `Yes. Half-day and full-day yacht rentals are among our most popular options, giving you a private Phuket yacht daytrip without the crowds.`,
    },
];