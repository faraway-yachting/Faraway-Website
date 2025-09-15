import { styles, combine } from "@/styles";
import YachtCards from "@/common/yachtCards"
const SuperYachtCards = () =>{
    return(
        <div className={combine(styles.containerLarge,"px-0 lg:px-4 xl:px-0 mt-12")}>
        <YachtCards columns={2} showLoadMore={true} initialLoadCount={9} loadMoreCount={9} />
    </div>
    )
}
export default SuperYachtCards