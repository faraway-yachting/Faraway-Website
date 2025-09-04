"use client";

import { FaPhoneAlt, FaWhatsapp, FaLine } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { styles, combine } from "@/styles";

const ContactBanner = () => {
  return (
    <section className={combine("pt-6 md:pt-10 lg:pt-13 xl:pt-16 from-slate-50 to-blue-50")}>
      <div className={styles.container}>
     

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-7 xl:gap-8">
          {/* Phone Card */}
          <div className="group bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#034250] to-[#045a6b] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt size={24} className="text-white" />
              </div>
              <div>
                <p className={combine("font-semibold text-zink mb-1", styles.p1)}>Call Us</p>
                <p className={combine("text-zink font-medium", styles.p4)}>+66 61 234 5623</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <a
            href="https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp size={24} className="text-white" />
              </div>
              <div>
                <p className={combine("font-semibold text-zink mb-1", styles.p1)}>WhatsApp</p>
                <p className={combine("text-zink font-medium", styles.p4)}>+66 61 234 5623</p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=booking@faraway-yachting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MdOutlineMail size={24} className="text-white" />
              </div>
              <div>
                <p className={combine("font-semibold text-zink mb-1", styles.p1)}>Email Us</p>
                <p className={combine("text-zink font-medium", styles.p4)}>booking@faraway-yachting.com</p>
              </div>
            </div>
          </a>

          {/* Line Card */}
          <a
            href="https://line.me/ti/p/IF91DcUiYa"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaLine size={24} className="text-white" />
              </div>
              <div>
                <p className={combine("font-semibold text-zink mb-1", styles.p1)}>Line App</p>
                <p className={combine("text-zink font-medium", styles.p4)}>Connect Now</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default ContactBanner;