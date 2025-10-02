"use client";

import { useState } from "react";
import { FAQContent } from "@/data/home/FAQ";
import { styles, combine } from "@/styles";

const AboutSection_FAQs = () => {
  const [activeId, setActiveId] = useState<number | null>(0);
  const faqArray = FAQContent || [];
  const firstColumn = faqArray.filter((_, i) => i % 2 === 0);
  const secondColumn = faqArray.filter((_, i) => i % 2 !== 0);

  const toggleItem = (index: number) => {
    setActiveId((prev) => (prev === index ? null : index));
  };

  const renderDescription = (description: string, link?: string) => {
    return description.split("\n").map((line: string, i: number) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return null;
      
      // Handle bold text formatting (both markdown and HTML)
      let withBold = trimmedLine.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Also ensure existing <strong> tags are preserved
      withBold = withBold.replace(/<strong>(.*?)<\/strong>/g, "<strong>$1</strong>");
      
      // Handle dash formatting for lists and make point names semibold
      const withDashSpan = withBold.replace(
        /^–\s?([^:]+):/,
        '<span class="text-zinc-800 font-semibold">–</span> <span class="font-semibold">$1:</span>'
      );
      
      return (
        <p
          key={i}
          className={combine("text-zink mb-3 text-[15px] lg:text-[16px] xl:text-[17px] font-inter leading-relaxed [&_strong]:font-semibold")}
          dangerouslySetInnerHTML={{ __html: withDashSpan }}
        />
      );
    });
  };

  return (
    <section className="bg-white my-16" id="faq">
      <div className={combine("mb-15", styles.container)}>
        {/* Heading */}
        <div className={combine("mb-8 lg:mb-10 xl:mb-12", styles.flexCenter, styles.flexCol)}>
          <h2 className={combine(styles.h2, "text-zink text-center mb-1")}>
          Frequently Asked Questions – Phuket Yacht Charter
          </h2>
          <img 
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] my-3 mx-auto"
          />
        </div>

        {/* Accordion */}
        <div className={styles.grid2Col}>
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div className="space-y-4 lg:space-y-5 xl:space-y-6" key={columnIndex}>
              {column.map((item, index) => {
                const actualIndex = columnIndex === 0 ? index * 2 : index * 2 + 1;
                const isOpen = activeId === actualIndex;
                return (
                  <div
                    key={actualIndex}
                    className={`bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md ${
                      isOpen ? "shadow-lg border-zink/20" : "hover:border-zink/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(actualIndex)}
                      className="flex justify-between items-start w-full py-4 lg:py-5 xl:py-6 px-4 lg:px-5 xl:px-6 cursor-pointer text-left group"
                    >
                      <h3 className={combine(
                        "font-semibold text-zink pr-4 transition-colors duration-200 group-hover:text-zink/80",
                        styles.p1
                      )}>
                        {item.place}
                      </h3>
                      <div className={combine(
                        "flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-zink/10",
                        isOpen ? "bg-zink/10" : ""
                      )}>
                        <span className={combine(
                          "text-lg font-bold text-gray-500 transition-transform duration-200",
                          isOpen ? "rotate-180" : ""
                        )}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 lg:px-5 xl:px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4">
                          {renderDescription(item.description, item.link)}
                          {item.link && (
                            <div className="mt-4">
                              <a 
                                href={item.href || "#"} 
                                className={combine(
                                  "inline-flex items-center underline text-zink font-semibold hover:text-[#d6ab62] hover:font-bold transition-colors duration-200",
                                  styles.p2
                                )}
                              >
                                {item.link}
                            
                              </a>
                            </div>
                          )}
                        </div>
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
