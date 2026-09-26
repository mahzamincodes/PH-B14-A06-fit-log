import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <section className="bg-[#111214] text-white min-h-112.5 flex items-center justify-center container my-15 mx-auto rounded-2xl">
            <div className="p-15 w-full grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <Image
                        src="/banner.png"
                        alt="Workout Illustration"
                        height={200}
                        width={200}
                        className="w-full max-w-[320px] md:max-w-100 h-auto object-contain"
                    />
                </div>

                <div className="flex flex-col order-2 md:order-1">
                    <span className="text-[#8ACC25] font-bold tracking-wider text-xs uppercase">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none uppercase mt-5">
                        TRAIN WITH INTENT. LOG{" "}
                        <br className="hidden sm:inline" />
                        EVERY SET.
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md my-5">
                        FitLog is a dark, no-nonsense gym companion: pick a
                        lift, lock it into todays plan, and watch the weeks
                        work add up.
                    </p>

                    <div className="pt-2">
                        <Link
                            href="#library"
                            className="inline-block bg-[#CAFF33] hover:bg-[#b5e62d] text-black font-bold text-xs uppercase px-7 py-3.5 rounded-md transition-colors duration-200 tracking-wider shadow-lg shadow-[#CAFF33]/10"
                        >
                            BROWSE WORKOUTS
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
