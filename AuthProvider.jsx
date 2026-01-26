import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() =>
        JSON.parse(localStorage.getItem("currentUser"))
    );
    const [isAuthenticated, setIsAuthenticated] = useState(() =>
        !!localStorage.getItem("currentUser")
    );
    const hasPermission = (permission) => {
        return currentUser?.permissions?.includes(permission);
    };
    const login = (user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
        setIsAuthenticated(true);
    };
    const logout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider
            value={{ currentUser, isAuthenticated, hasPermission, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);