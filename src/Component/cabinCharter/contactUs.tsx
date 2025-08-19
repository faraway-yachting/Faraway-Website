"use client";
import { RefObject } from "react";

interface ContactUsProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}
const ContactUs = ({ sectionRef }: ContactUsProps) => {
    return (
        <div ref={sectionRef}>
            <section className="bg-white py-7 lg:py-9 xl:py-12 px-4 lg:px-6 ">
                <div className="max-w-7xl mx-auto bg-white">
                    {/* Left Side - Form (Replaced with iframe) */}
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className="text-[32px] sm:text-[36px] text-center font-playfair font-bold text-[#034250] mb-7">
                            Booking Request
                        </h2>
                        
                        {/* Replaced form with iframe */}
                        <div className="w-full h-[837px]">
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/elClFq6TFQE8FpBe92os"
                                style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                                id="inline-elClFq6TFQE8FpBe92os" 
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Amadeus Cabin Charter"
                                data-height="837"
                                data-layout-iframe-id="inline-elClFq6TFQE8FpBe92os"
                                data-form-id="elClFq6TFQE8FpBe92os"
                                title="Amadeus Cabin Charter"
                            >
                            </iframe>
                        </div>
                        
                        {/* Script tag for the iframe */}
                        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
