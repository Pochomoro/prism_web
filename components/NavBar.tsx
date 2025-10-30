'use client';

import React from 'react';
import Apple from "@/components/Apple";
import Google from "@/components/Google";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-20 py-6">
            <div className="max-w-[90%] mx-auto flex items-center justify-between relative">
                {/* Left Navigation */}
                <div className="flex items-center gap-10">
                    <Link
                        href="/"
                        className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                        Accueil
                    </Link>
                    <Link
                        href="/security"
                        className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                        Sécurité
                    </Link>
                    <Link
                        href="/#plans"
                        className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                        Abonnements
                    </Link>
                    <Link
                        href="/#Download"
                        className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                        Téléchargements
                    </Link>
                    <Link
                        href="/contact"
                        className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                        Contact
                    </Link>
                </div>

                {/* Logo centré */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-title text-white font-semibold text-5xl">
                    PRISM
                </Link>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Download Button */}
                    <Link
                        href="/#Download"
                        className="bg-white rounded-full px-6 py-2.5 flex items-center gap-3 transition-shadow">
                        <span className="text-gray-800 font-medium text-sm font-title font-semibold">Download</span>
                        <div className="flex items-center gap-2">
                            <Apple/>
                        </div>
                        <div className="flex text-black items-center gap-2">
                            |
                        </div>
                        <div className="flex text-black items-center gap-2">
                            <Google/>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;