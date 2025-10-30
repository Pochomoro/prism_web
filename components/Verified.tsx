'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";

const Verified = () => {
    return (
        <section className="relative flex items-center justify-center max-w-7xl mx-auto min-h-[100vh] px-6 py-20">
            {/* ========== VERSION DESKTOP ========== */}
            <div className="hidden md:flex relative z-10 flex-col md:flex-row items-center justify-between w-full gap-16">
                {/* Texte */}
                <div className="md:max-w-[50%] space-y-6">
                    {/* Badge avec effet subtil */}
                    <div className="inline-flex items-center gap-3 bg-purple-50 px-5 py-2.5 rounded-full border border-purple-200">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-title font-medium text-sm">Vérification par IA</span>
                    </div>

                    <h2 className="text-gray-900 font-title font-bold text-5xl md:text-6xl flex items-center gap-4 leading-tight">
                        Prism <Badge/>
                    </h2>

                    <h3 className="text-gray-700 font-title font-semibold text-2xl md:text-3xl">
                        Un badge, une vraie personne.
                    </h3>

                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                        Grâce à notre IA, chaque profil peut être vérifié en quelques secondes.
                        Le système compare vos photos de profil à une photo prise en direct pour confirmer votre identité.
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Vérification instantanée en quelques secondes</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Badge visible sur votre profil</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium">Rencontres plus sûres et sincères</p>
                        </div>
                    </div>

                    <Link
                        href="/security"
                        className="inline-flex items-center gap-3 font-title text-lg rounded-2xl bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white transition-all duration-300 group">
                        <span>En savoir plus sur la sécurité</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Image avec effet moderne */}
                <div className="relative flex justify-center md:justify-end w-full md:w-1/2">
                    {/* Cercle décoratif en arrière-plan */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

                    <div className="relative">
                        <Image
                            src="/images/verified.svg"
                            alt="PRISM - Système de vérification"
                            width={500}
                            height={600}
                            priority
                            className="drop-shadow-2xl relative z-10"
                        />
                    </div>
                </div>
            </div>

            {/* ========== VERSION MOBILE ========== */}
            <div className="md:hidden relative z-10 w-full space-y-8">
                {/* Badge */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-3 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-title font-medium text-xs">Vérification par IA</span>
                    </div>
                </div>

                {/* Titre avec badge */}
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <h2 className="text-gray-900 font-title font-bold text-4xl">Prism</h2>
                    </div>
                    <h3 className="text-gray-700 font-title font-semibold text-xl px-4">
                        Un badge, une vraie personne.
                    </h3>
                </div>

                {/* Icon central avec effet */}
                <div className="relative flex justify-center py-8">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
                    </div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                        <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 font-medium text-center leading-relaxed px-4">
                    Grâce à notre IA, chaque profil peut être vérifié en quelques secondes. Le système compare vos photos de profil à une photo prise en direct pour confirmer votre identité.
                </p>

                {/* Features cards */}
                <div className="space-y-3 px-2">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">Vérification instantanée en quelques secondes</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">Badge visible sur votre profil</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">Rencontres plus sûres et sincères</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="px-4">
                    <Link
                        href="/security"
                        className="w-full flex items-center justify-center gap-3 font-title text-base rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-white hover:shadow-xl transition-all duration-300 group">
                        <span>En savoir plus sur la sécurité</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Verified;