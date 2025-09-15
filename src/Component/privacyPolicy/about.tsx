import HeroSection2 from "@/common/hero2";
import PngIcons from "@/icons/pngIcon"
import { styles, combine } from "@/styles"

const About = () => {
    return (
        <div>
            <HeroSection2
                heading="Privacy Policy"
                breadcrumb="unique natural beauty and biodiversity"
                backgroundImage="/images/policyimg1.png"
            />

            <div className={combine(styles.container, "my-12 md:my-14 lg:my-16 xl:my-18")}>
                <div className={combine(styles.grid2Col, "md:gap-6 lg:gap-8 xl:gap-16")}>
                    <div>
                        <div className="flex items-center">
                            <p className="w-13 md:w-15 lg:w-18 xl:w-21 border-b-3 border-mustard z-10"></p>
                            <p className={combine("text-mustard font-semibold font-inter uppercase relative z-10 ms-3 text-[13px] md:text-[16px] lg:text-[16px] xl:text-[19px] font-inter")}>
                                Your privacy and security matter most </p>
                        </div>
                        <p className={combine(styles.h2, "mb-3 font-bold text-zink uppercase")}>Privacy Policy</p>
                        <p className={combine(styles.p3, "text-zink font-semibold mb-2")}>Last updated: October 31, 2024 </p>
                        <p className={combine(styles.p3, "text-zink leading-relaxed")}>This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br />
                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        </p>
                    </div>

                    <div className="flex items-center justify-center md:justify-end">
                        <img
                            src={PngIcons.policyimg2}
                            alt="Policy"
                            className="w-[270px] md:w-[320px] lg:w-[370px] xl:w-[420px] h-auto max-w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;