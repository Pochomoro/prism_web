'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface Feature {
    name: string;
    included: boolean;
}

interface PricingPlan {
    name: string;
    price: string;
    subtitle?: string;
    description: string;
    features: Feature[];
    highlighted: boolean;
    badge?: string;
}

const Shop = () => {
    const plans: PricingPlan[] = [
        {
            name: 'Basic',
            price: '4.99 €',
            subtitle: '/utilisateur/mois',
            description: 'Institutions avec moins de 10 utilisateurs',
            highlighted: false,
            features: [
                { name: "Comptes sécurisés créés par l'institution", included: true },
                { name: 'Accès illimité à la plateforme', included: true },
                { name: 'Accès à la plateforme de gestion', included: true },
                { name: 'Statistiques détaillées', included: false },
                { name: 'Support prioritaire', included: false },
            ],
        },
        {
            name: 'Standard',
            price: '4.49 €',
            subtitle: '/utilisateur/mois',
            description: 'Institutions avec moins de 50 utilisateurs',
            highlighted: true,
            badge: 'Populaire',
            features: [
                { name: "Comptes sécurisés créés par l'institution", included: true },
                { name: 'Accès illimité à la plateforme', included: true },
                { name: 'Accès à la plateforme de gestion', included: true },
                { name: 'Statistiques détaillées', included: true },
                { name: 'Support prioritaire', included: false },
            ],
        },
        {
            name: 'Premium',
            price: 'Sur Mesure',
            subtitle: '',
            description: 'Institutions avec plus de 50 utilisateurs',
            highlighted: false,
            features: [
                { name: "Comptes sécurisés créés par l'institution", included: true },
                { name: 'Accès illimité à la plateforme', included: true },
                { name: 'Accès à la plateforme de gestion', included: true },
                { name: 'Statistiques détaillées', included: true },
                { name: 'Support prioritaire', included: true },
            ],
        },
    ];

    return (
        <section id="plans" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80"></div>

            {/* ========== VERSION DESKTOP ========== */}
            <div className="hidden md:block relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-title font-medium text-sm">Abonnements</span>
                    </div>

                    <h2 className="font-title text-4xl md:text-5xl font-bold text-gray-900">
                        Choisissez votre formule
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto font-medium">
                        Des plans adaptés à la taille de votre institution pour une expérience optimale
                    </p>
                </div>

                {/* Grille des abonnements */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl transition-all duration-300 ${
                                plan.highlighted
                                    ? 'bg-white border-2 border-purple-400 shadow-2xl scale-105'
                                    : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl'
                            }`}
                        >
                            {/* Badge "Populaire" */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            {/* En-tête */}
                            <div className="p-8 border-b border-gray-100">
                                <h3 className="text-3xl font-title font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-5xl font-bold ${
                                        plan.highlighted ? 'text-purple-700' : 'text-gray-900'
                                    }`}>
                                        {plan.price}
                                    </span>
                                    {plan.subtitle && (
                                        <span className="text-gray-600 text-sm">
                                            {plan.subtitle}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Liste des fonctionnalités */}
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div
                                                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                                    feature.included
                                                        ? 'bg-green-500'
                                                        : 'bg-gray-300'
                                                }`}
                                            >
                                                {feature.included && (
                                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                                )}
                                            </div>
                                            <span
                                                className={`text-base ${
                                                    feature.included
                                                        ? 'text-gray-800 font-medium'
                                                        : 'text-gray-400 line-through'
                                                }`}
                                            >
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer info */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-6 py-3 rounded-full shadow-sm">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-blue-700 font-medium text-sm">
                            Pour plus d'informations, contactez notre équipe commerciale
                        </p>
                    </div>
                </div>
            </div>

            {/* ========== VERSION MOBILE ========== */}
            <div className="md:hidden relative z-10 w-full px-4 py-12">
                {/* Header */}
                <div className="text-center mb-10 space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-700 font-title font-medium text-xs">Abonnements</span>
                    </div>

                    <h2 className="font-title text-3xl font-bold text-gray-900 px-4">
                        Choisissez votre formule
                    </h2>
                    <p className="text-gray-700 text-sm px-6 font-medium leading-relaxed">
                        Des plans adaptés à la taille de votre institution
                    </p>
                </div>

                {/* Cards mobiles */}
                <div className="space-y-6 max-w-md mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl transition-all duration-300 ${
                                plan.highlighted
                                    ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-400 shadow-xl'
                                    : 'bg-white border-2 border-gray-200'
                            }`}
                        >
                            {/* Badge "Populaire" */}
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            {/* En-tête */}
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-2xl font-title font-bold text-gray-900 mb-2 text-center">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 text-xs mb-4 text-center">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className={`text-4xl font-bold ${
                                        plan.highlighted ? 'text-purple-700' : 'text-gray-900'
                                    }`}>
                                        {plan.price}
                                    </span>
                                    {plan.subtitle && (
                                        <span className="text-gray-600 text-xs">
                                            {plan.subtitle}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Liste des fonctionnalités */}
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div
                                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                                    feature.included
                                                        ? 'bg-green-500'
                                                        : 'bg-gray-300'
                                                }`}
                                            >
                                                {feature.included && (
                                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                )}
                                            </div>
                                            <span
                                                className={`text-sm ${
                                                    feature.included
                                                        ? 'text-gray-800 font-medium'
                                                        : 'text-gray-400 line-through'
                                                }`}
                                            >
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer info mobile */}
                <div className="mt-10 px-4">
                    <div className="bg-white border border-blue-200 p-4 rounded-2xl shadow-sm">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-blue-700 font-medium text-xs leading-relaxed">
                                Pour plus d'informations, contactez notre équipe commerciale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;