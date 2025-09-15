import type { Metadata } from "next";
import { fetchYachtBySlug } from "./api";
import { getFrontendUrl } from "./env";

const BASE_URL = getFrontendUrl();

// Helper function to get the best available image for a yacht
const getYachtImage = (yacht: any): string => {
  // Check if primary image exists and is not empty
  if (yacht?.primaryImage && yacht.primaryImage.trim() !== '') {
    return yacht.primaryImage;
  }

  
  // Use fallback image
  const fallbackImage = `${BASE_URL}/images/homeimg1.png`;
  return fallbackImage;
};
// Home Page Metadata
export const homeMetadata: Metadata = {
  title: "Yacht Charter Phuket – 30 Years & 750+ ★★★★★ Reviews",
  description: "Book your Yacht Charter Phuket in style with Faraway Yachting. 30 years of excellence, 750+ ★★★★★ reviews. Luxury catamarans, crew & island adventures await.",
  openGraph: {
    title: "Yacht Charter Phuket – 30 Years & 750+ ★★★★★ Reviews",
    description: "Book your Yacht Charter Phuket in style with Faraway Yachting. 30 years of excellence, 750+ ★★★★★ reviews. Luxury catamarans, crew & island adventures await.",
    url: `${BASE_URL}/`,
    // siteName: "Faraway Yachting",
        images: [
          {
            url: `${BASE_URL}/images/homeimg1.png`,
            width: 800,
            height: 600,
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
    // siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/boatimg1.png`,
        width: 800,
        height: 600,
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
    // siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/charterimg.png`,
        width: 800,
        height: 600,
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
    images: [`${BASE_URL}/images/charterimg.png`],
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
    // siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/crewedimg.png`,
        width: 800,
        height: 600,
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
    // siteName: "Faraway Yachting",
    images: [
      {
        url: `${BASE_URL}/images/cimg2.png`,
        width: 800,
        height: 600,
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
    images: [`${BASE_URL}/images/cimg2.png`],
  },
};

// Terms and Conditions Page Metadata
export const termsAndConditionsMetadata: Metadata = {
  title: "Terms and Conditions – Faraway Yachting Charter Policies",
  description: "Read our comprehensive terms and conditions for yacht charter services in Phuket. Clear policies on bookings, cancellations, safety, and your rights as our valued customer.",
  openGraph: {
    title: "Terms and Conditions – Faraway Yachting Charter Policies",
    description: "Read our comprehensive terms and conditions for yacht charter services in Phuket. Clear policies on bookings, cancellations, safety, and your rights as our valued customer.",
    url: `${BASE_URL}/terms-and-conditions`,
    images: [
      {
        url: `${BASE_URL}/images/logo.png`,
        width: 800,
        height: 600,
        alt: "Terms and Conditions - Faraway Yachting Phuket",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions – Faraway Yachting Charter Policies",
    description: "Read our comprehensive terms and conditions for yacht charter services in Phuket. Clear policies on bookings, cancellations, safety, and your rights as our valued customer.",
    images: [`${BASE_URL}/images/logo.png`],
  },
};

// Destinations Page Metadata
export const destinationsMetadata: Metadata = {
  title: "Phuket Yacht Destinations – Discover Thailand's Hidden Gems",
  description: "Explore the most beautiful destinations accessible by yacht from Phuket. From pristine beaches to hidden coves, discover where your luxury yacht charter can take you in Thailand.",
  openGraph: {
    title: "Phuket Yacht Destinations – Discover Thailand's Hidden Gems",
    description: "Explore the most beautiful destinations accessible by yacht from Phuket. From pristine beaches to hidden coves, discover where your luxury yacht charter can take you in Thailand.",
    url: `${BASE_URL}/magical-destinations-with-private-yacht-in-phuket`,
    images: [
      {
        url: `${BASE_URL}/images/hero.png`,
        width: 800,
        height: 600,
        alt: "Phuket Yacht Destinations - Thailand Island Hopping",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuket Yacht Destinations – Discover Thailand's Hidden Gems",
    description: "Explore the most beautiful destinations accessible by yacht from Phuket. From pristine beaches to hidden coves, discover where your luxury yacht charter can take you in Thailand.",
    images: [`${BASE_URL}/images/hero.png`],
  },
};

// Dynamic Yacht Metadata Generation
export async function generateYachtMetadata(slug: string, yachtType?: 'crewed' | 'bareboat'): Promise<Metadata> {
  try {
    // Check if BACKEND_URL is available
    if (!process.env.BACKEND_URL) {
      return generateFallbackMetadata(slug, yachtType);
    }

    const response = await fetchYachtBySlug(slug);
    
    // The yacht data is directly in response.data, not in response.data.yachts
    const yacht = response.data;
    
    if (!yacht) {
      return generateFallbackMetadata(slug, yachtType);
    }

    // Determine yacht type and appropriate URL
    const type = yachtType || yacht.type?.toLowerCase();
    const baseUrl = type === 'bareboat' ? 'bareboat' : 'crewed_boats';
    const url = `${BASE_URL}/${baseUrl}/${slug}`;

    // Generate dynamic title
    const title = `${yacht.title} – FarAway Phuket Yachts Charters`;
    
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
        // siteName: "Faraway Yachting",
        images: [
          {
            url: getYachtImage(yacht),
            width: 800,
            height: 600,
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
        images: [getYachtImage(yacht)],
      },
    };
  } catch (error) {
    return generateFallbackMetadata(slug, yachtType);
  }
}

// Fallback metadata generation when API is not available
function generateFallbackMetadata(slug: string, yachtType?: 'crewed' | 'bareboat'): Metadata {
  const type = yachtType || 'crewed';
  const baseUrl = type === 'bareboat' ? 'bareboat' : 'crewed_boats';
  const url = `${BASE_URL}/${baseUrl}/${slug}`;
  
  // Generate title from slug
  const yachtName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const title = `${yachtName} – FarAway Phuket Yachts Charters`;
  
  // Generate description based on yacht type
  const charterType = type === 'bareboat' ? 'bareboat charter' : 'yacht charter';
  const description = `Experience luxury ${charterType} aboard ${yachtName} in Phuket. Book your premium sailing adventure with Far Away Phuket Yachts Charters - 30 years of excellence, 750+ ★★★★★ reviews.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${BASE_URL}/images/homeimg1.png`,
          width: 800,
          height: 600,
          alt: `${yachtName} - Luxury Yacht Charter Phuket`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/images/homeimg1.png`],
    },
  };
}
