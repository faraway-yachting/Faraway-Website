import {DM_Serif_Display} from "next/font/google";
import {Plus_Jakarta_Sans} from "next/font/google";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import Header from "@/Component/Header";
import Licence from "@/Component/Licence";
import Footer from "@/Component/Footer";
import WhatsAppIcon from "@/Component/WhatsAppIcon";
import GoogleAnalyticsComponent from "@/Component/GoogleAnalytics";
import GoogleTagManager from "@/Component/GoogleTagManager";
import { getGoogleAnalyticsId, getGoogleTagManagerId } from "@/lib/env";

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

export const metadata: Metadata = {
  title: 'Faraway Yachting - Luxury Yacht Charter in Phuket, Thailand',
  description: 'Experience luxury yacht charter in Phuket, Thailand with Faraway Yachting. Bareboat, crewed, and cabin charters available. Book your dream sailing adventure today.',
  keywords: 'yacht charter phuket, luxury yacht rental, bareboat charter thailand, crewed yacht charter, sailing phuket',
  authors: [{ name: 'Faraway Yachting' }],
  creator: 'Faraway Yachting',
  publisher: 'Faraway Yachting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.faraway-yachting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Faraway Yachting - Luxury Yacht Charter in Phuket, Thailand',
    description: 'Experience luxury yacht charter in Phuket, Thailand with Faraway Yachting. Bareboat, crewed, and cabin charters available.',
    url: 'https://www.faraway-yachting.com',
    siteName: 'Faraway Yachting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faraway Yachting - Luxury Yacht Charter in Phuket, Thailand',
    description: 'Experience luxury yacht charter in Phuket, Thailand with Faraway Yachting.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileImage': '/faraway-logo-270x270.png',
    'msapplication-TileColor': '#012A50',
    'theme-color': '#012A50',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${getGoogleTagManagerId()}');
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${getGoogleAnalyticsId()}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${getGoogleAnalyticsId()}');
            `,
          }}
        />
        {/* Favicon Meta Tags - Clean and Optimized */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
<link rel="shortcut icon" href="/favicon.ico" />

        
      
        <meta name="msapplication-TileImage" content="/faraway-logo-270x270.png" />
        
        {/* Additional SEO and Favicon Optimization */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.faraway-yachting.com" />
        
        {/* Force favicon refresh for search engines */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Last-Modified" content={new Date().toUTCString()} />
        
        {/* Google-specific favicon optimization */}
        <meta name="google-site-verification" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${source_Sans_Pro.variable}  ${inter.variable}  ${poppins.variable}  antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${getGoogleTagManagerId()}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
        <GoogleAnalyticsComponent />
        <GoogleTagManager gtmId={getGoogleTagManagerId()} />
      </body>
    </html>
  );
}