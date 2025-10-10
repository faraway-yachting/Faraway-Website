import { styles, combine } from "@/styles";
import YachtCards from "@/common/yachtCards"
import About from "@/Component/Home/about";
import HeadingContent from "@/common/heading";
const SuperYachtCards = () => {
    return (
        <div>
            <div className="mt-12 md:mt-15 lg:mt-18">
                <HeadingContent
                    heading="Book Your Super Yacht Charter in Phuket Today"
                />
                <About />
            </div>
            <div className={combine(styles.containerLarge, "px-0 lg:px-4 xl:px-0 mt-15")}>
                <YachtCards columns={2} showLoadMore={true} initialLoadCount={9} loadMoreCount={9} />
            </div>
            <div className="mt-14 md:mt-17 lg:mt-20">
                <HeadingContent
                    heading="Plan Your Luxury Yacht Charter Phuket Experience Now"
                />
                <About />
            </div>
        </div>
    )
}
export default SuperYachtCards