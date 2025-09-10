"use client";
import PngIcons from "@/icons/pngIcon";
import { styles, combine, Button } from "@/styles";
import { FiPhone } from "react-icons/fi";
import { useEffect } from "react";
const HeroContent = () => {
  const { bgImage, minH1, top1, w1, w2, flexCenter, flexCol, h1, my1, containerXl, flexBetween, p1 } = styles;
  useEffect(() => {
    // Load the Google Reviews script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=993&locationId=4747123&lang=en_US&border=true&display_version=2';
    script.setAttribute('data-loadtrk', '');
    script.onload = () => {
      (window as any).loadtrk = true;
    };
    document.head.appendChild(script);
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return (
    <section className={combine(bgImage, "bg-[url('/images/homeimg1.png')] min-h-[57vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh] flex justify-center")}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />
      {/* Batch Image Top-Left inside container */}
      <div className="relative max-w-6xl mx-auto w-full">
        <img
          src="/images/batch1.png"
          alt="Batch"
          className={combine("absolute", top1, w1, "h-auto z-10 drop-shadow-lg")}
        />
        {/* Content on top */}
        <div className={combine(flexCenter, "h-full text-center text-white px-4 relative z-10")}>
          <div className={combine(flexCol, "justify-center items-center max-w-4xl mx-auto")}>
            <h1 className={combine(h1, "leading-tight md:max-w-2xl lg:max-w-2xl w-full")}>
              Phuket Yacht Charter
            </h1>
            <img
              src={PngIcons.rframe2}
              alt="Divider"
              className={combine(w2, flexBetween, "mx-auto drop-shadow-lg opacity-90")}
            />
            <p className={combine(p1, "font-light font-sourceSansPro text-center", my1, containerXl, "drop-shadow-lg text-white/95")}>
              Experience luxury and adventure with the best Phuket Yacht Charter Operator. Sail the stunning waters & best Islands of Phuket in style and make unforgettable memories.
            </p>
            <div className="flex justify-center">
              <Button
                href="/contact"
                variant="primary"
              >
                <div className="flex items-center">
                  <FiPhone className="mr-2" />
                  Contact Us Now
                </div>
              </Button>
            </div>
            {/* Google Reviews Widget */}
            <div className="mt-8 flex justify-center">
              <div id="TA_cdsratingsonlynarrow993" className="TA_cdsratingsonlynarrow">
                <ul id="2OO2WJKgxG" className="TA_links EGwepN2n">
                  <li id="fyrBlztf210" className="5UACXGKLl">
                    <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g1389361-d4747123-Reviews-Faraway_Yachting_Co_Ltd-Chalong_Phuket_Town_Phuket.html">
                      <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroContent;