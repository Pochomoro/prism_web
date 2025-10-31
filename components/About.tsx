'use client'

import React from 'react'

const About = () => {
    return (
        <section className="py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-purple-50 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-purple-200 mb-6 md:mb-8">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-title font-medium text-xs md:text-sm">Fonctionnalités</span>
                    </div>
                </div>

                {/* Titre principal */}
                <h2 className="font-title text-2xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-12 md:mb-20 px-4">
                    Ce qui fait la différence
                </h2>

                {/* Grille de fonctionnalités */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">

                    {/* Feature 1 - Rencontres inclusives */}
                    <div className="flex flex-col items-center text-center group bg-gradient-to-br from-pink-50 to-white md:bg-none p-6 md:p-0 rounded-3xl md:rounded-none border border-pink-100 md:border-0">
                        {/* Icône */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>

                        {/* Titre */}
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                            Inclusive
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Rejoignez une communauté où chaque genre, chaque orientation et chaque histoire ont leur place.
                        </p>
                    </div>

                    {/* Feature 2 - Sécurité garantie */}
                    <div className="flex flex-col items-center text-center group bg-gradient-to-br from-blue-50 to-white md:bg-none p-6 md:p-0 rounded-3xl md:rounded-none border border-blue-100 md:border-0">
                        {/* Icône */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>

                        {/* Titre */}
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                            Sécurisé
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Profils vérifiés, IA protectrice et bouton d'agression intégré : tout est pensé pour garantir un espace bienveillant et sans danger.
                        </p>
                    </div>

                    {/* Feature 3 - Accessibilité pour tous */}
                    <div className="flex flex-col items-center text-center group bg-gradient-to-br from-purple-50 to-white md:bg-none p-6 md:p-0 rounded-3xl md:rounded-none border border-purple-100 md:border-0">
                        {/* Icône */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </div>

                        {/* Titre */}
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                            Unique
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            Prism est bien plus qu'une app de rencontres, c'est la première plateforme pensée pour unir authenticité, inclusion et respect.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About