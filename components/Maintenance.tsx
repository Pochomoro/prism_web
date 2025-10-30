'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Clock, Bell } from 'lucide-react';

const Maintenance = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [countdown, setCountdown] = useState({
        hours: 2,
        minutes: 30,
        seconds: 0
    });

    // Countdown timer (optionnel - peut être retiré)
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        // TODO: Envoyer l'email à votre API
        console.log('Email pour notification:', email);
        setTimeout(() => {
            setEmail('');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden flex items-center justify-center p-6">

            {/* Animated Background Elements - SANS CŒURS ET SPARKLES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs uniquement */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">

                {/* Logo */}
                <div className="mb-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-lg rounded-3xl mb-6 border border-white/20 shadow-2xl animate-bounce-slow">
                        <Heart className="w-12 h-12 text-pink-300" fill="currentColor" />
                    </div>
                    <h1 className="font-title text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                        PRISM
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-purple-200">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">En maintenance</span>
                    </div>
                </div>

                {/* Message Principal */}
                <div className="mb-12 animate-fade-in-up">
                    <h2 className="font-title text-4xl md:text-5xl font-bold text-white mb-4">
                        Nous revenons bientôt !
                    </h2>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                        Notre équipe travaille d'arrache-pied pour améliorer votre expérience.
                        Prism sera de retour plus inclusif et plus sûr que jamais.
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className="mb-12 animate-fade-in-up delay-200">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Clock className="w-5 h-5 text-purple-300" />
                        <p className="text-purple-200 font-medium">Temps estimé de retour</p>
                    </div>
                    <div className="flex justify-center gap-4 md:gap-6">
                        {/* Hours */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 min-w-[100px] border border-white/20">
                            <div className="text-5xl font-bold text-white mb-2 font-title">
                                {String(countdown.hours).padStart(2, '0')}
                            </div>
                            <div className="text-sm text-purple-200 font-medium">Heures</div>
                        </div>
                        {/* Minutes */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 min-w-[100px] border border-white/20">
                            <div className="text-5xl font-bold text-white mb-2 font-title">
                                {String(countdown.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-sm text-purple-200 font-medium">Minutes</div>
                        </div>
                        {/* Seconds */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 min-w-[100px] border border-white/20">
                            <div className="text-5xl font-bold text-white mb-2 font-title">
                                {String(countdown.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-sm text-purple-200 font-medium">Secondes</div>
                        </div>
                    </div>
                </div>

                {/* Notification Form */}
                <div className="max-w-md mx-auto animate-fade-in-up delay-300">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Bell className="w-5 h-5 text-purple-300" />
                            <h3 className="font-title text-xl font-bold text-white">
                                Soyez notifié du retour
                            </h3>
                        </div>
                        <p className="text-purple-200 text-sm mb-6">
                            Laissez-nous votre email et nous vous préviendrons dès que Prism sera de nouveau disponible.
                        </p>

                        {!isSubscribed ? (
                            <form onSubmit={handleNotify} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="votre@email.com"
                                    className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-purple-300 px-6 py-4 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-title font-semibold px-8 py-4 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Bell className="w-5 h-5" />
                                    Me notifier
                                </button>
                            </form>
                        ) : (
                            <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-6 animate-scale-in">
                                <div className="flex items-center justify-center gap-2 text-green-300 mb-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-bold">Parfait !</span>
                                </div>
                                <p className="text-green-200 text-sm">
                                    Nous vous préviendrons dès que Prism sera de retour 💜
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 animate-fade-in-up delay-400">
                    <p className="text-purple-200 text-sm mb-4">Suivez-nous pour rester informé</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://instagram.com/prismapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a
                            href="https://facebook.com/prismapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/prismapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Decorative bottom wave */}
            <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 pointer-events-none">
                <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
                    <path
                        d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z"
                        fill="url(#maintenanceGradient)"
                    />
                    <defs>
                        <linearGradient id="maintenanceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.5s ease-out;
                }

                .delay-200 {
                    animation-delay: 0.2s;
                }

                .delay-300 {
                    animation-delay: 0.3s;
                }

                .delay-400 {
                    animation-delay: 0.4s;
                }

                .delay-700 {
                    animation-delay: 0.7s;
                }

                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </div>
    );
};

export default Maintenance;