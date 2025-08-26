import YachtCards from "@/common/yachtCards"
import Button from "@/Component/common/Button";

const TodaysAdventure = () => {
    return (
        <div>
            <div className="px-4 xl:px-0 max-w-[78.2rem] mx-auto">
                <YachtCards columns={2} />
            </div>
            <div className="relative w-full bg-cover bg-end bg-no-repeat overflow-hidden bg-[url('/images/homeimg5.png')] px-8 md:px-6 flex items-center justify-start min-h-[70vh] md:min-h-[73vh] lg:min-h-[79vh] xl:min-h-[85vh] mt-5 md:mt-6 lg:mt-7 xl:mt-9">
                <div className="flex justify-start items-center max-w-5xl mx-auto w-full">
                    <div className="bg-[#012A50]/83 max-w-[30rem] w-full p-7 md:p-7 lg:p-8 ml-0">
                        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-semibold font-playfair text-center my-4 text-white mt-0 xl:mt-2 leading-tight">
                            Book Your Phuket Sailing Adventure Today
                        </h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-normal font-sourceSansPro text-center max-w-[26rem] text-white mt-4 xl:mt-7 leading-[1.4rem]">
                            Embark on an extraordinary journey in Phuket's breathtaking waters with Far Away Yacht Charters, experiencing the pinnacle of luxury. Explore their lavish fleet of luxury yacht phuket and delight in unparalleled beauty and elegance. Call us now !
                        </p>
                        <div className="flex items-center justify-center mt-6">
                            <Button 
                                variant="primary"
                            >
                                Start Your Adventure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TodaysAdventure
