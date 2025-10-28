'use client'

import React from 'react'

const About = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <span className="px-6 py-3 bg-purple-100 text-purple-700 font-medium rounded-full text-sm">
                        Fonctionnalités
                    </span>
                </div>

                {/* Titre principal */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-20">
                    Ce qui fait la différence
                </h2>

                {/* Grille de fonctionnalités */}
                <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">

                    {/* Feature 1 - Rencontres inclusives */}
                    <div className="flex flex-col items-center text-center group">
                        {/* Icône */}
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
                            <svg
                                className="w-10 h-10 text-white"
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
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            Rencontres inclusives
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                            Trouvez des relations sincères dans une communauté ouverte et bienveillante.
                        </p>
                    </div>

                    {/* Feature 2 - Sécurité garantie */}
                    <div className="flex flex-col items-center text-center group">
                        {/* Icône */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
                            <svg
                                className="w-10 h-10 text-white"
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
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            Sécurité garantie
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                            Chaque profil est validé par des institutions partenaires de confiance.
                        </p>
                    </div>

                    {/* Feature 3 - Accessibilité pour tous */}
                    <div className="flex flex-col items-center text-center group">
                        {/* Icône */}
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:scale-110">
                            <svg
                                className="w-10 h-10 text-white"
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
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            Accessibilité pour tous
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                            Un site pensé pour s'adapter aux besoins de chacun, sans barrière.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About