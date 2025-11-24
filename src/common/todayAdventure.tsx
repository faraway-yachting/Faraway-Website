import { styles, combine } from "@/styles";
import Button from "@/styles/Button";

const TodaysAdventure = () => {
    return (
        <div className={combine(styles.px1)}>
            <div className={combine(styles.bgImage, "bg-[url('/images/homeimg5.png')]", styles.px2, styles.flexCenter, styles.minH2)}>
                <div className="flex justify-start items-center max-w-5xl mx-auto w-full">
                    <div className={combine("bg-[#012A50]/83 max-w-[30rem] w-full", styles.padding1, "ml-0")}>
                        <h2 className={combine("text-white mt-0 xl:mt-2 leading-tight", styles.h3)}>
                            Book Your Phuket Sailing Adventure Today
                        </h2>
                        <p className={combine("text-left max-w-[26rem] text-white leading-[1.4rem] font-sourceSansPro", styles.p2, styles.mt3)}>
                            Embark on an extraordinary journey in Phuket's breathtaking waters with Far Away Yacht Charters, experiencing the pinnacle of luxury. Explore their lavish
                            fleet of luxury yacht phuket and delight in unparalleled beauty and elegance. Call us now !
                        </p>
                        <div className={combine("flex items-center", styles.mt2)}>
                            <Button
                                variant="primary"
                                href="/contact"
                            >
                                Start Your Adventure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysAdventure;