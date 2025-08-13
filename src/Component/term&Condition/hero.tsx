import PngIcons from "@/icons/pngIcon"
const HeroSection = () => {
    return (
        <div className="bg-[url('/images/cabin-charter.png')] bg-cover bg-center bg-no-repeat min-h-[30vh] md:min-h-[40vh] lg:min-h-[69vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-[#034250]/50 z-0 " />
            <div className="relative z-10">
                <div className="text-center flex flex-col justify-center items-center">
                    <p className="text-white font-semibold font-playfair pt-4 text-[28px] md:text-[44px] lg:text-[48px] xl:text-[40px] leading-tight">
                        Terms and Conditions
                    </p>
                    <img
                        src={PngIcons.rframe2}
                        alt="Divider"
                        className="w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px] flex justify-center text-center mx-auto my-4"
                    />
                    <p className="text-white font-semibold font-playfair text-[18px] md:text-[24px] xl:text-[28px]">
                        Valid for all charters booked after the 1st of January 2025
                    </p>
                </div>

            </div>
        </div>
    )
}
export default HeroSection