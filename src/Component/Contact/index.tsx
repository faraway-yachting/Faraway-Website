"use client";
import { contactDetails } from "@/data/contact/contact";
        
const ContactSection = () => {
    return (
        <div className="">
            <div className="bg-[url('/images/Cimage1.png')] bg-cover bg-center bg-no-repeat min-h-[24vh] md:min-h-[30vh] lg:min-h-[40vh] w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] md:text-[48px] lg:text-[56px] font-playfair font-bold text-white drop-shadow-md">
                    Contact Us
                </p>
            </div>

            <section className="bg-white py-12 px-4 lg:px-6 ">
                <div className="max-w-7xl mx-auto bg-white p-0 xl:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
                    {/* Left Side - Form (Replaced with iframe) */}
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className="text-[28px] lg:text-[32px] xl:text-[36px] font-playfair font-bold text-[#034250] mb-4">
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
                        <h3 className=" text-[23px] md:text-[22px] lg:text-[25px] xl:text-[30px] font-bold font-inter text-zink mb-2 font-semibold">
                            Got Questions? <span className="text-mustard">Let's Chat!</span>
                        </h3>
                        <p className="text-black mb-4 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal">
                            Want help planning your adventure? </p>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal text-black"> <span className="font-bold">Fill out </span>Fill out the form and one of our
                            friendly experts will get back to you soon!
                        </p>
                        <ul className="space-y-3 text-sm sm:text-base mt-3">
                            {contactDetails.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="flex items-start gap-3 mt-4 lg:mt-0">
                                        <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-6">
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#034250] text-white rounded-full shrink-0">
                                                <Icon className="text-white text-[18px]" />
                                            </div>
                                            <div>
                                                <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-sourceSanspro font-semibold text-[#034250]">
                                                    {item.title}
                                                </p>
                                                <p className="text-[16px] sm:text-[17px] md:text-[18px] font-sourceSanspro text-zink">
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
