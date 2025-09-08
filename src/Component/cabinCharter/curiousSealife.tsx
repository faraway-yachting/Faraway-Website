"use client";

import { useState } from "react";
import { Sealife } from "@/data/cabincharter/saelife";
import { RefObject } from "react";
import { styles, combine } from "@/styles/style";

interface SealifeFAQProps {
  sectionRef: RefObject<HTMLDivElement | null>;
}
const SealifeFAQ = ({ sectionRef }: SealifeFAQProps) => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const faqArray = Sealife || [];
  const firstColumn = faqArray.filter((_, i) => i % 2 === 0);
  const secondColumn = faqArray.filter((_, i) => i % 2 !== 0);

  const toggleItem = (index: number) => {
    setActiveId(prev => (prev === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="bg-white py-8 md:py-10 lg:py-12 px-4 lg:px-5 xl:px-8">
      <div className={styles.containerLarge}>
        {/* Heading */}
        <div className="flex justify-center flex-col items-center mb-12">
          <h2 className={combine(styles.h2, "text-zink font-semibold mb-1")}>
            FAQS About Sailing
          </h2>
          <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] my-3 mx-auto"
          />
          <p className={combine(styles.p3, "text-zink text-center font-normal md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto")}>
            Frequently asked questions about your sailing adventure
          </p>
        </div>

        {/* Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
          {[firstColumn, secondColumn].map((column, columnindex) => (
            <div className="space-y-6" key={columnindex}>
              {column.map((item, index) => {
                const acutalIndex = columnindex === 0 ? index * 2 : index * 2 + 1;
                const isOpen = activeId === acutalIndex;
                return (
                  <div
                    key={acutalIndex}
                    className={`border border-gray-200 rounded-lg shadow-sm transition duration-200 ${isOpen ? "shadow-md" : "hover:shadow-md"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(acutalIndex)}
                      className="flex justify-between items-center w-full pb-3 pt-3 px-2 md:px-3 lg:px-4 cursor-pointer text-left"
                    >
                      <p className={combine("font-semibold text-zink max-w-lg", styles.p1)}>
                        {item.place}
                      </p>
                      <span className="text-2xl font-bold text-gray-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-3 lg:px-4 pb-3 lg:pb-4 xl:pb-6">
                        <p className={combine("text-zink", styles.p2)}>
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SealifeFAQ;
