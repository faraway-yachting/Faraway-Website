import HeroSection2 from "@/common/hero2";
import PngIcons from "@/icons/pngIcon"
const About = () => {
    return (
        <div>
            <HeroSection2
                heading="Privacy Policy"
                breadcrumb="unique natural beauty and biodiversity"
                backgroundImage="/images/policyimg1.png"
            />

            <div className="max-w-[78.5rem] mx-auto my-12 md:my-14 lg:my-16 xl:my-18 px-4 xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-6 xl:gap-16">
                    <div>
                        <div className="flex items-center">
                            <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                            <p className="text-mustard font-semibold text-base lg:text-[18px] xl:text-[20px] font-sourceSansPro uppercase relative z-10 ms-3">
                                Your privacy and security matter most </p>
                        </div>
                        <p className="text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold font-playfair text-zink mb-3 uppercase">Privacy Policy</p>
                        <p className="text-base lg:text-lg xl:text-[22px] text-zink font-semibold font-sourceSansPro mb-2">Last updated: October 31, 2024 </p>
                        <p className="text-base lg:text-lg xl:text-[19px] text-zink font-normal font-sourceSansPro">This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br />
                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        </p>
                    </div>

                    <div className="flex items-center justify-end">
                        <img
                            src={PngIcons.policyimg2}
                            alt="Policy"
                            className="w-[270px] md:w-[320px] lg:w-[370px] xl:w-[420px] h-auto max-w-full object-contain"
                        />
                    </div>


                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default About;