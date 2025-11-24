import Link from "next/link";
import { styles, combine } from "@/styles/style";

const SYNautiByNatureCharter = () => {
  return (
    <div className="mt-12 space-y-6">
      <div>
        <div className="space-y-4 text-center">
          <h2 className={combine(styles.h2, "text-zink font-bold")}>SY Nauti By Nature 45 ft. Leopard sailing catamaran</h2>
          <h3 className={combine(styles.h3, "text-zink font-semibold")}>Private charter rates Season 2025/2026</h3>
          
          <p className={combine(styles.p2, "text-zink font-semibold")}>Contract valid from 1st October 2025</p>

          <div className="space-y-4 mb-8">
            <h3 className={combine(styles.h4, "text-zink font-bold")}>Pictures of the boat</h3>
            <a
              href="https://drive.google.com/drive/folders/10idqkq1CEsqJE-k2pQSu48lP0JpLs9i8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-2 bg-[#012A50] text-white rounded-md font-semibold transition-colors duration-200 hover:bg-[#D6AB62] hover:text-[#012A50]">
                Pictures of the boat
              </button>
            </a>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className={combine(styles.h4, "text-zink font-bold")}>
            Contact:
          </h3>
          <div className={combine(styles.p2, "text-zink space-y-1")}>
            <p className={combine(styles.h4, "text-zink font-bold")}>
              FARAWAY YACHTING CO.,LTD.
            </p>
            <p>40/1 Chaofa Road, Moo 9</p>
            <p>Tambon Chalong, Amphoe Mueang Phuket,</p>
            <p>Chang Wat Phuket 83130</p>
            <p className="mt-2">Tax ID 0835540002116</p>
            <p className="mt-2">
              <span className="font-semibold">Phone and Whats App:</span> +66 6 123456 23
            </p>
            <p>
              <span className="font-semibold">E-Mail:</span> info@far-away.net
            </p>
            <p>
              <span className="font-semibold">Website:</span> www.far-away.net
            </p>
            <p className="mt-2">
              <span className="font-semibold">Booking terms and conditions:</span>{" "}
              <Link 
                href="https://far-away.net/terms-and-conditions/" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://far-away.net/terms-and-conditions/
              </Link>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className={combine(styles.h3, "text-zink font-bold mb-4")}>
            Overnight Charter
          </h3>

          <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
            <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
              <thead className="bg-[#D6AB62] text-white">
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-b border-black">Date</th>
                  <th className="py-3 px-4 border-r border-b border-black" colSpan={3}>Overnight Charter</th>
                  <th className="py-3 px-4 border-b border-black">Remarks</th>
                </tr>
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-black"></th>
                  <th className="py-3 px-4 border-r border-black">1-4 pax OR<br />3 cabins</th>
                  <th className="py-3 px-4 border-r border-black">5-6 pax OR<br />3 cabins</th>
                  <th className="py-3 px-4 border-r border-black">7-8 pax OR<br />4 cabins</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody className="text-zink">
                {[
                  { date: "Nov. - 20th Dec.", pax1_4: "1,100 €", pax5_6: "1,200 €", pax7_8: "1,400 €", remarks: "" },
                  { date: "20th Dec. - Feb.", pax1_4: "1,300 €", pax5_6: "1,400 €", pax7_8: "1,600 €", remarks: "Min. 5 nights" },
                  { date: "Mar. - Apr.", pax1_4: "1,200 €", pax5_6: "1,300 €", pax7_8: "1,500 €", remarks: "Min. 3 nights" },
                  { date: "May - Oct.", pax1_4: "1,000 €", pax5_6: "1,100 €", pax7_8: "1,300 €", remarks: "" },
                ].map((row, index, array) => (
                  <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.date}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.pax1_4}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.pax5_6}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.pax7_8}</td>
                    <td className={combine(styles.p2, "py-3 px-4 text-left")}>{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={combine(styles.p2, "text-zink space-y-2 mb-6")}>
            <p>• Charters less than 4 nights the rate is charged per day with start 11:00 and finish 17:00</p>
            <p>• Charters longer than 5 nights the rate is charged per 24 hour with start and finish at 11:00</p>
            <p>• Charters from 7 nights get 5%, from 10 nights 10% and from 14 nights 15% discount.</p>
          </div>

          <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
            <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
              <thead className="bg-[#D6AB62] text-white">
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-b border-black">Date</th>
                  <th className="py-3 px-4 border-r border-b border-black" colSpan={2}>Day charter</th>
                  <th className="py-3 px-4 border-b border-black">Remarks</th>
                </tr>
                <tr className={combine(styles.h5, "font-bold")}>
                  <th className="py-3 px-4 border-r border-black"></th>
                  <th className="py-3 px-4 border-r border-black">8 pax<br />included</th>
                  <th className="py-3 px-4 border-r border-black">Additional<br />pax (max. 30)</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody className="text-zink">
                {[
                  { date: "Nov. - 20th Dec.", dayCharterIncluded: "39,900 THB", additionalPax: "1,000 THB", remarks: "day charter only last minute if there is a minumum night" },
                  { date: "20th Dec. - Feb.", dayCharterIncluded: "49,900 THB", additionalPax: "1,500 THB", remarks: "" },
                  { date: "Mar. - Apr.", dayCharterIncluded: "44,900 THB", additionalPax: "1,500 THB", remarks: "" },
                  { date: "May - Oct.", dayCharterIncluded: "34,900 THB", additionalPax: "1,000 THB", remarks: "" },
                ].map((row, index, array) => (
                  <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.date}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.dayCharterIncluded}</td>
                    <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.additionalPax}</td>
                    {index === 0 ? (
                      <td className={combine(styles.p2, "py-3 px-4 text-left")} rowSpan={array.length}>
                        {row.remarks}
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={combine(styles.p2, "text-zink space-y-2 mb-6")}>
            <p>• Duration: 8 hours from and to Chalong pier; shorter charters only on request</p>
            <p>
              • Finish latest with sunset according to this website{" "}
              <Link 
                href="https://www.timeanddate.com/sun/thailand/phuket" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.timeanddate.com/sun/thailand/phuket
              </Link>
            </p>
            <p>• Additional Children between 3-12 years old charge 50% of adult rate; below 3 years free)</p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="space-y-6">
              <h2 className={combine(styles.h2, "text-zink font-bold")}>
                Overnight charter
              </h2>
              
              <div className="space-y-6">
                <h3 className={combine(styles.h3, "text-zink font-bold")}>
                  Inclusions (What is included?):
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
                  Optional extras:
                </h3>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>➜ Aircondition 8 hour per 24 hour = 100 € prepaid (150 € last minute)</li>
                  <li>➜ Aircondition 16 hour per 24 hour = 200 € prepaid (300 € last minute )</li>
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
                  Exclusions (What is NOT included?):
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
                  <li>• Racha Yai + Coral island</li>
                  <li>• Racha Yai + Prom Thep</li>
                  <li>• Maithon + Coral island</li>
                  <li>• Coral island + Prom Thep</li>
                  <li>• Racha Yai + Maithon 9 hours (+3000 THB)</li>
                  <li>• Maithon + Koh Khai 9 hours (+3000 THB)</li>
                  <li className="font-semibold mt-2">all other itineraries and relocation ONLY on request and eventually surcharge!!!</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={combine(styles.h3, "text-zink font-bold")}>
                  Inclusions (What is included?):
                </h3>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>✔ Service of 3 crew : captain, cook/stewards, and deckhand/engineer</li>
                  <li>✔ Running cost of yacht (fuel & berthing)</li>
                  <li>✔ airconditioned saloon</li>
                  <li>✔ Individual, fresh-cooked Thai lunch buffet on board (choose from our menu)</li>
                  <li>✔ Fresh fruits of the season</li>
                  <li>✔ Towels</li>
                  <li>✔ Drinking water</li>
                  <li>✔ Soft drinks (Coke, Coke zero, Fanta and Sprite; other softdrinks on request and surcharge)</li>
                  <li>✔ Snorkelling equipment (mask & snorkel)</li>
                  <li>✔ Handline fishing by guests and trawling by crew</li>
                  <li>✔ Accident insurance</li>
                  <li>✔ Onboard simcard Wifi</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className={combine(styles.h3, "text-zink font-bold")}>
                  Optional extras:
                </h3>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>➜ 2 airconditioned cabins = 4000 THB</li>
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
                  Exclusions (What is NOT included?):
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
        </div>
      </div>
    </div>
  );
};

export default SYNautiByNatureCharter;

