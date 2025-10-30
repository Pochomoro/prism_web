'use client';

import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Google from "@/components/Google";
import Apple from "@/components/Apple";
import Link from "next/link";

const Header = () => {
    return (
        <header className="relative min-h-screen w-full overflow-hidden">
            {/* ========== VERSION DESKTOP (Original) ========== */}
            <div className="hidden lg:block absolute inset-0">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/ImgBgHeader.jpg"
                        alt="Background"
                        fill
                        className="object-cover opacity-100 brightness-100 saturate-150"
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

                {/* Main Content Desktop */}
                <div className="relative z-10 flex flex-col items-center min-h-screen px-6 pt-32 pb-20">
                    {/* Match Notification */}
                    <div className="text-center space-y-4 animate-slide-up absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-[90%]">
                        <div className="inline-block">
                            <h2 className="font-title text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                                C'est un match !
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
            </div>

            {/* ========== VERSION MOBILE (Nouveau design) ========== */}
            <div className="lg:hidden absolute inset-0">
                {/* Gradient Background avec animations */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700">
                    {/* Animated Orbs */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-32 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
                </div>

                {/* Main Content Mobile */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
                    {/* Logo/Title */}
                    <div className="text-center space-y-6 animate-fade-in-up mb-12">
                        <h1 className="font-title text-6xl font-bold text-white drop-shadow-2xl">
                            PRISM
                        </h1>
                        <div className="w-20 h-1 bg-white/50 mx-auto rounded-full"></div>
                        <p className="text-white/90 text-xl font-medium max-w-md mx-auto leading-relaxed">
                            Trouve l'amour authentique dans une communauté bienveillante
                        </p>
                    </div>

                    {/* Features Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up-delayed">
                        <div className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                            <span className="text-white font-medium text-sm">✓ 100% Sécurisé</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                            <span className="text-white font-medium text-sm">✓ Vérifié par IA</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                            <span className="text-white font-medium text-sm">✓ Gratuit</span>
                        </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="space-y-4 w-full max-w-sm animate-fade-in-up-delayed-2">
                        <Link
                            href="/#Download"
                            className="flex items-center justify-center gap-3 bg-white rounded-2xl px-8 py-4 hover:scale-105 transition-all duration-300 shadow-2xl group">
                            <Apple size="28" />
                            <div className="text-left">
                                <p className="text-xs text-gray-600">Télécharger sur</p>
                                <p className="text-lg font-bold text-gray-900">App Store</p>
                            </div>
                            <svg
                                className="w-5 h-5 text-gray-800 group-hover:translate-x-1 transition-transform ml-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <Link
                            href="/#Download"
                            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl px-8 py-4 hover:bg-white/20 transition-all duration-300 group">
                            <Google isWhite size="28" />
                            <div className="text-left">
                                <p className="text-xs text-white/80">Télécharger sur</p>
                                <p className="text-lg font-bold text-white">Google Play</p>
                            </div>
                            <svg
                                className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform ml-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up-delayed-3">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white mb-1">10K+</p>
                            <p className="text-white/70 text-sm">Utilisateurs</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white mb-1">4.8★</p>
                            <p className="text-white/70 text-sm">Note</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white mb-1">99%</p>
                            <p className="text-white/70 text-sm">Satisfait</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons - Bottom Mobile */}
                <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-6 animate-fade-in">
                    <Link
                        href="/"
                        className="text-white hover:text-white/70 transition-all p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:scale-110 border border-white/20">
                        <Instagram className="w-6 h-6" />
                    </Link>
                    <Link
                        href="/"
                        className="text-white hover:text-white/70 transition-all p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:scale-110 border border-white/20">
                        <Facebook className="w-6 h-6" />
                    </Link>
                    <Link
                        href="/"
                        className="text-white hover:text-white/70 transition-all p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:scale-110 border border-white/20">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </Link>
                </div>

                {/* Scroll Indicator Mobile */}
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(-40px, 30px) scale(0.9);
                    }
                    66% {
                        transform: translate(20px, -40px) scale(1.1);
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }

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

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateX(-50%) translateY(0);
                    }
                    50% {
                        transform: translateX(-50%) translateY(-10px);
                    }
                }

                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 1s ease-out 0.3s both;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out 0.2s both;
                }

                .animate-fade-in-up-delayed {
                    animation: fade-in-up 1s ease-out 0.4s both;
                }

                .animate-fade-in-up-delayed-2 {
                    animation: fade-in-up 1s ease-out 0.6s both;
                }

                .animate-fade-in-up-delayed-3 {
                    animation: fade-in-up 1s ease-out 0.8s both;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>
        </header>
    );
};

export default Header;