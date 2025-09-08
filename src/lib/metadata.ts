import type { Metadata } from "next";
import { fetchYachtBySlug } from "./api";

const BASE_URL = "https://faraway-psi.vercel.app";

// Home Page Metadata
export const homeMetadata: Metadata = {
  title: "Yacht Charter Phuket – 30 Years & 750+ ★★★★★ Reviews",
  description: "Book your Yacht Charter Phuket in style with Faraway Yachting. 30 years of excellence, 750+ ★★★★★ reviews. Luxury catamarans, crew & island adventures await.",
  openGraph: {
    title: "Yacht Charter Phuket – 30 Years & 750+ ★★★★★ Reviews",
    description: "Book your Yacht Charter Phuket in style with Faraway Yachting. 30 years of excellence, 750+ ★★★★★ reviews. Luxury catamarans, crew & island adventures await.",
    url: `${BASE_URL}/`,
    siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/homeimg1.png`,
        width: 1200,
        height: 630,
        alt: "Phuket Yacht Charter - Luxury Yacht Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Charter Phuket – 30 Years & 750+ ★★★★★ Reviews",
    description: "Book your Yacht Charter Phuket in style with Faraway Yachting. 30 years of excellence, 750+ ★★★★★ reviews. Luxury catamarans, crew & island adventures await.",
    images: [`${BASE_URL}/images/homeimg1.png`],
  },
};

// Bareboat Charter Page Metadata
export const bareboatMetadata: Metadata = {
  title: "Bareboat Charter Thailand – Freedom to Sail Anywhere",
  description: "Discover total independence on the seas of Thailand. No crew, no limits—just you, your yacht, and endless island adventures. Start your bareboat journey today.",
  openGraph: {
    title: "Bareboat Charter Thailand – Freedom to Sail Anywhere",
    description: "Discover total independence on the seas of Thailand. No crew, no limits—just you, your yacht, and endless island adventures. Start your bareboat journey today.",
    url: `${BASE_URL}/bareboat-charter-thailand`,
    siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/boatimg1.png`,
        width: 1200,
        height: 630,
        alt: "Bareboat Charter Thailand - Self-Skippered Yacht",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bareboat Charter Thailand – Freedom to Sail Anywhere",
    description: "Discover total independence on the seas of Thailand. No crew, no limits—just you, your yacht, and endless island adventures. Start your bareboat journey today.",
    images: [`${BASE_URL}/images/boatimg1.png`],
  },
};

// Cabin Charter Page Metadata
export const cabinCharterMetadata: Metadata = {
  title: "Cabin Charter Phuket – Relax, Explore & Sail in Style",
  description: "Escape the crowds with a Phuket cabin charter. Discover hidden islands, savor Thai cuisine, and enjoy a friendly crew on your unforgettable journey",
  openGraph: {
    title: "Cabin Charter Phuket – Relax, Explore & Sail in Style",
    description: "Escape the crowds with a Phuket cabin charter. Discover hidden islands, savor Thai cuisine, and enjoy a friendly crew on your unforgettable journey",
    url: `${BASE_URL}/best-of-phukets-islands-cabincharter`,
    siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/charterimg_1.png`,
        width: 1200,
        height: 630,
        alt: "Cabin Charter Phuket - Luxury Catamaran Cruise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabin Charter Phuket – Relax, Explore & Sail in Style",
    description: "Escape the crowds with a Phuket cabin charter. Discover hidden islands, savor Thai cuisine, and enjoy a friendly crew on your unforgettable journey",
    images: [`${BASE_URL}/images/cabout_1.png`],
  },
};

// Crewed Yacht Page Metadata
export const crewedYachtMetadata: Metadata = {
  title: "Yacht Charter Phuket – Book Your Luxury Escape Today",
  description: "Experience Phuket in style with private yacht charters, full crew, and custom island-hopping adventures. Reserve your luxury escape now.",
  openGraph: {
    title: "Yacht Charter Phuket – Book Your Luxury Escape Today",
    description: "Experience Phuket in style with private yacht charters, full crew, and custom island-hopping adventures. Reserve your luxury escape now.",
    url: `${BASE_URL}/yacht-charter-phuket`,
    siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/crewedimg.png`,
        width: 1200,
        height: 630,
        alt: "Crewed Yacht Charter Phuket - Professional Crew",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Charter Phuket – Book Your Luxury Escape Today",
    description: "Experience Phuket in style with private yacht charters, full crew, and custom island-hopping adventures. Reserve your luxury escape now.",
    images: [`${BASE_URL}/images/crewedimg.png`],
  },
};

