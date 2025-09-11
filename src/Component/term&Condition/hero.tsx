import PngIcons from "@/icons/pngIcon"
import { styles, combine } from "@/styles"

const HeroSection = () => {
    return (
        <div className={combine("bg-[url('/images/cabin-charter.png')] min-h-[30vh] md:min-h-[40vh] lg:min-h-[69vh]", styles.minH1, styles.flexCol , styles.flexCenter, styles.px1,styles.bgImage)}>
            <div className="absolute inset-0 bg-[#012A50]/50 z-0 " />
            <div className="relative z-10">
                <div className="text-center flex flex-col justify-center items-center">
                    <p className={combine("text-white font-semibold pt-4", styles.h2, "leading-tight")}>
                        Terms and Conditions
                    </p>
                    <img
                        src={PngIcons.rframe2}
                        alt="Divider"
                        className="w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px] flex justify-center text-center mx-auto my-4"
                    />
                    <p className="text-white font-semibold font-sourceSansPro text-[18px] md:text-[24px] xl:text-[28px]">
                        Valid for all charters booked after the 1st of September 2025
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HeroSection
