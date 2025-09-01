
import HeadingContent from "@/common/heading";
import { whatWeCollectData } from "@/data/superyacht/cardData";
import { styles, combine } from "@/styles";
import { IconType } from "react-icons";

const InfoCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: IconType }) => (
    <div className="bg-white rounded-xl p-5 lg:p-3 xl:p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group relative overflow-hidden">
        <div className={combine(styles.flexCol, "items-center text-center gap-4")}>
            <div className="w-14 h-14 bg-mustard rounded-xl flex items-center justify-center p-3 shadow-md">
                <Icon className="w-full h-full text-white" />
            </div>
            <div className="space-y-3">
                <h3 className={combine(styles.p1, "text-mustard font-semibold transition-colors duration-300")}>{title}</h3>
                <p className={combine(styles.p4, "text-zink text-center")}>{description}</p>
            </div>
        </div>
        
        {/* Animated bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-mustard group-hover:w-full transition-all duration-500 rounded-t-full"></div>
    </div>
);

const DreamyYacht = () => (
    <div className={combine("relative", styles.mb2)}>
        <div className="relative bg-zink py-8">
            <div className={combine("relative py-[60px]", styles.container)}>
                <div className={combine("text-center", styles.mb2)}>
                    <div className="text-white [&_h2]:text-white [&_p]:text-white">
                        <HeadingContent
                            heading="Book Your Luxury Super Yacht in Phuket"
                            description="From romantic getaways to family adventures and VIP corporate charters—your dream Phuket yacht journey begins with us." />
                    </div>
                </div>
                
                <div className={styles.containerLarge}>
                    <div className={combine(styles.grid4Col, "mt-12")}>
                        {whatWeCollectData.map((item) => (
                            <InfoCard
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DreamyYacht;