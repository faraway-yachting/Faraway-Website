import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { styles, combine } from "@/styles";

// Interface for the content props
interface PrivateYachtContentProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
}
const PrivateYachtContent = ({
  title,
  description,
  imageSrc,
  imageAlt,
  features,
  className = ""
}: PrivateYachtContentProps) => {
  return (
    <section className={combine("relative bg-white overflow-hidden", styles.py4, className)}>
      <div className={combine("relative z-10 max-w-7xl mx-auto", styles.px3, styles.container)}>
        <div className={combine("text-center", styles.mb2)}>
          <h2 className={combine("text-mustard mb-4", styles.h2)}>{title}</h2>
          <p className={combine("font-normal font-sourceSansPro max-w-5xl text-zink mx-auto text-gray-700", styles.p1)}>
            {description}
          </p>
        </div>
        <div className={combine("grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-11 xl:gap-14 items-center", styles.gap1)}>
          <div className="w-full">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={590} 
              height={590} 
              className="w-full h-[350px] md:h-auto object-cover" 
            />
          </div>
          <div>
            <ul className="space-y-4 lg:space-y-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 max-w-lg">
                  <FaCheckCircle className="text-mustard mt-1 flex-shrink-0 text-xl sm:text-2xl" />
                  <div>
                    <p className={combine("font-bold text-zink", styles.p3)}>{feature.title}</p>
                    <p className={combine("text-zink", styles.p2)}>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateYachtContent;
