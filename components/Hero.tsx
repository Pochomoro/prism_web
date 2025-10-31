'use client'

import React from 'react'
import Image from 'next/image'

const For = () => {
    return (
        <section className="relative py-12 md:py-20 px-6 md:px-24 bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden">
            <div className="flex justify-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-3 bg-white px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-700 font-title font-medium text-xs md:text-sm">Algorithmes</span>
                </div>
            </div>

            {/* Titre principal */}
            <h2 className="font-title text-2xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-6 md:mb-10 px-4">
                Un système de match intelligent
            </h2>
            <p className="text-sm md:text-md text-gray-800 mb-8 md:mb-10 text-center max-w-5xl mx-auto px-4 leading-relaxed">
                Grâce à une technologie de matching avancée, Prism analyse bien plus que des profils — elle rapproche des personnes qui partagent des valeurs, des centres d'intérêt et une vraie compatibilité émotionnelle.
            </p>

            {/* Image - Desktop Only */}
            <div className="hidden md:block">
                <Image
                    src="/images/heroImgWhite.svg"
                    alt="PRISM - Images de l'application"
                    width={1200}
                    height={1000}
                    priority
                    className="mx-auto"
                />
            </div>

            {/* Cards - Mobile Only */}
            <div className="md:hidden grid grid-cols-1 gap-4 max-w-md mx-auto">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-purple-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-title font-bold text-gray-900 mb-1 text-lg">Valeurs Partagées</h3>
                            <p className="text-sm text-gray-600">Notre IA identifie vos valeurs fondamentales pour des connexions authentiques.</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-title font-bold text-gray-900 mb-1 text-lg">Centres d'Intérêt</h3>
                            <p className="text-sm text-gray-600">Rencontrez des personnes qui partagent vos passions et hobbies.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-pink-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-title font-bold text-gray-900 mb-1 text-lg">Compatibilité Émotionnelle</h3>
                            <p className="text-sm text-gray-600">Un matching basé sur votre personnalité et vos attentes relationnelles.</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-green-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-title font-bold text-gray-900 mb-1 text-lg">Match en Temps Réel</h3>
                            <p className="text-sm text-gray-600">Des suggestions personnalisées qui évoluent avec vous.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Mobile */}
            <div className="md:hidden mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-purple-200">
                    <p className="text-2xl font-bold text-purple-700 mb-1">95%</p>
                    <p className="text-xs text-gray-700 font-medium">Précision</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-pink-200">
                    <p className="text-2xl font-bold text-pink-700 mb-1">5M+</p>
                    <p className="text-xs text-gray-700 font-medium">Matchs</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-blue-200">
                    <p className="text-2xl font-bold text-blue-700 mb-1">24/7</p>
                    <p className="text-xs text-gray-700 font-medium">Actif</p>
                </div>
            </div>
        </section>
    )
}

export default For