import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}
interface User {
    id: string;
    name: string;
    email: string;
    company?: string;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (email && password.length >= 6) {
            const newUser: User = {
                id: "1",
                email,
                name: email.split('@')[0],
                company: "Engineering Solutions Inc."
            };
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            setIsLoading(false);
            return true;
        }
        setIsLoading(false);
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
    const value = {
        user,
        login,
        logout,
        isLoading
    };
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};