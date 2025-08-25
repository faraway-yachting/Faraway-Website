"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { LuDoorOpen, LuToilet, LuMapPin } from "react-icons/lu";
import { GiCaptainHatProfile } from "react-icons/gi";
import HeadingContent from "./heading";

interface Yacht {
  _id: string;
  capacity: string;
  primaryImage: string;
  daytripPriceEuro: string;
  lengthRange: string;
  title: string;
  bathrooms: string;
  cabins: string;
  guests: string;
  length: string;
  passengerDayTrip: string;
  passengerOvernight: string;
  lengthOverall: string;
  type: string;
  status: string;
  slug: string;
}

interface YachtCardsProps {
  columns?: number;
}

// ✅ Safe Slugify Function
const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

const gridWrapperClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
};

const YachtCards: React.FC<YachtCardsProps> = ({ columns = 3 }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<Yacht[]>([]);
  console.log(data, "data from yacht cards");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const res = await axios.get("https://awais.thedevapp.online/yacht/all-yachts");
        const allYachts: Yacht[] = res.data.data.yachts;

        const normalizedPath = pathname?.replace(/\/+$/, "").trim() || "/";
        let filteredYachts: Yacht[] = [];

        filteredYachts = allYachts.filter((yacht) => {
          const yachtStatus = yacht.status?.toLowerCase().trim() || "";
          const yachtType = yacht.type?.toLowerCase().trim() || "";

          if (normalizedPath === "/") {
            return yachtStatus === "published" && yachtType === "crewed";
          }

          if (normalizedPath === "/bareboat-charter-thailand") {
            return yachtStatus === "published" && yachtType === "bareboat";
          }

          if (normalizedPath === "/yacht-charter-phuket") {
            return yachtStatus === "published" && yachtType === "crewed";
          }

          return yachtStatus === "published";
        });

        setData(filteredYachts);
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to fetch yachts.");
      } finally {
        setLoading(false);
      }
    };

    fetchYachts();
  }, [pathname]);

  const gridCols = gridWrapperClasses[columns as 1 | 2 | 3] || gridWrapperClasses[3];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40rem]">
        <div className="w-10 h-10 border-4 border-t-transparent border-[#2185D0] rounded-full animate-spin" />
      </div>
    );
  }

  if (data.length === 0) {
    return <p className="text-center text-gray-500 text-xl py-10">No yachts found for this page.</p>;
  }

  const visibleYachts = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <div className="mb-8 mx-4 lg:mx-0">
<div className="mb-10">
      <HeadingContent
        heading="Featured Yachts"
        description="Let the waves guide you to elegance, adventure, and pure relaxation!"
      />
      </div>
      <div className={`grid ${gridCols} gap-6 md:gap-8 lg:gap-4 xl:gap-10`}>
        {visibleYachts.map((boat) => (
          <div
            key={boat._id}
            onClick={() => {
              const base = boat.type === "bareboat" ? "bareboat" : "crewed_boats";
              const slug = slugify(boat.slug);
              console.log("slug:", slug);
              const fullPath = `/${base}/${slug}`;
              console.log("Navigating to:", fullPath);
              if (slug) {
                router.push(fullPath);
              }
            }}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Image Section - Unchanged */}
            <div className="relative">
              <div className="overflow-hidden">
                <img src={boat.primaryImage} alt={boat.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              {/* Key Specs Overlay */}
              <div className="absolute top-[14.7rem] left-10 right-10 lg:left-6 lg:right-6 xl:left-10 xl:right-10 bg-white rounded-md" style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
                <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg px-3 py-1 flex justify-center">
                  <div className="flex items-center font-sourceSansPro text-xs text-zink">
                    {[
                      { icon: "/images/icon1.png", value: `${boat.length.replace(/[<>]/g, "")} ft` },
                      { icon: "/images/icon2.png", value: boat.passengerDayTrip },
                      { icon: "/images/icon3.png", value: boat.passengerOvernight },
                    ].map(({ icon, value }, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-1 border-r font-sourceSansPro last:border-r-0 border-[#E8E8E8] py-1 ps-3 pe-3 xl:ps-5 xl:pe-5 first:ps-2"
                      >
                        <img src={icon} alt="" className="w-6 xl:w-7" />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Redesigned */}
            <div className="p-4 space-y-3">
              {/* Title and Rating */}
              <div className="flex items-start">
                <h3 className="text-xl lg:text-[24px] xl:text-[28px] font-playfair mt-5 font-semibold text-zink group-hover:text-[#D6AB62] transition-colors">
                  {boat.title}
                </h3>
              </div>

              {/* Amenities */}
              <div className="flex items-center text-sm font-sourceSansPro lg:text-[12px] xl:text-sm text-zink">
                {[
                  { icon: GiCaptainHatProfile, value: `With skipper` },
                  { icon: LuDoorOpen, value: `${boat.cabins} Cabins` },
                  { icon: LuToilet, value: `${boat.bathrooms} Bathrooms` },
                ].map(({ icon: IconComponent, value }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center space-x-1 border-r font-sourceSansPro last:border-r-0 border-[#E8E8E8] py-1 ps-2 pe-2 xl:ps-4 xl:pe-4 first:ps-0 last:pe-0 text-zink"
                  >
                    <IconComponent className="w-4 h-4 text-zink" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              {/* Price and Action Button */}
              <div className="flex items-center justify-between pt-2">
                <div className=" text-xl xl:text-[22px] font-semibold text-zink font-sourceSansPro">
                  From ${(boat.daytripPriceEuro)}
                </div>
                <button className="px-7 xl:px-10 py-2 font-sourceSansPro bg-zink text-white text-base xl:text-lg font-medium rounded-lg hover:bg-[#D6AB62] transition-colors">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-7 lg:px-9 xl:px-11 py-2 rounded-lg font-sourceSansPro text-white bg-zink hover:bg-[#D6AB62] text-lg font-medium transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default YachtCards;
