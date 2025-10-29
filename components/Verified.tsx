'use client';

import React from 'react';
import Image from "next/image";

const Verified = () => {
    return (
        <section className="relative flex items-center justify-between max-w-7xl mx-auto min-h-[100vh] px-6">
            {/* Background “bande” derrière le contenu */}
            <div className="absolute inset-0 flex justify-center">
                <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden
                        rounded-3xl w-full h-[60%] top-[20%] absolute" />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">
                {/* Texte */}
                <div className="md:max-w-[50%] space-y-4">
                    <h2 className="text-gray-900 font-title font-semibold text-6xl mb-1">Prism</h2>
                    <h3 className="text-gray-900 font-title font-semibold text-3xl mb-2">
                        Un badge, une vraie personne.
                    </h3>
                    <p className="text-gray-800 font-medium text-md leading-relaxed">
                        Grâce à notre IA, chaque profil peut être vérifié en quelques secondes.
                        Le système compare vos photos de profil à une photo prise en direct pour confirmer votre identité.
                        Une fois validé, vous recevez un badge qui prouve que vous êtes bien réel·le — pour des rencontres plus sûres et plus sincères.
                    </p>
                    <button className="font-title text-lg rounded-full bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition-all cursor-pointer">
                        En savoir plus sur la sécurité dans{" "}
                        <span className="font-semibold">Prism</span>
                    </button>
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
