"use client";
import { RxRulerSquare } from "react-icons/rx";
import { LuSailboat, LuDoorOpen, LuToilet } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline} from "react-icons/io5";
import CharterDetail from "./charterDetail";
import { Yacht } from "../YachtDetail/hero";

type Props = {
  data: Yacht | null;
};
const TabSection: React.FC<Props> = ({ data }) => {
  const features = [
    { title: "Length", value: `${data?.length} ft`, icon: RxRulerSquare },
    { title: "Type", value: data?.boatType, icon: LuSailboat },
    { title: "Cabins", value: data?.cabins, icon: LuDoorOpen },
    { title: "Bathrooms", value: data?.bathrooms, icon: LuToilet },
    { title: "Day Charter Capacity", value: data?.passengerDayTrip, icon: FiSun },
    { title: "Overnight Charter Capacity", value: data?.passengerOvernight, icon: IoMoonOutline },
  ];
  return (
    <div>
  
      {/* Features */}
      <div className="flex flex-wrap gap-4 mt-3 md:mt-4 lg:mt-6 xl:mt-8 justify-center md:justify-start">
        {features.map(({ title, value, icon: Icon }, index) => (
          <div
            key={index}
            className="border border-mustard px-2 lg:px-3 xl:px-4 py-2 xl:py-3 rounded-md bg-white text-center inline-flex flex-col items-center shadow-sm"
          >
            <div className="text-mustard flex flex-col items-center gap-2">
              <Icon size={24} />
              <p className="text-xs md:text-sm lg:text-[15px] font-bold font-sourceSansPro text-zink leading-snug text-center">
                {title}
              </p>
            </div>
            <p className="text-zink text-sm lg:text-[16px] font-medium font-sourceSansPro mt-2">
              {value}
            </p>
          </div>
        ))}
      </div>
      {/* Render Tab Content - Always show CharterDetail with all sections */}
      <div className="mt-6">
        <CharterDetail data={data} />
      </div>
    </div>
  )
}
export default TabSection