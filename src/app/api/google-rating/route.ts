import { NextResponse } from "next/server";

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/details/json";

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json(
      { error: "Google Places credentials are not configured." },
      { status: 500 }
    );
  }

  const url = new URL(GOOGLE_PLACES_URL);
  url.searchParams.set("place_id", PLACE_ID);
  url.searchParams.set("fields", "name,rating,user_ratings_total,url");
  url.searchParams.set("key", API_KEY);

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch place details." },
        { status: 502 }
      );
    }

    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: data.error_message || "Unable to retrieve Google rating." },
        { status: 500 }
      );
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
          "Cache-Control": "s-maxage=604800, stale-while-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Google rating fetch failed:", error);
    return NextResponse.json(
      { error: "Unexpected error fetching Google rating." },
      { status: 500 }
    );
  }
}

