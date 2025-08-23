import { FaPhoneAlt, FaWhatsapp, FaLine } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const cardClass =
  "flex flex-col items-center text-center gap-3 px-6 py-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300";

const ContactBanner = () => {
  return (
    <div className="mx-4 my-10">
      <div className="bg-gray-100 rounded-lg max-w-[78.2rem] mx-auto px-6 md:px-12 py-10">
        <div className=" items-center lg:items-start gap-8">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-semibold leading-snug text-zink mb-6">
              Contact us now to 
              book your private yacht <br /> charter in Phuket!
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full ">
            <div className={cardClass}>
              <div className="w-12 h-12 bg-zink rounded-full flex items-center justify-center">
                <FaPhoneAlt size={20} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Tel: +66 61 234 5623</span>
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className="w-12 h-12 bg-zink rounded-full flex items-center justify-center">
                <FaWhatsapp size={20} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">WhatsApp: +66 61 234 5623</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=info@far-away.net"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className="w-12 h-12 bg-zink rounded-full flex items-center justify-center">
                <MdOutlineMail size={20} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">info@far-away.net</span>
            </a>

            <a
              href="https://line.me/ti/p/IF91DcUiYa"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <div className="w-12 h-12 bg-zink rounded-full flex items-center justify-center">
                <FaLine size={20} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Connect to Line App</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
