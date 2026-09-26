import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="text-center">
                <p className="text-sm font-bold tracking-[0.3em] text-[#C2F800]">
                    FITLOG
                </p>

                <h1 className="mt-4 text-7xl font-extrabold text-white">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-white">
                    PAGE NOT FOUND
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
                    The page you are looking for does not exist or has been
                    moved.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-block rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#aee000]"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;