import React from "react";
import { styles, combine } from "@/styles/style";

export default function FounderNote() {
    return (
        <section className={combine("bg-white py-16", styles.px1)}>
            <div className={combine(styles.containerLarge, "grid grid-cols-1 md:grid-cols-2 items-center gap-10")}>
                {/* Left: Text */}
                <div className="flex-1 max-w-2xl text-center md:text-left">
                    <div className={combine("flex items-center justify-center md:justify-start gap-2", styles.mb1)}>
                        <div className="w-8 border-b-2 border-mustard hidden md:block"></div>
                        <p className={combine("text-mustard", styles.h5)}>
                            Why We Sail Differently
                        </p>
                    </div>
                    <h2 className={combine(styles.h2, styles.mb1, "text-center text-zink md:text-left")}>
                        A Note from Our Founder
                    </h2>
                    <p className={combine("text-zink", styles.p2, styles.mb1)}>
                        Skip the crowds, sail smarter. With 20+ years at sea and a passion for hidden gems, I created this itinerary to give you the best of Thailand's islands—clear waters, quiet beaches, and golden hours without the speedboat rush.
                    </p>
                    <p className={combine("text-zink mb-2 lg:mb-4 xl:mb-6", styles.p2)}>
                        While others stick close to shore, we go further for unforgettable views and a truly exclusive experience. I look forward to welcoming you aboard!
                    </p>
                    <p className={combine("text-mustard font-bold mb-1", styles.p2)}>
                        Sunny regards from Phuket
                    </p>
                    <p className={combine("text-zink font-bold", styles.p2)}>
                        Wolfgang Riessbacher
                    </p>
                </div>
                {/* Right: YouTube Video */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-[450px] md:w-[460px] lg:w-[520px] xl:w-[620px] h-[320px] md:h-[360px] lg:h-[390px] xl:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/S2B7C_0htVY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}