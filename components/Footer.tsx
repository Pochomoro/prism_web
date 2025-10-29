'use client';

import React, { useState } from 'react';
import { Instagram, Facebook, Send, Mail } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe:', email);
        setEmail('');
    };

    return (
        <footer className="relative w-full overflow-hidden">
            {/* Main Footer */}
            <div className="bg-gradient-to-b from-purple-800 via-purple-900 to-indigo-950 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Newsletter Section */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold mb-6 text-white">
                                Abonnez-vous à notre newsletter
                            </h3>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Adresse e-mail"
                                        className="w-full bg-purple-700/50 backdrop-blur-sm text-white placeholder-purple-300 pl-12 pr-4 py-4 rounded-2xl border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    S'abonner
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-purple-300">
                                <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                                    Conditions générales
                                </a>
                                <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                                    Politique de confidentialité
                                </a>
                            </div>
                        </div>

                        {/* Découvrir */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white">Découvrir</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">
                      Partenaires / Institutions
                    </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">
                      Témoignages
                    </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">
                      Accessibilité et inclusion
                    </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* À propos & Aide */}
                        <div className="space-y-8">
                            {/* À propos */}
                            <div>
                                <h4 className="text-lg font-bold mb-6 text-white">À propos</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        Notre histoire
                      </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        Équipe
                      </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Aide */}
                            <div>
                                <h4 className="text-lg font-bold mb-6 text-white">Aide</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        FAQ
                      </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        Contactez-nous
                      </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <a
                            href="#"
                            className="w-12 h-12 bg-purple-700/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300 group border border-purple-600/50"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 bg-purple-700/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300 group border border-purple-600/50"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 bg-purple-700/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300 group border border-purple-600/50"
                            aria-label="X (Twitter)"
                        >
                            <svg
                                className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center pt-8 border-t border-purple-700/50">
                        <p className="text-purple-300 text-sm">
                            Copyright © 2025 — Créé avec amour.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 w-full h-24 opacity-10 pointer-events-none">
                <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z"
                        fill="url(#footerGradient)"
                    />
                    <defs>
                        <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="50%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;