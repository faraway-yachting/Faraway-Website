
import HeadingContent from "@/common/heading";
import { whatWeCollectData } from "@/data/charter/chooseYachtData";
import { styles, combine } from "@/styles";
import { IconType } from "react-icons";

const SpecialOccasionsCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: IconType }) => (
    <div className="bg-white rounded-xl p-5 lg:p-3 xl:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group relative overflow-hidden h-full flex flex-col">
        <div className={combine(styles.flexCol, "items-center text-center gap-4 flex-1")}>
            <div className="w-14 h-14 bg-mustard rounded-xl flex items-center justify-center p-3 shadow-md flex-shrink-0">
                <Icon className="w-full h-full text-white" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className={combine("text-mustard font-semibold transition-colors duration-300 text-[19px]")}>{title}</h4>
                <p className={combine(styles.p4, "text-zink text-center leading-relaxed")}>{description}</p>
            </div>
        </div>
        
        {/* Animated bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-mustard group-hover:w-full transition-all duration-500 rounded-t-full"></div>
    </div>
);

const SpecialOccasions = () => (
    <div className={combine("relative", styles.mb2)}>
        <div className="relative bg-zink py-8">
            <div className={combine("relative py-[60px]", styles.container)}>
                <div className={combine("text-center", styles.mb2)}>
                    <div className="text-white [&_h2]:text-white [&_p]:text-white">
                        <HeadingContent
                            heading="Yacht Rental for Special Occasions in Phuket"
                            description="Nothing elevates a celebration like having a private yacht to yourself." />
                    </div>
                </div>
                
                <div className={styles.containerLarge}>
                    <div className={combine( "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 xl:gap-8 mt-12 items-stretch")}>
                        {whatWeCollectData.map((item) => (
                            <SpecialOccasionsCard
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

export default SpecialOccasions;