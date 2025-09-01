"use client";
import { RefObject } from "react";
import { styles, combine } from "@/styles";

interface ContactUsProps {
    sectionRef: RefObject<HTMLDivElement | null>; // <-- fixed
}
const ContactUs = ({ sectionRef }: ContactUsProps) => {
    return (
        <div ref={sectionRef}>
            <section className={combine("bg-white", styles.py4, styles.px3)}>
                <div className={combine(" bg-white", styles.container)}>
                    {/* Left Side - Form (Replaced with iframe) */}
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className={combine("text-center font-bold text-zink mb-7", styles.h2)}>
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
