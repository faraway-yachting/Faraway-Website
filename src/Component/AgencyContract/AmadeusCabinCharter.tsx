import { styles, combine } from "@/styles/style";

const AmadeusCabinCharter = () => {
  return (
    <div className="mt-12 space-y-6">
      <div>
        <h2 className={combine(styles.h2, "text-zink font-bold mb-2 text-center")}>
          Amadeus 48 ft. Sailing Catamaran
        </h2>
        <h3 className={combine(styles.h3, "text-zink font-semibold mb-6 text-center")}>
          Cabin Charter Rates
        </h3>
        
        <h4 className={combine(styles.h4, "text-zink font-bold mb-4 text-center")}>
          Prices Season 2025 - 2026
        </h4>
        
        <p className={combine(styles.p2, "text-zink mb-2 font-semibold text-center")}>
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
    </div>
  );
};

export default AmadeusCabinCharter;

