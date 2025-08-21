import { Yacht } from "../YachtDetail/hero";
import DOMPurify from 'dompurify';

type Props = {
    data: Yacht | null;
};

const DayCharter: React.FC<Props> = ({ data }) => {
    return (
        <section className="bg-white rounded-lg space-y-6">
            {/* Day Charter Description */}
            <div className="border-b-1 border-b-gray-400 text-zink font-sourceSansPro pb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-zink mb-3">Day Charter</h2>
                {data?.dayCharter ? (
                    <div
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.dayCharter || "") }}
                    />
                ) : (
                    <p className="text-zink">No day charter information available.</p>
                )}
            </div>
        </section>
    )
}
export default DayCharter 