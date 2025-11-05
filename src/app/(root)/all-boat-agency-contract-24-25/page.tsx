import { Fragment } from "react";
import { styles, combine } from "@/styles/style";
import Link from "next/link";
import { allBoatAgencyContractMetadata } from "@/lib/metadata";

export const metadata = allBoatAgencyContractMetadata;

const AllBoatAgencyContract = () => {
  return (
    <Fragment>
      <div className="w-full min-h-screen bg-gray-50 py-4 md:py-8">
        <div className={combine(styles.container, "bg-white max-w-7xl mx-auto py-8 md:py-12")}>
          <div className="space-y-6">
            <h1 className={combine(styles.h2, "text-zink font-bold text-center mb-8")}>
              Contact Information
            </h1>
            
            <div className="space-y-4">
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

          <div className="mt-12 space-y-6">
            <div>
              <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
                Amadeus 48 ft. Sailing Catamaran
              </h2>
              <h3 className={combine(styles.h3, "text-zink font-semibold mb-6")}>
                Cabin Charter Rates
              </h3>
              
              <h4 className={combine(styles.h4, "text-zink font-bold mb-4")}>
                Prices Season 2025 - 2026
              </h4>
              
              <p className={combine(styles.p2, "text-zink mb-2 font-semibold")}>
                Fill Contract Form
              </p>
              
              <p className={combine(styles.p2, "text-zink mb-6")}>
                2 person in a double cabin (price per person)
              </p>

              <div className="w-full overflow-x-auto border border-black rounded-lg">
                <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                  <thead className="bg-[#D6AB62] text-white">
                    <tr className={combine(styles.h5, "font-bold")}>
                      <th className="py-3 px-4 border-r border-b border-black">Departure Date</th>
                      <th className="py-3 px-4 border-r border-b border-black">Arrival Date</th>
                      <th className="py-3 px-4 border-r border-b border-black">Ensuite cabin p.P.</th>
                      <th className="py-3 px-4 border-b border-black">Non ensuite cabin p.P.</th>
                    </tr>
                  </thead>
                  <tbody className="text-zink">
                    {[
                      { departure: "26 October 2025", arrival: "31 October 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "02 November 2025", arrival: "07 November 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "09 November 2025", arrival: "14 November 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "16 November 2025", arrival: "21 November 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "23 November 2025", arrival: "28 November 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "30 November 2025", arrival: "05 December 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "07 December 2025", arrival: "12 December 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "14 December 2025", arrival: "19 December 2025", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "21 December 2025", arrival: "26 December 2025", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "28 December 2025", arrival: "02 January 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "04 January 2026", arrival: "09 January 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "11 January 2026", arrival: "16 January 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "18 January 2026", arrival: "23 January 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "25 January 2026", arrival: "30 January 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "01 February 2026", arrival: "06 February 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "08 February 2026", arrival: "13 February 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "15 February 2026", arrival: "20 February 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "22 February 2026", arrival: "27 February 2026", ensuite: "1,599 €", nonEnsuite: "1,499 €" },
                      { departure: "01 March 2026", arrival: "06 March 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "08 March 2026", arrival: "13 March 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "15 March 2026", arrival: "20 March 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "22 March 2026", arrival: "27 March 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "29 March 2026", arrival: "03 April 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "05 April 2026", arrival: "10 April 2026", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "12 April 2026", arrival: "17 April 2026", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "19 April 2026", arrival: "24 April 2026", ensuite: "1,299 €", nonEnsuite: "1,199 €" },
                      { departure: "26 April 2026", arrival: "01 May 2026", ensuite: "1,099 €", nonEnsuite: "999 €" },
                    ].map((row, index, array) => (
                      <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}>{row.departure}</td>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}>{row.arrival}</td>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.ensuite}</td>
                        <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.nonEnsuite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className={combine(styles.p2, "text-zink mt-6 font-semibold")}>
                Early bird discount till 31st August 2025 on the cabin charter 10% if paid in full.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <p className={combine(styles.p2, "text-zink mb-6")}>
                Single person in a double cabin (price per person)
              </p>

              <div className="w-full overflow-x-auto border border-black rounded-lg">
                <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                  <thead className="bg-[#D6AB62] text-white">
                    <tr className={combine(styles.h5, "font-bold")}>
                      <th className="py-3 px-4 border-r border-b border-black">Departure Date</th>
                      <th className="py-3 px-4 border-r border-b border-black">Arrival Date</th>
                      <th className="py-3 px-4 border-r border-b border-black">Ensuite cabin p.P.</th>
                      <th className="py-3 px-4 border-b border-black">Non-ensuite cabin p.P.</th>
                    </tr>
                  </thead>
                  <tbody className="text-zink">
                    {[
                      { departure: "26 October 2025", arrival: "31 October 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "02 November 2025", arrival: "07 November 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "09 November 2025", arrival: "14 November 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "16 November 2025", arrival: "21 November 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "23 November 2025", arrival: "28 November 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "30 November 2025", arrival: "05 December 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "07 December 2025", arrival: "12 December 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "14 December 2025", arrival: "19 December 2025", ensuite: "1,799 €", nonEnsuite: "1,699 €" },
                      { departure: "21 December 2025", arrival: "26 December 2025", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "28 December 2025", arrival: "02 January 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "04 January 2026", arrival: "09 January 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "11 January 2026", arrival: "16 January 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "18 January 2026", arrival: "23 January 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "25 January 2026", arrival: "30 January 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "01 February 2026", arrival: "06 February 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "08 February 2026", arrival: "13 February 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "15 February 2026", arrival: "20 February 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "22 February 2026", arrival: "27 February 2026", ensuite: "2,599 €", nonEnsuite: "2,499 €" },
                      { departure: "01 March 2026", arrival: "06 March 2026", ensuite: "2,499 €", nonEnsuite: "2,399 €" },
                      { departure: "08 March 2026", arrival: "13 March 2026", ensuite: "2,499 €", nonEnsuite: "2,399 €" },
                      { departure: "15 March 2026", arrival: "20 March 2026", ensuite: "2,499 €", nonEnsuite: "2,399 €" },
                      { departure: "22 March 2026", arrival: "27 March 2026", ensuite: "2,499 €", nonEnsuite: "2,399 €" },
                      { departure: "29 March 2026", arrival: "03 April 2026", ensuite: "2,499 €", nonEnsuite: "2,399 €" },
                      { departure: "05 April 2026", arrival: "10 April 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "12 April 2026", arrival: "17 April 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "19 April 2026", arrival: "24 April 2026", ensuite: "1,499 €", nonEnsuite: "1,399 €" },
                      { departure: "26 April 2026", arrival: "01 May 2026", ensuite: "1,399 €", nonEnsuite: "1,299 €" },
                    ].map((row, index, array) => (
                      <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}>{row.departure}</td>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}>{row.arrival}</td>
                        <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.ensuite}</td>
                        <td className={combine(styles.p2, "py-3 px-4 font-semibold")}>{row.nonEnsuite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className={combine(styles.p2, "text-zink mt-6 font-semibold")}>
                Early bird discount till 31st August 2025 on the cabin charter 10% if paid in full.
              </p>
            </div>

            {/* Amadeus Private Charter Section */}
            <div className="mt-12 space-y-6">
              <div>
                <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
                  Amadeus 48 ft. Sailing Catamaran
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
                
                <p className={combine(styles.p2, "text-zink mb-4")}>
                  Overnight Charter (price per 24 hours; start and finish at 11:00)
                </p>

                <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                  <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                    <thead className="bg-[#D6AB62] text-white">
                      <tr className={combine(styles.h5, "font-bold")}>
                        <th className="py-3 px-4 border-r border-b border-black">Date</th>
                        <th className="py-3 px-4 border-r border-b border-black">1-4 pax<br />OR 3 cabins</th>
                        <th className="py-3 px-4 border-r border-b border-black">5-6 pax<br />OR 3 cabins</th>
                        <th className="py-3 px-4 border-r border-b border-black">7-8 pax<br />OR 4 cabins</th>
                        <th className="py-3 px-4 border-b border-black">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="text-zink">
                      {[
                        { date: "Nov. – 20th Dec.", pax1_4: "1,250 €", pax5_6: "1,350 €", pax7_8: "1,450 €", remarks: "Min. 5 nights; start on Sat" },
                        { date: "20th Dec. – Feb.", pax1_4: "1,800 €", pax5_6: "1,800 €", pax7_8: "1,800 €", remarks: "7 or 14 nights; start on Sat" },
                        { date: "Mar. – Apr.", pax1_4: "1,450 €", pax5_6: "1,550 €", pax7_8: "1,650 €", remarks: "Min. 5 nights; start on Sat" },
                        { date: "May – Oct.", pax1_4: "1,100 €", pax5_6: "1,200 €", pax7_8: "1,300 €", remarks: "Charters less than 4 nights the rate is charged per day with start 11:00 and finish 17:00" },
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

                <p className={combine(styles.p2, "text-zink mb-6")}>
                  Charters longer than 5 nights the rate is charged per 24 hour with start and finish at 11:00
                </p>

                <p className={combine(styles.p2, "text-zink mb-4 font-semibold")}>
                  Day charter
                </p>

                <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                  <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                    <thead className="bg-[#D6AB62] text-white">
                      <tr className={combine(styles.h5, "font-bold")}>
                        <th className="py-3 px-4 border-r border-b border-black">Date</th>
                        <th className="py-3 px-4 border-r border-b border-black">8 pax included</th>
                        <th className="py-3 px-4 border-r border-b border-black">Additional pax<br />(max. 30)</th>
                        <th className="py-3 px-4 border-b border-black">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="text-zink">
                      {[
                        { date: "Nov. – 20th Dec.", dayCharter: "34,900 THB", additionalPax: "1,000 THB", remarks: "day charter only last minute if there is a minimum night" },
                        { date: "20th Dec. – Feb.", dayCharter: "49,900 THB", additionalPax: "1,500 THB", remarks: "" },
                        { date: "Mar. – Apr.", dayCharter: "39,900 THB", additionalPax: "1,500 THB", remarks: "" },
                        { date: "May – Oct.", dayCharter: "29,900 THB", additionalPax: "1,000 THB", remarks: "" },
                      ].map((row, index, array) => (
                        <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                          <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.date}</td>
                          <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.dayCharter}</td>
                          <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.additionalPax}</td>
                          <td className={combine(styles.p2, "py-3 px-4 text-left")}>{row.remarks}</td>
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

                <div className="space-y-4 mb-8">
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
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div className="space-y-4">
                <h3 className={combine(styles.h4, "text-zink font-bold")}>
                  Boat Pictures
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

              <div className="space-y-4">
                <h3 className={combine(styles.h4, "text-zink font-bold")}>
                  Marketing Material
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

            <div className="mt-12 space-y-8">
              <div className="space-y-6">
                <h2 className={combine(styles.h2, "text-zink font-bold")}>
                  Inclusions (What is included?)
                </h2>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>✔ 5 nights/ 6 days sailing (check-in, check out 11:00)</li>
                  <li>✔ Use of the booked cabin and bathroom</li>
                  <li>✔ Service of 3 crew: captain, cook/stewardess, and deckhand/engineer</li>
                  <li>✔ Running cost of yacht (fuel & berthing)</li>
                  <li>✔ Full board including 5 x breakfast, 5x lunch, and 4x dinner, as well as fruits and snacks</li>
                  <li>✔ Beach BBQ (if permitted by the national park)</li>
                  <li>✔ Welcome drink</li>
                  <li>✔ Welcome towel</li>
                  <li>✔ Coffee</li>
                  <li>✔ Tea</li>
                  <li>✔ Drinking water</li>
                  <li>✔ Snorkeling gear (mask, snorkel, 12 fins in different sizes)</li>
                  <li>✔ Handline fishing</li>
                  <li>✔ Trawling by crew</li>
                  <li>✔ Linen, bath towels, and swimming towels</li>
                  <li>✔ 2 x stand-up paddle boards (shared with other guests on board)</li>
                  <li>✔ 2 x kayak (shared with other guests on board)</li>
                  <li>✔ Accident insurance</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className={combine(styles.h2, "text-zink font-bold")}>
                  Optional extras
                </h2>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>➜ Private stand Up Paddle Boards = 700 THB per day per SUP</li>
                  <li>➜ 2 Seater Kayak = 700 THB per day per Kayak</li>
                  <li>➜ Local beers onboard (Leo, Singha or Chang) 100 THB per can (pay what you consume)</li>
                  <li>➜ 1 pack (24 cans) of local beers (Leo, Singha or Chang) 1700 THB per pack</li>
                  <li>➜ BBQ onboard, alcoholic beverages, cakes, cold platter, etc. → Request our PDF's</li>
                  <li>➜ Anything else that would make your charter special, just ask!</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className={combine(styles.h2, "text-zink font-bold")}>
                  Exclusions (What is NOT included?)
                </h2>
                
                <ul className={combine(styles.p2, "text-zink text-sm space-y-2 list-none pl-0")}>
                  <li>✖ National Park and entrance fees when applicable</li>
                  <li className="pl-6 text-sm">(Phi Phi Don viewpoint 50 THB, Lanta water fall 200 THB, Koh Muk 300 THB, Koh Rok & Koh Haa 400 THB, Phi Phi Leh 400 THB)</li>
                  <li>✖ Airline flights, transfers or hotels</li>
                  <li>✖ Yacht delivery (if applicable)</li>
                  <li>✖ Rental vehicles or water taxis</li>
                  <li>✖ Meals or drinks in restaurants</li>
                </ul>
              </div>
            </div>

            {/* Hot Chilli Section */}
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

              {/* SY Mozart Section */}
              <div className="mt-12 space-y-6">
                <div>
                  <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
                    SY Mozart 48 ft. sailing catamaran
                  </h2>
                  <h3 className={combine(styles.h3, "text-zink font-semibold mb-6")}>
                    Private charter rates
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
                  
                  <p className={combine(styles.p2, "text-zink mb-4")}>
                    Overnight Charter (price per 24 hours; start and finish at 11:00)
                  </p>

                  <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                    <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                      <thead className="bg-[#D6AB62] text-white">
                        <tr className={combine(styles.h5, "font-bold")}>
                          <th className="py-3 px-4 border-r border-b border-black">Date</th>
                          <th className="py-3 px-4 border-r border-b border-black">1-4 pax<br />OR 3 cabins</th>
                          <th className="py-3 px-4 border-r border-b border-black">5-6 pax<br />OR 3 cabins</th>
                          <th className="py-3 px-4 border-r border-b border-black">7-8 pax<br />OR 4 cabins</th>
                          <th className="py-3 px-4 border-b border-black">Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="text-zink">
                        {[
                          { date: "Nov. – 20th Dec.", pax1_4: "1,100 €", pax5_6: "1,200 €", pax7_8: "1,300 €", remarks: "–" },
                          { date: "20th Dec. – Feb.", pax1_4: "1,300 €", pax5_6: "1,400 €", pax7_8: "1,500 €", remarks: "Min. 3 nights" },
                          { date: "Mar. – Apr.", pax1_4: "1,200 €", pax5_6: "1,300 €", pax7_8: "1,400 €", remarks: "–" },
                          { date: "May – Oct.", pax1_4: "1,000 €", pax5_6: "1,100 €", pax7_8: "1,200 €", remarks: "Charters less than 4 nights the rate is charged per day with start 11:00 and finish 17:00" },
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
                    <p>
                      Charters longer than 5 nights the rate is charged per 24 hour with start and finish at 11:00
                    </p>
                    <p>
                      Charters from 7 nights get 5% discount, from 10 nights 10% and from 14 nights 15%
                    </p>
                  </div>

                  <p className={combine(styles.p2, "text-zink mb-4 font-semibold")}>
                    Day charter
                  </p>

                  <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                    <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                      <thead className="bg-[#D6AB62] text-white">
                        <tr className={combine(styles.h5, "font-bold")}>
                          <th className="py-3 px-4 border-r border-b border-black">Date</th>
                          <th className="py-3 px-4 border-r border-b border-black">8 pax included</th>
                          <th className="py-3 px-4 border-r border-b border-black">Additional pax<br />(max. 30)</th>
                          <th className="py-3 px-4 border-b border-black">Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="text-zink">
                        {[
                          { date: "Nov. – 20th Dec.", dayCharter: "29,900 THB", additionalPax: "1,000 THB", remarks: "day charter only last minute if there is a minimum night" },
                          { date: "20th Dec. – Feb.", dayCharter: "39,900 THB", additionalPax: "1,500 THB", remarks: "" },
                          { date: "Mar. – Apr.", dayCharter: "34,900 THB", additionalPax: "1,500 THB", remarks: "" },
                          { date: "May – Oct.", dayCharter: "24,900 THB", additionalPax: "1,000 THB", remarks: "" },
                        ].map((row, index, array) => (
                          <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                            <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.date}</td>
                            <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.dayCharter}</td>
                            <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.additionalPax}</td>
                            <td className={combine(styles.p2, "py-3 px-4 text-left")}>{row.remarks}</td>
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

                  <div className="space-y-4 mb-8">
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
                 </div>
               </div>

               {/* SY Shindig Section */}
               <div className="mt-12 space-y-6">
                 <div>
                   <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
                     SY Shindig 48 ft. sailing catamaran
                   </h2>
                   <h3 className={combine(styles.h3, "text-zink font-semibold mb-6")}>
                     private charter rates
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
                   
                   <p className={combine(styles.p2, "text-zink mb-4 font-semibold")}>
                     Day Charter Pricing
                   </p>

                   <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                     <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                       <thead className="bg-[#D6AB62] text-white">
                         <tr className={combine(styles.h5, "font-bold")}>
                           <th className="py-3 px-4 border-r border-b border-black">Date</th>
                           <th className="py-3 px-4 border-r border-b border-black">Day charter</th>
                           <th className="py-3 px-4 border-r border-b border-black">8 pax included</th>
                           <th className="py-3 px-4 border-r border-b border-black">Additional pax<br />(max. 30)</th>
                           <th className="py-3 px-4 border-b border-black">Remarks</th>
                         </tr>
                       </thead>
                       <tbody className="text-zink">
                         {[
                           { date: "Nov. – 20th Dec.", dayCharter: "", dayCharterIncluded: "34,900 THB", additionalPax: "1,000 THB", remarks: "day charter only last minute if there is a minimum night" },
                           { date: "20th Dec. – Feb.", dayCharter: "", dayCharterIncluded: "44,900 THB", additionalPax: "1,500 THB", remarks: "" },
                           { date: "Mar. – Apr.", dayCharter: "", dayCharterIncluded: "39,900 THB", additionalPax: "1,500 THB", remarks: "" },
                           { date: "May – Oct.", dayCharter: "", dayCharterIncluded: "29,900 THB", additionalPax: "1,000 THB", remarks: "" },
                         ].map((row, index, array) => (
                           <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                             <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.date}</td>
                             <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}>{row.dayCharter}</td>
                             <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.dayCharterIncluded}</td>
                             <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.additionalPax}</td>
                             <td className={combine(styles.p2, "py-3 px-4 text-left")}>{row.remarks}</td>
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

                   <p className={combine(styles.p2, "text-zink mb-4 font-semibold")}>
                     Overnight Charter Pricing
                   </p>

                   <div className="w-full overflow-x-auto border border-black rounded-lg mb-6">
                     <table className="min-w-[700px] w-full table-auto border-collapse text-center font-sourceSansPro">
                       <thead className="bg-[#D6AB62] text-white">
                         <tr className={combine(styles.h5, "font-bold")}>
                           <th className="py-3 px-4 border-r border-b border-black">Date</th>
                           <th className="py-3 px-4 border-r border-b border-black">Overnight Charter</th>
                           <th className="py-3 px-4 border-r border-b border-black">1-4 pax<br />OR 3 cabins</th>
                           <th className="py-3 px-4 border-r border-b border-black">5-6 pax<br />OR 3 cabins</th>
                           <th className="py-3 px-4 border-r border-b border-black">7-8 pax<br />OR 4 cabins</th>
                           <th className="py-3 px-4 border-b border-black">Remarks</th>
                         </tr>
                       </thead>
                       <tbody className="text-zink">
                         {[
                           { date: "Nov. – 20th Dec.", overnightCharter: "", pax1_4: "1,200 €", pax5_6: "1,300 €", pax7_8: "1,400 €", remarks: "" },
                           { date: "20th Dec. – Feb.", overnightCharter: "", pax1_4: "1,400 €", pax5_6: "1,500 €", pax7_8: "1,600 €", remarks: "Min. 5 nights" },
                           { date: "Mar. – Apr.", overnightCharter: "", pax1_4: "1,300 €", pax5_6: "1,400 €", pax7_8: "1,500 €", remarks: "Min. 3 nights" },
                           { date: "May – Oct.", overnightCharter: "", pax1_4: "1,000 €", pax5_6: "1,100 €", pax7_8: "1,200 €", remarks: "" },
                         ].map((row, index, array) => (
                           <tr key={index} className={index !== array.length - 1 ? "border-b border-black" : ""}>
                             <td className={combine(styles.p2, "py-3 px-4 border-r border-black font-semibold")}>{row.date}</td>
                             <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}>{row.overnightCharter}</td>
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
                     <p>
                       Charters less than 4 nights the rate is charged per day with start 11:00 and finish 17:00
                     </p>
                     <p>
                       Charters longer than 5 nights the rate is charged per 24 hour with start and finish at 11:00
                     </p>
                     <p>
                       Charters from 7 nights get 5% discount, from 10 nights 10% and from 14 nights 15%
                     </p>
                   </div>

                   <div className="space-y-4 mb-8">
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
                           <li>✖ Yacht delivery (if applicable)</li>
                           <li>✖ Rental vehicles or water taxis</li>
                           <li>✖ Meals or drinks in restaurants</li>
                           <li>✖ Airline flights, transfers or hotels</li>
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
                 </div>
               </div>

               <div className="mt-12 space-y-6">
                 <div>
                   <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
                     Sail La Vie 51 ft Private Charter Rates
                   </h2>
                   
                   <h4 className={combine(styles.h4, "text-zink font-bold mb-4")}>
                     Season 2025/2026
                   </h4>
                   
                   <p className={combine(styles.p2, "text-zink mb-6 font-semibold")}>
                     Contract valid from 1st May 2025
                   </p>

                   <p className={combine(styles.p2, "text-zink mb-2 font-semibold")}>
                     Fill Contract Form
                   </p>
                   
                   <p className={combine(styles.p2, "text-zink mb-4 font-semibold")}>
                     Day charter
                   </p>

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
                             <thead className="bg-[#D6AB62] text-white">
                               <tr className={combine(styles.h5, "font-bold")}>
                                 <th className="py-3 px-4 border-r border-b border-black">Overnight Charter</th>
                                 <th className="py-3 px-4 border-r border-b border-black">(max. 8pax in 4 double cabins)</th>
                                 <th className="py-3 px-4 border-r border-b border-black">High Season Pricing</th>
                                 <th className="py-3 px-4 border-b border-black">Peak Season Pricing</th>
                               </tr>
                               <tr className={combine(styles.h5, "font-bold")}>
                                 <th className="py-3 px-4 border-r border-black"></th>
                                 <th className="py-3 px-4 border-r border-black"></th>
                                 <th className="py-3 px-4 border-r border-black">Nov. till Apr.</th>
                                 <th className="py-3 px-4">20th Dec – 10th Jan.</th>
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
                                   <td className={combine(styles.p2, "py-3 px-4 border-r border-black")}></td>
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

                 <div className="mt-12 space-y-6">
                   <div>
                     <h2 className={combine(styles.h2, "text-zink font-bold mb-2")}>
                       SY Nauti By Nature 45 ft. Leopard sailing catamaran
                     </h2>
                     <h3 className={combine(styles.h3, "text-zink font-semibold mb-6")}>
                       Private charter rates Season 2025/2026
                     </h3>
                     
                     <p className={combine(styles.p2, "text-zink mb-6 font-semibold")}>
                       Contract valid from 1st October 2025
                     </p>

                     <div className="space-y-4 mb-8">
                       <h3 className={combine(styles.h4, "text-zink font-bold")}>
                         Pictures of the boat
                       </h3>
                       <a 
                         href="https://drive.google.com/drive/folders/" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-block"
                       >
                         <button className="px-6 py-2 border-2 border-zink text-zink bg-white rounded-lg font-semibold hover:bg-zink hover:text-white transition-colors duration-200">
                           Click to View
                         </button>
                       </a>
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
                                 <td className={combine(styles.p2, "py-3 px-4 text-left")}>{row.remarks}</td>
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
               </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  export default AllBoatAgencyContract;
