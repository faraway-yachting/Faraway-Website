import { combine, styles } from "@/styles/style";
import Link from "next/link";
import SYMozartCharter from "@/Component/AgencyContract/SYMozartCharter";

export const metadata = {
  title: "Mozart Agency Contract 25-26",
};

const MozartAgencyContractPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-4 md:py-8">
      <div className={combine(styles.container, "bg-white max-w-5xl mx-auto py-8 md:py-12 space-y-10")}>
        <div className="space-y-6 text-center">
          <h1 className={combine(styles.h2, "text-zink font-bold")}>Contact Information</h1>
          <div className={combine(styles.p2, "text-zink space-y-2")}>
            <p className="font-semibold">FARAWAY YACHTING CO., LTD.</p>
            <p>40/1 Chaofa Road, Moo 9</p>
            <p>Tambon Chalong, Amphoe Mueang Phuket,</p>
            <p>Chang Wat Phuket 83130</p>
            <p>Tax ID 0835540002116</p>
            <p>
              <span className="font-semibold">Phone and Whats App:</span> +66 6 123456 23
            </p>
            <p>
              <span className="font-semibold">email:</span> booking@faraway-yachting.com
            </p>
            <p>
              <span className="font-semibold">website:</span> faraway-yachting.com/
            </p>
            <div className="space-y-1">
              <p className="font-semibold">Booking terms and conditions:</p>
              <Link
                href="https://www.faraway-yachting.com/terms-and-conditions"
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.faraway-yachting.com/terms-and-conditions
              </Link>
            </div>
            <p className="font-semibold">Contract valid from 1st May 2025</p>
            <Link
              href="https://sendlink.co/documents/doc-form/68ba5e1f0cb4b8c5dbeae59c?locale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="px-6 py-2 bg-[#012A50] text-white rounded-md font-semibold transition-colors duration-200 hover:bg-[#D6AB62] hover:text-[#012A50]">
                Fill Contract Form
              </span>
            </Link>
          </div>
        </div>

        <SYMozartCharter />
      </div>
    </div>
  );
};

export default MozartAgencyContractPage;

