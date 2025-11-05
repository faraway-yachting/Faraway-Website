import { Fragment } from "react";
import { styles, combine } from "@/styles/style";
import Link from "next/link";
import { allBoatAgencyContractMetadata } from "@/lib/metadata";
import AmadeusCabinCharter from "@/Component/AgencyContract/AmadeusCabinCharter";
import AmadeusCharter from "@/Component/AgencyContract/AmadeusCharter";
import HotChilliCharter from "@/Component/AgencyContract/HotChilliCharter";
import SYMozartCharter from "@/Component/AgencyContract/SYMozartCharter";
import SYShindigCharter from "@/Component/AgencyContract/SYShindigCharter";
import SailLaVieCharter from "@/Component/AgencyContract/SailLaVieCharter";
import SYNautiByNatureCharter from "@/Component/AgencyContract/SYNautiByNatureCharter";

export const metadata = allBoatAgencyContractMetadata;

const AllBoatAgencyContract = () => {
  return (
    <Fragment>
      <div className="w-full min-h-screen bg-gray-50 py-4 md:py-8">
        <div className={combine(styles.container, "bg-white max-w-7xl mx-auto py-8 md:py-12")}>
          {/* Navigation Section */}
          <div className="mb-12">
            <h2 className={combine(styles.h3, "text-zink font-bold mb-4")}>
              Content
            </h2>
            <ol className={combine(styles.p2, "text-zink space-y-2 list-decimal list-inside")}>
              <li>
                <a 
                  href="#amadeus-cabin-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  Amadeus 48 ft. Sailing Catamaran - Cabin Charter Rates
                </a>
              </li>
              <li>
                <a 
                  href="#amadeus-private-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  Amadeus 48 ft. Sailing Catamaran - Private Charter Rates
                </a>
              </li>
              <li>
                <a 
                  href="#hot-chilli-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  Hot Chilli 38 ft. Power Catamaran - Private Charter Rates
                </a>
              </li>
              <li>
                <a 
                  href="#sy-mozart-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  SY Mozart 48 ft. sailing catamaran - Private charter rates
                </a>
              </li>
              <li>
                <a 
                  href="#sy-shindig-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  SY Shindig 48 ft. sailing catamaran - private charter rates
                </a>
              </li>
              <li>
                <a 
                  href="#sail-la-vie-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  Sail La Vie 51 ft Private Charter Rates
                </a>
              </li>
              <li>
                <a 
                  href="#sy-nauti-by-nature-charter" 
                  className="text-[#012A50] hover:text-[#D6AB62] transition-colors duration-200 text-lg"
                >
                  SY Nauti By Nature 45 ft. Leopard sailing catamaran - Private charter rates
                </a>
              </li>
            </ol>
          </div>

          <div className="space-y-6">
            <h1 className={combine(styles.h2, "text-zink font-bold text-center mb-8")}>
              Contact Information
            </h1>
            
            <div className="space-y-4 text-center">
              <p className={combine(styles.h4, "text-zink font-bold")}>
                FARAWAY YACHTING CO., LTD.
              </p>
              
              <div className={combine(styles.p2, "text-zink space-y-1")}>
                <p>40/1 Chaofa Road, Moo 9</p>
                <p>Tambon Chalong, Amphoe Mueang Phuket,</p>
                <p>Chang Wat Phuket 83130</p>
              </div>
              
              <p className={combine(styles.p2, "text-zink")}>
                Tax ID 0835540002116
              </p>
              
              <p className={combine(styles.p2, "text-zink")}>
                <span className="font-semibold">Phone and Whats App:</span> +66 6 123456 23
              </p>
              
              <p className={combine(styles.p2, "text-zink")}>
                <span className="font-semibold">email:</span> booking@faraway-yachting.com
              </p>
              
              <p className={combine(styles.p2, "text-zink")}>
                <span className="font-semibold">website:</span> faraway-yachting.com/
              </p>
              
              <p className={combine(styles.p2, "text-zink")}>
                <span className="font-semibold">Booking terms and conditions:</span>
                <br />
                <Link 
                  href="https://www.faraway-yachting.com/terms-and-conditions" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.faraway-yachting.com/terms-and-conditions
                </Link>
              </p>
              
              <p className={combine(styles.p2, "text-zink mt-6 font-semibold")}>
                Contract valid from 1st May 2025
              </p>
            </div>
          </div>

          <div id="amadeus-cabin-charter">
            <AmadeusCabinCharter />
          </div>
          
          <div id="amadeus-private-charter">
            <AmadeusCharter />
          </div>

          <div id="hot-chilli-charter">
            <HotChilliCharter />
          </div>
          
          <div id="sy-mozart-charter">
            <SYMozartCharter />
          </div>
          
          <div id="sy-shindig-charter">
            <SYShindigCharter />
          </div>
          
          <div id="sail-la-vie-charter">
            <SailLaVieCharter />
          </div>
          
          <div id="sy-nauti-by-nature-charter">
            <SYNautiByNatureCharter />
          </div>
        </div>
        </div>
      </Fragment>
    );
  };
  export default AllBoatAgencyContract;
