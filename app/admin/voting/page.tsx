'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import {
    getVotingResults,
    getTotalVotes,
    getRoundWinner,
    getCurrentRound,
    getRoundDisplayName,
    initializeRound,
    closeRound
} from '@/services/votingServices';
import { Calendar, TrendingUp, Users, Award, Loader2, AlertCircle } from 'lucide-react';

// Liste des associations (à synchroniser avec la page Mission)
const ASSOCIATIONS = [
    { id: 1, name: "Le Refuge", logo: "🏳️‍🌈" },
    { id: 2, name: "SOS Homophobie", logo: "🤝" },
    { id: 3, name: "Transgender Europe", logo: "🏳️‍⚧️" },
    { id: 4, name: "Inter-LGBT", logo: "🌈" }
];

export default function AdminDashboard() {
    const { isAuthenticated, isLoading: authLoading } = useAuth();
    const router = useRouter();

    const [votingResults, setVotingResults] = useState<Record<number, number>>({});
    const [totalVotes, setTotalVotes] = useState(0);
    const [winner, setWinner] = useState<{ associationId: number; votes: number } | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isInitializing, setIsInitializing] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const currentRound = getCurrentRound();

    useEffect(() => {
        if (!authLoading && !isAuthenticated) {
            router.push('/');
        } else if (isAuthenticated) {
            loadDashboardData();
        }
    }, [isAuthenticated, authLoading, router]);

    const loadDashboardData = async () => {
        setIsLoading(true);
        try {
            const [results, total, roundWinner] = await Promise.all([
                getVotingResults(),
                getTotalVotes(),
                getRoundWinner()
            ]);

            setVotingResults(results);
            setTotalVotes(total);
            setWinner(roundWinner);
        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
            setError('Erreur lors du chargement des données');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInitializeRound = async () => {
        if (!confirm('Êtes-vous sûr de vouloir initialiser un nouveau round ?')) return;

        setIsInitializing(true);
        setError('');
        setSuccess('');

        try {
            await initializeRound();
            setSuccess('Round initialisé avec succès !');
            await loadDashboardData();
        } catch (error: any) {
            setError(error.message || 'Erreur lors de l\'initialisation du round');
        } finally {
            setIsInitializing(false);
        }
    };

    const handleCloseRound = async () => {
        if (!confirm('Êtes-vous sûr de vouloir clôturer ce round ? Cette action est irréversible.')) return;

        setIsClosing(true);
        setError('');
        setSuccess('');

        try {
            await closeRound();
            setSuccess('Round clôturé avec succès !');
            await loadDashboardData();
        } catch (error: any) {
            setError(error.message || 'Erreur lors de la clôture du round');
        } finally {
            setIsClosing(false);
        }
    };

    const getAssociationName = (id: number) => {
        return ASSOCIATIONS.find(a => a.id === id)?.name || 'Inconnue';
    };

    const getAssociationLogo = (id: number) => {
        return ASSOCIATIONS.find(a => a.id === id)?.logo || '❓';
    };

    const getVotePercentage = (votes: number) => {
        return totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
    };

    if (authLoading || isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-center text-white">
                    <Loader2 className="w-16 h-16 animate-spin mx-auto mb-4" />
                    <p className="text-lg">Chargement...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-purple-50">
            <NavBar />

            <div className="max-w-7xl mx-auto px-6 py-32">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-title font-bold text-slate-900 mb-4">
                        Dashboard Admin - Votes
                    </h1>
                    <p className="text-lg text-slate-600">
                        Round actuel : <span className="font-semibold text-purple-600">
                            {getRoundDisplayName(currentRound)}
                        </span>
                    </p>
                </div>

                {/* Messages */}
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                {success && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded-lg">
                        <p className="text-green-700">✅ {success}</p>
                    </div>
                )}

                {/* Actions Admin */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-title font-bold text-slate-900 mb-6">
                        Actions Administrateur
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={handleInitializeRound}
                            disabled={isInitializing}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isInitializing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Initialisation...
                                </>
                            ) : (
                                <>
                                    <Calendar className="w-5 h-5" />
                                    Initialiser un nouveau round
                                </>
                            )}
                        </button>

                        <button
                            onClick={handleCloseRound}
                            disabled={isClosing}
                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isClosing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Clôture...
                                </>
                            ) : (
                                <>
                                    <AlertCircle className="w-5 h-5" />
                                    Clôturer le round
                                </>
                            )}
                        </button>

                        <button
                            onClick={loadDashboardData}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                        >
                            🔄 Rafraîchir
                        </button>
                    </div>
                </div>

                {/* Statistiques Globales */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Total des votes</p>
                                <p className="text-3xl font-bold text-slate-900">{totalVotes}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Associations</p>
                                <p className="text-3xl font-bold text-slate-900">{ASSOCIATIONS.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                                <Award className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-600">Leader actuel</p>
                                <p className="text-xl font-bold text-slate-900">
                                    {winner ? getAssociationName(winner.associationId) : 'Aucun'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Résultats détaillés */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-title font-bold text-slate-900 mb-6">
                        Résultats du vote
                    </h2>

                    <div className="space-y-4">
                        {ASSOCIATIONS
                            .map(association => ({
                                ...association,
                                votes: votingResults[association.id] || 0,
                                percentage: getVotePercentage(votingResults[association.id] || 0)
                            }))
                            .sort((a, b) => b.votes - a.votes)
                            .map((association, index) => (
                                <div key={association.id} className="relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{association.logo}</span>
                                            <div>
                                                <h3 className="font-title font-semibold text-lg text-slate-900">
                                                    {association.name}
                                                    {index === 0 && association.votes > 0 && (
                                                        <span className="ml-2 text-yellow-500">👑</span>
                                                    )}
                                                </h3>
                                                <p className="text-sm text-slate-600">
                                                    {association.votes} votes ({association.percentage}%)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-purple-600">
                                                #{index + 1}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Barre de progression */}
                                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${
                                                index === 0
                                                    ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                                                    : 'bg-gradient-to-r from-slate-300 to-slate-400'
                                            }`}
                                            style={{ width: `${association.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {totalVotes === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">
                                Aucun vote enregistré pour le moment
                            </p>
                        </div>
                    )}
                </div>

                {/* Gagnant */}
                {winner && (
                    <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-2xl p-8 text-white text-center">
                        <div className="text-6xl mb-4">{getAssociationLogo(winner.associationId)}</div>
                        <h3 className="text-3xl font-title font-bold mb-2">
                            🏆 {getAssociationName(winner.associationId)}
                        </h3>
                        <p className="text-purple-100 text-lg">
                            En tête avec {winner.votes} votes
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}