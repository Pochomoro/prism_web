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
        <section className="relative min-h-screen w-full bg-white overflow-hidden flex justify-center">
            {/* Conteneur principal (grande carte autour) */}
            <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 p-10 w-full">
                {/* Titre principal */}
                <div className="flex justify-center mb-8">
                    <span className="px-6 py-3 bg-white text-purple-700 font-medium rounded-full text-sm">
                        Abonnements
                    </span>
                </div>
                <h2 className="font-title text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-14">
                    Choisissez celui qui vous correspond le mieux
                </h2>

                {/* Grille des abonnements */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl border transition-all duration-300 ${
                                plan.highlighted
                                    ? 'border-purple-500 shadow-lg scale-105'
                                    : 'border-gray-200 hover:shadow-md'
                            } bg-white`}
                        >
                            {/* En-tête */}
                            <div
                                className={`p-8 border-b ${
                                    plan.highlighted ? 'bg-purple-50 border-purple-100' : 'bg-white border-gray-100'
                                } rounded-t-3xl`}
                            >
                                <h3
                                    className={`text-3xl font-bold mb-4 ${
                                        plan.highlighted ? 'text-purple-700' : 'text-gray-900'
                                    }`}
                                >
                                    {plan.name}
                                </h3>
                                <div className="mb-2">
                  <span
                      className={`text-4xl font-bold ${
                          plan.highlighted ? 'text-purple-700' : 'text-gray-900'
                      }`}
                  >
                    {plan.price}
                  </span>
                                    {plan.subtitle && (
                                        <span
                                            className={`ml-1 text-sm ${
                                                plan.highlighted ? 'text-purple-600' : 'text-gray-600'
                                            }`}
                                        >
                      {plan.subtitle}
                    </span>
                                    )}
                                </div>
                                <p
                                    className={`text-sm ${
                                        plan.highlighted ? 'text-purple-700/80' : 'text-gray-600'
                                    }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Liste des fonctionnalités */}
                            <div className="p-8">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div
                                                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                                    feature.included ? 'bg-green-500' : 'bg-gray-300'
                                                }`}
                                            >
                                                {feature.included && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                            </div>
                                            <span
                                                className={`text-sm ${
                                                    feature.included
                                                        ? 'text-gray-800'
                                                        : 'text-gray-400 line-through'
                                                }`}
                                            >
                        {feature.name}
                      </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bouton */}
                                <button
                                    className={`w-full py-3.5 rounded-2xl font-semibold transition-all duration-300 ${
                                        plan.highlighted
                                            ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-md cursor-pointer'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 cursor-pointer'
                                    }`}
                                >
                                    Acheter
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
