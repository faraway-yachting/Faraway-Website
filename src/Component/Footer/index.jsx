"use client";
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
import { useState, useEffect } from "react";

const quickLinks = [
  { label: "Crewed Yachts", href: "/yacht-charter-phuket" },
  { label: "Bareboat Yachts", href: "/bareboat-charter-thailand" },
  { label: "Day Trip Yachts", href: "/yacht-charter-phuket" },
  { label: "Super Yachts", href: "/super-yacht-charter-phuket" },
  { label: "Overnight Itineraries", href: "magical-destinations-with-private-yacht-in-phuket#overnightitineraries" },
  { label: "Yacht Management", href: "/yacht-management-phuket" },

];

const usefulLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Mission Statement", href: "/about-us#mission" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Blog", href: "/blog" },
  { label: "Sitemap", href: "/sitemap" },
];

const iconClass = "text-[#D6AB61]";
const textclass = "text-[16px] font-[400]";
const heading = "text-[22px] lg:text-[24px] xl:text-[28px] font-[400] mb-4 font-playfair";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('booking@faraway-yachting.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
    }
  };

  const copyPhoneToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('+66 61 234 5623');
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
    }
  };
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
    <footer className="bg-zink text-white pt-10">
      <div className="px-4 xl:px-0 lg:max-w-[78.2rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-8 mb-14 font-sourceSansPro">
        {/* Column 1 */}
        <div className="lg:col-span-3 xl:col-span-4">
          <p className={heading}>Faraway Yachting Co. Ltd.</p>
          <div className="flex items-start gap-3 mb-2">
            <button
              onClick={copyPhoneToClipboard}
              className="flex items-center gap-2 cursor-pointer hover:text-[#D6AB61] transition-colors"
            >
              <FaPhoneAlt className={`mt-1 ${iconClass}`} />
              <span className={`${textclass} ${phoneCopied ? 'text-white' : ''}`}>
                {phoneCopied ? 'Copied!' : '+66 61 234 5623'}
              </span>
            </button>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <button
              onClick={copyEmailToClipboard}
              className="flex items-center gap-2 cursor-pointer hover:text-[#D6AB61] transition-colors"
            >
              <FaRegEnvelope className={`mt-1 ${iconClass}`} />
              <span className={`${textclass} ${emailCopied ? 'text-white' : ''}`}>
                {emailCopied ? 'Copied!' : 'booking@faraway-yachting.com'}
              </span>
            </button>
          </div>
          <div className="flex items-start gap-3">
            <a
              href="https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8229322,98.344313,15z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <RiMap2Line size={20} className={`mt-1 ${iconClass}`} />
              <span className="text-[16px] font-normal max-w-xs font-sourceSansPro">
                40/1 Chaofa Road, Moo 9 Tambon Chalong, Amphoe Mueang Phuket,
                Chang Wat Phuket 83130
              </span>
            </a>
          </div>
          {/* socail icons */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/FarawayYachting" },
              { Icon: FaInstagram, href: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ffarawayyachting%2F%3Ffbclid%3DIwAR0iAzKhJjfT0NVO5X5tKjjJ-uwaWQ4m6DQ03l9vQiGxJ8Q7OJQQByekk54&is_from_rle" },
              { Icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0" },
              { Icon: FaLine, href: "https://line.me/ti/p/IF91DcUiYa" }
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
          <p className={heading}>Quick Links</p>
          <ul className="space-y-3">{renderLinks(quickLinks)}</ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="lg:col-span-3 xl:col-span-2">
          <p className={heading}>Useful Links</p>
          <ul className="space-y-3">{renderLinks(usefulLinks)}</ul>
        </div>

        {/* Column 4: Subscribe */}
        <div className="lg:col-span-3 xl:col-span-4">
          <p className={heading}>Subscribe</p>
          <p className="text-[16px] font-normal mb-4">
            Subscribe to our newsletter to stay up-to-date with the latest
            news, promotions, and insider tips on Phuket yacht charters!
          </p>

          {/* Replaced form with iframe */}
          <div className="">
            {isMounted && (
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/xkQihe7gv1EoPJiKH3Jx"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-xkQihe7gv1EoPJiKH3Jx"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 8"
                data-height="402"
                data-layout-iframe-id="inline-xkQihe7gv1EoPJiKH3Jx"
                data-form-id="xkQihe7gv1EoPJiKH3Jx"
                title="Form 8"
                loading="lazy"
              >
              </iframe>
            )}
          </div>

          {/* Script tag for the iframe */}
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
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
