import { styles, combine } from "@/styles";
import YachtCards from "@/common/yachtCards"
const SuperYachtCards = () =>{
    return(
        <div className={combine(styles.px1, styles.containerLarge,"mt-12")}>
        <YachtCards columns={2} />
    </div>
    )
}
export default SuperYachtCards