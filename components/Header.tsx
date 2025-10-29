'use client';

import React from 'react';
import { Apple, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

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
                <button className="text-white hover:text-gray-300 transition-colors p-2 bg-white/20 rounded-2xl">
                    <Instagram className="w-6 h-6" />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors p-2 bg-white/20 rounded-2xl">
                    <Facebook className="w-6 h-6" />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors p-2 bg-white/20 rounded-2xl">
                    <Twitter className="w-6 h-6" />
                </button>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center min-h-screen px-6 pt-32 pb-20">
                {/* Match Notification */}
                <div className="text-center space-y-4 animate-slide-up absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
                    <div className="inline-block">
                        <h2 className="font-title text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                            It's a match!
                        </h2>
                        <p className="text-gray-300 text-sm lg:text-base">
                            You and Jessica has common interests.
                        </p>
                    </div>

                    {/* Download Button */}
                    <div className="pt-6">
                        <div className="inline-flex bg-white rounded-full px-8 py-3.5 items-center gap-4 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <span className="text-gray-800 font-semibold text-base font-title">Download</span>
                            <div className="flex items-center gap-3">
                                <Apple className="w-6 h-6 text-gray-800" />
                                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 via-green-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
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