import React, { createContext, useContext, useEffect, useState } from "react";
import { get } from "../components/helpers/api_helper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkModes"));
    const [isArabic, setIsArabic] = useState(localStorage.getItem("arabicMode"));

    // set token
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    let isLoggedIn = !!token

    // logout functionality 
    const logoutUser = () => {
        setToken("")
        return localStorage.removeItem("token");
    }

    // JWT Authentication - verify user
    const userAuthentication = async () => {
        try {
            const data = await get('/admin/auth');
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Function to toggle dark mode
    const toggleDarkMode = (darkMode = false) => {
        if (darkMode) {
            localStorage.setItem("darkMode", true)
        }
        setIsDarkMode(darkMode);
    };

    // Function to toggle eng mode
    const toggleArabic = (arabicMode = false) => {
        if (arabicMode) {
            localStorage.setItem("arabicMode", true)
        }
        setIsArabic(arabicMode);
    };

    useEffect(() => {
        userAuthentication()
    }, [])

    return (
        <AuthContext.Provider value={{ token, user, isLoggedIn, isDarkMode, isArabic, storeTokenInLS, logoutUser, toggleDarkMode, toggleArabic }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue;
}