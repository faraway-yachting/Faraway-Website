import HeadingContent from '@/common/heading';
import Image from 'next/image';
import { styles, combine } from '@/styles';
import PngIcons from '@/icons/pngIcon';
import { HiMiniInformationCircle } from "react-icons/hi2";

import NightCharter_Vessels from './nightcharter_Vessels';

const OurFleet = () => {
    return (
        <div className={combine(styles.py4, styles.container, "mt-8")}>
            {/* Main Title Section */}
            <div className={combine("text-center", styles.mb2)}>
                <HeadingContent
                    heading='Our Fleet for Overnight Boat Charters in Phuket'
                    description='Choosing the right yacht sets the foundation for your experience. Our fleet covers every style and budget for the perfect overnight boat charter Phuket.'
                />
            </div>

            {/* Budget-Friendly Section */}
            <div className="grid grid-cols-12 gap-6 items-center mb-16 shadow-xl rounded-tl-none md:rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-200">
                {/* Text Content */}
                <div className="col-span-12 md:col-span-8 space-y-4 ps-3 md:ps-5 lg:ps-7">
                    <div className={combine("flex items-center ", styles.mb1)}>
                        <h3 className={combine(styles.h3, "text-zink")}>
                            Budget-Friendly
                        </h3>
                        <a
                            href="https://www.faraway-yachting.com/crewed_boats/power-catamaran-rental-phi-phi-islands"
                            target='_blank'
                            className={combine("text-[#005292] hover:text-[#D6ab62] ms-2 md:ms-4 font-semibold transition-colors underline", styles.p1)}
                        >
                            Hot Chilli Power Catamaran
                        </a>
                    </div>

                    <p className={combine(styles.p3, "text-zink leading-relaxed max-w-xl")}>
                        A great choice for couples or shorter trips, this efficient catamaran is ideal for 2- to 4-night getaways. Perfect for those who want a private overnight boat trip Phuket without stretching the budget.
                    </p>
                </div>

                {/* Image */}
                <div className="col-span-12 md:col-span-4 relative">
                    <div className={combine("relative w-full h-[250px] md:h-[270px] lg:h-[320px] xl:h-[350px]", "overflow-hidden")}>
                        <Image
                            src={PngIcons.nightCharterimg4}
                            alt="Hot Chilli Power Catamaran sailing on blue water"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/*Mid-Tier Section*/}
            <div className="grid grid-cols-12 gap-6 items-center mb-16 shadow-xl rounded-tl-none md:rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-200">
                {/* Text Content */}
                <div className="col-span-12 md:col-span-8 space-y-4 ps-4 md:ps-5 lg:ps-7">
                    <div className={combine("flex items-center ", styles.mb1)}>
                        <h3 className={combine(styles.h3, "text-zink")}>
                            Mid-Tier
                        </h3>
                        <a
                            href="https://www.faraway-yachting.com/crewed_boats/power-catamaran-island-hopping"
                            target='_blank'
                            className={combine("text-[#005292] hover:text-[#D6ab62] ms-4 font-semibold transition-colors underline", styles.p1)}
                        >
                            Sailing Catamarans
                        </a>
                    </div>

                    <p className={combine(styles.p3, "text-zink leading-relaxed max-w-xl")}>
                        Purpose-built for multi-day charters in Phuket, our four-cabin sailing catamarans include onboard water makers, large fridges, and solar-powered systems. They’re the best choice for families or groups seeking a comfortable and eco-friendly overnight boat charter Phuket.
                    </p>
                    {/* Question Section */}
                    <NightCharter_Vessels />
                </div>

                {/* Image */}
                <div className="col-span-12 md:col-span-4 relative">
                    <div className={combine("relative w-full h-[300px] md:h-[600px] lg:h-[630px] xl:h-[660px]", "overflow-hidden")}>
                        <Image
                            src={PngIcons.nightCharterimg5}
                            alt="Hot Chilli Power Catamaran sailing on blue water"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/*Luxury Section*/}


            <div className="grid grid-cols-12 gap-6 items-center mb-16 shadow-xl rounded-tl-none md:rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-200">
                {/* Text Content */}
                <div className="col-span-12 md:col-span-8 space-y-4 ps-4 md:ps-5 lg:ps-7">
                    <div className={combine("flex items-center ", styles.mb1)}>
                        <h3 className={combine(styles.h3, "text-zink")}>
                            Luxury
                        </h3>
                        <a
                            href="https://www.faraway-yachting.com/crewed_boats/power-catamaran-island-hopping"
                            target='_blank'
                            className={combine("text-[#005292] hover:text-[#D6ab62] ms-4 font-semibold transition-colors underline", styles.p1)}
                        >
                            Sail La Vie Power Catamaran
                        </a>
                    </div>

                    <p className={combine(styles.p3, "text-zink leading-relaxed max-w-xl")}>
                        A fully air-conditioned yacht with a flybridge and experienced crew of four. This is a luxury overnight yacht Phuket designed for premium comfort.                    </p>
                </div>

                {/* Image */}
                <div className="col-span-12 md:col-span-4 relative">
                    <div className={combine("relative w-full h-[250px] md:h-[270px] lg:h-[320px] xl:h-[350px]", "overflow-hidden ")}>
                        <Image
                            src={PngIcons.nightCharterimg6}
                            alt="Hot Chilli Power Catamaran sailing on blue water"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Ultra-Luxury Section*/}


            <div className="grid grid-cols-12 gap-6 items-center mb-16 shadow-xl rounded-tl-none md:rounded-tl-3xl rounded-br-3xl overflow-hidden border border-gray-200">
                {/* Text Content */}
                <div className="col-span-12 md:col-span-8 space-y-4 ps-4 md:ps-5 lg:ps-7">
                    <div className={combine("flex items-center ", styles.mb1)}>
                        <h3 className={combine(styles.h3, "text-zink")}>
                            Ultra-Luxury                        </h3>
                        <a
                            href="https://www.faraway-yachting.com/crewed_boats/power-catamaran-rental-phi-phi-islands"
                            target='_blank'
                            className={combine("text-[#005292] hover:text-[#D6ab62] ms-4 font-semibold transition-colors underline", styles.p1)}
                        >
                            Mia Kai Superyacht
                        </a>
                    </div>

                    <p className={combine(styles.p3, "text-zink leading-relaxed max-w-xl")}>
                        Among the finest superyachts in Southeast Asia, Mia Kai offers the best overnight yacht charter Phuket has to offer, with spacious cabins, gourmet dining, and first-class service.                    </p>
                </div>

                {/* Image */}
                <div className="col-span-12 md:col-span-4 relative">
                    <div className={combine("relative w-full h-[250px] md:h-[260px] lg:h-[320px] xl:h-[350px]", "overflow-hidden")}>
                        <Image
                            src={PngIcons.nightCharterimg7}
                            alt="Hot Chilli Power Catamaran sailing on blue water"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Cabin Charter Option Box */}
            <div className="bg-white rounded-6xl shadow-xl p-6 flex items-start gap-4 max-w-7xl">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#D6ab62] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiMiniInformationCircle className='text-white text-3xl' />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h4 className={combine('text-zink font-bold font-playfair mb-2', styles.h5)}>
                        Cabin Charter Option
                    </h4>
                    <p className={combine('text-zink font-inter leading-relaxed', styles.p3)}>
                        During high season, our shared multi-day cabin charter Phuket option is popular for couples who want to experience the best 5-night itineraries at an even great value.{' '}
                        <a
                            href="https://www.faraway-yachting.com/best-of-phukets-islands-cabincharter"
                            target='_blank'
                            className="text-[#005292] hover:text-[#D6ab62] underline font-semibold transition-colors duration-200"
                        >
                            Find Out More
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurFleet;