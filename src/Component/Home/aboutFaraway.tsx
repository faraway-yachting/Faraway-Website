import PngIcons from "@/icons/pngIcon"
import { styles, combine } from "@/styles"

const AboutFaraway = () => {
    return (
        <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-20 md:py-24 lg:py-28 xl:py-23 overflow-hidden my-7">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Ocean wave pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-white"></path>
                    </svg>
                </div>
                
                {/* Floating circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-mustard/10 rounded-full blur-sm"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/10 rounded-full blur-sm"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-mustard/20 rounded-full blur-sm"></div>
                <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/10 rounded-full blur-sm"></div>
            </div>
            
            {/* Content */}
            <div className={combine(styles.container, "relative z-10")}>
                <div className="text-center max-w-5xl mx-auto">
                    {/* Subtitle with enhanced styling */}
                    <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-mustard/10 rounded-full border border-mustard/20 backdrop-blur-sm">
                        <div className="w-8 h-0.5 bg-mustard mr-3"></div>
                        <p className={combine("text-mustard font-semibold font-inter uppercase tracking-wider", styles.p3)}>Your Trusted Partner</p>
                        <div className="w-8 h-0.5 bg-mustard ml-3"></div>
                    </div>
                    
                    {/* Main heading */}
                    <h2 className={combine(styles.h1, "text-white font-bold mb-8 uppercase tracking-wide")}>
                        About <span className="text-mustard">Faraway Yachting</span>
                    </h2>
                    
                    {/* Content with better typography */}
                    <div className="space-y-6 mb-12">
                        <p className={combine(styles.p1, "text-white/95 leading-relaxed max-w-4xl mx-auto font-light")}>
                            Faraway Yachting is a Phuket-based yacht charter operator offering <span className="text-mustard font-medium">tailor-made private yacht experiences</span>. With our own catamarans and selected partner vessels, we ensure every charter is safe, smooth, and memorable.
                        </p>
                        <p className={combine(styles.p1, "text-white font-medium leading-relaxed max-w-3xl mx-auto")}>
                            Our goal is simple: to make your Phuket yacht charter the <span className="text-mustard">highlight of your holiday</span> as promised in <a href="/aboutus#mission" className="text-mustard hover:text-white  underline">our mission statement.</a>
                        </p>
                    </div>
                    
                    {/* Enhanced decorative elements */}
                    <div className="flex justify-center items-center space-x-6">
                        <div className="w-3 h-3 bg-mustard rounded-full"></div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="w-2 h-2 bg-mustard/60 rounded-full"></div>
                        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                        <div className="w-3 h-3 bg-mustard rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFaraway
