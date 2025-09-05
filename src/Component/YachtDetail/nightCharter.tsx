"use client"
import { Yacht } from "../YachtDetail/hero";
import DOMPurify from 'dompurify';
type Props = {
    data: Yacht | null;
};

const NightCharter: React.FC<Props> = ({ data }) => {
    return (
        <section className="bg-white rounded-lg  space-y-6">
            {/* Overnight Charter Description */}
            <div className="border-b-1 border-b-gray-400 pb-6 text-zink font-inter">
                <h2 className="text-xl lg:text-2xl font-bold text-zink mb-3 font-playfair">Night Charter</h2>
                {data?.overnightCharter ? (
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.overnightCharter) }} />
                ) : (
                    <p className="text-zink font-inter">No Night charter information available.</p>
                )}
            </div>
        </section>
    )
}
export default NightCharter