"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useFitlog } from "@/context/FitlogContext";

const Navbar = () => {
    const pathname = usePathname();
    const { todayPlan, savedWorkouts } = useFitlog();

    return (
        <div className="border-b-2 border-[#222630] py-5">
            <div className="navbar container mx-auto bg-black shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            <li>
                                <Link
                                    href="/worksouts"
                                    className={
                                        pathname === "/worksouts"
                                            ? "rounded-3xl bg-[#94BD04]"
                                            : ""
                                    }
                                >
                                    Worksout
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-plan"
                                    className={
                                        pathname === "/my-plan"
                                            ? "rounded-3xl bg-[#94BD04]"
                                            : ""
                                    }
                                >
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost flex gap-5 text-xl">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            height={50}
                            width={50}
                        />
                        <p>FITLOG</p>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                href="/worksouts"
                                className={
                                    pathname === "/worksouts"
                                        ? "rounded-3xl bg-[#1A2312] font-bold text-[#C2F800]"
                                        : ""
                                }
                            >
                                Worksouts
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/my-plan"
                                className={
                                    pathname === "/my-plan"
                                        ? "rounded-3xl bg-[#1A2312] font-bold text-[#C2F800]"
                                        : ""
                                }
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-10">
                    <Link href="/my-plan" className="flex items-center gap-1">
                        Plan
                        <span className="rounded-full bg-[#C2F800] px-2 py-0.5 text-xs font-bold text-black">
                            {todayPlan.length}
                        </span>
                    </Link>

                    <Link href="/my-plan" className="flex items-center gap-1">
                        Saved
                        <span className="rounded-full bg-[#000000] px-2 py-0.5 text-xs font-bold text-white border border-amber-50">
                            {savedWorkouts.length}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;