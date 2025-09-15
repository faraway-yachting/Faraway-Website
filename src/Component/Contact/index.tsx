"use client";
import { contactDetails } from "@/data/contact/contact";
import { styles, combine } from "@/styles";
import { useState } from "react";
        
const ContactSection = () => {
    const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());

    const copyToClipboard = async (text: string, itemType: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItems(prev => new Set(prev).add(itemType));
            
            // Reset the copied state after 2 seconds
            setTimeout(() => {
                setCopiedItems(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(itemType);
                    return newSet;
                });
            }, 2000);
        } catch (err) {
        }
    };

    const isCopyableItem = (title: string) => {
        return title === "Email" || title === "Call us";
    };

    const getLinkForItem = (title: string, text: string) => {
        switch (title) {
            case "Whatsapp":
                return `https://api.whatsapp.com/send/?phone=66612345623&text&type=phone_number&app_absent=0`;
            case "Line":
                return "https://line.me/ti/p/IF91DcUiYa";
            case "Our Location":
                return "https://www.google.com/maps/place/Faraway+Yachting+Phuket,+Thailand/@7.8231625,98.3437787,15z/data=!4m6!3m5!1s0x3050257bffffffff:0x937eaf99ed7fa6b7!8m2!3d7.8235296!4d98.3451594!16s%2Fg%2F12hp6d07j?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D";
            default:
                return null;
        }
    };

    return (
        <div className="">
            <div className={combine("bg-[url('/images/Cimage1.png')] bg-cover bg-center bg-no-repeat w-full flex flex-col text-center min-h-[40vh]", styles.px1,styles.flexCenter)}>
                <h1 className={combine("text-white drop-shadow-md", styles.h1)}>
                    Contact Us
                </h1>
            </div>

            <section className={combine("bg-white", styles.py4)}>
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
                                loading="lazy"
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
                                const isCopyable = isCopyableItem(item.title);
                                const isCopied = copiedItems.has(item.title);
                                const linkUrl = getLinkForItem(item.title, item.text);
                                const isLinkable = linkUrl !== null;
                                
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
                                                {isLinkable ? (
                                                    <a
                                                        href={linkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={combine(
                                                            "font-sourceSanspro text-zink hover:text-[#d6ab62] transition-colors duration-200",
                                                            styles.p2
                                                        )}
                                                    >
                                                        {item.text}
                                                    </a>
                                                ) : (
                                                    <p 
                                                        className={combine(
                                                            "font-sourceSanspro text-zink", 
                                                            styles.p2,
                                                            isCopyable ? "cursor-pointer hover:text-[#d6ab62] transition-colors duration-200" : ""
                                                        )}
                                                        onClick={isCopyable ? () => copyToClipboard(item.text, item.title) : undefined}
                                                        title={isCopyable ? `Click to copy ${item.title}` : undefined}
                                                    >
                                                        {isCopyable && isCopied ? (
                                                            <span className="text-mustard font-semibold">Copied!</span>
                                                        ) : (
                                                            item.text
                                                        )}
                                                    </p>
                                                )}
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
