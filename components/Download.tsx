'use client';

import React from 'react';
import Image from "next/image";

const Download = () => {
    return (
        <section className="relative flex items-center justify-between max-w-7xl mx-auto min-h-[100vh] px-6">
            {/* Background “bande” derrière le contenu */}
            <div className="absolute inset-0 flex justify-center">
                <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden
                        rounded-3xl w-full h-[60%] top-[20%] absolute" />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-30">
                {/* Image */}
                <div className="flex justify-center md:justify-end w-full md:w-1/2">
                    <Image
                        src="/images/appNew.png"
                        alt="PRISM - Système de vérification"
                        width={400}
                        height={350}
                        priority
                        className=""
                    />
                </div>
                {/* Texte */}
                <div className="md:max-w-[50%] space-y-4 flex flex-col">
                    <h2 className="text-gray-900 font-title font-semibold text-6xl mb-2">Télécharge Prism</h2>
                    <h3 className="text-gray-900 font-title font-semibold text-2xl mb-2">
                        Et découvre un communauté respectueuse, solidaire et aimante
                    </h3>
                    <button className="w-fit font-title text-lg rounded-full bg-white px-6 py-3 text-purple-900 hover:bg-grey-200 transition-all cursor-pointer">
                        Télécharge<span className="font-semibold"> Prism </span>pour IOS
                    </button>
                    <button className="w-fit font-title text-lg rounded-full bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 transition-all cursor-pointer">
                        Télécharge<span className="font-semibold"> Prism </span>pour Android
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Download;
