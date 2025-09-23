"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { fetchYachts } from "@/lib/api";
import { LuDoorOpen, LuToilet, LuMapPin } from "react-icons/lu";
import { GiCaptainHatProfile } from "react-icons/gi";
import HeadingContent from "./heading";
import { Button } from "@/styles";
import Image from "next/image";

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
  tags?: string[];
}

interface YachtCardsProps {
  columns?: number;
  showLoadMore?: boolean;
  initialLoadCount?: number;
  loadMoreCount?: number;
}

const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text;
};

const gridWrapperClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
};

const YachtCards: React.FC<YachtCardsProps> = ({ 
  columns = 3, 
  showLoadMore = false, 
  initialLoadCount = 9, 
  loadMoreCount = 9 
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<Yacht[]>([]);
  const [allYachts, setAllYachts] = useState<Yacht[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [hasMore, setHasMore] = useState(true);

  // Optimized data fetching and filtering
  useEffect(() => {
    const fetchYachtData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all yachts at once
        const res = await fetchYachts(1, 100);
        const yachts: Yacht[] = res.data.yachts || [];
        
        const normalizedPath = pathname?.replace(/\/+$/, "").trim() || "/";
        
        // Filter yachts based on page type
        const filteredYachts = yachts.filter((yacht) => {
          const yachtStatus = yacht.status?.toLowerCase().trim() || "";
          const yachtType = yacht.type?.toLowerCase().trim() || "";
          const yachtTags = yacht.tags || [];

          // Only show published yachts
          if (yachtStatus !== "published") return false;

          // Home page: show only crewed yachts
          if (normalizedPath === "/") {
            return yachtType === "crewed";
          }

          // Bareboat page: show only bareboat yachts
          if (normalizedPath === "/bareboat-charter-thailand") {
            return yachtType === "bareboat";
          }

          // Crewed page: show only crewed yachts
          if (normalizedPath === "/yacht-charter-phuket") {
            return yachtType === "crewed";
          }

          // Super yacht charter page: show only yachts with "Super Yacht" in tags array
          if (normalizedPath === "/super-yacht-charter-phuket") {
            // Check if tags array contains "Super Yacht"
            return yachtTags.includes("super yacht");
          }

          // Other pages: show all published yachts
          return true;
        });

        setAllYachts(filteredYachts);
        
        // Set display data based on page type
        if (normalizedPath === "/") {
          // Home page: show only 9 crewed yachts
          setData(filteredYachts.slice(0, 9));
          setHasMore(false);
        } else {
          // Other pages: show all filtered yachts or with load more
          if (showLoadMore) {
            setData(filteredYachts.slice(0, initialLoadCount));
            setHasMore(filteredYachts.length > initialLoadCount);
            setVisibleCount(initialLoadCount);
          } else {
            setData(filteredYachts);
            setHasMore(false);
          }
        }
        
      } catch (err: any) {
        setError(err?.response?.data?.message || "Failed to fetch yachts.");
      } finally {
        setLoading(false);
      }
    };

    fetchYachtData();
  }, [pathname, showLoadMore, initialLoadCount]);

  const gridCols = gridWrapperClasses[columns as 1 | 2 | 3] || gridWrapperClasses[3];

  // Skeleton Loading Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
      {/* Image Skeleton */}
      <div className="relative">
        <div className="w-full h-64 bg-gray-200"></div>
        {/* Key Specs Overlay Skeleton */}
        <div className="absolute top-[14.7rem] left-10 right-10 lg:left-6 lg:right-6 xl:left-10 xl:right-10 bg-white rounded-md" style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg px-3 py-1 flex justify-center">
            <div className="flex items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-1 border-r last:border-r-0 border-[#E8E8E8] py-1 ps-3 pe-3 xl:ps-5 xl:pe-5 first:ps-2"
                >
                  <div className="w-6 xl:w-7 h-6 xl:h-7 bg-gray-200 rounded"></div>
                  <div className="w-12 h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="flex items-start">
          <div className="w-48 h-8 bg-gray-200 rounded mt-5"></div>
        </div>
        {/* Amenities Skeleton */}
        <div className="flex items-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center space-x-1 border-r last:border-r-0 border-[#E8E8E8] py-1 ps-2 pe-2 xl:ps-4 xl:pe-4 first:ps-0 last:pe-0"
            >
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between pt-2">
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
          <div className="w-20 h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="mb-8 mx-4 lg:mx-0">
        {pathname === "/" && (
          <div className="mb-10">
            <HeadingContent
              heading="Featured Yachts in Phuket"
              description="Let the waves guide you to elegance, adventure, and pure relaxation!"
            />
          </div>
        )}
        <div className={`grid ${gridCols} gap-6 md:gap-8 lg:gap-4 xl:gap-10`}>
          {Array.from({ length: initialLoadCount }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return <p className="text-center text-gray-500 text-xl py-10">No yachts found for this page.</p>;
  }

  // Optimized load more function
  const handleLoadMore = () => {
    if (!hasMore || loadMoreLoading) return;
    
    setLoadMoreLoading(true);
    
    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      const newVisibleCount = visibleCount + loadMoreCount;
      const newData = allYachts.slice(0, newVisibleCount);
      
      setData(newData);
      setVisibleCount(newVisibleCount);
      setHasMore(newVisibleCount < allYachts.length);
      setLoadMoreLoading(false);
      
      // Smooth scroll to newly loaded content
      setTimeout(() => {
        const yachtCardsSection = document.querySelector('[data-yacht-cards]');
        if (yachtCardsSection) {
          yachtCardsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100);
    });
  };

  return (
    <div className="mb-8 mx-4 lg:mx-0">
      {pathname === "/" && (
        <div className="mb-10">
          <HeadingContent
            heading="Featured Yachts in Phuket"
            description="Let the waves guide you to elegance, adventure, and pure relaxation!"
          />
        </div>
      )}
      <div className={`grid ${gridCols} gap-6 md:gap-8 lg:gap-4 xl:gap-10`} data-yacht-cards>
        {data.map((boat) => (
          <div
            key={boat._id}
            onClick={() => {
              const base = boat.type === "bareboat" ? "bareboat" : "crewed_boats";
              const slug = slugify(boat.slug);
              const fullPath = `/${base}/${slug}`;
              if (slug) {
                router.push(fullPath);
              }
            }}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Image Section - Unchanged */}
            <div className="relative">
              <div className="overflow-hidden">
                <Image 
                  src={boat.primaryImage || "/images/homeimg1.png"} 
                  alt={boat.title || "Yacht Image"} 
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/homeimg1.png";
                  }}
                />
              </div>
              {/* Key Specs Overlay */}
              <div className="absolute top-[14.7rem] left-8 right-8 lg:left-6 lg:right-6 xl:left-10 xl:right-10 bg-white rounded-md" style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
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
                        <Image src={icon} alt="" width={28} height={28} className="w-6 xl:w-7" />
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
                <h3 className="text-xl lg:text-[24px] xl:text-[28px] font-playfair mt-5 font-semibold text-zink group-hover:text-mustard transition-colors">
                  {boat.title.length > 22 ? `${boat.title.substring(0, 23)}...` : boat.title}
                </h3>
              </div>

              {/* Amenities */}
              <div className="flex items-center text-xs sm:text-sm md:text-sm font-sourceSansPro lg:text-[12px] xl:text-sm text-zink">
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
                <div className=" text-xl xl:text-[20px] font-semibold text-zink font-sourceSansPro">
                  From &nbsp; €{(boat.daytripPriceEuro)}
                </div>
                <Button
                  variant="outline"
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Show More Button for Home Page */}
      {!showLoadMore && data.length >= 9 && pathname === "/" && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => router.push("/yacht-charter-phuket")}
            variant="primary"
          >
            Explore All Yachts
          </Button>
        </div>
      )}
      
      {/* Load More Button for Detail Pages */}
      {showLoadMore && (
        <div className="flex justify-center mt-10">
          {hasMore ? (
            <Button
              onClick={handleLoadMore}
              variant="primary"
              disabled={loadMoreLoading}
              className="min-w-[150px]"
            >
              {loadMoreLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                `Load More (${allYachts.length - data.length} remaining)`
              )}
            </Button>
          ) : (
            <p className="text-gray-500">No more yachts to load</p>
          )}
        </div>
      )}
    </div>
  );
};
export default YachtCards;