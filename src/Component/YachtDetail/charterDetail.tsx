"use client";
import { Yacht } from "../YachtDetail/hero";
import DOMPurify from 'isomorphic-dompurify';
import { styles } from '../../styles/style';

type Props = {
  data: Yacht | null;
  showSection?: "all" | "about" | "day" | "night";
};

const CharterDetail: React.FC<Props> = ({ data, showSection = "all" }) => {
  const shouldShowAbout = showSection === "all" || showSection  === "about";
  const shouldShowDay = showSection === "all" || showSection === "day";
  const shouldShowNight = showSection === "all" || showSection === "night";

  return (
    <div className="xl:px-0 max-w-7xl mx-auto">
      {/* Description Section */}
      {shouldShowAbout && (
           <div id="about-boat" className="space-y-4 border-b-1 border-b-gray-400 text-zink font-inter mb-6">
          <h3 className={`${styles.p5} text-zink font-semibold font-playfair mb-4`}>About Boat</h3>
          {data?.aboutThisBoat ? (
            <div 
              className="max-w-full overflow-hidden break-words"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.aboutThisBoat) }} 
            />
          ) : (
            <p className={`${styles.p2} text-zink`}>No description information available.</p>
          )}
        </div>
      )}

      {/* Day Charter Section */}
      {shouldShowDay && (
        <div id="day-charter"  className="border-b-1 border-b-gray-400 text-zink font-sourceSansPro pb-6 mb-6">
          <h3 className={`${styles.p5} text-zink font-semibold font-playfair mb-4`}>Day Charter</h3>
          {data?.dayCharter ? (
            <div
              className="max-w-full overflow-hidden break-words"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.dayCharter || "") }}
            />
          ) : (
            <p className={`${styles.p2} text-zink`}>No day charter information available.</p>
          )}
        </div>
      )}

      {/* Night Charter Section */}
      {shouldShowNight && (
        <div id="night-charter" className="text-zink border-b-1 font-inter border-gray-400">
          <h3 className={`${styles.p5} text-zink font-semibold font-playfair mb-4`}>Overnight Charter</h3>
          {data?.overnightCharter ? (
            <div 
              className="max-w-full overflow-hidden break-words"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.overnightCharter) }} 
            />
          ) : (
            <p className={`${styles.p2} text-zink`}>No night charter information available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CharterDetail;
