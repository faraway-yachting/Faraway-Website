"use client";
import { styles, combine } from "@/styles";
import { LuAnchor } from "react-icons/lu";
import Button from "@/styles/Button";

interface BookYourCharterProps {
    contactRef?: React.RefObject<HTMLDivElement | null>;
}

const BookYourCharter = ({ contactRef }: BookYourCharterProps) => {
    return (
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-20 lg:py-24 my-10 overflow-hidden">
            {/* Enhanced background pattern */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ocean wave pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-blue-200"></path>
                    </svg>
                </div>
                {/* Floating elements with subtle animation */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-mustard/20 to-orange-100/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-slate-100/40 to-blue-50/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-mustard/15 to-amber-100/25 rounded-full blur-lg"></div>
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>
            {/* Content */}
            <div className={combine(styles.container, "relative z-10")}>
                <div className="text-center max-w-4xl mx-auto">
                    {/* Content card with subtle backdrop */}
                    <div className={combine("bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20", styles.padding1)}>
                        {/* Main heading with improved typography */}
                        <h2 className={combine(styles.h2, "text-zink font-bold tracking-tight mb-4 lg:mb-6 xl:mb-8 ")}>
                            Book Your <span className="text-mustard bg-gradient-to-r from-mustard to-amber-600 bg-clip-text text-transparent px-1">Cabin Charter Phuket</span>
                            Today
                        </h2>
                        {/* Content with better spacing and readability */}
                        <div className={combine(" space-y-5 lg:space-y-8 mb-6 md:mb-8 lg:mb-10 xl:mb-12")}>
                            <p className={combine(styles.p1, "text-zink leading-relaxed font-inter max-w-3xl mx-auto font-light")}>
                                A<span className="text-mustard font-semibold bg-mustard/15 px-3 py-1 rounded-full">Phuket cabin charter </span>  is more than just a holiday — it's an adventure, a cultural experience, and a chance to explore Thailand's most beautiful islands in comfort. Whether you're booking as a couple, a solo traveler, or with friends, Faraway Yachting offers the most trusted and experienced cabin charters in Thailand.    </p>

                            <div className="flex justify-center">
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        contactRef?.current?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        });
                                    }}
                                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
                                >
                                    <div className="flex items-center">
                                    <LuAnchor className="w-5 h-5 mr-2" /> 
                                    Secure your Cabin Now
                                    </div>
                                </Button>
                            </div>

                            <p className={combine(styles.p1, "text-zink leading-relaxed max-w-3xl mx-auto font-inter font-medium")}>
                                Spaces fill fast, especially in high season. Start your island-hopping adventure today.

                            </p>
                        </div>
                        {/* Elegant decorative line */}
                        <div className={styles.flexCenter}>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mustard to-transparent"></div>
                            <div className="w-2 h-2 bg-mustard rounded-full mx-4"></div>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mustard to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookYourCharter