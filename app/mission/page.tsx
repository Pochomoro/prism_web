'use client';

import { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import { Heart, Calendar, TrendingUp, Users, Check, ChevronRight, Sparkles, X, Loader2 } from 'lucide-react';
import Link from "next/link";
import { useAuth } from '@/hooks/useAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import {
    hasUserVoted,
    submitVote,
    getVotingResults,
    getCurrentRound,
    getRoundDisplayName
} from '@/services/votingServices';

// Associations disponibles pour ce mois
const CURRENT_MONTH_ASSOCIATIONS = [
    {
        id: 1,
        name: "Le Refuge",
        description: "Hébergement d'urgence et accompagnement des jeunes LGBTQ+ rejetés par leur famille",
        logo: "🏳️‍🌈",
        category: "Hébergement",
        impact: "2500+ jeunes accompagnés/an"
    },
    {
        id: 2,
        name: "SOS Homophobie",
        description: "Lutte contre les discriminations LGBT+ et soutien aux victimes",
        logo: "🤝",
        category: "Droits & Soutien",
        impact: "3800+ appels reçus/an"
    },
    {
        id: 3,
        name: "Transgender Europe",
        description: "Défense des droits des personnes transgenres en Europe",
        logo: "🏳️‍⚧️",
        category: "Droits Trans",
        impact: "200+ organisations membres"
    },
    {
        id: 4,
        name: "Inter-LGBT",
        description: "Coordination et visibilité des associations LGBTQI+ en France",
        logo: "🌈",
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
    // Auth state
    const { user, isAuthenticated, isLoading: authLoading } = useAuth();

    // Modal states
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Voting states
    const [selectedAssociation, setSelectedAssociation] = useState<number | null>(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [votingResults, setVotingResults] = useState<Record<number, number>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isLoadingVotes, setIsLoadingVotes] = useState(true);

    // Vérifier l'authentification et charger les données de vote
    useEffect(() => {
        if (!authLoading) {
            if (!isAuthenticated) {
                setShowLoginModal(true);
            } else {
                loadVotingData();
            }
        }
    }, [isAuthenticated, authLoading]);

    // Charger les données de vote
    const loadVotingData = async () => {
        if (!user) return;

        setIsLoadingVotes(true);
        try {
            // Vérifier si l'utilisateur a déjà voté
            const voted = await hasUserVoted(user.uid);
            setHasVoted(voted);

            // Si oui, récupérer son vote
            if (voted) {
                const { getUserVote } = await import('@/services/votingServices');
                const userVote = await getUserVote(user.uid);
                if (userVote) {
                    setSelectedAssociation(userVote);
                }
            }

            // Charger les résultats actuels
            const results = await getVotingResults();
            setVotingResults(results);
        } catch (error) {
            console.error('Erreur lors du chargement des votes:', error);
        } finally {
            setIsLoadingVotes(false);
        }
    };

    // Gérer la connexion
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');

        if (!loginEmail.trim() || !loginPassword) {
            setLoginError('Veuillez remplir tous les champs');
            return;
        }

        setIsLoggingIn(true);

        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            setShowLoginModal(false);
            setLoginEmail('');
            setLoginPassword('');
            // Les données seront chargées par le useEffect
        } catch (error: any) {
            console.error('Erreur de connexion:', error);

            switch (error.code) {
                case 'auth/invalid-email':
                    setLoginError('Adresse email invalide');
                    break;
                case 'auth/user-not-found':
                    setLoginError('Aucun compte trouvé avec cet email');
                    break;
                case 'auth/wrong-password':
                    setLoginError('Mot de passe incorrect');
                    break;
                case 'auth/invalid-credential':
                    setLoginError('Identifiants invalides');
                    break;
                default:
                    setLoginError('Erreur de connexion. Veuillez réessayer');
            }
        } finally {
            setIsLoggingIn(false);
        }
    };

    // Gérer le vote
    const handleVote = async (associationId: number) => {
        if (!user || hasVoted || isSubmitting) return;

        setIsSubmitting(true);

        try {
            await submitVote(user.uid, associationId);

            setSelectedAssociation(associationId);
            setHasVoted(true);
            setShowConfirmation(true);

            // Recharger les résultats
            const results = await getVotingResults();
            setVotingResults(results);

            setTimeout(() => setShowConfirmation(false), 3000);
        } catch (error: any) {
            console.error('Erreur lors du vote:', error);
            alert(error.message || 'Erreur lors de l\'enregistrement du vote');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Afficher un loader pendant le chargement de l'auth
    if (authLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-center text-white">
                    <Loader2 className="w-16 h-16 animate-spin mx-auto mb-4" />
                    <p className="text-lg">Chargement...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-purple-50">
            <NavBar />

            {/* Modal de Connexion */}
            {showLoginModal && !isAuthenticated && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/50 px-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up relative">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 relative">
                            <h2 className="text-3xl font-title font-bold text-white text-center">
                                Connexion Requise
                            </h2>
                            <p className="text-purple-100 text-center mt-2 text-sm">
                                Connectez-vous pour accéder à la page Mission
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleLogin} className="px-8 py-8 space-y-6">
                            {loginError && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span>{loginError}</span>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium text-sm font-title">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={loginEmail}
                                    onChange={(e) => {
                                        setLoginEmail(e.target.value);
                                        setLoginError('');
                                    }}
                                    placeholder="votre@email.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none disabled:bg-gray-100"
                                    disabled={isLoggingIn}
                                    autoComplete="email"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-gray-700 font-medium text-sm font-title">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) => {
                                        setLoginPassword(e.target.value);
                                        setLoginError('');
                                    }}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none disabled:bg-gray-100"
                                    disabled={isLoggingIn}
                                    autoComplete="current-password"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoggingIn}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-title font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {isLoggingIn ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Connexion en cours...</span>
                                    </>
                                ) : (
                                    "Se Connecter"
                                )}
                            </button>

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

            {/* Contenu principal - affiché uniquement si authentifié */}
            {isAuthenticated && (
                <>
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

                    {/* VERSION DESKTOP */}
                    <div className="hidden md:block">
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
                                    <p className="text-lg md:text-lg text-purple-100 max-w-3xl mx-auto">
                                        Ensemble, soutenons les associations qui œuvrent chaque jour pour la communauté LGBTQ+
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Desktop */}
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
                                            Associations du mois - {getRoundDisplayName(getCurrentRound())}
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

                                {isLoadingVotes ? (
                                    <div className="flex items-center justify-center py-20">
                                        <Loader2 className="w-12 h-12 animate-spin text-purple-600" />
                                    </div>
                                ) : (
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {CURRENT_MONTH_ASSOCIATIONS.map((association) => (
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

                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                                        <TrendingUp className="w-4 h-4 text-purple-600" />
                                                        <span className="font-medium">{association.impact}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Users className="w-4 h-4 text-purple-600" />
                                                        <span className="font-bold text-purple-600">
                                {votingResults[association.id] || 0} votes
                              </span>
                                                    </div>
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
                                                            <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
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
                                )}
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
                                    {[
                                        {
                                            num: "1",
                                            title: "Impact Concret",
                                            desc: "Chaque euro reversé aide directement les associations à poursuivre leur mission et à soutenir la communauté LGBTQ+."
                                        },
                                        {
                                            num: "2",
                                            title: "Engagement Communautaire",
                                            desc: "En votant, vous participez activement à la vie de la communauté et montrez votre soutien aux causes qui vous tiennent à cœur."
                                        },
                                        {
                                            num: "3",
                                            title: "Visibilité Accrue",
                                            desc: "Les associations sélectionnées gagnent en visibilité auprès de notre communauté, leur permettant de toucher plus de personnes."
                                        },
                                        {
                                            num: "4",
                                            title: "Solidarité Continue",
                                            desc: "Mois après mois, nous construisons ensemble un mouvement de solidarité durable au sein de la communauté."
                                        },
                                        {
                                            num: "5",
                                            title: "Transparence Totale",
                                            desc: "Nous publions chaque mois les résultats des votes et les montants reversés pour une transparence maximale."
                                        },
                                        {
                                            num: "6",
                                            title: "Valeurs Communes",
                                            desc: "En soutenant ces associations, nous réaffirmons notre engagement pour l'égalité, la diversité et l'inclusion."
                                        }
                                    ].map((item) => (
                                        <div key={item.num} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <span className="text-purple-600 font-bold">{item.num}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-black font-title mb-2">{item.title}</h3>
                                                <p className="text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
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
                                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* VERSION MOBILE - Simplifiée pour économiser des tokens */}
                    <div className="md:hidden px-4 py-10">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-title font-bold text-slate-900 mb-4">Notre Mission</h1>
                            <p className="text-slate-600">Soutenons ensemble les associations LGBTQ+</p>
                        </div>

                        {isLoadingVotes ? (
                            <div className="flex justify-center py-20">
                                <Loader2 className="w-12 h-12 animate-spin text-purple-600" />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {CURRENT_MONTH_ASSOCIATIONS.map((association) => (
                                    <div key={association.id} className="bg-white rounded-2xl shadow-lg p-5">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-xl">
                                                {association.logo}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-title font-semibold">{association.name}</h3>
                                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                  {association.category}
                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">{association.description}</p>
                                        <div className="flex items-center justify-between mb-3 text-xs text-slate-600">
                                            <span>{association.impact}</span>
                                            <span className="font-bold text-purple-600">
                                {votingResults[association.id] || 0} votes
                              </span>
                                        </div>
                                        <button
                                            onClick={() => handleVote(association.id)}
                                            disabled={hasVoted || isSubmitting}
                                            className={`w-full py-3 rounded-xl font-semibold text-sm ${
                                                hasVoted
                                                    ? 'bg-slate-100 text-slate-400'
                                                    : 'bg-gradient-to-r from-purple-600 to-purple-800 text-white'
                                            }`}
                                        >
                                            {hasVoted ? 'Déjà voté' : 'Soutenir'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}

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
                .animate-slide-up {
                    animation: slide-up 0.4s ease-out;
                }
            `}</style>
        </div>
    );
}