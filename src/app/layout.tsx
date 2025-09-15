import {DM_Serif_Display} from "next/font/google";
import {Plus_Jakarta_Sans} from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import Header from "@/Component/Header";
import Licence from "@/Component/Licence";
import Footer from "@/Component/Footer";
import WhatsAppIcon from "@/Component/WhatsAppIcon";

const DMSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});
// Keep existing variables but use the main Plus Jakarta Sans font
const geistSans = plusJakartaSans;
const geistMono = plusJakartaSans;
const playfairDisplay = DMSerifDisplay;
const source_Sans_Pro = plusJakartaSans;
const inter =  plusJakartaSans;
const poppins = plusJakartaSans;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${source_Sans_Pro.variable}  ${inter.variable}  ${poppins.variable}  antialiased`}
      >
        <div className="fixed top-0 z-40 w-full">
          <Header />
          <Navbar />
        </div>
        <main className="flex-1 relative pt-[5rem] md:pt-[8rem]">
          {children}
        </main>
        <Licence />
        <Footer />
        <WhatsAppIcon />
      </body>
    </html>
  );
}