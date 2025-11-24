import PngIcons from "@/icons/pngIcon";
import { styles, combine, Button } from "@/styles";
import { Suspense } from "react";
import { FiPhone } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import Image from "next/image";

const HeroContent = () => {
  const { bgImage, w2, flexCenter, flexCol, h1, containerXl, flexBetween, p1 ,} = styles;

  return (
    <section className={combine(bgImage, "bg-[url('/images/homeimg1.png')] min-h-[81vh] flex justify-center")}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />
      <div className="relative max-w-6xl mx-auto w-full">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full mt-0 md:mt-8 lg:mt-10">
              <Suspense fallback={<RatingBadgeSkeleton />}>
                <GoogleRatingBadge />
              </Suspense>
              <a
                href="https://www.theworldluxurytravelawards.com/establishment/faraway-yachting-co-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 transition-transform hover:scale-[1.05] drop-shadow-2xl"
              >
                <Image
                  src="/images/2025 Personalised Travel Winner Logo263.png"
                  alt="World Luxury Travel Awards 2025 Winner"
                  width={140}
                  height={180}
                  className="h-auto w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] max-w-none"
                  priority
                />
              </a>
              <TripAdvisorRatingBadge />
            </div>
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
      next: { revalidate: 60 * 60 * 24 * 7 },
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

  if (!data || data.error || typeof data.total !== "number") {
    return (
      <div className="flex justify-center">
        <a
          href="https://www.google.com/search?q=Faraway+Yachting+Phuket&ludocid=17147180263514010749"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 md:gap-3 rounded-2xl md:rounded-3xl bg-white/90 px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm font-semibold text-[#034250] shadow-lg hover:shadow-xl transition-shadow"
        >
          <img src="/images/Google.png" alt="Google" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="hidden sm:inline">Read our Google reviews</span>
          <span className="sm:hidden">Google Reviews</span>
        </a>
      </div>
    );
  }

  const reviewLabel = `${data.total.toLocaleString()} reviews`;

  return (
    <div className="w-full flex justify-center">
      <a
        href={data.url || "https://www.google.com/search?q=Faraway+Yachting+Phuket"}
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
            5.0
            <span className="ml-0.5 sm:ml-1 text-[#F4B400]">★★★★★</span>
          </span>
          <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-white/90 drop-shadow leading-tight truncate">{reviewLabel}</span>
        </div>
      </a>
    </div>
  );
}

function TripAdvisorRatingBadge() {
  const totalReviews = 326;
  const reviewLabel = `${totalReviews.toLocaleString()} reviews`;
  const tripAdvisorUrl = "https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html";

  return (
    <div className="w-full flex justify-center">
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
    </div>
  );
}

function RatingBadgeSkeleton() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl md:rounded-3xl border border-white/50 bg-white/50 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-inner backdrop-blur">
        <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 animate-pulse rounded-xl md:rounded-2xl bg-white/80 flex-shrink-0" />
        <div className="space-y-1.5 sm:space-y-2 min-w-0">
          <div className="h-2.5 sm:h-3 w-24 sm:w-28 md:w-32 animate-pulse rounded bg-white/70" />
          <div className="h-3.5 sm:h-4 w-20 sm:w-24 md:w-28 animate-pulse rounded bg-white/70" />
          <div className="h-2.5 sm:h-3 w-16 sm:w-20 md:w-24 animate-pulse rounded bg-white/70" />
        </div>
      </div>
    </div>
  );
}