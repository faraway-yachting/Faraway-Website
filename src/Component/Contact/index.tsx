"use client";
import { contactDetails } from "@/data/contact/contact";
import { styles, combine } from "@/styles";
        
const ContactSection = () => {
    return (
        <div className="">
            <div className={combine("bg-[url('/images/Cimage1.png')] bg-cover bg-center bg-no-repeat w-full flex flex-col text-center min-h-[40vh]", styles.px1,styles.flexCenter)}>
                <p className={combine("text-white drop-shadow-md", styles.h1)}>
                    Contact Us
                </p>
            </div>

            <section className={combine("bg-white", styles.py4, styles.px1)}>
                <div className={combine("bg-white p-0 xl:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12",styles.container)}>
                    {/* Left Side - Form (Replaced with iframe) */}
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className={combine("text-zink font-bold mb-4", styles.h3)}>
                            Get In Touch
                        </h2>
                        
                        {/* Replaced form with iframe */}
                        <div className="w-full h-[745px]">
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/YBBUmegk6BkzfkI9GcOV"
                                style={{width:'100%',height:'100%',border:'none',borderRadius:'3px'}}
                                id="inline-YBBUmegk6BkzfkI9GcOV" 
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Contact Us"
                                data-height="745"
                                data-layout-iframe-id="inline-YBBUmegk6BkzfkI9GcOV"
                                data-form-id="YBBUmegk6BkzfkI9GcOV"
                                title="Contact Us"
                            >
                            </iframe>
                        </div>
                        
                        {/* Script tag for the iframe */}
                        <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="col-span-12 lg:col-span-5 bg-[url('/images/contactbg.png')] bg-cover bg-center bg-no-repeat bg-opacity-90 backdrop-blur-md p-6 shadow-sm rounded-tl-3xl rounded-br-3xl ">
                        <h3 className={combine("text-zink mb-2 font-semibold", styles.h5)}>
                            Got Questions? <span className="text-mustard">Let's Chat!</span>
                        </h3>
                        <p className={combine("text-zink mb-4 font-semibold", styles.p1)}>
                            Want help planning your adventure? </p>
                        <p className={combine("text-zink", styles.p3)}> <span className="font-bold">Fill out </span>Fill out the form and one of our
                            friendly experts will get back to you soon!
                        </p>
                        <ul className={combine("space-y-3 mt-3", styles.text1)}>
                            {contactDetails.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="flex items-start gap-3 mt-4 lg:mt-0">
                                        <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6">
                                            <div className="w-10 h-10 flex items-center justify-center bg-zink text-white rounded-full shrink-0">
                                                <Icon className="text-white text-[18px]" />
                                            </div>
                                            <div>
                                                <p className={combine("font-sourceSanspro font-semibold text-zink", styles.h5)}>
                                                    {item.title}
                                                </p>
                                                <p className={combine("font-sourceSanspro text-zink", styles.p2)}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
