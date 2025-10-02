"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Gallery from "./gallery";
import VideoSection from "./videoSection";
import TabSection from "./tabSection";
import ContactDetail from "./contactDetail";
import YachtAdventure from "../Charter/yachtAdventure";
import { combine, styles } from "@/styles";
import { fetchYachtBySlug } from "@/lib/api";
import BoatInfo from "./boatInfo"

interface HeroProps {
  slug: string;
}
export interface Yacht {
  _id: string;
  slug: string;
  title: string;
  primaryImage: string;
  daytripPriceEuro: string;
  length: string;
  passengerDayTrip: string;
  passengerOvernight: string;
  galleryImages: string[];
  videoLink: string;
  aboutThisBoat: string;
  dayCharter: string;
  overnightCharter: string;
  lengthOverall: string;
  boatType: string;
  cabins: string;
  bathrooms: string;
  capacity: string;
  guests: string;
  lengthRange: string;
  status: string;
  type: string;
  tags?: string[];
}

const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text;  
};

const formatSlug = (slug: string): string => {
  if (!slug) return "";
  return slug
    .split('-') // Split by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
    .join(' '); 
};
const HeroSection: React.FC<HeroProps> = ({ slug }) => {
  const [data, setData] = useState<Yacht | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchYachtBySlug(slug);
        
        if (!res.success || !res.data) {
          setError("Yacht not found.");
          return;
        }

        setData(res.data);
      } catch {
        setError("Failed to load yacht data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <div className="animate-spin w-10 h-10 border-4 border-t-transparent border-zinc-700 rounded-full" />
      </div>
    );
  }

  if (error || !data) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }
  return (
    <div>
      <div className="max-w-[78.2rem] mx-auto px-4 xl:px-0">
        <BoatInfo />
        <h2 className="text-[32px] font-playfair font-bold text-zink mt-6 ">{data.title}</h2>
        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <div className="w-full md:w-[70%]">
            <Gallery data={data} />
            <h2 className={combine(" text-zink font-semibold",styles.h3)}>{formatSlug(data.slug)}</h2>
            <TabSection data={data} />
          </div>
          <div className="w-full md:w-[30%] sticky top-[8rem]">
            <ContactDetail data={data} />
          </div>
        </div>
        <div className="mt-6"> 
          <VideoSection data={data} />
        </div>
      </div>
      {/* Hide YachtAdventure component for all bareboat pages */}
      {!pathname.startsWith("/bareboat/") && <YachtAdventure />}
    </div>
  );
};
export default HeroSection;
