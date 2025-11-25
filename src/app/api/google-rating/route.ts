import { NextResponse } from "next/server";

// Disable caching for this route to always get fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const FALLBACK_DATA = {
  name: "Faraway Yachting Phuket",
  rating: 5,
  total: 326,
  url: "https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749",
};

export async function GET(request: Request) {
  // Add cache-busting: check for a query parameter to force fresh data
  const requestUrl = new URL(request.url);
  const forceRefresh = requestUrl.searchParams.has('refresh');
  
  if (!PLACE_ID || !API_KEY) {
    console.warn("[google-rating] Missing GOOGLE_PLACE_ID or GOOGLE_MAPS_API_KEY. Falling back to static data.");
    return NextResponse.json(FALLBACK_DATA, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  }

  const googleApiUrl = new URL(GOOGLE_PLACES_URL);
  googleApiUrl.searchParams.set("place_id", PLACE_ID);
  googleApiUrl.searchParams.set("fields", "name,rating,user_ratings_total,url");
  googleApiUrl.searchParams.set("key", API_KEY);

  try {
    // Add timeout to prevent long waits
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    // Fetch fresh data from Google API (no Next.js cache to ensure we get latest data)
    const response = await fetch(googleApiUrl.toString(), {
      signal: controller.signal,
      cache: 'no-store', // Always fetch fresh data from Google
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn("[google-rating] Google API returned non-OK status. Falling back to static data.");
      return NextResponse.json(FALLBACK_DATA, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      });
    }

    const data = await response.json();

    if (data.status !== "OK") {
      console.warn(`[google-rating] Google API error: ${data.error_message || "Unknown error"}. Falling back to static data.`);
      return NextResponse.json(FALLBACK_DATA, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      });
    }

    const { name, rating, user_ratings_total, url: googleUrl } = data.result || {};

    return NextResponse.json(
      {
        name,
        rating,
        total: user_ratings_total,
        url: googleUrl || `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
      },
      {
        headers: {
          // No cache to ensure always fresh data
          "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
          "CDN-Cache-Control": "no-cache, no-store, must-revalidate",
          "Vercel-CDN-Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    );
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn("[google-rating] Request timed out. Falling back to static data.");
    } else {
      console.error("[google-rating] Fetch failed:", error);
    }
    // Return fallback data instead of error
    return NextResponse.json(FALLBACK_DATA, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  }
}

