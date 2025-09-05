"use client";
import { Yacht } from "../YachtDetail/hero";
import DOMPurify from 'dompurify';
type Props = {
  data: Yacht | null;
};

const CharterDetail: React.FC<Props> = ({ data }) => {
  return (
    <div className="xl:px-0 max-w-7xl mx-auto">
      {/* Content */}
      <div className="space-y-4 text-zink font-inter">
        <p className="text-xl lg:text-2xl font-bold text-zink font-playfair">Description</p>
        {data?.aboutThisBoat ? (
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.aboutThisBoat) }} />
        ) : (
          <p className="text-zink font-inter">No Night charter information available.</p>
        )}
      </div>
    </div >
  );
};
export default CharterDetail;
