'use client'

import React from 'react'
import Image from 'next/image'

const For = () => {
    return (
        <section className="relative py-30 px-30 bg-gradient-to-br from-white via-purple-100/30 to-pink-150/30 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center justify-between gap-12">
                    <Image
                        src="/images/app.png"
                        alt="PRISM - Images de l'application"
                        width={800}
                        height={700}
                        priority
                    />
                    {/* Right side - Content */}
                    <div className="animate-fade-in-up">
                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                            <span className="text-purple-700">
                                Une application pour la communauté LGBTQIA+
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Rencontrez-Vous est une plateforme inclusive, conçue avec et pour les institutions.
                            Elle favorise les rencontres, les échanges et l'inclusion sociale en toute simplicité et sécurité.
                        </p>

                        {/* CTA Button */}
                        <div>
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10">Découvrir l'application</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        </div>

                        {/* Optional: Stats or features */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-black text-purple-700 mb-1">10k+</div>
                                <div className="text-sm text-gray-600">Utilisateurs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-purple-700 mb-1">95%</div>
                                <div className="text-sm text-gray-600">Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-purple-700 mb-1">500+</div>
                                <div className="text-sm text-gray-600">Matchs/jour</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default For