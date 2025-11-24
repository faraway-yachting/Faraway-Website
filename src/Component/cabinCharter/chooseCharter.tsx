import { styles, combine } from "@/styles";
const ChooseCharter = () => {
    return (
        <section className="relative pb-17 pt-12 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
            <div className={combine(styles.container, "relative")}>
                {/* Enhanced Main Heading */}
                <div className="text-center mb-9">
                    <div className="inline-block relative">
                        <div className="relative">
                            <h2 className={combine(styles.h2, "text-zink mb-8 font-extrabold leading-tight")}>
                                Why Choose a Cabin Charter in Phuket?
                            </h2>
                            <div className="flex justify-center mb-4 lg:mb-6 xl:mb-8">
                                <img src="/images/rframe.png" alt="" className={combine(styles.w2, "mx-auto")} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Three Cards in One Row */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* First Card - Enhanced */}
                    <div className="group relative h-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] h-full flex flex-col">
                            {/* Icon with enhanced styling */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-sm">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>

                            <div className="pr-6 flex-1">
                                <h3 className={combine(styles.h5, "text-zink mb-3 font-semibold leading-tight")}>
                                    The difference between a Phuket cabin charter and a private yacht
                                </h3>
                                <p className={combine(styles.p4, "text-zink leading-relaxed")}>
                                    A <span className="font-semibold">cabin charter Phuket</span> gives you the same premium sailing experience as a private yacht — but without needing to book the whole boat. You reserve just your cabin while sharing the yacht with a handful of other guests. This makes it more affordable, more social, and still fully serviced with captain, cook, and crew.
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
                        </div>
                    </div>

                    {/* Second Card - Enhanced */}
                    <div className="group relative h-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] h-full flex flex-col">
                            {/* Icon with enhanced styling */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-sm">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>

                            <div className="pr-6 flex-1">
                                <h3 className={combine(styles.h5, "text-zink mb-3 font-semibold leading-tight")}>
                                    Who is a cabin cruise in Phuket perfect for?
                                </h3>
                                <p className={combine(styles.p4, "text-zink leading-relaxed")}>
                                    Cabin charters are especially popular among couples — most cabins are doubles, ideal for honeymoons, anniversaries, or proposals. But they're not limited to couples. Solo travelers and friends are equally welcome, and many discover that the intimate group setting leads to lasting friendships. Guests often return together for future trips, turning one sailing holiday into lifelong memories.
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
                        </div>
                    </div>

                    {/* Third Card - Enhanced */}
                    <div className="group relative md:col-span-2 xl:col-span-1 h-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] h-full flex flex-col">
                            {/* Icon with enhanced styling */}
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-sm">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div className="pr-6 flex-1">
                                <h3 className={combine(styles.h5, "text-zink mb-3 font-semibold leading-tight")}>
                                    Benefits of choosing a cabin charter Thailand holiday
                                </h3>
                                <p className={combine(styles.p4, "text-zink leading-relaxed")}>
                                    Phuket is the best starting point for a <span className="font-semibold">cabin charter Thailand</span> because it's perfectly positioned to reach some of the world's most stunning islands. Towering limestone cliffs, emerald lagoons, and colorful reefs are all within reach. You'll enjoy authentic Thai cuisine on board, guided by an experienced local crew. Guests often say it's the best trip of their lives — the perfect balance of adventure, culture, and comfort.
                                </p>
                            </div>
 
                            {/* Decorative element */}
                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ChooseCharter