'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";

const Verified = () => {
    return (
        <section className="relative flex items-center justify-between max-w-7xl mx-auto min-h-[100vh] px-6">
            {/* Background "bande" derrière le contenu - PLUS PETITE ET CENTRÉE */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden rounded-3xl w-full h-[45%] absolute" />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">
                {/* Texte */}
                <div className="md:max-w-[50%] space-y-4">
                    <h2 className="text-gray-900 font-title font-semibold text-6xl mb-1 flex items-center gap-5">Prism <Badge/></h2>
                    <h3 className="text-gray-900 font-title font-semibold text-3xl mb-2">
                        Un badge, une vraie personne.
                    </h3>
                    <p className="text-gray-800 font-medium text-md leading-relaxed">
                        Grâce à notre IA, chaque profil peut être vérifié en quelques secondes.
                        Le système compare vos photos de profil à une photo prise en direct pour confirmer votre identité.
                        Une fois validé, vous recevez un badge qui prouve que vous êtes bien réel·le pour des rencontres plus sûres et plus sincères.
                    </p>
                    <Link href="/security" className="font-title text-lg rounded-2xl bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition-all cursor-pointer inline-flex items-center gap-2 group">
                        En savoir plus sur la sécurité dans{" "}
                        <span className="font-semibold">Prism</span>
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

                {/* Image */}
                <div className="flex justify-center md:justify-end w-full md:w-1/2">
                    <Image
                        src="/images/verified.svg"
                        alt="PRISM - Système de vérification"
                        width={500}
                        height={600}
                        priority
                        className="drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Verified;