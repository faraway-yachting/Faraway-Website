"use client";

import { styles, combine } from "@/styles";
import HeadingContent from "@/common/heading";
import { FaStar, FaGoogle, FaTripadvisor } from "react-icons/fa";

const ChooseFarway = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
            <HeadingContent
                heading="Why Choose Faraway Yachting?"
                description="With nearly 30 years of experience in the Andaman Sea, Faraway Yachting is one of Phuket's most trusted yacht operators. Since 2022, our new management team has combined modern innovation with decades of expertise, earning over 750 ★★★★★ reviews from guests worldwide."
            />
        </div>

        {/* Description and Reviews Widgets Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description */}
            <div>
              <h3 className="text-3xl font-bold text-zink mb-6">
                Trusted by Travelers Worldwide
              </h3>
              <p className="text-xl text-zink leading-relaxed mb-6">
                Travelers highlight our professional crew, freshly prepared meals, and unforgettable itineraries as reasons why they return again and again. Whether it's a honeymoon, birthday, or family holiday, you can trust us to make your Phuket yacht rental exceptional.
              </p>
              <div className="text-4xl font-bold text-blue-600 mb-2">750+ ★★★★★ Reviews</div>
              <div className="text-gray-500">From guests around the world</div>
            </div>

            {/* Right Side - Review Widgets */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <FaGoogle className="w-8 h-8 text-blue-500" />
                  <div>
                    <h4 className="text-zink font-semibold text-lg">Google Reviews</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Read our latest reviews on Google</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <FaTripadvisor className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">TripAdvisor</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Check our ratings on TripAdvisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseFarway;
