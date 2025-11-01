'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuthStore } from "@/store/useAuthStore";

const NavBar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // État depuis Zustand
    const { user, logout: logoutStore } = useAuthStore();
    const isLoggedIn = !!user;
    const userName = user?.displayName || user?.email?.split("@")[0] || "Utilisateur";

    // État local pour le formulaire
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        // Validation des champs
        if (!email.trim()) {
            setError("Veuillez entrer votre adresse email");
            return;
        }

        if (!password) {
            setError("Veuillez entrer votre mot de passe");
            return;
        }

        if (password.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
            return;
        }

        // Validation format email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Format d'email invalide");
            return;
        }

        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);

            // Réinitialisation et fermeture
            setIsLoginOpen(false);
            setIsMobileMenuOpen(false);
            setEmail("");
            setPassword("");
            setError("");
        } catch (err: any) {
            console.error("Erreur de connexion:", err);

            // Gestion détaillée des erreurs Firebase
            switch (err.code) {
                case "auth/invalid-email":
                    setError("Adresse email invalide");
                    break;
                case "auth/user-disabled":
                    setError("Ce compte a été désactivé");
                    break;
                case "auth/user-not-found":
                    setError("Aucun compte trouvé avec cet email");
                    break;
                case "auth/wrong-password":
                    setError("Mot de passe incorrect");
                    break;
                case "auth/invalid-credential":
                    setError("Identifiants invalides. Vérifiez votre email et mot de passe");
                    break;
                case "auth/too-many-requests":
                    setError("Trop de tentatives. Veuillez réessayer plus tard");
                    break;
                case "auth/network-request-failed":
                    setError("Erreur de connexion. Vérifiez votre connexion internet");
                    break;
                case "auth/operation-not-allowed":
                    setError("Cette méthode de connexion n'est pas activée");
                    break;
                default:
                    setError("Erreur de connexion. Veuillez réessayer");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            logoutStore();
            setIsMobileMenuOpen(false);
        } catch (error) {
            console.error("Erreur lors de la déconnexion:", error);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-20 py-6">
                <div className="max-w-[90%] mx-auto flex items-center justify-between relative">
                    {/* Left Navigation - Desktop Only */}
                    <div className="hidden lg:flex items-center gap-10">
                        <Link
                            href="/"
                            className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                            Accueil
                        </Link>
                        <Link
                            href="/security"
                            className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                            Sécurité
                        </Link>
                        <Link
                            href="/#plans"
                            className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                            Abonnements
                        </Link>
                        <Link
                            href="/#Download"
                            className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                            Téléchargements
                        </Link>
                        <Link
                            href="/contact"
                            className="font-title text-white font-medium hover:text-gray-200 transition-colors text-sm lg:text-base hover:text-purple-400">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all">
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Logo centré */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-title text-white font-semibold text-3xl lg:text-5xl">
                        PRISM
                    </Link>

                    {/* Right Section - Desktop Only */}
                    <div className="hidden lg:flex items-center gap-6">
                        {!isLoggedIn ? (
                            <button
                                onClick={() => setIsLoginOpen(true)}
                                className="bg-white rounded-full px-6 py-2.5 flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-pointer">
                                <span className="text-gray-800 font-medium text-sm font-title font-semibold">Se Connecter</span>
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2.5 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-medium text-sm font-title font-semibold">{userName}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="text-white hover:text-purple-400 transition-colors text-sm font-title cursor-pointer">
                                    Déconnexion
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Spacer for mobile - keeps logo centered */}
                    <div className="lg:hidden w-10"></div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
                        onClick={closeMobileMenu}
                    ></div>

                    {/* Menu Panel */}
                    <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 shadow-2xl animate-slide-left">
                        {/* Header */}
                        <div className="p-6 border-b border-white/20">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-white font-title font-bold text-2xl">PRISM</h2>
                                <button
                                    onClick={closeMobileMenu}
                                    className="text-white p-2 hover:bg-white/10 rounded-xl transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* User Status */}
                            {isLoggedIn ? (
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{userName.charAt(0).toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">{userName}</p>
                                            <p className="text-purple-200 text-sm">Connecté</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 rounded-xl transition-all text-sm">
                                        Déconnexion
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => {
                                        setIsLoginOpen(true);
                                        closeMobileMenu();
                                    }}
                                    className="w-full bg-white text-purple-700 font-title font-bold py-3 rounded-2xl hover:scale-105 transition-all shadow-lg">
                                    Se Connecter
                                </button>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <div className="p-6 space-y-2">
                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-4 text-white font-title font-medium text-lg p-4 rounded-2xl hover:bg-white/10 transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span>Accueil</span>
                            </Link>

                            <Link
                                href="/security"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-4 text-white font-title font-medium text-lg p-4 rounded-2xl hover:bg-white/10 transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>Sécurité</span>
                            </Link>

                            <Link
                                href="/#plans"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-4 text-white font-title font-medium text-lg p-4 rounded-2xl hover:bg-white/10 transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                                <span>Abonnements</span>
                            </Link>

                            <Link
                                href="/#Download"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-4 text-white font-title font-medium text-lg p-4 rounded-2xl hover:bg-white/10 transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Téléchargements</span>
                            </Link>

                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-4 text-white font-title font-medium text-lg p-4 rounded-2xl hover:bg-white/10 transition-all group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Contact</span>
                            </Link>
                        </div>

                        {/* Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
                            <p className="text-white/60 text-center text-sm">
                                © 2025 PRISM. Tous droits réservés.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {isLoginOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center backdrop-blur-md animate-fade-in px-4">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsLoginOpen(false)}
                    ></div>

                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up relative z-10">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 relative">
                            <button
                                onClick={() => setIsLoginOpen(false)}
                                disabled={loading}
                                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors disabled:opacity-50">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-3xl font-title font-bold text-white text-center">
                                Connexion
                            </h2>
                            <p className="text-purple-100 text-center mt-2 text-sm">
                                Connectez-vous avec votre compte PRISM
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogin} className="px-8 py-8 space-y-6">
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium text-sm font-title">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError("");
                                    }}
                                    placeholder="votre@email.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    disabled={loading}
                                    autoComplete="email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium text-sm font-title">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    disabled={loading}
                                    autoComplete="current-password"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-title font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Connexion en cours...</span>
                                    </>
                                ) : (
                                    "Se Connecter"
                                )}
                            </button>

                            <div className="text-center">
                                <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                    Mot de passe oublié ?
                                </a>
                            </div>

                            <div className="text-center pt-4 border-t border-gray-200">
                                <p className="text-gray-600 text-sm">
                                    Pas encore de compte ?{' '}
                                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                                        S'inscrire
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-left {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.4s ease-out;
                }

                .animate-slide-left {
                    animation: slide-left 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default NavBar;