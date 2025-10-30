'use client';

import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import Google from "@/components/Google";
import Apple from "@/components/Apple";
import Link from "next/link";

const Header = () => {
    return (
        <header className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/ImgBgHeader.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 brightness-110 saturate-150"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Social Media Icons - Left Side */}
            <div className="absolute left-6 top-3/4 -translate-y-1/2 z-40 flex flex-col gap-6">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors p-2 bg-white/20 rounded-2xl">
                    <Instagram className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-white hover:text-gray-300 transition-colors p-2 bg-white/20 rounded-2xl">
                    <Facebook className="w-6 h-6" />
                </Link>
                <Link href="/" className="text-white hover:text-gray-300 transition-colors p-2 bg-white/20 rounded-2xl">
                    <svg
                        className="w-6 h-6 text-white group-hover:text-white transition-colors hover:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </Link>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center min-h-screen px-6 pt-32 pb-20">
                {/* Match Notification */}
                <div
                    className="text-center space-y-4 animate-slide-up absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
                    <div className="inline-block">
                        <h2 className="font-title text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                            C'est un matche !
                        </h2>
                        <p className="text-gray-300 text-sm lg:text-base">
                            Jessica et toi avez des points en commun
                        </p>
                    </div>

                    {/* Download Button */}
                    <div className="pt-6">
                        <Link
                            href="/#Download"
                            className="inline-flex bg-white rounded-full px-8 py-3.5 items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <span className="text-gray-800 font-semibold text-base font-title">Download</span>
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
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
      `}</style>
        </header>
    );
};

export default Header;