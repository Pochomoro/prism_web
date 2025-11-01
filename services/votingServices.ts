import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    serverTimestamp,
    increment,
    writeBatch,
    runTransaction
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Format du round actuel (YYYY-MM)
export const getCurrentRound = (): string => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
};

// Récupérer le nom du mois pour l'affichage
export const getRoundDisplayName = (round: string): string => {
    const [year, month] = round.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
};

// Vérifier si l'utilisateur a déjà voté ce mois
export const hasUserVoted = async (userId: string, round?: string): Promise<boolean> => {
    const currentRound = round || getCurrentRound();

    try {
        const voteRef = doc(db, 'votes', `${currentRound}-${userId}`);
        const voteSnap = await getDoc(voteRef);

        return voteSnap.exists();
    } catch (error) {
        console.error('Erreur lors de la vérification du vote:', error);
        throw error;
    }
};

// Récupérer le vote de l'utilisateur pour ce round
export const getUserVote = async (userId: string, round?: string): Promise<number | null> => {
    const currentRound = round || getCurrentRound();

    try {
        const voteRef = doc(db, 'votes', `${currentRound}-${userId}`);
        const voteSnap = await getDoc(voteRef);

        if (voteSnap.exists()) {
            return voteSnap.data().associationId;
        }

        return null;
    } catch (error) {
        console.error('Erreur lors de la récupération du vote:', error);
        throw error;
    }
};

// Enregistrer un vote (avec transaction pour garantir l'atomicité)
export const submitVote = async (
    userId: string,
    associationId: number,
    round?: string
): Promise<void> => {
    const currentRound = round || getCurrentRound();
    const voteId = `${currentRound}-${userId}`;

    try {
        // Utilisation d'une transaction pour garantir l'atomicité
        await runTransaction(db, async (transaction) => {
            const voteRef = doc(db, 'votes', voteId);
            const resultRef = doc(db, 'voting-results', currentRound, 'associations', String(associationId));

            // Vérifier si l'utilisateur a déjà voté
            const voteSnap = await transaction.get(voteRef);
            if (voteSnap.exists()) {
                throw new Error('Vous avez déjà voté ce mois-ci');
            }

            // Enregistrer le vote
            transaction.set(voteRef, {
                userId,
                associationId,
                round: currentRound,
                timestamp: serverTimestamp(),
            });

            // Incrémenter le compteur de votes pour cette association
            transaction.set(resultRef, {
                votes: increment(1),
                lastUpdated: serverTimestamp()
            }, { merge: true });
        });

        console.log('✅ Vote enregistré avec succès');
    } catch (error) {
        console.error('❌ Erreur lors de l\'enregistrement du vote:', error);
        throw error;
    }
};

// Récupérer tous les résultats de vote pour un round
export const getVotingResults = async (round?: string): Promise<Record<number, number>> => {
    const currentRound = round || getCurrentRound();

    try {
        const resultsRef = collection(db, 'voting-results', currentRound, 'associations');
        const querySnapshot = await getDocs(resultsRef);

        const results: Record<number, number> = {};

        querySnapshot.forEach((doc) => {
            const associationId = parseInt(doc.id);
            const data = doc.data();
            results[associationId] = data.votes || 0;
        });

        return results;
    } catch (error) {
        console.error('Erreur lors de la récupération des résultats:', error);
        return {};
    }
};

// Récupérer le gagnant du round
export const getRoundWinner = async (round?: string): Promise<{ associationId: number; votes: number } | null> => {
    const results = await getVotingResults(round);

    if (Object.keys(results).length === 0) {
        return null;
    }

    let winnerId = 0;
    let maxVotes = 0;

    Object.entries(results).forEach(([id, votes]) => {
        if (votes > maxVotes) {
            maxVotes = votes;
            winnerId = parseInt(id);
        }
    });

    return winnerId > 0 ? { associationId: winnerId, votes: maxVotes } : null;
};

// Récupérer le nombre total de votes pour un round
export const getTotalVotes = async (round?: string): Promise<number> => {
    const results = await getVotingResults(round);
    return Object.values(results).reduce((sum, votes) => sum + votes, 0);
};

// Initialiser un nouveau round de vote (fonction admin - à utiliser avec précaution)
export const initializeRound = async (round?: string): Promise<void> => {
    const currentRound = round || getCurrentRound();

    try {
        const roundRef = doc(db, 'voting-rounds', currentRound);

        await setDoc(roundRef, {
            round: currentRound,
            status: 'active',
            startDate: serverTimestamp(),
            endDate: null,
            createdAt: serverTimestamp(),
        });

        console.log('✅ Round initialisé:', currentRound);
    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation du round:', error);
        throw error;
    }
};

// Clôturer un round de vote (fonction admin)
export const closeRound = async (round?: string): Promise<void> => {
    const currentRound = round || getCurrentRound();

    try {
        const roundRef = doc(db, 'voting-rounds', currentRound);

        await setDoc(roundRef, {
            status: 'closed',
            endDate: serverTimestamp(),
        }, { merge: true });

        console.log('✅ Round clôturé:', currentRound);
    } catch (error) {
        console.error('❌ Erreur lors de la clôture du round:', error);
        throw error;
    }
};

// Récupérer l'historique des rounds
export const getVotingHistory = async (): Promise<any[]> => {
    try {
        const roundsRef = collection(db, 'voting-rounds');
        const q = query(roundsRef, where('status', '==', 'closed'));
        const querySnapshot = await getDocs(q);

        const history: any[] = [];

        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            const winner = await getRoundWinner(doc.id);

            history.push({
                round: doc.id,
                displayName: getRoundDisplayName(doc.id),
                winner,
                totalVotes: await getTotalVotes(doc.id),
                ...data
            });
        }

        return history.sort((a, b) => b.round.localeCompare(a.round));
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'historique:', error);
        return [];
    }
};