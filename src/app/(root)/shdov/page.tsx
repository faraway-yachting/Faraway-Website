import { combine, styles } from "@/styles/style";

export const metadata = {
  title: "Shindig Overnight Charter Preference List",
};

const ShindigOvernightCharterPreferencePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-6 md:py-10">
      <div className={combine(styles.container, "max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-8")}>
        <h1 className={combine(styles.h2, "text-center text-zink font-semibold")}>Shindig Overnight Charter Preference List</h1>
        <div className="w-full flex justify-center">
          <iframe
            src="https://fill.boloforms.com/signature/1Aere7saTWKzbRT14BHYw7BLVBQgmf2KeW4-o1_SwIGE?p=view"
            name="BoloSign"
            title="BoloSign"
            loading="lazy"
            width="200"
            height="700"
            className="w-full max-w-3xl h-[700px] rounded-2xl border border-gray-200 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShindigOvernightCharterPreferencePage;

