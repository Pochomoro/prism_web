'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="flex flex-col items-center w-full">
            <div className="flex justify-center items-center min-h-[100vh]">
                    <Image
                        src="/images/hero.png"
                        alt="PRISM - Trouve l'amour autrement"
                        width={1200}
                        height={900}
                        priority
                    />
            </div>
            <div>
                <h2 className="text-purple-700 text-3xl text-center font-semibold">Rencontre la personne qui<br/>te correspond vraiment</h2>
            </div>
        </section>
    )
}

export default Hero