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
        place: "How does yacht management in Phuket work?",
        description: ` We take full responsibility for technical, operational, and financial management—maintenance, crewing, marketing, and accounting—while you retain ownership and control over key decisions.`,
    },
    {
        id:'2',
        place: "What ROI can I expect from yacht ownership in Thailand?",
        description: ` Most managed yachts achieve <strong>10–20 % annual ROI</strong>, depending on vessel type, age, and seasonality. Custom builds or cost-efficient refits can reach <strong>30 % +</strong>. `,
    },
    {
        id:'3',
        place: "Can foreigners own yachts in Phuket?",
        description: `Yes. Foreigners can own yachts through Thai-registered companies or foreign-flagged entities operating under charter licenses. We assist with compliant structures.`,
    },
    {
        id:'4',
        place: "What are the maintenance costs?",
        description: `Expect around <strong>5-10 % of the yacht’s value annually</strong>, covering haul-outs, antifouling, servicing, and crew upkeep. Preventive maintenance saves significant long-term cost.`,
    },
    {
        id:'5',
        place: "What’s included in Faraway Yachting’s management fee?",
        description: ` Our management covers administration, marketing, crew coordination, and accounting. Technical maintenance and refits are billed transparently at cost + a small handling margin. `,
    },
    {
        id:'6',
        place: " Is it better to buy new or refit an existing yacht?",
        description: ` Both work—new yachts offer warranty coverage, while refits often deliver better ROI if done efficiently. We help owners evaluate which route fits their goals.`,
    },
    {
        id:'7',
        place: "How long does it take to prepare a yacht for charter season?",
        description: `Typically <strong>6–10 weeks</strong> for import, registration, and setup—longer if refits are extensive. We recommend starting by <strong>August</strong> to be charter-ready by November.`,
    },
    {
        id:'8',
        place: " How are charters marketed and priced?",
        description: ` We leverage SEO-optimised websites, partner agencies, and direct social campaigns to target high-value clients. Prices are data-driven to balance occupancy and yield.`,
    },
    {
        id:'9',
        place: "Do you manage smaller boats or only large yachts?",
        description: `We manage a range—from 35 ft catamarans to 100 ft superyachts. Smaller vessels work best when designed for low-maintenance charter operations.`,
    },
    {
        id:'10',
        place: "What makes Phuket a strong investment location?",
        description: `Consistent tourism growth, world-class cruising grounds, skilled marine workforce, and lower running costs make Phuket one of the most profitable charter bases in Asia.`,
    },
];