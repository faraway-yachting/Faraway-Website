import Link from "next/link";
import { styles, combine } from "@/styles/style";

const SailLaVieCharter = () => {
  return (
    <div className="mt-12 space-y-6">
      <div>
        <div className="space-y-4 text-center">
          <h2 className={combine(styles.h2, "text-zink font-bold")}>Sail La Vie 51 ft Private Charter Rates</h2>
          
          <h4 className={combine(styles.h4, "text-zink font-bold")}>Season 2025/2026</h4>
          
          <p className={combine(styles.p2, "text-zink font-semibold")}>Contract valid from 1st May 2025</p>
          
          <p className={combine(styles.p2, "text-zink text-center font-semibold")}>Day charter</p>
        </div>

        <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
          <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
            <thead className="bg-[#D6AB62] text-white">
              <tr className={combine(styles.h5, "font-bold")}>
                <th className="py-3 px-4 border-r border-b border-black">Day charter Destination</th>
                <th className="py-3 px-4 border-r border-b border-black">Basic Charter</th>
                <th className="py-3 px-4 border-r border-b border-black">Premium Charter</th>
                <th className="py-3 px-4 border-b border-black">VIP Charter</th>
              </tr>
            </thead>
            <tbody className="text-zink">
              {[
                { destination: "Maithon + Coral – 8 hour", basic: "59,900 THB", premium: "69,900 THB", vip: "109,900 THB" },
                { destination: "Racha Yai + Coral – 8 hour", basic: "64,900 THB", premium: "74,900 THB", vip: "114,900 THB" },
                { destination: "Racha Yai + Racha Noi – 8 hour", basic: "69,900 THB", premium: "79,900 THB", vip: "119,900 THB" },
                { destination: "Phi Phi Don + Phi Phi Leh – 8 hour", basic: "79,900 THB", premium: "89,900 THB", vip: "129,900 THB" },
                { destination: "Phi Phi Don+Phi Phi Leh+Bamboo – 9 hour", basic: "89,900 THB", premium: "99,900 THB", vip: "139,900 THB" },
                { destination: "Khai + Hong (Krabi) – 9 hour", basic: "89,900 THB", premium: "99,900 THB", vip: "139,900 THB" },
                { destination: "Phang Nga – 9 hour", basic: "99,900 THB", premium: "109,900 THB", vip: "149,900 THB" },
                { destination: "Maithon + Phi Phi Leh + Haa – 10 hour", basic: "119,900 THB", premium: "129,900 THB", vip: "169,900 THB" },
                { destination: "10 guests included – additional guests", basic: "900 THB", premium: "1,900 THB", vip: "2,900 THB" },
              ].map((row, index, array) => (
                <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                  <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.destination}</td>
                  <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.basic}</td>
                  <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.premium}</td>
                  <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={combine(styles.p2, "text-zink space-y-2 mb-6")}>
          <p className="font-semibold">
            NOTE: Peak season surcharge of 15,000 THB for every charter between 20 December till 10th January
          </p>
          <p>
            max. 30 guests
          </p>
          <p>
            cruising speed 13 knots (depending on conditions)
          </p>
          <p>
            Charters from and to Chalong pier – relocation only on request and surcharge
          </p>
          <p>
            Finish latest with sunset according to this website{" "}
            <Link 
              href="https://www.timeanddate.com/sun/thailand/phuket" 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.timeanddate.com/sun/thailand/phuket
            </Link>
          </p>
          <p>
            Additional Children between 3-12 years old charge 50% of adult rate; below 3 years free
          </p>
          <p>
            half day charters only on request
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <h3 className={combine(styles.h3, "text-zink font-bold")}>
            Day charter Inclusions & Exclusions
          </h3>

          <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
            <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
              <thead className="bg-[#D6AB62] text-white">
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-b border-black">Day charter Inclusions & Exclusions</th>
                  <th className="py-3 px-4 border-r border-b border-black">Basic Charter</th>
                  <th className="py-3 px-4 border-r border-b border-black">Premium Charter</th>
                  <th className="py-3 px-4 border-b border-black">VIP Charter</th>
                </tr>
              </thead>
              <tbody className="text-zink">
                {[
                  { feature: "only 1st May till 31st October", basic: "✓", premium: "all year round", vip: "all year round" },
                  { feature: "Private Charter", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Drinking water, coffee, tea", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Captain", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Cook", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Deckhand", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Simcard wifi", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Bluetooth music speaker", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Towels", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Accident insurance", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Pier bus transport", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Snorkelling equipment (mask & snorkel)", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "2 x floating mats", basic: "✓", premium: "✓", vip: "✓" },
                ].map((row, index, array) => (
                  <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black text-left")}>{row.feature}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.basic}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.premium}</td>
                    <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
            <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
              <thead className="bg-[#D6AB62] text-white">
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-b border-black">Day charter Inclusions & Exclusions</th>
                  <th className="py-3 px-4 border-r border-b border-black">Basic Charter</th>
                  <th className="py-3 px-4 border-r border-b border-black">Premium Charter</th>
                  <th className="py-3 px-4 border-b border-black">VIP Charter</th>
                </tr>
              </thead>
              <tbody className="text-zink">
                {[
                  { feature: "Fishing by guests and trawling by the crew", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Airconditioned Saloon", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Big Slider", basic: "✓", premium: "✓", vip: "✓" },
                  { feature: "Bring your own drinks and food", basic: "X on surcharge", premium: "✓", vip: "✓" },
                  { feature: "Fresh fruits of the season", basic: "X on surcharge", premium: "✓", vip: "✓" },
                  { feature: "Guide", basic: "X on surcharge", premium: "✓", vip: "✓" },
                  { feature: "Taxi transfer within Phuket", basic: "X on surcharge", premium: "✓", vip: "✓" },
                  { feature: "2 x Stand up paddle board", basic: "X on surcharge", premium: "✓", vip: "✓" },
                  { feature: "Soft drinks", basic: "X on surcharge", premium: "✓", vip: "✓ more choice" },
                  { feature: "Thai lunch buffet (4 dishes from 16 dishes)", basic: "X on surcharge", premium: "✓", vip: "✓" },
                  { feature: "Add 4 extra dishes to your buffet selection", basic: "X on surcharge", premium: "X on surcharge", vip: "✓ more choice" },
                  { feature: "Management Team Member onboard", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "VIP Taxi (if available; not last minute)", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "BBQ of your choice", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "Airconditioned cabins", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "Navbow underwater scooter", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                ].map((row, index, array) => (
                  <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black text-left")}>{row.feature}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.basic}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.premium}</td>
                    <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
            <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
              <thead className="bg-[#D6AB62] text-white">
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-b border-black">Day charter Inclusions & Exclusions</th>
                  <th className="py-3 px-4 border-r border-b border-black">Basic Charter</th>
                  <th className="py-3 px-4 border-r border-b border-black">Premium Charter</th>
                  <th className="py-3 px-4 border-b border-black">VIP Charter</th>
                </tr>
              </thead>
              <tbody className="text-zink">
                {[
                  { feature: "Cocktails (T&C apply)", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "Free flow alcohol (T&C apply)", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "Thai Massage Therapist (6 hours per day)", basic: "X on surcharge", premium: "X on surcharge", vip: "✓" },
                  { feature: "National Park fees", basic: "X", premium: "X", vip: "✓" },
                ].map((row, index, array) => (
                  <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black text-left")}>{row.feature}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.basic}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.premium}</td>
                    <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6 mt-8">
            <h3 className={combine(styles.h3, "text-zink font-bold")}>
              Optional extras
            </h3>
            
            <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
              <li>➜ additional charter time 6000 THB</li>
              <li>➜ Thai Massage (max. 6 hours per day) = 3500 THB</li>
              <li>➜ Stand Up Paddle Boards = 700 THB per day per SUP</li>
              <li>➜ 2 Seater Kayak = 700 THB per day per Kayak</li>
              <li>➜ Local beers onboard (Leo, Singha or Chang) 100 THB per can (pay what you consume)</li>
              <li>➜ 1 pack (24 cans) of local beers (Leo, Singha or Chang) 1500 THB per pack</li>
              <li>➜ House wine onboard 950 THB per bottle, Premium wine onboard 1200 THB (pay what you consume)</li>
              <li>➜ other alcoholic beverages, cakes, cold platter, watersport equipment, diving, etc. → Request our PDF's</li>
              <li>➜ Anything else that would make your charter special, just ask!</li>
            </ul>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className={combine(styles.h4, "text-zink font-bold")}> 
              Pictures of the boat
            </h3>
            <a
              href="https://drive.google.com/drive/folders/1CBA_PKwPJcQe6xAWzyjjWkqP4TMel8wx?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-2 bg-[#012A50] text-white rounded-md font-semibold transition-colors duration-200 hover:bg-[#D6AB62] hover:text-[#012A50]">
                Pictures of the boat
              </button>
            </a>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className={combine(styles.h4, "text-zink font-bold")}>
              Contact
            </h3>
            <div className={combine(styles.p2, "text-zink space-y-1")}>
              <p className={combine(styles.h4, "text-zink font-bold")}>
                FARAWAY YACHTING CO., LTD.
              </p>
              <p>40/1 Chaofa Road, Moo 9</p>
              <p>Tambon Chalong, Amphoe Mueang Phuket,</p>
              <p>Chang Wat Phuket 83130</p>
              <p className="mt-2">Tax ID 0835540002116</p>
              <p className="mt-2">
                <span className="font-semibold">Phone and Whats App:</span> +66 6 123456 23
              </p>
              <p>
                <span className="font-semibold">email:</span> info@wordpress-858394-5855488.cloudwaysapps.com
              </p>
              <p>
                <span className="font-semibold">website:</span> wordpress-858394-5855488.cloudwaysapps.com
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <h2 className={combine(styles.h2, "text-zink font-bold")}>
              Overnight charter
            </h2>

            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Overnight Charter Duration
              </h3>

              <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                  <thead>
                    <tr className="bg-[#D6AB62] text-white">
                      <th
                        className={combine(styles.p2, "py-3 px-4 border-r border-b border-black font-semibold align-middle")}
                        rowSpan={2}
                      >
                        Overnight Charter Duration
                      </th>
                      <th
                        className={combine(styles.p2, "py-3 px-4 border-r border-b border-black font-semibold text-center")}
                        colSpan={2}
                      >
                        Overnight Charter<br />(max. 8pax in 4 double cabins)
                      </th>
                    </tr>
                    <tr className="bg-[#D6AB62] text-white">
                      <th className={combine(styles.p2, "py-3 px-4 border-r border-b border-black font-semibold")}>High Season Pricing<br />Nov. till Apr.</th>
                      <th className={combine(styles.p2, "py-3 px-4 border-b border-black font-semibold")}>Peak Season Pricing<br />20th Dec – 10th Jan.</th>
                    </tr>
                  </thead>
                  <tbody className="text-zink">
                    {[
                      { duration: "2 days/ 1 night", highSeason: "4,499 €", peakSeason: "5,499 €" },
                      { duration: "3 days/ 2 nights", highSeason: "8,499 €", peakSeason: "9,499 €" },
                      { duration: "4 days/ 3 nights", highSeason: "11,499 €", peakSeason: "12,499 €" },
                      { duration: "5 days/ 4 nights", highSeason: "14,499 €", peakSeason: "15,499 €" },
                      { duration: "6 days/ 5 nights", highSeason: "17,499 €", peakSeason: "18,499 €" },
                    ].map((row, index, array) => (
                      <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.duration}</td>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.highSeason}</td>
                        <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.peakSeason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className={combine(styles.p2, "text-zink mb-4")}>
                for longer charter, please contact us
              </p>

              <div className={combine(styles.p2, "text-zink space-y-2 mb-6")}>
                <p>
                  Charters from and to Chalong pier – relocation only on request and surcharge
                </p>
                <p>
                  start at 11:00 on the first day and finish 17:00 on the last day (first breakfast and last dinner not included)
                </p>
              </div>

              <div className="space-y-6">
                <h3 className={combine(styles.h3, "text-zink font-bold")}>
                  What is included?
                </h3>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>✔ Private Charter (no sharing with other groups )</li>
                  <li>✔ 4 propulsion engine hours per day (cruising speed 8 knots)</li>
                  <li>✔ airconditioned saloon at daytime and airdconditioned cabins at night time</li>
                  <li>✔ Running cost of yacht (fuel, water & berthing)</li>
                  <li>✔ Taxi transfer within Phuket</li>
                  <li>✔ Dinghy transfer to the islands (operated by onboard crew)</li>
                  <li>✔ Service of 3 professional crew (captain, cook/stewards, and deckhand/engineer/ guide)</li>
                  <li>✔ 3 main meals per day (apart from the first breakfast and last dinner)</li>
                  <li>✔ Fresh fruits of the season & snacks</li>
                  <li>✔ Drinking water, coffee, tea</li>
                  <li>✔ Soft drinks,</li>
                  <li>✔ Simcard wifi,</li>
                  <li>✔ Bluetooth music speaker,</li>
                  <li>✔ Linen, bath towels and swimming towel</li>
                  <li>✔ Snorkelling equipment (mask & snorkel).</li>
                  <li>✔ Navbow underwater scooter</li>
                  <li>✔ 2 x Stand up paddle board</li>
                  <li>✔ 2 x floating mats</li>
                  <li>✔ Accident insurance</li>
                  <li>✔ Pier bus transport</li>
                  <li>✔ Handline fishing by guests and trawling by the crew</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={combine(styles.h3, "text-zink font-bold")}>
                  What is NOT included?
                </h3>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>✖ Alcoholic beverages</li>
                  <li>✖ Any shore activities</li>
                  <li>✖ National Park fees if applicable</li>
                  <li>✖ Airline flights, hotels or rental vehicles</li>
                  <li>✖ Meals or drinks in restaurants</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={combine(styles.h3, "text-zink font-bold")}>
                  Optional extras
                </h3>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>➜ additional engine hour = 6000 THB (ca. 150 Euro)</li>
                  <li>➜ Thai Massage (max. 6 hours per day; requires own cabin) = 3500 THB per day</li>
                  <li>➜ Stand Up Paddle Boards = 700 THB per day per SUP</li>
                  <li>➜ 2 Seater Kayak = 700 THB per day per Kayak</li>
                  <li>➜ Navbow underwater scooter = 3000 THB per day (1 x charge per day; ca. 45-60 minutes)</li>
                  <li>➜ Local beers onboard (Leo, Singha or Chang) = 100 THB per can (pay what you consume)</li>
                  <li>➜ 1 pack (24 cans) of local beers (Leo, Singha or Chang) = 1700 THB per pack</li>
                  <li>➜ BBQ onboard, other alcoholic beverages, cakes, cold platter, watersport, diving, etc. → Request our PDF</li>
                  <li>➜ Anything else that would make your charter special, just ask!</li>
                </ul>
              </div>

              <p className={combine(styles.p2, "text-zink mt-8")}>
                If you have any questions or need clarification regarding the contract, please feel free to reach out to us at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SailLaVieCharter;

