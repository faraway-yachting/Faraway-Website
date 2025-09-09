"use client";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { useState } from "react";

const Header = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('booking@faraway-yachting.com');
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000); 
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    const copyPhoneToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('+66 61 2345623');
            setPhoneCopied(true);
            setTimeout(() => setPhoneCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy phone: ', err);
        }
    };

    return (
        <div className="bg-zink hidden md:block">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-white text-sm px-4 xl:px-3 py-4">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6">
                    <button
                        onClick={copyPhoneToClipboard}
                        className="flex items-center text-sm gap-2 cursor-pointer hover:text-gray-300 transition-colors"
                    >
                        <FaPhoneAlt />
                        {phoneCopied ? 'Phone No. Copied!' : '+66 61 2345623'}
                    </button>
                    <button
                        onClick={copyEmailToClipboard}
                        className="flex items-center text-sm gap-2 cursor-pointer hover:text-gray-300 transition-colors"
                    >
                        <MdOutlineEmail />
                        {emailCopied ? 'Email Copied!' : 'booking@faraway-yachting.com'}
                    </button>
                    <a
                        href="https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8231625,98.3437787,15z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    >
                        <BsFillSendFill /> 40/1 Moo 9 Chalong Phuket
                    </a>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <a
                        href="https://www.facebook.com/FarawayYachting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    >  <FaFacebook size={20} className="cursor-pointer hover:text-gray-300" />
                    </a>
                    <a
                        href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ffarawayyachting%2F%3Ffbclid%3DIwAR0iAzKhJjfT0NVO5X5tKjjJ-uwaWQ4m6DQ03l9vQiGxJ8Q7OJQQByekk54&is_from_rle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    > <FaInstagram size={20} className="cursor-pointer hover:text-gray-300" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@farawayyachting?_t=8gw59HTgdY9&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    ><FaTiktok size={20} className="cursor-pointer hover:text-gray-300" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/faraway-yachting-co-ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    ><FaLinkedin size={20} className="cursor-pointer hover:text-gray-300" />
                    </a>
                    <a
                        href="https://x.com/FarawayYachting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    ><IoLogoTwitter size={20} className="cursor-pointer hover:text-gray-300" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
