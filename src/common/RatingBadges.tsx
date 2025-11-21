import Image from "next/image";
import { FaTripadvisor } from "react-icons/fa";

interface RatingData {
  name?: string;
  rating?: number;
  total?: number;
  url?: string;
  error?: string;
}

export function GoogleRatingBadge() {
  // Static data - loads instantly like TripAdvisor badge
  const totalReviews = 326;
  const reviewLabel = `${totalReviews.toLocaleString()} reviews`;
  const googleUrl = "https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8235296,98.3451594,17z/data=!3m1!4b1!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D";

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
          5.0
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


