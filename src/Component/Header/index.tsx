import { FaPhoneAlt, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Header = () => {
    return (
        <div className="bg-zink hidden md:block">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-white text-sm px-4 xl:px-3 py-4">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6">
                    <a
                        href="tel:66612345623"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    >

                        <FaPhoneAlt /> +66 61 2345623
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=info@far-away.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm gap-2"
                    >
                        <MdOutlineEmail /> info@far-away.net
                    </a>
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
                        href="https://line.me/ti/p/IF91DcUiYa"
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
