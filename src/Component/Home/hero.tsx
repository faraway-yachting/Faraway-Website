import PngIcons from "@/icons/pngIcon";
import Link from "next/link";

const HeroContent = () => {
  return (
    <section className="relative w-full bg-[url('/images/homeimg1.png')] bg-cover bg-end bg-no-repeat overflow-hidden min-h-[57vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh] flex justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />
      
      {/* Batch Image Top-Left inside container */}
      <div className="relative max-w-6xl mx-auto w-full">
        <img 
          src="/images/batch1.png"
          alt="Batch"
          className="absolute top-3 md:top-4 lg:top-5 xl:top-6 w-20 md:w-24 lg:w-32 xl:w-36 h-auto z-10 drop-shadow-lg"
        />
        
        {/* Content on top */}
        <div className="flex items-center justify-center h-full text-center text-white px-4 relative z-10">
          <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
            <p className="text-[28px] md:text-[32px] lg:text-[38px] xl:text-[48px] font-bold font-playfair mb-3 md:mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
              Phuket Yacht Charter
            </p>
            
            <img
              src={PngIcons.rframe2}
              alt="Divider"
              className="w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px] flex justify-center text-center mx-auto drop-shadow-lg opacity-90"
            />
            
            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-light font-sourceSanspro text-center my-4 md:my-6 md:max-w-xl lg:max-w-2xl xl:max-w-3xl leading-relaxed drop-shadow-lg text-white/95">
              Experience luxury and adventure with the best Phuket Yacht Charter Operator. Sail the stunning waters & best Islands of Phuket in style and make unforgettable memories.
            </p>
            
            <Link href="/contact">
              <button className="mt-6 md:mt-8 bg-gradient-to-r from-[#D6AB61] to-[#B8954A] hover:from-[#E8BD73] hover:to-[#D6AB61] border-2 border-[#D6AB61] hover:border-[#E8BD73] px-6 lg:px-8 xl:px-10 py-3 md:py-4 text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out backdrop-blur-sm">
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;