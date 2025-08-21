import HeadingContent from "@/common/heading";
import { definitionsData } from "@/data/privacypolicy/privacyPolicyData";

const InfoSection = () => {
    return (
        <div className="max-w-[78.5rem] mx-auto my-12 md:my-14 lg:my-16 xl:my-18 px-4 xl:px-0">
            {/* First Section - Interpretation and Definitions */}
            <div className="mb-8 md:mb-10 lg:mb-16">
                {/* Main Heading with Icon */}
                <div className="text-center mb-6 md:mb-8 lg:mb-10">
                    <HeadingContent
                        heading="Interpretation and Definitions"
                    />
                </div>

                {/* Privacy Policy Definitions */}
                <div className="bg-white rounded-lg ">
                    <h2 className="text-[20px] md:text-[22px] lg:text-[28px] font-bold text-zink mb-6 font-sourceSansPro">
                        Privacy Policy:
                    </h2>

                    <div className="space-y-4">
                        {definitionsData.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-mustard rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <span className="font-semibold text-base lg:text-lg text-mustard font-inter">{item.term}:</span>
                                    <span className="text-zink ml-2 text-base lg:text-lg font-inter">{item.definition}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection