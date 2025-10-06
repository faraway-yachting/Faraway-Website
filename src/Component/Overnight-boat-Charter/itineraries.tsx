import BroadboatContent from "@/common/broadboatContent"
import { rentalCostData } from "@/data/overnight-boat/itinerariesdata"

const Itineraries = () =>{
    return(
        <div>
<BroadboatContent
    title={rentalCostData.title}
    description="Discover the perfect itinerary for your overnight boat charter in Phuket. Choose from our carefully crafted experiences designed to showcase the best of the Andaman Sea."
    heading="Recommended Itineraries"
    values={rentalCostData.features}
    imageSrc="/images/overnightimg1.jpg"
    imageAlt="Overnight boat charter itineraries in Phuket"
    showFrame={true}
/>
        </div>
    )
}
export default Itineraries