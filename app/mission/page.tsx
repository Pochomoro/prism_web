'use client';

import { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import { Heart, Calendar, TrendingUp, Users, Check, ChevronRight, Sparkles } from 'lucide-react';
import Link from "next/link";

// Mock data - À remplacer par votre base de données
const CURRENT_MONTH_ASSOCIATIONS = [
    {
        id: 1,
        name: "Le Refuge",
        description: "Hébergement d'urgence et accompagnement des jeunes LGBTQ+ rejetés par leur famille",
        logo: "🏳️‍🌈",
        votes: 0,
        category: "Hébergement",
        impact: "2500+ jeunes accompagnés/an"
    },
    {
        id: 2,
        name: "SOS Homophobie",
        description: "Lutte contre les discriminations LGBT+ et soutien aux victimes",
        logo: "🤝",
        votes: 0,
        category: "Droits & Soutien",
        impact: "3800+ appels reçus/an"
    },
    {
        id: 3,
        name: "Transgender Europe",
        description: "Défense des droits des personnes transgenres en Europe",
        logo: "🏳️‍⚧️",
        votes: 0,
        category: "Droits Trans",
        impact: "200+ organisations membres"
    },
    {
        id: 4,
        name: "Inter-LGBT",
        description: "Coordination et visibilité des associations LGBTQI+ en France",
        logo: "🌈",
        votes: 0,
        category: "Coordination",
        impact: "60+ associations fédérées"
    }
];

const PAST_ASSOCIATIONS = [
    {
        month: "Octobre 2024",
        name: "Acceptess-T",
        amount: "€2,450",
        logo: "💜"
    },
    {
        month: "Septembre 2024",
        name: "Adheos",
        amount: "€2,180",
        logo: "🌟"
    },
    {
        month: "Août 2024",
        name: "Bi'Cause",
        amount: "€2,920",
        logo: "💖"
    }
];

const SUBSCRIPTION_TIERS = [
    { name: "Starter", percentage: 5, gradient: "from-purple-400 to-purple-500" },
    { name: "Observer", percentage: 6, gradient: "from-purple-500 to-purple-600" },
    { name: "Premium", percentage: 7, gradient: "from-purple-600 to-purple-700" }
];

export default function Mission() {
    const [selectedAssociation, setSelectedAssociation] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [associations, setAssociations] = useState(CURRENT_MONTH_ASSOCIATIONS);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Simuler la vérification si l'utilisateur a déjà voté ce mois
    useEffect(() => {
        const alreadyVoted = localStorage.getItem('voted_this_month') === new Date().getMonth().toString();
        setHasVoted(alreadyVoted);
    }, []);

    const handleVote = async (associationId) => {
        if (hasVoted) return;

        setIsSubmitting(true);

        // Simuler l'appel API
        setTimeout(() => {
            setSelectedAssociation(associationId);
            setHasVoted(true);
            setShowConfirmation(true);
            localStorage.setItem('voted_this_month', new Date().getMonth().toString());

            setAssociations(prev =>
                prev.map(a => a.id === associationId ? { ...a, votes: a.votes + 1 } : a)
            );

            setIsSubmitting(false);

            setTimeout(() => setShowConfirmation(false), 3000);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-purple-50">
            <NavBar />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
                    <div className="text-center text-white">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <Heart className="w-8 h-8 text-white" fill="white" />
                            </div>
                        </div>
                        <h1 className="font-title text-4xl md:text-5xl font-bold mb-6">
                            Notre Mission
                        </h1>
                        <p className="text-xl md:text-xl text-purple-100 max-w-3xl mx-auto">
                            Ensemble, soutenons les associations qui œuvrent chaque jour pour la communauté LGBTQ+
                        </p>
                    </div>
                </div>
            </div>

            {/* Confirmation de vote flottante */}
            {showConfirmation && (
                <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
                    <div className="bg-white rounded-2xl shadow-2xl border border-purple-200 px-6 py-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Vote enregistré !</p>
                            <p className="text-sm text-slate-600">Merci pour votre soutien 💜</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

                {/* Notre Engagement */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-purple-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-title font-semibold text-slate-900">
                            Notre Engagement
                        </h2>
                    </div>

                    <p className="text-slate-600 text-xl leading-relaxed mb-8">
                        Chez Prism, nous croyons en un monde plus inclusif. C'est pourquoi nous reversons une partie
                        de nos revenus d'abonnement aux associations LGBTQ+ qui font la différence. Chaque mois,
                        c'est <span className="font-semibold text-purple-600">vous qui choisissez</span> quelle association nous soutiendrons.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {SUBSCRIPTION_TIERS.map((tier) => (
                            <div
                                key={tier.name}
                                className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tier.gradient} rounded-xl mb-4`}>
                                    <span className="text-white text-xl font-bold">{tier.percentage}%</span>
                                </div>
                                <h3 className="text-xl font-title font-bold text-slate-900 mb-2">{tier.name}</h3>
                                <p className="text-slate-600">
                                    <span className="font-semibold">{tier.percentage}% de votre abonnement</span> reversé
                                    pour soutenir les associations
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Associations du mois */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Calendar className="w-8 h-8 text-purple-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-title font-semibold text-slate-900">
                                Associations du mois - {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                            </h2>
                        </div>
                        {hasVoted && (
                            <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                                <Check className="w-4 h-4" />
                                Vous avez voté
                            </div>
                        )}
                    </div>

                    {hasVoted && (
                        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-4 mb-8">
                            <p className="text-purple-900 font-medium">
                                ✨ Merci d'avoir participé ! Revenez le mois prochain pour voter à nouveau.
                            </p>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8">
                        {associations.map((association) => (
                            <div
                                key={association.id}
                                className={`
                  bg-white rounded-2xl shadow-lg p-8 transition-all
                  ${selectedAssociation === association.id
                                    ? 'border-t-4 border-purple-600 shadow-xl'
                                    : 'border-t-4 border-purple-200 hover:shadow-xl'
                                }
                  ${hasVoted && selectedAssociation !== association.id ? 'opacity-60' : ''}
                `}
                            >
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                                            {association.logo}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-title font-semibold text-slate-900">
                                                {association.name}
                                            </h3>
                                            {selectedAssociation === association.id && (
                                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                                    <Check className="w-5 h-5 text-white" />
                                                </div>
                                            )}
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-3">
                      {association.category}
                    </span>
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {association.description}
                                </p>

                                <div className="flex items-center gap-2 mb-6 text-sm text-slate-600">
                                    <TrendingUp className="w-4 h-4 text-purple-600" />
                                    <span className="font-medium">{association.impact}</span>
                                </div>

                                <button
                                    onClick={() => handleVote(association.id)}
                                    disabled={hasVoted || isSubmitting}
                                    className={`
                    w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2
                    ${hasVoted
                                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                                    }
                  `}
                                >
                                    {isSubmitting && selectedAssociation === association.id ? (
                                        <>
                                            <span className="animate-spin">⏳</span> Envoi en cours...
                                        </>
                                    ) : hasVoted && selectedAssociation === association.id ? (
                                        <>
                                            <Check className="w-5 h-5" /> Association soutenue
                                        </>
                                    ) : hasVoted ? (
                                        'Déjà voté ce mois'
                                    ) : (
                                        <>
                                            <Heart className="w-5 h-5" /> Soutenir cette association
                                        </>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Historique */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Users className="w-8 h-8 text-purple-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-title font-semibold text-slate-900">
                            Associations déjà soutenues
                        </h2>
                    </div>

                    <div className="space-y-4 mb-8">
                        {PAST_ASSOCIATIONS.map((past, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-slate-50 to-purple-50 border border-slate-200 hover:border-purple-300 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                                        {past.logo}
                                    </div>
                                    <div>
                                        <h4 className="font-title font-semibold text-lg text-slate-900">{past.name}</h4>
                                        <p className="text-sm text-slate-600">{past.month}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-purple-600">
                    {past.amount}
                  </span>
                                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 text-center border border-purple-200">
                        <p className="text-slate-700">
              <span className="font-bold text-purple-600 text-3xl block mb-2">
                €7,550
              </span>
                            <span className="text-lg">reversés aux associations depuis le lancement de Prism 💜</span>
                        </p>
                    </div>
                </div>

                {/* Comment ça marche */}
                <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden rounded-3xl p-8 md:p-12 text-black mb-20">
                    <h2 className="text-3xl md:text-4xl font-title font-semibold mb-8 text-center">
                        Comment ça fonctionne ?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">1️⃣</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-black font-title">Votez chaque mois</h3>
                            <p className="text-slate-600">
                                Choisissez parmi 4 associations celle que vous souhaitez soutenir. Un vote par utilisateur et par mois.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">2️⃣</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-black font-title">Nous comptons les votes</h3>
                            <p className="text-slate-600">
                                À la fin du mois, l'association ayant reçu le plus de votes est désignée gagnante.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">3️⃣</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-black font-title">Prism reverse les fonds</h3>
                            <p className="text-slate-600">
                                Nous reversons un pourcentage de nos abonnements à l'association gagnante du mois.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pourquoi c'est important */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
                    <h2 className="text-3xl md:text-4xl font-title font-semibold text-black mb-8 text-center">
                        Pourquoi c'est important
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Impact Concret</h3>
                                <p className="text-slate-600">
                                    Chaque euro reversé aide directement les associations à poursuivre leur mission et à soutenir la communauté LGBTQ+.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Engagement Communautaire</h3>
                                <p className="text-slate-600">
                                    En votant, vous participez activement à la vie de la communauté et montrez votre soutien aux causes qui vous tiennent à cœur.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Visibilité Accrue</h3>
                                <p className="text-slate-600">
                                    Les associations sélectionnées gagnent en visibilité auprès de notre communauté, leur permettant de toucher plus de personnes.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">4</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Solidarité Continue</h3>
                                <p className="text-slate-600">
                                    Mois après mois, nous construisons ensemble un mouvement de solidarité durable au sein de la communauté.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">5</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Transparence Totale</h3>
                                <p className="text-slate-600">
                                    Nous publions chaque mois les résultats des votes et les montants reversés pour une transparence maximale.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">6</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Valeurs Communes</h3>
                                <p className="text-slate-600">
                                    En soutenant ces associations, nous réaffirmons notre engagement pour l'égalité, la diversité et l'inclusion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-slate-50 to-purple-50 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black font-title mb-4">
                        Vous représentez une association ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Vous souhaitez que votre association soit présentée dans notre programme Mission ?
                    </p>
                    <Link
                        href="/contact#contactForm"
                        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 transition-colors shadow-lg inline-flex items-center gap-2 group"
                    >
                        Proposer votre association
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
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-down {
                    from {
                        transform: translate(-50%, -100%);
                        opacity: 0;
                    }
                    to {
                        transform: translate(-50%, 0);
                        opacity: 1;
                    }
                }
                .animate-slide-down {
                    animation: slide-down 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}