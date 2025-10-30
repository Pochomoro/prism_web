'use client';

import React, { useState } from 'react';
import { Instagram, Facebook, Send, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe:', email);
        setEmail('');
        // TODO: Ajouter l'appel API pour l'abonnement à la newsletter
    };

    return (
        <footer className="relative w-full overflow-hidden">
            {/* Main Footer */}
            <div className="bg-gradient-to-b from-purple-800 via-purple-900 to-indigo-950 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                        {/* Newsletter Section */}
                        <div className="lg:col-span-2">
                            <h3 className="font-title text-2xl font-bold mb-6 text-white">
                                Abonnez-vous à notre newsletter
                            </h3>
                            <p className="text-purple-200 mb-6">
                                Recevez les dernières actualités de Prism et restez informé de nos nouveautés.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Votre adresse e-mail"
                                        className="w-full bg-purple-700/50 backdrop-blur-sm text-white placeholder-purple-300 pl-12 pr-4 py-4 rounded-2xl border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-title font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    S'abonner
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="font-title text-lg font-bold mb-6 text-white">Navigation</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Accueil
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/security"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Sécurité
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/mission"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Notre Mission
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#plans"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Abonnements
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#Download"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Téléchargements
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Contact
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Légal & Aide */}
                        <div>
                            <h4 className="font-title text-lg font-bold mb-6 text-white">Légal & Aide</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/conditions-generales"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Conditions générales
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/politique-confidentialite"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Politique de confidentialité
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/faq"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            FAQ
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-purple-200 hover:text-white transition-colors flex items-center group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            Support
                                        </span>
                                    </Link>
                                </li>
                            </ul>

                            {/* Social Media */}
                            <div className="mt-8">
                                <h4 className="font-title text-lg font-bold mb-4 text-white">Suivez-nous</h4>
                                <div className="flex gap-3">
                                    <a
                                        href="https://instagram.com/prismapp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href="https://facebook.com/prismapp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href="https://twitter.com/prismapp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
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
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-8 border-t border-purple-700/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Logo & Copyright */}
                            <div className="flex items-center gap-6">
                                <Link href="/" className="font-title text-white font-semibold text-3xl hover:text-purple-300 transition-colors">
                                    PRISM
                                </Link>
                                <p className="text-purple-300 text-sm">
                                    © 2025 Prism. Tous droits réservés.
                                </p>
                            </div>

                            {/* Tagline */}
                            <p className="text-purple-200 text-sm font-medium">
                                Créé avec 💜 pour la communauté LGBTQ+
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50"></div>
        </footer>
    );
};

export default Footer;