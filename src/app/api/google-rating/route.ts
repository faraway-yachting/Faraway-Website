import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { join } from "path";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;
const CACHE_FILE = join(process.cwd(), '.next', 'cache', 'google-rating.json');
const CONSTANT_RATING = 5.0;

const FALLBACK_DATA = {
  name: "Faraway Yachting Phuket",
  rating: CONSTANT_RATING,
  total: 441,
  url: "https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749",
};

interface CacheData {
  timestamp: number;
  name: string;
  total: number;
  url: string;
}

async function readCache(): Promise<CacheData | null> {
  try {
    const cacheDir = join(process.cwd(), '.next', 'cache');
    await fs.mkdir(cacheDir, { recursive: true });
    
    const data = await fs.readFile(CACHE_FILE, 'utf-8');
    const cache: CacheData = JSON.parse(data);
    
    const now = Date.now();
    if (now - cache.timestamp < CACHE_DURATION) {
      return cache;
    }
    
    return null;
  } catch {
    return null;
  }
}

async function writeCache(data: Omit<CacheData, 'timestamp'>): Promise<void> {
  try {
    const cacheDir = join(process.cwd(), '.next', 'cache');
    await fs.mkdir(cacheDir, { recursive: true });
    
    const cache: CacheData = {
      timestamp: Date.now(),
      ...data,
    };
    
    await fs.writeFile(CACHE_FILE, JSON.stringify(cache), 'utf-8');
  } catch (error) {
    console.error("[google-rating] Failed to write cache:", error);
  }
}

async function fetchFromGoogle(): Promise<{ name: string; total: number; url: string } | null> {
  if (!PLACE_ID || !API_KEY) {
    return null;
  }

  const googleApiUrl = new URL(GOOGLE_PLACES_URL);
  googleApiUrl.searchParams.set("place_id", PLACE_ID);
  googleApiUrl.searchParams.set("fields", "name,user_ratings_total,url");
  googleApiUrl.searchParams.set("key", API_KEY);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(googleApiUrl.toString(), {
      signal: controller.signal,
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.status !== "OK") {
      return null;
    }

    const { name, user_ratings_total, url: googleUrl } = data.result || {};

    return {
      name: name || FALLBACK_DATA.name,
      total: user_ratings_total || FALLBACK_DATA.total,
      url: googleUrl || `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
    };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn("[google-rating] Request timed out.");
    } else {
      console.error("[google-rating] Fetch failed:", error);
    }
    return null;
  }
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const forceRefresh = requestUrl.searchParams.has('refresh');
  
  let cachedData: CacheData | null = null;
  
  if (!forceRefresh) {
    cachedData = await readCache();
  }

  if (cachedData) {
    return NextResponse.json(
      {
        name: cachedData.name,
        rating: CONSTANT_RATING,
        total: cachedData.total,
        url: cachedData.url,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  }

  if (!PLACE_ID || !API_KEY) {
    console.warn("[google-rating] Missing GOOGLE_PLACE_ID or GOOGLE_MAPS_API_KEY. Falling back to static data.");
    return NextResponse.json(FALLBACK_DATA, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  }

  const apiData = await fetchFromGoogle();
  
  if (apiData) {
    await writeCache(apiData);
    
    return NextResponse.json(
      {
        name: apiData.name,
        rating: CONSTANT_RATING,
        total: apiData.total,
        url: apiData.url,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  }

  return NextResponse.json(FALLBACK_DATA, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}

