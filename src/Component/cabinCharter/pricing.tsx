"use client";
import { LuAnchor } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";
import HeadingContent from "@/common/heading";
import { pricingOptions } from "@/data/cabincharter/momentsData";
import Button from "@/styles/Button";
import { styles, combine } from "@/styles/style";

interface PricingSectionProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
  showContactButton?: boolean;
  contactRef?: React.RefObject<HTMLElement | null>;
}

const PricingSection = ({ sectionRef, showContactButton, contactRef }: PricingSectionProps) => {
  return (
    <section ref={sectionRef} className="bg-[#E6ECED1A] py-5 md:py-8 px-14 md:px-16 lg:px-4 xl:px-0">
      <div className={styles.containerLarge}>
        <div className="text-center mb-12">
          <HeadingContent
            heading="Pricing"
            description="Premium island-hopping experiences at crystal-clear prices!" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-3 xl:gap-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white p-3 xl:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-[#D6AB62] transition duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className={combine( "text-[13px] lg:text-[14px] xl:text-[15px] font-medium text-mustard mb-2 leading-tight")}>
                  {option.title}
                </h3>
                <p className={combine("text-zink font-bold leading-none text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px]")}>
                  From {option.price}
                </p>
                <p className={combine(styles.p4, "text-zink font-semibold", styles.mb1)}>{option.per}</p>
                <div className={combine("flex items-center gap-2", styles.mb1)}>
                  <p className="w-8 border-b-2 border-mustard"></p>
                  <p className={combine(styles.p4, "text-zink font-semibold italic")}>
                    {option.type}
                  </p>
                </div>
                <ul className={combine("space-y-2 text-zink text-[15px] font-inter")}>
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-mustard text-xl mt-1"><GoCheckCircle /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={combine(styles.flexCenter,"mt-4")}>
                {showContactButton && contactRef && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      contactRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      });
                    }}
                  >
                    <div className="flex items-center">
                      <span className="me-2"><LuAnchor /></span>Book Now
                    </div>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
