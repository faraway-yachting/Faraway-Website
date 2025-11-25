"use client";
import { styles, combine } from "@/styles";
import { CgDanger } from "react-icons/cg";
import { taxiRules, importantReminder, additionalInfo } from "@/data/phukettaxi";

const TaxiRules = () => {

  return (
    <div className={combine("bg-white", styles.py4)}>
      <div className={styles.container}>
      <h4 className={combine(styles.h2, "font-extrabold text-zink text-center text-zink capitalize")} style={{ boxShadow: "#00000040" }}>
       Rules for our Taxi
      </h4>

            <img src="/images/rframe.png" alt="" className={combine(" md:max-w-4xl lg:max-w-3xl w-full my-3 mx-auto")} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-3 xl:gap-4">
          {taxiRules.map(({ icon: Icon, text }, i) => (
            <div key={i} className={combine("bg-white border border-[#EFEFEF] hover:border-[#8094A7] rounded-2xl p-2 lg:p-4", styles.flexCol, "text-center hover:bg-[#E8F4F8] hover:shadow-lg transition-all duration-300 h-full")}>
              <div className={combine("bg-zink rounded-full", styles.flexCenter, "w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 mb-2 lg:mb-4 mx-auto mt-0 xl:mt-5")}>
                <Icon className="text-white text-2xl md:text-3xl" />
              </div>
              <p className={combine(styles.p2, "text-zink font-medium leading-relaxed")} dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          ))}
        </div>
          <div className="bg-white rounded-6xl shadow-xl p-3 lg:p-5 xl:p-6 flex items-center gap-4 max-w-7xl mx-auto mb-10 mt-8 ">

            {/* Icon */}
            <div className="hidden md:flex w-14 h-14 bg-[#D6ab62] rounded-xl items-center justify-center flex-shrink-0">
              <CgDanger className='text-white text-3xl' />
            </div>
            {/* Content */}
            <div className="flex-1">
              <h4 className={combine("text-zink font-bold",styles.h5)}>{importantReminder.title}</h4>
              <p className={combine('text-[#9D9D9D] font-inter font-medium leading-relaxed', styles.p3)}>
                {importantReminder.description}
              </p>
              <p className="text-zink font-inter font-semibold">{importantReminder.warning}</p>
            </div>
          </div>
      
        <p className={combine("text-zink font-inter text-center max-w-5xl mx-auto",styles.p3)}>{additionalInfo.grabBoltWarning}</p>
      </div>
    </div>
  );
};

export default TaxiRules;
