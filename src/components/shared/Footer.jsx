import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="border-t-2 border-[#222630] py-5">
            <div className="footer sm:footer-horizontal text-neutral-content items-center p-4 container mx-auto">
                <aside className="grid-flow-col items-center">
                    <div className="btn btn-ghost text-xl flex gap-5">
                        <Image
                            src="/Vector.png"
                            alt="Logo"
                            height={40}
                            width={40}
                        />
                        <p className="text-2xl">FITLOG</p>
                    </div>
                </aside>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
