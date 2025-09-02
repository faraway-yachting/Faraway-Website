"use client";
import React, { useEffect, useState } from "react";
import { Yacht } from "../YachtDetail/hero";
import { styles, combine } from "@/styles";
import {FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
type Props = {
    data: Yacht | null;
};

const ContactDetail: React.FC<Props> = ({ data }) => {
    const [iframeConfig, setIframeConfig] = useState({
        src: "https://api.leadconnectorhq.com/widget/form/wpGcCTSRXF6bHxMiasah",
        id: "inline-wpGcCTSRXF6bHxMiasah",
        dataFormId: "wpGcCTSRXF6bHxMiasah",
        title: "Single Yacht Inquiry Crewed Yacht",
        formName: "Single Yacht Inquiry Crewed Yacht"
    });

    useEffect(() => {
        // Check if current URL contains 'bareboat'
        if (typeof window !== 'undefined' && window.location.pathname.includes('/bareboat/')) {
            setIframeConfig({
                src: "https://api.leadconnectorhq.com/widget/form/4cyg4csVjYUkJIrKtFZV",
                id: "inline-4cyg4csVjYUkJIrKtFZV",
                dataFormId: "4cyg4csVjYUkJIrKtFZV",
                title: "Single Yacht Inquiry Bareboat Yacht",
                formName: "Single Yacht Inquiry Bareboat Yacht"
            });
        }
    }, []);
    return (
        <div className="bg-white sticky rounded-lg p-3 max-w-[500px] w-full border-2 border-zink">
            <div className="flex flex-col items-center justify-center text-center">
                <h5 className={combine("font-playfair text-[#034250] font-bold", styles.h5)}>
                    {data?.title}
                </h5>
                <p className={combine("text-zink mt-1", styles.p4)}>
                    Looking for a yacht charter?
                </p>
                <a
                href="tel:+66612345623"
                target="_blank"
                rel="noopener noreferrer"
                 className={combine("text-zink font-inter mt-2 flex items-center hover:text-[#D6AB62] ", styles.p4)}><span className="text-base font-semibold me-2"><FaPhoneAlt /></span>+66 61 234 5623</a>
                <a
                  href="https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                 className={combine("text-zink font-inter flex items-center mt-1 hover:text-[#D6AB62] ", styles.p4)}><span className="text-xl font-semibold me-2"><FaWhatsapp /></span>+66 61 234 5623</a>
            </div>

            {/* Dynamic iframe based on URL */}
            <div className="mt-3 lg:mt-4 xl:mt-2 w-full h-[750px]">
                <iframe
                    src={`${iframeConfig.src}?yacht_title=${encodeURIComponent(data?.title || '')}`}
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id={iframeConfig.id}
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={iframeConfig.formName}
                    data-height="700"
                    data-layout-iframe-id={iframeConfig.id}
                    data-form-id={iframeConfig.dataFormId}
                    title={iframeConfig.title}
                >
                </iframe>
            </div>
            {/* Script tag for the iframe */}
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
    );
};
export default ContactDetail;
