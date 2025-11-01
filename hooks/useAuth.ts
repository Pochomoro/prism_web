import { useAuthStore } from '@/store/useAuthStore';

export const useAuth = () => {
    const { user, isLoading } = useAuthStore();

    return {
        user,
        isLoading,
        isAuthenticated: !!user,
        userId: user?.uid,
        userEmail: user?.email,
        userName: user?.displayName || user?.email?.split("@")[0] || "Utilisateur",
    };
};