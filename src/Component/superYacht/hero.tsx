import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
  return (
    <HeroContent
      heading="Super Yacht Charter Phuket"
      subheading="A Fairy-Tale Super Yacht Charter Phuket Experience"
      description="Experience the ultimate escape with a <strong>Super Yacht Charter in Phuket</strong> — where elegance meets tropical beauty. Perfect for honeymoons, family getaways, friends or corporate celebrations and any other  opportunity. Our team turns every journey into a lasting memory."
      backgroundImage="/images/super1.png"
      dividerImage={PngIcons.rframe2}
      button="Book Now"
      href="/contact"
      buttontext="Book Your Yacht Now"
      showRatingBadges={true}
      showGoogleRating={true}
      showTripAdvisorRating={true}
      showWorldLuxuryAward={true}
    />
  );
};
export default HeroSection 