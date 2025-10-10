"use client";

import { useState } from "react";
import { superYacht } from "@/data/superyacht/cardData";
import { styles, combine } from "@/styles";
import About from "@/Component/Home/about";
import HeadingContent from "@/common/heading";
interface FAQItem {
    place: string;
    description: string;
    link?: string;
    href?: string;
}

const SuperYachtFAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const faqArray: FAQItem[] = superYacht || [];
  const firstColumn = faqArray.filter((_: FAQItem, i: number) => i % 2 === 0);
  const secondColumn = faqArray.filter((_: FAQItem, i: number) => i % 2 !== 0);

  const toggleItem = (index: number) => {
    setActiveId(prev => (prev === index ? null : index));
  };

  return (
    <div>
    <section className={combine("bg-white py-6", styles.px4)}>
      <div className={styles.containerLarge}>
        {/* Heading */}
        <div className={combine("mb-12", styles.flexCol,styles.flexCenter)}>
          <h2 className={combine(styles.h2, "text-zink text-center mb-1")}>
          FAQs For Your Super Yacht Charter in Phuket, Thailand
          </h2>
          <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[300px] md:w-[400px] lg:w-[500px] my-3 mx-auto"
          />
       
        </div>

        {/* Accordion */}
        <div className={combine(styles.grid2Col, "gap-4 lg:gap-6 xl:gap-8")}>
          {[firstColumn, secondColumn].map((column: FAQItem[], columnindex: number) => (
            <div className="space-y-6" key={columnindex}>
              {column.map((item: FAQItem, index: number) => {
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
                      className="flex justify-between items-center w-full p-2 md:p-3 lg:p-4 cursor-pointer text-left"
                    >
                      <p className={combine("font-bold text-zink max-w-lg h-auto md:h-10 lg:h-14",styles.p3)}>
                        {item.place}
                      </p>
                      <span className="text-2xl font-bold text-gray-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-6">
                        <p className={combine("text-zink",styles.p4)}>
                          <span dangerouslySetInnerHTML={{ __html: item.description }} />
                          {item.link && item.href && (
                            <>
                              {' '}
                              <a 
                                href={item.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline font-semibold"
                              >
                                {item.link}
                              </a>
                            </>
                          )}
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
    <div className="mt-16">
                <HeadingContent
                    heading="Check Availability for Your Private Super Yacht Charter Phuket"
                />
                <About />
            </div>
    </div>
  );
};

export default SuperYachtFAQ;
