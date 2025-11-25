import Image from "next/image";
import { FaTripadvisor } from "react-icons/fa";
import { unstable_cache } from "next/cache";

interface RatingData {
  name?: string;
  rating?: number;
  total?: number;
  url?: string;
  error?: string;
}

const FALLBACK_DATA: RatingData = {
  name: "Faraway Yachting Phuket",
  rating: 5,
  total: 326,
  url: "https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749",
};

async function fetchGoogleRatingFromAPI(): Promise<RatingData> {
  // CRITICAL: This must only run on the server
  if (typeof window !== "undefined") {
    console.error("[GoogleRating] CRITICAL: fetchGoogleRatingFromAPI called on client side!");
    return FALLBACK_DATA;
  }

  // Use the API route instead of calling Google directly
  // This ensures both server and client components use the same cached data
  let baseUrl: string;
  
  if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost:3000";
  } else if (process.env.NEXT_PUBLIC_BASE_URL) {
    baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  } else if (process.env.VERCEL_URL) {
    baseUrl = `https://${process.env.VERCEL_URL}`;
  } else {
    baseUrl = "http://localhost:3000";
  }
  
  baseUrl = baseUrl.replace(/\/$/, "");
  const apiUrl = `${baseUrl}/api/google-rating`;

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 0 }, // Don't cache - always get fresh data from API route
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.warn(`[GoogleRating] API returned ${response.status} status`);
      return FALLBACK_DATA;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("[GoogleRating] Fetch failed:", error instanceof Error ? error.message : error);
    return FALLBACK_DATA;
  }
}

// Cache the Google rating data for 5 minutes to prevent excessive API calls but keep data fresh
const getCachedGoogleRating = unstable_cache(
  async (): Promise<RatingData> => {
    return await fetchGoogleRatingFromAPI();
  },
  ['google-rating'], // Cache key
  {
    revalidate: 300, // Revalidate every 5 minutes (300 seconds) to keep data fresh
    tags: ['google-rating'], // Cache tag for manual invalidation if needed
  }
);

export async function GoogleRatingBadge() {
  // CRITICAL: Prevent client-side execution
  if (typeof window !== "undefined") {
    console.error("[GoogleRatingBadge] CRITICAL: Component executed on client side!");
    // Return fallback UI that doesn't require data
    const fallbackUrl = FALLBACK_DATA.url || "https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749";
    return (
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl md:rounded-3xl border border-white/50 bg-white/30 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 shadow-[0_10px_28px_rgba(3,66,80,0.15)] backdrop-blur-md transition-transform hover:scale-[1.02]"
      >
        <div className="flex items-center justify-center rounded-xl md:rounded-2xl bg-white/80 shadow-inner h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex-shrink-0">
          <img src="/images/Google.png" alt="Google logo" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#034250]/85">
            Google Reviews
          </span>
          <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-bold text-white drop-shadow leading-tight">
            Read our Google reviews
          </span>
        </div>
      </a>
    );
  }

  // Use cached function to prevent multiple API calls
  const data = await getCachedGoogleRating();

  // Fallback URL if API fails or no data
  const fallbackUrl = FALLBACK_DATA.url || "https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749";

  // Debug logging (only on server)
  if (data?.error) {
    console.log("[GoogleRatingBadge] Error:", data.error);
  } else if (data?.rating) {
    console.log("[GoogleRatingBadge] Success - Rating:", data.rating, "Total:", data.total);
  }

  if (!data || data.error || !data.rating || typeof data.total !== "number") {
    return (
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl md:rounded-3xl border border-white/50 bg-white/30 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 shadow-[0_10px_28px_rgba(3,66,80,0.15)] backdrop-blur-md transition-transform hover:scale-[1.02]"
      >
        <div className="flex items-center justify-center rounded-xl md:rounded-2xl bg-white/80 shadow-inner h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex-shrink-0">
          <img src="/images/Google.png" alt="Google logo" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#034250]/85">
            Google Reviews
          </span>
          <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-bold text-white drop-shadow leading-tight">
            Read our Google reviews
          </span>
        </div>
      </a>
    );
  }

  // Hardcode rating to 5.0, but use API data for total reviews
  const formattedRating = "5.0";
  const reviewLabel = `${data.total.toLocaleString()} reviews`;
  const googleUrl = data.url || fallbackUrl;

  return (
    <a
      href={googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl md:rounded-3xl border border-white/50 bg-white/30 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 shadow-[0_10px_28px_rgba(3,66,80,0.15)] backdrop-blur-md transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-center rounded-xl md:rounded-2xl bg-white/80 shadow-inner h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex-shrink-0">
        <img src="/images/Google.png" alt="Google logo" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#034250]/85">
          Google Reviews
        </span>
        <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-bold text-white drop-shadow leading-tight">
          {formattedRating}
          <span className="ml-0.5 sm:ml-1 text-[#F4B400]">★★★★★</span>
        </span>
        <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-white/90 drop-shadow leading-tight truncate">{reviewLabel}</span>
      </div>
    </a>
  );
}

export function TripAdvisorRatingBadge() {
  const totalReviews = 326;
  const reviewLabel = `${totalReviews.toLocaleString()} reviews`;
  const tripAdvisorUrl = "https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html";

  return (
    <a
      href={tripAdvisorUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl md:rounded-3xl border border-white/50 bg-white/30 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 shadow-[0_10px_28px_rgba(3,66,80,0.15)] backdrop-blur-md transition-transform hover:scale-[1.02]"
    >
        <div className="flex items-center justify-center rounded-xl md:rounded-2xl bg-white/80 shadow-inner h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 flex-shrink-0">
          <FaTripadvisor className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-green-500" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#034250]/85">
            TripAdvisor
          </span>
          <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-bold text-white drop-shadow leading-tight">
            5.0
            <span className="ml-0.5 sm:ml-1 text-[#F4B400]">★★★★★</span>
          </span>
          <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-white/90 drop-shadow leading-tight truncate">{reviewLabel}</span>
        </div>
      </a>
  );
}

export function RatingBadgeSkeleton() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl md:rounded-3xl border border-white/50 bg-white/50 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-inner backdrop-blur">
      <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 animate-pulse rounded-xl md:rounded-2xl bg-white/80 flex-shrink-0" />
      <div className="space-y-1.5 sm:space-y-2 min-w-0">
        <div className="h-2.5 sm:h-3 w-24 sm:w-28 md:w-32 animate-pulse rounded bg-white/70" />
        <div className="h-3.5 sm:h-4 w-20 sm:w-24 md:w-28 animate-pulse rounded bg-white/70" />
        <div className="h-2.5 sm:h-3 w-16 sm:w-20 md:w-24 animate-pulse rounded bg-white/70" />
      </div>
    </div>
  );
}

interface WorldLuxuryAwardBadgeProps {
  positionClass?: string;
}

export function WorldLuxuryAwardBadge({ positionClass = "" }: WorldLuxuryAwardBadgeProps) {
  return (
    <div className={positionClass}>
      <a
        href="https://www.theworldluxurytravelawards.com/establishment/faraway-yachting-co-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/images/2025 Personalised Travel Winner Logo263.png"
          alt="World Luxury Travel Awards 2025 Winner"
          width={160}
          height={220}
          className="h-auto w-[95px] max-w-none"
          priority
        />
      </a>
    </div>
  );
}


