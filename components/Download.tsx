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
            <section id="Download" className="relative flex items-center justify-between max-w-7xl mx-auto min-h-[100vh] px-6">
                {/* Background "bande" derrière le contenu - PLUS PETITE ET CENTRÉE */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden rounded-3xl w-full h-[45%] absolute" />
                </div>

                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-30">
                    {/* Image */}
                    <div className="flex justify-center md:justify-end w-full md:w-1/2">
                        <img
                            src="/images/appNew.png"
                            alt="PRISM - Système de vérification"
                            width={400}
                            height={350}
                        />
                    </div>
                    {/* Texte */}
                    <div className="md:max-w-[50%] space-y-4 flex flex-col">
                        <h2 className="text-gray-900 font-title font-semibold text-6xl mb-2">Télécharge Prism</h2>
                        <h3 className="text-gray-900 font-title font-semibold text-2xl mb-2">
                            Et découvre un communauté respectueuse, solidaire et aimante
                        </h3>
                        <button
                            onClick={() => openModal('ios')}
                            className="w-fit font-title text-lg rounded-2xl bg-white px-6 py-3 text-purple-900 transition-all cursor-pointer hover:bg-gray-100 inline-flex items-center gap-2 group"
                        >
                            Télécharge<span className="font-semibold"> Prism </span>pour iOS
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
                            className="w-fit font-title text-lg rounded-2xl bg-purple-600 px-6 py-3 text-white transition-all cursor-pointer hover:bg-purple-700 inline-flex items-center gap-2 group"
                        >
                            Télécharge<span className="font-semibold"> Prism </span>pour Android
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
                </div>
            </section>

            {/* Modal / Popover */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    {/* Backdrop avec glassmorphism */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

                    {/* Modal Content */}
                    <div
                        className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-scaleIn border-2 border-white/50"
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
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
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
                        <h3 className="text-center font-title font-semibold text-2xl md:text-3xl text-gray-900 mb-2">
                            Télécharge Prism
                        </h3>
                        <p className="text-center text-gray-600 mb-8">
                            pour {platform === 'ios' ? 'iOS' : 'Android'}
                        </p>

                        {/* QR Code Section */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                            <p className="text-center text-gray-700 font-semibold mb-4">
                                Scannez le QR Code
                            </p>

                            {/* QR Code Placeholder - Remplacez par votre vrai QR Code */}
                            <div className="bg-white rounded-xl p-4 flex items-center justify-center mx-auto w-fit shadow-lg">
                                <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                                    {/* Vous pouvez utiliser une librairie comme 'qrcode.react' pour générer un vrai QR code */}
                                    <div className="text-center">
                                        <svg className="w-40 h-40 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            <span className="text-gray-500 font-medium text-sm">ou bien</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        </div>

                        {/* Download Link */}
                        <a
                            href={downloadLinks[platform]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <button className={`w-full font-title font-semibold text-lg rounded-xl py-4 text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                                platform === 'ios'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                            }`}>
                                <span>Cliquez sur le lien ci-dessous</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                        </a>

                        {/* Store Badge (optionnel) */}
                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
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