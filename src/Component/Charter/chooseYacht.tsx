import { chooseYachtData } from "@/data/charter/chooseYachtData";
import { styles, combine } from "@/styles";
import { FaUsers, FaStar, FaCrown, FaCheckCircle } from "react-icons/fa";

const ChooseYacht = () => {
  const getYachtIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaUsers className="text-blue-500 text-2xl" />;
      case 1:
        return <FaStar className="text-yellow-500 text-2xl" />;
      case 2:
        return <FaCrown className="text-purple-500 text-2xl" />;
      default:
        return <FaCheckCircle className="text-green-500 text-2xl" />;
    }
  };

  const getYachtBadge = (index: number) => {
    switch (index) {
      case 0:
        return "Budget-Friendly";
      case 1:
        return "Mid-Tier Luxury";
      case 2:
        return "Ultimate Luxury";
      default:
        return "Premium";
    }
  };

  const getYachtBadgeColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-blue-100 text-blue-800 border-blue-200";
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 2:
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-green-100 text-green-800 border-green-200";
    }
  };

  return (
    <section className={combine("relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden", styles.py4)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mustard/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className={combine("relative z-10 max-w-7xl mx-auto", styles.px3, styles.container)}>
        {/* Header Section */}
        <div className={combine("text-center", styles.mb2)}>
          <h2 className={combine("text-mustard mb-4", styles.h2)}>
            {chooseYachtData.title}
          </h2>
          <p className={combine("font-normal font-sourceSansPro max-w-4xl text-zink mx-auto text-gray-700", styles.p1)}>
            {chooseYachtData.description}
          </p>
        </div>

        {/* Yacht Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {chooseYachtData.features.map((yacht, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl hover:border-[#D6AB62] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={combine(
                  "px-3 py-1 mb-3 rounded-full text-sm font-semibold border",
                  getYachtBadgeColor(index)
                )}>
                  {getYachtBadge(index)}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <h3 className={combine("text-zink font-semibold mt-3", styles.h5)}>
                    {yacht.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={combine("text-gray-600 mb-2 leading-relaxed flex-grow", styles.p2)}>
                  {yacht.description}
                </p>

                {/* Capacity and Price Info */}
                <div className="space-y-4 mt-auto">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 group-hover:bg-mustard/5 transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                      <FaUsers className="text-blue-600 text-sm" />
                    </div>
                    <span className={combine("text-gray-800 font-semibold", styles.p3)}>
                      Capacity: {yacht.capacity}
                    </span>
                  </div>
               
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-mustard/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-mustard/20 via-mustard to-mustard/20 group-hover:from-mustard group-hover:via-mustard group-hover:to-mustard transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYacht;