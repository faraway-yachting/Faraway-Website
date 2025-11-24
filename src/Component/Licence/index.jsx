import Image from "next/image";
import PngIcons from "@/icons/pngIcon";
import Link from "next/link";

const Licence = () => {
  const certificates = [
    PngIcons.Certificate2,
    PngIcons.Certificate3,
    PngIcons.Certificate4,
    PngIcons.Certificate5,
    PngIcons.Certificate6,
    PngIcons.Certificate7,
    PngIcons.Certificate8,
    PngIcons.Winner2025Badge,
  ];

  return (
    <div className="bg-white pt-7">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mb-6 px-4">
        <Link href="/terms-and-conditions">
          <p className="text-[21px] font-bold mb-2 underline text-zink xl:text-[24px] uppercase">
            Booking terms and conditions
          </p>
        </Link>
        <Image
          src={PngIcons.Certificate1}
          height={100}
          width={150}
          alt="Certificate 1"
          className="mt-5 xl:mt-12"
        />
        <p className="mt-3 text-lg font-normal text-black">
          Tourism Authority Thailand OTD Licence #34/02546
        </p>
      </div>

      {/* Certificates Flex Row */}
      <div className="bg-[#F6F6F6] w-full py-5 px-4">
        <div className="flex flex-wrap justify-center items-center gap-y-4 md:gap-y-4 max-w-6xl mx-auto">
          {certificates.map((icon, index) => {
            const isWinnerBadge = icon === PngIcons.Winner2025Badge;
            const isCertificateEight = icon === PngIcons.Certificate8;
            const isLast = index === certificates.length - 1;
            const isSecondLast = index === certificates.length - 2;

            const spacingClass = isLast
              ? "mr-0"
              : isSecondLast
                ? "mr-3"
                : "mr-6";

            return (
              <div key={index} className={`flex justify-center ${spacingClass}`}>
                <div
                  className={
                    isCertificateEight
                      ? "rounded-full bg-[#338FBF]/80 p-1  flex items-center justify-center"
                      : ""
                  }
                >
                  <Image
                    src={icon}
                    alt={isWinnerBadge ? "2025 Winner Badge" : `Certificate ${index + 1}`}
                    height={isWinnerBadge ? 55 : 70}
                    width={isWinnerBadge ? 110 : 110}
                    className={isCertificateEight ? "rounded-full" : undefined}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Licence;
