'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuthStore } from '@/store/useAuthStore';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { setUser, setLoading } = useAuthStore();

    useEffect(() => {
        // Écoute les changements d'état d'authentification
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        // Cleanup
        return () => unsubscribe();
    }, [setUser, setLoading]);

    return <>{children}</>;
}