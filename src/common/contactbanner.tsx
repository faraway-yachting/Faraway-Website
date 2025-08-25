"use client";

import { FaPhoneAlt, FaWhatsapp, FaLine } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactBanner = () => {
  return (
    <section className="pt-16 px-4  from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
     

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#034250] to-[#045a6b] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-zink text-lg mb-1 font-sourceSansPro">Call Us</h3>
                <p className="text-zink text-base font-medium font-sourceSansPro">+66 61 234 5623</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <a
            href="https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-zink text-lg font-sourceSansPro mb-1">WhatsApp</h3>
                <p className="text-zink text-base font-medium font-sourceSansPro">+66 61 234 5623</p>
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=info@far-away.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MdOutlineMail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-zink text-lg font-sourceSansPro mb-1">Email Us</h3>
                <p className="text-zink text-base font-medium font-sourceSansPro">info@far-away.net</p>
              </div>
            </div>
          </a>

          {/* Line Card */}
          <a
            href="https://line.me/ti/p/IF91DcUiYa"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaLine size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-zink text-lg font-sourceSansPro mb-1">Line App</h3>
                <p className="text-zink text-base font-medium font-sourceSansPro">Connect Now</p>
              </div>
            </div>
          </a>
        </div>

      
      </div>
    </section>
  );
};

export default ContactBanner;