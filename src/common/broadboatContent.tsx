import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { styles, combine } from "@/styles";

interface BroadboatFeature {
    title?: string;
    description?: string;
    heading?: string;
 }

interface BroadboatContentProps {
    title?: string;
    description?: string;
    heading?: string;
    values: BroadboatFeature[];
    imageSrc: any;
    imageAlt: string;
    showFrame?: boolean;
    link?:string;
    href?:string;
}

const BroadboatContent = ({ title, description, heading, values, imageSrc,link, href, imageAlt, showFrame = true }: BroadboatContentProps) => (
    <section className={combine("relative bg-white overflow-hidden my-5 lg:my-8", styles.pb1, "pt-7 md:pt-9")}>
        <div className={combine("relative z-10", styles.px3, styles.container)}>
            <div className={combine("text-center", styles.mb2)}>
                <h2 className={combine("text-zink mb-4", styles.h2)}>{title}</h2>
                {showFrame && (
                    <img src="/images/rframe.png" alt="" className={combine(styles.w2, "my-3 mx-auto")} />
                )}
                <p className={combine("font-sourceSansPro max-w-5xl text-zink mx-auto text-zink", styles.p1)}>
                    {description}
                </p>
            </div>
            <div className={combine("items-center", styles.gap1, styles.grid2Col)}>
                <div>
                {heading &&(
            <h3 className={combine("text-zink font-semibold mb-3",styles.h3)}>{heading}</h3>
          )}
                    <ul className="space-y-4 lg:space-y-6">
                        {values.map((v, i) => (
                            <li key={i} className="flex items-start gap-3 max-w-lg">
                                <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                                <div>
                                    <p className={combine("font-bold text-zink", styles.p3)}>{v.title}</p>
                                    <p className={combine("text-zink font-sourceSansPro", styles.p2)}>{v.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    <Image src={imageSrc} alt={imageAlt} width={590} height={590} className="w-full h-auto object-cover" />
                </div>
            </div>
            <p className={combine("text-zink underline hover:text-[#D6AB62}",styles.h6)}>{link}</p>
        </div>
    </section>
);

export default BroadboatContent;
