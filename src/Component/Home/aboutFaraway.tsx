"use client";
import { styles, combine } from "@/styles"

const AboutFaraway = () => {
    return (
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-100 py-20 md:py-24 lg:py-28 xl:py-18 overflow-hidden my-10 group">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Subtle wave pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-blue-200"></path>
                    </svg>
                </div>
                
                {/* Animated floating elements */}
                <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute top-40 right-24 w-24 h-24 bg-gradient-to-br from-mustard/20 to-orange-100/30 rounded-full blur-lg animate-float-medium"></div>
                <div className="absolute bottom-24 left-1/3 w-20 h-20 bg-gradient-to-br from-slate-100/40 to-blue-100/30 rounded-full blur-lg animate-float-fast"></div>
                <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-md animate-float-slow"></div>
                
                {/* Additional animated elements */}
                <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-mustard/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-300/30 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-orange-300/40 rounded-full animate-ping"></div>
            </div>
            
            {/* Content */}
            <div className={combine(styles.container, "relative z-10")}>
                <div className="text-center max-w-5xl mx-auto">
                    {/* Subtitle with clean styling */}
                    <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-mustard/10 rounded-full border border-zinc-300">
                        <div className="w-6 h-0.5 bg-mustard mr-3"></div>
                        <p className={combine("text-mustard font-semibold font-inter uppercase tracking-wider text-sm", styles.p3)}>Your Trusted Partner</p>
                        <div className="w-6 h-0.5 bg-mustard ml-3"></div>
                    </div>
                    
                    {/* Main heading */}
                    <h2 className={combine(styles.h2, "text-slate-800 font-bold mb-6 uppercase tracking-wide")}>
                        About <span className="text-mustard">Faraway Yachting</span>
                    </h2>
                    
                    {/* Content with clean typography */}
                    <div className="space-y-6 mb-9">
                        <p className={combine(styles.p1, "text-slate-700 leading-relaxed max-w-4xl mx-auto font-light")}>
                            Faraway Yachting is a Phuket-based yacht charter operator offering <span className="text-mustard font-medium">tailor-made private yacht experiences</span>. With our own catamarans and selected partner vessels, we ensure every charter is safe, smooth, and memorable.
                        </p>
                        <p className={combine(styles.p1, "text-slate-800 font-medium leading-relaxed max-w-3xl mx-auto")}>
                            Our goal is simple: to make your Phuket yacht charter the <span className="text-mustard">highlight of your holiday</span> as promised in <a href="/aboutus#mission" className="text-mustard hover:text-slate-800 transition-colors duration-300 underline">our mission statement.</a>
                        </p>
                    </div>
                    
                    {/* Clean decorative elements */}
                    <div className="flex justify-center items-center space-x-3">
                        <div className="w-2 h-2 bg-mustard rounded-full hover:scale-125 transition-transform duration-300"></div>
                        <div className="w-1 h-1 bg-slate-400 rounded-full hover:scale-125 transition-transform duration-300"></div>
                        <div className="w-3 h-3 bg-mustard rounded-full hover:scale-125 transition-transform duration-300"></div>
                        <div className="w-1 h-1 bg-slate-400 rounded-full hover:scale-125 transition-transform duration-300"></div>
                        <div className="w-2 h-2 bg-mustard rounded-full hover:scale-125 transition-transform duration-300"></div>
                    </div>
                </div>
            </div>
            
            {/* Custom CSS animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
                
                @keyframes float-medium {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(-180deg);
                    }
                }
                
                @keyframes float-fast {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(90deg);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                
                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }
                
                .animate-float-fast {
                    animation: float-fast 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

export default AboutFaraway
