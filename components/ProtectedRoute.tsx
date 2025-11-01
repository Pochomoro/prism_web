'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectTo?: string;
}

export function ProtectedRoute({ children, redirectTo = '/' }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push(redirectTo);
        }
    }, [isAuthenticated, isLoading, router, redirectTo]);

    // Afficher un loader pendant la vérification
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
                    <p className="text-white mt-4 font-medium">Chargement...</p>
                </div>
            </div>
        );
    }

    // Si pas authentifié, ne rien afficher (la redirection est en cours)
    if (!isAuthenticated) {
        return null;
    }

    // Si authentifié, afficher le contenu
    return <>{children}</>;
}