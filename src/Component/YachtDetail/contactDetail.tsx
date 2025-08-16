"use client";
import React, { useEffect, useState } from "react";
import { Yacht } from "../YachtDetail/hero";

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
                <p className="text-lg md:text-xl lg:text-[22px] xl:text-[24px] font-playfair text-[#034250] font-bold">
                    {data?.title} 
                </p>
                <p className="text-zink font-inter text-sm lg:text-[16px] mt-1">
                    Looking for a yacht charter?
                </p>
                <p className="text-[#034250] font-inter text-sm lg:text-[16px] mt-1">+66 61 234 5623</p>
                <p className="text-[#034250] font-inter text-sm lg:text-[16px]">+66 61 234 5623</p>
            </div>
            
            {/* Dynamic iframe based on URL */}
            <div className="mt-3 lg:mt-4 xl:mt-2 w-full h-[820px]">
                <iframe
                    src={`${iframeConfig.src}?yacht_title=${encodeURIComponent(data?.title || '')}`}
                    style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                    id={iframeConfig.id}
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={iframeConfig.formName}
                    data-height="820"
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
