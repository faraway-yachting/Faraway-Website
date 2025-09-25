"use client";

import HeadingContent from "@/common/heading";
import { FaStar, FaGoogle, FaTripadvisor } from "react-icons/fa";
import { styles, combine } from "@/styles";

const ChooseFarway = () => {
  return (
    <section className={combine("py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50")}>
      <div className={combine(styles.containerLarge, " px-4 sm:px-6 lg:px-8")}>
        {/* Main Heading */}
        <div className="text-center mb-16">
            <HeadingContent
                heading="Why Choose Faraway Yachting?"
                description="With nearly 30 years of experience in the Andaman Sea, Faraway Yachting is one of Phuket's most trusted yacht operators. Since 2022, our new management team has combined modern innovation with decades of expertise, earning over 750 ★★★★★ reviews from guests worldwide."
            />
        </div>

        {/* Description and Reviews Widgets Section */}
        <div className={combine("bg-white rounded-2xl shadow-xl border border-gray-100  mb-16 ", styles.padding1)}>
          <div className={combine(styles.grid2Col, "gap-12 items-center")}>
            {/* Left Side - Description */}
            <div>
              <h3 className={combine(styles.h4, "font-bold text-zink font-playfair", styles.mb1)}>
                Trusted by Travelers Worldwide
              </h3>
              <p className={combine(styles.p2, "text-zink leading-relaxed  font-inter")}>
                Travelers highlight our professional crew, freshly prepared meals, and unforgettable itineraries as reasons why they return again and again. Whether it's a honeymoon, birthday, or family holiday, you can trust us to make your Phuket yacht rental exceptional.
              </p>
              <div className={combine("font-bold font-playfair text-blue-600", styles.mb1 ,styles.h4)}>750+ ★★★★★ Reviews</div>
              <div className={combine(styles.p2, "text-gray-500 font-inter")}>From guests around the world</div>
            </div>

            {/* Right Side - Review Widgets */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border cursor-pointer border-blue-200 hover:border-blue-300">
                <a href="https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8254214,98.3448494,18z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4 mb-4">
                  <FaGoogle className="w-8 h-8 text-blue-500" />
                  <div>
                    <h4 className={combine(styles.p3, "text-zink font-semibold font-playfair ")}>Google Reviews</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={combine(styles.p4, "text-gray-600 font-inter")}>Read our latest reviews on Google</p>
                </a>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 cursor-pointer hover:border-green-300">
              <a href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-4 mb-4">
                  <FaTripadvisor className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className={combine(styles.p3, "text-gray-900 font-semibold font-playfair")}>TripAdvisor</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={combine(styles.p4, "text-gray-600 font-inter")}>Check our ratings on TripAdvisor</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseFarway;
