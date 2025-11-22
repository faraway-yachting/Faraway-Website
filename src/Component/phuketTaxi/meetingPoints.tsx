import Link from "next/link";
import { combine, styles } from "@/styles";
import About from "../Home/about";
import { meetingPointsData } from "@/data/phukettaxi";

const MeetingPoints = () => {
    return (
        <div className=" my-7 lg:my-10">
        <div className="px-4 xl:px-0">
            <h2 className={combine("text-center font-bold font-playfair bg-gradient-to-r from-[#FF512F] to-[#F09819] bg-clip-text text-transparent",styles.h2)}>{meetingPointsData.heading}</h2>
            <div className= "flex-col md:flex-row flex items-center justify-start md:justify-between max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto">
                <p className={combine(styles.p5,"font-semibold underline font-playfair text-[#1155CC] my-3 md:my-5 lg:my-7  cursor-pointer hover:text-[#D6AB62]")}>
                    <Link href={meetingPointsData.links[0].href}>
                        {meetingPointsData.links[0].label}
                    </Link>
                </p>
                <p className={combine(styles.p5,"font-semibold underline font-playfair mb-2 md:mb-0 text-[#1155CC] cursor-pointer hover:text-[#D6AB62]")}>
                    <Link href={meetingPointsData.links[1].href}>
                        {meetingPointsData.links[1].label}
                    </Link>
                </p>
            </div>
            </div>
        <p className={combine(styles.p3,"text-zink text-center font-inter max-w-4xl xl:max-w-5xl mx-auto px-4 xl:px-0")}>{meetingPointsData.reminderText}</p>
        <About />
        <p className={combine(styles.p3,"text-zink text-center font-inter max-w-4xl xl:max-w-5xl mx-auto px-4 xl:px-0")}>{meetingPointsData.closingText}</p>
        </div>
    );
};

export default MeetingPoints;