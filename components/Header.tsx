'use client'

import React from 'react'
import NavBar from "@/components/NavBar";

const Header = () => {
    return (
        <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600">
            {/* Animated background circles - More circles for desktop */}
            <NavBar/>
            <div className="absolute inset-0">
                {/* Large circles */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-pink-400/15 rounded-full blur-3xl animate-float-medium" />

                {/* Medium circles */}
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-2xl animate-float-reverse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-300/15 rounded-full blur-3xl animate-float-fast" />

                {/* Small floating circles */}
                <div className="absolute top-20 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
                <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-pink-200/15 rounded-full blur-xl animate-float-diagonal" />

                {/* Tiny accent circles */}
                <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-200/20 rounded-full blur-xl animate-float-tiny" />
                <div className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-pink-300/15 rounded-full blur-2xl animate-pulse-fast" />

                {/* Extra ambient circles */}
                <div className="absolute top-1/2 right-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float-ambient" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
                {/* Logo */}
                <div className="mb-8 animate-fade-in">
                    <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all hover:scale-110 hover:shadow-pink-500/50 duration-300">
                        <svg
                            className="w-20 h-20 text-pink-500 animate-heartbeat"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-8xl lg:text-8xl font-black text-white mb-6 tracking-wider animate-slide-up">
                    PRISM
                </h1>

                {/* Subtitle */}
                <p className="text-2xl lg:text-2xl text-white/90 font-light tracking-wide animate-slide-up-delay mb-8">
                    Inclusive, Safe, Unique
                </p>

                {/* Decorative dots */}
                <div className="flex gap-3 animate-fade-in-delay">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce-soft" style={{animationDelay: '0ms'}} />
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce-soft" style={{animationDelay: '150ms'}} />
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce-soft" style={{animationDelay: '300ms'}} />
                </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />
        </header>
    )
}

export default Header