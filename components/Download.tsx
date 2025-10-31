'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Apple from "@/components/Apple";
import Google from "@/components/Google";

const Download = () => {
    const [showModal, setShowModal] = useState(false);
    const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

    const openModal = (selectedPlatform: 'ios' | 'android') => {
        setPlatform(selectedPlatform);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Liens de téléchargement (à remplacer par vos vrais liens)
    const downloadLinks = {
        ios: 'https://apps.apple.com/app/prism',
        android: 'https://play.google.com/store/apps/details?id=com.prism'
    };

    return (
        <>
            {/* ========== VERSION DESKTOP ========== */}
            <section id="Download" className="hidden md:flex relative items-center justify-center max-w-7xl mx-auto min-h-[100vh] px-6 py-20">
                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between w-full gap-16">
                    {/* Texte */}
                    <div className="md:max-w-[50%] space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2.5 rounded-full border border-purple-200">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                            <span className="text-purple-700 font-title font-medium text-sm">Disponible maintenant</span>
                        </div>

                        <h2 className="text-gray-900 font-title font-bold text-5xl md:text-6xl leading-tight">
                            Télécharge Prism
                        </h2>

                        <h3 className="text-gray-700 font-title font-semibold text-xl md:text-2xl">
                            Et découvre une communauté respectueuse, solidaire et aimante
                        </h3>

                        {/* Statistiques */}
                        <div className="flex gap-4 py-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">10K+</div>
                                <div className="text-sm text-gray-600 font-medium">Utilisateurs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-600">4.8</div>
                                <div className="text-sm text-gray-600 font-medium">Note moyenne</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">99%</div>
                                <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                            </div>
                        </div>

                        {/* Boutons de téléchargement */}
                        <div className="space-y-4">
                            <button
                                onClick={() => openModal('ios')}
                                className="w-full md:w-fit font-title text-lg rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group cursor-pointer"
                            >
                                <Apple isWhite size={"24"} />
                                <span>Télécharger pour <span className="font-semibold">iOS</span></span>
                                <svg
                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={() => openModal('android')}
                                className="w-full md:w-fit font-title text-lg rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group cursor-pointer"
                            >
                                <Google isWhite size={"24"} />
                                <span>Télécharger pour <span className="font-semibold">Android</span></span>
                                <svg
                                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Features */}
                        <div className="pt-6 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium">Gratuit à télécharger</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium">Compatible iOS 14+ et Android 8+</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium">Mises à jour régulières</p>
                            </div>
                        </div>
                    </div>

                    {/* Image avec effet moderne */}
                    <div className="relative flex justify-center md:justify-start w-full md:w-1/2">
                        {/* Cercles décoratifs en arrière-plan */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl"></div>

                        <div className="relative">
                            <img
                                src="/images/appNew.png"
                                alt="PRISM - Application mobile"
                                width={400}
                                height={350}
                                className="drop-shadow-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== VERSION MOBILE ========== */}
            <section id="Download" className="md:hidden relative flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md mx-auto space-y-8">
                    {/* Badge */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-200">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                            <span className="text-purple-700 font-title font-medium text-xs">Disponible maintenant</span>
                        </div>
                    </div>

                    {/* Titre */}
                    <div className="text-center space-y-4">
                        <h2 className="text-gray-900 font-title font-bold text-4xl leading-tight">
                            Télécharge Prism
                        </h2>
                        <h3 className="text-gray-700 font-title font-semibold text-lg px-2">
                            Et découvre une communauté respectueuse, solidaire et aimante
                        </h3>
                    </div>

                    {/* Statistiques */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-4 text-center border border-purple-100 shadow-sm">
                            <div className="text-2xl font-bold text-purple-600 mb-1">10K+</div>
                            <div className="text-xs text-gray-600 font-medium">Utilisateurs</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 text-center border border-pink-100 shadow-sm">
                            <div className="text-2xl font-bold text-pink-600 mb-1">4.8★</div>
                            <div className="text-xs text-gray-600 font-medium">Note</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 text-center border border-purple-100 shadow-sm">
                            <div className="text-2xl font-bold text-purple-600 mb-1">99%</div>
                            <div className="text-xs text-gray-600 font-medium">Satisfait</div>
                        </div>
                    </div>

                    {/* Boutons de téléchargement */}
                    <div className="space-y-3">
                        <button
                            onClick={() => openModal('ios')}
                            className="w-full font-title text-base rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4 text-white hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
                        >
                            <Apple isWhite size={"20"} />
                            <span>Télécharger pour <span className="font-semibold">iOS</span></span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={() => openModal('android')}
                            className="w-full font-title text-base rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 text-white hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
                        >
                            <Google isWhite size={"20"} />
                            <span>Télécharger pour <span className="font-semibold">Android</span></span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium text-sm">Gratuit à télécharger</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium text-sm">Compatible iOS 14+ et Android 8+</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-gray-700 font-medium text-sm">Mises à jour régulières</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal / Popover (identique pour desktop et mobile) */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    {/* Backdrop avec blur */}
                    <div className="absolute inset-0 backdrop-blur-md"></div>

                    {/* Modal Content */}
                    <div
                        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Icon Platform */}
                        <div className="flex justify-center mb-6">
                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg ${
                                platform === 'ios'
                                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                                    : 'bg-gradient-to-br from-green-500 to-emerald-500'
                            }`}>
                                {platform === 'ios' ? (
                                    <Apple isWhite size={"40"} />
                                ) : (
                                    <Google isWhite size={"40"} />
                                )}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-center font-title font-bold text-3xl text-gray-900 mb-2">
                            Télécharge Prism
                        </h3>
                        <p className="text-center text-gray-600 mb-8 text-lg">
                            pour {platform === 'ios' ? 'iOS' : 'Android'}
                        </p>

                        {/* QR Code Section */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6 border border-purple-100">
                            <p className="text-center text-gray-800 font-semibold mb-4 text-lg">
                                Scannez le QR Code
                            </p>

                            {/* QR Code Placeholder */}
                            <div className="bg-white rounded-xl p-6 flex items-center justify-center mx-auto w-fit shadow-md">
                                <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="w-40 h-40 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-gray-500 font-medium text-sm">ou bien</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>

                        {/* Download Link */}
                        <a
                        href={downloadLinks[platform]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                        >
                        <button className={`w-full font-title font-semibold text-lg rounded-2xl py-4 text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                            platform === 'ios'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                                : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                        }`}>
                            <span>Ouvrir dans le Store</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </a>

                    {/* Store Badge */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Disponible sur {platform === 'ios' ? "l'App Store" : "Google Play Store"}
                        </p>
                    </div>
                </div>
                </div>
                )}

<style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
</>
);
};

export default Download;