import BroadboatContent from "@/common/broadboatContent"
import { rentalCostData } from "@/data/overnight-boat/itinerariesdata"

const Itineraries = () => {
    return (
        <div>
            <BroadboatContent
                title={rentalCostData.title}
                values={rentalCostData.features}
                imageSrc="/images/overnight1.png"
                imageAlt="Overnight boat charter itineraries in Phuket"
                showFrame={true}
            />
        </div>
    )
}
export default Itineraries