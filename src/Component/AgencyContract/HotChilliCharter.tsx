import Link from "next/link";
import { styles, combine } from "@/styles/style";

const HotChilliCharter = () => {
  return (
    <div className="mt-12 space-y-6">
      <div>
        <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
          Hot Chilli 38 ft. Power Catamaran
        </h2>
        <h3 className={combine(styles.h3, "text-zink font-semibold mb-6")}>
          Private Charter Rates
        </h3>
        
        <h4 className={combine(styles.h4, "text-zink font-bold mb-4")}>
          Season 2025/2026
        </h4>
        
        <p className={combine(styles.p2, "text-zink mb-6 font-semibold")}>
          Contract valid from 1st May 2025
        </p>
        
        <p className={combine(styles.p2, "text-zink mb-2 font-semibold")}>
          Fill Contract Form
        </p>
        
        <p className={combine(styles.p2, "text-zink mb-6")}>
          Hot Chilli Day Charter (max. 14 pax)
        </p>

        <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
          <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
            <thead className="bg-[#D6AB62] text-white">
              <tr className={combine(styles.h5, "font-bold")}>
                <th className="py-3 px-4 border-r border-b border-black">Period</th>
                <th className="py-3 px-4 border-r border-b border-black">Day Charter<br />(8 pax included)</th>
                <th className="py-3 px-4 border-r border-b border-black">Additional pax<br />(per person, max. 4 pax)</th>
                <th className="py-3 px-4 border-b border-black">Total with max additional</th>
              </tr>
            </thead>
            <tbody className="text-zink">
              {[
                { period: "Nov. – 20th Dec.", dayCharter: "34,900 THB", additionalPax: "1,000 THB", totalMax: "39,900 THB" },
                { period: "20th Dec. – Feb.", dayCharter: "39,900 THB", additionalPax: "2,000 THB", totalMax: "47,900 THB" },
                { period: "Mar. – Apr.", dayCharter: "34,900 THB", additionalPax: "1,500 THB", totalMax: "39,900 THB" },
                { period: "May – Oct.", dayCharter: "29,900 THB", additionalPax: "1,000 THB", totalMax: "33,900 THB" },
              ].map((row, index, array) => (
                <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                  <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.period}</td>
                  <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.dayCharter}</td>
                  <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.additionalPax}</td>
                  <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.totalMax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={combine(styles.p2, "text-zink space-y-2 mb-6")}>
          <p>
            <span className="font-semibold">Duration:</span> 8 hours from and to Chalong pier; shorter charters only on request
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
            Additional Children between 3-12 years old charge 50% of adult rate; below 3 years free)
          </p>
        </div>

        {/* Day Charter Section */}
        <div className="mt-12 space-y-8">
          <div className="space-y-6">
            <h2 className={combine(styles.h2, "text-zink font-bold")}>
              Day charter
            </h2>
            
            <div className="space-y-4">
              <h3 className={combine(styles.h4, "text-zink font-bold")}>
                Destinations (choose one):
              </h3>
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>• Koh Racha Yai/ Racha Noi (best to skip the crowd)</li>
                <li>• Phang Nga Bay/ James Bond Island (no clear water for snorkelling in Phang Nga Bay)</li>
                <li>• Phi Phi Islands (Don + Leh OR Don + Bamboo; all 3 locations 9 hour charter +3000 THB)</li>
                <li>• Koh Hong Krabi + Khai (9 hour charter +3000 THB)</li>
                <li>• Phi Phi Leh + Koh Haa + Maithon (10 hours charter +6000 THB)</li>
                <li className="font-semibold mt-2">all other itineraries and relocation ONLY on request and eventually surcharge!!!</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Inclusions (What is included?)
              </h3>
              
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>✔ Service of 3 crew : captain, cook/stewards, and deckhand/engineer</li>
                <li>✔ Running cost of yacht (fuel & berthing)</li>
                <li>✔ Individual, fresh-cooked Thai lunch buffet on board (choose from our menu)</li>
                <li>✔ Fresh fruits of the season</li>
                <li>✔ Towels</li>
                <li>✔ Drinking water</li>
                <li>✔ Soft drinks (Coke, Coke zero, Fanta and Sprite; other softdrinks on request and surcharge)</li>
                <li>✔ Snorkelling equipment (mask & snorkel)</li>
                <li>✔ Handline fishing by guests and trawling by crew</li>
                <li>✔ Accident insurance</li>
                <li>✔ Onboard simcard Wifi</li>
                <li>✔ Cabins are available as changing rooms, but beds are not made up /available for use</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Optional extras
              </h3>
              
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>➜ additional charter time 3000 THB per hour</li>
                <li>➜ BBQ onboard, alcoholic beverages, cakes, cold platter, watersport, diving, etc. → Request our PDF's</li>
                <li>➜ Thai Massage (max. 6 hours per day) = 3500 THB</li>
                <li>➜ Stand Up Paddle Boards = 700 THB per day per SUP</li>
                <li>➜ 2 Seater Kayak = 700 THB per day per Kayak</li>
                <li>➜ Local beers onboard (Leo, Singha or Chang) 100 THB per can (pay what you consume)</li>
                <li>➜ 1 pack (24 cans) of local beers (Leo, Singha or Chang) 1700 THB per pack</li>
                <li>➜ Anything else that would make your charter special, just ask!</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Exclusions (What is NOT included?)
              </h3>
              
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>✖ National Park and entrance fees when applicable</li>
                <li>✖ Airline flights, transfers or hotels</li>
                <li>✖ Yacht delivery (if applicable)</li>
                <li>✖ Rental vehicles or water taxis</li>
                <li>✖ Meals or drinks in restaurants</li>
                <li>✖ Cabin with the bed made up = 1,000 THB per cabin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Overnight Charter Section */}
        <div className="mt-12 space-y-8">
          <div className="space-y-6">
            <h2 className={combine(styles.h2, "text-zink font-bold")}>
              Overnight charter
            </h2>
            
            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Inclusions (What is included?)
              </h3>
              
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>✔ Sole use of the yacht; no sharing with other groups</li>
                <li>✔ Service of 3 crew : captain, cook/stewards, and deckhand/engineer</li>
                <li>✔ Running cost of yacht (fuel & berthing)</li>
                <li>✔ 3 main meals each day, snacks and fruit</li>
                <li>✔ Drinking water</li>
                <li>✔ Coffee</li>
                <li>✔ Tea</li>
                <li>✔ Snorkeling gear (mask, snorkel and 12 fins in different sizes)</li>
                <li>✔ Handline fishing by guests and trawling by crew</li>
                <li>✔ Linen</li>
                <li>✔ Bath towels</li>
                <li>✔ Swimming towel</li>
                <li>✔ Shower gel and Shampoo</li>
                <li>✔ Onboard simcard Wifi</li>
                <li>✔ Welcome drink</li>
                <li>✔ Welcome towel</li>
                <li>✔ Accident insurance</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Optional extras
              </h3>
              
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>➜ additional charter time 3000 THB per hour</li>
                <li>➜ Thai Massage (max. 6 hours per day) = 3500 THB</li>
                <li>➜ Stand Up Paddle Boards = 700 THB per day per SUP</li>
                <li>➜ 2 Seater Kayak = 700 THB per day per Kayak</li>
                <li>➜ Local beers onboard (Leo, Singha or Chang) 100 THB per can (pay what you consume)</li>
                <li>➜ 1 pack (24 cans) of local beers (Leo, Singha or Chang) 1700 THB per pack</li>
                <li>➜ BBQ onboard, alcoholic beverages, cakes, cold platter, watersport, diving, etc. → Request our PDF's</li>
                <li>➜ Anything else that would make your charter special, just ask!</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className={combine(styles.h3, "text-zink font-bold")}>
                Exclusions (What is NOT included?)
              </h3>
              
              <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                <li>✖ National Park and entrance fees when applicable</li>
                <li>✖ Airline flights, transfers or hotels</li>
                <li>✖ Yacht delivery (if applicable)</li>
                <li>✖ Rental vehicles or water taxis</li>
                <li>✖ Meals or drinks in restaurants</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-12">
          <h3 className={combine(styles.h4, "text-zink font-bold")}>
            Pictures of the boat
          </h3>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-6 py-2 border-2 border-zink text-zink bg-white rounded-lg font-semibold hover:bg-zink hover:text-white transition-colors duration-200">
              Click to View
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotChilliCharter;