// Contact Page Metadata
export const contactMetadata: Metadata = {
  title: "Contact Faraway Yachting – Your Luxury Charter Experts",
  description: "Contact Faraway Yachting today. With 30 years in business and over 750 ★★★★★ reviews, we're Phuket's trusted yacht charter experts. Let's plan your journey.",
  openGraph: {
    title: "Contact Faraway Yachting – Your Luxury Charter Experts",
    description: "Contact Faraway Yachting today. With 30 years in business and over 750 ★★★★★ reviews, we're Phuket's trusted yacht charter experts. Let's plan your journey.",
    url: `${BASE_URL}/contact`,
    siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/Cimage1.png`,
        width: 1200,
        height: 630,
        alt: "Contact Faraway Yachting - Phuket Yacht Charter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Faraway Yachting – Your Luxury Charter Experts",
    description: "Contact Faraway Yachting today. With 30 years in business and over 750 ★★★★★ reviews, we're Phuket's trusted yacht charter experts. Let's plan your journey.",
    images: [`${BASE_URL}/images/contactbg.png`],
  },
};

// Dynamic Yacht Metadata Generation
export async function generateYachtMetadata(slug: string, yachtType?: 'crewed' | 'bareboat'): Promise<Metadata> {
  try {
    const response = await fetchYachtBySlug(slug);
    const yacht = response.data?.yachts?.[0] || response.data?.yachts;
    
    if (!yacht) {
      return {
        title: "Yacht Charter Phuket – Far Away Phuket Yachts Charters",
        description: "Discover luxury yacht charters in Phuket with Far Away Phuket Yachts Charters. Experience the beauty of Thailand's waters with our premium yacht services.",
      };
    }

    // Determine yacht type and appropriate URL
    const type = yachtType || yacht.type?.toLowerCase();
    const baseUrl = type === 'bareboat' ? 'bareboat' : 'crewed_boats';
    const url = `${BASE_URL}/${baseUrl}/${slug}`;

    // Generate dynamic title
    const title = `${yacht.title} – Far Away Phuket Yachts Charters`;
    
    // Generate fully dynamic description with varied starting phrases
    const charterType = type === 'bareboat' ? 'bareboat charter' : 'yacht charter';
    const yachtTypeName = yacht.type?.toLowerCase() || 'yacht';
    const length = yacht.length || 'luxury';
    const dayGuests = yacht.passengerDayTrip || 'multiple';
    const nightGuests = yacht.passengerNightTrip || 'multiple';
    const year = yacht.year || '';
    const yearText = year ? ` (${year})` : '';
    
    // Array of varied starting phrases
    const startingPhrases = [
      `Discover the ultimate luxury aboard`,
      `Set sail in style with`,
      `Embark on an unforgettable journey aboard`,
      `Indulge in premium comfort on`,
      `Explore Thailand's waters aboard`,
      `Sail away in luxury with`,
      `Experience the finest hospitality on`,
      `Cruise in elegance aboard`,
      `Unwind in opulence on`,
      `Adventure awaits aboard`
    ];
    
    // Select a random starting phrase based on yacht title for consistency
    const titleHash = yacht.title.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0);
    const selectedPhrase = startingPhrases[titleHash % startingPhrases.length];
    
    // Create dynamic description with yacht details
    let description = `${selectedPhrase} ${yacht.title}${yearText}, a ${length}ft ${yachtTypeName} yacht perfect for ${dayGuests} day guests`;
    
    // Add night capacity if different from day capacity
    if (nightGuests !== dayGuests) {
      description += ` and ${nightGuests} overnight guests`;
    }
    
    // Add yacht type specific features
    if (type === 'bareboat') {
      description += `. Sail independently through Thailand's stunning waters with our premium ${charterType} service`;
    } else {
      description += `. Enjoy full crew service, gourmet meals, and personalized island-hopping adventures`;
    }
    
    // Add call to action
    description += `. Book your Phuket ${charterType} with Far Away Phuket Yachts Charters - 30 years of excellence, 750+ ★★★★★ reviews.`;

    return {
      title,             
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "Faraway Yachting",
        images: [
          {
            url: yacht.primaryImage,
            width: 1200,
            height: 630,
            alt: `${yacht.title} - Luxury Yacht Charter Phuket`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [yacht.primaryImage],
      },
    };
  } catch (error) {
    console.error('Error generating yacht metadata:', error);
    return {
      title: "Yacht Charter Phuket – Far Away Phuket Yachts Charters",
      description: "Discover luxury yacht charters in Phuket with Far Away Phuket Yachts Charters. Experience the beauty of Thailand's waters with our premium yacht services.",
    };
  }
}
