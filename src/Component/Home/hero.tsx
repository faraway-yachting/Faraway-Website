import PngIcons from "@/icons/pngIcon";
import { styles, combine, Button } from "@/styles";
import { FiPhone } from "react-icons/fi";

const HeroContent = () => {
  const { bgImage, minH1, top1, w1, w2, flexCenter, flexCol, h1, my1, containerXl, flexBetween, p1 } = styles;

  return (
    <section className={combine(bgImage, "bg-[url('/images/homeimg1.png')]", minH1, "flex justify-center")}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroContent;