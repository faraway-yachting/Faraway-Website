import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLine,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { RiMap2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
 
const quickLinks = [
  { label: "Crewed Yachts", href: "/yacht-carter-phuket" },
  { label: "Bareboat Yachts", href: "/bareboat-charter-thailand" },
  { label: "Day Trip Yachts", href: "/yacht-carter-phuket" },
  { label: "Luxury Yachts", href: "bareboat-charter-thailand" },
  { label: "Overnight Itineraries", href: "magical-destinations-with-private-yacht-in-phuket#overnightitineraries" },
];

const usefulLinks = [
  { label: "About Us", href: "/aboutus" },
  { label: "Mission Statement", href: "/aboutus#mission" },
  { label: "FAQ", href: "/aboutus#faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Blog", href: "/blog" },   
];

const iconClass = "text-[#D6AB61]";
const textclass = "text-[16px] font-[400]";
const heading = "text-[22px] lg:text-[24px] xl:text-[28px] font-[600] mb-4";

const Footer = () => {
  const renderLinks = (links) =>
    links.map((link, index) => (
      <li key={index} className="flex items-center gap-2 text-[16px] font-normal">
        <IoIosArrowForward className={iconClass} />
        <Link href={link.href}>
          <p className="hover:text-[#D6AB61] transition">{link.label}</p>
        </Link>
      </li>
    ));

  return (
    <footer className="bg-[#004D5C] text-white pt-10">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-0 lg:max-w-[78.2rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-8 mb-14">
        {/* Column 1 */}
        <div className="lg:col-span-3 xl:col-span-4">
          <h3 className={heading}>Faraway Yachting Co. Ltd.</h3>
          <div className="flex items-start gap-3 mb-2">
            <a
              href="tel:66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaPhoneAlt className={`mt-1 ${iconClass}`} />
              <span className={textclass}>+66 61 234 5623</span>
            </a>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <FaRegEnvelope className={`mt-1 ${iconClass}`} />
            <span className={textclass}>info@far-away.net</span>
          </div>
          <div className="flex items-start gap-3">
            <a
              href="https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8229322,98.344313,15z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
               className="flex items-center gap-2"
            >
              <RiMap2Line size={20} className={`mt-1 ${iconClass}`} />
              <span className="text-[16px] font-normal max-w-xs">
                40/1 Chaofa Road, Moo 9 Tambon Chalong, Amphoe Mueang Phuket,
                Chang Wat Phuket 83130
              </span>
            </a>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/FarawayYachting" },
              { Icon: FaInstagram, href: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ffarawayyachting%2F%3Ffbclid%3DIwAR0iAzKhJjfT0NVO5X5tKjjJ-uwaWQ4m6DQ03l9vQiGxJ8Q7OJQQByekk54&is_from_rle" },
              { Icon: FaWhatsapp, href: "https://tel:66612345623" },
              { Icon: FaLine, href: "https://line.me/ti/p/@farawayyachting" }
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white p-3 hover:bg-[#37ABC0] text-white rounded-full transition-colors duration-300"
              >
                <Icon className={iconClass} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-3 xl:col-span-2">
          <h3 className={heading}>Quick Links</h3>
          <ul className="space-y-3">{renderLinks(quickLinks)}</ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="lg:col-span-3 xl:col-span-2">
          <h3 className={heading}>Useful Links</h3>
          <ul className="space-y-3">{renderLinks(usefulLinks)}</ul>
        </div>

        {/* Column 4: Subscribe */}
        <div className="lg:col-span-3 xl:col-span-4">
          <h3 className={heading}>Subscribe</h3>
          <p className="text-[16px] font-normal mb-4">
            Subscribe to our newsletter to stay up-to-date with the latest
            news, promotions, and insider tips on Phuket yacht charters!
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"                         
              className="w-full p-2 rounded bg-white text-black placeholder:text-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white text-black placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="w-full p-2 rounded bg-[#D6AB61] hover:bg-yellow-600 text-black font-semibold"
            >        
              Send
            </button>
          </form>         
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#333333] text-[14px] sm:text-[16px] text-center textclass py-4">
        <p>© 2025 Copyright Faraway Yachting Co. Ltd.</p>
        <div className="flex justify-center flex-wrap gap-1 mt-2">
          {[
            { label: "Impressum", href: "/impressum" },
            { label: "|", href: "#" },
            { label: "Sitemap", href: "/sitemap" },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <p className="underline text-white hover:text-[#D6AB61] mx-1">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
