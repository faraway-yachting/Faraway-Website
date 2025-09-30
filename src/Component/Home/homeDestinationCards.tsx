"use client";
import HomeDestinationData from "../../data/home/homeDestinations";
import Image from "next/image";
import Link from "next/link";
import { styles, combine, Button} from "../../styles";

// Function to truncate description text
const truncateDescription = (text: string, maxLength: number = 112) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

const HomeDestinationCards = () => {
  return (
    <div className="bg-white">
      <div className={styles.container}>
        <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8">
          {HomeDestinationData.map((item, index) => (
            <div
              key={index}
              className={combine(
                "group overflow-hidden transition-transform duration-300 border border-gray-300 rounded-tl-3xl rounded-b-lg hover:shadow-2xl hover:scale-[1.03] bg-white",
                styles.mt1
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
                    "h-[240px] sm:h-[230px] md:h-[245px] lg:h-[250px] xl:h-[280px]"
                  )}
                />
                <div className="absolute inset-0 bg-[#012A50]/20 z-0" />
                <div className="absolute bottom-0 bg-opacity-40 w-full text-white px-4 py-2 z-10">
                  <h3 className={combine("text-foreground font-extrabold transition-all duration-300", styles.h3)}>
                    {item.title}
                  </h3>
                </div>
              </div>
              {/* TEXT & BUTTON */}
              <div className={combine("px-4 py-4 flex flex-col justify-between", "min-h-[150px] md:min-h-[180px] lg:min-h-[200px]")}>
                <p className={combine("text-black", styles.p2)}>{truncateDescription(item.description, 112)}</p>
                <div className={combine("flex justify-between items-center gap-4", styles.mt1)}>
                  <Link href={`/${item.id}`}>
                    <p className={combine("text-zink font-extrabold underline cursor-pointer hover:text-[#d6ab62]", styles.h6)}>
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
        <p className={combine("text-zink font-semibold  text-center mt-5 font-inter",styles.p1)}>Each itinerary is fully flexible — your private yacht takes you exactly where you want to go.
        </p>
      </div>
    </div>
  );
};

export default HomeDestinationCards;
