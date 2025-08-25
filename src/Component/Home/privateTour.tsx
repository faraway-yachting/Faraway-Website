import HeadingContent from "@/common/heading"
import { styles, combine } from "@/styles/common";

const PrivateYacht_Tour = () => {
    const {mb2 ,mt3, container, mt6, flexCenter, } = styles;

    return (
        <div className={combine(styles.mb2, styles.mt3)}>
            <HeadingContent
                heading="Private Yacht tour with local experts"
                description="Experience the best of Phuket's stunning coastline and hidden gems on a private yacht tour with local experts. With a dedicated crew and captain at your disposal, you can customize your itinerary to explore the islands, beaches and coves that interest you most around the Phuket."
            />
            {/* Video Section */}
            <div className={combine(styles.container)}>
                <div className={combine("max-w-5xl mx-auto", styles.mt6, styles.flexCenter)}>
                    <div className={combine("relative w-full overflow-hidden shadow-lg", styles.height1)}>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/6g9jfeUr_oE?start=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PrivateYacht_Tour