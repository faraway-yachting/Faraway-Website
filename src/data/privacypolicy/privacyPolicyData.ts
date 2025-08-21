import PngIcons from "@/icons/pngIcon";

// Types for Privacy Policy Data
export interface WhatWeCollectItem {
    icon: string;
    title: string;
    description: string;
}

export interface ContactData {
    title: string;
    description: string;
    email: string;
}

export interface PolicySection {
    id: string;
    title: string;
    icon?: string;
    type: 'cards' | 'bullets' | 'content' | 'contact';
    data: WhatWeCollectItem[] | string[] | string | string[] | ContactData;
    subtitle?: string;
}

// New interface for definitions
export interface DefinitionItem {
    term: string;
    definition: string;
}

// Privacy Policy Data
export const whatWeCollectData: WhatWeCollectItem[] = [
    {
        icon: PngIcons.picon1,
        title: "Personal Data:",
        description: "Name, email, phone number (only when you provide it)."
    },
    {
        icon: PngIcons.picon2,
        title: "Usage Data:",
        description: "Device details, IP address, pages visited, time spent."
    },
    {
        icon: PngIcons.picon3,
        title: "Cookies:",
        description: "To improve your experience and remember preferences."
    }
];

export const howWeUseData: string[] = [
    "Provide and improve our services.",
    "Manage your account and bookings.",
    "Contact you with updates, offers, and support.",
    "Ensure security and prevent fraud.",
    "Analyze usage and enhance our website."
];

export const dataSharingData: string[] = [
    "Service providers (for support, analysis, or communication).",
    "Affiliates & partners (to improve services or offer promotions).",
    "Legal authorities (if required by law).",
    "Business transfers (in case of merger/sale)."
];

export const yourRightsData: string[] = [
    "Access, update, or delete your data anytime.",
    "Control cookie preferences.",
    "Withdraw consent where applicable."
];

export const retentionSecurityData = {
    title: "Retention & Security",
    description: "We keep your data only as long as needed and follow strict safety measures. While no system is 100% secure, we take every precaution to protect your information."
};

export const childrenPrivacyData = {
    title: "Children's Privacy",
    description: "We do not knowingly collect data from anyone under 13. Parents may contact us for deletion if data was shared by a child."
};

export const linksData = {
    title: "Links to Other Websites",
    description: "Our website may include links to other sites we don’t operate. Once you leave our site, their privacy rules apply — not ours. We recommend reviewing the Privacy Policy of any third-party site you visit."
};

export const changesData = {
    title: "Changes to this Privacy Policy",
    description: [
        "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
        "We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.",
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
    ]
};

export const contactData: ContactData = {
    title: "Contact Us",
    description: "If you have any questions about this Privacy Policy, You can contact us:",
    email: "info@far-away.net"
};

// Definitions data for interpretation section
export const definitionsData: DefinitionItem[] = [
    {
        term: "Account",
        definition: "– Your unique login to access our services."
    },
    {
        term: "Affiliate",
        definition: "- Any entity connected to us through 50%+ ownership or control."
    },
    {
        term: "Company",
        definition: " / We / Us – FARAWAY YACHTING CO., LTD., Phuket, Thailand."
    },
    {
        term: "Cookies",
        definition: "- Small files stored on your device to improve browsing and track usage"
    },
    {
        term: "Country",
        definition: "– Thailand."
    },
    {
        term: "Device",
        definition: "– Any gadget you use to access our service (computer, phone, tablet)."
    },
    {
        term: "Personal Data",
        definition: "– Any info that identifies you directly or indirectly."
    },
    {
        term: "Service",
        definition: "– Our website and everything it offers."
    },
    {
        term: "Service Provider",
        definition: "– Third parties we work with to run, support, or analyze our service."
    },
    {
        term: "Usage Data",
        definition: "– Automatically collected data (e.g., page visit duration)."
    },
    {
        term: "Website",
        definition: "FARAWAY YACHTING, https://far-away.net/."
    },
    {
        term: "You",
        definition: "– The individual or legal entity using our services."
    }
];

// Consolidated Privacy Policy Sections
export const privacyPolicySections: PolicySection[] = [
    {
        id: "what-we-collect",
        title: "What We Collect",
        icon: PngIcons.picon4,
        type: "cards",
        data: whatWeCollectData,
        subtitle: "Privacy Policy – Your Data, Your Trust"
    },
    {
        id: "how-we-use",
        title: "How We Use It",
        icon: PngIcons.picon12,
        type: "bullets",
        data: howWeUseData,
        subtitle: "We use your data to:"
    },
    {
        id: "data-sharing",
        title: "Data Sharing",
        icon: PngIcons.picon6,
        type: "bullets",
        data: dataSharingData,
        subtitle: "We may share information only with:"
    },
    {
        id: "your-rights",
        title: "Your Rights",
        icon: PngIcons.picon7,
        type: "bullets",
        data: yourRightsData,
        subtitle: "You have the right to:"
    },
    {
        id: "retention-security",
        title: retentionSecurityData.title,
        icon: PngIcons.picon5,
        type: "content",
        data: retentionSecurityData.description
    },
    {
        id: "children-privacy",
        title: childrenPrivacyData.title,
        icon: PngIcons.picon8,
        type: "content",
        data: childrenPrivacyData.description
    },
    {
        id: "links",
        title: linksData.title,
        icon: PngIcons.picon9,
        type: "content",
        data: linksData.description
    },
    {
        id: "changes",
        title: changesData.title,
        icon: PngIcons.picon10,
        type: "content",
        data: changesData.description
    },
    {
        id: "contact",
        title: contactData.title,
        icon: PngIcons.picon11,
        type: "contact",
        data: contactData
    }
];
