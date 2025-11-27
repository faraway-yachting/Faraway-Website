"use client";

import { useEffect, useState } from "react";

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

// Global cache to prevent multiple API calls across page navigations
// Use sessionStorage for very short-term caching (5 minutes) to keep data fresh
const CACHE_KEY = 'google_rating_cache';
const CACHE_VERSION = '2'; // Increment this to invalidate all old caches
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

function getCachedData(): RatingData | null {
  if (typeof window === 'undefined') return null;
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp, version } = JSON.parse(cached);
      // Check if cache version matches and is not stale
      if (version !== CACHE_VERSION) {
        // Clear old version cache
        sessionStorage.removeItem(CACHE_KEY);
        return null;
      }
      const age = Date.now() - timestamp;
      // Only use cache if it's less than 5 minutes old
      if (age < CACHE_DURATION) {
        return data;
      } else {
        // Clear stale cache
        sessionStorage.removeItem(CACHE_KEY);
      }
    }
  } catch (e) {
    // Ignore errors and clear invalid cache
    try {
      sessionStorage.removeItem(CACHE_KEY);
    } catch {}
  }
  return null;
}

function setCachedData(data: RatingData) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now(),
      version: CACHE_VERSION
    }));
  } catch (e) {
    // Ignore errors
  }
}

export function GoogleRatingBadgeClient() {
  const [data, setData] = useState<RatingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always fetch fresh data, but check cache first for immediate display
    const cachedData = getCachedData();
    if (cachedData) {
      setData(cachedData);
      setIsLoading(false);
      // Still fetch fresh data in background
    } else {
      setIsLoading(true);
    }

    let isMounted = true;
    let abortController: AbortController | null = null;

    const fetchRating = async () => {
      try {
        abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController?.abort(), 5000);

        // Add timestamp to bypass cache if needed, but use short cache for performance
        const response = await fetch("/api/google-rating", {
          signal: abortController.signal,
          cache: "no-store", // Always fetch fresh data to get correct count
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const ratingData = await response.json();
        
        // Update cache in sessionStorage with fresh data
        setCachedData(ratingData);
        
        if (isMounted) {
          setData(ratingData);
          setIsLoading(false);
        }
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError" && isMounted) {
          console.warn("[GoogleRatingBadgeClient] Fetch failed:", error.message);
          // Try to use cached data if available, otherwise fallback
          const cached = getCachedData();
          const finalData = cached || FALLBACK_DATA;
          setData(finalData);
          setIsLoading(false);
        } else if (isMounted) {
          const cached = getCachedData();
          const finalData = cached || FALLBACK_DATA;
          setData(finalData);
          setIsLoading(false);
        }
      }
    };

    fetchRating();

    return () => {
      isMounted = false;
      if (abortController) {
        abortController.abort();
      }
    };
  }, []); // Only fetch once on mount

  const fallbackUrl = FALLBACK_DATA.url || "https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749";

  // Show skeleton while loading
  if (isLoading) {
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

  // Use fetched data or fallback
  const ratingData = data || FALLBACK_DATA;

  // If no valid rating data, show fallback UI
  if (!ratingData.rating || typeof ratingData.total !== "number") {
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
  const reviewLabel = `${ratingData.total.toLocaleString()} reviews`;
  const googleUrl = ratingData.url || fallbackUrl;

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

