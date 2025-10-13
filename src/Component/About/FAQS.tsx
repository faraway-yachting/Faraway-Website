"use client";

import { useState } from "react";
import { AboutContent } from "@/data/about/abouFAQS";
import SetSail from "@/common/yarchtcharter";
import { styles, combine } from "@/styles";

const AboutSection_FAQs = () => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const faqArray = AboutContent || [];
  const firstColumn = faqArray.filter((_, i) => i % 2 === 0);
  const secondColumn = faqArray.filter((_, i) => i % 2 !== 0);

  const toggleItem = (index: number) => {
    setActiveId((prev) => (prev === index ? null : index));
  };
  return (
    <section className="bg-white mb-14" id="faq">
      <div className={combine("mb-15", styles.container)}>
        {/* Heading */}
        <div className={combine("mb-8 lg:mb-10 xl:mb-12", styles.flexCenter, styles.flexCol)}>
          <h2 className={combine(styles.h2, "text-zink mb-1")}>
            FAQs
          </h2>
          <img src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] my-3 mx-auto"
          />
        </div>
        {/* Accordion */}
        <div className={styles.grid2Col}>
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div className="space-y-3 lg:space-y-4 xl:space-y-6" key={columnIndex}>
              {column.map((item, index) => {
                const actualIndex = columnIndex === 0 ? index * 2 : index * 2 + 1;
                const isOpen = activeId === actualIndex;
                return (
                  <div
                    key={actualIndex}
                    className={`border border-gray-200 rounded-lg shadow-sm transition duration-200 ${isOpen ? "shadow-md" : "hover:shadow-md"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(actualIndex)}
                      className="flex justify-between items-center w-full py-2 lg:py-3 xl:py-4 px-2 lg:px-3 xl:px-4 cursor-pointer text-left"
                    >
                      <p className={combine("font-bold text-zink max-w-lg", styles.p3)}>
                        {item.place}
                      </p>
                      <span className="text-2xl font-bold text-gray-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-6">
                        {item.description.split("\n").map((line: string, i: number) => {
                          const trimmedLine = line.trim();
                          const withBold = trimmedLine.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                          const withDashSpan = withBold.replace(
                            /^–\s?/,
                            '<span class="text-zinc-800 font-semibold">–</span> '
                          );
                          return (
                            <p
                              key={i}
                              className={combine("text-zink mb-2 text-[15px] lg:text-[16px] xl:text-[17px] font-inter")}
                              dangerouslySetInnerHTML={{ __html: withDashSpan }}
                            />
                          );
                        })}
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
export default AboutSection_FAQs;
