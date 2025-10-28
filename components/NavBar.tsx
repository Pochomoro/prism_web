'use client'

import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section - Left */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110  duration-300">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            PRISM
                        </span>
                    </Link>

                    {/* Navigation Links - Center */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                        >
                            Fonctionnalités
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="#about"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                        >
                            À propos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                        >
                            Tarifs
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>

                    {/* CTA Button - Right */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="hidden sm:block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
                        >
                            Connexion
                        </Link>
                        <Link
                            href="/signup"
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                        >
                            Commencer
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Animated bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        </nav>
    )
}

export default NavBar