"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Day Charter", href: "/yacht-charter-phuket" },
    { label: "Overnight Charter", href: "/crewed-overnight-charter" },
    { label: "Cabin Charter", href: "/best-of-phukets-islands-cabincharter" },
    { label: "Bareboat Charter", href: "/bareboat-charter-thailand" },
    {label: "Super Yachts", href:"/super-yacht-charter-phuket"},
    { label: "Destinations", href: "/magical-destinations-with-private-yacht-in-phuket" },
    {label: "About Us", href:"/about-us"},
    {label: "Mission Statement", href:"/about-us#mission"},
    {label: "FAQ", href:"/#faq"}
];

const Drawer = ({
    isOpen,
    onClose,
    drawerItems,
    showContactButton = true,
}: {
    isOpen: boolean;
    onClose: () => void;
    drawerItems: typeof navItems;
    showContactButton?: boolean;
}) => {
    const pathname = usePathname();
    return (
        <>
            <div
                className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />
            <div
                className={`fixed inset-y-0 right-0 w-64 bg-white z-30 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                        <Link href="/" onClick={onClose}>
                            <img src="/images/logo.png" alt="logo" className="w-[105px] h-[40px]" />
                        </Link>
                        <button onClick={onClose} className="text-3xl text-gray-700 hover:text-red-500">
                            &times;
                        </button>
                    </div>
                    <ul className="space-y-4 text-[#333] font-medium">
                        {drawerItems.map(({ label, href }) => {
                            const isActive =
                                (href === "/" && pathname === "/") ||
                                (href !== "/" && pathname.startsWith(href)) ||
                                (label === "Crewed Charter" && pathname.startsWith("/crewed_boats"));
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={onClose}
                                        className={`relative inline-block text-base text-zink font-sourceSansPro transition duration-200 group ${isActive ? "text-[#034250] font-semibold" : "text-[#118A92] hover:text-[#034250]"
                                            }`}
                                    >
                                        {label}
                                        <span
                                            className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 transform group-hover:scale-x-100 origin-left ${isActive ? "bg-[#D6AB61] scale-x-100" : "bg-[#D6AB61] scale-x-0"
                                                }`}
                                        ></span>
                                    </Link>
                                </li>
                            );
                        })}
                        {showContactButton && (
                            <li>
                                <Link href="/contact" onClick={onClose}>
                                    <button className="btn-grad text-white text-base font-sourceSansPro font-bold lg:px-5 px-3 py-2 rounded-lg transition">
                                        Start Your Adventure
                                    </button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMDScreen, setIsMDScreen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMDScreen(window.innerWidth >= 768); // md breakpoint
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    const navbarItems = isLargeScreen ? navItems.slice(0, 5) : (isMDScreen ? navItems.slice(0, 4) : []);
    const drawerItems = isLargeScreen ? navItems.slice(5) : (isMDScreen ? navItems.slice(4) : navItems);
    const showDrawerButton = !isMDScreen;

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto xl:px-3 lg:px-3 px-3 py-5 flex justify-between items-center">
                <Link href="/">
                    <img src="/images/logo.png" alt="logo" className="w-[105px] h-[40px]" />
                </Link>

                {/* Desktop Nav - First 4 items (md), First 5 items (lg+) */}
                <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 text-[#333]">
                    {navbarItems.map(({ label, href }) => {
                        const isActive =
                            (href === "/" && pathname === "/") ||
                            (href !== "/" && pathname.startsWith(href));
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative inline-block font-sourceSansPro text-zink text-base md:text-[13px] lg:text-base transition duration-200 group ${isActive ? "text-[#034250] font-semibold" : "text-[#118A92] hover:text-[#034250]"
                                    }`}
                            >
                                {label}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-full transition-all font-sourceSansPro duration-300 transform group-hover:scale-x-100 origin-left ${isActive ? "bg-[#D6AB61] scale-x-100" : "bg-[#D6AB61] scale-x-0"
                                        }`}
                                ></span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact Button and Burger Menu */}
                <div className="flex items-center gap-2 xl:gap-3">
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <button className="btn-grad text-white text-base md:text-sm lg:text-sm xl:text-base font-sourceSansPro font-bold px-3 lg:px-5 py-2 rounded-lg transition hover:cursor-pointer">
                                Start Your Adventure
                            </button>
                        </Link>
                    </div>
                    {/* Burger Menu Icon */}
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 xl:w-10 xl:h-10 text-[#FE552D] hover:text-[#333] transition-colors border-2 border-[#FE552D] hover:border-[#333] rounded"
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Drawer - All navlinks on mobile, rest (5th onwards) on md, rest (6th onwards) on lg+ */}
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                drawerItems={drawerItems}
                showContactButton={showDrawerButton}
            />
        </header>
    );
};
export default Navbar
