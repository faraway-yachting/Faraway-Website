import YachtCards from "@/common/yachtCards"
import { Button } from "@/styles";
import { styles, combine } from "@/styles/style";
const TodaysAdventure = () => {
    return (
        <div>
            <div className={combine(styles.px1, styles.containerLarge)}>
                <YachtCards columns={2} />
            </div>
            <div className={combine(styles.bgImage, "bg-[url('/images/homeimg5.png')]", styles.px2, styles.flexCenter, styles.minH2, styles.mt1)}>
                <div className="flex justify-start items-center max-w-5xl mx-auto w-full">
                    <div className={combine("bg-[#012A50]/83 max-w-[30rem] w-full", styles.padding1, "ml-0")}>
                        <h2 className={combine("text-white mt-0 xl:mt-2 leading-tight", styles.h2)}>
                            Book Your Phuket Sailing Adventure Today
                        </h2>
                        <p className={combine("text-center max-w-[26rem] text-white leading-[1.4rem]font-sourceSansPro", styles.p2, styles.mt3,)}>
                            Embark on an extraordinary journey in Phuket's breathtaking waters with Far Away Yacht Charters, experiencing the pinnacle of luxury. Explore their lavish
                            fleet of luxury yacht phuket and delight in unparalleled beauty and elegance. Call us now !
                        </p>
                        <div className={combine(styles.flexCenter, styles.mt2)}>
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
