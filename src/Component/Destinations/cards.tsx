"use client";
import CardData from "../../data/destination/destinationCards";
import Image from "next/image";
import Link from "next/link";
import { styles, combine } from "@/styles/common";
import Button from "../common/Button";

const Cards = () => {
  return (
    <div className={combine("bg-white", styles.px1)}>
      <div className={styles.container}>
        <div className={combine(styles.grid3Col, "gap-4 md:gap-6 lg:gap-8", styles.px1)}>
          {CardData.map((item, index) => (
            <div
              key={index}
              className={combine(
                "group overflow-hidden transition-transform duration-300 border border-gray-300 rounded-tl-3xl rounded-b-lg hover:shadow-2xl hover:scale-[1.03] bg-white",
                styles.mt10
              )}
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt="card"
                  width={400}
                  height={300}
                  className={combine(
                    "object-cover w-full rounded-tl-3xl rounded-br-3xl",
                    "h-[270px] sm:h-[300px] md:h-[270px] lg:h-[280px] xl:h-[330px]"
                  )}
                />
                <div className="absolute bottom-0 bg-opacity-40 w-full text-white px-4 py-2">
                  <h4 className={combine("text-foreground font-playfair font-extrabold transition-all duration-300", styles.h2)}>
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* TEXT & BUTTON */}
              <div className={combine("px-4 py-4 flex flex-col justify-between", "min-h-[150px] md:min-h-[180px] lg:min-h-[200px]")}>
                <p className={combine("font-sourceSansPro text-black", styles.p2)}>{item.description}</p>
                <div className={combine("flex justify-between items-center gap-4", styles.mt4)}>
                  <Link href={`/${item.id}`}>
                    <p className={combine("text-zink font-poppins font-extrabold underline cursor-pointer hover:text-mustard", styles.h6)}>
                      Read More
                    </p>
                  </Link>
                  <Button variant="outline" href="/contact">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
