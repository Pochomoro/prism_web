import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from 'firebase/auth';

interface AuthState {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isLoading: true,

            setUser: (user) => set({ user, isLoading: false }),

            setLoading: (loading) => set({ isLoading: loading }),

            logout: () => set({ user: null, isLoading: false }),
        }),
        {
            name: 'auth-storage', // nom dans localStorage
            partialize: (state) => ({
                // On ne persiste que les infos essentielles
                user: state.user ? {
                    uid: state.user.uid,
                    email: state.user.email,
                    displayName: state.user.displayName,
                    photoURL: state.user.photoURL,
                } : null
            }),
        }
    )
);