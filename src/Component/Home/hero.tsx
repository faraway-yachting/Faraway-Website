import PngIcons from "@/icons/pngIcon";
import { styles, combine, Button } from "@/styles";
import { Suspense } from "react";
import { FiPhone } from "react-icons/fi";

const HeroContent = () => {
  const { bgImage, w1, w2, flexCenter, flexCol, h1, containerXl, flexBetween, p1 ,} = styles;

  return (
    <section className={combine(bgImage, "bg-[url('/images/homeimg1.png')] min-h-[81vh] flex justify-center")}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />
      {/* Batch Image Top-Left inside container */}
      <div className="relative max-w-6xl mx-auto w-full">
        <a 
          href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute cursor-pointer z-20"
        >
          <img
            src="/images/batch1.png"
            alt="Batch"
            className={combine( w1, "h-auto mt-2 md:mt-5 top-0 md:top-4 lg:top-5 xl:top-6 drop-shadow-lg hover:opacity-90 transition-opacity")}
          />
        </a>
        {/* Content on top */}
        <div className={combine(flexCenter, "h-full text-center text-white px-4 relative z-10 mt-4 md:mt-0")}>
          <div className={combine(flexCol, "justify-center items-center max-w-4xl mx-auto space-y-6")}>
            <h1 className={combine(h1, "leading-tight md:max-w-2xl lg:max-w-2xl w-full")}>
              Phuket Yacht Charter
            </h1>
            <img
              src={PngIcons.rframe2}
              alt="Divider"
              className={combine(w2, flexBetween, "mx-auto my-3 drop-shadow-lg opacity-90")}
            />
            <p className={combine("font-playfair font-semibold text-center mb-4 text-[21px] md:text-[24px] lg:text-[27px] xl:text-[30px]")}>Private Yacht Charters, Catamarans & Luxury Cruises in Phuket</p>
            <p className={combine(p1, "font-light font-sourceSansPro text-center mb-4 md:mb-6", containerXl, "drop-shadow-lg text-white/95")}>
            Faraway Yachting is a leading <span className="font-semibold">Phuket yacht charter operator</span> , creating unforgettable experiences at sea. 
            We specialize in private yacht charters — from luxury day trips to Phi Phi and Phang Nga Bay to exclusive overnight and cabin charters across Thailand’s most beautiful islands.
            </p>
            <div className="flex justify-center">
              <Button
                href="/contact"
                variant="primary"
              >
                <div className="flex items-center">
                  <FiPhone className="mr-2" />
                  Contact Us Now
                </div>
              </Button>
            </div>
            <Suspense fallback={<RatingBadgeSkeleton />}>
              <GoogleRatingBadge />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroContent;

interface RatingData {
  name?: string;
  rating?: number;
  total?: number;
  url?: string;
  error?: string;
}

async function fetchGoogleRating(): Promise<RatingData> {
  const domain =
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  try {
    const res = await fetch(`${domain}/api/google-rating`, {
      next: { revalidate: 60 * 60 }, // cache for an hour on the server
    });
    if (!res.ok) {
      return { error: "Unable to load Google rating." };
    }
    return res.json();
  } catch (error) {
    console.error("Google rating request failed:", error);
    return { error: "Unable to load Google rating." };
  }
}

async function GoogleRatingBadge() {
  const data = await fetchGoogleRating();

  if (!data || data.error || !data.rating || typeof data.total !== "number") {
    return (
      <div className="flex justify-center">
        <a
          href="https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-3xl bg-white/90 px-5 py-3 text-sm font-semibold text-[#034250] shadow-lg hover:shadow-xl transition-shadow"
        >
          <img src="/images/Google.png" alt="Google" className="h-6 w-6" />
          Read our Google reviews
        </a>
      </div>
    );
  }

  const formattedRating = Number(data.rating).toFixed(1);
  const reviewLabel = `${data.total.toLocaleString()} reviews`;

  return (
    <div className="w-full flex justify-center">
      <a
        href={data.url || "https://www.google.com/search?q=Faraway+Yachting+Phuket"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-3xl border border-white/50 bg-white/30 px-3 py-2.5 md:px-5 md:py-3.5 shadow-[0_10px_28px_rgba(3,66,80,0.15)] backdrop-blur-md transition-transform hover:scale-[1.02]"
      >
        <div className="flex items-center justify-center rounded-2xl bg-white/80 shadow-inner h-8 w-8 md:h-11 md:w-11">
          <img src="/images/Google.png" alt="Google logo" className="h-4.5 w-4.5 md:h-7 md:w-7" />
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#034250]/85">
            Google Reviews
          </span>
          <span className="text-[15px] md:text-[19px] font-bold text-white drop-shadow">
            {formattedRating}
            <span className="ml-1 text-[#F4B400]">★★★★★</span>
          </span>
          <span className="text-[11px] md:text-[13px] text-white/90 drop-shadow">{reviewLabel}</span>
        </div>
      </a>
    </div>
  );
}

function RatingBadgeSkeleton() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-4 rounded-3xl border border-white/50 bg-white/50 px-6 py-4 shadow-inner backdrop-blur">
        <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/80" />
        <div className="space-y-2">
          <div className="h-3 w-32 animate-pulse rounded bg-white/70" />
          <div className="h-4 w-24 animate-pulse rounded bg-white/70" />
          <div className="h-3 w-20 animate-pulse rounded bg-white/70" />
        </div>
      </div>
    </div>
  );
}