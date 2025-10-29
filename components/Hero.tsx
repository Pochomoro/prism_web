'use client'

import React from 'react'
import Image from 'next/image'

const For = () => {
    return (
        <section className="relative py-24 px-30 bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden">
            <div className="flex justify-center mb-8">
                    <span className="px-6 py-3 bg-white text-purple-700 font-medium rounded-full text-sm">
                        Algorithmes
                    </span>
            </div>

            {/* Titre principal */}
            <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-10">
                Un système de matche intelligent
            </h2>
            <p className="text-md text-gray-800 mb-10 text-center max-w-5xl mx-auto">Grâce à une technologie de matching avancée, Prism analyse bien plus que des profils — elle rapproche des personnes qui partagent des valeurs, des centres d’intérêt et une vraie compatibilité émotionnelle.</p>
            <Image
                src="/images/heroImgWhite.svg"
                alt="PRISM - Images de l'application"
                width={1200}
                height={1000}
                priority
                className="mx-auto"
            />
        </section>
    )
}

export default For